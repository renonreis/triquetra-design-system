/**
 * Paper token payload and diff (spec 0001). Pure functions, no I/O.
 *
 * The token source in `tokens/` is the source of truth. Paper receives a generated mirror of the
 * default brand and theme: brand roles, base semantics, light colors, and dark colors under the
 * same names plus `--dark` (Paper has no modes). Shadow and motion have no Paper type and stay in
 * code only.
 */
import { parse } from 'culori';

export const PAPER_TYPES = [
  'breakpoint',
  'color',
  'container',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'opacity',
  'radius',
  'spacing',
] as const;
export type PaperType = (typeof PAPER_TYPES)[number];

export type Layer = 'brand' | 'base' | 'light' | 'dark';
const LAYER_ORDER: Layer[] = ['brand', 'base', 'light', 'dark'];
const TYPE_ORDER: PaperType[] = [
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'spacing',
  'radius',
  'container',
];

/** One source token, already resolved to its immediate alias target or its terminal literal. */
export interface SourceToken {
  layer: Layer;
  /** Token path, e.g. `['color', 'bg', 'surface']` or `['brand', 'color', 'neutral', '0']`. */
  path: string[];
  /** CSS variable name in code, e.g. `--tq-color-bg-surface` (never with `--dark`). */
  cssName: string;
  description?: string;
  /** Immediate target when it is a brand role or a semantic token (it is in the payload too). */
  alias?: { cssName: string; layer: Layer };
  /** Terminal raw DTCG value when the token is a literal or points at a primitive. */
  literal?: unknown;
}

export interface PaperToken {
  name: string;
  type: PaperType;
  value: string | number;
  description?: string;
}

/** Groups with no Paper type. Kept in code only (technical debt until Paper supports them). */
export const CODE_ONLY_GROUPS = ['shadow', 'motion'];

export const isCodeOnly = (path: string[]) => CODE_ONLY_GROUPS.includes(path[0] ?? '');

/** Paper type for a token path, or `null` when the path has no mapping (a contract change). */
export function paperType(path: string[]): PaperType | null {
  const [group, kind] = path[0] === 'brand' ? path.slice(1) : path;
  if (group === 'color') return 'color';
  if (group === 'radius') return 'radius';
  if (group === 'space' && path[0] !== 'brand') return 'spacing';
  if (group === 'size' && kind === 'container') return 'container';
  if (group === 'font') {
    if (kind === 'family') return 'fontFamily';
    if (path[0] === 'brand') return null;
    if (kind === 'size') return 'fontSize';
    if (kind === 'weight') return 'fontWeight';
    if (kind === 'line-height') return 'lineHeight';
  }
  return null;
}

export const paperName = (cssName: string, layer: Layer) =>
  layer === 'dark' ? `${cssName}--dark` : cssName;

/** Formats a number with at most `decimals` decimals and no trailing zeros. */
const num = (n: number, decimals: number) => String(Number(n.toFixed(decimals)));

function toPx(value: unknown, name: string): string {
  const v = value as { value?: unknown; unit?: unknown } | null | undefined;
  if (typeof v?.value !== 'number' || (v.unit !== 'px' && v.unit !== 'rem')) {
    throw new Error(`${name}: expected a px or rem dimension, got ${JSON.stringify(value)}.`);
  }
  return `${num(v.unit === 'rem' ? v.value * 16 : v.value, 2)}px`;
}

function toOklch(value: unknown, name: string): string {
  const v = value as
    { colorSpace?: unknown; components?: unknown; alpha?: unknown } | null | undefined;
  const c = v?.components;
  if (
    v?.colorSpace !== 'oklch' ||
    !Array.isArray(c) ||
    c.length !== 3 ||
    !c.every((x) => typeof x === 'number')
  ) {
    throw new Error(`${name}: expected an OKLCH color, got ${JSON.stringify(value)}.`);
  }
  const [l, ch, h] = c as [number, number, number];
  const alpha = typeof v.alpha === 'number' && v.alpha < 1 ? ` / ${num(v.alpha * 100, 1)}%` : '';
  return `oklch(${num(l * 100, 1)}% ${num(ch, 3)} ${String(h)}${alpha})`;
}

function toFontFamily(value: unknown, name: string): string {
  const first = Array.isArray(value) ? (value[0] as unknown) : value;
  if (typeof first !== 'string' || first.length === 0) {
    throw new Error(`${name}: expected a font family, got ${JSON.stringify(value)}.`);
  }
  return `"${first.replaceAll('"', '\\"')}"`;
}

