# 0003. Textarea

**Date**: 2026-11-20
**Status**: In Progress

## Summary

Textarea is a multi line text field that looks and behaves like Input and works inside Field (label, helper, error). It wraps Ark UI's `Field.Textarea`, shares Input's styles, resizes vertically by hand and can grow with its content (`autoresize`). It is the first component designed in Paper before the code: a small docs change allows that, an agent draws the artboard in light and dark from the values in this spec, you approve it, and then the code is built to match it and measured against it.

## Requirements

**User stories**:

- As a product developer, I want a multi line field that matches Input, so that forms with long answers look consistent.
- As a product developer, I want to put it inside `Field.Root` like `Field.Input`, so that label, helper, error and states are wired for me.
- As the DS maintainer, I want to see and approve the Textarea in Paper before any code, so that the design leads and the code follows.

**Acceptance criteria**:

- **AC-1**: Gates before any Paper write, in order: (1) this spec is confirmed by the maintainer and merged to `main`; (2) a docs PR adds the _design first_ variant to `AGENTS.md` (_Paper artboards_) and is merged, see _Paper gate_; (3) the maintainer approves a write plan pinned to a `main` SHA and a Paper baseline. No write before all three.
- **AC-2**: The Components page (`p-4-0`) has a new light artboard `Textarea`, 1440 px wide, height `fit-content`, laid out as _Artboard content and placement_ says, with every cell in the _State inventory_ drawn with the values in _Design values_.
- **AC-3**: A sibling `Textarea · Dark` has the same structure and copy; every color reference is a `-dark` token (artboard fill `--tq-color-bg-canvas-dark` included). The binding audit finds no light color token on it and no `-dark` token on the light artboard.
- **AC-4**: The run follows spec 0002: its _Binding rules_ and _Allowed literals_ (plus the derived heights listed in _Design values_), its tool list, run ledger, stops and recovery. The recheck after the pilot compares Paper with the baseline plus exactly the pilot's ledger nodes. The scope audit shows every artboard that existed at the baseline unchanged (`get_jsx`, position) and `contentHash.tokens` equal to the baseline.
- **AC-5**: The maintainer reviews both artboards before the run closes. Any change asked in that review is drawn and read back inside the same run, and written into _Design values_ (or taken back to `/architect` when it changes a decision here). Only then the scope audit runs and `finish_working_on_nodes` gets the two artboard IDs. After the close, no further Paper write happens under this run: a later Paper correction needs a new write plan approved by the maintainer.
- **AC-6**: `Textarea` is exported from `@renonreis/triquetra` with `TextareaProps`, `textareaVariants` and `TextareaVariants`. It wraps Ark `Field.Textarea`, forwards its ref to the `HTMLTextAreaElement`, spreads the remaining props onto it, and accepts `size` (`sm`, `md`, `lg`, default `md`), `invalid`, `autoresize` (default `false`) and `rows` (a positive integer with native semantics; `3` when omitted). `asChild` is not part of `TextareaProps`. Standalone, it needs an accessible name (`aria-label` or a `<label>`).
- **AC-7**: `Field.Textarea` is a new part of `Field`, the same component as `Textarea` (as `Field.Input` is `Input`); `FieldTextareaProps` is exported from `field/index.ts`. Inside `Field.Root`, the label names it, helper and error text describe it, and `invalid`, `disabled`, `readOnly` and `required` from the root reach it. `invalid` follows the _Invalid truth table_.
- **AC-8**: Styles match Input for every shared state through one shared class list, and Input's rendering does not change. Size, padding, line height, minimum height and resize follow _Design values_.
- **AC-9**: By default the user can drag to resize vertically only, never below the size's minimum height. With `autoresize`, set at mount, the height follows the content as the user types (growing and shrinking, never below the `rows` height), and manual resize is off. Toggling `autoresize` after mount is not supported.
- **AC-10**: `textarea.stories.tsx` (meta tagged `visual`) has the 12 visual stories and the interaction story in _Stories_, run in light and dark with the a11y addon in `error` mode; browser checks for growth, shrink, minimum height and resize mode run in story `play` functions. `textarea.test.tsx` (Vitest, jsdom) covers prop forwarding, the ref, `rows`, multi line typing and Field wiring (label, helper, error, required, disabled, read only, and every row of the _Invalid truth table_, asserting `aria-invalid` directly), plus `axe` for default, with value, invalid, disabled, read only and inside Field (valid and invalid).
- **AC-11**: 24 new baselines (12 visual stories × light and dark) are generated in the Playwright Docker image, then `pnpm test:visual:docker` passes in compare only mode with no other baseline changed.
- **AC-12**: `rationale.md` links a parity table (`parity/textarea.md`, light and dark) for the 20 cells per mode in _Parity_, measured on the code PR's Storybook, with spec 0002's columns and _Normalization_, plus a read only negative control. Every row is `match` or resolved before the PR merges: fixed in code and measured again in both modes, or `design change` / `deviation` with the maintainer's approval and a follow up (a Paper fix needs its own approved write plan).
- **AC-13**: The code PR carries a `minor` changeset (new public exports `Textarea` and `Field.Textarea`).

