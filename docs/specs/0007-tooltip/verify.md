# Verify: Tooltip · spec 0007 · updated 2026-11-21 · verified on `3c0055d` (Storybook built at `dde7b1b`; the later commit is docs only)

_Steps derived from spec 0007 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual

- [x] Open `Components/Tooltip` → `Interaction` (closed) → nothing of the tooltip in the DOM, the button has no `aria-describedby` → AC-6, AC-7
- [x] Press Tab → the button takes focus, a `role="tooltip"` appears at once on top, outside `#storybook-root` (portal), without `tabindex`, and the button's `aria-describedby` equals its `id` → AC-6, AC-7
- [x] Press Escape → the tooltip is removed; Tab away → it stays closed (blur) → AC-7
- [x] Hover the button → no tooltip at 250 ms, a tooltip at 650 ms (400 ms open delay) → AC-7
- [x] Move the pointer from the button onto the tooltip → it stays open (`pointer-events: auto`, WCAG 1.4.13); move away → it closes → AC-6, AC-7
- [x] Repeat all of the above in dark mode → same results; the tooltip turns near white with dark text; no console errors in either mode → AC-8
- [x] Open `Default`, `Bottom`, `Left`, `Right` and `LongText` in light and dark → the tooltip sits 8 px from the button on the asked side, centered; one line tooltips are 24 px high, `LongText` is 320 × 40 px on two lines; colors equal `bg.inverse` and `fg.inverse` per mode (measured by the parity script) → AC-8, AC-11
- [ ] Maintainer reviews the Paper artboards `40N-0` and `43F-0` (including how loud the near white tooltip feels in dark) → AC-5

## Commands

- [x] `pnpm --filter @renonreis/triquetra exec vitest run src/components/tooltip` → 15 tests pass (closed state, keyboard focus, Escape, blur, hover delay, disabled, touch, portal, placement default and override, `interactive` default and off, `unmountOnExit` and `lazyMount` off, refs, props and `className` on Trigger and Content, `tooltipVariants` slots, axe closed and open) → AC-6, AC-7, AC-9
- [x] `pnpm test` → 324 unit tests and 290 story tests pass, every Tooltip story in light and dark with the a11y addon in `error` → AC-9
- [x] `pnpm test:visual:docker` (alone, no other Storybook build running) → 284 pass, 10 Tooltip baselines, no other baseline changed → AC-8, AC-10
- [x] `grep -n tooltip packages/react/src/index.ts` → `export * from './components/tooltip/index.js'`; the component `index.ts` exports `Tooltip`, the three part prop types and `tooltipVariants` → AC-6
- [x] `git diff origin/main -- packages/react/tokens` → empty: no token and no contrast pair added → AC-8
- [x] `cat .changeset/tooltip.md` → a `minor` entry for Tooltip → AC-12
- [x] Open `docs/specs/0007-tooltip/parity/tooltip.md` → 280 rows all `match`, negative control DIFF in both modes → AC-11

## Value sourcing

- [x] No `positioning` → placement `top` → _Design values_ and the `Root` default (AC-6)
- [x] Delays come from Ark (400 ms open observed in the browser); `role`, ids and `aria-describedby` come from Ark → AC-7
- [x] Every color comes from a semantic token, checked against `tokens.json` in light and dark → AC-8

## Acceptance-criteria coverage

- AC-1 to AC-4: Paper run, recorded in `rationale.md` (run ledger summary); not repeated here.
- AC-5: open. The run closed under the engineer's advance approval; the engineer's own review of both artboards is still owed.
- AC-6: Interaction story checks, exports, unit tests.
- AC-7: keyboard, Escape, blur, hover delay and hoverable content in the browser; disabled and touch in unit tests.
- AC-8: dark mode, token diff, parity colors, Docker suite.
- AC-9: unit and story tests.
- AC-10: Docker suite.
- AC-11: parity table.
- AC-12: changeset.
