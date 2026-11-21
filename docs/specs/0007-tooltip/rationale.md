# 0007. Rationale

## Context

Slice 2 grows the catalog one component per PR, each designed in Paper first (scope, feature 3). Tooltip comes last on purpose: it is the first floating component built under the workflow, so it sets how later overlays portal, position and layer. Products need a short hint on icon buttons and terse controls ("Download a CSV of this report"), and today each one wires its own hover timer and `title` attribute, which keyboard and touch users never see and which screen readers read unevenly.

Ark UI ships a Tooltip (`@ark-ui/react` 5.40, on `@zag-js/tooltip` 1.47) with `Root`, `Trigger`, `Positioner`, `Content`, `Arrow` and `ArrowTip`. Its machine opens after `openDelay` (400 ms) on pointer hover, opens on focus only when focus is visible, closes after `closeDelay` (150 ms), on blur, Escape, pointer down, click and scroll, ignores touch pointers, sets `role="tooltip"` on the content and `aria-describedby` on the trigger while open, and opens the next tooltip at once when one has just closed. Its `interactive` option (off by default) keeps the tooltip open while the pointer is on it. Positioning comes from `@zag-js/popper` (Floating UI) with `placement` `bottom`, `gutter` 8, `flip` on and `overflowPadding` 8 by default. Its arrow is sized through `--arrow-size` and `--arrow-background` CSS variables.

The DS already has two overlays. Dialog's `Content` renders `Portal`, `Backdrop`, `Positioner` and the content, with `lazyMount` and `unmountOnExit` on; Select's `Content` renders `Portal` and `Positioner` with `z-50`, and its `Root` merges `{ sameWidth: true, fitViewport: true, ...positioning }`. Neither pattern is written down as a rule.

The tokens already hold `color.bg.inverse` (described as "Inverted surfaces, such as tooltips") and `color.fg.inverse`, and `contrast.test.ts` checks that pair at 4.5:1. `size.container.xs` is 320 px. Shadow tokens exist in code but not in Paper (spec 0001 defers them), and the conventions forbid arbitrary values such as `[--arrow-size:8px]`.

WCAG 1.4.13 (content on hover or focus) asks that such content be dismissible without moving focus (Escape), hoverable (the pointer can move onto it), and persistent until the user dismisses it or moves away. WCAG 4.1.2 asks the control to keep its own accessible name; a tooltip read through `aria-describedby` is a description.

The Alert run (spec 0006) left the procedure this spec reuses: JSX or PNG hashes for every existing artboard, sibling order checked after `duplicate_nodes`, the dark swap built from the dark artboard's own JSX, one `write_html` per parent at a time, the Docker suite run alone, line counts checked on a scale 2 screenshot, OKLCH rounded half up, and scripted parity with a negative control.

## Options considered

### Option 1: Compound `Tooltip` on Ark, inverse surface, top, Ark's delays, hoverable, no arrow, plus a written overlay pattern

**Pros**: follows the compound rule and Dialog's part names; every behavior and ARIA detail comes from Ark; no token, contrast pair or Paper token sync; meets WCAG 1.4.13 by default; the pattern it writes down already matches Select.
**Cons**: three parts and `asChild` for a one line hint; no arrow; no animation.

### Option 2: Single `<Tooltip content="…">` wrapper around one child

**Pros**: one line to use, the shape many libraries offer.
**Cons**: breaks the compound convention; hides Ark's parts, so custom content, a controlled `open` or a ref on the content need more props over time; cloning the child to attach the trigger props is fragile with components that do not forward refs.

### Option 3: Option 1 plus `Tooltip.Arrow` and an enter animation now

**Pros**: the tooltip points at its trigger; it fades in like many design systems.
**Cons**: the arrow needs arbitrary value classes or a new token (an Ask first item); motion should land for all overlays at once with `motion-safe:`; both add pixels that make the visual baselines and Paper parity harder, and no product asks for them yet.

### Option 4: No portal, the content rendered next to the trigger

**Pros**: no portal in the DOM; simpler tests.
**Cons**: clipped by any ancestor with `overflow: hidden` and trapped under stacking contexts; differs from Dialog and Select, so it cannot be the shared pattern.

## Rationale

Option 1 solves the job (a consistent, accessible hint) with only what Ark and the token set already prove, and turns what Dialog and Select already do into a written rule, which is what the scope asked of this feature. The engineer asked on 2026-11-21 to take the recommended pick on every question; each pick and its runner up:

