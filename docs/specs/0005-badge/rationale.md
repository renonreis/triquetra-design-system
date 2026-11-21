# 0005. Rationale

## Context

Slice 2 grows the catalog one component per PR, each designed in Paper first (scope, feature 3). Badge comes after Radio Group: products need a small label for a record's status ("Paid", "Failed") or a count ("12"), and today they build one by hand from raw tokens, so every product draws it a little differently.

The tokens already hold four status roles for this kind of feedback: `status.positive`, `status.warning`, `status.negative` and `status.informative`, each with `bg`, `fg` and `border`, in light and dark. `contrast.test.ts` already checks each `status.<tone>.fg` on its `status.<tone>.bg` (4.5:1) in every brand, theme and mode, and `fg.default` and `fg.muted` on `bg.subtle`. There is no strong (solid) status background and no neutral status role. Ark UI has no Badge primitive; `AGENTS.md` says to use `ark.<element>` for simple elements.

A badge is static text. It has no hover, focus or disabled state, and its meaning must not rest on color alone (WCAG 1.4.1). A count alone ("12") says nothing to a screen reader without context.

The _design first_ variant of the Paper artboards rule is in `AGENTS.md`, so no docs PR is needed before the run. The Textarea and Radio Group runs left these lessons: `get_jsx` of `IB-0`, `O0-0` and `R7-0` comes back inline, so those three are hashed by their 1x PNG export (Paper writes exports to `~/Downloads`); `duplicate_nodes` puts each copy right after its source, so sibling order must be checked and fixed; the dark swap batch is best built from the dark artboard's own JSX; the Docker suite and another Storybook build share `storybook-static`; Paper text boxes stretch, so line counts need a scale 2 screenshot; OKLCH needs one rounding rule; and parity is most reliable as a script with a negative control.

## Options considered

### Option 1: Single `Badge` on `ark.span`, soft look, five tones from existing tokens

**Pros**: no new token, contrast pair or Paper token sync; one part and no states, so a small artboard, few stories and few baselines; tone names line up with the status roles Alert will use.
**Cons**: no high emphasis look; no icon part.

### Option 2: Same, plus a solid look (`appearance: 'subtle' | 'solid'`)

**Pros**: covers notification counts and high emphasis labels now.
**Cons**: needs new semantic tokens per tone (a strong background and a text color on it), new contrast pairs, a change to the token set (an Ask first item) and a Paper token sync before the run; doubles cells and baselines.

### Option 3: Compound `Badge` with `Icon` and `Dot` parts

**Pros**: consistent icon size and spacing.
**Cons**: the DS has no icon set yet, so the parts would style content nobody ships; RSC consumers lose direct use of a compound object.

### Option 4: No component, document a token recipe

**Pros**: nothing to maintain.
**Cons**: every product writes its own classes and drifts; no story, no axe test, no Paper artboard.

## Rationale

Option 1 solves the job (a consistent status or count label) with only what the token set already proves. The maintainer answered the first round on 2026-11-21 and asked to follow the recommended pick for every other question:

- **Look**: soft only (`status.<tone>.bg` with `status.<tone>.fg`), chosen by the maintainer. Runners up: subtle and solid (new tokens, Option 2) or subtle and outline (new fg on canvas and surface pairs).
- **Border**: shown, 1 px `status.<tone>.border`, chosen by the maintainer. Runner up: no border (the neutral tone would fade on `bg.subtle`).
- **Shape**: pill (`rounded-full`), chosen by the maintainer. Runners up: `rounded-control`, or a `shape` prop (doubles the inventory).
- **Tones**: neutral plus the four status tones (recommended pick). Neutral uses `bg.subtle`, `fg.muted` and `border.default`, all existing, with `fg.muted` on `bg.subtle` already tested. Runners up: status tones only (no label for plain counts), or a primary tone (a solid fill that breaks the soft look).

Decided while writing, on the maintainer's instruction to take the recommended picks:

- **Prop name `tone`**: names the color intent and leaves `appearance` free for a solid look later. Runner up: `variant`, as Button (but Card already uses `variant` for appearance, so the word is ambiguous in this DS).
- **Neutral text `fg.muted`**: matches the visual weight of the status `fg` colors (700 or 800 on 100). Runner up: `fg.default` (darker than the other tones).
- **Sizes `sm` (20 px, 12/16 text) and `md` (24 px, 14/20 text), default `md`**: `sm` fits table rows and dense lists, `md` sits next to body text. Runner up: one size, or a third `lg` (no use case yet).
- **Padding `px-2` in both sizes**: keeps short counts close to round; the spacing scale has no 6 or 10 px step. Runner up: `px-3` at `md` (wider counts).
- **Weight medium**: reads as a label at 12 px. Runner up: regular.
- **Static, no `asChild`**: an interactive badge would need a focus ring and states this component does not have. Runner up: keep `asChild` (lets a caller render a link with no focus style).
- **No role and no `aria-*` from the component**: a badge is plain text. `role="status"` would announce every render as a live update. Counts get context from `sr-only` text inside the badge, shown in the `Count` story. Runner up: an `aria-label` prop (axe flags `aria-label` on a span with no role).
- **`whitespace-nowrap`**, no truncation: badge text is short by intent.
- **No contrast test change**: every pair is already tested; the border is decorative because the text identifies the badge (WCAG 1.4.11).
- **7 visual stories, no interaction story**: one per tone, `Sizes` and `Count`; there is no state to drive. Hence 14 baselines.
- **Radio Group's artboard as the chrome template** (`380-0`), the newest artboard with every chrome value bound.
- **Lessons from the Textarea and Radio Group runs** folded into _Procedure_ and _Artboard content and placement_: PNG hashes for the three inline JSX artboards and moving exports out of `~/Downloads`; sibling order checked after `duplicate_nodes`; the dark swap built from the dark artboard's own JSX; one `write_html` per parent at a time; Docker suite run alone; one line labels checked on a scale 2 screenshot; OKLCH rounded half up with hue ignored at zero chroma; scripted parity with structure mapping and a negative control.