/** Converts a terminal raw DTCG value into Paper's value format for the given Paper type. */
export function convertLiteral(type: PaperType, value: unknown, name: string): string | number {
  switch (type) {
    case 'color':
      return toOklch(value, name);
    case 'spacing':
    case 'radius':
    case 'container':
    case 'fontSize':
      return toPx(value, name);
    case 'fontFamily':
      return toFontFamily(value, name);
    case 'fontWeight':
      if (typeof value !== 'number') throw new Error(`${name}: expected a numeric font weight.`);
      return value;
    case 'lineHeight':
      if (typeof value !== 'number') throw new Error(`${name}: expected a unitless line height.`);
      return `${num(value * 100, 1)}%`;
    default:
      throw new Error(`${name}: Paper type "${type}" has no conversion.`);
  }
}

export const MAX_DESCRIPTION = 1024;

/**
 * Builds the Paper payload in write order: every alias target before the alias that uses it
 * (brand, base, light, dark; then by alias depth, type and name). Throws on any contract error.
 */
export function buildPaperPayload(sources: SourceToken[]): PaperToken[] {
  const errors: string[] = [];
  const rows: { token: PaperToken; layer: Layer; target?: string }[] = [];
  const seen = new Set<string>();

  for (const src of sources) {
    if (isCodeOnly(src.path)) continue;
    const name = paperName(src.cssName, src.layer);
    const type = paperType(src.path);
    if (!type) {
      errors.push(`${name}: no Paper type for "${src.path.join('.')}".`);
      continue;
    }
    if (seen.has(name)) errors.push(`${name}: duplicate name.`);
    seen.add(name);
    if (src.description && src.description.length > MAX_DESCRIPTION) {
      errors.push(`${name}: description is longer than ${String(MAX_DESCRIPTION)} characters.`);
    }
    try {
      const target = src.alias ? paperName(src.alias.cssName, src.alias.layer) : undefined;
      const value = target ? `var(${target})` : convertLiteral(type, src.literal, name);
      rows.push({
        token: { name, type, value, ...(src.description ? { description: src.description } : {}) },
        layer: src.layer,
        ...(target ? { target } : {}),
      });
    } catch (error) {
      errors.push((error as Error).message);
    }
  }

  // Every alias target exists; no cycles. Depth = length of the alias chain inside the payload.
  const byName = new Map(rows.map((r) => [r.token.name, r]));
  const depth = new Map<string, number>();
  const depthOf = (name: string, trail: string[]): number => {
    const known = depth.get(name);
    if (known !== undefined) return known;
    if (trail.includes(name)) {
      errors.push(`${name}: alias cycle (${[...trail, name].join(' → ')}).`);
      return 0;
    }
    const row = byName.get(name);
    if (!row) return 0;
    let d = 0;
    if (row.target) {
      if (!byName.has(row.target)) errors.push(`${name}: alias target ${row.target} is missing.`);
      else d = depthOf(row.target, [...trail, name]) + 1;
    }
    depth.set(name, d);
    return d;
  };
  for (const r of rows) depthOf(r.token.name, []);

  if (errors.length > 0) {
    throw new Error(`Paper payload is invalid:\n${errors.map((e) => `  • ${e}`).join('\n')}`);
  }

  const key = (r: (typeof rows)[number]) =>
    [
      LAYER_ORDER.indexOf(r.layer),
      depth.get(r.token.name) ?? 0,
      TYPE_ORDER.indexOf(r.token.type),
    ] as const;
  return rows
    .toSorted((a, b) => {
      const [ka, kb] = [key(a), key(b)];
      for (const [i, k] of ka.entries()) if (k !== kb[i]) return k - (kb[i] ?? 0);
      return a.token.name < b.token.name ? -1 : a.token.name > b.token.name ? 1 : 0;
    })
    .map((r) => r.token);
}

// ───────────────────────────── diff ─────────────────────────────

/** Prefix of the tokens this contract owns. Anything else in Paper is ignored. */
export const MANAGED_PREFIX = '--tq-';

/** Parses a Paper `get_tokens` JSON export (`{ tokens: [{ name, type, value, description? }] }`). */
export function parsePaperExport(json: unknown): PaperToken[] {
  const tokens = (json as { tokens?: unknown } | null | undefined)?.tokens;
  if (!Array.isArray(tokens)) throw new Error('Paper export: expected an object with `tokens`.');
  const names = new Set<string>();
  return tokens.map((raw, i) => {
    const t = raw as Record<string, unknown> | null | undefined;
    const where = `Paper export: token ${String(i)}`;
    if (typeof t?.name !== 'string' || !t.name.startsWith('--'))
      throw new Error(`${where}: bad name.`);
    if (!PAPER_TYPES.includes(t.type as PaperType))
      throw new Error(`${where} (${t.name}): bad type.`);
    if (typeof t.value !== 'string' && typeof t.value !== 'number') {
      throw new Error(`${where} (${t.name}): bad value.`);
    }
    if (t.description !== undefined && typeof t.description !== 'string') {
      throw new Error(`${where} (${t.name}): bad description.`);
    }
    if (names.has(t.name)) throw new Error(`Paper export: duplicate token ${t.name}.`);
    names.add(t.name);
    return {
      name: t.name,
      type: t.type as PaperType,
      value: t.value,
      ...(t.description ? { description: t.description } : {}),
    };
  });
}

