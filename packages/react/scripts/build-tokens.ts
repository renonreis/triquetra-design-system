/**
 * Builds the Triquetra design tokens (DTCG 2025.10) into CSS.
 *
 * Hierarchy: Brand → Theme → Mode.
 *   tokens/primitives/*.tokens.json      raw values, never emitted as CSS variables
 *   tokens/brands/<brand>.tokens.json    brand roles        → `--tq-brand-*`, scoped by [data-brand]
 *   tokens/themes/<theme>/base.tokens.json   semantics that do not depend on the mode
 *   tokens/themes/<theme>/<mode>.tokens.json semantics per mode → scoped by [data-theme] / [data-mode]
 *
 * Semantic tokens reference brand roles, so they are emitted as `var(--tq-brand-…)`. Brands and
 * theme × mode blocks combine at runtime without generating every permutation.
 * A non-default theme only declares overrides on top of the `default` theme.
 *
 * Outputs (src/styles/generated/, git-ignored):
 *   tokens.css   CSS custom properties
 *   theme.css    Tailwind v4 `@theme` mapping semantic tokens to utilities
 *   tokens.json  resolved values per brand/theme/mode (docs and tests)
 *   paper-tokens.json  Paper payload for the default brand and theme (spec 0001)
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join, relative, resolve } from 'node:path';
import StyleDictionary from 'style-dictionary';
import type { Config, TransformedToken } from 'style-dictionary/types';
import { formattedVariables, getReferences, usesReferences } from 'style-dictionary/utils';
import { buildPaperPayload, isCodeOnly, type Layer, type SourceToken } from './paper-tokens.ts';

const ROOT = resolve(import.meta.dirname, '..');
const TOKENS = join(ROOT, 'tokens');
const OUT = join(ROOT, 'src/styles/generated');
const PREFIX = 'tq';

export const DEFAULT_BRAND = 'triquetra';
export const DEFAULT_THEME = 'default';
export const MODES = ['light', 'dark'] as const;
export type Mode = (typeof MODES)[number];

const PRIMITIVES = readdirSync(join(TOKENS, 'primitives'))
  .filter((f) => f.endsWith('.tokens.json'))
  .map((f) => join(TOKENS, 'primitives', f));

const BRANDS = readdirSync(join(TOKENS, 'brands'))
  .filter((f) => f.endsWith('.tokens.json'))
  .map((f) => basename(f, '.tokens.json'));

const THEMES = readdirSync(join(TOKENS, 'themes'), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const brandFile = (brand: string) => join(TOKENS, 'brands', `${brand}.tokens.json`);
const themeFile = (theme: string, layer: 'base' | Mode) =>
  join(TOKENS, 'themes', theme, `${layer}.tokens.json`);

// ───────────────────────────── validation ─────────────────────────────

type TokenTree = Record<string, unknown>;
const errors: string[] = [];

function readJson(file: string): TokenTree {
  return JSON.parse(readFileSync(file, 'utf8')) as TokenTree;
}

/** Lists token paths (`a.b.c`) with their inherited `$type`. */
function tokenPaths(tree: TokenTree, prefix: string[] = [], type?: string): Map<string, string> {
  const out = new Map<string, string>();
  const groupType = typeof tree.$type === 'string' ? tree.$type : type;
  for (const [key, child] of Object.entries(tree)) {
    if (key.startsWith('$') || typeof child !== 'object' || child === null) continue;
    const node = child as TokenTree;
    const path = [...prefix, key];
    if ('$value' in node) {
      out.set(path.join('.'), typeof node.$type === 'string' ? node.$type : (groupType ?? ''));
    } else {
      for (const [p, t] of tokenPaths(node, path, groupType)) out.set(p, t);
    }
  }
  return out;
}

function collectAliases(tree: TokenTree, prefix: string[] = []): [string, string][] {
  const out: [string, string][] = [];
  for (const [key, child] of Object.entries(tree)) {
    if (key.startsWith('$') || typeof child !== 'object' || child === null) continue;
    const node = child as TokenTree;
    const path = [...prefix, key].join('.');
    if ('$value' in node) {
      if (typeof node.$value === 'string' && node.$value.startsWith('{')) {
        out.push([path, node.$value.slice(1, -1)]);
      }
    } else {
      out.push(...collectAliases(node, [...prefix, key]));
    }
  }
  return out;
}

