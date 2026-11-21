# Scope: Triquetra Design System

A React design system (DTCG tokens, accessible components on Ark UI, Storybook docs) published as `@renonreis/triquetra`. It serves the engineer's own products and is the pilot project of the Zero Dawn workflow.

**Build approach:** Tracer Bullet (each slice goes through every layer, working: tokens → component → stories and tests → visual baselines → changeset).
**Workflow:** Beta (after `/develop`: `/check verify`, then `/test`). The project default level of rigor. `/architect` is the recommended first stop for a feature with a real decision, but skippable when you already know the build. Any feature can carry its own tag (e.g. `· GA`) to do more or less.

_These are recommendations to keep your build orderly, not requirements. Skip anything that does not fit: if you already know how to build a feature, use `/develop` and skip `/architect`. You decide when a feature is `done`._

One scope for the whole monorepo: `apps/storybook` and `apps/sample` exist only to document and prove `packages/react`, so they are not separate products.

## At a glance

| #   | Feature                                                         | Phase    | Status      |
| --- | --------------------------------------------------------------- | -------- | ----------- |
| A   | Token pipeline (Brand × Theme × Mode)                           | Existing | existing    |
| B   | Base components (Button, Input, Card, Field, Dialog)            | Existing | existing    |
| C   | Form and navigation components (Checkbox, Switch, Select, Tabs) | Existing | existing    |
| D   | Storybook docs and PR previews                                  | Existing | existing    |
| E   | Next.js sample app                                              | Existing | existing    |
| F   | Quality gates (CI, a11y, contrast, visual, packed tarball)      | Existing | existing    |
| G   | Release pipeline (Changesets, GitHub Packages)                  | Existing | existing    |
| H   | AI review gate (Pullfrog)                                       | Existing | existing    |
| 1   | UI foundation: token contract and Paper parity                  | Slice 1  | done        |
| 2   | Paper artboards for Checkbox, Switch, Select, Tabs              | Slice 1  | done        |
| 3   | Next components                                                 | Slice 2  | done        |
| 4   | Textarea                                                        | Slice 2  | done        |
| 5   | Radio Group                                                     | Slice 2  | done        |
| 6   | Badge                                                           | Slice 2  | in-progress |
| 7   | Alert                                                           | Slice 2  | in-progress |
| 8   | Tooltip                                                         | Slice 2  | in-progress |

## Already built

### A. Token pipeline (Brand × Theme × Mode) · existing

DTCG 2025.10 source in `packages/react/tokens/` (primitives, brand `triquetra`, theme `default` in light and dark), compiled by Style Dictionary into CSS variables, a Tailwind v4 `@theme` and `tokens.json`, with build time validation and WCAG contrast tests. Geist Sans ships as the brand font. code in `packages/react/tokens/`, `packages/react/scripts/`

### B. Base components (Button, Input, Card, Field, Dialog) · existing

Ark UI based, styled through `tv()` with semantic utilities only, each with behavior and axe tests, stories in light and dark, and visual baselines. code in `packages/react/src/components/`

### C. Form and navigation components (Checkbox, Switch, Select, Tabs) · existing

Same conventions as B, released in 0.4.0. Drawn in Paper, light and dark (feature 2, spec 0002). code in `packages/react/src/components/`

### D. Storybook docs and PR previews · existing

Storybook is the dev environment and the docs site: token foundations, a story per variant and state, previews per PR on Cloudflare Pages, `main` on triquetra.renon.dev. code in `apps/storybook/`

### E. Next.js sample app · existing

App Router consumer that proves SSR and RSC use (`'use client'` bundle), with Playwright smoke tests in light and dark. code in `apps/sample/`

### F. Quality gates (CI, a11y, contrast, visual, packed tarball) · existing

Required checks on `main`: lint and typecheck, unit and token tests, Storybook accessibility, visual regression in the Playwright Docker image, build. Also the sample app and the packed tarball (publint, attw, clean Vite and Next.js apps). code in `.github/workflows/ci.yml`, `tests/package/`

