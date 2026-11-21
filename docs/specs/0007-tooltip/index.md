# 0007. Tooltip

**Date**: 2026-11-21
**Status**: Proposed

## Summary

Tooltip is a short text hint that appears next to a control when you hover it with a pointer or focus it with the keyboard, such as "Download a CSV of this report" on an Export button. It wraps Ark UI's Tooltip, which already handles the delays, Escape, the `tooltip` role and the link from the control to the hint. It is a compound component (`Tooltip.Root`, `Tooltip.Trigger`, `Tooltip.Content`) on the inverse surface (`bg.inverse`, `fg.inverse`), with no arrow, no shadow and no animation. Because it is the first floating component built under the workflow, this spec also writes down the _Overlay pattern_ (portal, positioner, layering, default positioning) that later overlays such as Popover and Menu reuse. Like Alert, it is drawn in Paper first (open state, light and dark), then built to match and measured against it.

## Requirements

**User stories**:

- As a product developer, I want one tooltip that opens on hover and keyboard focus with sane delays, so that every product hints the same way without wiring timers and ARIA.
- As a keyboard user, I want the hint to appear when I tab to the control and to close with Escape, so that I get the same help as a mouse user and can dismiss it.
- As a screen reader user, I want the hint to be read as the control's description, so that I hear it after the control's name.
- As a low vision user who zooms, I want to move my pointer onto the hint without it closing, so that I can read it (WCAG 1.4.13).
- As the DS maintainer, I want one written overlay pattern, so that Popover, Menu and later overlays portal, position and layer the same way.

**Acceptance criteria**:

