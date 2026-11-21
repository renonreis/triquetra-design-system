# 0005. Badge

**Date**: 2026-11-21
**Status**: Proposed

## Summary

Badge is a small static label for status and counts, such as "Active", "Failed" or "12". It has five tones (neutral plus the four status roles that already exist in the tokens), one soft look (tinted background, strong text, thin border), a pill shape and two sizes. It is not interactive: no focus, no role, no states. Like Textarea and Radio Group, it is drawn in Paper first (light and dark), you approve it, and then the code is built to match and measured against it.

## Requirements

**User stories**:

- As a product developer, I want a status label with fixed tones, so that "Paid", "Pending" and "Failed" look the same in every product.
- As a screen reader user, I want the badge text to carry the meaning, so that I get the status without seeing the color.
- As the DS maintainer, I want to see and approve the Badge in Paper before any code, so that the design leads and the code follows.

**Acceptance criteria**:

- **AC-1**: Gates before any Paper write, in order: (1) this spec is confirmed by the maintainer and merged to `main` (the _design first_ variant in `AGENTS.md`, _Paper artboards_, already allows the run, so no docs PR); (2) the maintainer approves a write plan pinned to a `main` SHA and a Paper baseline. No write before both.
- **AC-2**: The Components page (`p-4-0`) has a new light artboard `Badge`, 1440 px wide, height `fit-content`, fill `--tq-color-bg-canvas`, laid out as _Artboard content and placement_ says, with every cell in the _State inventory_ drawn with the values in _Design values_.
- **AC-3**: A sibling `Badge · Dark` has the same structure and copy; every color reference is a `-dark` token (artboard fill `--tq-color-bg-canvas-dark` included). The binding audit finds no light color token on it and no `-dark` token on the light artboard.
- **AC-4**: The run follows spec 0002 (_Binding rules_, _Allowed literals_ plus the additions here, tool list, run ledger, stops and recovery) and spec 0004's design first procedure with the changes in _Procedure_. The recheck after the pilot compares Paper with the baseline plus exactly the pilot's ledger nodes. The scope audit compares every artboard that existed at the baseline (by SHA-256 of its saved `get_jsx` text, or of its 1x PNG export for the artboards whose JSX comes back inline), their positions, and `contentHash.tokens`, all equal to the baseline.
- **AC-5**: The maintainer reviews both artboards before the run closes. Any change asked in that review is drawn and read back inside the same run, and written into _Design values_ (or taken back to `/architect` when it changes a decision here). Only then the scope audit runs and `finish_working_on_nodes` gets the two artboard IDs. After the close, no Paper write happens under this run.
- **AC-6**: `Badge` is exported from `@renonreis/triquetra` with `BadgeProps`, `badgeVariants` and `BadgeVariants`. It renders `ark.span`, forwards its ref (`HTMLSpanElement`), spreads the remaining props onto the span and merges `className` through `tv()`. It takes `tone` (`neutral`, `positive`, `warning`, `negative`, `informative`, default `neutral`) and `size` (`sm`, `md`, default `md`). `asChild` is not part of `BadgeProps`.
- **AC-7**: The badge is static: no `role`, no `tabIndex`, no `aria-*` set by the component, not reached by Tab, and its accessible text is its content. The JSDoc says the text must carry the meaning on its own (the tone only reinforces it) and that a count needs hidden context (the `Count` story shows `sr-only` text).
- **AC-8**: Styles follow _Design values_ for every tone and size, in light and dark. No token is added or changed, and no contrast pair is added: every text and background pair used is already in `contrast.test.ts`.
- **AC-9**: `badge.stories.tsx` (meta tagged `visual`) has the 7 visual stories in _Stories_, run in light and dark with the a11y addon in `error` mode. `badge.test.tsx` (Vitest, jsdom) covers ref forwarding, prop spreading (`id`, `data-*`, `aria-hidden`), `className` merge, the default tone and size, the static contract of AC-7 (no role, not focusable, accessible text includes the `sr-only` context), and `axe` for 7 cases: each of the five tones at `md`, neutral at `sm`, and the count markup of the `Count` story.
- **AC-10**: 14 new baselines (7 visual stories × light and dark) are generated in the Playwright Docker image, then `pnpm test:visual:docker` passes in compare only mode with no other baseline changed. The Docker suite never runs while another Storybook build runs (they share `storybook-static`).
- **AC-11**: `rationale.md` links a parity table (`parity/badge.md`, light and dark) for the 18 badges per mode in the 7 cells of _Parity_ (one row per badge and property), measured on the code PR's Storybook, with spec 0002's columns and _Normalization_ (OKLCH components rounded half up; hue ignored when chroma rounds to 0), plus a read only negative control. Every row is `match` or resolved before the PR merges: fixed in code and measured again in both modes, or `design change` / `deviation` with the maintainer's approval and a follow up.
- **AC-12**: The code PR carries a `minor` changeset (new public exports `Badge`, `BadgeProps`, `badgeVariants` and `BadgeVariants`).

