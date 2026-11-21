# Verify: Alert · spec 0006 · updated 2026-11-21 · verified on `873ec84`

_Steps derived from spec 0006 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual

- [x] Open `Components/Alert` → `Default` in Storybook → a `div` 448 × 98 px with the informative colors, an "i" icon (`data-icon="info"`), the title "New version available" in a `p` and a two line description → AC-6, AC-8
- [x] Open `Neutral`, `Positive`, `Warning` and `Negative` → background, border and text equal the tone's tokens; icons `info`, `check`, `warning` and `error` → AC-7, AC-8
- [x] `TitleOnly` → 448 × 54 px, indicator and title only; `WithoutIndicator` → 448 × 78 px, no indicator, content starts 17 px from the left edge → AC-6, AC-8
- [x] Press Tab on every story → focus stays on the body; no alert part has a `tabindex`; the root has no `role` and no `aria-*`; the indicator is `aria-hidden="true"` → AC-7
- [x] Switch every story to dark mode → same geometry; colors equal the dark tokens (neutral border matches its fill, as recorded in the spec) → AC-8, AC-9
- [ ] Maintainer reviews the Paper artboards `3UA-0` and `3XM-0` (including the dark neutral border, which matches its fill) → AC-5

## Commands

- [x] `pnpm --filter @renonreis/triquetra exec vitest run src/components/alert` → 35 tests pass (defaults, `tone={undefined}`, `alertVariants` slots, block content in the description, tone mapping, icon per tone, custom indicator (stays hidden even with `aria-hidden="false"`), refs and props on every part, `data-part` kept, `className` merge, title `asChild`, no default role, `role="status"` and `role="alert"` passed through, Tab skips it, error outside `Root`, axe for 7 cases) → AC-6, AC-7, AC-9
- [x] `pnpm --filter @triquetra/storybook test` → 278 story tests pass in light and dark, every Alert story included, a11y addon in `error` → AC-9
- [x] `pnpm test:visual:docker` (alone, no other Storybook build running) → 274 pass, 14 Alert baselines, no baseline changed → AC-8, AC-10
- [x] `grep -n "alert" packages/react/src/index.ts` → `export * from './components/alert/index.js'`; `index.ts` of the component exports `Alert`, the five part prop types, `alertVariants` and `AlertVariants` → AC-6
- [x] `git diff origin/main -- packages/react/tokens` → empty: no token and no contrast pair added → AC-8
- [x] `cat .changeset/alert.md` → a `minor` entry for Alert → AC-12
- [x] Open `docs/specs/0006-alert/parity/alert.md` → 504 rows all `match`, negative control DIFF in both modes → AC-11

## Value sourcing

- [x] No `tone` → informative colors and the `info` icon → _Design values_ (`defaultVariants`, `Root` default)
- [x] Every color comes from a semantic token, checked against the token's own computed value in light and dark → `tokens.json`
- [x] No `role` unless the caller passes one → AC-7 (unit tests; Storybook URL args only reach declared controls, so the browser run checked the default only)

## Acceptance-criteria coverage

- AC-1 to AC-4: Paper run, recorded in `rationale.md` (run ledger summary); not repeated here.
- AC-5: open. The run closed under the engineer's advance approval; the engineer's own review of both artboards is still owed.
- AC-6: Default, TitleOnly, WithoutIndicator, exports, unit tests.
- AC-7: tones and icons, Tab and attribute check, unit tests.
- AC-8: tone checks, dark mode, token diff, Docker suite.
- AC-9: unit and story tests, dark mode.
- AC-10: Docker suite.
- AC-11: parity table.
- AC-12: changeset.
