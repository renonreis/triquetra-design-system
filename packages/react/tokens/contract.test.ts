import { readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { describe, expect, it } from 'vitest';
import { check } from '../scripts/schema-check.ts';
import schema from './contract.schema.json' with { type: 'json' };

type Tree = Record<string, unknown>;
const TOKENS = resolve(import.meta.dirname);
const root = schema as Tree;
const ref = (path: string): Tree => ({ $ref: `#/$defs/${path}` });

/** Every *.tokens.json under tokens/, recursively. */
function tokenFiles(dir = TOKENS): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const path = join(dir, e.name);
    if (e.isDirectory()) return tokenFiles(path);
    return e.name.endsWith('.tokens.json') ? [path] : [];
  });
}

/** Which contract file kind a path is, or null when it sits outside the contract's locations. */
function kindOf(file: string): 'primitive' | 'brand' | 'theme' | null {
  const parts = relative(TOKENS, file).split(sep);
  if (parts.length === 2 && parts[0] === 'primitives') return 'primitive';
  if (parts.length === 2 && parts[0] === 'brands') return 'brand';
  if (
    parts.length === 3 &&
    parts[0] === 'themes' &&
    /^(base|light|dark)\.tokens\.json$/.test(parts[2] ?? '')
  )
    return 'theme';
  return null;
}

/** Validates a parsed token file: structure, then each token's $value for its effective $type. */
function validate(kind: 'primitive' | 'brand' | 'theme', file: unknown): string[] {
  const errors = check(root, ref(`files/${kind}`), file);
  const walk = (node: Tree, at: string, inherited?: unknown) => {
    const type = node.$type ?? inherited;
    for (const [key, child] of Object.entries(node)) {
      if (key.startsWith('$') || typeof child !== 'object' || child === null) continue;
      const c = child as Tree;
      const where = `${at}.${key}`;
      if (!('$value' in c)) {
        walk(c, where, type);
        continue;
      }
      const own = c.$type ?? type;
      if (typeof own !== 'string') errors.push(`${where}: no $type (own or inherited)`);
      else if (own in (root.$defs as { value: Tree }).value)
        errors.push(...check(root, ref(`value/${own}`), c.$value, `${where}.$value`));
    }
  };
  if (typeof file === 'object' && file !== null) walk(file as Tree, '$');
  return errors;
}

describe('token contract (spec 0001)', () => {
  const files = tokenFiles();

  it('finds token files only in the contract locations', () => {
    expect(files.length).toBeGreaterThan(0);
    for (const f of files) expect(kindOf(f), relative(TOKENS, f)).not.toBeNull();
  });

  it.each(files.map((f) => [relative(TOKENS, f), f] as const))(
    '%s follows the contract',
    (_, f) => {
      const kind = kindOf(f);
      if (!kind) throw new Error('unknown location');
      expect(validate(kind, JSON.parse(readFileSync(f, 'utf8')))).toEqual([]);
    },
  );

  const space = (value: unknown, extra: Tree = {}) => ({
    space: { $type: 'dimension', '4': { $value: value, ...extra } },
  });

  it.each([
    ['an unknown $type', { space: { $type: 'size', '4': { $value: 1 } } }, /expected one of/],
    ['a dimension in em', space({ value: 1, unit: 'em' }), /expected one of \["px","rem"\]/],
    ['a malformed alias', space('{brand.color}x'), /does not match/],
    ['an unknown $ key', space({ value: 1, unit: 'rem' }, { $foo: true }), /unknown key "\$foo"/],
    [
      'a bad segment name',
      { space: { $type: 'dimension', Bg: { $value: { value: 1, unit: 'rem' } } } },
      /unknown key "Bg"/,
    ],
    ['a token with no type', { space: { '4': { $value: 1 } } }, /no \$type/],
    ['an unknown root group', { colour: {} }, /unknown key "colour"/],
  ])('rejects %s', (_, file, message) => {
    expect(validate('theme', file).join('\n')).toMatch(message);
  });

  it('fails on a schema keyword the checker does not support', () => {
    expect(() => check(root, { format: 'email' }, 'x')).toThrow(
      /Unsupported schema keyword "format"/,
    );
  });
});