## Decision

**Chosen option**: Option 1: a single `Badge` on `ark.span`, five tones in the soft look (status roles plus a neutral tone from existing tokens), with border, pill shape, sizes `sm` and `md`, static, designed in Paper first.

It uses only tokens and contrast pairs that exist today, so it needs no token change and no Paper token sync before the run. A solid look and icon support wait for a real need (Follow-up).

## Feature design

**Data model**: none. The surface is the React API below, the two Paper artboards and the parity table.

**API surface**:

| Export                           | Kind      | Key inputs                                                                                                                       | Notes                                                                                                                        |
| -------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Badge`, `BadgeProps`            | component | `tone?: 'neutral' \| 'positive' \| 'warning' \| 'negative' \| 'informative'` (`neutral`), `size?: 'sm' \| 'md'` (`md`), children | `forwardRef<HTMLSpanElement>`; `BadgeProps extends Omit<HTMLArkProps<'span'>, 'asChild'>, BadgeVariants`; renders `ark.span` |
| `badgeVariants`, `BadgeVariants` | `tv()`    | `tone`, `size`                                                                                                                   | one slot, `root`; exported like `buttonVariants`                                                                             |

Files: `packages/react/src/components/badge/` (`badge.tsx`, `badge.variants.ts`, `badge.stories.tsx`, `badge.test.tsx`, `index.ts`) and one export line in `src/index.ts`, after `radio-group`: `export * from './components/badge/index.js';`. Usage:

```tsx
<Badge tone="positive">Paid</Badge>
<Badge tone="negative" size="sm">
  12<span className="sr-only"> failed jobs</span>
