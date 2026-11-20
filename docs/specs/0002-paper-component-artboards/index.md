# 0002. Paper artboards and parity for Checkbox, Switch, Select, Tabs

**Date**: 2026-11-20
**Status**: Proposed

## Summary

Checkbox, Switch, Select and Tabs shipped without Paper artboards, so Paper (the design source) and the code disagree by omission. An agent draws the four artboards from the code at a pinned `main` SHA, bound to the Paper tokens from spec 0001, with a light artboard and a `· Dark` sibling for each (Paper has no modes). A parity table then compares each artboard with what Storybook actually renders, and every difference is either fixed or recorded. To make this possible, `AGENTS.md` (and the texts that repeat its rule) gains a second narrow exception to the "agents never write to Paper" rule: new component artboards only, after your explicit approval of a pinned write plan.

## Requirements

**User stories**:

- As the DS maintainer, I want every shipped component drawn in Paper in light and dark, so that Paper is a complete design source again.
- As the designer, I want the artboards bound to the real tokens, so that a token change in code (synced per spec 0001) shows up on the artboards.
- As an agent, I want a fixed write scope, procedure and recovery path, so that I can draw artboards without touching existing designs or tokens, and clean up safely if a run stops.

**Acceptance criteria**:

- **AC-1**: One docs PR reconciles every text that forbids node writes, so no instruction contradicts another: root `AGENTS.md` (_Design sources_, the _Paper token sync_ "Never" line, _Boundaries_, plus a new _Paper artboards_ procedure), the key invariant in spec 0001 ("Agents never call a Paper tool that changes nodes", which gains "except under spec 0002"), and feature 2 in `docs/scope/scope.md` ("build skills never write to Paper" becomes "only an approved artboard run writes to Paper"). The exception: an agent may create new component artboards on the Components page (`p-4-0`) of file `01M7R4TP595GEKCEE8SHQCTJMX`, only for a component listed in an accepted spec, only after the maintainer approves a write plan pinned to a code SHA and a Paper baseline, and may edit or delete only nodes its run created (by the run ledger). Existing artboards, other pages and tokens stay off limits (tokens keep their own sync). Order of gates: this spec accepted, then this PR merged, then a separate approval of the write plan; no Paper write before all three.
- **AC-2**: The Components page has four new light artboards named `Checkbox`, `Switch`, `Select`, `Tabs`, 1440 px wide with height `fit-content`. Each follows the template of the existing artboards and the _Artboard content_ section below (Header with eyebrow `Components / 06` to `/ 09`, title, description and import snippet; a state matrix; Sizes; Props; plus Anatomy for Select and Tabs) and draws every cell in the _State inventory_.
- **AC-3**: Each light artboard has a sibling named `<Component> · Dark` with the same structure and copy, whose every color reference is a `-dark` token (`var(--tq-color-…-dark)`), including the artboard fill (`--tq-color-bg-canvas-dark`), and whose shadows use the dark literals. The binding audit (AC-4) finds no light color token on a dark artboard and no `-dark` token on a light one.
- **AC-4**: Binding rules hold on all eight artboards: every color is a semantic `--tq-color-*` token (never a `--tq-brand-*` role, never a literal); "no paint" is `transparent` or `none`, never a color; radius uses `--tq-radius-*`; padding and gap use `--tq-space-*`; font family, size, weight and named line heights use `--tq-font-*`. Literals are allowed only for the values under _Allowed literals_, and each literal equals what Storybook renders. Proof is the binding audit: the authored styles of every node in each artboard (from `get_jsx`, including SVG strokes, text runs and composite values such as box shadows) are checked for token references, and the computed values are checked separately against the parity table.
- **AC-5**: Writes follow the procedure: the baseline is pinned and rechecked before the first write and after the pilot; the Checkbox light artboard is the pilot, reviewed by the maintainer before anything else is drawn; the run stops on any tool error or ambiguous result. Only `create_artboard`, `write_html`, `update_styles`, `set_text_content`, `duplicate_nodes`, `rename_nodes`, `move_nodes`, `delete_nodes` and `finish_working_on_nodes` are used, each only on node IDs in the run ledger (or, for `write_html` and `create_artboard`, with a parent in the ledger or the page `p-4-0`), checked before every call.
- **AC-6**: `rationale.md` holds a parity table per component. Each row: story and checkpoint, mode, part, Paper node ID, property, code value (measured in Storybook), Paper value (`get_computed_styles`), result (`match`, `artboard fixed`, `code fix`, `design change`, `deviation`). Values are normalized before comparing (_Normalization_).
- **AC-7**: Every non `match` row is resolved. `artboard fixed`: redrawn and read back. `code fix`: its own PR with a `patch` changeset and Docker baselines; the row stays open until that PR merges, then the affected cells are measured again in both modes and the row records the merged SHA and the new readings. `design change` and `deviation`: the maintainer's approval and a tracked follow up (Follow-up or scope item) are recorded in the row. The feature is `done` only when no row is open.
- **AC-8**: After the run, the scope audit shows that nothing outside the run's nodes changed: the page and artboard inventory (`get_basic_info`) differs only by the eight new artboards; `get_jsx` of `IB-0`, `O0-0` and `R7-0` (structure, text and styles) and their positions equal the before state; and `contentHash.tokens` equals the baseline. The audit cannot see inside the Overview and Foundations pages' artboards beyond their inventory; those are protected by the ledger check in AC-5, and the report says so.