## Decision

**Chosen option**: Option 1: a thin `Textarea` wrapper on Ark `Field.Textarea` that shares Input's class list, plus a `Field.Textarea` part, designed in Paper first.

The Textarea reuses what Input already proved (Ark field wiring, tokens, states) and adds only what multi line text needs: rows, vertical resize and opt in autoresize.

## Feature design

**Data model**: none. The surface is the React API below, the two Paper artboards and the parity table.

**API surface**:

| Export                                 | Kind      | Key inputs                                                                                                                       | Notes                                                                                                                       |
| -------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `Textarea`, `TextareaProps`            | component | `size?: 'sm' \| 'md' \| 'lg'` (`md`), `invalid?: boolean`, `autoresize?: boolean` (`false`), `rows?: number` (`3`), native props | `forwardRef<HTMLTextAreaElement>`; `TextareaProps extends Omit<Field.TextareaProps, 'size' \| 'asChild'>, TextareaVariants` |
| `textareaVariants`, `TextareaVariants` | `tv()`    | `size`                                                                                                                           | exported like `inputVariants`                                                                                               |
| `Field.Textarea`, `FieldTextareaProps` | part      | as `Textarea`                                                                                                                    | `const FieldTextarea = Textarea`, added to the `Field` object; type re-exported from `field/index.ts`                       |

Files: `packages/react/src/components/textarea/` (`textarea.tsx`, `textarea.variants.ts`, `textarea.stories.tsx`, `textarea.test.tsx`, `index.ts`), one export line in `src/index.ts`, the part in `field/field.tsx` and its type in `field/index.ts`. The shared class list is a module constant in `input.variants.ts`, the same array in the same order with no change to `tv()` options, imported by `textarea.variants.ts` and not re-exported from any `index.ts`.

### Invalid truth table

Ark merges the textarea's own props after the field context, so `invalid` only adds, as in Input (`aria-invalid` is set only when `invalid` is true).

| `Field.Root` | `invalid` on the textarea | `aria-invalid` | Error text            |
| ------------ | ------------------------- | -------------- | --------------------- |
| none         | absent or `false`         | absent         | none                  |
| none         | `true`                    | `true`         | none                  |
| valid        | absent or `false`         | absent         | hidden                |
| valid        | `true`                    | `true`         | hidden (follows root) |
| invalid      | any                       | `true`         | shown                 |