</Badge>
```

### Design values

| Slot   | Classes                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------- |
| `root` | `inline-flex shrink-0 items-center justify-center gap-1 rounded-full border px-2 font-body font-medium whitespace-nowrap` |

| Tone          | Background                   | Text                         | Border                                     |
| ------------- | ---------------------------- | ---------------------------- | ------------------------------------------ |
| `neutral`     | `bg-bg-subtle` (`bg.subtle`) | `text-fg-muted` (`fg.muted`) | `border-border-default` (`border.default`) |
| `positive`    | `bg-status-positive-bg`      | `text-status-positive-fg`    | `border-status-positive-border`            |
| `warning`     | `bg-status-warning-bg`       | `text-status-warning-fg`     | `border-status-warning-border`             |
| `negative`    | `bg-status-negative-bg`      | `text-status-negative-fg`    | `border-status-negative-border`            |
| `informative` | `bg-status-informative-bg`   | `text-status-informative-fg` | `border-status-informative-border`         |

| Size | Height        | Padding (x)   | Text                        |
| ---- | ------------- | ------------- | --------------------------- |
| sm   | `h-5` (20 px) | `px-2` (8 px) | `text-xs leading-4` (12/16) |
| md   | `h-6` (24 px) | `px-2` (8 px) | `text-sm leading-5` (14/20) |

Padding and the medium weight come from `root`, so they are the same in both sizes.

```ts
tone: {
  neutral: { root: 'border-border-default bg-bg-subtle text-fg-muted' },
  positive: { root: 'border-status-positive-border bg-status-positive-bg text-status-positive-fg' },
  warning: { root: 'border-status-warning-border bg-status-warning-bg text-status-warning-fg' },
  negative: { root: 'border-status-negative-border bg-status-negative-bg text-status-negative-fg' },
  informative: { root: 'border-status-informative-border bg-status-informative-bg text-status-informative-fg' },
},
size: {
  sm: { root: 'h-5 text-xs leading-4' },
  md: { root: 'h-6 text-sm leading-5' },
},
defaultVariants: { tone: 'neutral', size: 'md' },
```

The border is 1 px and counts inside the height (Tailwind's `border-box`), so the text line sits centered in 18 or 22 px. The border is decorative: the text identifies the badge, so WCAG 1.4.11 asks no 3:1 for it. Contrast pairs used, all already tested in every brand, theme and mode: `fg.muted` on `bg.subtle`, and `status.<tone>.fg` on `status.<tone>.bg` for the four status tones.

**Allowed literals added to spec 0002's list**: the artboard layout widths in _Artboard content and placement_ (240 and 640 px cells). No other new literal: height, padding, gap, radius, size and color are tokens; the 1 px border and the `leading-4` / `leading-5` line heights are already allowed.

### Stories

Meta: `title: 'Components/Badge'`, `component: Badge`, `tags: ['autodocs', 'visual']`, args `tone: 'neutral'`, `size: 'md'`, `children: 'Draft'`. Every story renders at first paint; no story has a `play` that changes state.

| Story         | Args and render                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Default`     | the meta args: neutral, md, "Draft"                                                                                                                                                                                                                                                                                                                                                                                                              |
| `Positive`    | `tone: 'positive'`, "Active"                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Warning`     | `tone: 'warning'`, "Pending"                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Negative`    | `tone: 'negative'`, "Failed"                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Informative` | `tone: 'informative'`, "New"                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Sizes`       | a column `flex flex-col gap-3` of two rows `flex items-center gap-2`: the `sm` row then the `md` row, each with the five tones in the order above and the labels above                                                                                                                                                                                                                                                                           |
| `Count`       | one row `flex items-center gap-2`, md, each badge holding its count then hidden context inside it: `<Badge>3<span className="sr-only"> unread messages</span></Badge>`, `<Badge tone="negative">12<span className="sr-only"> failed jobs</span></Badge>`, `<Badge tone="informative">99+<span className="sr-only"> new comments</span></Badge>`; play asserts the first badge's text content is "3 unread messages" (read only, no state change) |

### State inventory (artboard cells and parity)

7 cells per mode, one per visual story: `Default`, `Positive`, `Warning`, `Negative`, `Informative` (the Tones row), then `Sizes` and `Count`. A badge has no hover, focus, disabled or invalid state, so tones and sizes are the whole inventory. The `sr-only` text in `Count` is not drawn.

### Artboard content and placement

- **Chrome** (header, section titles, captions, Props table, snippet box): same structure, typography and spacing as the spec 0004 artboard `380-0` (Radio Group), read with `get_jsx` at the baseline, with every value bound per spec 0002's _Binding rules_ (semantic tokens only; the snippet uses `--tq-font-family-mono`). Never copy a literal from `IB-0`, `O0-0` or `R7-0`.
- **Header**: eyebrow `Components / 12`, title `Badge`, description "A small static label for status and counts. The text carries the meaning; the tone only reinforces it.", snippet `import { Badge } from '@renonreis/triquetra';`.
- **Sections**, in order, each with a section title in `380-0`'s section title style: `Tones`, `Sizes and count`, `Props`. Layer names follow `380-0`'s pattern (section frame named by its title, each cell named by its story).
- **Cells**: width fixed as below, height `fit-content`, the badge or badge rows at the cell's top left, then the story name as a caption under them. Caption style, the gap between content and caption, and the cell padding are `380-0`'s cell values.
- **Tones**: one row of 5 cells, 240 px each, in the inventory order. Column gap as `380-0`'s grid. Cells align top.
- **Sizes and count**: one row, top aligned, same column gap as Tones: `Sizes` 640 px (the five badges per row fit without wrapping), `Count` 240 px. The `sr-only` text is not drawn.
- **Props** rows (name, type, default): `tone` · `'neutral' | 'positive' | 'warning' | 'negative' | 'informative'` · `neutral`; `size` · `'sm' | 'md'` · `md`; `children` · `ReactNode` · none. A note under the table: "A static label: not focusable and no role. Add hidden context to counts."
- **Placement**: light at world y 0, 80 px right of the rightmost artboard whose y is 0 (Radio Group `380-0` today at x 12160, 1440 wide, so x 13680). Dark directly under it, at y = the larger of the current dark row y (3990 today) and the bottom of the tallest light artboard plus 160. If either slot overlaps any artboard, shift right in 80 px steps until it does not. Existing artboards never move.
- **Dark**: `duplicate_nodes` of the finished light artboard, then one `update_styles` batch that swaps every color to its `-dark` token, built from the dark artboard's own `get_jsx` (not from the `descendantIdMap`). After duplicating, check sibling order with `get_children` at every level that holds more than one cell or badge, and fix any out of order sibling with `move_nodes` on the run's own nodes. Spec 0002's lessons apply: set `fontSize` and `lineHeight` with `update_styles` after `create_artboard`; after a color change on text, rewrite span colors with `set_text_content` (`html`). Write rows one at a time: never two `write_html` calls into the same parent in parallel, so the order is the call order.