## Cross check (2026-11-21)

A read only review by another model (Gemini 3.8 Flash) found 6 gaps and 3 small points. Following the maintainer's instruction to take the recommended picks, every recommended fix was applied:

- **`Count` markup**: the hidden context sits inside each badge, with its own copy per badge ("unread messages", "failed jobs", "new comments").
- **Artboard sections**: titles `Tones`, `Sizes and count`, `Props`; layer names, cell padding, caption style and caption gap taken from `380-0`; captions under the badges; cells `fit-content` with content at the top left; one column gap for both rows.
- **Axe cases**: 7, listed in AC-9.
- **Parity rows**: one per badge and property, 18 badges per mode.
- **Light artboard fill** named in AC-2 (`--tq-color-bg-canvas`).
- **Export line** written out with its `.js` extension.
- **Size table**: padding and weight noted as coming from `root`.

## Parity tables

Filled during the build (AC-11): [`parity/badge.md`](parity/badge.md), light and dark, with spec 0002's columns.

## Run ledger summary

Filled at the end of the Paper run: design SHA, approvals with dates (write plan, pilot, design review), baseline token hash, hashes compared (JSX text and PNG), the two artboard IDs, ledger call count, scope audit result. The measurement SHA of the code PR goes in the parity table.

| Item                          | Value                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Design SHA                    | `0ebbe68` (`main`, merge of #67), unchanged from baseline to close                                                                                                                                                                                                                                                                                     |
| Paper file and page           | `01M7R4TP595GEKCEE8SHQCTJMX`, `p-4-0` (Components)                                                                                                                                                                                                                                                                                                     |
| Baseline `contentHash.tokens` | `8c490a95` before and after the run, the same hash as the Radio Group run, where `tokens:paper:diff` exited 0; `tokens/` and `scripts/` unchanged since then                                                                                                                                                                                           |
| Shared values                 | none measured: no existing component shares the badge's states; every value from _Design values_ and `tokens.json`                                                                                                                                                                                                                                     |
| Approvals                     | on 2026-11-21 the maintainer told the agent to continue without stopping, which covered the write plan, the pilot and the design review in advance; the maintainer reviews both artboards after the close, and any change goes through a new approved plan                                                                                             |
| Ledger                        | 22 write calls, every target a node the run created or the page `p-4-0`: `create_artboard` 1, `write_html` 16 (one per row or cell, never two at once into one parent), `update_styles` 3 (light position, dark position, dark color batch), `duplicate_nodes` 1, `rename_nodes` 1; no tool error                                                      |
| Light artboard                | `3OS-0` Badge at x 13680, y 0 (91 nodes)                                                                                                                                                                                                                                                                                                               |
| Dark artboard                 | `3RR-0` Badge · Dark at x 13680, y 3990; `duplicate_nodes` of the light one plus one `update_styles` batch built from the dark artboard's own `get_jsx` (89 color references, all `-dark`)                                                                                                                                                             |
| Sibling order after duplicate | checked in the dark `get_jsx`: tone cells, sm before md and count badges in the light order; no `move_nodes` needed                                                                                                                                                                                                                                    |
| Binding audit                 | light: every color a semantic token, no `-dark`, no literal color, heights bound to `--tq-space-5` and `--tq-space-6`; dark: every color a `-dark` token, JSX equal to the light copy apart from the `-dark` suffix and node ids                                                                                                                       |
| Recheck after the pilot       | page held the 15 baseline artboards at their positions plus `3OS-0`; `main` unchanged                                                                                                                                                                                                                                                                  |
| Scope audit                   | page holds the 15 baseline artboards plus these 2; ids, positions and `contentHash.tokens` unchanged; SHA-256 equal to the baseline for the `get_jsx` text of the 12 artboards that return it to a file, and for the 1x PNG export of `IB-0`, `O0-0` and `R7-0` (two baseline exports gave the same bytes; exports moved out of `~/Downloads` at once) |
| Close                         | `finish_working_on_nodes` with `3OS-0` and `3RR-0`                                                                                                                                                                                                                                                                                                     |

Differences from the spec, recorded in this run:

- **Cell width 224 px, not 240 px** (design change, spec updated): five 240 px cells with `380-0`'s 32 px gap need 1328 px, more than the 1248 px content width; 224 px fills it exactly. `Count` uses 224 px too.
- **Token diff not rerun**: the export was not saved to a file in this session; the `contentHash.tokens` equal to the last verified sync (exit 0) and no change to `tokens/` or `scripts/` since then stand in for it.
- **Observation for the design review**: in dark, the neutral badge's fill and border both resolve to neutral 700, so the border does not show. It is decorative and the text pair passes, so it stays as drawn.
