# 0001. Token contract and Paper parity

**Date**: 2026-11-20
**Status**: In Progress

## Summary

The token source files in `packages/react/tokens/` are the single source of truth, and this spec writes down their contract (the format and rules a future token manager will read and write). Paper gets a generated copy of the default brand and theme: brand roles plus semantic tokens, with dark mode as a parallel `--dark` set because Paper has no modes. A local diff script compares the code with Paper, and after each merge that touches tokens an agent applies the difference to Paper with your ok, writing tokens only, never artboards.

## Requirements

**User stories**:

- As the DS maintainer, I want the token format and its rules written down and checked, so that a future token manager can read and write tokens without guessing.
- As the designer working in Paper, I want Paper variables to match the tokens on `main` in light and dark, so that component artboards use the real values.
- As an agent, I want a repeatable diff and a fixed sync procedure, so that I can bring Paper in line without inventing steps or touching designs.

**Acceptance criteria**:

- **AC-1**: `packages/react/tokens/contract.schema.json` (JSON Schema 2020-12) describes the per file grammar in _Token contract_ below, and `packages/react/tokens/contract.test.ts` validates every `*.tokens.json` against it with a small checker driven by the schema (no new dependency). The checker supports only the schema keywords the schema uses and fails on any other keyword. One negative fixture per rule fails (unknown `$type`, bad value shape per type, malformed alias, unknown `$` key, bad segment name); every real token file passes.
- **AC-2**: `validate()` in `scripts/build-tokens.ts` stays unchanged and the contract section lists exactly what it enforces, separate from conventions it does not enforce.
- **AC-3**: `tokens:build` also writes `packages/react/src/styles/generated/paper-tokens.json` (git ignored, not shipped): a JSON array of `{ name, type, value, description? }` for brand `triquetra`, theme `default`. The set is exactly 204 entries with unique names: 75 brand roles, 41 base semantics (every base path except `motion.*`), 44 light semantic colors and 44 dark semantic colors (same paths, names suffixed `--dark`). No primitive, `shadow.*` or `motion.*` entry. A test asserts the exact name set and uniqueness.
- **AC-4**: Values follow the alias rule (immediate target): when a token's `$value` aliases a brand role or a semantic token that is in the payload, the value is `var(--tq-…)` of that target (dark semantics alias the `--dark` name when they target another semantic color, else the brand role); when it aliases a primitive or is a literal, the value is the literal converted per the mapping table. The payload has no duplicate names, no alias to a name missing from the payload, and no alias cycle; the build fails otherwise.
- **AC-5**: `pnpm --filter @renonreis/triquetra tokens:paper:diff <paper-export.json>` compares the payload with a Paper `get_tokens` JSON export and prints, sorted by name, with old and new fields: missing (to create), changed (value, alias target or description differs), type drift (blocked, needs a manual decision), extra `--tq-` tokens (delete candidates), and rename suggestions (advisory). Tokens without the `--tq-` prefix are listed as ignored. Exit code 0 when there is no drift, 1 when there is drift, 2 on an input or build error (unreadable file, unknown shape, duplicate names in the export).
- **AC-6**: After the first sync, a fresh export shows: the diff reports no drift; `--untitled` is absent (a one time delete the engineer approved); the dark set and the missing tokens exist (`brand.color.primary.*`, `brand.color.informative.*`, `font.family.heading`, `space.0`, `radius.none`, `size.container.*`); `--tq-color-action-primary-{bg,bg-hover,bg-active}` alias primary 900/800/700 (light) and primary 0/100/200 (`--dark`), while `action-primary-fg` keeps aliasing neutral; informative status aliases the informative role in both modes.
- **AC-7**: The sync writes to Paper only through `create_tokens` and `set_tokens`, never through a tool that edits nodes or artboards. The agent writes only after the engineer approves a plan pinned to a `main` commit SHA and a before export, and stops on any change since approval or any per entry error.
- **AC-8**: A rename is applied only for an old and new pair the engineer selected, and only with `set_tokens` `newName` (which keeps artboard layers bound to the token), never with a delete plus create. The approved plan shows each rename as a `newName` call.
- **AC-9**: Root `AGENTS.md` records the contract pointer, the Paper token exception to the read only rule, the sync procedure and its timing (after merge to `main`), and the code only tokens owed to Paper (shadow, motion).

## Decision

**Chosen option**: Option 1: repo DTCG source as the contract, generated Paper payload, agent applied sync after merge.

The DTCG files stay the only place tokens are defined; Paper receives a generated, diffable mirror of the default brand and theme, applied by an agent with the engineer's approval.

## Design