### Procedure

Spec 0004's design first procedure with these changes:

1. **Baseline**: pin `main` (the design SHA), `tokens:paper:diff` exit 0, save `get_basic_info`, and save the `get_jsx` of every artboard on `p-4-0` to a file per artboard (15 expected). Hash each file with SHA-256. For `IB-0`, `O0-0` and `R7-0` (their JSX comes back inline), hash their 1x PNG export instead, exported twice to prove the bytes are stable. Paper `export` writes into `~/Downloads`: move each file to a scratch folder at once. A different artboard count does not block the run but goes into the plan. No Storybook measurement is needed: no existing component shares the badge's states, and every value comes from _Design values_ and `tokens.json`.
2. **Plan approval** and 3. **recheck before the first write**, as spec 0002.
3. **Pilot**: draw `Badge` light, screenshot after each section, binding round trip, show the maintainer and wait. Confirm every label is one line on a scale 2 screenshot (Paper text boxes stretch to their frame).
4. After approval, recheck: `main` unchanged for `tokens/`; Paper equals the baseline plus exactly the pilot's ledger nodes. Draw `Badge · Dark` as _Artboard content and placement_ says, dark audit.
5. **Design review** of both artboards with the maintainer (AC-5); apply and read back any change.
6. **Scope audit** (hashes, positions, `contentHash.tokens`), then `finish_working_on_nodes` with the two IDs. Commit the ledger summary to `rationale.md` (design SHA, approvals with dates, artboard IDs, call count, audit result).
7. **Parity after code**, scripted: build the code PR's Storybook at its head SHA (the measurement SHA, recorded separately) and serve it locally; measure each story with Playwright at 1280 × 720 in both modes (`getComputedStyle`, `getBoundingClientRect`); map Paper nodes by artboard structure (row, cell, badge), not by name; resolve Paper token references from `tokens.json` (`-dark` names to the dark value); normalize OKLCH with round half up to 3 decimals (hue shown as `-` when chroma rounds to 0). The negative control runs in the same script. Never run this Storybook build while the Docker visual suite runs.

### Parity

Per cell, the parts and properties compared (spec 0002 _Normalization_):

- **Rows**: one row per badge and property (5 badges in Tones, 10 in Sizes, 3 in Count: 18 per mode).
- **Each badge**: height; padding left and right; gap; radius (`full` when at least half the height); background; border color, width and style; text color, font family, size, weight and line height; one line of text.
- **Sizes** and **Count**: each badge's position relative to its cell (gap between badges, gap between the two rows, vertical centering in a row).
- **Excluded**: Paper only chrome (header, captions, Props), the `sr-only` text in `Count`, and the badge width (it follows from padding and text, which are compared).
- **Negative control**: read only, in the comparison input only: replace one Paper border color with a wrong token's value (`status.positive.bg` in place of `status.positive.border` on `Positive`) and confirm the comparison reports a DIFF, in both modes. No Paper write.
- After any code fix, the affected rows are measured again in both modes and the row records the new head SHA.

**Value sourcing**:

