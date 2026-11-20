/**
 * Compares the generated Paper payload with a Paper `get_tokens` JSON export (spec 0001).
 *
 *   pnpm --filter @renonreis/triquetra tokens:paper:diff <paper-export.json> [--json]
 *
 * Exit codes: 0 no drift · 1 drift · 2 input or build error.
 * Read only: it never writes to Paper. The sync procedure in AGENTS.md applies the result.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  diffPaper,
  hasDrift,
  parsePaperExport,
  type PaperDiff,
  type PaperToken,
} from './paper-tokens.ts';

const ROOT = resolve(import.meta.dirname, '..');
const PAYLOAD = join(ROOT, 'src/styles/generated/paper-tokens.json');
const SOURCES = [join(ROOT, 'tokens'), join(ROOT, 'scripts')];

function newestSource(): number {
  let newest = 0;
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (/\.(tokens\.json|ts)$/.test(entry.name))
        newest = Math.max(newest, statSync(path).mtimeMs);
    }
  };
  SOURCES.forEach(walk);
  return newest;
}

function loadPayload(): PaperToken[] {
  if (!existsSync(PAYLOAD) || statSync(PAYLOAD).mtimeMs < newestSource()) {
    const run = spawnSync(process.execPath, [join(ROOT, 'scripts/build-tokens.ts')], {
      stdio: 'inherit',
    });
    if (run.status !== 0) throw new Error('tokens:build failed.');
  }
  return JSON.parse(readFileSync(PAYLOAD, 'utf8')) as PaperToken[];
}

const show = (v: unknown) => (v === undefined ? '(none)' : JSON.stringify(v));

function report(d: PaperDiff): string {
  const out: string[] = [];
  const section = (title: string, lines: string[]) => {
    if (lines.length > 0)
      out.push(`\n${title} (${String(lines.length)})`, ...lines.map((l) => `  ${l}`));
  };
  section(
    'Missing in Paper, to create',
    d.missing.map((t) => `${t.name} [${t.type}] = ${show(t.value)}`),
  );
  section(
    'Changed, to update',
    d.changed.map((c) => `${c.name} ${c.field}: ${show(c.from)} → ${show(c.to)}`),
  );
  section(
    'Type drift, blocked (needs your decision)',
    d.typeDrift.map((t) => `${t.name}: ${t.from} → ${t.to}`),
  );
  section(
    'Extra --tq- tokens in Paper, delete candidates',
    d.extra.map((t) => `${t.name} = ${show(t.value)}`),
  );
  section(
    'Rename suggestions (advisory)',
    d.renames.map((r) => `${r.from} → ${r.to}`),
  );
  section('Ignored (not managed by the contract)', d.ignored);
  out.push(hasDrift(d) ? '\nDrift found.' : '\nNo drift: Paper matches the token source.');
  return out.join('\n');
}

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
try {
  if (!file) throw new Error('Usage: tokens:paper:diff <paper-export.json> [--json]');
  const actual = parsePaperExport(JSON.parse(readFileSync(resolve(process.cwd(), file), 'utf8')));
  const diff = diffPaper(loadPayload(), actual);
  console.log(args.includes('--json') ? JSON.stringify(diff, null, 2) : report(diff));
  process.exit(hasDrift(diff) ? 1 : 0);
} catch (error) {
  console.error(`✖ ${(error as Error).message}`);
  process.exit(2);
}