- **AC-1**: Gates before any Paper write, in order: (1) this spec is confirmed by the maintainer and merged to `main` (the _design first_ variant in `AGENTS.md`, _Paper artboards_, already allows the run, so no docs PR); (2) the maintainer approves a write plan pinned to a `main` SHA and a Paper baseline. No write before both.
- **AC-2**: The Components page (`p-4-0`) has a new light artboard `Tooltip`, 1440 px wide, height `fit-content`, fill `--tq-color-bg-canvas`, laid out as _Artboard content and placement_ says, with every cell in the _State inventory_ drawn with the values in _Design values_ and the trigger values measured from Button in Storybook.
- **AC-3**: A sibling `Tooltip · Dark` has the same structure and copy; every color reference is a `-dark` token (artboard fill included). The binding audit finds no light color token on it and no `-dark` token on the light artboard.
- **AC-4**: The run follows spec 0002 (_Binding rules_, _Allowed literals_ plus the additions here, tool list, run ledger, stops and recovery) and spec 0006's _Procedure_ with the changes in _Procedure_. The recheck after the pilot compares Paper with the baseline plus exactly the pilot's ledger nodes. The scope audit compares every artboard that existed at the baseline (by SHA-256 of its saved `get_jsx` text, or of its 1x PNG export for the artboards whose JSX comes back inline, exported twice), their positions, and `contentHash.tokens`, all equal to the baseline.
- **AC-5**: The maintainer reviews both artboards before the run closes. Any change asked in that review is drawn and read back inside the same run, and written into _Design values_ (or taken back to `/architect` when it changes a decision here). Only then the scope audit runs and `finish_working_on_nodes` gets the two artboard IDs. After the close, no Paper write happens under this run.
- **AC-6**: `Tooltip` is exported from `@renonreis/triquetra` as a compound object `{ Root, Trigger, Content }`, with `TooltipRootProps`, `TooltipTriggerProps`, `TooltipContentProps`, `tooltipVariants` and `TooltipVariants`. `Root` wraps Ark's `Tooltip.Root` and passes every Ark prop through, with these defaults (each overridable by the caller): `lazyMount` and `unmountOnExit` `true`, `interactive` `true`, and `positioning` merged as `{ placement: 'top', ...positioning }`. `Trigger` is Ark's `Tooltip.Trigger` with the trigger slot class merged in. `Content` renders Ark's `Portal`, then `Tooltip.Positioner`, then `Tooltip.Content`, as _Overlay pattern_ says. `Trigger` and `Content` forward their ref, spread the remaining props, keep Ark's `asChild`, and merge `className` through `tv()`. Ark's `data-scope="tooltip"` and `data-part` stay on every part.
- **AC-7**: Behavior and accessibility, all from Ark with the defaults above: closed at first render, with nothing of the tooltip in the DOM; opens after `openDelay` (400 ms) on pointer hover and at once on keyboard focus (Ark opens on focus only when focus is visible); closes after `closeDelay` (150 ms) when the pointer leaves both the trigger and the content, at once on blur, on Escape, on a click or pointer down on the trigger and on scroll; stays open while the pointer is on the content. While open, the content has `role="tooltip"` and the trigger's `aria-describedby` points to its `id`; the content is never focusable. With `disabled`, it never opens. Touch pointers do not open it. The JSDoc says: the tooltip is a description, never the only name (an icon only button still needs `aria-label`); keep it to short plain text, no links or buttons; do not put a tooltip on a disabled control (it cannot receive focus or pointer events); touch users never see it, so it must not hold information they need.
- **AC-8**: Styles follow _Design values_ in light and dark. No token is added or changed, and no contrast pair is added: `fg.inverse` on `bg.inverse` is already in `contrast.test.ts`.
- **AC-9**: `tooltip.stories.tsx` (meta tagged `visual`) has the 5 visual stories and the 1 interaction story in _Stories_, run in light and dark with the a11y addon in `error` mode. `tooltip.test.tsx` (Vitest, jsdom) covers: nothing rendered while closed; keyboard focus opens it with `role="tooltip"` and `aria-describedby`; Escape closes it; hover opens it only after the delay and leaving closes it; `disabled` never opens; the four defaults of AC-6 and a caller override of each; ref forwarding and prop spreading (`id`, `data-*`) on `Trigger` and `Content`; `className` merge on `Trigger` and `Content`; `asChild` on `Trigger` with a `Button`; the content lands in `document.body`, outside the story container; and `axe` for the closed state and the open state.
- **AC-10**: 10 new baselines (5 visual stories × light and dark) are generated in the Playwright Docker image, then `pnpm test:visual:docker` passes in compare only mode with no other baseline changed. The Docker suite never runs while another Storybook build runs (they share `storybook-static`).
- **AC-11**: `rationale.md` links a parity table (`parity/tooltip.md`, light and dark) for the 5 cells per mode in _Parity_ (one row per part and property), measured on the code PR's Storybook, with spec 0002's columns and spec 0005's _Normalization_, plus a read only negative control. Every row is `match` or resolved before the PR merges: fixed in code and measured again in both modes, or `design change` / `deviation` with the maintainer's approval and a follow up.
- **AC-12**: The code PR carries a `minor` changeset (new public exports `Tooltip`, the three part prop types, `tooltipVariants` and `TooltipVariants`).

## Decision

**Chosen option**: Option 1: a compound `Tooltip` (`Root`, `Trigger`, `Content`) on Ark's Tooltip, inverse surface, top placement, Ark's delays, hoverable content, no arrow, no shadow, no animation, designed in Paper first; plus the _Overlay pattern_ as the rule later overlays follow.

It reuses `bg.inverse` and `fg.inverse` (their token description already says "such as tooltips") and the portal and positioner shape Dialog and Select already use, so it needs no token change, no contrast pair, no new dependency and no Paper token sync before the run. An arrow, an enter animation and a layered z index scale wait for a real need (Follow-up).

**Implementation skills**: none listed in `AGENTS.md`; the conventions there and Ark UI's Tooltip anatomy govern.

## Feature design

**Data model**: none. The surface is the React API below, the two Paper artboards and the parity table.