### Token contract (what the token manager reads and writes)

**Files**: `tokens/primitives/*.tokens.json` (root group `primitive`), `tokens/brands/<brand>.tokens.json` (root group `brand`), `tokens/themes/<theme>/{base,light,dark}.tokens.json` (semantic root groups `color`, `shadow`, `space`, `radius`, `font`, `motion`, `size`). No other `*.tokens.json` locations.

**Per file grammar** (what `contract.schema.json` encodes, AC-1):

- A group is an object whose keys are token or group names, plus optional `$type`, `$description`, `$extensions`. A token is an object with `$value`, plus optional `$type`, `$description`, `$extensions`. `$type` is inherited from the nearest ancestor group; every token must resolve to one.
- Segment names: lowercase letters, digits and single inner hyphens (`0`, `2xl`, `line-height`, `bg-hover`), matching `^[a-z0-9]+(-[a-z0-9]+)*$`.
- Alias: the whole `$value` is `{segment(.segment)*}`; no partial string aliases.
- `$extensions`: an object, any content (reserved for tools).
- Values per `$type` (or an alias):
  - `color`: `{ colorSpace: "oklch", components: [L 0..1, C >= 0, H 0..360], alpha?: 0..1, hex?: "#rrggbb" }`.
  - `dimension`: `{ value: number, unit: "px" | "rem" }`.
  - `duration`: `{ value: number >= 0, unit: "ms" }`.
  - `fontFamily`: a non empty array of non empty strings.
  - `fontWeight`: a number 1..1000.
  - `number`: a number.
  - `cubicBezier`: four numbers, x1 and x2 in 0..1.
  - `shadow`: an array of `{ color, offsetX, offsetY, blur, spread }` where color is a color value or alias, the others dimensions (`spread` may be negative).

**Rules `validate()` enforces** (AC-2): the default brand and theme exist; every brand has exactly the default brand's token paths; the default theme has both mode files; when a theme has both modes they have the same paths; a theme never has only one mode file; in theme files, a `color` token that is an alias points at `brand.*` or at a `color.*` path defined in the same file.

**Conventions it does not enforce** (kept by review): primitives are referenced only by brands and base semantics; non default themes hold overrides only; literal semantic colors are rare (today only `color.bg.overlay`); token types stay equal across modes.

**Naming**: the CSS name is `--tq-` plus the path with dots as dashes; brand roles become `--tq-brand-…`. In CSS, dark semantics reuse the light names (scoped by `[data-mode]`); only Paper adds `--dark`.

**Breaking changes**: renaming or removing a semantic path is a `major` changeset (public CSS); adding one is `minor`.

### Paper payload (AC-3, AC-4)

Generated inside `scripts/build-tokens.ts` (or a module it imports) from the Style Dictionary results it already builds (brand, base, light, dark): `isSource` selects the rows, the token `name` gives the CSS name, `original.$value` plus `getReferences` give the immediate alias target, and the transformed `$value` gives the resolved literal. `tokens.json` is not an input and stays unchanged.

| Code token             | Paper type   | Paper name                 | Value                              |
| ---------------------- | ------------ | -------------------------- | ---------------------------------- |
| `brand.color.*`        | `color`      | `--tq-brand-color-…`       | OKLCH literal                      |
| `brand.font.family.*`  | `fontFamily` | `--tq-brand-font-family-…` | first family, literal              |
| `brand.radius.*`       | `radius`     | `--tq-brand-radius-…`      | px literal                         |
| `color.*` light        | `color`      | `--tq-color-…`             | alias, or OKLCH literal            |
| `color.*` dark         | `color`      | `--tq-color-…--dark`       | alias, or OKLCH literal            |
| `space.*`              | `spacing`    | `--tq-space-…`             | px literal                         |
| `radius.*`             | `radius`     | `--tq-radius-…`            | alias to brand role, or px literal |
| `size.container.*`     | `container`  | `--tq-size-container-…`    | px literal                         |
| `font.family.*`        | `fontFamily` | `--tq-font-family-…`       | alias to brand role                |
| `font.size.*`          | `fontSize`   | `--tq-font-size-…`         | px literal                         |
| `font.weight.*`        | `fontWeight` | `--tq-font-weight-…`       | number                             |
| `font.line-height.*`   | `lineHeight` | `--tq-font-line-height-…`  | percent literal                    |
| `shadow.*`, `motion.*` | none         | not sent                   | code only, owed (Follow-up)        |