| Action | Value produced or displayed                        | Source                                                                     |
| ------ | -------------------------------------------------- | -------------------------------------------------------------------------- |
| Draw   | cells, copy, args                                  | _Stories_ and _State inventory_                                            |
| Draw   | colors per tone, sizes, padding, gap, radius, type | _Design values_, token values from `tokens.json` at the design SHA         |
| Draw   | token name per value, literals                     | spec 0002 _Binding rules_ and _Allowed literals_, plus the additions above |
| Draw   | chrome, Props copy, placement                      | _Artboard content and placement_, `380-0` via `get_jsx`, `get_basic_info`  |
| Draw   | dark color per node                                | the dark artboard's own `get_jsx`, each light token name plus `-dark`      |
| Code   | classes per tone and size                          | _Design values_ (after any AC-5 change)                                    |
| Code   | accessible text of a count                         | the caller's children, including `sr-only` text (`Count` story)            |
| Parity | code value and Paper value                         | Storybook at the measurement SHA, `get_computed_styles` of ledger nodes    |

**Key invariants**:

- The badge is never interactive: no role, no focus, no event handling of its own.
- Every color is a semantic token already paired in `contrast.test.ts`; no token or contrast pair is added.
- Semantic token utilities only: no `dark:`, no arbitrary values.
- No Paper token is created, changed or deleted; no write outside the run ledger; no write after the run closes without a new approved plan.

**Security model**: no data and no secrets. Paper writes are limited by AC-1, AC-4, AC-5 and the ledger, under the maintainer's account.

**Configuration required**: none.

**Critical test scenarios**:

- `<Badge>Draft</Badge>` renders a span with text "Draft", neutral and md by default, forwards its ref and spreads `id` and `data-*`, verifies **AC-6**.
- The badge has no role, no `tabIndex`, and Tab skips it; the `Count` badge's text content includes the `sr-only` context, verifies **AC-7**.
- `axe` finds no violations for every tone, both sizes and the count, in light and dark (stories), verifies **AC-9**.
- Docker suite in compare only mode passes after the 14 new baselines with every other baseline unchanged, verifies **AC-8**, **AC-10**.
- Parity negative control reports a DIFF in both modes, verifies **AC-11**.
- Post pilot recheck and scope audit match the baseline plus the ledger, by hash, verifies **AC-4**, **AC-5**.

## Build plan

Tracer Bullet with design first: the artboard is the first layer, then one PR takes the component through code, stories, tests, baselines, parity and changeset.

1. Spec PR (this spec, scope row linked); merge after your confirmation, satisfies **AC-1**
2. Paper run: baseline with JSX and PNG hashes, write plan approval, pilot light artboard, recheck, dark sibling, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-4**
3. Design review of both artboards inside the run, any change drawn and folded into _Design values_; then scope audit, close, ledger summary in `rationale.md` (docs PR), satisfies **AC-4**, **AC-5**
4. Code PR: `badge/` with variants and the component, export from `src/index.ts`, satisfies **AC-6**, **AC-7**, **AC-8**
5. Same PR: 7 visual stories and the tests, satisfies **AC-7**, **AC-9**
6. Same PR: 14 Docker baselines, then the Docker suite in compare only mode, alone, satisfies **AC-8**, **AC-10**
7. Same PR: scripted parity table `parity/badge.md` with negative control, every row resolved, satisfies **AC-11**
8. Same PR: `minor` changeset; merge when the required checks are green, satisfies **AC-12**

## Consequences

**Positive**:

- No new dependency, token, contrast pair or Paper token sync: the run can start right after this spec merges.
- The smallest component so far (one part, no states), so the third design first run tests the procedure with little drawing.
- The tone names match the status roles, so Alert (feature 7) can reuse the same tone prop and token mapping.

**Negative / tradeoffs**:

- Only the soft look: a high emphasis badge (for example a red notification count on an avatar) has no solid look until new tokens exist.
- No icon or dot part: a caller can put an icon in the children (`gap-1` spaces it), but its size and color are theirs to set.
- With 8 px padding on the 4 px spacing scale, a one digit count is a short pill (about 26 × 24 px at md), not a circle.
- `asChild` is left out, so the badge cannot render as a link or button; an interactive tag needs its own component with focus styles.

**Neutral**:

- `Badge` is a single component with no compound parts, so React Server Components can render it directly.

## Follow-up

- [ ] Solid look (`appearance` prop) with new `status.<tone>.bg-strong` and `fg-on-strong` tokens, their contrast pairs and a Paper token sync, when a product needs a high emphasis badge
- [ ] Icon or dot part, once the DS has an icon set
- [ ] Interactive or removable tag as its own component (focus ring, remove button)

## Rationale

Reasoning and options: see [rationale.md](rationale.md).