### G. Release pipeline (Changesets, GitHub Packages) · existing

Pending changesets open a `chore: release` PR through a GitHub App token; merging it publishes to GitHub Packages. code in `.github/workflows/release.yml`, `.changeset/`

### H. AI review gate (Pullfrog) · existing

Pullfrog (Claude Opus) reviews PRs against `.github/pullfrog/review.md`. Paused since 2026-11-19 to save tokens; only the maintainer turns it back on. code in `.github/workflows/pullfrog.yml`, `.github/pullfrog/`

## Slice 1: UI foundation

### 1. UI foundation: token contract and Paper parity · done

Write down that `packages/react/tokens/` is the source of truth for tokens and Paper is a consumer, and fix the contract a future token manager (a separate product) will read and write. Then bring the Paper file in line with it, since Paper today mirrors only part of the code: light mode only, no `brand.color.primary` or `brand.color.informative` roles (informative status points at secondary), no shadow, motion or container tokens, no `font.family.heading`, `space.0` or `radius.none`, and a stray `--untitled` token.
**Done when:** a spec records the token source of truth, the token contract (paths, naming, brand and theme axes, what the build validates) and how tokens reach Paper until the manager exists; every semantic token in the code has a matching Paper variable in both modes (or a recorded reason why not); a repeatable parity check reports drift between the code and Paper.

- [x] Design it (spec): `/architect UI foundation`
- [x] Build it: `/develop UI foundation`
  - [x] Thin thread: color payload and diff against the live Paper export, read only (AC-3, AC-4, AC-5)
  - [x] Full payload for every mapped type, with payload and diff tests (AC-3, AC-4, AC-5)
  - [x] Token contract: schema, checker and contract test (AC-1, AC-2)
  - [x] AGENTS.md: contract, Paper token exception, sync procedure (AC-2, AC-7, AC-9)
  - [x] First Paper sync after merge, diff clean (AC-6, AC-7, AC-8): `main` 8c38be0 synced 2026-11-20, before export in the spec folder
- [x] Verify it: `/check verify UI foundation`
- [x] Test it: `/test UI foundation`

Spec [0001](../specs/0001-token-contract-paper-parity/index.md) · code in `packages/react/scripts/`, `packages/react/tokens/`

### 2. Paper artboards for Checkbox, Switch, Select, Tabs · done

Paper is the source of component design, but these four shipped without artboards. An agent draws them from the code under spec 0002 (only an approved artboard run writes to Paper); then the code is checked against them.
**Done when:** each of the four has a Paper artboard with every variant and state its stories cover, in light and dark, and any difference from the shipped component is either fixed in code (with a changeset) or recorded as a design change.

- [x] Design it (spec): `/architect Paper parity for Checkbox, Switch, Select, Tabs`
- [x] Build it: `/develop Paper artboards for Checkbox, Switch, Select, Tabs`
  - [x] Docs PR: Paper artboards exception in AGENTS.md, spec 0001 invariant and this feature's text reconciled (AC-1)
  - [x] Baseline, Storybook measurement and write plan approval (AC-5, AC-8)
  - [x] Pilot: Checkbox light, then Checkbox dark, with parity table (AC-2 to AC-6)
  - [x] Switch, Select, Tabs in light and dark, with parity tables (AC-2 to AC-6)
  - [x] Every difference resolved, then scope audit (AC-7, AC-8)
- [x] Verify it: `/check verify Paper artboards for Checkbox, Switch, Select, Tabs`
- [x] Test it: `/test Paper artboards for Checkbox, Switch, Select, Tabs` (not applicable: docs and Paper only, no code to test; the parity tables and negative controls are the checks)

Spec [0002](../specs/0002-paper-component-artboards/index.md)

## Slice 2: Catalog growth

### 3. Next components · done

