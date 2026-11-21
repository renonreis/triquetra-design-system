# 0006. Alert

**Date**: 2026-11-21
**Status**: Proposed

## Summary

Alert is an inline message that tells the user about a status, such as "Payment failed" or "New version available". It has a title, an optional description and an optional icon, in the same five tones as Badge (neutral plus the four status roles), in one soft look with a border. It is a compound component (`Alert.Root`, `Alert.Indicator`, `Alert.Content`, `Alert.Title`, `Alert.Description`) like Card. It is static: no focus, no close button, and no live region role unless you pass one. Like Badge, it is drawn in Paper first (light and dark), you approve it, and then the code is built to match and measured against it.

## Requirements

**User stories**:

- As a product developer, I want one inline message with fixed tones, so that a failed payment or a trial warning looks the same in every product.
- As a screen reader user, I want the title to say what happened, so that I get the status without seeing the color or the icon.
- As a screen reader user, I want messages that appear after the page loads to be announced, so that I notice them; the product developer opts in with `role`.
- As the DS maintainer, I want to see and approve the Alert in Paper before any code, so that the design leads and the code follows.

**Acceptance criteria**:

- **AC-1**: Gates before any Paper write, in order: (1) this spec is confirmed by the maintainer and merged to `main` (the _design first_ variant in `AGENTS.md`, _Paper artboards_, already allows the run, so no docs PR); (2) the maintainer approves a write plan pinned to a `main` SHA and a Paper baseline. No write before both.
- **AC-2**: The Components page (`p-4-0`) has a new light artboard `Alert`, 1440 px wide, height `fit-content`, fill `--tq-color-bg-canvas`, laid out as _Artboard content and placement_ says, with every cell in the _State inventory_ drawn with the values in _Design values_.
- **AC-3**: A sibling `Alert · Dark` has the same structure and copy; every color reference is a `-dark` token (artboard fill and icon strokes and fills included). The binding audit finds no light color token on it and no `-dark` token on the light artboard.
- **AC-4**: The run follows spec 0002 (_Binding rules_, _Allowed literals_ plus the additions here, tool list, run ledger, stops and recovery) and spec 0005's _Procedure_ with the changes in _Procedure_. The recheck after the pilot compares Paper with the baseline plus exactly the pilot's ledger nodes. The scope audit compares every artboard that existed at the baseline (by SHA-256 of its saved `get_jsx` text, or of its 1x PNG export for the artboards whose JSX comes back inline), their positions, and `contentHash.tokens`, all equal to the baseline.
- **AC-5**: The maintainer reviews both artboards before the run closes. Any change asked in that review is drawn and read back inside the same run, and written into _Design values_ (or taken back to `/architect` when it changes a decision here). Only then the scope audit runs and `finish_working_on_nodes` gets the two artboard IDs. After the close, no Paper write happens under this run.
- **AC-6**: `Alert` is exported from `@renonreis/triquetra` as a compound object `{ Root, Indicator, Content, Title, Description }`, with `AlertRootProps`, `AlertIndicatorProps`, `AlertContentProps`, `AlertTitleProps`, `AlertDescriptionProps`, `alertVariants` and `AlertVariants`. `Root` renders `ark.div` and takes `tone` (`neutral`, `positive`, `warning`, `negative`, `informative`, default `informative`). `Indicator` renders `ark.span`, `Content` `ark.div`, `Title` `ark.p`, `Description` `ark.div`. Every part forwards its ref, spreads the remaining props onto its element, keeps Ark's `asChild`, and merges `className` through `tv()`. Every part sets `data-scope="alert"` and `data-part` (`root`, `indicator`, `content`, `title`, `description`), as Ark's own parts do; a caller's props cannot remove them. A part used outside `Alert.Root` throws an error that names it, as Card does.
- **AC-7**: Accessibility contract: `Root` sets no `role` and no `aria-*` by default, and passes a caller's `role` (`status` or `alert`) through. No part is focusable. `Indicator` is `aria-hidden="true"`. Without children it renders the tone's icon (_Icons_); with children it renders them in its 20 px box instead. The JSDoc says: the title must state the status in words (the tone and icon only reinforce it); pass `role="status"` (or `role="alert"` for an urgent error) only when the alert is inserted after the page loads; a message present at first render needs no role.
- **AC-8**: Styles follow _Design values_ for every tone, in light and dark. No token is added or changed, and no contrast pair is added: every text and background pair used is already in `contrast.test.ts`.
- **AC-9**: `alert.stories.tsx` (meta tagged `visual`) has the 7 visual stories in _Stories_, run in light and dark with the a11y addon in `error` mode. `alert.test.tsx` (Vitest, jsdom) covers ref forwarding on all five parts, prop spreading (`id`, `data-*`), `className` merge, the default tone, the tone icon per tone (each tone's icon differs, neutral reuses the informative icon), custom indicator children, the accessibility contract of AC-7 (no role by default, `role="status"` and `role="alert"` passed through, nothing focusable, indicator hidden), the error for a part outside `Root`, and `axe` for 7 cases: each of the five tones with indicator, title and description; a title only alert; and an alert without indicator.
- **AC-10**: 14 new baselines (7 visual stories × light and dark) are generated in the Playwright Docker image, then `pnpm test:visual:docker` passes in compare only mode with no other baseline changed. The Docker suite never runs while another Storybook build runs (they share `storybook-static`).
- **AC-11**: `rationale.md` links a parity table (`parity/alert.md`, light and dark) for the 7 alerts per mode in _Parity_ (one row per part and property), measured on the code PR's Storybook, with spec 0002's columns and spec 0005's _Normalization_ (OKLCH components rounded half up; hue ignored when chroma rounds to 0), plus a read only negative control. Every row is `match` or resolved before the PR merges: fixed in code and measured again in both modes, or `design change` / `deviation` with the maintainer's approval and a follow up.
- **AC-12**: The code PR carries a `minor` changeset (new public exports `Alert`, the five part prop types, `alertVariants` and `AlertVariants`).

## Decision

**Chosen option**: Option 1: a compound `Alert` (`Root`, `Indicator`, `Content`, `Title`, `Description`) on `ark.*` elements, five tones in the soft look with a border, one size, built in tone icons, no default role, no close button, designed in Paper first.

It reuses Badge's tone names and the `status.<tone>` roles, so it needs no token change, no contrast pair and no Paper token sync before the run. A close button and an actions area wait for a real need (Follow-up).

## Feature design

**Data model**: none. The surface is the React API below, the two Paper artboards and the parity table.

**API surface**:

| Export                                       | Kind      | Key inputs                                                                                            | Notes                                                                                                                              |
| -------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `Alert.Root`, `AlertRootProps`               | component | `tone?: 'neutral' \| 'positive' \| 'warning' \| 'negative' \| 'informative'` (`informative`), `role?` | `forwardRef<HTMLDivElement>`; `AlertRootProps extends HTMLArkProps<'div'>, AlertVariants`; provides the styles and tone by context |
| `Alert.Indicator`, `AlertIndicatorProps`     | component | `children?` (a custom icon)                                                                           | `forwardRef<HTMLSpanElement>`; `HTMLArkProps<'span'>`; always `aria-hidden="true"`; tone icon when no children                     |
| `Alert.Content`, `AlertContentProps`         | component | children (title and description)                                                                      | `forwardRef<HTMLDivElement>`; `HTMLArkProps<'div'>`                                                                                |
| `Alert.Title`, `AlertTitleProps`             | component | children                                                                                              | `forwardRef<HTMLParagraphElement>`; `HTMLArkProps<'p'>`; `asChild` picks a heading level when the page needs one                   |
| `Alert.Description`, `AlertDescriptionProps` | component | children                                                                                              | `forwardRef<HTMLDivElement>`; `HTMLArkProps<'div'>` (may hold paragraphs or a list)                                                |
| `alertVariants`, `AlertVariants`             | `tv()`    | `tone`                                                                                                | slots `root`, `indicator`, `content`, `title`, `description`; exported like `cardVariants`                                         |

Files: `packages/react/src/components/alert/` (`alert.tsx`, `alert.variants.ts`, `alert.stories.tsx`, `alert.test.tsx`, `index.ts`) and one export line in `src/index.ts`, after `badge`: `export * from './components/alert/index.js';`. The context holds `{ styles, tone }`; `Indicator` reads the tone to pick its icon. Usage:

```tsx
<Alert.Root tone="negative">
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title>Payment failed</Alert.Title>
    <Alert.Description>
      Your card was declined. Check the card details or try another card.
    </Alert.Description>
  </Alert.Content>
</Alert.Root>
```

### Design values

| Slot          | Classes                                                                                |
| ------------- | -------------------------------------------------------------------------------------- |
| `root`        | `flex w-full items-start gap-3 rounded-surface border p-4 font-body text-sm leading-5` |
| `indicator`   | `flex size-5 shrink-0 items-center justify-center`                                     |
| `content`     | `flex min-w-0 flex-1 flex-col gap-1`                                                   |
| `title`       | `font-semibold`                                                                        |
| `description` | `font-regular`                                                                         |

| Tone          | Background                   | Text and icon (on `root`, inherited) | Border                                     |
| ------------- | ---------------------------- | ------------------------------------ | ------------------------------------------ |
| `neutral`     | `bg-bg-subtle` (`bg.subtle`) | `text-fg-default` (`fg.default`)     | `border-border-default` (`border.default`) |
| `positive`    | `bg-status-positive-bg`      | `text-status-positive-fg`            | `border-status-positive-border`            |
| `warning`     | `bg-status-warning-bg`       | `text-status-warning-fg`             | `border-status-warning-border`             |
| `negative`    | `bg-status-negative-bg`      | `text-status-negative-fg`            | `border-status-negative-border`            |
| `informative` | `bg-status-informative-bg`   | `text-status-informative-fg`         | `border-status-informative-border`         |

```ts
tone: {
  neutral: { root: 'border-border-default bg-bg-subtle text-fg-default' },
  positive: { root: 'border-status-positive-border bg-status-positive-bg text-status-positive-fg' },
  warning: { root: 'border-status-warning-border bg-status-warning-bg text-status-warning-fg' },
  negative: { root: 'border-status-negative-border bg-status-negative-bg text-status-negative-fg' },
  informative: { root: 'border-status-informative-border bg-status-informative-bg text-status-informative-fg' },
},
defaultVariants: { tone: 'informative' },
```

Geometry: 1 px border inside the box, 16 px padding, 12 px gap between indicator and content, 4 px gap between title and description, `radius.surface`. Title and description are 14 px on a 20 px line (`leading-5`), so the 20 px indicator lines up with the title's first line. With title and a two line description, the alert is 98 px high (1 + 16 + 20 + 4 + 40 + 16 + 1). The title and description inherit the root's color; the title is semibold, the description regular.

Contrast pairs used, all already tested in every brand, theme and mode: `fg.default` on `bg.subtle`, and `status.<tone>.fg` on `status.<tone>.bg` for the four status tones (4.5:1). The icon uses the same color, so it passes the 3:1 for graphics too. The border is decorative: the title identifies the alert, so WCAG 1.4.11 asks no 3:1 for it.

### Icons

Inline SVG in `alert.tsx`, as Checkbox and Dialog do: `viewBox="0 0 20 20"`, `width` and `height` `100%` (so 20 px in the indicator), `fill="none"`, `stroke="currentColor"`, `strokeWidth="1.5"`, `strokeLinecap="round"`, `strokeLinejoin="round"`, `aria-hidden="true"`. Dots are filled circles (`fill="currentColor"`, `stroke="none"`).

| Tone                     | Shape               | Elements                                                                                                                                                                              |
| ------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `informative`, `neutral` | circle with "i"     | `<circle cx="10" cy="10" r="7.5"/>`, `<path d="M10 9v4.5"/>`, dot `<circle cx="10" cy="6.5" r="1"/>`                                                                                  |
| `positive`               | circle with a check | `<circle cx="10" cy="10" r="7.5"/>`, `<path d="M6.75 10.25l2.25 2.25 4.25-4.5"/>`                                                                                                     |
| `warning`                | triangle with "!"   | `<path d="M8.7 3.25 2.4 14.5a1.5 1.5 0 0 0 1.3 2.25h12.6a1.5 1.5 0 0 0 1.3-2.25L11.3 3.25a1.5 1.5 0 0 0-2.6 0Z"/>`, `<path d="M10 7.5v3.75"/>`, dot `<circle cx="10" cy="14" r="1"/>` |
| `negative`               | circle with an "x"  | `<circle cx="10" cy="10" r="7.5"/>`, `<path d="M7.5 7.5l5 5M12.5 7.5l-5 5"/>`                                                                                                         |

Each icon component carries `data-icon="<shape>"` (`info`, `check`, `warning`, `error`) on its `svg`, so tests tell them apart by attribute and not by path text.

**Allowed literals added to spec 0002's list**: the icon geometry above (viewBox, 20 px size, 1.5 px stroke, circles and paths), with strokes and dot fills bound to color tokens; and the artboard layout widths in _Artboard content and placement_ (608 px cells, 448 px story frame). No other new literal: padding, gaps, radius, sizes, type and colors are tokens; the 1 px border and `leading-5` are already allowed.

### Stories

Meta: `title: 'Components/Alert'`, `component: Alert.Root`, `tags: ['autodocs', 'visual']`, args `tone: 'informative'`, an `argTypes` radio for `tone`, and one decorator: `<div className="max-w-md">` (448 px, `size.container.md`). A shared render draws `Indicator`, then `Content` with `Title` and `Description`, from a copy table keyed by tone. Every story renders at first paint; no story has a `play` that changes state.

| Story              | Args and render                                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `Default`          | informative: "New version available" / "Version 2.4 adds dark mode to every report. Reload the page to start using it."    |
| `Neutral`          | neutral: "Scheduled maintenance" / "The dashboard will be read only on Sunday from 02:00 to 04:00 UTC during the upgrade." |
| `Positive`         | positive: "Payment received" / "We sent the receipt to your email. It can take a few minutes to show up in your inbox."    |
| `Warning`          | warning: "Your trial ends in 3 days" / "Add a payment method before it ends to keep access to your projects and reports."  |
| `Negative`         | negative: "Payment failed" / "Your card was declined. Check the card details or try another card to finish the order."     |
| `TitleOnly`        | positive, indicator and title "Your changes were saved.", no description                                                   |
| `WithoutIndicator` | warning, no indicator, title "Some rows were skipped" / "12 rows had no email address."                                    |

Every description is written to take two lines in the 448 px frame (about 384 px of text width), and the `WithoutIndicator` description one line, with margin on both sides of the wrap point, so a small text width difference between Paper and the browser does not change the line count. `Default` also asserts in its `play` that the root (`[data-scope="alert"][data-part="root"]` inside `canvasElement`) has no `role` attribute (read only).

### State inventory (artboard cells and parity)

7 cells per mode, one per visual story, in the table order. An alert has no hover, focus, disabled or invalid state, so tones and the two optional part variations are the whole inventory. A caller's `role` changes no pixel, so it is not drawn.

### Artboard content and placement

- **Chrome** (header, section titles, captions, Props table, snippet box): same structure, typography and spacing as the spec 0005 artboard `3OS-0` (Badge), read with `get_jsx` at the baseline, with every value bound per spec 0002's _Binding rules_ (semantic tokens only; the snippet uses `--tq-font-family-mono`). Never copy a literal from `IB-0`, `O0-0` or `R7-0`.
- **Header**: eyebrow `Components / 13`, title `Alert`, description "An inline message about a status. The title says what happened; the tone and icon only reinforce it.", snippet `import { Alert } from '@renonreis/triquetra';`.
- **Sections**, in order, each with a section title in `3OS-0`'s section title style: `Tones`, `Variations`, `Props`. Layer names follow `3OS-0`'s pattern (section frame named by its title, each cell named by its story).
- **Cells**: 608 px wide (2 × 608 plus one 32 px gap fill the 1248 px content width), height `fit-content`, the alert at the cell's top left in a 448 px frame, then the story name as a caption under it. Caption style, the gap between content and caption, the cell padding and the column and row gaps are `3OS-0`'s values.
- **Tones**: three rows of two cells, top aligned: `Default`, `Neutral`; `Positive`, `Warning`; `Negative` alone on the left.
- **Variations**: one row: `TitleOnly`, `WithoutIndicator`.
- **Alert node structure** (mirrors the DOM, so parity maps by structure): root frame (`Alert`) → indicator frame (20 × 20, holding the SVG) when present → content frame → title text → description text when present.
- **Props** rows (name, type, default): `tone` · `'neutral' | 'positive' | 'warning' | 'negative' | 'informative'` · `informative`; `role` · `'status' | 'alert'` · none; `Indicator children` · `ReactNode` · tone icon. A note under the table: "Compose Root, Indicator, Content, Title and Description. Add a role only when the alert appears after the page loads."
- **Placement**: light at world y 0, 80 px right of the rightmost artboard whose y is 0 (Badge `3OS-0` today at x 13680, 1440 wide, so x 15200). Dark directly under it, at y = the larger of the current dark row y (3990 today) and the bottom of the tallest light artboard plus 160. If either slot overlaps any artboard, shift right in 80 px steps until it does not. Existing artboards never move.
- **Dark**: `duplicate_nodes` of the finished light artboard, then one `update_styles` batch that swaps every color to its `-dark` token (icon strokes and dot fills included), built from the dark artboard's own `get_jsx`. After duplicating, check sibling order with `get_children` at every level that holds more than one cell or part, and fix any out of order sibling with `move_nodes` on the run's own nodes. Spec 0002's and 0005's lessons apply: set `fontSize` and `lineHeight` with `update_styles` after `create_artboard`; after a color change on text, rewrite span colors with `set_text_content` (`html`); one `write_html` per parent at a time.

### Procedure

Spec 0005's _Procedure_ with these changes:

1. **Baseline**: as spec 0005, with `get_jsx` of every artboard on `p-4-0` (17 expected, Badge included). `3OS-0` and `3RR-0` are hashed by their `get_jsx` text if it comes back as a file, else by their 1x PNG export, exported twice. No Storybook measurement: no existing component shares the alert's parts, and every value comes from _Design values_ and `tokens.json`.
2. **Pilot**: draw `Alert` light, screenshot after each section, binding round trip, and confirm on a scale 2 screenshot that every title is one line and every description has the line count _Stories_ names.
3. **Icons**: drawn as inline SVG in `write_html` with the geometry of _Icons_; the binding audit checks each stroke and dot fill is a color token.
4. **Parity after code**: as spec 0005, mapping Paper nodes by the alert node structure (cell, root, indicator, content, title, description).

### Parity

Per alert, the parts and properties compared (spec 0002 _Normalization_ as refined in spec 0005):

- **Rows**: one row per part and property, 7 alerts per mode. Code parts are found by `data-part`, Paper parts by the alert node structure. A part a story does not render (indicator in `WithoutIndicator`, description in `TitleOnly`, the dot in the check and "x" icons) gets one `present` row (code `no`, Paper `no`) and no property rows.
- **Root**: width, height, padding (each side), gap, radius, background, border color, width and style, text color.
- **Indicator**: width, height, position relative to the root (left and top offset), icon shape (the ordered list of the SVG's child elements with their geometry, `circle` `cx` `cy` `r` and `path` `d`, read from the DOM in code and from `get_jsx` in Paper, compared as text after trimming spaces; Paper does not need `data-icon`), icon stroke color and stroke width, dot fill color.
- **Content**: width, position relative to the root, gap.
- **Title** and **Description**: color, font family, size, weight, line height, number of lines.
- **Excluded**: Paper only chrome (header, captions, Props), and the exact text box width of the title and description (they follow from the content width, which is compared).
- **Negative control**: read only, in the comparison input only: replace the Paper border color of `Negative` with the value of `status.negative.bg` and confirm the comparison reports a DIFF, in both modes. No Paper write.
- After any code fix, the affected rows are measured again in both modes and the row records the new head SHA.

**Value sourcing**:

| Action | Value produced or displayed                  | Source                                                                     |
| ------ | -------------------------------------------- | -------------------------------------------------------------------------- |
| Draw   | cells, copy, args                            | _Stories_ and _State inventory_                                            |
| Draw   | colors per tone, padding, gaps, radius, type | _Design values_, token values from `tokens.json` at the design SHA         |
| Draw   | icon per tone                                | _Icons_                                                                    |
| Draw   | token name per value, literals               | spec 0002 _Binding rules_ and _Allowed literals_, plus the additions above |
| Draw   | chrome, Props copy, placement                | _Artboard content and placement_, `3OS-0` via `get_jsx`, `get_basic_info`  |
| Draw   | dark color per node                          | the dark artboard's own `get_jsx`, each light token name plus `-dark`      |
| Code   | classes per tone and slot                    | _Design values_ (after any AC-5 change)                                    |
| Code   | icon per tone                                | the tone from `Root` context, mapped by _Icons_                            |
| Code   | announcement behavior                        | the caller's `role` prop, none by default (AC-7)                           |
| Parity | code value and Paper value                   | Storybook at the measurement SHA, `get_jsx` of the ledger nodes            |

**Key invariants**:

- The alert is never interactive: no focus, no event handling of its own, no close button.
- No live region by default; the caller opts in with `role`.
- Every color is a semantic token already paired in `contrast.test.ts`; no token or contrast pair is added.
- Semantic token utilities only: no `dark:`, no arbitrary values.
- No Paper token is created, changed or deleted; no write outside the run ledger; no write after the run closes without a new approved plan.

**Security model**: no data and no secrets. Paper writes are limited by AC-1, AC-4, AC-5 and the ledger, under the maintainer's account.

**Configuration required**: none.

**Critical test scenarios**:

- `Alert.Root` with all parts renders a div with the title and description, informative by default, every part forwards its ref and spreads `id` and `data-*`, verifies **AC-6**.
- `Alert.Title` outside `Alert.Root` throws an error naming `Alert.Title`, verifies **AC-6**.
- No role by default; `role="status"` and `role="alert"` reach the root; Tab focuses nothing; the indicator is `aria-hidden`, verifies **AC-7**.
- Each tone renders its icon (`data-icon` `info`, `check`, `warning`, `error`; neutral `info`), and custom children replace it, verifies **AC-7**, **AC-9**.
- `axe` finds no violations for the 7 cases, in jsdom and in every story in light and dark, verifies **AC-9**.
- Docker suite in compare only mode passes after the 14 new baselines with every other baseline unchanged, verifies **AC-8**, **AC-10**.
- Parity negative control reports a DIFF in both modes, verifies **AC-11**.
- Post pilot recheck and scope audit match the baseline plus the ledger, by hash, verifies **AC-4**, **AC-5**.

## Build plan

Tracer Bullet with design first: the artboard is the first layer, then one PR takes the component through code, stories, tests, baselines, parity and changeset.

1. Spec PR (this spec, scope row linked); merge after your confirmation, satisfies **AC-1**
2. Paper run: baseline with JSX and PNG hashes, write plan approval, pilot light artboard, recheck, dark sibling, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-4**
3. Design review of both artboards inside the run, any change drawn and folded into _Design values_; then scope audit, close, ledger summary in `rationale.md` (docs PR), satisfies **AC-4**, **AC-5**
4. Code PR: `alert/` with variants, icons and the five parts, export from `src/index.ts`, satisfies **AC-6**, **AC-7**, **AC-8**
5. Same PR: 7 visual stories and the tests, satisfies **AC-7**, **AC-9**
6. Same PR: 14 Docker baselines, then the Docker suite in compare only mode, alone, satisfies **AC-8**, **AC-10**
7. Same PR: scripted parity table `parity/alert.md` with negative control, every row resolved, satisfies **AC-11**
8. Same PR: `minor` changeset; merge when the required checks are green, satisfies **AC-12**

## Consequences

**Positive**:

- No new dependency, token, contrast pair or Paper token sync: the run can start right after this spec merges.
- Same tone names and color roles as Badge, so a status reads the same in a badge and in an alert.
- The first component with built in icons per tone, which sets a small pattern (inline SVG, `data-icon`) until the DS has an icon set.

**Negative / tradeoffs**:

- No close button: a dismissible alert keeps its own state and button outside the component until a follow up adds one.
- No actions area: a caller can put a Button inside `Alert.Description`, but its spacing is theirs to set.
- Neutral in dark: `bg.subtle` and `border.default` both resolve to neutral 700, so the border does not show (the same as Badge). It is decorative and the text pair passes.
- The four icons are drawn by hand; when an icon set arrives they should be replaced.
- Five parts to compose a message is more typing than a single component with `title` and `description` props.

**Neutral**:

- `Alert` is a compound object, so React Server Components use it inside their own client components, like Card.

## Follow-up

- [ ] Dismissible alert (`Alert.CloseTrigger`, an icon button with a focus ring, and an `onDismiss` pattern), when a product needs it
- [ ] Actions area (`Alert.Actions`) for one or two buttons under the description
- [ ] Replace the inline icons when the DS gets an icon set (shared with Badge's icon follow up)
- [ ] Solid look, shared with Badge's follow up (`status.<tone>.bg-strong` tokens)

## Rationale

Reasoning and options: see [rationale.md](rationale.md).
