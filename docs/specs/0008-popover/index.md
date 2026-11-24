# 0008. Popover

**Date**: 2026-11-24
**Status**: Proposed

## Summary

Popover is a floating panel that opens next to a button when you click it and holds interactive content: text, links, a small form. It wraps Ark UI's Popover, which already moves focus in and out, closes on Escape and on an outside click, and links the button, the panel, the title and the description for screen readers. It is a compound component with Dialog's part names, on the Select surface (`bg.surface`, border, `shadow.md`), not modal, 320 px wide, and it never grows past the space left in the viewport. It follows the _Overlay pattern_ of spec 0007 and settles focus, close behavior and sizing for the overlays that come next. Like Tooltip, it is drawn in Paper first (light and dark), then built to match and measured against it.

## Requirements

**User stories**:

- As a product developer, I want one panel for small interactive content, so that I do not wire focus, dismissal and positioning in each product.
- As a keyboard user, I want focus to move into the panel when it opens and back to the button when it closes, so that I never lose my place.
- As a screen reader user, I want the panel announced with its name and description, so that I know what opened.
- As a user on a narrow or short screen, I want the panel to fit and scroll, so that I can reach all of it (WCAG 1.4.10).
- As the DS maintainer, I want focus, close behavior and sizing decided once, so that Menu and later overlays reuse them.

**Acceptance criteria**:

