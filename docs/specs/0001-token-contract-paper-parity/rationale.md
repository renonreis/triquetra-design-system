# 0001. Token contract and Paper parity: rationale

## Context

Triquetra's tokens are DTCG 2025.10 JSON in `packages/react/tokens/`, compiled by Style Dictionary into CSS variables, a Tailwind `@theme` and a resolved `tokens.json`. The build validates the structure (brand parity, light and dark parity, semantic colors through brand roles), and contrast tests check every brand, theme and mode. Nine components ship on top of them (version 0.4.0).

Paper holds the component designs and a set of variables copied from the code at some point: brand roles and light semantics only. An audit on 2026-11-20 found it behind the code: no dark values, no `brand.color.primary` or `brand.color.informative` roles (action primary aliases neutral, informative status aliases secondary), no `font.family.heading`, `space.0`, `radius.none` or container sizes, a stray `--untitled` token, and no shadow or motion tokens. Nothing detects this drift today.

Paper's token API has fixed limits that shape any answer: eleven types (color, spacing, radius, container, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, opacity, breakpoint), no modes, no shadow, duration or easing type, and tokens addressed by CSS variable name, with aliases as `var(--name)`. Artboard layers bind to tokens by name, so deleting a token unbinds them.

The engineer decided that the repo is the source of truth for tokens, Paper remains the source of component design, and a separate token manager product will later distribute tokens to Paper and to each DS or brand. Until then the contract must be explicit enough for that product, and Paper must not stay silently stale. Without a decision, every component built from Paper risks copying a stale or missing value, and the token manager would have to reverse engineer the format.

## Options considered

### Option 1: Repo DTCG source as the contract, generated Paper payload, agent applied sync

The contract is the source files plus the build rules, documented and checked by a schema test. A script generates Paper's payload; a diff compares it with Paper's export; an agent applies the plan after approval, writing tokens only.

**Pros**:

- One definition, two mirrors (CSS and Paper), both generated.
- Drift is measurable; applying it is fast and repeatable.
- The token manager later replaces step 5 of the procedure, not the contract.

**Cons**:

- Opens a narrow write exception to Paper for agents.
- Sync is a manual step after merge, so Paper can lag.

### Option 2: Same contract, the engineer applies the Paper changes by hand

The script and diff exist; the engineer types the changes into Paper.

**Pros**:

- Keeps agents fully read only on Paper.

**Cons**:

- About 150 tokens on the first pass and every later change typed by hand; errors are likely and the diff becomes a chore list.

### Option 3: Report drift only, no sync until the token manager exists

**Pros**:

- Least work now; no write access.

**Cons**:

- Paper stays wrong for an unknown time, and every artboard drawn meanwhile (including feature 2) uses stale values.

### Option 4: Resolved `tokens.json` as the contract

The manager reads the published resolved output instead of the source files.

**Pros**:

- Flat and simple to read.

**Cons**:

- Loses aliases and the layer structure; the manager cannot write back, so the source would still need its own contract.

## Rationale

The forces are a fixed source of truth in the repo, a Paper API without modes or some types, and a future product that must write tokens. Option 1 is the only one that keeps a single definition while making Paper both correct and checkable now. Option 2 has the same structure but moves a mechanical, error prone job to a human, and Option 3 leaves the very gap the audit found. Option 4 fails the write requirement.

The dark mode choice (a parallel `--dark` set aliased to brand roles) is the cheapest way to draw dark artboards with real values in a tool without modes; the alternative of light only would drop dark artboards from feature 2. Keeping shadow and motion in code only avoids tokens with the wrong type in Paper; it is recorded as debt to revisit when Paper adds those types. The diff is a local script run by the agent because CI cannot reach the Paper MCP, and a committed snapshot would age whenever someone edits Paper directly. Sync after merge to `main` keeps Paper equal to the synced `main` commit (which may be ahead of the last release), never to a branch that might not land. Renames use `newName` because delete plus create would unbind artboard layers.

The schema plus the existing `validate()`, checked by a small test with no new dependency, documents the per file shape for the token manager while the cross file rules stay where they already run on every build.

### Paper audit (2026-11-20)

- Pages: Overview (Cover), Foundations (Color; Type, space and shape), Components (Button; Input and Field; Card and Dialog).
- Present: `--tq-brand-color-{neutral,secondary,positive,warning,negative}-{0..900}`, light semantic colors, `font.family.{body,mono}`, font sizes, weights and line heights, `space.1` to `space.24`, `radius.{control,surface,overlay,full}`.
- Missing or wrong: listed in Context; plus artboards for Checkbox, Switch, Select and Tabs (feature 2).
