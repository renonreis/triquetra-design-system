# 0002. Rationale

## Context

Paper is the design source for components (`AGENTS.md`, _Design sources_), but Checkbox, Switch, Select and Tabs shipped in 0.4.0 without artboards. Anyone reading Paper sees five components; the package has nine. Without an artboard there is nothing to check the code against, and the next components (feature 3) would repeat the gap.

The Paper file `01M7R4TP595GEKCEE8SHQCTJMX` has three artboards on the Components page (`p-4-0`): Button (`IB-0`), Input & Field (`O0-0`), Card & Dialog (`R7-0`). Read on 2026-11-20: each has a Header, a state matrix, Sizes and Props (Input & Field also an Anatomy). Colors are bound to light semantic tokens (`var(--tq-color-…)`), but no node uses a `-dark` token, and radius, spacing and type are px literals (`borderRadius: 6px`). Spec 0001 made Paper's tokens match the code (204 tokens, dark as `-dark`), so token bound artboards in both modes are now possible.

`AGENTS.md` says agents never write to the Paper file except for the token sync, while the scope says the artboards are drawn "by you or by an explicit design task". Someone has to draw them, and the rule has to say who. Paper has no modes, shadow or motion tokens, and no way to show hover or focus except as static drawings.

## Options considered

### Option 1: Agent drawn from code, light plus dark siblings, manual parity table

An agent, under a narrow approved exception, draws each artboard from the shipped component (variants file, stories), duplicates it for dark with `-dark` tokens, and fills a parity table from Paper's computed styles.

**Pros**: consistent with the code and tokens; fast; the parity table is a by product of drawing; the write scope is explicit and checkable.
**Cons**: adds a second write exception; artboards reflect today's code, not a fresh design; two artboards per component to maintain.

### Option 2: The maintainer draws by hand, the agent only checks parity

**Pros**: keeps the read only rule intact; design intent is human.
**Cons**: the most work for the maintainer; hand drawn values drift from tokens (the existing px radius shows it); slower to finish.

### Option 3: A separate design task (own thread and brief)

**Pros**: separates design work from repo work; can run in parallel.
**Cons**: still an agent writing to Paper, so it needs the same exception; adds coordination without changing the outcome.

### Option 4: Option 1 plus an automated parity script (Paper export against Storybook computed styles)

**Pros**: repeatable; catches drift later.
**Cons**: a project of its own (Playwright, style mapping, export parsing) for four components; the manual table answers the question now.

## Rationale

The code and tokens are already verified (tests, contrast, visual baselines), so drawing from them gives artboards that are correct on day one, and anything the maintainer wants to change becomes an explicit `design change` row instead of an accident. The maintainer chose agent drawing with a narrow exception, which matches how the token sync was handled in spec 0001: allowed, scoped, approved per run, and read back.

Dark siblings made by duplicate and swap keep the two modes structurally identical, so the dark check is mechanical (`find_nodes` on token names). Binding radius, spacing and type to tokens fixes the weakness seen in the first three artboards without touching them; retrofitting those is deferred to keep this feature to four components. A script (Option 4) is worth it only if parity needs repeating often; it stays a Follow-up.

### Cross check (2026-11-20)

A read only review by another model (GPT 6.2 Sol) found 15 gaps in the first draft. All were applied:

- Write safety: the exception now reconciles every text that forbids node writes (AGENTS.md, spec 0001's invariant, the scope); the plan is pinned to a code SHA and a Paper baseline and rechecked before the first write and after the pilot; a run ledger limits every call to the run's own nodes; stops reconcile read only and roll back only with approval; `finish_working_on_nodes` always gets the run's IDs.
- Verification: the scope audit compares structure, text, styles and positions (`get_jsx`, `get_basic_info`), not only tree summaries, and states what it cannot see; the binding audit reads authored references instead of relying on `find_nodes`; code values are measured in Storybook (Ark positioning and story frames included), not read from class names.
- Completeness: shadows (`sm` and the two layer `md`) are mode specific literals; every cell maps to a story checkpoint or lists its synthesized inputs; Tabs vertical panels sit beside the list; Field copy and styles are in scope; no paint, overlaps, icon sizes and named line heights have rules; focus fallbacks follow the part's real color and offset and are a `deviation` when not equivalent; placement and artboard copy are fixed in the plan; a `code fix` row closes only after the merged change is measured again.

## Parity tables

Filled during the build, one table per component (AC-6), with these columns:

| Story and checkpoint | Mode | Part | Paper node | Property | Code value | Paper value | Result | Notes (SHA, approval, follow up) |
| -------------------- | ---- | ---- | ---------- | -------- | ---------- | ----------- | ------ | -------------------------------- |

## Run ledger summary

Filled at the end of the run: code SHA, baseline token hash, and the eight artboard IDs.
