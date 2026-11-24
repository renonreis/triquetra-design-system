# 0008. Rationale

## Context

Slice 3 adds the two overlays the catalog misses most. Popover comes first because it is the plain interactive surface Menu builds on (scope, feature 9): a panel with text, links or a small form, where focus moves in. Spec 0007 already fixed portal, mounting, positioning, layering, surface and stories for overlays; focus, close behavior and sizing were left to this one.

Ark UI ships a Popover (`@zag-js/popover` 1.47). Its machine toggles on the trigger's click, moves focus to the first tabbable element, returns it on Escape and close, closes on outside press or focus, proxies Tab so a portalled panel sits after its trigger in the tab order, and sets `role="dialog"`, `aria-labelledby` and `aria-describedby` only for the parts rendered.

A local draft (not merged) was run before writing this, and it found three things Ark's docs do not say:

- `getCloseTriggerProps` sets `aria-label="close"` and one fixed `id`. Under `asChild` the label would replace "Cancel" as the accessible name (against WCAG 2.5.3, label in name), and two close buttons would share an id.
- The positioner has an inline `min-width: max-content`, which beats the `max-width` that `fitViewport` sets, so a fixed width panel overflows a narrow viewport. With `min-w-0!` the 320 px panel measured 304 px at a 320 px viewport, with no horizontal page scroll.
- With `open` set from the first render, Ark does not move focus; only a transition does.

In the draft, nesting in a Dialog with a Select inside worked as AC-7 says with no code of our own.

## Options considered

### Option 1: Compound `Popover` with Dialog's parts, Select surface, not modal, fixed width that yields to the viewport

**Pros**: one vocabulary for Dialog and Popover; behavior and ARIA from Ark; no token change; reflows at 320 px.
**Cons**: nine parts; one important modifier.

### Option 2: Only `Root`, `Trigger`, `Content` and Ark's `Title`, `Description`, `CloseTrigger`

**Pros**: fewer parts, like Tooltip.
**Cons**: every product rebuilds the header and action layout, so spacing drifts.

### Option 3: Content sized width (hug with a maximum) and size variants

**Pros**: small popovers hug short text.
**Cons**: the width jumps with the content and the language; variants nobody asked for yet, while `className` already changes the width.

### Option 4: Modal by default

**Pros**: focus cannot leave.
**Cons**: blocks the page for small content; that is Dialog's job.

## Rationale

Option 1 does the scope's job with what Ark and the tokens already prove. Picks taken as recommended (the engineer asked for that on 2026-11-21), each with its runner up:

- **Parts**: Dialog's names. Runner up: Option 2.
- **Not modal**; `modal` stays available. Runner up: Option 4.
- **Placement `bottom`**, Ark's default, centered. Runner up: `bottom-start`, better for wide panels under start aligned triggers.
- **Width 320 px fixed**, `fitViewport` on, scroll inside. Runner up: Option 3.
- **Padding 16 px, gap 16 px, title 16 px semibold**: Card `sm`'s padding and title size, one step below Dialog. Runner up: Dialog's 24 px, heavy at 320 px.
- **Surface**: Select's, as _Overlay pattern_ item 5 says. No runner up.
- **Corner close optional**, placed last in the DOM so it is not the first focus. Runner up: always rendered (Escape and outside press already close).
- **`Header` always keeps room** for the corner button, as Dialog. Runner up: reserve it with a `has-` selector.
- **`asChild` close keeps its name**: Ark's label and id dropped. Runner up: ask callers to repeat `aria-label`, easy to forget.
- **No arrow, no motion, no `Anchor`**: follow ups.
- **Stories**: 4 visual, 6 interaction. Runner up: `Left` and `Right` too, already proven by Tooltip and cramped at 320 px wide.
- **Paper**: trigger, buttons and field measured from Storybook; shadow literals as spec 0002.

No Ask first item came up: no dependency, no token naming or hierarchy change, no public API change of an existing component, no CI change.

## Cross check (2026-11-24)

A read only review by another model (Gemini 3.8 Flash on Antigravity) found 6 decision gaps and 3 soundness points. Following the engineer's instruction to take the recommended picks, the fixes were applied:

- **Measured values**: Button and Field are measured on their own stories on `main`, not on the local draft.
- **Body color**: `text-fg-default` written on the slot.
- **Literals**: the close button's 8 px offset and 16 px icon added to the allowed list.
- **Parity mapping**: header, body and footer are found by a fixed child order per story. Not applied: adding a `data-part` of our own, which Dialog does not have.
- **320 px viewport** and **Tab order**: two more interaction stories, `Narrow` and `TabOrder`; both pass on the draft.
- **`Title`** renders an `h2` in Ark, with an `HTMLHeadingElement` ref; the draft said `div`.
- **`WithForm`** uses `defaultValue`.

Not applied: dropping the style context. Tooltip has no variants either and uses the same context, so the parts stay alike across components.

## Parity tables

Filled during the build (AC-13): `parity/popover.md`.

## Run ledger summary

Filled at the end of the Paper run.
