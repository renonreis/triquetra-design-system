# 0003. Rationale

## Context

Slice 2 grows the catalog one component per PR, each designed in Paper first (scope, feature 3). Textarea comes first because it is the simplest: forms already have Input and Field, and long answers (messages, notes, descriptions) have no matching control, so products fall back to a raw `<textarea>` with its own styles.

Input wraps Ark `Field.Input`, styled through `tv()` with semantic tokens, and Field wires label, helper and error by Ark's field context. Ark 5.40 also ships `Field.Textarea`, which reads the same context and has an `autoresize` option (backed by `@zag-js/auto-resize`). Multi line text adds questions Input never had: how tall it starts, whether and how it resizes, and how padding and line height work over several lines while still matching Input's one row look.

Spec 0002 proved the artboard procedure, but always from shipped code. Here the order flips: the artboard comes first, so its values must be written down before any code exists, and parity is measured after the code is built. `AGENTS.md` also gates artboard runs on "an accepted spec", while a feature linked spec only reaches `Accepted` when the feature ships.

## Options considered

### Option 1: Thin wrapper on Ark `Field.Textarea`, shared classes with Input, plus `Field.Textarea`

**Pros**: Ark handles ids, ARIA and autoresize; one class list keeps Input and Textarea identical in every shared state; `Field.Textarea` mirrors `Field.Input`, so forms read the same.
**Cons**: changes the `Field` object (additive); a small refactor of `input.variants.ts`.

### Option 2: Same wrapper, no `Field.Textarea` (use `<Textarea>` inside `Field.Root`)

**Pros**: no change to Field's API; Checkbox and Select already work this way.
**Cons**: an asymmetry next to `Field.Input`; developers will look for `Field.Textarea` and not find it.

### Option 3: An Input variant (`<Input multiline>`)

**Pros**: one component, one API.
**Cons**: the ref type, native props and Ark part differ (`HTMLTextAreaElement`, `rows`, `Field.Textarea`); a union type makes both worse.

### Option 4: Own textarea on `ark.textarea` with a custom autoresize

**Pros**: full control of resizing.
**Cons**: reimplements field wiring and autoresize Ark already provides, against `AGENTS.md`.

## Rationale

Option 1 follows the project's rule to wrap the Ark primitive when one exists, and reuses Input's verified tokens and states instead of copying them. The maintainer picked every recommended answer on 2026-11-20:

- **Resize**: manual vertical resize by default plus opt in `autoresize`. Native and predictable; autoresize costs nothing because Ark has it. Runner up: autoresize on by default (surprising height jumps in dense forms).
- **Sizes**: `sm`, `md`, `lg` with Input's horizontal padding and font size, vertical padding `py-1`, `py-2`, `py-3`, and `leading-normal` (a token, so Paper binds it). Runner up: one size (breaks alignment next to `sm` or `lg` inputs).
- **Starting height**: `rows={3}`. The height follows the font and the user can override it. Runner up: a token minimum height (ignores font size).
- **Field**: add `Field.Textarea` (Option 1 over Option 2). An "Ask first" item in `AGENTS.md`, approved.
- **Out of scope**: character counter and `maxLength` display (Follow-up).
- **Paper gate**: the confirmed and merged spec counts as accepted. After the cross check this became an explicit docs PR (a _design first_ variant in `AGENTS.md`) merged before the run, instead of a later reword.

Decided while writing (no further input needed):

- **Minimum height per size equals Input's height** (`min-h-8`, `-10`, `-12`): stops a manual resize from collapsing the field, and makes a one row `sm` or `md` textarea line up with Input. Runner up: no minimum (the browser lets it shrink to the padding).
- **Shared class list as an internal constant in `input.variants.ts`**: one source for every state, no new public export. Runner up: `tv({ extend: inputVariants })`, which would also inherit Input's fixed heights and need overrides.
- **Resize handle not drawn in Paper**: the browser paints it and it differs by platform; drawing it would create parity rows that can never match.
- **Parity measured on the code PR, not after merge**: differences get fixed before the component ships, in the same PR.

## Cross check (2026-11-20)

A read only review by another model (GPT 6.2 Sol) found 16 points. You chose to apply every recommended fix:

- **Gate**: the current `AGENTS.md` rule needs shipped code and Storybook values before a write, so a docs PR adds a _design first_ variant (Build plan task 2) instead of rewording it later.
- **Review before close**: the maintainer reviews both artboards inside the run; after `finish_working_on_nodes` no write happens without a new approved plan, and parity fixes go to code.
- **Baseline after the pilot** compares with the baseline plus the pilot's ledger nodes; a different artboard count goes into the plan, it does not block. The ledger records the design SHA, the approvals and the measurement SHA apart.
- **Layout and copy**: the states grid is 7 rows by 3 columns (caption, placeholder, value) at 320 px per cell, so nothing is scaled; chrome follows `TK-0` with semantic bindings; full API rows; snippet bound to the mono font token; dark placement rule for collisions.
- **Fixtures**: exact args and checkpoint per story, the five line Autoresize value (123 px at `md`), derived heights allowed as literals, value wrapping measured, Field stories without the meta `aria-label`.
- **Shared values** (weight, placeholder color, overlaps) come from Input measured at the design SHA, so the spec does not restate classes as pixels; focus ring follows spec 0002's zero offset rule.
- **Invalid truth table**: `invalid` only adds, as in Input; raw native ARIA props win over the context (Ark merge order), documented as an escape hatch.
- **`asChild` dropped** from `TextareaProps`: replacing the element would break the ref and autoresize. Runner up: keep and test it (no use case).
- **`lg` minimum stays 48 px** and scrolls a 24 px line at that limit. Runner up: 50 px (no such token, breaks alignment with Input `lg`).
- **Autoresize is a mount time mode**: Zag does not restore inline styles on cleanup, so live toggling is not supported.
- **Tests split**: jsdom (stub `ResizeObserver`) for props, ref, `rows` and Field wiring; browser `play` (`AutoresizeGrows`, not screenshotted) for growth, shrink, minimum and resize mode.
- **Baselines**: 24 new PNGs, then the full Docker suite in compare only mode to prove Input is unchanged.
- **Parity**: 20 cells per mode with listed parts and properties, `::placeholder` and line count included, resize handle excluded, plus a read only negative control and a fresh measure of both modes after any fix.

## Parity tables

Filled during the build (AC-12): [`parity/textarea.md`](parity/textarea.md), light and dark, with spec 0002's columns.

## Run ledger summary

Filled at the end of the Paper run: design SHA, approvals with dates (write plan, pilot, design review), baseline token hash, the two artboard IDs, ledger call count, scope audit result. The measurement SHA of the code PR goes in the parity table.
