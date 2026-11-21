# Verify: Badge · spec 0005 · updated 2026-11-21 · verified on `e847bc5`

_Steps derived from spec 0005 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual

- [x] Open `Components/Badge` → `Default` in Storybook → a span with the text "Draft", neutral tone, 24 px high, pill radius, 1 px border, 14/20 medium text, 8 px side padding → AC-6, AC-8
- [x] Open `Positive`, `Warning`, `Negative` and `Informative` → background, border and text equal the `status.<tone>` tokens (`bg`, `border`, `fg`); neutral uses `bg.subtle`, `border.default` and `fg.muted` → AC-8
- [x] `Sizes` → the `sm` row is 20 px high with 12/16 text, the `md` row 24 px high with 14/20 text, every tone in both rows → AC-8
- [x] `Count` → the badges read "3", "12" and "99+"; their text content is "3 unread messages", "12 failed jobs" and "99+ new comments" (the context is `sr-only`) → AC-7
- [x] Press Tab on every story → focus stays on the body; no badge has a `role`, a `tabindex` or an `aria-*` attribute → AC-7
- [x] Switch every story to dark mode → same geometry; colors equal the dark tokens → AC-8, AC-9
- [ ] Maintainer reviews the Paper artboards `3OS-0` and `3RR-0` (including the dark neutral border, which matches its fill) → AC-5

## Commands

- [x] `pnpm --filter @renonreis/triquetra exec vitest run src/components/badge` → 13 tests pass (defaults, tone and size, ref and props, `className` merge, static contract, hidden context, axe for 7 cases) → AC-6, AC-7, AC-9
- [x] `pnpm --filter @triquetra/storybook test` → 264 story tests pass in light and dark, every Badge story included, a11y addon in `error` → AC-9
- [x] `pnpm test:visual:docker` (alone, no other Storybook build running) → 260 pass, 14 Badge baselines, no baseline changed → AC-8, AC-10
- [x] `grep -n "badge" packages/react/src/index.ts` → `export * from './components/badge/index.js'`; `index.ts` of the component exports `Badge`, `BadgeProps`, `badgeVariants` and `BadgeVariants` → AC-6
- [x] `git diff 1dd5f51 e847bc5 -- packages/react/tokens` → empty: no token and no contrast pair added → AC-8
- [x] `cat .changeset/badge.md` → a `minor` entry for Badge → AC-12
- [x] Open `docs/specs/0005-badge/parity/badge.md` → 554 rows all `match`, negative control DIFF in both modes → AC-11

## Value sourcing

- [x] No `tone` and no `size` → neutral and `md` → _Design values_ (`defaultVariants`)
- [x] Every color comes from a semantic token, checked against the token's own computed value in light and dark → `tokens.json`

## Acceptance-criteria coverage

- AC-1 to AC-4: Paper run, recorded in `rationale.md` (run ledger summary); not repeated here.
- AC-5: open. The run closed under the maintainer's advance approval; the maintainer's own review of both artboards is still owed.
- AC-6: Default, exports, unit tests.
- AC-7: Count, Tab and attribute check, unit tests.
- AC-8: tone and size checks, dark mode, token diff, Docker suite.
- AC-9: unit and story tests, dark mode.
- AC-10: Docker suite.
- AC-11: parity table.
- AC-12: changeset.