- **Compound parts** `Root`, `Trigger`, `Content`, Ark's names; `Content` owns `Portal` and `Positioner`. Runner up: a single wrapper with a `content` prop (Option 2).
- **Surface**: `bg.inverse` with `fg.inverse`, the pair the tokens describe for tooltips and already test. Runner up: the Select surface (`bg.surface`, border, shadow), which reads like a popover.
- **No shadow and no border**: the inverse fill already stands out in both modes, and Paper has no shadow token, so parity stays complete. Runner up: `shadow-md` (a known Paper gap).
- **Type**: 12 px on a 16 px line, regular weight; padding 8 by 4 px; `radius.control`. Small enough to read as a hint, the same type as Field's helper text. Runner up: 14 px (heavier than the controls it describes).
- **Max width `max-w-xs`** (320 px), then wrap. Runner up: no max (very long lines on wide screens).
- **No arrow** (Option 3 deferred): needs a token or arbitrary values. Runner up: `Tooltip.Arrow` with a new `size` token (Ask first).
- **No animation** (Option 3 deferred): overlay motion lands for all overlays together. Runner up: a fade with `motion.duration.fast`.
- **Placement `top`**: the most common tooltip side, it keeps the hint off the content below the control; Ark flips it when there is no room. Runner up: Ark's `bottom`.
- **Delays**: Ark's 400 ms open and 150 ms close, plus its instant open for the next tooltip. Runner up: 700 ms open (slower to appear, fewer accidental tooltips).
- **`interactive` on by default**: makes the content hoverable (WCAG 1.4.13); the caller can turn it off. Runner up: Ark's off, which closes the tooltip when a zoomed user moves onto it.
- **`lazyMount` and `unmountOnExit` on**, as Dialog and Select: a closed tooltip leaves nothing in the DOM, and `aria-describedby` is only set while open anyway. Runner up: Ark's always mounted content.
- **Always in a portal**, `z-50` on the positioner (Option 4 rejected). Runner up: a `portalled` prop (no use case yet).
- **Trigger slot with the focus ring**: a bare `Tooltip.Trigger` is a `button`, and visible focus is mandatory. Runner up: no trigger styles (relies on `asChild`).
- **Disabled controls and touch**: not supported, written in the JSDoc; Ark ignores touch and a disabled button gets no events. Runner up: wrapping disabled controls in a focusable span (adds a tab stop that does nothing).
- **Stories**: 5 visual stories with the controlled `open`, each waiting for `data-placement`, plus one `!visual` interaction story; hence 10 baselines. Runner up: `defaultOpen` (can close during the screenshot).
- **Paper**: the open state drawn statically next to a Button `neutral` `md` trigger, measured from Button's story. Runner up: a plain rectangle as trigger (parity of the gap and centering would then have no real trigger to compare).
- **Alert's artboard `3UA-0` as the chrome template**, the newest artboard with every chrome value bound.

No item needed the engineer's own call: there is no new runtime dependency, no token naming or hierarchy change, no public API change of an existing component, and no CI or release change.

## Cross check (2026-11-21)

A read only review by another model (Gemini 3.8 Flash) found 6 decision gaps and 4 soundness points. Following the engineer's instruction to take the recommended picks, every recommended fix was applied:

- **Stage height in Paper**: fixed at 136 px (the tallest content plus padding), so every cell has the same height and centering is defined.
- **Text alignment**: `text-start` on the content and left aligned text in Paper.
- **Props table**: `lazyMount` and `unmountOnExit` added.
- **Part outside `Root`**: Ark's own context error, as Dialog and Select; no custom error (the draft never required one; now said explicitly).
- **Tooltip frame sizing in Paper**: one line frames hug their text; `LongText` is a fixed 320 px frame with a 304 px wrapping text node.
- **Gap and offset formula**: `getBoundingClientRect` deltas between the content and trigger parts, rounded to the nearest whole px (a Storybook measurement before drawing showed gaps of 8 to 8.4 px, so 0.5 px rounding would fail).
- **Screenshot race**: the visual `play` also waits until the tooltip sits 7 to 9 px from the trigger, not only for `data-placement`.
- **Keyboard focus in tests**: always `userEvent.tab()`, since Ark ignores focus without a keyboard event first.
- **Timers**: real timers with a short test `openDelay`; no fake timers.
- **Hover across the 8 px gap**: recorded as a tradeoff; the JSDoc tells callers they can raise `closeDelay`.

Not applied: removing the duplicate focus ring classes under `asChild` (harmless, and the bare trigger needs them).

