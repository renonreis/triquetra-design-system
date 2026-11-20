/**
 * A small JSON Schema 2020-12 checker for the token contract (spec 0001). It supports only the
 * keywords `tokens/contract.schema.json` uses and fails on any other keyword, so the schema
 * cannot silently grow a rule nobody enforces. No dependency.
 */

type Schema = Record<string, unknown>;

const ANNOTATIONS = new Set(['$schema', '$id', 'title', 'description', '$comment', '$defs']);
const KEYWORDS = new Set([
  'type',
  'properties',
  'patternProperties',
  'additionalProperties',
  'required',
  '$ref',
  'anyOf',
  'enum',
  'const',
  'items',
  'prefixItems',
  'minItems',
  'maxItems',
  'minimum',
  'maximum',
  'minLength',
  'pattern',
]);

const typeOf = (v: unknown) =>
  v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v === 'number' ? 'number' : typeof v;

function resolveRef(root: Schema, ref: string): Schema {
  if (!ref.startsWith('#/')) throw new Error(`Unsupported $ref "${ref}".`);
  let node: unknown = root;
  for (const part of ref.slice(2).split('/')) {
    node = (node as Record<string, unknown> | undefined)?.[part];
  }
  if (typeof node !== 'object' || node === null) throw new Error(`Unresolved $ref "${ref}".`);
  return node as Schema;
}

/** Returns the list of errors (empty when `value` matches `schema`). */
export function check(root: Schema, schema: Schema, value: unknown, at = '$'): string[] {
  for (const key of Object.keys(schema)) {
    if (!KEYWORDS.has(key) && !ANNOTATIONS.has(key)) {
      throw new Error(`Unsupported schema keyword "${key}" at ${at}.`);
    }
  }
  const errors: string[] = [];
  const fail = (message: string) => errors.push(`${at}: ${message}`);
  const t = typeOf(value);

  if (typeof schema.$ref === 'string')
    errors.push(...check(root, resolveRef(root, schema.$ref), value, at));
  if (Array.isArray(schema.anyOf)) {
    const branches = (schema.anyOf as Schema[]).map((s) => check(root, s, value, at));
    if (!branches.some((b) => b.length === 0)) {
      // Report the branch that got furthest: a type mismatch at this level counts as worst.
      const score = (b: string[]) =>
        b.length +
        (b.some((e) => e.startsWith(`${at}: expected `) && e.includes(', got ')) ? 1000 : 0);
      const best = branches.reduce((a, b) => (score(b) < score(a) ? b : a));
      errors.push(...best);
    }
  }
  if (schema.type !== undefined && schema.type !== t) {
    if (!(schema.type === 'integer' && Number.isInteger(value)))
      fail(`expected ${JSON.stringify(schema.type)}, got ${t}`);
    return errors;
  }
  if ('const' in schema && value !== schema.const) fail(`expected ${JSON.stringify(schema.const)}`);
  if (Array.isArray(schema.enum) && !schema.enum.includes(value)) {
    fail(`expected one of ${JSON.stringify(schema.enum)}, got ${JSON.stringify(value)}`);
  }
  if (typeof value === 'number') {
    if (typeof schema.minimum === 'number' && value < schema.minimum)
      fail(`below ${String(schema.minimum)}`);
    if (typeof schema.maximum === 'number' && value > schema.maximum)
      fail(`above ${String(schema.maximum)}`);
  }
  if (typeof value === 'string') {
    if (typeof schema.minLength === 'number' && value.length < schema.minLength) fail('too short');
    if (typeof schema.pattern === 'string' && !new RegExp(schema.pattern, 'u').test(value)) {
      fail(`${JSON.stringify(value)} does not match ${schema.pattern}`);
    }
  }
  if (Array.isArray(value)) {
    if (typeof schema.minItems === 'number' && value.length < schema.minItems)
      fail('too few items');
    if (typeof schema.maxItems === 'number' && value.length > schema.maxItems)
      fail('too many items');
    const prefix = (schema.prefixItems as Schema[] | undefined) ?? [];
    value.forEach((item, i) => {
      const s = prefix[i] ?? (schema.items as Schema | undefined);
      if (s) errors.push(...check(root, s, item, `${at}[${String(i)}]`));
    });
  }
  if (t === 'object') {
    const obj = value as Record<string, unknown>;
    const props = (schema.properties as Record<string, Schema> | undefined) ?? {};
    const patterns = Object.entries(
      (schema.patternProperties as Record<string, Schema> | undefined) ?? {},
    );
    for (const key of (schema.required as string[] | undefined) ?? []) {
      if (!(key in obj)) fail(`missing "${key}"`);
    }
    for (const [key, child] of Object.entries(obj)) {
      const where = `${at}.${key}`;
      const matched = patterns.filter(([p]) => new RegExp(p, 'u').test(key));
      if (props[key]) errors.push(...check(root, props[key], child, where));
      for (const [, s] of matched) errors.push(...check(root, s, child, where));
      if (!props[key] && matched.length === 0) {
        if (schema.additionalProperties === false) fail(`unknown key "${key}"`);
        else if (typeof schema.additionalProperties === 'object' && schema.additionalProperties) {
          errors.push(...check(root, schema.additionalProperties as Schema, child, where));
        }
      }
    }
  }
  return errors;
}
