# AGENTS.md — Triquetra Design System

Triquetra is a React design system: design tokens, accessible components, and their documentation, shipped as **one npm package** (no monorepo). The name comes from the triquetra knot: three interlaced arcs for design, technology and product in one continuous loop.

> Status: **pilot / bootstrapping**. Some commands below may not exist yet. If a command is missing, check `package.json` before inventing an alternative, and update this file in the same PR that adds or changes a script.

## Stack

- **Build:** Vite (library mode) + TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first config) + `tailwind-variants` (`tv()`)
- **Primitives:** [Ark UI](https://ark-ui.com) (`@ark-ui/react`), headless, styled with Tailwind via `data-*` state attributes
- **Tokens:** W3C DTCG format ([2025.10](https://www.designtokens.org/tr/2025.10/format/)), compiled to CSS custom properties and a Tailwind `@theme`
- **Docs and dev environment:** Storybook (Vite builder)
- **Tests:** Vitest + Testing Library + axe (unit/a11y); Playwright (visual regression)
- **Releases:** Changesets
- **Package manager:** pnpm 11, pinned in `packageManager` and run through Corepack (do not use npm or yarn, and do not commit other lockfiles). Native build scripts must be allowed in `pnpm-workspace.yaml` (`allowBuilds`).
- **Runtime:** Node 24 (`.nvmrc`), `>=22.22` minimum
- **Package:** `@renonreis/triquetra`, published to GitHub Packages (`.npmrc` maps the `@renonreis` scope). Consumers import components from `@renonreis/triquetra` and styles from `@renonreis/triquetra/styles.css`.

## Setup commands

```bash
pnpm install            # install deps
pnpm dev                # Storybook on http://localhost:6006 (main dev environment)
pnpm tokens:build       # compile tokens/ → src/styles/generated/
pnpm build              # tokens + JS (Vite) + types (tsc) + CSS (Tailwind CLI) → dist/
pnpm build-storybook    # static Storybook → storybook-static/
```

## Verification commands (run before every commit)

```bash
pnpm lint               # ESLint (incl. jsx-a11y and storybook plugins) + Prettier check
pnpm typecheck          # tsc --noEmit
pnpm test               # Vitest projects: `unit` (jsdom + axe) and `storybook` (stories in Chromium)
pnpm test:visual        # Playwright visual regression (run in Docker, see below)
```

CI runs the same commands. A PR cannot merge unless lint, typecheck, tests, the Storybook build and the accessibility checks pass. Don't skip, disable or `.only` tests to get green, and don't lower axe rules.

## Project structure

```
tokens/                     # source of truth, DTCG JSON (*.tokens.json)
  primitives/               # raw values with no meaning (palette, scales)
  brands/<brand>/           # brand decisions: maps primitives to brand roles
  themes/<theme>/           # semantic tokens per theme
  modes/{light,dark}/       # mode overrides of semantic tokens
  triquetra.resolver.json   # DTCG resolver: brand × theme × mode permutations
scripts/                    # token build and other tooling
src/
  components/<name>/
    <name>.tsx              # component (wraps Ark UI when a primitive exists)
    <name>.variants.ts      # tv() definition, the only place for class strings
    <name>.stories.tsx      # Storybook stories (also run as tests)
    <name>.test.tsx         # behavior + axe tests
    index.ts
  styles/
    generated/              # build output of tokens. NEVER edit by hand
    index.css               # Tailwind entry: imports generated tokens + @theme
  index.ts                  # public API, explicit named exports only
tests/visual/               # Playwright specs + committed snapshots
.storybook/
.changeset/
```

## Design tokens

Hierarchy: **Brand → Theme → Mode (light/dark)**.

1. **Primitive** (`tokens/primitives`): raw values, such as `color.blue.500`. Components never reference these.
2. **Brand** (`tokens/brands/*`): brand roles, such as `brand.primary`, typography families and radius personality.
3. **Semantic** (`tokens/themes/*` and `tokens/modes/*`): intent-based, such as `color.bg.surface`, `color.fg.muted`, `color.border.focus` and `color.action.primary.bg`. Modes only override semantic tokens.
4. **Component** (optional, sparing): such as `button.radius`. Add one only when a component must diverge from semantics.

Rules:

- Follow DTCG 2025.10: `$value`, `$type`, `$description`, `$extensions`; aliases with `{group.token}`; structured `color` values (`colorSpace` + `components`) and `dimension` values (`{ value, unit }`). Use `.tokens.json` files.
- Naming: lowercase, dot-separated groups in JSON, which become `--tq-<path>` CSS variables (for example `--tq-color-bg-surface`).
- Every semantic color token must exist in **both** light and dark modes. The build fails on a missing pair.
- Text and background semantic pairs must meet WCAG 2.2 AA contrast. Tests check the defined pairs.
- Runtime selection uses attributes on an ancestor: `data-brand`, `data-theme` and `data-mode="light|dark"`. With no attribute set, the defaults are the default brand, the default theme and `prefers-color-scheme`.
- After editing tokens, run `pnpm tokens:build` and commit the source JSON. Generated files are build output; follow `.gitignore`.

## Component conventions

- Wrap an **Ark UI** primitive when one exists (Field, Dialog, Menu…). Use `ark.<element>` for simple elements. Do not reimplement focus management, keyboard handling or ARIA that Ark already provides.
- All styling goes through `tv()` in `<name>.variants.ts`. Use **semantic token utilities only**: no hex values, no arbitrary values (`bg-[#…]`, `p-[13px]`), no primitive palette classes.
- **Never use `dark:` in components.** Modes switch through tokens, not through class variants.
- Style Ark state with its data attributes (`data-[disabled]:`, `data-[invalid]:`, `data-[state=open]:`), not with JS-computed class names.
- Merge user classes through `tv`'s built-in `class`/`className` handling (tailwind-merge). Don't concatenate strings.
- Composed components use the **compound pattern** (`Card.Root`, `Card.Header`…) and keep each part's API close to Ark's.
- Forward refs, spread remaining props onto the root element, and export prop types (`ButtonProps`).
- Visible focus is mandatory (`focus-visible:` ring using `color.border.focus`).
- Names: files `kebab-case`, components `PascalCase`, variants `camelCase`. Named exports only, no default exports (except Storybook meta).
- Every public export goes through `src/index.ts`. Adding a public export is a `minor` changeset. Removing or renaming one is a `major` changeset.

## Testing instructions

- Each component needs:
  - `*.test.tsx`: behavior with Testing Library (query by role and accessible name, not by test-id or class) plus `expect(await axe(container)).toHaveNoViolations()` for every meaningful state.
  - `*.stories.tsx`: one story per variant and state (default, hover via `pseudo`, disabled, invalid, loading…), rendered in **light and dark** modes. Stories are run as tests and checked with the a11y addon in `error` mode.
  - Visual snapshots: Playwright screenshots the stories tagged `visual`.
- Visual snapshots are OS-sensitive. Generate and update them **only in the Playwright Docker image** (`pnpm test:visual:docker`, `pnpm test:visual:update`). Never commit snapshots generated on macOS.
- Run one test file: `pnpm vitest run src/components/button`.
- Add or update tests for any change in behavior, even if nobody asked.

## PR and commit instructions

- Branch from `main`. Never push directly to `main`.
- Use Conventional Commits (`feat(button): add loading state`, `fix(tokens): …`, `chore: …`).
- Any change that affects consumers (components, tokens, CSS output, public types) **requires a changeset**: run `pnpm changeset`. Docs, tests and CI-only changes don't need one.
- Before you open a PR, run `pnpm lint && pnpm typecheck && pnpm test && pnpm build-storybook`.
- Each PR gets a Storybook preview deploy. Link the relevant stories in the PR description.
- Keep PRs scoped: one component or one token concern per PR when possible.

## Boundaries

- **Always:** use semantic tokens, add stories and tests with components, keep light and dark in parity, and run the verification commands.
- **Ask first:** adding a runtime dependency, changing the token naming scheme or hierarchy, changing the public API of an existing component, or changing CI or release workflows.
- **Never:** edit `src/styles/generated/` or `dist/`, commit secrets or `.env` files, publish manually (`npm publish`) outside the Changesets workflow, update visual snapshots to hide an unexplained diff, or disable a11y rules.