Grow the catalog one component per PR, each designed in Paper first, then built end to end (Tracer Bullet). Picked on 2026-11-20: finish forms and feedback first, simplest first, and Tooltip last because it sets the floating pattern (positioning, portal). Slice 2 starts after feature 2 is `done`, so the Paper artboard procedure from spec 0002 is proven first.
**Done when:** features 4 to 8 are enrolled and ordered.

- [x] Pick and order the components: `/scope next components`

Each component below is designed in Paper first: an agent drafts its artboard with tokens under the spec 0002 rules, you approve it, and the code follows it. Each adds a public export (`minor` changeset).
**Done when** (for each): the component has a Paper artboard in light and dark, the component, stories in light and dark, axe tests, visual baselines and a `minor` changeset.

### 4. Textarea · done

A multi line text field that matches Input and works inside Field (label, helper, error).

- [x] Design it (spec): `/architect Textarea`
- [x] Build it: `/develop Textarea`
  - [x] Docs PR: design first variant of the Paper artboards rule in AGENTS.md (AC-1)
  - [x] Paper run: baseline, write plan approval, pilot light, then dark (AC-1 to AC-4)
  - [ ] Design review of both artboards, scope audit, close and ledger summary (AC-5)
  - [x] Code PR: component, Field.Textarea, stories, tests, baselines, parity and changeset (AC-6 to AC-13)
- [x] Verify it: `/check verify Textarea`
- [x] Test it: `/test Textarea`

Spec [0003](../specs/0003-textarea/index.md) · code in `packages/react/src/components/textarea/`

### 5. Radio Group · done

A single choice group on Ark's Radio Group, the counterpart of the Checkbox group. It is named by its own label (Ark's radio group reads Fieldset, not Field); group helper and error text wait for the Fieldset item in Deferred.

- [x] Design it (spec): `/architect Radio Group`
- [x] Build it: `/develop Radio Group`
  - [x] Paper run: baseline with JSX hashes, write plan approval, pilot light, then dark (AC-1 to AC-4)
  - [ ] Design review of both artboards, scope audit, close and ledger summary (AC-5)
  - [x] Code PR: component, stories, tests, baselines, parity and changeset (AC-6 to AC-12)
- [x] Verify it: `/check verify Radio Group`
- [x] Test it: `/test Radio Group`

Spec [0004](../specs/0004-radio-group/index.md) · code in `packages/react/src/components/radio-group/`

### 6. Badge · in-progress

A small static label for status and counts, using the status color roles. Five tones (neutral plus the four status roles), soft look with a border, pill shape, sizes `sm` and `md`, static (no focus, no role). Solid look, icons and interactive tags are follow ups in the spec.

- [x] Design it (spec): `/architect Badge`
- [ ] Build it: `/develop Badge`
  - [x] Paper run: baseline with JSX and PNG hashes, write plan approval, pilot light, then dark (AC-1 to AC-4)
  - [ ] Design review of both artboards, scope audit, close and ledger summary (AC-5)
  - [x] Code PR: component, stories, tests, baselines, parity and changeset (AC-6 to AC-12)
- [x] Verify it: `/check verify Badge`
- [x] Test it: `/test Badge`

Spec [0005](../specs/0005-badge/index.md) · code in `packages/react/src/components/badge/`

### 7. Alert · in-progress

An inline message with a status, title, description and optional icon. Compound parts (`Root`, `Indicator`, `Content`, `Title`, `Description`), Badge's five tones (default `informative`), soft look with a border, built in tone icons, no default role (the caller passes `status` or `alert` for a message inserted later). A close button and an actions area are follow ups in the spec.

- [x] Design it (spec): `/architect Alert`
- [ ] Build it: `/develop Alert`
  - [x] Paper run: baseline with JSX and PNG hashes, write plan approval, pilot light, then dark (AC-1 to AC-4)
  - [ ] Design review of both artboards, scope audit, close and ledger summary (AC-5)
  - [x] Code PR: component, stories, tests, baselines, parity and changeset (AC-6 to AC-12)
