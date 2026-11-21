# 0004. Radio Group

**Date**: 2026-11-21
**Status**: Proposed

## Summary

Radio Group lets a user pick exactly one option from a short list. It wraps Ark UI's `RadioGroup` (keyboard, focus and ARIA come from Ark), looks like Checkbox in every shared state, and stacks its options vertically or in a row. The group is named by its own label part, because Ark's radio group does not read Field's context; a Fieldset component that adds helper and error text for groups is deferred. Like Textarea, it is drawn in Paper first (light and dark), you approve it, and then the code is built to match and measured against it.

## Requirements

**User stories**:

- As a product developer, I want a single choice group that matches Checkbox, so that forms with exclusive options look and behave consistently.
- As a keyboard or screen reader user, I want the group to be one named stop where arrow keys move the choice, so that I can answer quickly and know what I am answering.
- As the DS maintainer, I want to see and approve the Radio Group in Paper before any code, so that the design leads and the code follows.

**Acceptance criteria**:

- **AC-1**: Gates before any Paper write, in order: (1) this spec is confirmed by the maintainer and merged to `main` (the _design first_ variant in `AGENTS.md`, _Paper artboards_, already allows the run, so no docs PR); (2) the maintainer approves a write plan pinned to a `main` SHA and a Paper baseline. No write before both.
- **AC-2**: The Components page (`p-4-0`) has a new light artboard `Radio Group`, 1440 px wide, height `fit-content`, laid out as _Artboard content and placement_ says, with every cell in the _State inventory_ drawn with the values in _Design values_.
- **AC-3**: A sibling `Radio Group · Dark` has the same structure and copy; every color reference is a `-dark` token (artboard fill `--tq-color-bg-canvas-dark` included). The binding audit finds no light color token on it and no `-dark` token on the light artboard.
- **AC-4**: The run follows spec 0002 (_Binding rules_, _Allowed literals_ plus the additions here, tool list, run ledger, stops and recovery) and spec 0003's design first procedure. The recheck after the pilot compares Paper with the baseline plus exactly the pilot's ledger nodes. The scope audit compares the `get_jsx` of every artboard that existed at the baseline by SHA-256 of the saved text (see _Procedure_, step 1), their positions, and `contentHash.tokens`, all equal to the baseline.
- **AC-5**: The maintainer reviews both artboards before the run closes. Any change asked in that review is drawn and read back inside the same run, and written into _Design values_ (or taken back to `/architect` when it changes a decision here). Only then the scope audit runs and `finish_working_on_nodes` gets the two artboard IDs. After the close, no Paper write happens under this run.
- **AC-6**: `RadioGroup` is exported from `@renonreis/triquetra` as a compound object `{ Root, Label, Item, ItemControl, ItemText }`, with `RadioGroupRootProps`, `RadioGroupLabelProps`, `RadioGroupItemProps`, `RadioGroupItemControlProps`, `RadioGroupItemTextProps`, `radioGroupVariants` and `RadioGroupVariants`. Each part wraps the Ark part of the same name, forwards its ref and spreads the remaining props. `Root` takes `size` (`sm`, `md`, `lg`, default `md`) and shares it with every part through a styles context. `Item` renders Ark's `ItemHiddenInput` itself. `ItemControl` draws the dot when it has no children. Ark's `Indicator` is not exported.
- **AC-7**: Behavior comes from Ark: the root has `role="radiogroup"`, is named by `RadioGroup.Label` (required in every group: Ark always sets `aria-labelledby` to the label's id, so a group without it points at a missing id and fails axe; documented in the `Root` and `Label` JSDoc) and carries `aria-orientation`; each option is a native radio named by its `ItemText`; clicking an item or its text selects it; Tab enters the group once (on the checked radio, else the first enabled one); arrow keys move and select (wrapping, skipping disabled items); `value`, `defaultValue`, `onValueChange`, `name`, `form`, `disabled`, `invalid`, `readOnly`, `required` and `orientation` behave as Ark documents. `invalid` on `Root` sets `aria-invalid` on every radio; `required` sets `aria-required` on the group and `required` on every radio. A selected value is submitted with the form under `name`.
- **AC-8**: Styles follow _Design values_: the control matches Checkbox's control in every shared state (border, background, hover, focus ring, invalid, disabled, read only, checked fill and checked hover) except the round shape; the dot is `action.primary.fg` and shows only when checked; sizes, label and orientation layout as listed. Checkbox's rendering does not change.
- **AC-9**: `radio-group.stories.tsx` (meta tagged `visual`) has the 14 visual stories and the `KeyboardSelection` interaction story in _Stories_, run in light and dark with the a11y addon in `error` mode. `radio-group.test.tsx` (Vitest, jsdom) covers ref forwarding for every part, prop spreading, size context, names (group and radios), click selection, controlled and uncontrolled value with `onValueChange`, `invalid`, `required`, `disabled` (group and item), `readOnly`, form submission by `name`, and `axe` for default, checked, invalid, disabled, read only, horizontal and `InForm`.
- **AC-10**: 28 new baselines (14 visual stories × light and dark) are generated in the Playwright Docker image, then `pnpm test:visual:docker` passes in compare only mode with no other baseline changed. The Docker suite never runs while another Storybook build runs (they share `storybook-static`).
- **AC-11**: `rationale.md` links a parity table (`parity/radio-group.md`, light and dark) for the 14 cells per mode in _Parity_, measured on the code PR's Storybook, with spec 0002's columns and _Normalization_ (OKLCH components rounded half up), plus a read only negative control. Every row is `match` or resolved before the PR merges: fixed in code and measured again in both modes, or `design change` / `deviation` with the maintainer's approval and a follow up.
- **AC-12**: The code PR carries a `minor` changeset (new public exports `RadioGroup` and its types and variants).

## Decision

**Chosen option**: Option 1: a compound `RadioGroup` on Ark `RadioGroup`, named by its own `Label`, styled like Checkbox with a round control and a filled checked state, size on `Root`, vertical by default with a horizontal option, designed in Paper first.

It reuses what Checkbox already proved (tokens, states, contrast pairs) and leaves group level helper and error text to a later Fieldset component.

## Feature design

**Data model**: none. The surface is the React API below, the two Paper artboards and the parity table.

**API surface**:

| Export                                                 | Kind   | Key inputs                                                                                                                                                                                             | Notes                                                                                                                                |
| ------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `RadioGroup.Root`, `RadioGroupRootProps`               | part   | `size?: 'sm' \| 'md' \| 'lg'` (`md`), `orientation?: 'vertical' \| 'horizontal'` (`vertical`), `value`, `defaultValue`, `onValueChange`, `name`, `form`, `disabled`, `invalid`, `readOnly`, `required` | `forwardRef<HTMLDivElement>`; `RadioGroupRootProps extends ArkRadioGroup.RootProps, RadioGroupVariants`; provides the styles context |
| `RadioGroup.Label`, `RadioGroupLabelProps`             | part   | children                                                                                                                                                                                               | `forwardRef<HTMLSpanElement>`; names the group (Ark sets `aria-labelledby`)                                                          |
| `RadioGroup.Item`, `RadioGroupItemProps`               | part   | `value: string` (required, unique in the group), `disabled?`, `invalid?`                                                                                                                               | `forwardRef<HTMLLabelElement>`; renders `children` then `ArkRadioGroup.ItemHiddenInput`, as `Checkbox.Root` renders its hidden input |
| `RadioGroup.ItemControl`, `RadioGroupItemControlProps` | part   | children (optional)                                                                                                                                                                                    | `forwardRef<HTMLDivElement>`; without children renders the dot `<span>` (`aria-hidden` comes from Ark on the control)                |
| `RadioGroup.ItemText`, `RadioGroupItemTextProps`       | part   | children                                                                                                                                                                                               | `forwardRef<HTMLSpanElement>`; names the radio                                                                                       |
| `radioGroupVariants`, `RadioGroupVariants`             | `tv()` | `size`                                                                                                                                                                                                 | slots `root`, `label`, `item`, `control`, `dot`, `itemText`; exported like `checkboxVariants`                                        |

Files: `packages/react/src/components/radio-group/` (`radio-group.tsx`, `radio-group.variants.ts`, `radio-group.stories.tsx`, `radio-group.test.tsx`, `index.ts`) and one export line in `src/index.ts`. Usage:

```tsx
<RadioGroup.Root name="contact" defaultValue="email">
  <RadioGroup.Label>Contact method</RadioGroup.Label>
  <RadioGroup.Item value="email">
    <RadioGroup.ItemControl />
    <RadioGroup.ItemText>Email</RadioGroup.ItemText>
  </RadioGroup.Item>
</RadioGroup.Root>
```

### Invalid, disabled and read only (from Ark's connect)

| Prop                     | Group                                     | Each radio input                             | Each item part                    |
| ------------------------ | ----------------------------------------- | -------------------------------------------- | --------------------------------- |
| `invalid` on `Root`      | `data-invalid`                            | `aria-invalid="true"`                        | `data-invalid`                    |
| `invalid` on one `Item`  | none                                      | `aria-invalid="true"` on that radio only     | `data-invalid` on that item only  |
| `disabled` on `Root`     | `aria-disabled`, `data-disabled`          | `disabled`                                   | `data-disabled`                   |
| `disabled` on one `Item` | none                                      | `disabled` on that radio; arrow keys skip it | `data-disabled` on that item only |
| `readOnly` on `Root`     | `aria-readonly`, `data-readonly` on items | `disabled` (Ark), so not focusable or sent   | `data-readonly`                   |
| `required` on `Root`     | `aria-required`, `data-required`          | `required`                                   | none                              |

Read only is Ark's behavior as shipped: the radios become disabled, so a read only group is skipped by Tab and its value is not submitted with the form. Recorded under _Consequences_, tested as is.

### Design values

**Shared with Checkbox**: the control's classes are Checkbox's control list at the design SHA, with `rounded-control` replaced by `rounded-full` and every `indeterminate` rule removed; the item and item text classes are Checkbox's `root` and `label` classes without `group/checkbox`, as listed below. For every shared state the values to draw are the ones Checkbox renders: procedure step 1 measures the Checkbox stories (`Default` after its play, `Checked`, `Hover`, `CheckedHover`, `FocusVisible`, `Invalid`, `Disabled`, `DisabledChecked`, `ReadOnly`, `Sizes`) in Storybook at the pinned SHA, in both modes. That settles the checked fill and border, checked hover, the focus ring and its offset, invalid on checked, read only on checked, and disabled text color. The focus ring is spec 0002's Checkbox row: `border.focus` (invalid: `border.negative`), 2 px, offset 2 px, gap in the cell fill.

**Radio only**:

| Slot      | Classes                                                                                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root`    | `flex w-full flex-col gap-3 font-body`, horizontal: `data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:gap-x-4` (row gap stays 3)                |
| `label`   | Field.Label's classes: `inline-flex items-center gap-1 text-sm font-medium text-fg-default data-disabled:text-fg-disabled`, plus `data-[orientation=horizontal]:basis-full` so the label keeps its own line |
| `control` | Checkbox control list as above, plus `group/radio-control`                                                                                                                                                  |
| `dot`     | `hidden rounded-full bg-current group-data-[state=checked]/radio-control:block`                                                                                                                             |

| Size | Control (outer)  | Dot              | Item text           |
| ---- | ---------------- | ---------------- | ------------------- |
| sm   | `size-4` (16 px) | `size-2` (8 px)  | `text-sm leading-4` |
| md   | `size-5` (20 px) | `size-2` (8 px)  | `text-sm leading-5` |
| lg   | `size-6` (24 px) | `size-3` (12 px) | `text-md leading-6` |

The dot is centered in the control (the control is `inline-flex items-center justify-center`) and takes the control's text color: `action.primary.fg` when checked, `fg.disabled` when disabled. The group label stays `text-sm` at every size.

The `item` slot is `inline-flex items-start gap-2 font-body text-fg-default cursor-pointer data-disabled:cursor-not-allowed data-readonly:cursor-default`; the `itemText` slot is `select-none data-disabled:text-fg-disabled`. The `tv()` size variant maps only these slots (`label` does not change with size):

```ts
size: {
  sm: { control: 'size-4', dot: 'size-2', itemText: 'text-sm leading-4' },
  md: { control: 'size-5', dot: 'size-2', itemText: 'text-sm leading-5' },
  lg: { control: 'size-6', dot: 'size-3', itemText: 'text-md leading-6' },
},
defaultVariants: { size: 'md' },
```

**Allowed literals added to spec 0002's list**: the artboard layout widths in _Artboard content and placement_ (320 and 480 px cells). No other new literal: every size, gap and color above is a token.

### Stories

Meta: `title: 'Components/RadioGroup'`, `component: RadioGroup.Root`, `tags: ['autodocs', 'visual']`, args `size: 'md'`, `orientation: 'vertical'`, `disabled: false`, `invalid: false`, `readOnly: false`, `required: false`, `name: 'contact'`. Render: `RadioGroup.Root {...args}` → `RadioGroup.Label` "Contact method" → three items `email` "Email", `phone` "Phone", `sms` "Text message", each `ItemControl` + `ItemText`. Hover and focus are real interactions (as Checkbox: Ark sets `data-hover` and `data-focus-visible` from real events), and each hover play ends on the hovered item.

| Story                 | Args and play                                                                                                                                                                                                                                                                                                                                                                                                               | Checkpoint                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `Default`             | no value; play only asserts the group name, three radios, none checked                                                                                                                                                                                                                                                                                                                                                      | after play                                                     |
| `Checked`             | `defaultValue: 'email'`                                                                                                                                                                                                                                                                                                                                                                                                     | first render                                                   |
| `Sizes`               | three groups sm, md, lg in a column with `gap-6`, labels "Contact method (sm)" etc., each `defaultValue: 'email'`                                                                                                                                                                                                                                                                                                           | first render                                                   |
| `Horizontal`          | `orientation: 'horizontal'`, `defaultValue: 'email'`                                                                                                                                                                                                                                                                                                                                                                        | first render                                                   |
| `Hover`               | no value; play hovers "Phone"                                                                                                                                                                                                                                                                                                                                                                                               | after play                                                     |
| `CheckedHover`        | `defaultValue: 'email'`; play hovers "Email"                                                                                                                                                                                                                                                                                                                                                                                | after play                                                     |
| `FocusVisible`        | no value; play presses Tab and asserts "Email" has focus                                                                                                                                                                                                                                                                                                                                                                    | after play                                                     |
| `CheckedFocusVisible` | `defaultValue: 'phone'`; play presses Tab and asserts "Phone" has focus                                                                                                                                                                                                                                                                                                                                                     | after play                                                     |
| `Invalid`             | `invalid: true`, `defaultValue: 'email'`                                                                                                                                                                                                                                                                                                                                                                                    | first render                                                   |
| `InvalidFocusVisible` | `invalid: true`, `defaultValue: 'email'`; play presses Tab and asserts "Email" has focus                                                                                                                                                                                                                                                                                                                                    | after play                                                     |
| `Disabled`            | `disabled: true`, `defaultValue: 'email'`                                                                                                                                                                                                                                                                                                                                                                                   | first render                                                   |
| `DisabledItem`        | `defaultValue: 'email'`, item `sms` `disabled`                                                                                                                                                                                                                                                                                                                                                                              | first render                                                   |
| `ReadOnly`            | `readOnly: true`, `defaultValue: 'email'`                                                                                                                                                                                                                                                                                                                                                                                   | first render                                                   |
| `InForm`              | `<form>` with a column `flex flex-col gap-2`: the group (`required`, `invalid`, no value, `aria-describedby` the error id) then a `<span>` "Choose how we should contact you." with Field.ErrorText's classes (`text-xs leading-normal font-medium text-status-negative-fg`)                                                                                                                                                | first render; play asserts the group is described by the error |
| `KeyboardSelection`   | `tags: ['!visual']`, `defaultValue: 'email'`, item `sms` `disabled`; play: Tab focuses "Email"; ArrowDown selects "Phone"; ArrowDown wraps to "Email" (skips the disabled one); ArrowUp selects "Phone". The render wraps the group in a `<form>` with a Triquetra `Button type="submit"` "Submit"; `onSubmit` calls `preventDefault` and keeps `new FormData(form)`; play clicks "Submit" and asserts `contact` is `phone` | after play, not screenshotted                                  |

### State inventory (artboard cells and parity)

14 cells per mode, one per visual story, each drawn as the whole group at its checkpoint: `Default`, `Checked`, `Hover`, `CheckedHover`, `FocusVisible`, `CheckedFocusVisible`, `Invalid`, `InvalidFocusVisible`, `Disabled`, `DisabledItem`, `ReadOnly` (the States grid), then `Sizes`, `Horizontal`, `InForm`. Together they cover every control state unchecked and checked, item level disabled, three sizes and both orientations.

### Artboard content and placement

- **Chrome** (header, section titles, captions, Props table, snippet box): same structure, typography and spacing as the spec 0003 artboard `2XD-0` (Textarea), read with `get_jsx` at the baseline, with every value bound per spec 0002's _Binding rules_ (semantic tokens only; the snippet uses `--tq-font-family-mono`). Never copy a literal from `IB-0`, `O0-0` or `R7-0`.
- **Header**: eyebrow `Components / 11`, title `Radio Group`, description "A single choice group, built like Checkbox, for picking one option from a short list.", snippet `import { RadioGroup } from '@renonreis/triquetra';`.
- **States**: a grid of 3 columns by 4 rows of 320 px cells in the inventory order (row 4 holds 2 cells; the 12th slot stays empty, no node), each captioned with the story name above the group (caption inside the cell, as Textarea's grid). Column and row gap as `2XD-0`'s grid. Cells align top.
- **Sizes**, **Horizontal**, **In form**: one row, top aligned, in that order: `Sizes` 320 px, `Horizontal` 480 px (three items in a row fit without wrapping), `InForm` 320 px, captioned with the story name.
- **Props** rows (name, type, default): `size` · `'sm' | 'md' | 'lg'` · `md`; `orientation` · `'vertical' | 'horizontal'` · `vertical`; `value`, `defaultValue` · `string` · none; `onValueChange` · `(details) => void` · none; `name` · `string` · none; `disabled` · `boolean` · `false`; `invalid` · `boolean` · `false`; `readOnly` · `boolean` · `false`; `required` · `boolean` · `false`; `Item` `value` · `string` · required; `Item` `disabled` · `boolean` · `false`; `Item` `invalid` · `boolean` · `false`. A note under the table: "Arrow keys move and select. Tab enters the group once."
- **Placement**: light at world y 0, 80 px right of the rightmost artboard whose y is 0 (Textarea `2XD-0` today at x 10640, 1440 wide, so x 12160). Dark directly under it, at y = the larger of the current dark row y (3990 today) and the bottom of the tallest light artboard plus 160. If either slot overlaps any artboard, shift right in 80 px steps until it does not. Existing artboards never move.
- **Dark**: `duplicate_nodes` of the finished light artboard plus one `update_styles` batch that swaps every color to its `-dark` token, mapped by the `descendantIdMap`. Spec 0002's lessons apply: set `fontSize` and `lineHeight` with `update_styles` after `create_artboard`; after a color change on text, rewrite span colors with `set_text_content` (`html`). Write rows one at a time (no parallel `write_html` into the same parent), so the order is the call order.

### Procedure

Spec 0003's design first procedure with these changes:

1. **Baseline**: pin `main` (the design SHA), `tokens:paper:diff` exit 0, save `get_basic_info`, and save the `get_jsx` of every artboard on `p-4-0` to a file per artboard (13 expected). When the tool returns the JSX inline instead of saving it, write the returned text to that file unchanged. Record the SHA-256 of each file; the scope audit compares these hashes for every artboard, so no artboard falls back to a structure only check. A different artboard count does not block the run but goes into the plan. Measure the Checkbox stories listed in _Design values_ at that SHA, both modes.
2. **Plan approval** and 3. **recheck before the first write**, as spec 0002.
3. **Pilot**: draw `Radio Group` light, screenshot after each section, binding round trip, show the maintainer and wait.
4. After approval, recheck: `main` unchanged for `tokens/`, `checkbox/` and `field/`; Paper equals the baseline plus exactly the pilot's ledger nodes. Draw `Radio Group · Dark`, dark audit.
5. **Design review** of both artboards with the maintainer (AC-5); apply and read back any change.
6. **Scope audit** (hashes, positions, `contentHash.tokens`), then `finish_working_on_nodes` with the two IDs. Commit the ledger summary to `rationale.md` (design SHA, approvals with dates, artboard IDs, call count, audit result).
7. **Parity after code**: measure the code PR's Storybook at its head SHA (the measurement SHA, recorded separately) with spec 0002's _Parity_ method (1280 × 720, both modes) against `get_computed_styles` of the artboard nodes. Every label is one line; confirm it on a scale 2 Paper screenshot, since Paper text boxes stretch to their frame.

### Parity

Per cell, the parts and properties compared (spec 0002 _Normalization_; OKLCH components rounded half up to 3 decimals, alpha to 2):

- **Group**: root gap (row and column), item positions relative to the cell (orientation and wrapping); label color, font size, weight and line height.
- **Each item**: gap between control and text; control width, height, radius, background, border color, width and style; dot visibility, size, color and centering; text color, font family, size, weight and line height; outline color, width, offset and gap (focus cells).
- **InForm**: the error text color, size, weight, line height and its gap from the group.
- **Excluded**: Paper only chrome (header, captions, Props) and the visually hidden radio inputs.
- **Negative control**: read only, in the comparison input only: replace one Paper border color with a wrong token's value (for example `border.default` in place of `border.strong` on an unchecked control in `Default`) and confirm the comparison reports a DIFF, in both modes. No Paper write.
- After any code fix, the affected rows are measured again in both modes and the row records the new head SHA.

**Value sourcing**:

| Action | Value produced or displayed                                       | Source                                                                     |
| ------ | ----------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Draw   | cells, copy, args                                                 | _Stories_ and _State inventory_                                            |
| Draw   | shared state styles (fills, borders, hover, focus ring, disabled) | Checkbox stories measured at the design SHA (procedure step 1)             |
| Draw   | shape, dot sizes, sizes, gaps, orientation layout, label style    | _Design values_                                                            |
| Draw   | error text style in `InForm`                                      | `field.variants.ts` `errorText` at the design SHA                          |
| Draw   | token name per value, literals                                    | spec 0002 _Binding rules_ and _Allowed literals_, plus the additions above |
| Draw   | chrome, Props copy, placement                                     | _Artboard content and placement_, `2XD-0` via `get_jsx`, `get_basic_info`  |
| Code   | classes per slot and size                                         | _Design values_ (after any AC-5 change)                                    |
| Code   | roles, names, `aria-*`, `data-*`, keyboard, focus, form value     | Ark `RadioGroup` (`@zag-js/radio-group`), the table above                  |
| Code   | radio `name` when the caller passes none                          | Ark (falls back to the group id)                                           |
| Parity | code value and Paper value                                        | Storybook at the measurement SHA, `get_computed_styles` of ledger nodes    |

**Key invariants**:

- Exactly one value or none is selected; item `value`s are unique within a group (Ark builds ids from them).
- The control matches Checkbox's control in every shared state; Checkbox's rendering does not move in this feature.
- Semantic token utilities only: no `dark:`, no arbitrary values; state through Ark's `data-*` attributes like Checkbox.
- No Paper token is created, changed or deleted; no write outside the run ledger; no write after the run closes without a new approved plan.

**Security model**: no data and no secrets. Paper writes are limited by AC-1, AC-4, AC-5 and the ledger, under the maintainer's account.

**Configuration required**: none.

**Critical test scenarios**:

- Group named "Contact method", three radios named by their text; clicking "Phone" checks it and calls `onValueChange` once with `{ value: 'phone' }`, verifies **AC-6**, **AC-7**.
- `KeyboardSelection` in the browser: Tab, arrows, wrap, disabled skip and the submitted `FormData` value, verifies **AC-7**, **AC-9**.
- `invalid` on `Root` puts `aria-invalid` on every radio; on one `Item`, only on that radio; `required` puts `aria-required` on the group and `required` on the radios, verifies **AC-7**.
- `readOnly`: clicking does not change the value, and the radios are disabled (Ark's behavior, asserted so a change in Ark shows up), verifies **AC-7**.
- `axe` finds no violations in every listed state, verifies **AC-9**.
- Docker suite in compare only mode passes after the 28 new baselines with Checkbox unchanged, verifies **AC-8**, **AC-10**.
- Parity negative control reports a DIFF in both modes, verifies **AC-11**.
- Post pilot recheck and scope audit match the baseline plus the ledger, by hash, verifies **AC-4**, **AC-5**.

## Build plan

Tracer Bullet with design first: the artboard is the first layer, then one PR takes the component through code, stories, tests, baselines, parity and changeset.

1. Spec PR (this spec, scope row linked, At a glance rows 5 to 8, Fieldset in Deferred); merge after your confirmation, satisfies **AC-1**
2. Paper run: baseline with JSX hashes and Checkbox measurement, write plan approval, pilot light artboard, recheck, dark sibling, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-4**
3. Design review of both artboards inside the run, any change drawn and folded into _Design values_; then scope audit, close, ledger summary in `rationale.md` (docs PR), satisfies **AC-4**, **AC-5**
4. Code PR: `radio-group/` with variants and the five parts, export from `src/index.ts`, satisfies **AC-6**, **AC-7**, **AC-8**
5. Same PR: stories (14 visual plus `KeyboardSelection`) and tests, satisfies **AC-7**, **AC-9**
6. Same PR: 28 Docker baselines, then the Docker suite in compare only mode, alone, satisfies **AC-8**, **AC-10**
7. Same PR: parity table `parity/radio-group.md` with negative control, every row resolved, satisfies **AC-11**
8. Same PR: `minor` changeset; merge when the required checks are green, satisfies **AC-12**

## Consequences

**Positive**:

- One more form control with no new dependency (Ark already ships `RadioGroup`).
- Same look, tokens and contrast pairs as Checkbox, so no new contrast test pair and no token change.
- Second design first run, now with hash based scope audits for every artboard.

**Negative / tradeoffs**:

- No helper or error text part and no visual required marker: forms wire an error line by hand (`InForm` shows how) until the Fieldset follow up.
- Read only groups are skipped by Tab and not submitted, because Ark disables the radios; the read only look is still shown.
- The control's classes are a copy of Checkbox's list (minus shape and indeterminate), so a later Checkbox change must be mirrored by hand; parity against Checkbox catches drift only when measured.
- The dot ratio is not constant (8 of 16, 8 of 20, 12 of 24 px), since the spacing scale has no 6 or 10 px step.

**Neutral**:

- `RadioGroup` is a compound object, so React Server Components use it inside their own client components, like Checkbox.

## Follow-up

- [ ] Fieldset component on Ark Fieldset for `Checkbox.Group` and `RadioGroup` (legend, helper, error, required marker), in the scope's Deferred list
- [ ] Item description line under each option (out of scope here)
- [ ] Revisit read only submission if Ark changes it or a product needs the value sent

## Rationale

Reasoning and options: see [rationale.md](rationale.md).