**State transitions** (Ark's machine, not reimplemented): `closed` → (pointer rests on trigger for `openDelay`, or keyboard focus) → `open` → (pointer leaves trigger and content for `closeDelay`) → `closed`; `open` → (blur, Escape, click or pointer down on the trigger, scroll, `disabled` set) → `closed` at once. While another tooltip has just closed, Ark opens the next one without the delay (its `data-instant` state).

**API surface**:

| Export                                   | Kind      | Key inputs                                                                                                                                                                                                                              | Notes                                                                                                                                                                          |
| ---------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Tooltip.Root`, `TooltipRootProps`       | component | Ark's `Tooltip.RootProps`: `open?`, `defaultOpen?`, `onOpenChange?`, `openDelay?` (400), `closeDelay?` (150), `interactive?` (`true` here), `positioning?` (`{ placement: 'top' }` merged), `disabled?`, `lazyMount?`, `unmountOnExit?` | a plain function, no ref (Ark's root renders no element), like `Dialog.Root`; `TooltipRootProps extends ArkTooltip.RootProps, TooltipVariants`; provides the styles by context |
| `Tooltip.Trigger`, `TooltipTriggerProps` | component | Ark's `Tooltip.TriggerProps`, `asChild` usually around a `Button`                                                                                                                                                                       | `forwardRef<HTMLButtonElement>`; renders a `button` without `asChild`                                                                                                          |
| `Tooltip.Content`, `TooltipContentProps` | component | Ark's `Tooltip.ContentProps`, children (short plain text)                                                                                                                                                                               | `forwardRef<HTMLDivElement>`; renders `Portal` → `Positioner` → `Content`; the ref and props go to the content                                                                 |
| `tooltipVariants`, `TooltipVariants`     | `tv()`    | none yet                                                                                                                                                                                                                                | slots `trigger`, `positioner`, `content`; exported like `dialogVariants`                                                                                                       |

Files: `packages/react/src/components/tooltip/` (`tooltip.tsx`, `tooltip.variants.ts`, `tooltip.stories.tsx`, `tooltip.test.tsx`, `index.ts`) and one export line in `src/index.ts`, after `alert`: `export * from './components/tooltip/index.js';`. Usage:

```tsx
<Tooltip.Root>
  <Tooltip.Trigger asChild>
    <Button variant="neutral">Export</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>Download a CSV of this report</Tooltip.Content>
</Tooltip.Root>
```

### Overlay pattern

The rule every floating component follows from now on (Tooltip first; Dialog and Select already match it apart from the item noted). `/sync` copies the short form into `AGENTS.md`, _Component conventions_.

1. **One part owns the portal.** The part named `Content` renders Ark's `Portal`, then the component's `Positioner`, then Ark's content. Callers never place `Portal` or `Positioner` themselves. The ref and the remaining props go to the content element.
2. **Mount only while open.** `Root` defaults `lazyMount` and `unmountOnExit` to `true`, so a closed overlay leaves nothing in the DOM. The caller may override both.
3. **Default positioning, caller wins.** `Root` merges the component's defaults under the caller's object: `positioning={{ ...defaults, ...positioning }}` (Select already does this). Keep Ark's own defaults unless the component needs another: `gutter` 8 (equal to `space.2`), `flip` and `shift` on, `overflowPadding` 8. Pixel numbers here are Ark options, not CSS, so they are not tokens; when a component sets one, it is a multiple of 4 and names the space token it equals in a comment.
4. **One layer.** Every positioner (and Dialog's backdrop) uses `z-50`. Overlays stack by the order Ark appends their portals to `body`, so a tooltip opened inside a dialog shows above it. A z index token scale waits until two overlay layers really conflict.
5. **Surfaces.** Menus, popovers and listboxes use the Select surface (`bg-bg-surface`, `border-border-default`, `shadow-md`, `rounded-surface`). Tooltip is the one inverse surface (`bg-bg-inverse`, `text-fg-inverse`, no border, no shadow, `rounded-control`).
6. **No `dark:` and no enter animation yet.** Modes switch through tokens. Motion for overlays is a follow up (with `motion-safe:` and the `motion.*` tokens) so every overlay gets it at once.
7. **Stories.** A visual story shows the overlay open with the controlled `open` prop (never `defaultOpen`, which can close on scroll or a stray pointer during the screenshot), and its `play` waits until the content has `data-placement` before the screenshot. Behavior is proven in a separate story tagged `!visual`.
8. **Paper.** The open state is drawn statically, the content next to its trigger at the gutter distance, centered on the cross axis, as Ark places it when nothing collides.

Dialog's `Content` already follows items 1, 2 and 4; Select follows all of them. No change to either is part of this spec.

### Design values

| Slot         | Classes                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| `trigger`    | `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus`                 |
| `positioner` | `z-50`                                                                                                      |
| `content`    | `max-w-xs rounded-control bg-bg-inverse px-2 py-1 font-body text-xs leading-4 font-regular text-fg-inverse` |

The trigger slot only guarantees a visible focus ring when `Trigger` renders its own `button`; with `asChild` around a `Button`, the classes merge with Button's identical ring. The content has no border and no shadow: the inverse fill already separates it from the page in both modes.

Geometry: 8 px left and right padding, 4 px top and bottom padding, 12 px text on a 16 px line, so a one line tooltip is 24 px high. The width follows the text up to `max-w-xs` (320 px, `size.container.xs`), then the text wraps (a two line tooltip is 40 px high). The gap to the trigger is Ark's `gutter` (8 px), and the content is centered on the trigger along the other axis. `radius.control` (6 px in the default brand).

Contrast: `fg.inverse` on `bg.inverse`, already tested at 4.5:1 in every brand, theme and mode. In light it is light text on a near black fill; in dark the fill flips to near white with dark text.

**Allowed literals added to spec 0002's list**: the artboard layout widths in _Artboard content and placement_ (608 px cells, 448 px stage frame bound to `--tq-size-container-md` where Paper allows it). No other new literal: the gap, paddings, radius, max width, type and colors are tokens.

### Stories

Meta: `title: 'Components/Tooltip'`, `component: Tooltip.Root`, `tags: ['autodocs', 'visual']`, `parameters: { layout: 'centered' }`, one decorator `<div className="p-24">` (96 px around the trigger, room for every placement), and no `argTypes` (the placement stories cover placement). A shared render draws `Tooltip.Root` → `Tooltip.Trigger asChild` → `Button variant="neutral"` (size `md`) with the label `Export`, and `Tooltip.Content` with the story's text.

| Story         | Root props                                      | Content text                                                                   |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| `Default`     | `open`                                          | "Download a CSV of this report"                                                |
| `Bottom`      | `open`, `positioning={{ placement: 'bottom' }}` | "Download a CSV of this report"                                                |
| `Left`        | `open`, `positioning={{ placement: 'left' }}`   | "Download a CSV of this report"                                                |
| `Right`       | `open`, `positioning={{ placement: 'right' }}`  | "Download a CSV of this report"                                                |
| `LongText`    | `open`                                          | "Archived projects are read only. Restore one from Settings to edit it again." |
| `Interaction` | none (closed), tagged `!visual`                 | "Download a CSV of this report"                                                |

Each visual story's `play` waits (with `waitFor`, inside `document.body`) until the element with `role="tooltip"` has `data-placement` equal to its placement (`top`, `bottom`, `left`, `right`, `top`). The one line text is about 185 px wide and the long text about 470 px, so with a 304 px text box (320 minus padding) the first is one line and the second two lines, with margin on both sides of each wrap point. `Interaction`'s `play`: Tab focuses the button and the tooltip appears with `aria-describedby` on the button pointing at it; Escape removes it; hovering the button shows it again after the delay; unhovering removes it.

### State inventory (artboard cells and parity)

5 cells per mode, one per visual story, in the table order. The closed state is the Button alone (already drawn on Button's artboard), and hover or focus only decide when the tooltip shows, so the open tooltip in each placement plus the wrapped text is the whole visual inventory. The interaction story is behavior and is not drawn.

### Artboard content and placement

- **Chrome** (header, section titles, captions, Props table, snippet box): same structure, typography and spacing as the spec 0006 artboard `3UA-0` (Alert), read with `get_jsx` at the baseline, with every value bound per spec 0002's _Binding rules_ (semantic tokens only; the snippet uses `--tq-font-family-mono`). Never copy a literal from `IB-0`, `O0-0` or `R7-0`.
- **Header**: eyebrow `Components / 14`, title `Tooltip`, description "A short hint on hover and keyboard focus. It describes the control; it never names it.", snippet `import { Tooltip } from '@renonreis/triquetra';`.
- **Sections**, in order, each with a section title in `3UA-0`'s section title style: `Placements`, `Long text`, `Props`. Layer names follow `3UA-0`'s pattern (section frame named by its title, each cell named by its story).
- **Cells**: 608 px wide, height `fit-content`. Each holds a stage frame (448 px wide, `space.6` padding, contents centered both ways) and, under it, the story name as a caption. Caption style, the gap between stage and caption, the cell padding and the column and row gaps are `3UA-0`'s values. The stage has no fill of its own (the artboard's `bg.canvas` shows through), as Storybook's page does.
- **Stage contents**: the trigger (a Button frame, `Export`) and the tooltip, `space.2` (8 px) apart, centered on the cross axis. Top: a column with the tooltip first. Bottom: a column with the trigger first. Left: a row with the tooltip first. Right: a row with the trigger first. Long text: as Top, with the tooltip frame capped at `--tq-size-container-xs` so the text wraps.
- **Trigger values**: the Button `neutral` `md` story measured in Storybook at the design SHA, light and dark (height, horizontal padding, radius, fill, text color, font size, weight, line height), each bound to the token the Button variants name (`action.neutral.bg`, `action.neutral.fg`, `radius.control`, `font.size.sm`, `font.weight.medium`). If a measured value has no token, stop and report.
- **Placements**: two rows of two cells, top aligned: `Default`, `Bottom`; `Left`, `Right`. **Long text**: one row, `LongText` on the left.
- **Tooltip node structure** (mirrors the DOM, so parity maps by structure): stage frame → trigger frame (`Button`) → trigger label text; and the tooltip frame (`Tooltip`) → tooltip text.
- **Props** rows (name, type, default): `positioning` · `PositioningOptions` · `{ placement: 'top' }`; `openDelay` · `number` · `400`; `closeDelay` · `number` · `150`; `interactive` · `boolean` · `true`; `disabled` · `boolean` · `false`; `open` / `defaultOpen` · `boolean` · `false`. A note under the table: "Compose Root, Trigger and Content. Content renders in a portal. Keep the text short and never the control's only name."
- **Placement**: light at world y 0, 80 px right of the rightmost artboard whose y is 0 (Alert `3UA-0` today at x 15200, 1440 wide, so x 16720). Dark directly under it, at y = the larger of the current dark row y (3990 today) and the bottom of the tallest light artboard plus 160. If either slot overlaps any artboard, shift right in 80 px steps until it does not. Existing artboards never move.
- **Dark**: `duplicate_nodes` of the finished light artboard, then one `update_styles` batch that swaps every color to its `-dark` token, built from the dark artboard's own `get_jsx`. After duplicating, check sibling order with `get_children` at every level that holds more than one cell or part, and fix any out of order sibling with `move_nodes` on the run's own nodes. Spec 0002's, 0005's and 0006's lessons apply: set `fontSize` and `lineHeight` with `update_styles` after `create_artboard` (the artboard root keeps Paper's default; every text node sets its own size); after a color change on text, rewrite span colors with `set_text_content` (`html`); one `write_html` per parent at a time.

### Procedure

Spec 0006's _Procedure_ with these changes:

1. **Baseline**: as spec 0006, with `get_jsx` of every artboard on `p-4-0` (19 expected, Alert included). The artboards whose `get_jsx` comes back inline (`IB-0`, `O0-0`, `R7-0`, `3OS-0`, `3RR-0` at the Alert run, and any other that does now, including `3UA-0` and `3XM-0`) are hashed by their 1x PNG export, exported twice. Paper `export` writes into `~/Downloads`: move each file to a scratch folder at once. **Storybook measurement**: the Button `neutral` `md` values in light and dark (the trigger), and the open `Default` and `LongText` tooltips (width, height, line count), to confirm _Stories_' line counts before drawing.
2. **Pilot**: draw `Tooltip` light, screenshot after each section, binding round trip, and confirm on a scale 2 screenshot that every one line tooltip is one line and `LongText` is two.
3. **Parity after code**: as spec 0006, mapping Paper nodes by the tooltip node structure (cell, stage, trigger, tooltip, text). The code side finds the tooltip by `[data-scope="tooltip"][data-part="content"]` in `document.body` and the trigger by `[data-scope="tooltip"][data-part="trigger"]`.

### Parity

Per cell, the parts and properties compared (spec 0002 _Normalization_ as refined in spec 0005):

- **Rows**: one row per part and property, 5 cells per mode.
- **Tooltip**: width, height, padding (each side), radius, background, border width (0 on both sides), box shadow (`none` in code; Paper draws none), text color, font family, size, weight, line height, number of lines, placement side, gap to the trigger on that side, and cross axis offset (the difference between the tooltip's and the trigger's centers on the other axis, rounded to 0.5 px).
- **Trigger**: width, height, horizontal padding, radius, background, text color, font size, weight. These confirm the Paper drawing of Button; a difference is a Paper fix in this run or a code question for Button, never a Tooltip change.
- **Excluded**: Paper only chrome (header, captions, Props, stage padding) and the exact text box width (the tooltip width is compared).
- **Negative control**: read only, in the comparison input only: replace the Paper background of `Default`'s tooltip with the value of `bg.surface` and confirm the comparison reports a DIFF, in both modes. No Paper write.
- After any code fix, the affected rows are measured again in both modes and the row records the new head SHA.

**Value sourcing**:

| Action | Value produced or displayed                      | Source                                                                         |
| ------ | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| Draw   | cells, copy, placement per cell                  | _Stories_ and _State inventory_                                                |
| Draw   | tooltip colors, padding, radius, type, max width | _Design values_, token values from `tokens.json` at the design SHA             |
| Draw   | gap to the trigger, cross axis alignment         | Ark's `gutter` (8, equal to `space.2`), centered (_Overlay pattern_ item 3, 8) |
| Draw   | trigger values                                   | Button `neutral` `md` story measured in Storybook, bound to Button's tokens    |
| Draw   | token name per value, literals                   | spec 0002 _Binding rules_ and _Allowed literals_, plus the additions above     |
| Draw   | chrome, Props copy, placement                    | _Artboard content and placement_, `3UA-0` via `get_jsx`, `get_basic_info`      |
| Draw   | dark color per node                              | the dark artboard's own `get_jsx`, each light token name plus `-dark`          |
| Code   | classes per slot                                 | _Design values_ (after any AC-5 change)                                        |
| Code   | delays, placement, hoverable, mounting           | Ark's defaults plus the four `Root` defaults in AC-6                           |
| Code   | `role`, `aria-describedby`, ids                  | Ark's Tooltip (AC-7)                                                           |
| Code   | where the content mounts                         | Ark's `Portal` (`document.body` by default)                                    |
| Parity | code value and Paper value                       | Storybook at the measurement SHA, `get_jsx` of the ledger nodes                |

**Key invariants**:

- The tooltip is never focusable and never holds interactive content; it only describes its trigger.
- Nothing of a closed tooltip is in the DOM (with the default mounting).
- The only color pair is `fg.inverse` on `bg.inverse`; no token or contrast pair is added.
- Semantic token utilities only: no `dark:`, no arbitrary values, no animation.
- Focus management, delays, keyboard handling and ARIA come from Ark; none is reimplemented.
- No Paper token is created, changed or deleted; no write outside the run ledger; no write after the run closes without a new approved plan.

**Security model**: no data and no secrets. The content is rendered as React children, never as HTML. Paper writes are limited by AC-1, AC-4, AC-5 and the ledger, under the maintainer's account.

**Configuration required**: none.

**Critical test scenarios**:

- Keyboard Tab on the trigger shows `role="tooltip"`, the trigger's `aria-describedby` points to it, and Escape removes it, verifies **AC-7**, **AC-9**.
- Hover shows it only after 400 ms and leaving removes it; with `disabled` it never shows, verifies **AC-7**.
- Nothing is in the DOM before the first open; the content mounts in `document.body`, verifies **AC-6**, **AC-7**.
- `placement` defaults to `top` and a caller's `positioning` wins; `interactive` defaults to `true` and can be turned off, verifies **AC-6**.
- `axe` finds no violations closed and open, in jsdom and in every story in light and dark, verifies **AC-9**.
- Docker suite in compare only mode passes after the 10 new baselines with every other baseline unchanged, verifies **AC-8**, **AC-10**.
- Parity negative control reports a DIFF in both modes, verifies **AC-11**.
- Post pilot recheck and scope audit match the baseline plus the ledger, by hash, verifies **AC-4**, **AC-5**.

## Build plan

Tracer Bullet with design first: the artboard is the first layer, then one PR takes the component through code, stories, tests, baselines, parity and changeset.

1. Spec PR (this spec, scope row linked); merge after your confirmation, satisfies **AC-1**
2. Paper run: baseline with JSX and PNG hashes, Storybook measurement of Button and the tooltip line counts, write plan approval, pilot light artboard, recheck, dark sibling, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-4**
3. Design review of both artboards inside the run, any change drawn and folded into _Design values_; then scope audit, close, ledger summary in `rationale.md` (docs PR), satisfies **AC-4**, **AC-5**
4. Code PR: `tooltip/` with variants and the three parts on the _Overlay pattern_, export from `src/index.ts`, satisfies **AC-6**, **AC-7**, **AC-8**
5. Same PR: 5 visual stories, the interaction story and the tests, satisfies **AC-7**, **AC-9**
6. Same PR: 10 Docker baselines, then the Docker suite in compare only mode, alone, satisfies **AC-8**, **AC-10**
7. Same PR: scripted parity table `parity/tooltip.md` with negative control, every row resolved, satisfies **AC-11**
8. Same PR: `minor` changeset; merge when the required checks are green, satisfies **AC-12**

## Consequences

**Positive**:

- No new dependency, token, contrast pair or Paper token sync: the run can start right after this spec merges.
- Delays, Escape, focus visible detection, `role` and `aria-describedby` all come from Ark, so there is no timer or ARIA code of our own to maintain.
- The _Overlay pattern_ gives Popover, Menu and later overlays one answer for portal, mounting, positioning, layering and stories.
- Hoverable by default meets WCAG 1.4.13 without the caller doing anything.

**Negative / tradeoffs**:

- No arrow: the tooltip points at its trigger only by position. Ark's arrow needs CSS variables set with arbitrary values, which the conventions forbid without a token.
- No animation: the tooltip appears and disappears at once until the overlay motion follow up.
- Hoverable content keeps `pointer-events` on, so for the 150 ms close delay it can sit over a control the user wanted to click next.
- One `z-50` layer: two overlays that are siblings but not nested stack by mount order, which is right today but is not a guarantee.
- Touch users never see a tooltip; products must not put needed information in one.
- A tooltip cannot sit on a disabled button; products that want to explain a disabled action need helper text instead.

**Neutral**:

- `Tooltip` is a compound object, so React Server Components use it inside their own client components, like Dialog.
- In dark mode the tooltip turns near white, the inverse of the page, as `bg.inverse` defines.

## Follow-up

- [ ] Optional `Tooltip.Arrow`, after a token for the arrow size exists (shared with Popover's arrow)
- [ ] Overlay enter and exit motion with `motion-safe:` and the `motion.*` tokens, for Tooltip, Select and Dialog at once
- [ ] A z index token scale, when two overlay layers conflict
- [ ] `/sync`: copy the _Overlay pattern_ short form into `AGENTS.md`, _Component conventions_

## Rationale

Reasoning and options: see [rationale.md](rationale.md).