A raw `aria-invalid`, `id`, `aria-describedby`, `required`, `disabled` or `readOnly` passed by the caller wins over the context (Ark's merge order). That is an escape hatch, documented in the prop JSDoc, not tested beyond `aria-invalid`.

### Design values

**Shared with Input**, today's `inputVariants` base, unchanged: `w-full min-w-0 rounded-control border border-border-strong bg-bg-surface font-body text-fg-default placeholder:text-fg-muted transition-colors duration-150 hover:border-fg-muted`; focus visible `outline-2 outline-offset-0 outline-border-focus`; invalid `border-border-negative`, with focus outline `border-negative`; read only `bg-bg-subtle`; disabled `cursor-not-allowed border-border-default bg-bg-disabled text-fg-disabled`.

For every shared state, the values to draw are the ones Input renders: procedure step 1 measures the Input stories (`Default`, `WithValue`, `Hover`, `FocusVisible`, `Invalid`, `InvalidFocused`, `Disabled`, `ReadOnly`) in Storybook at the pinned SHA, in both modes. That settles font weight (inherited, regular), placeholder color and opacity (also when disabled or read only), and which class wins when states overlap. Only the drawn overlaps matter (invalid plus focus visible); others are not drawn.

**Textarea only**: `block leading-normal resize-y`; text starts at the top left of the padding box; per size:

| Size | Classes                      | Line height | Height at `rows` 3 | One row (clamped) | Minimum height   |
| ---- | ---------------------------- | ----------- | ------------------ | ----------------- | ---------------- |
| sm   | `px-2 py-1 text-sm min-h-8`  | 21 px       | 73 px              | 32 px             | 32 px (Input sm) |
| md   | `px-3 py-2 text-sm min-h-10` | 21 px       | 81 px              | 40 px             | 40 px (Input md) |
| lg   | `px-4 py-3 text-md min-h-12` | 24 px       | 98 px              | 50 px             | 48 px (Input lg) |

Heights are `rows × line height + 2 × padding + 2 px` border at a 16 px root. At the `lg` minimum (48 px) a full 24 px line does not fit (22 px of content), so the text scrolls; this only happens when the user drags to the limit and is accepted. Width fills the container (stories use a 20rem frame, 320 px).

**Allowed literals added to spec 0002's list**: the derived heights above (73, 81, 98, 123 px and the one row heights), since they are not on the spacing scale; and the artboard's layout widths below.

**Focus ring**: as spec 0002's Select trigger, ring `border.focus` (invalid: `border.negative`), offset 0, no gap color. Drawn as an outline when Paper renders outline and offset; otherwise as a box shadow bound to the same token, recorded as `deviation` when the measured box differs from the code's outline.

### Stories

Meta: `title: 'Components/Textarea'`, `tags: ['autodocs', 'visual']`, args `aria-label: 'Message'`, `placeholder: 'Write a short message'`, a 20rem frame decorator. Value copy (`VALUE`): "Thanks for the quick reply. The new tokens look great in dark mode." It wraps by the browser at the 294 px content width; the line count is measured, not prescribed, and compared in parity.

| Story             | Args and render                                                                                                                                                                                                                                                | Checkpoint                                                                                                                                                                                                                   |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Default`         | meta args, no value                                                                                                                                                                                                                                            | after `play`, which only asserts (name, `rows` 3); nothing typed                                                                                                                                                             |
| `WithValue`       | `defaultValue: VALUE`                                                                                                                                                                                                                                          | first render                                                                                                                                                                                                                 |
| `Sizes`           | sm, md, lg in that order, column with `gap-3` (as Input), `aria-label` "Message (sm)" etc., placeholder                                                                                                                                                        | first render                                                                                                                                                                                                                 |
| `Hover`           | meta args, `pseudo: { hover: true }`                                                                                                                                                                                                                           | first render                                                                                                                                                                                                                 |
| `FocusVisible`    | meta args, `pseudo: { focusVisible: true }`                                                                                                                                                                                                                    | first render                                                                                                                                                                                                                 |
| `Invalid`         | `invalid: true`, `defaultValue: VALUE`                                                                                                                                                                                                                         | first render                                                                                                                                                                                                                 |
| `InvalidFocused`  | `invalid: true`, `defaultValue: VALUE`, `pseudo: { focusVisible: true }`                                                                                                                                                                                       | first render                                                                                                                                                                                                                 |
| `Disabled`        | `disabled: true`, `defaultValue: VALUE`                                                                                                                                                                                                                        | first render                                                                                                                                                                                                                 |
| `ReadOnly`        | `readOnly: true`, `defaultValue: VALUE`                                                                                                                                                                                                                        | first render                                                                                                                                                                                                                 |
| `Autoresize`      | `autoresize: true`, size `md`, `rows` 3, `defaultValue` the five lines `Hi team,` / `Thanks for the quick reply.` / `The dark mode looks great.` / `Ship it on Friday?` / `Ada` (joined with `\n`)                                                             | `play` awaits `document.fonts.ready` and the height settling at 123 px (± 1); asserts `resize: none`; types nothing                                                                                                          |
| `InField`         | render without the meta `aria-label`: `Field.Root required` → `Field.Label` "Message" + `Field.RequiredIndicator` → `Field.Textarea` (placeholder) → `Field.HelperText` "We reply within two working days." → `Field.ErrorText` "Write a message to continue." | first render (error text not rendered)                                                                                                                                                                                       |
| `InFieldInvalid`  | as `InField` with `invalid` on the root, empty value                                                                                                                                                                                                           | first render (helper and error both shown, error after helper)                                                                                                                                                               |
| `AutoresizeGrows` | `tags: ['!visual']`, `autoresize: true`, empty                                                                                                                                                                                                                 | `play` types four lines and asserts growth, deletes them and asserts the height is back at 81 px; also asserts `resize: vertical` and the 40 px minimum on a non autoresize md textarea after setting `style.height = '0px'` |

### State inventory (artboard cells and parity)

20 cells per mode, all with the meta copy unless stated:

- **States** (14): rows are states, columns are `placeholder` and `with value`:
  - rest: `Default` · `WithValue`
  - hover: `Hover` · synthesized (`VALUE`, hover)
  - focus visible: `FocusVisible` · synthesized (`VALUE`, focus visible)
  - invalid: synthesized (`invalid`, no value) · `Invalid`
  - invalid plus focus visible: synthesized (`invalid`, no value, focus visible) · `InvalidFocused`
  - disabled: synthesized (`disabled`, no value) · `Disabled`
  - read only: synthesized (`readOnly`, no value) · `ReadOnly`
- **Sizes** (3): `Sizes` sm, md, lg.
- **Autoresize** (1): `Autoresize` at its checkpoint.
- **In Field** (2): `InField`, `InFieldInvalid`.

Synthesized cells are rendered for measurement with the listed args and pseudo state (Storybook args or a throwaway story, kept out of the repo) and need no committed story.

### Artboard content and placement

- **Chrome** (header, section titles, captions, API table, snippet box): same structure, typography and spacing as the spec 0002 artboard `TK-0` (Checkbox), read with `get_jsx` at the baseline, with every value bound per spec 0002's _Binding rules_ (semantic tokens only; the snippet uses `--tq-font-family-mono`). Never copy a literal from the older `IB-0`, `O0-0` or `R7-0`.
- **Header**: eyebrow `Components / 10`, title `Textarea`, description "A multi line text field that matches Input and works inside Field.", snippet `import { Textarea } from '@renonreis/triquetra';`.
- **States**: a grid of 7 rows and 3 columns: a caption column (the state name), then `placeholder` and `with value`, each 320 px wide (column header captions above). Column gap and row gap as `TK-0`'s matrix. Cells align top.
- **Sizes**, **Autoresize**, **In Field**: one row each, cells 320 px wide, side by side in that order, top aligned, captioned with the story name.
- **API** rows (name, type, default): `size` · `'sm' | 'md' | 'lg'` · `md`; `rows` · `number` · `3`; `autoresize` · `boolean` · `false`; `invalid` · `boolean` · `false`; `disabled` · `boolean` · `false`; `readOnly` · `boolean` · `false`; `required` · `boolean` · `false`; `placeholder` · `string` · none; `value`, `defaultValue` · `string` · none; `Field.Textarea` · inside `Field.Root` · label, helper, error and states from the root. A note under the table: "Resizes vertically by dragging its corner, unless autoresize is on."
- The browser's resize handle is not drawn (the browser paints it, it is not a style).
- **Placement**: light at world y 0, 80 px right of the rightmost artboard whose y is 0 (Tabs `2EE-0` today, so x 10640). Dark directly under it, at y = the larger of the current dark row y (3990 today) and the bottom of the tallest light artboard plus 160. If either slot overlaps any artboard, shift right in 80 px steps until it does not. Existing artboards never move.
- **Dark**: `duplicate_nodes` of the finished light artboard plus one `update_styles` batch that swaps every color to its `-dark` token, mapped by the `descendantIdMap`. Spec 0002's lessons apply: set `fontSize` and `lineHeight` with `update_styles` after `create_artboard`; after a color change on text, rewrite span colors with `set_text_content` (`html`).

### Paper gate

Today `AGENTS.md` allows an artboard run only from shipped code, for a component in "an accepted spec", with Storybook values measured before the write. This spec is feature linked (status `Proposed` until the feature ships) and the code does not exist yet. The docs PR (Build plan task 2) adds a _design first_ variant to the _Paper artboards_ section: allowed for a component in a spec the maintainer confirmed and merged; values come from the spec's design values, with shared states measured on an existing component; the maintainer reviews the artboards before the run closes; parity is measured on the code PR. Everything else (pinned write plan approval, ledger, tools, stops, scope audit) stays as is. `.github/pullfrog/review.md` gets the same line, to stay in sync.

### Procedure

Spec 0002's procedure with these changes:

1. **Baseline**: pin `main` (the design SHA), `tokens:paper:diff` exit 0, save `get_basic_info` and the `get_jsx` of every artboard on `p-4-0`. The baseline records whatever exists (11 artboards expected); a different count does not block the run but goes into the plan. Measure the Input stories for the shared states (_Design values_) at that SHA, both modes.
2. **Plan approval** and 3. **recheck before the first write**, as spec 0002.
3. **Pilot**: draw `Textarea` light, screenshot after each section, binding round trip, show the maintainer and wait.
4. After approval, recheck: `main` unchanged for `tokens/`, `input/` and `field/`; Paper equals the baseline plus exactly the pilot's ledger nodes. Draw `Textarea · Dark`, dark audit.
5. **Design review** of both artboards with the maintainer (AC-5); apply and read back any change.
6. **Scope audit**, then `finish_working_on_nodes` with the two IDs. Commit the ledger summary to `rationale.md` (design SHA, approvals with dates, artboard IDs, call count, audit result).
7. **Parity after code**: measure the code PR's Storybook at its head SHA (the measurement SHA, recorded separately) with spec 0002's _Parity_ method (1280 × 720, both modes) against `get_computed_styles` of the artboard nodes.

### Parity

Per cell, the parts and properties compared (spec 0002 _Normalization_):

- **Textarea**: width, height, background, border color, width and style per side, radius, padding, font family, size, weight and line height, text color, `::placeholder` color and opacity (placeholder cells), value line count (value cells), outline color, width, style and offset (focus cells).
- **Field cells**: label color, size, weight; required indicator color and visibility; helper and error color, size, weight, line height and visibility; root gap.
- **Excluded**: Paper only chrome (header, captions, API) and the native resize handle.
- **Negative control**: read only, in the comparison input only: replace one Paper border color with a wrong token's value (for example `border.default` in place of `border.strong` on `Default`) and confirm the comparison reports a DIFF, in both modes. No Paper write.
- After any code fix, the affected rows are measured again in both modes and the row records the new head SHA.

**Value sourcing**:

| Action | Value produced or displayed                                                 | Source                                                                     |
| ------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Draw   | cells, copy, args                                                           | _Stories_ and _State inventory_                                            |
| Draw   | shared state styles (colors, weight, placeholder, overlaps)                 | Input stories measured at the design SHA (procedure step 1)                |
| Draw   | geometry (padding, line height, heights, minimums)                          | _Design values_                                                            |
| Draw   | token name per value, literals                                              | spec 0002 _Binding rules_ and _Allowed literals_, plus the additions above |
| Draw   | Field label, helper, error styles                                           | `field.variants.ts` at the design SHA, measured on Field stories           |
| Draw   | chrome, API copy, placement                                                 | _Artboard content and placement_, `TK-0` via `get_jsx`, `get_basic_info`   |
| Code   | `rows` default, sizes, resize, minimum heights                              | _Design values_ (after any AC-5 change)                                    |
| Code   | `aria-invalid`, `aria-describedby`, `required`, `disabled`, `readOnly`, ids | Ark `Field` context (`getTextareaProps`), _Invalid truth table_            |
| Code   | autoresize height                                                           | Ark `autoresize` (`@zag-js/auto-resize`, already a dependency of Ark)      |
| Parity | code value and Paper value                                                  | Storybook at the measurement SHA, `get_computed_styles` of ledger nodes    |

**Key invariants**:

- Input and Textarea share one class list for every common state; Input's rendering does not move in this feature.
- Semantic token utilities only: no `dark:`, no arbitrary values; states through `aria-invalid:`, `read-only:` and `disabled:` like Input.
- `invalid` on the textarea only adds; it never clears `Field.Root`'s invalid state.
- No Paper token is created, changed or deleted; no write outside the run ledger; no write after the run closes without a new approved plan.

**Security model**: no data and no secrets. Paper writes are limited by AC-1, AC-4, AC-5 and the ledger, under the maintainer's account.

**Configuration required**: none.

**Critical test scenarios**:

- Every row of the _Invalid truth table_, asserting `aria-invalid` and error visibility, verifies **AC-7**.
- Inside `Field.Root` required: the textbox is named "Message" by the label, described by the helper, required, verifies **AC-7**.
- `rows` is 3 when omitted and follows the prop; the ref is the textarea element; `asChild` is rejected by the type, verifies **AC-6**.
- `AutoresizeGrows` in the browser: grows with typed lines, shrinks back to 81 px, `resize` is `none`; without autoresize, `resize` is `vertical` and the minimum holds, verifies **AC-9**.
- `axe` finds no violations in every listed state, verifies **AC-10**.
- Docker suite in compare only mode passes after the 24 new baselines, verifies **AC-8**, **AC-11**.
- Parity negative control reports a DIFF in both modes, verifies **AC-12**.
- Post pilot recheck and scope audit match the baseline plus the ledger, verifies **AC-4**, **AC-5**.

## Build plan

Tracer Bullet with design first: the artboard is the first layer, then one PR takes the component through code, stories, tests, baselines, parity and changeset.

1. Spec PR (this spec, scope row linked); merge after your confirmation, satisfies **AC-1**
2. Docs PR: _design first_ variant in `AGENTS.md` (_Paper artboards_, _Boundaries_ if needed) and `.github/pullfrog/review.md`; no changeset, satisfies **AC-1**
3. Paper run: baseline with Input measurement, write plan approval, pilot light artboard, recheck, dark sibling, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-4**
4. Design review of both artboards inside the run, any change drawn and folded into _Design values_; then scope audit, close, ledger summary in `rationale.md` (docs PR), satisfies **AC-4**, **AC-5**
5. Code PR: move Input's base classes into one shared constant (same array, same order), add `textarea/` with variants and component, add `Field.Textarea` and its type export, export from `src/index.ts`, satisfies **AC-6**, **AC-7**, **AC-8**, **AC-9**
6. Same PR: stories (12 visual plus `AutoresizeGrows`) and tests, satisfies **AC-9**, **AC-10**
7. Same PR: 24 Docker baselines, then the Docker suite in compare only mode, satisfies **AC-8**, **AC-11**
8. Same PR: parity table `parity/textarea.md` with negative control, every row resolved, satisfies **AC-12**
9. Same PR: `minor` changeset; merge when the required checks are green, satisfies **AC-13**

## Consequences

**Positive**:

- One more form control with no new dependency (Ark already ships `Field.Textarea` and autoresize).
- The shared class list keeps Input and Textarea from drifting.
- Proves the "Paper first, code follows" loop the rest of Slice 2 reuses, with its own written rule.

**Negative / tradeoffs**:

- `Field` grows a part, so its object API changes (additive, `minor`).
- `TextareaProps` drops `asChild`, unlike `InputProps`.
- Drawing before code means the artboard can show something the browser renders slightly differently (text wrapping, rounding); parity catches it, and a Paper fix then needs a new approved plan.
- A one row `lg` textarea is 50 px, 2 px taller than Input `lg`, and at its 48 px minimum the line scrolls.
- Autoresize runs after hydration, so a server render shows the `rows` height until then; it is fixed at mount.
- One more docs PR before the Paper run.

**Neutral**:

- Moving Input's base classes into a shared constant changes no output; the Docker compare run proves it.

## Follow-up

- [ ] Character counter and `maxLength` display for Textarea (out of scope here)
- [ ] Consider Textarea in `apps/sample` for an SSR smoke check of `autoresize`

## Rationale

Reasoning and options: see [rationale.md](rationale.md).
