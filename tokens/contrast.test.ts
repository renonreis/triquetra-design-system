import { parse, wcagContrast } from 'culori';
import { describe, expect, it } from 'vitest';
import resolved from '../src/styles/generated/tokens.json' with { type: 'json' };

type Entry = Record<string, { value: unknown; type: string }>;

/** WCAG 2.2: 4.5:1 for text (1.4.3), 3:1 for UI components and focus indicators (1.4.11). */
const TEXT = 4.5;
const UI = 3;

const pairs: [fg: string, bg: string, min: number][] = [
  ...['fg.default', 'fg.muted'].flatMap((fg) =>
    ['bg.canvas', 'bg.surface', 'bg.subtle'].map((bg): [string, string, number] => [fg, bg, TEXT]),
  ),
  ['fg.link', 'bg.canvas', TEXT],
  ['fg.link', 'bg.surface', TEXT],
  ['fg.inverse', 'bg.inverse', TEXT],
  ...['primary', 'secondary', 'danger'].flatMap((a) =>
    ['bg', 'bg-hover', 'bg-active'].map((bg): [string, string, number] => [
      `action.${a}.fg`,
      `action.${a}.${bg}`,
      TEXT,
    ]),
  ),
  ...['success', 'warning', 'danger', 'info'].map((s): [string, string, number] => [
    `status.${s}.fg`,
    `status.${s}.bg`,
    TEXT,
  ]),
  ['border.strong', 'bg.surface', UI],
  ['border.strong', 'bg.canvas', UI],
  ['border.focus', 'bg.canvas', UI],
  ['border.focus', 'bg.surface', UI],
  ['border.danger', 'bg.surface', UI],
];

const permutations = Object.entries(resolved as Record<string, Entry>);

describe.each(permutations)('contrast · %s', (_name, tokens) => {
  const color = (path: string) => {
    const token = tokens[`color.${path}`];
    if (!token) throw new Error(`Missing token color.${path}`);
    const parsed = parse(String(token.value));
    if (!parsed) throw new Error(`Cannot parse color.${path}: ${String(token.value)}`);
    return parsed;
  };

  it.each(pairs)('%s on %s ≥ %d:1', (fg, bg, min) => {
    expect(wcagContrast(color(fg), color(bg))).toBeGreaterThanOrEqual(min);
  });
});
