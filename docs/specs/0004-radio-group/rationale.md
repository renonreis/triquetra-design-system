# 0004. Rationale

## Context

Slice 2 grows the catalog one component per PR, each designed in Paper first (scope, feature 3). Radio Group comes after Textarea: forms have Checkbox for many choices but nothing for exactly one, so products fall back to raw radios or a Select for short lists.

Ark 5.40 ships `RadioGroup` (backed by `@zag-js/radio-group`): a `div` with `role="radiogroup"`, items rendered as `<label>` elements around visually hidden native radios, keyboard and focus handled by the browser's native radio behavior plus Zag's state. Its context reads Ark's `Fieldset` (disabled, invalid, and the legend as the group name), not Ark's `Field`. `Field.Label` is a `<label for>` that points at one input, so the scope's phrase "inside Field" does not work for a group, and Triquetra has no Fieldset component yet. Read only in Ark disables the radios.

The _design first_ variant of the Paper artboards rule (spec 0003) is already in `AGENTS.md`, so this feature needs no docs PR before its run. The Textarea run left four lessons: some `get_jsx` results come back inline and were then compared by structure only; the Docker visual suite and another Storybook build share `storybook-static`; Paper text boxes stretch, so line counts need a screenshot; OKLCH needs one rounding rule.

## Options considered

### Option 1: Compound `RadioGroup` on Ark, named by its own `Label`, Checkbox styles

**Pros**: Ark handles roles, names, keyboard, focus and form values; reuses Checkbox's proven tokens and states; no new dependency, token or contrast pair; small surface.
**Cons**: no helper or error text part until a Fieldset exists; the control's class list copies Checkbox's.

### Option 2: Same, plus a new `Fieldset` component

**Pros**: legend, helper, error and states wired by Ark for both groups at once.
**Cons**: two public components in one feature (stories, cells, baselines, artboard); breaks "one component per PR".

### Option 3: Wire `RadioGroup` to `Field` by hand

**Pros**: one form API for every control.
**Cons**: `Field.Label` would be a `<label for>` with no target; reimplements ARIA that Ark leaves to Fieldset, against `AGENTS.md`.

### Option 4: Own radios on `ark.input type="radio"`

**Pros**: full control.
**Cons**: reimplements focus, hover and state data attributes Ark already provides, against `AGENTS.md`.

## Rationale

Option 1 follows the rule to wrap the Ark primitive and keeps this feature to one component. The maintainer picked every recommended answer on 2026-11-21:

- **Wiring**: `RadioGroup.Label` names the group; `invalid`, `disabled`, `required`, `readOnly` go on `Root`. Runner up: add a Fieldset now (two components in one PR). The Fieldset goes to the scope's Deferred list.
- **Checked look**: filled like Checkbox (`action.primary.bg` with an `action.primary.fg` dot). Runner up: outlined ring with a primary dot (a new fg on bg pair to prove).
- **Dot size**: 8, 8, 12 px (`size-2`, `size-2`, `size-3`), tokens only. Runners up: a `p-1` inset (6, 10, 14 px, heavy at `lg`) or new component tokens (ideal ratio, but token contract work and a Paper token sync).
- **Orientation**: vertical by default, horizontal through Ark's `orientation`. Runner up: vertical only.
- **Parts**: `Root`, `Label`, `Item`, `ItemControl`, `ItemText` with Ark's names; `Item` renders the hidden input; Ark's sliding `Indicator` is left out (a segmented control pattern). Runner up: also export `Indicator`.
- **Size**: on `Root`, shared by every item. Runner up: per item (allows mixed sizes in one group).
- **Item description**: out of scope (Follow-up).
- **Label**: Field.Label's look, no automatic asterisk. Runner up: an asterisk part (waits for the Fieldset).
- **Form story**: `InForm` with a required, invalid group described by a plain error line. Runners up: a native fieldset story (names the group twice) or none.

Decided while writing (no further input needed):