function validate() {
  if (!BRANDS.includes(DEFAULT_BRAND)) errors.push(`Default brand "${DEFAULT_BRAND}" is missing.`);
  if (!THEMES.includes(DEFAULT_THEME)) errors.push(`Default theme "${DEFAULT_THEME}" is missing.`);

  // Every brand defines the same roles as the default brand.
  const reference = tokenPaths(readJson(brandFile(DEFAULT_BRAND)));
  for (const brand of BRANDS) {
    const paths = tokenPaths(readJson(brandFile(brand)));
    for (const p of reference.keys())
      if (!paths.has(p)) errors.push(`Brand "${brand}" is missing "${p}".`);
    for (const p of paths.keys())
      if (!reference.has(p))
        errors.push(`Brand "${brand}" defines "${p}", unknown to "${DEFAULT_BRAND}".`);
  }

  for (const theme of THEMES) {
    // Light and dark are always in parity.
    const [light, dark] = MODES.map((m) =>
      existsSync(themeFile(theme, m)) ? tokenPaths(readJson(themeFile(theme, m))) : null,
    );
    if (theme === DEFAULT_THEME && (!light || !dark)) {
      errors.push(`Theme "${theme}" needs both light.tokens.json and dark.tokens.json.`);
    }
    if (light && dark) {
      for (const p of light.keys())
        if (!dark.has(p)) errors.push(`Theme "${theme}": "${p}" exists in light but not in dark.`);
      for (const p of dark.keys())
        if (!light.has(p)) errors.push(`Theme "${theme}": "${p}" exists in dark but not in light.`);
    } else if (light ?? dark) {
      errors.push(`Theme "${theme}" defines one mode file without the other.`);
    }

    // Semantic colors go through brand roles, never straight to primitives.
    for (const layer of ['base', ...MODES] as const) {
      const file = themeFile(theme, layer);
      if (!existsSync(file)) continue;
      const tree = readJson(file);
      const types = tokenPaths(tree);
      for (const [path, target] of collectAliases(tree)) {
        if (
          types.get(path) === 'color' &&
          !target.startsWith('brand.') &&
          !target.startsWith('color.')
        ) {
          errors.push(
            `${relative(ROOT, file)}: "${path}" must reference a brand role, not "{${target}}".`,
          );
        }
        if (types.get(path) === 'color' && target.startsWith('color.') && !types.has(target)) {
          errors.push(
            `${relative(ROOT, file)}: "${path}" references the primitive "{${target}}". Use a brand role.`,
          );
        }
      }
    }
  }
}

// ───────────────────────────── style dictionary ─────────────────────────────

const transforms = [
  ...(StyleDictionary.hooks.transformGroups.css ?? []).filter((t) => t !== 'color/css'),
  'color/oklch',
];

const isPrimitive = (token: TransformedToken) => token.filePath.includes('/tokens/primitives/');

async function transformed(include: string[], source: string[]) {
  const config: Config = {
    log: { verbosity: 'silent', warnings: 'disabled' },
    usesDtcg: true,
    include,
    source,
    platforms: { css: { prefix: PREFIX, transforms } },
  };
  const sd = new StyleDictionary(config);
  await sd.hasInitialized;
  return sd.getPlatformTokens('css');
}

type Dictionary = Awaited<ReturnType<typeof transformed>>;

/** CSS declarations for the tokens coming from `source`. References to non-primitives stay `var()`. */
function declarations(dictionary: Dictionary, keepReferences: boolean): string {
  const tokens = dictionary.allTokens.filter((t) => t.isSource);
  return formattedVariables({
    format: 'css',
    dictionary: { ...dictionary, allTokens: tokens },
    usesDtcg: true,
    formatting: { indentation: '  ' },
    outputReferences: keepReferences
      ? (token, { dictionary: d }) => {
          const original = token.original.$value as string | Record<string, unknown>;
          if (!usesReferences(original)) return false;
          return getReferences(original, d.tokens, {
            usesDtcg: true,
            unfilteredTokens: d.unfilteredTokens,
          }).every((ref) => !isPrimitive(ref));
        }
      : false,
  });
}

/** The immediate reference of a token, or `undefined` when its value is a literal. */
function referenceOf(token: TransformedToken, d: Dictionary): TransformedToken | undefined {
  const original = token.original.$value as unknown;
  if (!usesReferences(original)) return undefined;
  const refs = getReferences(original as string, d.tokens, {
    usesDtcg: true,
    unfilteredTokens: d.unfilteredTokens,
  });
  const [ref] = refs;
  if (refs.length !== 1 || !ref) {
    throw new Error(`${token.path.join('.')}: expected exactly one reference.`);
  }
  return ref;
}