## Parity tables

Filled during the build (AC-11): [`parity/tooltip.md`](parity/tooltip.md), light and dark, with spec 0002's columns.

## Run ledger summary

Filled at the end of the Paper run: design SHA, approvals with dates (write plan, pilot, design review), baseline token hash, hashes compared (JSX text and PNG), the Storybook measurements, the two artboard IDs, ledger call count, scope audit result. The measurement SHA of the code PR goes in the parity table.

| Item                          | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Design SHA                    | `e0af5e6` (`main`, merge of #74), unchanged from baseline to close                                                                                                                                                                                                                                                                                                                                                                                                         |
| Paper file and page           | `01M7R4TP595GEKCEE8SHQCTJMX`, `p-4-0` (Components)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Baseline `contentHash.tokens` | `8c490a95` before and after the run, the hash of the last verified sync; `tokens/` and `scripts/` unchanged since the Alert run's verified state                                                                                                                                                                                                                                                                                                                           |
| Storybook measurement         | before drawing, on the locally drafted code (not merged), 1280 × 720, light and dark: Button `neutral` `md` 40 px high, 16 px side padding, 6 px radius, 14 px medium text on a 21 px line, `action.neutral.bg` and `action.neutral.fg`; one line tooltip 181.3 × 24 px, one line; `LongText` 320 × 40 px, two lines; gap to the trigger 8 to 8.4 px, cross axis offset up to 0.33 px                                                                                      |
| Approvals                     | on 2026-11-21 the engineer told the agent to continue without stopping, which covered the write plan, the pilot and the design review in advance; the engineer reviews both artboards after the close, and any change goes through a new approved plan                                                                                                                                                                                                                     |
| Ledger                        | 14 write calls, every target a node the run created or the page `p-4-0`: `create_artboard` 1, `write_html` 5 (header, Placements section, `Default` cell, Long text section, Props; one at a time), `duplicate_nodes` 2 (three cells from `Default`, then the dark artboard), `move_nodes` 1 (trigger first in `Bottom` and `Right`), `rename_nodes` 2, `set_text_content` 1 (captions), `update_styles` 2 (light position, dark position plus color batch); no tool error |
| Light artboard                | `40N-0` Tooltip at x 16720, y 0, 1440 × 1513                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Dark artboard                 | `43F-0` Tooltip · Dark at x 16720, y 3990; `duplicate_nodes` of the light one plus one `update_styles` batch of 73 color declarations (every fill, border and text color), mapped from the light JSX through the duplicate's id map and checked against the dark artboard's own `get_jsx`                                                                                                                                                                                  |
| Sibling order after duplicate | checked in the dark `get_jsx`: rows, cells and stage children in the light order; no `move_nodes` needed                                                                                                                                                                                                                                                                                                                                                                   |
| Binding audit                 | light: every color a semantic token, no `-dark`, no literal color; padding, gaps, radius, button height, the 448 px stage width and the 320 px long text width bound to tokens; dark: every color a `-dark` token, structure equal to the light copy                                                                                                                                                                                                                       |
| Recheck after the pilot       | page held the 19 baseline artboards at their positions plus `40N-0`; `main` unchanged                                                                                                                                                                                                                                                                                                                                                                                      |
| Scope audit                   | page holds the 19 baseline artboards plus these 2; ids, positions and `contentHash.tokens` unchanged; SHA-256 equal to the baseline for the `get_jsx` text of the 12 artboards that return it to a file, and for the 1x PNG export of `IB-0`, `O0-0`, `R7-0`, `3OS-0`, `3RR-0`, `3UA-0` and `3XM-0` (two baseline exports gave the same bytes; exports moved out of `~/Downloads` at once)                                                                                 |
| Close                         | `finish_working_on_nodes` with `40N-0` and `43F-0`                                                                                                                                                                                                                                                                                                                                                                                                                         |

Differences from the spec, recorded in this run:

- **Text alignment in Paper**: the `text-align: left` written on the tooltip text is Paper's default, so `get_jsx` does not show it; the text renders left aligned.
- **One line tooltip width**: Paper sizes text boxes to whole pixels, so the one line tooltip is 182 px wide in Paper and 181.3 px in code. Parity compares the width of a one line tooltip with a 1 px tolerance; `LongText` (fixed 320 px) is compared exactly.
- **Observation for the design review**: in dark mode the tooltip turns near white (`bg.inverse` is neutral 0), the brightest element on the page. It is what `bg.inverse` defines and the text pair passes; review whether it feels too loud.