- **AC-1**: Gates before any Paper write, in order: (1) this spec is confirmed and merged to `main` (the _design first_ variant in `AGENTS.md`); (2) the maintainer approves a write plan pinned to a `main` SHA and a Paper baseline, given for Popover. No write before both.
- **AC-2**: The Components page (`p-4-0`) has a new light artboard `Popover`, 1440 px wide, height `fit-content`, fill `--tq-color-bg-canvas`, laid out as _Artboard content and placement_ says, with every cell of the _State inventory_ drawn with the _Design values_ and the measured Button and Field values.
- **AC-3**: A sibling `Popover · Dark` has the same structure and copy; every color reference is a `-dark` token and every shadow is the dark `shadow.md` literal. The binding audit finds no light color token or light shadow on it, and no `-dark` token or dark shadow on the light artboard.
- **AC-4**: The run follows spec 0002 (_Binding rules_, _Allowed literals_ plus the additions here, tools, ledger, stops and recovery) and spec 0007's _Procedure_ with the changes in _Procedure_. The recheck after the pilot compares Paper with the baseline plus exactly the pilot's nodes. The scope audit compares every artboard that existed at the baseline (hash of its `get_jsx` text, or of its 1x PNG export where the JSX comes back inline), their positions and `contentHash.tokens`, all equal.
- **AC-5**: The maintainer reviews the pilot, then both artboards before the run closes. Any change asked is drawn and read back in the same run and written into _Design values_. Only then the scope audit runs and `finish_working_on_nodes` gets the two artboard IDs. No Paper write after the close under this run.
- **AC-6**: `Popover` is exported from `@renonreis/triquetra` as `{ Root, Trigger, Content, Header, Title, Description, Body, Footer, CloseTrigger }`, with one prop type per part (`PopoverRootProps` … `PopoverCloseTriggerProps`) and `popoverVariants` (no `PopoverVariants` type: there are no variants). `Root` passes every Ark prop through with these defaults, each overridable: `lazyMount` and `unmountOnExit` `true`, `positioning` merged as `{ placement: 'bottom', fitViewport: true, ...positioning }`. `Content` renders `Portal` → `Positioner` → content. Every part but `Root` forwards its ref, spreads the remaining props, keeps `asChild` and merges `className` through `tv()` (except `CloseTrigger` with `asChild`, which takes no slot class, as Dialog). A part outside `Root` that reads Ark's context throws Ark's own error.
- **AC-7**: Behavior, all from Ark: closed at first render with nothing in the DOM; a click, Enter or Space on the trigger opens it and a second click closes it; on open, focus moves to the first focusable element of the panel, or to the panel itself when there is none, unless `autoFocus` is `false` or `initialFocusEl` names another; Escape and `CloseTrigger` close it and focus returns to the trigger; a pointer press or focus outside closes it, and focus stays on what the user pressed when that is focusable; Tab past the last element moves on in the page order after the trigger and closes it. It is not modal by default (`modal` is available). Nested in a Dialog, Escape closes only the popover; a Select inside it opens and picks without closing it.
- **AC-8**: Accessibility: the panel has `role="dialog"`, is named by `Title` (or by the caller's `aria-label`) and described by `Description` when rendered; the trigger has `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls`. The corner `CloseTrigger` is named "Close"; `CloseTrigger` with `asChild` keeps its child's own name (Ark's forced `aria-label` and its fixed `id` are dropped, so a "Cancel" button is named "Cancel" and no id repeats), and the caller's `onClick` still runs and can cancel the close with `preventDefault`.
- **AC-9**: Sizing: the panel is 320 px wide (`w-xs`) whatever its content, shrinks when the viewport leaves less (304 px at a 320 px viewport, no horizontal page scroll), and is never taller than the space left on its side; it scrolls inside. The caller can set another width with `className` (for example `w-md`).
- **AC-10**: Styles follow _Design values_ in light and dark. No token and no contrast pair is added: `fg.default` and `fg.muted` on `bg.surface` are already tested.
- **AC-11**: `popover.stories.tsx` (meta tagged `visual`) has the 4 visual and 6 interaction stories in _Stories_, run in light and dark with the a11y addon in `error` mode. `popover.test.tsx` covers the scenarios in _Critical test scenarios_, including `axe` closed and open.
- **AC-12**: 8 new baselines (4 visual stories × light and dark) from the Playwright Docker image, then `pnpm test:visual:docker` passes in compare only mode with no other baseline changed. The Docker suite runs alone.
- **AC-13**: `rationale.md` links `parity/popover.md` (4 cells per mode, _Parity_), measured on the code PR's Storybook, plus a read only negative control. Every row is `match` or resolved before the merge.
- **AC-14**: The code PR carries a `minor` changeset.

## Decision

**Chosen option**: Option 1: a compound `Popover` on Ark's Popover with Dialog's part names, Select surface, not modal, fixed 320 px width that yields to the viewport, no arrow and no animation, designed in Paper first.

It needs no token, contrast pair, dependency or Paper token sync, and changes no existing component.

**Implementation skills**: none listed in `AGENTS.md`; its conventions, spec 0007's _Overlay pattern_ and Ark UI's anatomy govern.

## Feature design

**Data model**: none. The surface is the React API, the two Paper artboards and the parity table.

**State transitions** (Ark's machine): `closed` → (trigger click, Enter, Space, or `open` set) → `open` → (trigger click, Escape, `CloseTrigger`, outside press or focus, or `open` unset) → `closed`.

**API surface**:

| Part           | Wraps                                                     | Ref                  | Notes                                                                                                                                                                                                                                                                    |
| -------------- | --------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Root`         | `ArkPopover.Root`                                         | none                 | `PopoverRootProps` is `ArkPopover.RootProps`: `open`, `defaultOpen`, `onOpenChange`, `positioning`, `modal` (`false`), `autoFocus` (`true`), `initialFocusEl`, `finalFocusEl`, `closeOnEscape` (`true`), `closeOnInteractOutside` (`true`), `lazyMount`, `unmountOnExit` |
| `Trigger`      | `ArkPopover.Trigger`                                      | `HTMLButtonElement`  | usually `asChild` around a `Button`                                                                                                                                                                                                                                      |
| `Content`      | `Portal` → `Positioner` → `ArkPopover.Content`            | `HTMLDivElement`     | ref and props go to the content                                                                                                                                                                                                                                          |
| `Header`       | `ark.div`                                                 | `HTMLDivElement`     | groups title and description, leaves 32 px at the end for the corner button                                                                                                                                                                                              |
| `Title`        | `ArkPopover.Title`                                        | `HTMLHeadingElement` | Ark renders an `h2`; `asChild` for another level                                                                                                                                                                                                                         |
| `Description`  | `ArkPopover.Description`                                  | `HTMLDivElement`     |                                                                                                                                                                                                                                                                          |
| `Body`         | `ark.div`                                                 | `HTMLDivElement`     | text and fields                                                                                                                                                                                                                                                          |
| `Footer`       | `ark.div`                                                 | `HTMLDivElement`     | actions, end aligned                                                                                                                                                                                                                                                     |
| `CloseTrigger` | `ArkPopover.CloseTrigger`, or `ark.button` with `asChild` | `HTMLButtonElement`  | without children: the corner "×" of Dialog, named "Close"; place it last so it is not the first focus                                                                                                                                                                    |

Files: `packages/react/src/components/popover/` (`popover.tsx`, `popover.variants.ts`, `popover.stories.tsx`, `popover.test.tsx`, `index.ts`) and one export line in `src/index.ts`, after `tooltip`. Styles travel from `Root` by context, as Dialog. Usage:

```tsx
<Popover.Root>
  <Popover.Trigger asChild>
    <Button variant="neutral">Share</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Header>
      <Popover.Title>Share project</Popover.Title>
      <Popover.Description>Anyone with the link can view this project.</Popover.Description>
    </Popover.Header>
    <Popover.Footer>
      <Button size="sm">Copy link</Button>
    </Popover.Footer>
    <Popover.CloseTrigger />
  </Popover.Content>
</Popover.Root>
```

The JSDoc of `Root` says: name every popover (`Title` or `aria-label` on `Content`); it is not modal, use `Dialog` for a task that must block the page; where focus goes and why `CloseTrigger` comes last; long text needs a focusable element, since the panel scrolls; use `Tooltip` for a short hint.

### Design values

| Slot           | Classes                                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `trigger`      | `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus`                                                                                                                                                                                    |
| `positioner`   | `z-50 flex min-w-0! flex-col`                                                                                                                                                                                                                                                  |
| `content`      | `relative flex min-h-0 w-xs max-w-full flex-col gap-4 overflow-y-auto rounded-surface border border-border-default bg-bg-surface p-4 text-start font-body text-fg-default shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus` |
| `header`       | `flex flex-col gap-1 pe-8`                                                                                                                                                                                                                                                     |
| `title`        | `text-md leading-tight font-semibold text-fg-default`                                                                                                                                                                                                                          |
| `description`  | `text-sm leading-normal text-fg-muted`                                                                                                                                                                                                                                         |
| `body`         | `text-sm leading-normal text-fg-default`                                                                                                                                                                                                                                       |
| `footer`       | `flex flex-wrap items-center justify-end gap-3`                                                                                                                                                                                                                                |
| `closeTrigger` | `absolute end-2 top-2 inline-flex size-8 items-center justify-center rounded-control text-fg-muted transition-colors duration-150 hover:bg-bg-subtle hover:text-fg-default focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-border-focus`          |

`min-w-0!` is needed because Ark writes `min-width: max-content` inline on the positioner, which beats its own `max-width: var(--available-width)`; without it a 320 px panel overflows a 320 px viewport. It is the one important modifier, and not an arbitrary value. The close icon is Dialog's 16 px "×" (stroke 2, `currentColor`).

Geometry, border box: 320 px wide; 1 px border, 16 px padding, 16 px between blocks, so the text box is 286 px (254 px inside `Header`). Measured on the local draft before drawing: `Default` and `Top` 148 px high (title 20, gap 4, description 2 lines of 21, gap 16, button 32), `WithForm` 187 px, `BodyOnly` 76 px (2 lines). Gap to the trigger: Ark's `gutter` (8 px), centered on the cross axis. `radius.surface` from the token.

**Allowed literals added to spec 0002's list**: layout widths in _Artboard content and placement_ (608 px cells, the 448 by 288 px stage; 288 is the tallest content, 40 + 8 + 187, plus 24 px padding on each side, rounded up to 4); the close button's 8 px offset from the top and end of the panel's padding box (equal to `space.2`) and its 16 px icon with Dialog's path and stroke width 2. `shadow.md` per mode is already in spec 0002's list (Select).

### Stories

Meta: `title: 'Components/Popover'`, `component: Popover.Root`, `tags: ['autodocs', 'visual']`, `parameters: { layout: 'fullscreen' }`, one decorator `<div className="flex min-h-dvh items-center justify-center">` (room on both sides of the trigger at every viewport). Triggers are `Button variant="neutral"` (size `md`).

| Story          | Tags      | Root props                                                | Trigger and content                                                                                                                                                                  |
| -------------- | --------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Default`      | visual    | `open`                                                    | `Share`; title "Share project", description "Anyone with the link can view this project.", footer `Button size="sm"` "Copy link", corner `CloseTrigger`                              |
| `Top`          | visual    | `open`, `positioning={{ placement: 'top', flip: false }}` | as `Default`                                                                                                                                                                         |
| `WithForm`     | visual    | `open`                                                    | `Rename`; title "Rename project", body `Field.Root` with label "Name" and `Field.Input` `defaultValue="Website"`, footer `CloseTrigger asChild` ghost `sm` "Cancel" and `sm` "Save"  |
| `BodyOnly`     | visual    | `open`                                                    | `About quotas`; `aria-label="About quotas"` on `Content`, body "Each workspace can hold 20 projects. Archived projects do not count."                                                |
| `Interaction`  | `!visual` | none                                                      | click opens, name and description, focus on "Copy link", Escape, `CloseTrigger` and trigger click close, focus returns                                                               |
| `TabOrder`     | `!visual` | none                                                      | plus a button "Next" after it: Tab goes to "Copy link", then "Close", then "Next", and the panel closes                                                                              |
| `OutsideClick` | `!visual` | none                                                      | plus a button "Elsewhere": pressing it closes the panel and it keeps focus                                                                                                           |
| `Nested`       | `!visual` | none                                                      | a Dialog with a popover that holds a Select: picking an option keeps the popover, Escape closes only the popover and focus returns to its trigger, a second Escape closes the dialog |
| `Overflow`     | `!visual` | none                                                      | 60 paragraphs and the corner button: the panel stays inside the viewport and scrolls                                                                                                 |
| `Narrow`       | `!visual` | `open`, viewport global 320 by 568                        | `Default`'s content: the panel is 304 px wide, inside the viewport, and the page does not scroll sideways                                                                            |

Each visual `play` waits until the element with `role="dialog"` has `data-placement` equal to its side and sits 7 to 9 px from the trigger there (_Overlay pattern_ item 7). With `open` controlled from the first render, Ark does not move focus, so no ring shows in the screenshots.

### State inventory (artboard cells and parity)

4 cells per mode, one per visual story. Closed is the Button alone. Hover and focus of the close button are Dialog's classes with another offset and are not drawn; `Field` and `Button` states belong to their own artboards.

### Artboard content and placement

- **Chrome**: as spec 0007 (`40N-0`, Tooltip, is the template read with `get_jsx` at the baseline; its chrome is `3UA-0`'s).
- **Header**: eyebrow `Components / 15`, title `Popover`, description "A panel next to its trigger for text, links or a small form. It is not modal.", snippet `import { Popover } from '@renonreis/triquetra';`.
- **Sections**: `Placements` (one row: `Default`, `Top`), `Content` (one row: `WithForm`, `BodyOnly`), `Props`.
- **Cells**: 608 px wide, height `fit-content`; a stage (448 by 288 px, `space.6` padding, contents centered both ways, no fill, width bound to `--tq-size-container-md`) and the story name as caption, as spec 0007.
- **Stage contents**: a column, trigger and panel `space.2` apart, centered; the panel first in `Top`. The panel frame is fixed at `--tq-size-container-xs`, height `fit-content`. Text is left aligned and fills the width of its box so it wraps.
- **Panel node structure** (mirrors the DOM): stage → trigger frame (`Button`) → label; panel (`Popover`) → `Header` (title, description), `Body`, `Footer` (buttons), `CloseTrigger` (absolute, 8 px from the top and end of the padding box, 32 px, icon 16 px drawn as inline SVG). Parts a story does not render are absent.
- **Measured values** (bound to the tokens their variants name; stop and report if one has no token): trigger `Button` `neutral` `md`; footer `Button` `sm` default and `ghost`; `Field` label, gap and `Input` `md`. Read from the Button and Field stories on `main` at the design SHA, light and dark (`AGENTS.md`, _Design first_).
- **Props** rows (name, type, default): `positioning` · `PositioningOptions` · `{ placement: 'bottom', fitViewport: true }`; `modal` · `boolean` · `false`; `autoFocus` · `boolean` · `true`; `closeOnEscape` · `boolean` · `true`; `closeOnInteractOutside` · `boolean` · `true`; `lazyMount` · `boolean` · `true`; `unmountOnExit` · `boolean` · `true`; `open` / `defaultOpen` · `boolean` · `false`. Note: "Compose Root, Trigger and Content. Name every popover with Title or aria-label. CloseTrigger comes last."
- **Placement**: light at world y 0, 80 px right of the rightmost artboard whose y is 0 (Tooltip today at x 16720, so x 18240). Dark under it, at y = the larger of the dark row y (3990) and the bottom of the tallest light artboard plus 160. Shift right in 80 px steps on overlap. Existing artboards never move.
- **Dark**: as spec 0007, plus every `shadow.md` literal replaced with its dark value.

### Procedure

Spec 0007's _Procedure_ with these changes:

1. **Baseline**: `main` pinned, `get_jsx` or PNG hash of every artboard on `p-4-0` (21 expected, Tooltip included). **Storybook measurement**: Button and Field on their own stories at the pinned `main` SHA, light and dark. The panel's geometry comes from _Design values_; its line counts and heights were already measured on the local draft and are recorded there.
2. **Approvals**: the write plan, the pilot and the design review each wait for an explicit OK in this run; Tooltip's approvals do not carry over.
3. **Pilot**: `Popover` light; confirm on a scale 2 screenshot that titles are one line, `Default`'s description and `BodyOnly`'s text are two.
4. **Parity after code**: the code side finds parts by `[data-scope="popover"][data-part]`; `Header`, `Body` and `Footer` carry no `data-part`, so they are the content's element children in this order, per story (`CloseTrigger` corner excluded, found by `data-part`): `Default` and `Top` header, footer; `WithForm` header, body, footer; `BodyOnly` body.

### Parity

- **Rows**: one per part and property, 4 cells per mode; a part a cell does not render gets one `present` row.
- **Panel**: width, height, padding, gap, radius, background, border color and width, box shadow (every layer), placement side, gap to the trigger and cross axis offset (both as spec 0007, nearest whole px).
- **Header, body, footer**: position relative to the panel, gap, end padding of the header.
- **Title, description, body text**: color, font family, size, weight, line height, number of lines.
- **CloseTrigger**: size, offset from the panel's top and end, radius, icon size, color and stroke width.
- **Trigger, footer buttons, field label and input**: height, horizontal padding, radius, background, border, text color, font size, weight. A difference is a Paper fix in this run or a code question for that component, never a Popover change.
- **Excluded**: Paper only chrome and exact text box widths.
- **Negative control**: in the comparison input only, replace the Paper background of `Default`'s panel with the value of `bg.inverse`; it must report a DIFF in both modes.
- Normalization as spec 0005 (shadows layer by layer, as spec 0002). After a code fix the affected rows are measured again in both modes.

**Value sourcing**:

| Action | Value produced or displayed                    | Source                                                                                      |
| ------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Draw   | cells, copy, placement per cell                | _Stories_, _State inventory_                                                                |
| Draw   | panel colors, padding, radius, type, width     | _Design values_, `tokens.json` at the design SHA                                            |
| Draw   | shadows                                        | `tokens/themes/default/{light,dark}.tokens.json`, `shadow.md`                               |
| Draw   | gap and alignment                              | Ark's `gutter` 8, centered                                                                  |
| Draw   | trigger, buttons, field                        | Button and Field stories on `main` measured in Storybook, bound to those components' tokens |
| Draw   | chrome, Props copy, position                   | _Artboard content and placement_, `40N-0`, `get_basic_info`                                 |
| Draw   | dark color per node                            | the dark artboard's own `get_jsx`, light name plus `-dark`                                  |
| Code   | classes, defaults                              | _Design values_ (after any AC-5 change), AC-6                                               |
| Code   | role, ids, `aria-*`, focus, dismissal, nesting | Ark's Popover                                                                               |
| Code   | accessible name of the panel                   | `Title`, else the caller's `aria-label`                                                     |
| Code   | accessible name of the close button            | "Close" (corner), or the child's own name (`asChild`)                                       |
| Code   | space left in the viewport                     | Ark's `--available-width` and `--available-height` (`fitViewport`)                          |
| Parity | code value and Paper value                     | Storybook at the measurement SHA, `get_jsx` of the ledger nodes                             |

**Key invariants**:

- Focus management, keyboard handling, dismissal, positioning and ARIA come from Ark.
- Nothing of a closed popover is in the DOM with the default mounting.
- The panel never leaves the viewport horizontally and is never taller than the space left.
- Semantic token utilities only: no `dark:`, no arbitrary values, no enter or exit animation.
- No token or existing component changes; no Paper write outside the ledger or after the close.

**Security model**: no data and no secrets; content is React children. Paper writes are limited by AC-1, AC-4, AC-5 and the ledger.

**Configuration required**: none.

**Critical test scenarios** (jsdom with `userEvent` unless marked as a story):

- Closed renders nothing; click, Enter and Space open; a second click closes; `onOpenChange` reports each change; controlled `open` is respected, verifies **AC-7**.
- Focus goes to the first focusable element, to the panel when there is none, to `initialFocusEl` when given, and stays on the trigger with `autoFocus={false}`; Escape and `CloseTrigger` return it to the trigger, verifies **AC-7**.
- Outside press closes it and `closeOnInteractOutside={false}` keeps it open; `closeOnEscape={false}` ignores Escape, verifies **AC-7** (Tab order, focus on the pressed element and nesting in stories).
- Name and description from `Title` and `Description`; `aria-label` without a title and no dangling `aria-labelledby`; trigger ARIA, verifies **AC-8**.
- "Cancel" under `asChild` keeps its name, closes, has no repeated id, runs the caller's `onClick`, and `preventDefault` keeps the panel open, verifies **AC-8**.
- Portal in `document.body`; defaults and a caller override of `lazyMount`, `unmountOnExit` and `placement`; refs, spread props and `className` merge on every part, verifies **AC-6**, **AC-9**.
- `Overflow` story: inside the viewport and scrolling; `Narrow` story: 304 px at a 320 px viewport, no sideways page scroll, verifies **AC-9**.
- `axe` closed and open; every story in light and dark, verifies **AC-11**.
- Docker compare only run, parity negative control, post pilot recheck and scope audit, verifies **AC-4**, **AC-5**, **AC-10**, **AC-12**, **AC-13**.

## Build plan

Tracer Bullet with design first.

1. Spec PR (this spec, scope row linked), merged, satisfies **AC-1**
2. Paper run: baseline, Storybook measurement on the draft, write plan approval, pilot light, pilot review, recheck, dark, satisfies **AC-1** to **AC-4**
3. Design review of both artboards, scope audit, close, ledger summary in `rationale.md` (docs PR), satisfies **AC-4**, **AC-5**
4. Code PR: `popover/` with the nine parts on the _Overlay pattern_, export, satisfies **AC-6** to **AC-10**
5. Same PR: 4 visual and 6 interaction stories and the tests, satisfies **AC-7**, **AC-8**, **AC-9**, **AC-11**
6. Same PR: 8 Docker baselines, then compare only, alone, satisfies **AC-10**, **AC-12**
7. Same PR: parity table with negative control, every row resolved, satisfies **AC-13**
8. Same PR: `minor` changeset; merge with required checks green, satisfies **AC-14**

## Consequences

**Positive**:

- Focus, dismissal and sizing are settled once for interactive overlays, with nesting in Dialog and with Select proven by a story.
- Same part names as Dialog, so moving between the two is mechanical.
- Reflows at 320 px wide and scrolls on short screens by default.

**Negative / tradeoffs**:

- `min-w-0!` depends on Ark's inline positioner style; an Ark change could make it unneeded, never harmful.
- `Header` always keeps 32 px free at the end, even without the corner button.
- Reading Ark's `getCloseTriggerProps` for `asChild` is a little closer to Ark's internals than the other parts.
- A panel with long text and no focusable element cannot be scrolled by keyboard in every browser; the JSDoc asks for one.
- No arrow and no motion (shared overlay follow ups).
- The corner close button scrolls with the content in a panel that overflows.

**Neutral**:

- `Popover` is a compound object, so React Server Components use it inside their own client components.

## Follow-up

- [ ] `Popover.Arrow`, with Tooltip's arrow, after an arrow size token exists
- [ ] `Popover.Anchor` (position against another element), when a product needs it
- [ ] Overlay motion for every overlay (spec 0007)
- [ ] Check Dialog's `CloseTrigger` and narrow Tooltip widths against the findings here (label under `asChild`, `min-width: max-content`)

## Rationale

Reasoning and options: see [rationale.md](rationale.md).
