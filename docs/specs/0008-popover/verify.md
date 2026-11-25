# Verify: Popover · spec 0008 · updated 2026-11-24 · verified on `cd98e46` (Storybook built in Docker; later commits are tests, baselines and docs)

_Steps derived from spec 0008 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual (real Chromium, light and dark, no console errors)

- [x] `Interaction` closed → no popover content in the DOM; the trigger has `aria-haspopup="dialog"` and `aria-expanded="false"` → AC-6, AC-7, AC-8
- [x] Tab to the trigger, then Enter, then Space → each opens the panel in a portal, `role="dialog"`, not modal, focus on "Copy link" with a visible ring; Escape removes it and returns focus → AC-6, AC-7
- [x] Click opens, a second click closes; the corner "Close" closes and returns focus; a press on the page closes → AC-7
- [x] The panel is named "Share project" and described by its description → AC-8
- [x] `TabOrder` → real Tab goes "Copy link", "Close", then "Next" after the trigger, and the panel closes → AC-7
- [x] `OutsideClick` → pressing "Elsewhere" closes the panel and keeps focus there → AC-7
- [x] `WithForm` → "Cancel" keeps its name; no repeated popover id → AC-8
- [x] `Nested` → the popover is above the dialog and not hidden from assistive tech; picking in the Select keeps it open; Escape closes only the popover → AC-7
- [x] `Default`, `WithForm`, `Overflow` at 320 × 568 and 320 × 256 → 304 px wide, 8 px from both sides, inside the viewport, no sideways page scroll → AC-9
- [ ] Maintainer reviews both Paper artboards → AC-5 (the maintainer marks this box)

## Commands

- [x] `pnpm --filter @renonreis/triquetra exec vitest run src/components/popover` → 27 tests pass. Eight mutations of `popover.tsx` (asChild label, asChild id, close handler, caller handler, `lazyMount`, `unmountOnExit`, `fitViewport`, positioning merge) each make a test fail → AC-6 to AC-9, AC-11
- [x] `pnpm test` → every story passes in light and dark with the a11y addon in `error` → AC-11
- [x] `pnpm test:visual:docker` (alone) → 292 pass, 8 Popover baselines, no other baseline changed → AC-10, AC-12
- [x] `git diff origin/main -- packages/react/tokens` → empty → AC-10
- [x] `docs/specs/0008-popover/parity/popover.md` → every row `match`, negative control DIFF in both modes → AC-13
- [x] `.changeset/popover.md` → a `minor` entry → AC-14

## Acceptance criteria coverage

- AC-1 to AC-5: Paper run, recorded in `rationale.md` (run ledger summary).
- AC-6 to AC-14: the steps above. All met.
