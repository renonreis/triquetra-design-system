# 0006. Rationale

## Context

Slice 2 grows the catalog one component per PR, each designed in Paper first (scope, feature 3). Alert comes after Badge: products need an inline message for a status ("Payment failed", "Your trial ends in 3 days"), and today they build one from a Card and raw tokens, so each product draws it a little differently.

The tokens already hold the four status roles (`status.positive`, `status.warning`, `status.negative`, `status.informative`, each with `bg`, `fg` and `border`, light and dark), and `contrast.test.ts` already checks each `status.<tone>.fg` on its `status.<tone>.bg`, plus `fg.default` on `bg.subtle`. Badge (spec 0005) named its tones `neutral`, `positive`, `warning`, `negative` and `informative` and mapped them to these roles. Ark UI has no Alert primitive; `AGENTS.md` says to use `ark.<element>` for simple elements and the compound pattern for composed components. The DS has no icon set: Checkbox, Select and Dialog draw their few icons as inline SVG.

An alert's meaning must not rest on color alone (WCAG 1.4.1). A message inserted after the page loads should be announced (WCAG 4.1.3), but a live region on a message that is already there at first render adds noise and, with `role="alert"`, interrupts the user.

The _design first_ variant of the Paper artboards rule is in `AGENTS.md`, so no docs PR is needed before the run. The Badge run (spec 0005) left the procedure this spec reuses: JSX or PNG hashes for every existing artboard, sibling order checked after `duplicate_nodes`, the dark swap built from the dark artboard's own JSX, one `write_html` per parent at a time, the Docker suite run alone, line counts checked on a scale 2 screenshot, OKLCH rounded half up, and scripted parity with a negative control.

## Options considered

### Option 1: Compound `Alert` on `ark.*`, soft look, five tones, built in icons, no default role

**Pros**: follows the compound rule and Card's part names; tone names and colors match Badge; no new token, contrast pair or Paper token sync; the caller chooses the heading level and the live region.
**Cons**: five parts to write a simple message; the icons are hand drawn.

### Option 2: Single `Alert` with `title`, `description` and `icon` props

**Pros**: one line to use; React Server Components can render it directly.
**Cons**: breaks the compound convention for a composed component; rich descriptions (links, lists) and custom title elements need more props over time.

### Option 3: Option 1 plus a close button and an actions area now

**Pros**: covers dismissible banners and alerts with a "Retry" button.
**Cons**: adds focus, state and a button style to a static component, more stories and baselines, and no product asks for it yet.

### Option 4: `role="alert"` (or `status`) set by default per tone

**Pros**: dynamic messages are announced without the caller doing anything.
**Cons**: every alert already on the page at load becomes a live region; `role="alert"` interrupts; the right politeness depends on how the alert appears, which only the caller knows.

## Rationale

Option 1 solves the job (a consistent inline status message) with only what the token set already proves, and keeps the live region decision with the caller who knows when the message appears. The engineer asked on 2026-11-21 to take the recommended pick on every question; each pick and its runner up:

- **Compound parts** `Root`, `Indicator`, `Content`, `Title`, `Description`, the names Ark's sibling library Chakra uses for its alert. Runner up: single component with props (Option 2).
- **Tones**: Badge's five, by the brief and so a status reads the same in both. Runner up: the four status tones only (no plain note).
- **Default tone `informative`**: an alert with no tone is most often an informational message; the scope lists "info" first. Runner up: `neutral`, matching Badge's default.
- **Look**: soft (`status.<tone>.bg` with `status.<tone>.fg`) with a 1 px `status.<tone>.border`, as Badge. Runner up: a left accent bar only (needs a 4 px literal and reads weaker in dark).
- **Neutral colors**: `bg.subtle`, `border.default` and `fg.default` (body copy reads better in the default text color than in `fg.muted`, and the pair is tested). Runner up: `fg.muted`, as Badge.
- **Text color inherited from the root** for title, description and icon: one color per tone, every pair already tested. Runner up: `fg.default` for the description (needs four new contrast pairs on the status backgrounds).
- **Radius `radius.surface`**: the alert is a block surface like Card. Runner up: `radius.control`.
- **One size**: 16 px padding, 14/20 text. Runner up: `sm` and `md` (no dense use case yet).
- **Title `ark.p`, semibold**; `asChild` for a heading. A heading by default would add entries to the page outline in every product. Runner up: `ark.h5`.
- **Description `ark.div`**: it may hold paragraphs or a list. Runner up: `ark.p` (invalid with block children).
- **Built in icons per tone**, `aria-hidden`, neutral reusing the informative icon; custom children replace them. Runner up: no built in icons (each product draws its own).
- **No default role**; the JSDoc tells when to pass `status` or `alert` (Option 4 rejected).
- **No close button and no actions area** (Option 3 deferred to Follow-up).
- **`data-icon` on each icon** so tests check the icon per tone by attribute.
- **Stories in a 448 px frame** (`max-w-md`), descriptions written to wrap with margin, so Paper and the browser agree on line counts.
- **7 visual stories** (five tones, title only, without indicator), hence 14 baselines.
- **Badge's artboard `3OS-0` as the chrome template**, the newest artboard with every chrome value bound.

No item needed the engineer's own call: there is no new runtime dependency, no token naming or hierarchy change, no public API change of an existing component, and no CI or release change.

## Cross check (2026-11-21)

A read only review by another model (Gemini 3.8 Flash) found 3 gaps and no soundness issue. Following the engineer's instruction to take the recommended picks, every recommended fix was applied:

- **Icon shape in parity**: compared as the ordered SVG child elements and their geometry, from the DOM and from `get_jsx`; Paper needs no `data-icon`.
- **Absent parts in parity**: one `present` row (`no` on both sides), no property rows.
- **Finding the root**: every part carries `data-scope="alert"` and `data-part`, as Ark's parts do; the `Default` play and the parity script use them.

## Parity tables

Filled during the build (AC-11): [`parity/alert.md`](parity/alert.md), light and dark, with spec 0002's columns.

## Run ledger summary

Filled at the end of the Paper run: design SHA, approvals with dates (write plan, pilot, design review), baseline token hash, hashes compared (JSX text and PNG), the two artboard IDs, ledger call count, scope audit result. The measurement SHA of the code PR goes in the parity table.