const aliasOf = (value: string | number) =>
  typeof value === 'string' ? /^var\(\s*(--[\w-]+)\s*\)$/.exec(value.trim())?.[1] : undefined;

const numberOf = (value: string | number, unit: string) => {
  if (typeof value === 'number') return value;
  const m = new RegExp(`^(-?\\d*\\.?\\d+)${unit}$`).exec(value.trim());
  return m ? Number(m[1]) : Number.NaN;
};

function sameColor(a: string, b: string): boolean {
  const [x, y] = [parse(a), parse(b)];
  if (x?.mode !== 'oklch' || y?.mode !== 'oklch') return a.trim() === b.trim();
  const hueMatters = x.c >= 0.0005 || y.c >= 0.0005;
  const dh = Math.abs((x.h ?? 0) - (y.h ?? 0)) % 360;
  return (
    Math.abs(x.l - y.l) <= 0.001 &&
    Math.abs(x.c - y.c) <= 0.001 + 1e-9 &&
    (!hueMatters || Math.min(dh, 360 - dh) <= 0.5) &&
    Math.abs((x.alpha ?? 1) - (y.alpha ?? 1)) <= 0.01
  );
}

/** Whether two Paper values are equal for a type: alias targets by name, literals numerically. */
export function sameValue(type: PaperType, a: string | number, b: string | number): boolean {
  const [aa, ab] = [aliasOf(a), aliasOf(b)];
  if (aa || ab) return aa === ab;
  switch (type) {
    case 'color':
      return sameColor(String(a), String(b));
    case 'spacing':
    case 'radius':
    case 'container':
    case 'fontSize':
    case 'breakpoint':
      return Math.abs(numberOf(a, 'px') - numberOf(b, 'px')) <= 0.01;
    case 'lineHeight':
      return Math.abs(numberOf(a, '%') - numberOf(b, '%')) <= 0.05;
    case 'fontWeight':
      return Number(a) === Number(b);
    case 'fontFamily': {
      const clean = (v: string | number) =>
        String(v)
          .trim()
          .replace(/^["']|["']$/g, '');
      return clean(a) === clean(b);
    }
    default:
      return String(a).trim() === String(b).trim();
  }
}

export interface PaperDiff {
  missing: PaperToken[];
  changed: { name: string; field: 'value' | 'description'; from: unknown; to: unknown }[];
  typeDrift: { name: string; from: PaperType; to: PaperType }[];
  extra: PaperToken[];
  renames: { from: string; to: string }[];
  ignored: string[];
}

export const hasDrift = (d: PaperDiff) =>
  d.missing.length + d.changed.length + d.typeDrift.length + d.extra.length > 0;

/** Compares the expected payload with what Paper has. Everything is sorted by name. */
export function diffPaper(expected: PaperToken[], actual: PaperToken[]): PaperDiff {
  const byName = <T extends { name: string }>(a: T, b: T) => (a.name < b.name ? -1 : 1);
  const have = new Map(actual.map((t) => [t.name, t]));
  const want = new Map(expected.map((t) => [t.name, t]));
  const diff: PaperDiff = {
    missing: [],
    changed: [],
    typeDrift: [],
    extra: [],
    renames: [],
    ignored: [],
  };

  for (const e of [...expected].sort(byName)) {
    const a = have.get(e.name);
    if (!a) {
      diff.missing.push(e);
      continue;
    }
    if (a.type !== e.type) {
      diff.typeDrift.push({ name: e.name, from: a.type, to: e.type });
      continue;
    }
    if (!sameValue(e.type, a.value, e.value)) {
      diff.changed.push({ name: e.name, field: 'value', from: a.value, to: e.value });
    }
    if ((a.description ?? '').trim() !== (e.description ?? '').trim()) {
      diff.changed.push({
        name: e.name,
        field: 'description',
        from: a.description,
        to: e.description,
      });
    }
  }
  for (const a of [...actual].sort(byName)) {
    if (!a.name.startsWith(MANAGED_PREFIX)) diff.ignored.push(a.name);
    else if (!want.has(a.name)) diff.extra.push(a);
  }
  for (const m of diff.missing) {
    for (const x of diff.extra) {
      if (x.type === m.type && sameValue(m.type, x.value, m.value)) {
        diff.renames.push({ from: x.name, to: m.name });
      }
    }
  }
  return diff;
}
