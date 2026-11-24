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
- **Stories**: 4 visual, 7 interaction. Runner up: `Left` and `Right` too, already proven by Tooltip and cramped at 320 px wide.
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

[`parity/popover.md`](parity/popover.md): 538 rows, all `match`, negative control DIFF in both modes (AC-13).

## Run ledger summary

| Item                          | Value                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Design SHA                    | `bbe711a` (`main`), unchanged from the first write to the close. A first plan on `820b83e` was approved and discarded before any write, because `main` moved (#81, gate workflow only); the baseline was taken again and the plan approved again                                                                                                                                                                                     |
| Paper file and page           | `01M7R4TP595GEKCEE8SHQCTJMX`, `p-4-0` (Components)                                                                                                                                                                                                                                                                                                                                                                                   |
| Baseline `contentHash.tokens` | `8c490a95` before and after the run; `tokens:paper:diff` on a fresh export: no drift                                                                                                                                                                                                                                                                                                                                                 |
| Storybook measurement         | Button and Field stories on `main`, 1280 × 720, light and dark: Button `neutral` `md` 40 px high, 16 px side padding; Button `sm` `primary` and `ghost` 32 px high, 12 px side padding; 6 px radius, 14 px medium text on a 21 px line; Field label 14/21 medium, gap 8 px; Input `md` 40 px high, 12 px side padding, 1 px border. Panel heights from the local draft: 148, 148, 187, 76 px                                         |
| Approvals                     | all on 2026-11-24, by the maintainer: the spec and `radius.surface` (8 px) with the first plan; the plan on `bbe711a`; the pilot, with the 190 px Props column; both artboards as drawn (design review)                                                                                                                                                                                                                              |
| Ledger                        | 17 write calls, every target a node the run created or the page `p-4-0`: `create_artboard` 1, `write_html` 5 (header, Placements with `Default`, Content with `WithForm`, `BodyOnly` cell, Props), `duplicate_nodes` 2, `move_nodes` 1 (panel first in `Top`), `rename_nodes` 2, `set_text_content` 1, `update_styles` 5 (light position, light root type, dark position, dark color batch, dark close button offset); no tool error |
| Light artboard                | `462-0` Popover at x 18240, y 0, 1440 × 1627                                                                                                                                                                                                                                                                                                                                                                                         |
| Dark artboard                 | `49E-0` Popover · Dark at x 18240, y 3990; a `duplicate_nodes` of the light one plus one `update_styles` batch built from its own `get_jsx` (87 color references, 4 shadows)                                                                                                                                                                                                                                                         |
| Binding audit                 | light: every color a semantic token, none `-dark`, none literal, only the light `shadow.md` literal; dark: every color a `-dark` token, only the dark `shadow.md` literal, structure equal to the light artboard                                                                                                                                                                                                                     |
| Recheck after the pilot       | the 21 baseline artboards equal, plus `462-0`; `main` unchanged                                                                                                                                                                                                                                                                                                                                                                      |
| Scope audit                   | page holds the 21 baseline artboards plus these 2; positions, `contentHash.tokens`, and the SHA-256 of the `get_jsx` text of 12 artboards and of the 1x PNG export of 9 equal the baseline                                                                                                                                                                                                                                           |
| Close                         | `finish_working_on_nodes` with `462-0` and `49E-0`                                                                                                                                                                                                                                                                                                                                                                                   |

Differences from the spec, recorded in this run:

- **Props name column**: 190 px instead of the template's 150 (`closeOnInteractOutside` is 172 px wide); approved with the pilot.
- **Close button offset in dark**: duplicating rewrote the offset as 8 and 8.002; set back to 8 px, so only the spelling (`8` or `8px`) differs from the light artboard.
- **Artboard root type**: Paper keeps its own 12 px on 16 px on the artboard root; every text node sets its own size.