- **Copy Checkbox's control list instead of a shared constant**: the radio drops the shape and every indeterminate rule, so a shared constant would need a split of Checkbox's list and puts Checkbox's rendering at risk. Parity against Checkbox's measured values and the Docker compare run guard it. Runner up: a shared constant, as Textarea did with Input.
- **Label in horizontal mode takes a full line** (`basis-full` in a wrapping row): Ark puts the label inside the root, so without it the label would sit in the row of items. Runner up: a wrapper element around the items (not an Ark part).
- **Gap of 12 px between label and items** (the root's `gap-3`), the same as between items and as the Checkbox group story's legend margin. Runner up: Field's 8 px.
- **Hover and focus stories interact for real** (as Checkbox): Ark sets `data-hover` and `data-focus-visible` from events, which the pseudo states addon cannot set.
- **Keyboard checks in a browser story** (`KeyboardSelection`), since arrow key radio movement is native browser behavior that jsdom does not implement.
- **Read only kept as Ark ships it** and asserted in tests, so a change in Ark shows up.
- **Textarea's artboard as the chrome template** (`2XD-0`), the newest artboard with every chrome value bound.
- **Lessons from the Textarea run**: every baseline JSX saved to a file and hashed (inline results written to the file unchanged); Docker suite run alone; one line labels confirmed on a scale 2 screenshot; OKLCH rounded half up; rows written one call at a time.

## Cross check (2026-11-21)

A read only review by another model (Gemini 3.8 Flash) found 9 points. You chose to apply every recommended fix:

- **Size variant map** written out per slot (`control`, `dot`, `itemText`); the group label does not change with size.
- **Item classes** listed in full, without Checkbox's `group/checkbox`.
- **`w-full` on the root**, as `Field.Root`, so the horizontal label keeps its own line in any parent.
- **`RadioGroup.Label` is required**: Ark always sets `aria-labelledby` to the label's id, so a group without it fails axe.
- **`onValueChange` payload** is Ark's details object (`{ value }`).
- **Props table** gains `Item` `invalid`.
- **Stories**: `InvalidFocusVisible` asserts focus; `KeyboardSelection` submits through a Triquetra `Button` and reads `FormData`.
- **States grid**: 11 cells in 3 by 4, the last slot empty.

## Parity tables

Filled during the build (AC-11): [`parity/radio-group.md`](parity/radio-group.md), light and dark, with spec 0002's columns.

## Run ledger summary

Filled at the end of the Paper run: design SHA, approvals with dates (write plan, pilot, design review), baseline token hash, JSX hashes compared, the two artboard IDs, ledger call count, scope audit result. The measurement SHA of the code PR goes in the parity table.

| Item                          | Value                                                                                                                                                                                                                                                           |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Design SHA                    | `d020259` (`main`, merge of #62), unchanged from baseline to close                                                                                                                                                                                              |
| Paper file and page           | `01M7R4TP595GEKCEE8SHQCTJMX`, `p-4-0` (Components)                                                                                                                                                                                                              |
| Baseline `contentHash.tokens` | `8c490a95` before and after the run; `tokens:paper:diff` exit 0 (204 tokens)                                                                                                                                                                                    |
| Shared values                 | Checkbox stories measured in Storybook at `d020259`, light and dark, plus three synthesized overlaps (read only unchecked, invalid focus visible, invalid checked hover)                                                                                        |
| Approvals                     | write plan 2026-11-21; pilot (light) 2026-11-21; design review of both artboards 2026-11-21, no changes asked                                                                                                                                                   |
| Ledger                        | 59 write calls, every target a node the run created or the page `p-4-0`; one `rename_nodes` call rejected by its schema before any write                                                                                                                        |
| Light artboard                | `380-0` Radio Group at x 12160, y 0 (296 nodes)                                                                                                                                                                                                                 |
| Dark artboard                 | `3GK-0` Radio Group · Dark at x 12160, y 3990; `duplicate_nodes` of the light one plus one `update_styles` batch (257 color references, all `-dark`)                                                                                                            |
| Binding audit                 | light: no `-dark` token, no literal color; dark: every color a `-dark` token, no literal color, JSX equal to the light copy apart from the `-dark` suffix and node ids                                                                                          |
| Recheck after the pilot       | page held the 13 baseline artboards plus `380-0`; all 13 hashes and positions equal to the baseline                                                                                                                                                             |
| Scope audit                   | page holds the 13 baseline artboards plus these 2; ids, positions and `contentHash.tokens` unchanged; SHA-256 equal to the baseline for the `get_jsx` text of the 10 artboards that return it to a file, and for the 1x PNG export of `IB-0`, `O0-0` and `R7-0` |
| Close                         | `finish_working_on_nodes` with `380-0` and `3GK-0`                                                                                                                                                                                                              |

Differences from the spec and the write plan, approved with the write plan or the pilot:

- `IB-0`, `O0-0` and `R7-0` return their JSX inline, so the audit hashes their 1x PNG export instead (two exports gave the same bytes). The other 10 artboards are compared by JSX hash, as _Procedure_ step 1 says. Paper writes exports to `~/Downloads`; each was moved to a scratch folder at once.
- The story name sits under each group, as in Textarea's grid, not above it.
- In `Horizontal`, Paper holds the three items in an `Items` frame; the code keeps them in the root and gives the label `basis-full`. The geometry is the same and parity compares positions, not the tree.
- Duplicated cells land right after their source, so rows and the dark Sizes stack were put back in order with `move_nodes` on the run's own nodes.