- [x] Verify it: `/check verify Alert`
- [x] Test it: `/test Alert`

Spec [0006](../specs/0006-alert/index.md) · code in `packages/react/src/components/alert/`

### 8. Tooltip · in-progress

A short hint on hover and focus, on Ark's Tooltip. The first floating component, so its spec also sets the positioning and portal pattern later overlays reuse. Compound parts (`Root`, `Trigger`, `Content`), inverse surface, top placement, Ark's delays, hoverable content, no arrow, shadow or animation. The spec's _Overlay pattern_ (portal in `Content`, mount only while open, default positioning merged under the caller's, one `z-50` layer) is the rule later overlays follow. Arrow, overlay motion and a z index scale are follow ups in the spec.

- [x] Design it (spec): `/architect Tooltip`
- [ ] Build it: `/develop Tooltip`
  - [x] Paper run: baseline with JSX and PNG hashes, Button and line count measurement, write plan approval, pilot light, then dark (AC-1 to AC-4)
  - [ ] Design review of both artboards, scope audit, close and ledger summary (AC-5)
  - [x] Code PR: component, stories, tests, baselines, parity and changeset (AC-6 to AC-12)
- [x] Verify it: `/check verify Tooltip`
- [x] Test it: `/test Tooltip`

Spec [0007](../specs/0007-tooltip/index.md) · code in `packages/react/src/components/tooltip/`

## Deferred

Out of scope for the current build pass, kept so the plan stays honest.

- **Second theme** (e.g. `black-friday`, overrides only): proves the theme axis · needs a decision
- **Second brand**: proves the brand axis and the token manager's multi brand model · needs a decision
- **Shadow and motion tokens in Paper** (from spec 0001): technical debt, revisit when Paper supports those token types
- **Retrofit Button, Input & Field, Card & Dialog artboards** (from spec 0002): `· Dark` siblings and token bound radius and spacing
- **Fieldset component** (from spec 0004): Fieldset on Ark Fieldset for `Checkbox.Group` and `RadioGroup` (legend, helper, error, required marker) · needs a decision
- **Status emphasis and icons** (from specs 0005, 0006): a solid look for Badge and Alert with new `status.<tone>.bg-strong` and `fg-on-strong` tokens, and an icon set that replaces Alert's inline icons and adds a Badge icon or dot · needs a decision
- **Interactive or removable tag** (from spec 0005): its own component with a focus ring and a remove button · needs a decision
- **Dismissible alert and actions area** (from spec 0006): `Alert.CloseTrigger` with an `onDismiss` pattern, and `Alert.Actions` for one or two buttons · needs a decision
- **Overlay follow ups** (from spec 0007): `Tooltip.Arrow` once an arrow size token exists, enter and exit motion for every overlay with `motion-safe:` and the `motion.*` tokens, and a z index token scale when two overlay layers conflict · needs a decision
- **Token manager**: a separate product in the portfolio, not this repo; Triquetra only keeps the contract it consumes (feature 1)

## Legend

**The decision box.** Every feature carries exactly one, the sub task whose label ends with `(spec)`. Skills locate it by that `(spec)` suffix, never by an exact label. Every other box is an execution box and `/architect` never ticks one.

- **Next step** = the first unticked box (always a command or a tracked milestone).
- **needs a decision** = run `/architect` first; otherwise straight to `/develop`. The tag drops once the spec is captured.
- **Atomic build tasks live in the spec's `## Build plan`, not here**: the scope carries only the milestone rollup.
- **Status** `planned` → `in-progress` → `done`, plus `existing` (built before the workflow, so `/develop` and `/sync` leave it alone) and `dropped` (de-scoped, kept for history).
- **Workflow tier tag** beside a heading (e.g. `· GA`) sets that one feature's rigor; no tag inherits the Beta default. Beta closes `done` after `/test`.
- **Pointer line** (`spec <n> · code in <path>`): the spec link added by `/architect`, the code path by `/develop`.