/** Source tokens of one layer for the Paper payload: immediate alias target or terminal literal. */
function paperSources(d: Dictionary, layer: Layer): SourceToken[] {
  const layerOf = (ref: TransformedToken): Layer =>
    ref.filePath.includes('/tokens/brands/')
      ? 'brand'
      : ref.filePath.endsWith('base.tokens.json')
        ? 'base'
        : layer;
  return d.allTokens
    .filter((t) => t.isSource && !isCodeOnly(t.path))
    .map((t) => {
      const src: SourceToken = {
        layer,
        path: t.path,
        cssName: `--${t.name}`,
        ...(t.$description ? { description: t.$description } : {}),
      };
      let ref = referenceOf(t, d);
      if (ref && !isPrimitive(ref)) {
        return { ...src, alias: { cssName: `--${ref.name}`, layer: layerOf(ref) } };
      }
      let literal = t.original.$value as unknown;
      while (ref) {
        literal = ref.original.$value;
        ref = referenceOf(ref, d);
      }
      return { ...src, literal };
    });
}

const block = (selectors: string[], body: string, extra = '') =>
  `${selectors.join(',\n')} {\n${extra}${body}\n}\n`;

// ───────────────────────────── build ─────────────────────────────

async function build() {
  validate();
  if (errors.length > 0) {
    console.error(`\n✖ Token validation failed:\n${errors.map((e) => `  • ${e}`).join('\n')}\n`);
    process.exit(1);
  }

  const css: string[] = [`/* Generated by scripts/build-tokens.ts. Do not edit. */\n`];
  const semanticNames = new Map<string, TransformedToken>();
  const paper: SourceToken[] = [];

  // Brand layers: resolved values.
  for (const brand of BRANDS) {
    const d = await transformed(PRIMITIVES, [brandFile(brand)]);
    const selectors = [`[data-brand="${brand}"]`];
    if (brand === DEFAULT_BRAND) selectors.unshift(':root');
    css.push(`/* brand: ${brand} */\n${block(selectors, declarations(d, false))}`);
    if (brand === DEFAULT_BRAND) paper.push(...paperSources(d, 'brand'));
  }

  // Theme × mode layers: semantic tokens, referencing brand variables.
  const base = [...PRIMITIVES, brandFile(DEFAULT_BRAND)];
  const ordered = [DEFAULT_THEME, ...THEMES.filter((t) => t !== DEFAULT_THEME)];
  for (const theme of ordered) {
    const isDefault = theme === DEFAULT_THEME;
    const inherited = isDefault
      ? []
      : [themeFile(DEFAULT_THEME, 'base'), themeFile(DEFAULT_THEME, 'light')];
    const t = `[data-theme="${theme}"]`;

    const baseFile = themeFile(theme, 'base');
    if (existsSync(baseFile)) {
      const d = await transformed([...base, ...inherited], [baseFile]);
      const selectors = isDefault ? [':root', t] : [t];
      css.push(`/* theme: ${theme} */\n${block(selectors, declarations(d, true))}`);
      for (const tok of d.allTokens)
        if (tok.isSource && isDefault) semanticNames.set(tok.name, tok);
      if (isDefault) paper.push(...paperSources(d, 'base'));
    }

    for (const mode of MODES) {
      const file = themeFile(theme, mode);
      if (!existsSync(file)) continue;
      const inheritedMode = isDefault
        ? []
        : [themeFile(DEFAULT_THEME, 'base'), themeFile(DEFAULT_THEME, mode)];
      const d = await transformed(
        [...base, ...inheritedMode, ...(isDefault ? [themeFile(theme, 'base')] : [])],
        [file],
      );
      if (isDefault) {
        for (const tok of d.allTokens) if (tok.isSource) semanticNames.set(tok.name, tok);
        paper.push(...paperSources(d, mode));
      }
      const body = declarations(d, true);
      const scheme = `  color-scheme: ${mode};\n`;
      const m = `[data-mode="${mode}"]`;
      const explicit = isDefault ? [m] : [`${t}${m}`, `${t} ${m}`];
      const implicit = isDefault ? [':root:not([data-mode])'] : [`${t}:not([data-mode])`];
      if (mode === 'light') {
        css.push(
          `/* theme: ${theme} · mode: light */\n${block([...implicit, ...explicit], body, scheme)}`,
        );
      } else {
        css.push(`/* theme: ${theme} · mode: dark */\n${block(explicit, body, scheme)}`);
        css.push(
          `@media (prefers-color-scheme: dark) {\n${block(implicit, body, scheme).replace(/^/gm, '  ').trimEnd()}\n}\n`,
        );
      }
    }
  }

  mkdirSync(OUT, { recursive: true });
  writeFileSync(join(OUT, 'tokens.css'), css.join('\n'));
  writeFileSync(join(OUT, 'theme.css'), tailwindTheme([...semanticNames.values()]));
  writeFileSync(join(OUT, 'tokens.json'), `${JSON.stringify(await resolvedValues(), null, 2)}\n`);
  writeFileSync(
    join(OUT, 'paper-tokens.json'),
    `${JSON.stringify(buildPaperPayload(paper), null, 2)}\n`,
  );
  console.log(
    `✔ Tokens built: ${String(BRANDS.length)} brand(s), ${String(THEMES.length)} theme(s), ${String(MODES.length)} modes → ${relative(ROOT, OUT)}/`,
  );
}

