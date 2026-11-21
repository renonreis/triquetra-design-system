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

## Cross check

Filled after the cross check runs.

## Parity tables

Filled during the build (AC-11): [`parity/tooltip.md`](parity/tooltip.md), light and dark, with spec 0002's columns.

## Run ledger summary

Filled at the end of the Paper run: design SHA, approvals with dates (write plan, pilot, design review), baseline token hash, hashes compared (JSX text and PNG), the Storybook measurements, the two artboard IDs, ledger call count, scope audit result. The measurement SHA of the code PR goes in the parity table.
