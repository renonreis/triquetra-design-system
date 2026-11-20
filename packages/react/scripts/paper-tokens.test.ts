import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  buildPaperPayload,
  diffPaper,
  hasDrift,
  parsePaperExport,
  type PaperToken,
  type SourceToken,
} from './paper-tokens.ts';

const ROOT = resolve(import.meta.dirname, '..');
const read = (path: string) => JSON.parse(readFileSync(join(ROOT, path), 'utf8')) as unknown;
const payload = read('src/styles/generated/paper-tokens.json') as PaperToken[];
const fixture = read('scripts/__fixtures__/paper-export.json');
const byName = new Map(payload.map((t) => [t.name, t]));

/** Token paths of a DTCG file, derived independently of the build. */
function paths(tree: Record<string, unknown>, prefix: string[] = []): string[][] {
  return Object.entries(tree).flatMap(([key, child]) => {
    if (key.startsWith('$') || typeof child !== 'object' || child === null) return [];
    const node = child as Record<string, unknown>;
    return '$value' in node ? [[...prefix, key]] : paths(node, [...prefix, key]);
  });
}
const css = (path: string[]) => `--tq-${path.join('-')}`;
const theme = (layer: string) =>
  paths(read(`tokens/themes/default/${layer}.tokens.json`) as Record<string, unknown>);

describe('Paper payload (spec 0001)', () => {
  it('has exactly the brand roles, base semantics and both color modes, with unique names', () => {
    const expected = [
      ...paths(read('tokens/brands/triquetra.tokens.json') as Record<string, unknown>).map(css),
      ...theme('base')
        .filter((p) => p[0] !== 'motion')
        .map(css),
      ...theme('light')
        .filter((p) => p[0] === 'color')
        .map(css),
      ...theme('dark')
        .filter((p) => p[0] === 'color')
        .map((p) => `${css(p)}-dark`),
    ];
    expect(payload).toHaveLength(204);
    expect(new Set(payload.map((t) => t.name)).size).toBe(payload.length);
    expect(payload.map((t) => t.name).toSorted()).toEqual(expected.toSorted());
  });

  it('keeps aliases to brand roles and semantics, and converts literals', () => {
    const value = (name: string) => byName.get(name)?.value;
    expect(value('--tq-color-bg-surface')).toBe('var(--tq-brand-color-neutral-0)');
    expect(value('--tq-color-bg-surface-dark')).toBe('var(--tq-brand-color-neutral-800)');
    expect(value('--tq-color-bg-overlay')).toBe('oklch(23% 0.009 260 / 50%)');
    expect(value('--tq-color-action-primary-bg')).toBe('var(--tq-brand-color-primary-900)');
    expect(value('--tq-color-action-primary-fg')).toBe('var(--tq-brand-color-neutral-0)');
    expect(value('--tq-color-action-primary-bg-dark')).toBe('var(--tq-brand-color-primary-0)');
    expect(value('--tq-font-family-heading')).toBe('var(--tq-brand-font-family-sans)');
    expect(value('--tq-brand-font-family-sans')).toBe('"Geist"');
    expect(value('--tq-radius-control')).toBe('var(--tq-brand-radius-control)');
    expect(value('--tq-brand-radius-control')).toBe('6px');
    expect(value('--tq-space-0')).toBe('0px');
    expect(value('--tq-space-4')).toBe('16px');
    expect(value('--tq-size-container-md')).toBe('448px');
    expect(value('--tq-font-weight-bold')).toBe(700);
    expect(value('--tq-font-line-height-tight')).toBe('125%');
  });

  it('sends no code only token and carries descriptions', () => {
    expect(payload.some((t) => /^--tq-(shadow|motion)-/.test(t.name))).toBe(false);
    expect(byName.get('--tq-color-bg-surface')?.description).toBe('Cards, inputs, panels.');
  });

  it('lists every alias target before the alias that uses it', () => {
    const index = new Map(payload.map((t, i) => [t.name, i]));
    for (const [i, t] of payload.entries()) {
      const target = /^var\((--[\w-]+)\)$/.exec(String(t.value))?.[1];
      if (target) expect(index.get(target), `${t.name} → ${target}`).toBeLessThan(i);
    }
  });

  const src = (cssName: string, extra: Partial<SourceToken> = {}): SourceToken => ({
    layer: 'base',
    path: ['space', cssName.split('-').at(-1) ?? 'x'],
    cssName,
    literal: { value: 1, unit: 'rem' },
    ...extra,
  });

  it('fails on duplicates, missing targets, cycles, long descriptions and unmapped paths', () => {
    expect(() => buildPaperPayload([src('--tq-space-1'), src('--tq-space-1')])).toThrow(
      /duplicate name/,
    );
    expect(() =>
      buildPaperPayload([
        src('--tq-space-1', { alias: { cssName: '--tq-space-9', layer: 'base' } }),
      ]),
    ).toThrow(/alias target --tq-space-9 is missing/);
    expect(() =>
      buildPaperPayload([
        src('--tq-space-1', { alias: { cssName: '--tq-space-2', layer: 'base' } }),
        src('--tq-space-2', { alias: { cssName: '--tq-space-1', layer: 'base' } }),
      ]),
    ).toThrow(/alias cycle/);
    expect(() =>
      buildPaperPayload([src('--tq-space-1', { description: 'x'.repeat(1025) })]),
    ).toThrow(/longer than 1024/);
    expect(() => buildPaperPayload([src('--tq-opacity-1', { path: ['opacity', '1'] })])).toThrow(
      /no Paper type/,
    ); // Paper collapses `--` in names, so the dark suffix is `-dark`: a code path ending in a `dark`
    // segment collides with a dark name and must fail the build.
    const color = { colorSpace: 'oklch', components: [0.5, 0, 0] };
    expect(() =>
      buildPaperPayload([
        src('--tq-color-bg-dark', {
          layer: 'light',
          path: ['color', 'bg', 'dark'],
          literal: color,
        }),
        src('--tq-color-bg', { layer: 'dark', path: ['color', 'bg'], literal: color }),
      ]),
    ).toThrow(/--tq-color-bg-dark: duplicate name/);
  });
});

