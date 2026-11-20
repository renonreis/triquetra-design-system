# Verify: UI foundation · spec 0001 · updated 2026-11-20

_Steps derived from spec 0001 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## Commands

- [x] `pnpm --filter @renonreis/triquetra exec vitest run tokens/contract.test.ts` → every token file passes; one failing case per rule → AC-1
- [x] Add `"$foo": true` to any token in a scratch copy and validate it → the contract test reports `unknown key "$foo"` → AC-1
- [x] `git diff main -- packages/react/scripts/build-tokens.ts` → the `validate()` function is unchanged → AC-2
- [x] `pnpm --filter @renonreis/triquetra tokens:build` → `src/styles/generated/paper-tokens.json` exists with 204 unique names; no `--tq-shadow-*` or `--tq-motion-*` → AC-3
- [x] In the payload: `--tq-color-bg-surface-dark` is `var(--tq-brand-color-neutral-800)`; `--tq-font-family-heading` is `var(--tq-brand-font-family-sans)`; `--tq-space-4` is `16px`; `--tq-font-line-height-tight` is `125%` → AC-4
- [x] Change one brand primitive's value in a scratch branch and rebuild → the brand literal in the payload changes, the semantic aliases do not → AC-4 (value source: terminal primitive vs immediate alias)
- [x] `tokens:paper:diff packages/react/scripts/__fixtures__/paper-export.json` → exit 1, groups printed, `--untitled` under ignored → AC-5
- [x] `tokens:paper:diff` on a file containing `{ "tokens": <payload> }` → exit 0; on `{ "tokens": "nope" }` → exit 2 → AC-5
- [x] Live, read only: `get_tokens` on Paper file `01M7R4TP595GEKCEE8SHQCTJMX`, save it, run the diff → the groups match the spec's audit (dark set, primary and informative roles missing; action primary and informative aliases changed) and no brand color is reported as changed by rounding → AC-5 (value source: the Paper export)

## Sync (after merge to `main`, with approval)

- [x] The plan shown before writing names the `main` SHA, the before export, and lists any rename as a `set_tokens` `newName` call → AC-7, AC-8
- [x] Only `create_tokens` and `set_tokens` are called; no node or artboard tool → AC-7
- [x] The pilot batch round trips: export again, the diff treats the pilot tokens as equal → AC-6
- [x] Final export: the diff exits 0, `--untitled` is absent, `--tq-color-action-primary-bg` is `var(--tq-brand-color-primary-900)` and `--tq-color-action-primary-fg` still aliases neutral → AC-6
- [x] The before export is committed as `paper-before-first-sync.json` beside this file → AC-6
- [x] `AGENTS.md` has the contract pointer, the Paper token exception, the sync procedure and timing, and names shadow and motion as code only → AC-9

## Acceptance criteria coverage

- AC-1 contract test, negative key · AC-2 `validate()` diff · AC-3 payload build · AC-4 payload values, primitive change · AC-5 fixture, matching and malformed exports, live diff · AC-6 pilot batch, final export, before export · AC-7 plan and tool calls · AC-8 rename as `newName` · AC-9 `AGENTS.md`