**Conversions** (from the terminal original value, not the CSS string): `dimension` in `rem` × 16 → px, in `px` unchanged, zero → `0px`; integer px without decimals. Color → `oklch(L% C H)` with L × 100 to at most 1 decimal, C to 3 decimals, H as written, and ` / A%` only when alpha < 1. `fontFamily` → the first array entry wrapped in double quotes (inner quotes escaped). `fontWeight` → number. `number` line height → percent string (`1.25` → `125%`, at most 1 decimal). Description → the token's own `$description` only (not group or primitive text); omitted when absent; the build fails when one exceeds 1024 characters.

**Write order** (separate from display order): every alias target before the alias that uses it (brand roles, then base semantics, then light colors, then dark colors); ties by type then name. Display order in reports: by name.

### Diff (AC-5)

- Input: the JSON that Paper MCP `get_tokens` returns (unfiltered), saved to a file. Build plan step 1 captures a real export as `packages/react/scripts/__fixtures__/paper-export.json` to pin its shape; the parser accepts that shape only and exits 2 on anything else.
- Matching: by name. Type differs → type drift (blocked: Paper cannot change a token's type; the engineer decides). Alias vs alias compares the target name. Literal vs literal: colors compared with `culori` in OKLCH (L within 0.001, C within 0.001, H within 0.5 degrees circular and ignored when C < 0.0005, alpha within 0.01, missing alpha = 1); px and percent numerically; strings after trimming and quote normalization. Description: absent and empty are equal.
- Rename suggestions: a missing and an extra `--tq-` entry with the same type and the same alias target (or literal value); advisory only, since some roles share values on purpose (primary and neutral, secondary and informative).
- The payload is read from the build output; the diff runs `tokens:build` first when it is missing or older than the token sources.

### Sync procedure (agent, after merge to `main`; AC-6, AC-7, AC-8)

1. On `main` at a known SHA, run `tokens:build`.
2. Paper MCP `get_tokens` (file `01M7R4TP595GEKCEE8SHQCTJMX`, JSON) → save as the before export.
3. Run `tokens:paper:diff` on it. Exit 0 → stop.
4. Show the engineer the groups and the planned calls (with the SHA). The engineer selects renames (old → new), deletes, and any one time deletes of ignored tokens; type drift needs their decision (rename the old token aside, or leave it).
5. Pilot batch: apply a few creates and updates covering an alias, an OKLCH literal, a font family and a percent line height; export again and confirm the diff treats them as equal. If not, stop and fix the conversion before going on.
6. Before writing the rest, export again; if it differs from the before export outside the pilot batch, stop and go back to step 3. Then apply in order: selected renames (`set_tokens` `newName`), creates (`create_tokens`, write order), updates (`set_tokens` value and description), selected deletes last (`set_tokens` `delete`). Stop on any per entry error.
7. Export again and run the diff: it must exit 0, and approved deletes must be absent. A stopped run resumes from step 2 with a fresh export and a new approval (`create_tokens` allows duplicates, so never replay an old plan).
8. First sync only: commit the before export to `docs/specs/0001-token-contract-paper-parity/paper-before-first-sync.json`, since Paper's current state was made by hand and cannot be rebuilt from code.

**Value sourcing**:

| Action  | Value produced                        | Source                                                                                                           |
| ------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Payload | names, aliases, literals              | Style Dictionary results in `build-tokens.ts` (`name`, `original.$value`, `getReferences`, transformed `$value`) |
| Payload | Paper type                            | path prefix, per the mapping table                                                                               |
| Payload | px, percent, OKLCH, font strings      | the conversions above                                                                                            |
| Diff    | Paper current state                   | a `get_tokens` JSON export file (shape pinned by the fixture)                                                    |
| Diff    | equality                              | the comparison rules above                                                                                       |
| Diff    | rename suggestion                     | missing and extra entries with equal type and target or value                                                    |
| Sync    | file id                               | this spec and the Paper link in `AGENTS.md`                                                                      |
| Sync    | SHA, before export                    | step 1 and step 2 of the procedure                                                                               |
| Sync    | renames, deletes, type drift handling | the engineer's selection in step 4                                                                               |

**Key invariants**:

- No token is defined only in Paper; any `--tq-` token Paper has that the code lacks is drift.
- The payload is a pure function of the token source (same input, same output, same order).
- Agents never call a Paper tool that changes nodes; only `create_tokens` and `set_tokens`, after approval.
- Paper matches the synced `main` commit, which may be ahead of the last published release.

**Security model**: the Paper MCP runs with the engineer's account. Writes are limited by procedure (AC-7) and by approval each run. No secrets are added to the repo.

**Critical test scenarios**:

- Contract test passes on every real token file and fails on one fixture per rule (unknown `$type`, `dimension` with unit `em`, alias `{brand.color}x`, `$foo` key, segment `Bg`, unsupported schema keyword), verifies **AC-1**.
- Payload test: exact name set (204, unique); `--tq-color-bg-surface` is `var(--tq-brand-color-neutral-0)`; `--tq-color-bg-surface--dark` is `var(--tq-brand-color-neutral-800)`; `--tq-color-bg-overlay` is a literal with alpha; `--tq-font-family-heading` is `var(--tq-brand-font-family-sans)`; `--tq-brand-font-family-sans` is `"Geist"`; `--tq-space-0` is `0px`; `--tq-space-4` is `16px`; `--tq-font-line-height-tight` is `125%`; no `--tq-shadow-*` or `--tq-motion-*`; every alias target is earlier in write order, verifies **AC-3**, **AC-4**.
- Diff test on fixtures: `--untitled` listed as ignored; a stale alias as changed; a dropped token as missing; an extra `--tq-` token; a renamed pair as a suggestion; a type change as blocked; a chroma difference of 0.0005 and a hue difference of 0.2 degrees as equal; exit 1, then 0 on a matching export, then 2 on a malformed file, verifies **AC-5**.
- Live (sync): the pilot batch round trips; the approved plan lists renames as `newName` calls; the final diff exits 0 and `--untitled` is absent, verifies **AC-6**, **AC-7**, **AC-8**.

## Build plan

Tracer Bullet: first a thin thread from source to a real diff against the live Paper file (read only), then widen it, then the contract checks, then the first real sync.

1. Thin thread: payload generation for colors only (brand roles, light and dark semantics) inside `tokens:build`, the diff for colors, and a captured real `get_tokens` export as the fixture; run the diff read only against the live file, with families not yet mapped excluded from delete candidates, satisfies **AC-3**, **AC-4**, **AC-5**
2. Widen to every mapped type with the conversions, write order and build time checks (duplicates, missing targets, cycles, description length); add the payload and diff tests; add the new module to the `tokens:build` inputs in `turbo.json`, satisfies **AC-3**, **AC-4**, **AC-5**
3. Contract: write `contract.schema.json`, the schema driven checker and `contract.test.ts` with negative fixtures; keep `validate()` unchanged, satisfies **AC-1**, **AC-2**
4. Docs: update root `AGENTS.md` (contract pointer, Paper token exception, sync procedure and timing, code only tokens, and the precise list of what `validate()` enforces), satisfies **AC-2**, **AC-7**, **AC-9**
5. After merge to `main`: run the sync procedure on the live Paper file with the engineer's approval, commit the before export, until the diff is clean, satisfies **AC-6**, **AC-7**, **AC-8**

## Consequences

**Positive**:

- One place defines tokens; Paper and the future token manager read the same contract.
- Drift becomes visible and fixable in one command instead of by eye.
- Artboards can be drawn in dark mode with real token values.

**Negative / tradeoffs**:

- Paper's dark tokens are a naming convention (`--dark`), not real modes: a designer switches an artboard to dark by swapping variables, not by a toggle.
- Shadow and motion tokens do not exist in Paper until it supports those types; designers use the values documented in Storybook.
- The sync is manual (agent plus approval after each token merge), so Paper can lag `main` until someone runs it.
- Agents gain write access to Paper tokens, a narrow exception to the read only rule that the procedure must keep narrow.
- The diff depends on the shape of Paper's `get_tokens` JSON; a Paper change there breaks the diff (exit 2), not the build.

**Neutral**:

- No consumer facing change, so no changeset; the payload and scripts are not shipped.

## Migration plan

**Strategy**: no code migration; the Paper file is brought in line once (build plan step 5).
**Phases**:

1. Merge the generator, diff, contract and docs (Paper untouched).
2. First sync: pilot batch, then creates (dark set and missing tokens), updates (action primary and informative aliases), approved deletes (`--untitled`).

**Rollback**: the committed before export of the first sync records Paper's earlier state; restore by hand from it. Later syncs: run the procedure from the previous `main` commit.
**Risks**: an alias update changes how existing artboards render (intended); a wrongly approved delete unbinds artboard layers, which is why deletes need explicit selection and run last.

## Follow-up

- [ ] Shadow and motion tokens in Paper once Paper supports those types (technical debt, enrolled in the scope as deferred)
- [ ] Multi brand and multi theme in Paper: owned by the token manager product, not this repo
- [ ] Feature 2 (Paper artboards for Checkbox, Switch, Select, Tabs) can start once the first sync is clean

## Rationale

Reasoning and options: see [rationale.md](rationale.md). Cross checked on 2026-11-20 by another model (GPT 6.2 Sol); its findings are applied above.
