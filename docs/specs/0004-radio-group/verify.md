# Verify: Radio Group · spec 0004 · updated 2026-11-21 · verified on `d865f62`

_Steps derived from spec 0004 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual

- [x] Open `Components/RadioGroup` → `Default` in Storybook → a group named "Contact method" with three radios (Email, Phone, Text message), none checked, controls 20 px round → AC-6, AC-7
- [x] Click "Phone" in `Default` → only Phone is checked; click "Email" → Email checked, Phone unchecked → AC-7
- [x] `KeyboardSelection` → Tab focuses Email; ArrowDown selects Phone; ArrowDown wraps to Email past the disabled Text message; ArrowUp selects Phone; Submit shows `phone` → AC-7, AC-9
- [x] `Sizes` → controls 16, 20 and 24 px, dots 8, 8 and 12 px, text 14/16, 14/20 and 16/24 → AC-8
- [x] `Hover`, `CheckedHover`, `FocusVisible`, `Invalid`, `Disabled`, `ReadOnly` next to the matching Checkbox stories → same fill, border, outline and text colors, round shape only → AC-8
- [x] `Horizontal` → three items in one row, 16 px apart, label on its own line above → AC-8
- [x] `InForm` → red borders, the group is described by "Choose how we should contact you." and has `aria-required="true"` → AC-7
- [x] Switch every story to dark mode → no a11y addon violations; colors follow the dark tokens (checked fill white, dot dark) → AC-9
- [x] Compare `Checked` and `InForm` with the Paper artboards `380-0` and `3GK-0` → same geometry and colors → AC-11

## Commands

- [x] `pnpm --filter @renonreis/triquetra exec vitest run src/components/radio-group` → 23 tests pass (names, click, values, invalid, required, disabled, read only, form value with and without `name`, size context, refs, axe) → AC-6, AC-7, AC-9
- [x] `pnpm --filter @triquetra/storybook test` → every RadioGroup story passes in light and dark, including `KeyboardSelection` → AC-7, AC-9
- [x] `pnpm test:visual:docker` (alone, no other Storybook build running) → all pass, 28 RadioGroup baselines, no other baseline changed → AC-8, AC-10
- [x] `grep -n "radio-group" packages/react/src/index.ts` and `pnpm test:package` → `RadioGroup`, its five prop types, `radioGroupVariants` and `RadioGroupVariants` are public and the packed tarball type checks → AC-6
- [x] `ls .changeset` on the release PR, or the published changelog → a `minor` entry for RadioGroup → AC-12
- [x] Open `docs/specs/0004-radio-group/parity/radio-group.md` → 1692 rows all `match`, negative control DIFF in both modes → AC-11

## Value sourcing

- [x] `size="lg"` on `Root` only → every control is 24 px and every text 16/24 → _Design values_ (size context)
- [x] Omit `name` and submit a form → the radios share Ark's group id as their name and the value is sent → Ark `RadioGroup`
- [x] `readOnly` with a value → clicking changes nothing, the radios are disabled, and the value is not in the submitted `FormData` → Ark `RadioGroup` (recorded consequence)
- [x] `invalid` on one `Item` only → `aria-invalid` on that radio alone → Ark `RadioGroup`

## Acceptance-criteria coverage

- AC-1 to AC-5: Paper run, recorded in `rationale.md` (run ledger summary); not repeated here.
- AC-6: Default, exports, unit tests.
- AC-7: click, KeyboardSelection, InForm, unit tests, value sourcing.
- AC-8: Sizes, state stories against Checkbox, Horizontal, Docker suite.
- AC-9: dark mode a11y, unit and story tests.
- AC-10: Docker suite.
- AC-11: Paper comparison, parity table.
- AC-12: changeset.
