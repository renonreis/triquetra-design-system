# Verify: Textarea · spec 0003 · updated 2026-11-21

_Steps derived from spec 0003 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual

- [ ] Open `Components/Textarea` → `Default` in Storybook → a 320 px wide field, 81 px high, 3 rows, placeholder "Write a short message" in `fg.muted` → AC-6, AC-8
- [ ] Type two lines in `Default` → the value keeps the line break, the field stays 81 px and scrolls past 3 lines → AC-6, AC-9
- [ ] Drag the resize corner of `Default` → it resizes vertically only and stops at 40 px → AC-9
- [ ] `Sizes` → heights 73, 81 and 98 px; padding 4/8, 8/12, 12/16 px; font 14, 14 and 16 px → AC-8
- [ ] `Hover`, `FocusVisible`, `Invalid`, `InvalidFocused`, `Disabled`, `ReadOnly` side by side with the same Input stories → same border, background, text and outline colors in light and dark → AC-8
- [ ] `Autoresize` → 123 px with five lines, no resize corner; type a sixth line → it grows; delete lines → it shrinks, never below 81 px → AC-9
- [ ] `InField` → the label "Message" names the field, the helper describes it, the `*` shows, no error text → AC-7
- [ ] `InFieldInvalid` → red border, `aria-invalid="true"`, helper then error "Write a message to continue." → AC-7
- [ ] Switch every story to dark mode → no a11y addon violations; colors follow the dark tokens → AC-10
- [ ] Compare `Default` and `InFieldInvalid` with the Paper artboards `2XD-0` and `32V-0` → same geometry and colors → AC-12

## Commands

- [ ] `pnpm --filter @renonreis/triquetra exec vitest run src/components/textarea` → all tests pass (props, ref, `rows`, invalid truth table, axe) → AC-6, AC-7, AC-10
- [ ] `pnpm --filter @triquetra/storybook test` → every Textarea story passes in light and dark, including `Autoresize` and `AutoresizeGrows` → AC-9, AC-10
- [ ] `pnpm test:visual:docker` (alone, no other Storybook build running) → 218 passed, 24 Textarea baselines, no other baseline changed → AC-8, AC-11
- [ ] `grep -n "Textarea" packages/react/src/index.ts packages/react/src/components/field/index.ts` and `pnpm test:package` → `Textarea`, `TextareaProps`, `textareaVariants`, `TextareaVariants`, `FieldTextareaProps` are public and the packed tarball type checks → AC-6, AC-7
- [ ] `ls .changeset` on the release PR, or the published changelog → a `minor` entry for Textarea → AC-13
- [ ] Open `docs/specs/0003-textarea/parity/textarea.md` → 632 rows all `match`, negative control DIFF in both modes → AC-12

## Value sourcing

- [ ] `rows`: render `<Textarea rows={5} />` → 5 rows; omit it → 3 → _Design values_
- [ ] Sizes and minimums: set `style.height = '0px'` on sm, md and lg → 32, 40 and 48 px → _Design values_
- [ ] Field context: `Field.Root disabled`, `readOnly`, `required` → the textarea is disabled, read only, required; a raw `aria-invalid="false"` on it wins over an invalid root → Ark `Field` context
- [ ] Autoresize: the height tracks the content only when `autoresize` is set at mount → `@zag-js/auto-resize`

## Acceptance-criteria coverage

- AC-1 to AC-5: Paper run, recorded in `rationale.md` (run ledger summary); not repeated here.
- AC-6: Default, value sourcing `rows`, unit tests, public exports.
- AC-7: InField, InFieldInvalid, unit tests, value sourcing Field context.
- AC-8: Default, Sizes, state stories against Input, Docker suite.
- AC-9: typing, resize corner, Autoresize, story tests.
- AC-10: dark mode a11y, unit and story tests.
- AC-11: Docker suite.
- AC-12: Paper comparison, parity table.
- AC-13: changeset.