describe('Paper diff (spec 0001)', () => {
  const actual = parsePaperExport(fixture);
  const expected: PaperToken[] = [
    { name: '--tq-brand-color-neutral-0', type: 'color', value: 'oklch(100% 0 260)' },
    // 0.0045 in code, 0.005 in Paper: within 0.001 of chroma.
    { name: '--tq-brand-color-neutral-100', type: 'color', value: 'oklch(96% 0.0045 260)' },
    // Hue 0.2 degrees apart.
    { name: '--tq-brand-color-neutral-900', type: 'color', value: 'oklch(23% 0.009 260.2)' },
    {
      name: '--tq-color-bg-surface',
      type: 'color',
      value: 'var(--tq-brand-color-neutral-0)',
      description: 'Cards, inputs, panels.',
    },
    {
      name: '--tq-color-bg-overlay',
      type: 'color',
      value: 'oklch(23% 0.009 260 / 50%)',
      description: 'Backdrop behind modal dialogs.',
    },
    {
      name: '--tq-color-action-primary-bg',
      type: 'color',
      value: 'var(--tq-brand-color-primary-900)',
    },
    {
      name: '--tq-font-family-body',
      type: 'fontFamily',
      value: 'var(--tq-brand-font-family-sans)',
    },
    { name: '--tq-font-weight-bold', type: 'fontWeight', value: 700 },
    { name: '--tq-font-line-height-snug', type: 'lineHeight', value: '137.5%' },
    { name: '--tq-space-0', type: 'spacing', value: '0px' },
    { name: '--tq-space-sixteen', type: 'spacing', value: '16px' },
    {
      name: '--tq-radius-control',
      type: 'spacing',
      value: '6px',
      description: 'Buttons, inputs, small controls.',
    },
  ];
  const diff = diffPaper(expected, actual);

  it('reads the real export shape and rejects anything else', () => {
    expect(actual.find((t) => t.name === '--tq-font-weight-bold')?.value).toBe('700');
    expect(() => parsePaperExport({ items: [] })).toThrow(/expected an object with `tokens`/);
    expect(() =>
      parsePaperExport({ tokens: [{ name: '--a', type: 'shadow', value: 'x' }] }),
    ).toThrow(/bad type/);
    expect(() =>
      parsePaperExport({
        tokens: [
          { name: '--a', type: 'color', value: 'red' },
          { name: '--a', type: 'color', value: 'red' },
        ],
      }),
    ).toThrow(/duplicate token/);
  });

  it('groups drift: missing, changed, type drift, extra, renames and ignored', () => {
    expect(diff.missing.map((t) => t.name)).toEqual(['--tq-space-0', '--tq-space-sixteen']);
    expect(diff.changed.map((c) => `${c.name}:${c.field}`)).toEqual([
      '--tq-color-action-primary-bg:value',
      '--tq-font-family-body:value',
    ]);
    expect(diff.typeDrift).toEqual([
      { name: '--tq-radius-control', from: 'radius', to: 'spacing' },
    ]);
    expect(diff.extra.map((t) => t.name)).toEqual(['--tq-space-4']);
    expect(diff.renames).toEqual([{ from: '--tq-space-4', to: '--tq-space-sixteen' }]);
    expect(diff.ignored).toEqual(['--untitled']);
    expect(hasDrift(diff)).toBe(true);
  });

  it('treats rounding within tolerance as equal', () => {
    const names = [...diff.changed, ...diff.typeDrift].map((c) => c.name);
    for (const name of [
      '--tq-brand-color-neutral-0',
      '--tq-brand-color-neutral-100',
      '--tq-brand-color-neutral-900',
      '--tq-font-weight-bold',
      '--tq-font-line-height-snug',
    ])
      expect(names).not.toContain(name);
  });

  const cli = (file: string) =>
    spawnSync(process.execPath, [join(ROOT, 'scripts/paper-tokens-diff.ts'), file], {
      encoding: 'utf8',
    }).status;

  it('exits 1 on drift, 0 on a matching export, 2 on a malformed file', () => {
    const dir = mkdtempSync(join(tmpdir(), 'paper-diff-'));
    const matching = join(dir, 'matching.json');
    const malformed = join(dir, 'malformed.json');
    writeFileSync(matching, JSON.stringify({ tokens: payload }));
    writeFileSync(malformed, '{"tokens": "nope"}');
    expect(cli(join(ROOT, 'scripts/__fixtures__/paper-export.json'))).toBe(1);
    expect(cli(matching)).toBe(0);
    expect(cli(malformed)).toBe(2);
  });
});