## Decision

**Chosen option**: Option 1: agent drawn artboards from the code, light plus `· Dark` siblings, token bound, with a manual parity table measured from Storybook.

An agent draws the artboards under a narrow, approved write exception; the code at a pinned SHA is the starting truth, and parity is checked property by property against the rendered component.

## Feature design

**Data model and API surface**: none in code. The artifacts are Paper artboards, the run ledger and the parity tables in `rationale.md`; the only repo changes are `AGENTS.md`, spec 0001's invariant line, the scope, this spec and any `code fix` PRs.

### State inventory (from the stories)

Every cell maps to a story and a checkpoint (the story's args, plus the state after its `play` function when it has one). Cells marked _synthesized_ have no story of their own; they combine a story's args with a state the variants file defines, and their inputs are listed. Impossible combinations are `N/A` and are not drawn. Copy is the copy the stories use.

**Checkbox** (label "Accept the terms"):

| Row \ column  | rest            | hover               | focus visible                | invalid                        | disabled               | read only                |
| ------------- | --------------- | ------------------- | ---------------------------- | ------------------------------ | ---------------------- | ------------------------ |
| unchecked     | `Default`       | `Hover`             | `FocusVisible`               | `Invalid`                      | `Disabled`             | synthesized (`readOnly`) |
| checked       | `Checked`       | `CheckedHover`      | synthesized (checked, focus) | synthesized (checked, invalid) | `DisabledChecked`      | `ReadOnly`               |
| indeterminate | `Indeterminate` | synthesized (hover) | synthesized (focus)          | synthesized (invalid)          | synthesized (disabled) | synthesized (`readOnly`) |

Also: `Sizes` (sm, md, lg as the story renders them); `InField` (invalid, required, helper "You can withdraw at any time.", error "You must accept the terms to continue."); `Group` (legend "Topics", items "React components", "Design tokens" checked, "Accessibility", gap 3). An extra cell for invalid plus focus visible is synthesized (outline `border.negative`).

**Switch** (label "Email notifications"):

| Row \ column | rest      | hover          | focus visible           | invalid                   | invalid plus focus visible | disabled          | read only                |
| ------------ | --------- | -------------- | ----------------------- | ------------------------- | -------------------------- | ----------------- | ------------------------ |
| off          | `Default` | `Hover`        | `FocusVisible`          | `Invalid`                 | `InvalidFocusVisible`      | `Disabled`        | synthesized (`readOnly`) |
| on           | `Checked` | `CheckedHover` | synthesized (on, focus) | synthesized (on, invalid) | synthesized                | `DisabledChecked` | `ReadOnly`               |

Also: `Sizes` (as the story renders them); `InField` (label "Share usage data", invalid, required, helper "Anonymous, and you can turn it off at any time.", error "Turn this on to join the beta.").

**Select** (label "Framework", placeholder "Pick a framework", items React, Vue, Svelte, Solid, Angular disabled):

| Row \ column               | rest                                                    | hover                      | focus visible              | invalid                      | invalid plus focus visible | disabled               | read only                           |
| -------------------------- | ------------------------------------------------------- | -------------------------- | -------------------------- | ---------------------------- | -------------------------- | ---------------------- | ----------------------------------- |
| placeholder                | synthesized (meta args, no value)                       | `Hover`                    | `FocusVisible`             | `Invalid`                    | `InvalidFocused`           | synthesized (no value) | synthesized (no value)              |
| single value               | `WithValue` (React)                                     | synthesized (value, hover) | synthesized (value, focus) | synthesized (value, invalid) | synthesized                | `Disabled` (React)     | `ReadOnly` (React, no clear button) |
| multiple value             | `Multiple` (React, Svelte)                              | N/A                        | N/A                        | N/A                          | N/A                        | N/A                    | N/A                                 |
| clearable with value       | `Clearable` before its play (Solid, clear button shown) | N/A                        | N/A                        | N/A                          | N/A                        | N/A (no clear button)  | N/A (no clear button)               |
| clearable, multiple values | `ClearableWithValue` (four values)                      | N/A                        | N/A                        | N/A                          | N/A                        | N/A                    | N/A                                 |

Also: `Clearable` after its play (placeholder, clear button hidden); `Sizes` (with value React); `Open` (Vue checked with its indicator, `Angular` disabled; the highlighted item is the one the story renders at its checkpoint, as measured, and if that is the checked item, one more synthesized row shows Svelte highlighted and unchecked); `Default` after its play (Svelte chosen, list closed); `MultipleOpen`; `Grouped` (label "Preset", groups Brands and Themes); `WithField` (helper "Used for the starter template.", required) and `WithFieldInvalid` (error "Pick a framework to continue."). The open list is drawn the same width as the trigger (Ark `sameWidth`) in the story's 20rem frame, at the offset measured in Storybook.

**Tabs** (triggers Tokens, Components, Patterns, Archive disabled; panel copy from the stories):

| Row                   | Cells                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `line` horizontal     | `Line` after play (Tokens selected, nothing focused); per tab: selected, rest, hover (`Hover`), focus visible (`FocusVisible`), disabled (Archive) |
| `enclosed` horizontal | `Enclosed`, same per tab states (`Hover` and `FocusVisible` render both variants)                                                                  |
| `line` vertical       | `Vertical`: list on the left, panel beside it (gap 6), side rule on the list's right edge                                                          |
| `enclosed` vertical   | `VerticalEnclosed`: panel beside the list, track only as tall as its tabs                                                                          |

Also: `Small`, `Large` (sizes); `VerticalTallPanel` (both variants, 32rem wide: the line rule stretches to the panel height, the enclosed track does not); `SecondSelected` (Components selected); `ManualActivation` after play (Tokens selected, Components focused with the focus ring and not selected).

Static stand ins: hover, focus visible and highlighted are drawn as resting cells with the styles the code applies in that state. Animations (thumb travel, chevron rotation) are drawn at their end positions.

### Binding rules (AC-4)

| Property                                     | Token family                                                                            | Example from code                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------- |
| fills, text, borders, outline, icon strokes  | `--tq-color-*` (dark: `…-dark`)                                                         | `border-border-strong` → `--tq-color-border-strong` |
| no paint (transparent border, `fill="none"`) | `transparent` or `none`, never a color token                                            | `border-transparent` on line tabs                   |
| radius                                       | `--tq-radius-control`, `-surface`, `-full`                                              | `rounded-control`, `rounded-full`                   |
| padding, gap                                 | `--tq-space-*`                                                                          | `p-1` → `--tq-space-1`, `gap-2` → `--tq-space-2`    |
| width and height on the spacing scale        | `--tq-space-*` when the pilot proves Paper keeps the binding there, else the px literal | `size-5` → 20 px, `h-10` → 40 px                    |
| font family, size, weight                    | `--tq-font-family-body`/`-mono`, `--tq-font-size-*`, `--tq-font-weight-*`               | `text-sm`, `font-medium`                            |
| named line heights                           | `--tq-font-line-height-*` (`leading-normal`, `leading-tight`)                           | Field helper text `leading-normal`                  |

**Allowed literals** (no Paper token exists, or the value is geometry):

- border and outline widths (1 px, 2 px) and outline offsets (0, 2 px);
- line heights written as `leading-<n>` (px from the spacing scale);
- shadows, per mode, exactly as `tokens/themes/default/{light,dark}.tokens.json` define them, every layer in order: `shadow.sm` (Switch thumb, selected enclosed tab) and `shadow.md` (Select content, two layers). Paper has no shadow tokens (spec 0001);
- thumb translate offsets;
- intrinsic icon geometry from the component files: SVG `viewBox`, size (16 px for check, dash and chevron; 14 px for close) and paths; strokes bound to color tokens, `fill="none"` kept;
- the 1 px overlap of line tabs over their rule (`-mb-px`, `-mr-px`). If Paper does not keep negative margins from `write_html`, reproduce the overlap with a 1 px smaller list rule plus position, and record the rendering as `match` only if the measured boxes are equal, else as `deviation`;
- widths of layout frames that only lay out the artboard.

**Focus ring**, per part and state:

| Part and state                                           | Ring color        | Offset | Gap color (fallback only)                         |
| -------------------------------------------------------- | ----------------- | ------ | ------------------------------------------------- |
| Checkbox control, Switch track, Tabs trigger and content | `border.focus`    | 2 px   | the surface the part sits on (artboard cell fill) |
| the same, invalid                                        | `border.negative` | 2 px   | as above                                          |
| Select trigger                                           | `border.focus`    | 0      | none                                              |
| Select trigger, invalid                                  | `border.negative` | 0      | none                                              |

Drawn as an outline when Paper renders outline and offset. Otherwise as box shadows bound to the same tokens (a gap ring in the surrounding surface color, then the ring), keeping any shadow the part already has (thumb, enclosed tab) as a later layer. A fallback whose measured box differs from the code's outline is recorded as `deviation`, not `match`.

### Parity (AC-6)

**Code values come from Storybook, not from class names.** At the pinned SHA, run Storybook locally and, for each cell's story and checkpoint, read the rendered part with the browser (`getComputedStyle` and `getBoundingClientRect`) at a 1280 × 720 viewport, in `data-mode="light"` and `"dark"`, after the story's `play` function and with the story's pseudo states. This captures Ark positioning, inherited styles and story frames that the classes alone do not show. The reading is done with a throwaway read only script or the browser tools, kept out of the repo (automation stays Option 4). Synthesized cells are rendered the same way with their listed args.

**Properties per part** (only those the code sets or inherits visibly): background, border color, width and style per side, radius, width and height, padding, gap, position relative to the cell (for overlaps, list placement and thumb offset), text color, font family, size, weight and line height, outline color, width and offset, shadow (every layer), icon color, size and visibility, visibility of optional parts (clear button, indicator).

**Normalization**: lengths in px rounded to 0.5; colors compared as OKLCH with each component rounded to 3 decimals and alpha to 2 (the token value from `tokens.json` when the Paper side is a token reference); font family by first family name; shadows layer by layer; `transparent` equals any color at alpha 0.

### Artboard content (AC-2)

Fixed in the write plan before any write, from these sources:

| Content        | Source and rule                                                                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eyebrow        | `Components / 06` Checkbox, `/ 07` Switch, `/ 08` Select, `/ 09` Tabs                                                                                                                                                                                                                                             |
| title          | the component name                                                                                                                                                                                                                                                                                                |
| description    | one sentence written in the plan from the Root part's JSDoc in `<name>.tsx`, in plain words; approved with the plan                                                                                                                                                                                               |
| import snippet | `import { <Component> } from '@renonreis/triquetra';` (one line, JetBrains Mono, as on the existing artboards)                                                                                                                                                                                                    |
| Props rows     | the wrapper's own props and the `tv()` variants with their defaults (`defaultVariants`), plus the Ark props the stories use (`defaultChecked`, `checked`, `invalid`, `disabled`, `readOnly`, `required`, `multiple`, `clearable`, `defaultValue`, `activationMode`, `orientation`); each row: name, type, default |
| Anatomy        | Select: Root, Label, Control, Trigger, ValueText, Indicator, ClearTrigger, Content, ItemGroup, ItemGroupLabel, Item, ItemText, ItemIndicator. Tabs: Root, List, Trigger, Content. Labels are the exported part names                                                                                              |
| layout         | the existing artboards' layer structure and spacing, read with `get_jsx` of `O0-0` in procedure step 1 and listed in the plan                                                                                                                                                                                     |

### Artboard placement and naming

- Light row at world y 0, starting at the right edge of `R7-0` plus 80 px, in order Checkbox, Switch, Select, Tabs, 80 px apart. Collision rule: if `get_basic_info` shows any artboard in that range, start 80 px right of the rightmost artboard instead.
- Each artboard is created with a 2000 px height, then set to `fit-content` once its sections are drawn.
- Dark row: after all four light artboards are finished and measured, each `· Dark` sibling is placed directly under its light artboard, 160 px below the tallest light artboard. The plan lists this final placement pass.
- Dark siblings are made with `duplicate_nodes` from the finished light artboard, then every color reference swapped to its `-dark` name and every shadow literal replaced with its dark value, both with `update_styles`; no other change.
- Layer names follow the existing artboards (`Header`, `States`, `Sizes`, `API`, `Anatomy`), with state cells named after the story (`Checked`, `DisabledChecked`).

### Procedure (AC-1, AC-5, AC-7, AC-8)

1. **Baseline.** Pin `main` at a SHA (the code SHA). Run `tokens:build` and `tokens:paper:diff` on a fresh `get_tokens` export; it must exit 0. Save as the before state: `get_basic_info` (pages, artboards, positions, `contentHash.tokens`), `get_jsx` of `IB-0`, `O0-0`, `R7-0`. Measure the Storybook values (Parity) at the code SHA.
2. **Plan approval.** Show the maintainer the write plan: code SHA, baseline hash, artboard content, inventory, placement, the expected calls. Wait for an explicit OK.
3. **Before the first write**, read the baseline again; if `main` moved for these components or tokens, or Paper changed, stop and go back to step 1.
4. **Pilot.** Draw `Checkbox` light, section by section, with a `get_screenshot` review after each section (the Paper guide checkpoints). Run the binding audit, including a round trip: a token bound value written, read back with `get_jsx`, still a `var(--tq-…)` reference, with no unexpected `ignoredStyles`. Record whether spacing tokens hold on width and height. Fill its parity table. Show the maintainer and wait.
5. **After pilot approval**, read the baseline again (as step 3). Then draw `Checkbox · Dark`, then Switch, Select and Tabs light, then their dark siblings, then the dark row placement pass.
6. Fill every parity table; classify and resolve each difference (AC-7).
7. **Scope audit** (AC-8), then `finish_working_on_nodes` with the run's artboard IDs only (never without IDs, which would release every indicator).

**Run ledger**: every write call's target and every returned node ID with its parent, kept in the session workspace during the run and summarized in `rationale.md` at the end (artboard IDs). Before each call, the agent checks the target is in the ledger (or is `p-4-0` for `create_artboard`).

**Stops and recovery**: on a tool error, a timeout or an unclear result, stop writing. Reconcile read only: `get_basic_info` and `get_tree_summary` of the run's artboards, compared with the ledger, to learn what exists. Report to the maintainer with the ledger. Rollback (`delete_nodes`) is its own approved step and only on roots the ledger positively identifies as the run's; when ownership is uncertain, the maintainer cleans up by hand. A stopped run never resumes from an old plan: it restarts at step 1 with a new approval.

**Value sourcing**:

| Action | Value produced or displayed        | Source                                                                                   |
| ------ | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| Draw   | which cells                        | _State inventory_ (stories, plus listed synthesized inputs)                              |
| Draw   | copy (labels, items, placeholders) | the stories files                                                                        |
| Draw   | each style per part and cell       | the Storybook measurement at the code SHA, mapped to tokens by _Binding rules_           |
| Draw   | token name per value               | spec 0001 naming (`--tq-<path>`, `-dark` in Paper)                                       |
| Draw   | literals                           | _Allowed literals_; shadows from `tokens/themes/default/{light,dark}.tokens.json`        |
| Draw   | icons                              | the SVG components in `<name>.tsx` (check, dash, chevron, close)                         |
| Draw   | header, props, anatomy             | _Artboard content_                                                                       |
| Draw   | placement                          | `get_basic_info` positions plus _Artboard placement_                                     |
| Parity | code value                         | Storybook measurement (Parity)                                                           |
| Parity | Paper value                        | `get_computed_styles` of the node in the ledger                                          |
| Parity | result per row                     | comparison after _Normalization_; `design change` and `deviation` only by the maintainer |
| Audit  | before state                       | procedure step 1                                                                         |

**Key invariants**:

- The code at the pinned SHA is the starting truth: an artboard never shows a style the component does not render, unless the row says `design change` or `deviation`.
- No Paper token is created, changed or deleted by this feature.
- Light artboards use only light color tokens and light shadows; dark artboards only `-dark` tokens and dark shadows.
- No write call targets a node outside the run ledger.

**Security model**: the Paper MCP runs with the maintainer's account; the write scope is limited by AC-1 and AC-5, the ledger check and the per run approval. No secrets.

**Critical test scenarios**:

- Pilot: `Checkbox` light passes the screenshot checkpoints, the binding round trip and the audit, and its parity table is all `match` or resolved, verifies **AC-2**, **AC-4**, **AC-5**, **AC-6**.
- Dark audit: no light color token or light shadow on any `· Dark` artboard, and no `-dark` token on a light one, verifies **AC-3**.
- Literal audit: the only literals on the eight artboards are those under _Allowed literals_, verifies **AC-4**.
- Drift gate: a baseline change between approval and the first write (or after the pilot) stops the run, verifies **AC-5**.
- Scope audit: inventory, `get_jsx` and positions of `IB-0`, `O0-0`, `R7-0` and the token hash equal the before state, verifies **AC-8**.
- Code fix path: a `code fix` row closes only after its PR merges and both modes are measured again, verifies **AC-7**.

## Build plan

Tracer Bullet: the exception first (nothing can be written without it), then one component through every layer (light, dark, parity, resolution), then the other three.

1. Docs PR: reconcile `AGENTS.md` (exception, _Paper artboards_ procedure, token sync "Never" line, Boundaries), spec 0001's invariant line and the scope's feature 2 text; no changeset (docs only). Merge before any write, satisfies **AC-1**
2. Baseline, Storybook measurement and write plan approval (procedure steps 1 to 3), satisfies **AC-5**, **AC-8**
3. Pilot `Checkbox` light: draw, screenshot checkpoints, binding round trip, parity table, maintainer review; record whether spacing tokens hold on width and height, satisfies **AC-2**, **AC-4**, **AC-5**, **AC-6**
4. Baseline recheck, then `Checkbox · Dark` by duplicate and swap; dark and literal audits, satisfies **AC-3**, **AC-4**
5. Switch, Select, Tabs light, then their dark siblings, then the dark row placement, with their parity tables, satisfies **AC-2**, **AC-3**, **AC-4**, **AC-6**
6. Resolve every difference: artboard fixes in Paper; code fixes as separate PRs with `patch` changesets and Docker baselines, measured again after merge; design changes and deviations recorded with approval and follow up, satisfies **AC-7**
7. Scope audit, `finish_working_on_nodes` with the run's IDs, commit the parity tables and ledger summary, tick the scope, satisfies **AC-6**, **AC-8**

## Consequences

**Positive**:

- Paper covers every shipped component again, in both modes, with live token bindings.
- The parity table makes "the code matches the design" a measured fact, not a feeling.
- The new artboards bind radius, spacing and type to tokens, so they follow token changes better than the first three.

**Negative / tradeoffs**:

- Agents gain a second write path into Paper. The ledger, gates and audit keep it narrow, but it is more surface to keep honest.
- Two artboards per component: a design change must be made twice (or the dark one duplicated again).
- Shadows are literals per mode, so a shadow token change needs a manual artboard update until Paper supports shadow tokens.
- The parity table is manual; nothing catches drift after this run until someone repeats it.
- Code first artboards carry today's look; a redesign is separate work.
- The three existing artboards stay light only with px radius and spacing, inconsistent with the new four until retrofitted.

**Neutral**:

- The spec PR and the docs PR change no consumer output, so no changeset; only code fixes found by parity need one.

## Follow-up

- [ ] Retrofit Button, Input & Field, Card & Dialog: `· Dark` siblings and token bound radius and spacing (deferred, enroll in scope)
- [ ] Automate parity (Paper export against Storybook computed styles) if manual tables prove too costly
- [ ] Bind shadows to tokens once Paper supports shadow tokens (spec 0001 follow up)
- [ ] Feature 3 (Next components): each new component uses this procedure for its artboard first

## Rationale

Reasoning and options: see [rationale.md](rationale.md).