/** Tailwind v4 theme: disables the default theme and exposes semantic tokens only. */
function tailwindTheme(tokens: TransformedToken[]): string {
  const lines: string[] = [];
  const v = (t: TransformedToken) => `var(--${t.name})`;
  for (const t of tokens) {
    const [group, ...rest] = t.path;
    const key = rest.join('-');
    if (group === 'color') lines.push(`  --color-${key}: ${v(t)};`);
    else if (group === 'shadow') lines.push(`  --shadow-${key}: ${v(t)};`);
    else if (group === 'radius') lines.push(`  --radius-${key}: ${v(t)};`);
    else if (group === 'space') lines.push(`  --spacing-${key}: ${v(t)};`);
    else if (group === 'size' && rest[0] === 'container')
      lines.push(`  --container-${rest.slice(1).join('-')}: ${v(t)};`);
    else if (group === 'font') {
      const [kind, ...name] = rest;
      const n = name.join('-');
      if (kind === 'family') lines.push(`  --font-${n}: ${v(t)};`);
      if (kind === 'weight') lines.push(`  --font-weight-${n}: ${v(t)};`);
      if (kind === 'size') lines.push(`  --text-${n}: ${v(t)};`);
      if (kind === 'line-height') lines.push(`  --leading-${n}: ${v(t)};`);
    } else if (group === 'motion' && rest[0] === 'easing') {
      lines.push(`  --ease-${rest.slice(1).join('-')}: ${v(t)};`);
    }
  }
  return `/* Generated by scripts/build-tokens.ts. Do not edit. */

/* Only Triquetra semantic tokens are available as utilities. */
@theme {
  --*: initial;
  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;
  --animate-spin: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}

@theme inline {
  --default-font-family: var(--${PREFIX}-font-family-body);
  --default-mono-font-family: var(--${PREFIX}-font-family-mono);
  --default-transition-duration: var(--${PREFIX}-motion-duration-normal);
  --default-transition-timing-function: var(--${PREFIX}-motion-easing-standard);
${lines.join('\n')}
}
`;
}

/** Fully resolved values for every brand × theme × mode (used by docs and contrast tests). */
async function resolvedValues() {
  const out: Record<
    string,
    Record<string, { value: unknown; type: string; description?: string }>
  > = {};
  for (const brand of BRANDS) {
    for (const theme of THEMES) {
      for (const mode of MODES) {
        const layers = [themeFile(DEFAULT_THEME, 'base'), themeFile(DEFAULT_THEME, mode)];
        if (theme !== DEFAULT_THEME) layers.push(themeFile(theme, 'base'), themeFile(theme, mode));
        const d = await transformed(
          [...PRIMITIVES, brandFile(brand)],
          layers.filter((f) => existsSync(f)),
        );
        const entry: (typeof out)[string] = {};
        for (const t of d.allTokens) {
          if (!t.isSource) continue;
          entry[t.path.join('.')] = {
            value: t.$value,
            type: String(t.$type),
            ...(t.$description ? { description: t.$description } : {}),
          };
        }
        out[`${brand}/${theme}/${mode}`] = entry;
      }
    }
  }
  return out;
}

await build();
