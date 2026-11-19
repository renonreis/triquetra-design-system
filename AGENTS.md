# AGENTS.md — Triquetra Design System

Triquetra is a React design system: design tokens, accessible components, and their documentation. It is a **pnpm + Turborepo monorepo**: `packages/*` are published, `apps/*` are private. The name comes from the triquetra knot: three interlaced arcs for design, technology and product in one continuous loop.

> Status: **pilot / bootstrapping**. Some commands below may not exist yet. If a command is missing, check `package.json` before inventing an alternative, and update this file in the same PR that adds or changes a script.

## Stack

- **Build:** Vite (library mode) + TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first config) + `tailwind-variants` (`tv()`)
- **Primitives:** [Ark UI](https://ark-ui.com) (`@ark-ui/react`), headless, styled with Tailwind via `data-*` state attributes
- **Tokens:** W3C DTCG format ([2025.10](https://www.designtokens.org/tr/2025.10/format/)), compiled to CSS custom properties and a Tailwind `@theme`
- **Docs and dev environment:** Storybook (Vite builder)
- **Tests:** Vitest + Testing Library + axe (unit/a11y); Playwright (visual regression)
- **Releases:** Changesets
- **Package manager:** pnpm 12, pinned in `packageManager` and run through Corepack (do not use npm or yarn, and do not commit other lockfiles). Native build scripts must be allowed in `pnpm-workspace.yaml` (`allowBuilds`).
- **Runtime:** Node 24 (`.nvmrc`), `>=22.22` minimum
- **Monorepo:** pnpm workspaces (`pnpm-workspace.yaml`) + Turborepo (`turbo.json`). Run tasks from the root; Turborepo builds dependencies first (`^build`) and caches results.
- **Packages:** `@renonreis/triquetra` (`packages/react`), published to GitHub Packages (`.npmrc` maps the `@renonreis` scope). Consumers import components from `@renonreis/triquetra` and styles from `@renonreis/triquetra/styles.css`.

## Setup commands

```bash
pnpm install            # install deps (also builds the tokens via `prepare`)
pnpm dev                # Storybook on http://localhost:6006 (main dev environment)
pnpm dev:sample         # Next.js sample app on http://localhost:3000
pnpm build              # every package: tokens + JS (Vite) + types (tsc) + CSS (Tailwind CLI) → packages/*/dist/
pnpm build-storybook    # static Storybook → apps/storybook/storybook-static/
pnpm --filter @renonreis/triquetra tokens:build   # compile tokens/ → src/styles/generated/
```

## Verification commands (run before every commit)

```bash
pnpm lint               # ESLint (incl. jsx-a11y and storybook plugins) + Prettier check
pnpm typecheck          # turbo: tsc --noEmit in every workspace
pnpm test               # turbo: unit + axe + contrast (packages/react) and stories in light/dark (apps/storybook)
pnpm test:visual:docker # Playwright visual regression in the Playwright Docker image (same as CI)
pnpm test:e2e           # builds apps/sample (Next.js) and runs its Playwright smoke tests
pnpm test:package       # packs the package, runs publint + attw, builds clean Vite and Next.js apps on the tarball
```

CI (`.github/workflows/ci.yml`) runs the same commands. These required checks block the merge into `main`:

| Check                       | Runs                                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Lint & typecheck`          | `pnpm lint` (builds packages first, for typed lint of apps) + `pnpm typecheck`                        |
| `Unit & token tests`        | `turbo run test --filter=@renonreis/triquetra` (behavior, axe, contrast)                              |
| `Accessibility (Storybook)` | `turbo run test --filter=@triquetra/storybook` (every story in light and dark, a11y addon in `error`) |
| `Visual regression`         | `playwright test` in `mcr.microsoft.com/playwright` (stories tagged `visual`, light and dark)         |
| `Build`                     | `turbo run build build-storybook`                                                                     |

CI also runs `Sample app (Next.js)`, which builds `apps/sample` against the package and runs its smoke tests (hydration, styles, behavior and axe in light and dark), and `Package (packed tarball)`, which runs `pnpm test:package`.

Don't skip, disable or `.only` tests to get green, and don't lower axe rules.

## Project structure

```
packages/
  react/                          # @renonreis/triquetra (published)
    tokens/                       # source of truth, DTCG JSON (*.tokens.json)
      primitives/                 # `primitive.*`: raw values (palettes 0–900, scales)
      brands/<brand>.tokens.json  # `brand.*`: roles mapped to primitives (same paths in every brand)
      themes/<theme>/
        base.tokens.json          # mode-agnostic semantics (space, radius, size, font, motion)
        light.tokens.json         # semantic colors + shadows, light mode
        dark.tokens.json          # semantic colors + shadows, dark mode (same paths as light)
      contrast.test.ts            # WCAG contrast checks on semantic pairs
    scripts/build-tokens.ts       # Style Dictionary build + validation (Brand × Theme × Mode)
    scripts/build-fonts.ts        # copies Geist Sans (@fontsource-variable/geist) and writes fonts.css
    src/
      components/<name>/
        <name>.tsx                # component (wraps Ark UI when a primitive exists)
        <name>.variants.ts        # tv() definition, the only place for class strings
        <name>.stories.tsx        # Storybook stories (run by apps/storybook, also as tests)
        <name>.test.tsx           # behavior + axe tests
        index.ts
      styles/
        generated/                # tokens.css, theme.css (Tailwind @theme), tokens.json, fonts.css + fonts/. NEVER edit by hand
        index.css                 # Tailwind entry: imports generated tokens + theme
      test/                       # Vitest setup and the axe matcher
      index.ts                    # public API, explicit named exports only
apps/
  storybook/                      # docs + dev environment (private)
    .storybook/                   # config; loads stories from packages/react/src
    src/foundations/              # token documentation stories
    src/introduction.mdx
    tests/visual/                 # Playwright specs + committed snapshots
    scripts/visual-docker.sh
  sample/                         # Next.js App Router app consuming the package (private)
    src/app/                      # Server Component page + 'use client' islands
    tests/                        # Playwright smoke tests (run on `next start`)
tests/package/                    # standalone Vite and Next.js fixtures for `pnpm test:package`
.changeset/                       # Changesets (repo-wide)
turbo.json, pnpm-workspace.yaml, tsconfig.base.json, eslint.config.js (shared)
```

## Design tokens

Hierarchy: **Brand → Theme → Mode (light/dark)**.

1. **Primitive** (`tokens/primitives`, root group `primitive`): raw values, such as `primitive.color.blue.500`. Never emitted as CSS variables. Only brands reference them.
2. **Brand** (`tokens/brands/<brand>.tokens.json`, root group `brand`): roles such as `brand.color.primary.900`, `brand.color.secondary.600`, `brand.color.neutral.*`, `brand.font.family.sans` and `brand.radius.control`. Emitted as `--tq-brand-*` and scoped by `[data-brand]`. Every brand must define exactly the same paths as the default brand.
3. **Semantic** (`tokens/themes/<theme>/`): intent-based, such as `color.bg.surface`, `color.fg.muted`, `color.border.focus`, `color.action.primary.bg`, `radius.control` and `shadow.md`. Semantic tokens reference brand roles, so they are emitted as `var(--tq-brand-…)` and work with any brand. `base` holds mode-agnostic tokens. `light` and `dark` hold colors and shadows.
4. **Component** (optional, sparing): such as `button.radius`. Add one only when a component must diverge from semantics.

Themes: `default` is complete and mandatory. Another theme (for example `black-friday`) contains **only overrides** on top of `default`. If it overrides a token in one mode, it must also override it in the other.

Rules:

- Follow DTCG 2025.10:
  - `$value`, `$type`, `$description` and `$extensions`
  - aliases written as `{group.token}`
  - structured `color` values in OKLCH (`colorSpace` + `components`, plus a `hex` fallback on primitives)
  - `dimension` and `duration` values as `{ value, unit }`
  - files named `*.tokens.json`
- Naming: lowercase, dot-separated groups in JSON. They become `--tq-<path>` CSS variables, for example `--tq-color-bg-surface`.
- The token build (`tokens:build` in `packages/react`) **fails** when:
  - light and dark don't define the same token paths
  - a brand is missing a role or defines an extra one
  - a semantic color points straight to a `primitive.*` instead of a brand role
- `packages/react/tokens/contrast.test.ts` checks WCAG 2.2 AA for every brand × theme × mode: 4.5:1 for text pairs and 3:1 for control borders and focus. When you add a semantic fg/bg pair, add it there. Fix the token, never the threshold.
- Runtime selection uses `data-brand`, `data-theme` and `data-mode="light|dark"`, usually all on `<html>`. With no attribute set, the defaults are the default brand, the default theme and `prefers-color-scheme`. `data-mode` can be nested to switch a subtree. `data-brand` and `data-theme` must sit on the same element as `data-mode` or on an ancestor of it.
- Tailwind utilities map 1:1 to semantic tokens (`packages/react/src/styles/generated/theme.css`). The default Tailwind theme is disabled (`--*: initial`), so palette classes such as `bg-blue-500` don't exist:

  | Token                     | Utility                |
  | ------------------------- | ---------------------- |
  | `color.bg.surface`        | `bg-bg-surface`        |
  | `color.fg.muted`          | `text-fg-muted`        |
  | `color.border.strong`     | `border-border-strong` |
  | `color.action.primary.bg` | `bg-action-primary-bg` |
  | `color.border.focus`      | `ring-border-focus`    |
  | `radius.control`          | `rounded-control`      |
  | `shadow.md`               | `shadow-md`            |
  | `space.4`                 | `p-4`, `gap-4`… (1rem) |
  | `size.container.md`       | `max-w-md` (28rem)     |
  | `font.size.sm`            | `text-sm`              |
  | `font.weight.medium`      | `font-medium`          |
  | `font.family.mono`        | `font-mono`            |
  | `font.line-height.tight`  | `leading-tight`        |

- After editing tokens, run `pnpm --filter @renonreis/triquetra tokens:build` (`dev`, `test`, `build` and `prepare` already run it). Commit only the source JSON. Generated files are git-ignored.
- Published entry points:
  - `styles.css`: everything compiled (includes the font)
  - `fonts.css`: `@font-face` for Geist Sans, the brand sans font (files in `dist/fonts/`, SIL OFL 1.1)
  - `tokens.css`: CSS variables only
  - `theme.css`: the Tailwind v4 `@theme`, for apps that use Tailwind themselves
  - `tokens.json`: resolved values

## Component conventions

- Wrap an **Ark UI** primitive when one exists (Field, Dialog, Menu…). Use `ark.<element>` for simple elements. Do not reimplement focus management, keyboard handling or ARIA that Ark already provides.
- All styling goes through `tv()` in `<name>.variants.ts`. Use **semantic token utilities only**: no hex values, no arbitrary values (`bg-[#…]`, `p-[13px]`), no primitive palette classes.
- **Never use `dark:` in components.** Modes switch through tokens, not through class variants.
- Style Ark state with its data attributes (`data-[disabled]:`, `data-[invalid]:`, `data-[state=open]:`), not with JS-computed class names.
- Merge user classes through `tv`'s built-in `class`/`className` handling (tailwind-merge). Don't concatenate strings.
- Composed components use the **compound pattern** (`Card.Root`, `Card.Header`…) and keep each part's API close to Ark's.
- Relative imports in `packages/react/src` use explicit `.js` extensions (`./button.js`, `../input/index.js`). The type build uses `NodeNext` and fails without them, so the published `.d.ts` files work under every `moduleResolution`.
- The bundle starts with `'use client'` (Vite `banner`), so it can be imported from React Server Components. Server code can't access compound parts with a dot, so consumers use them inside their own client components. When a change affects SSR or RSC, check it with `pnpm test:e2e`.
- Forward refs, spread remaining props onto the root element, and export prop types (`ButtonProps`).
- Visible focus is mandatory (`focus-visible:` ring using `color.border.focus`).
- Names: files `kebab-case`, components `PascalCase`, variants `camelCase`. Named exports only, no default exports (except Storybook meta).
- Every public export goes through `packages/react/src/index.ts`. Adding a public export is a `minor` changeset. Removing or renaming one is a `major` changeset.

## Testing instructions

- Tag stories that should be screenshotted with `tags: ['visual']` (usually the meta, so every story of a component counts).
- Each component needs:
  - `*.test.tsx`: behavior with Testing Library (query by role and accessible name, not by test-id or class) plus `expect(await axe(container)).toHaveNoViolations()` for every meaningful state.
  - `*.stories.tsx`: one story per variant and state (default, hover via `pseudo`, disabled, invalid, loading…), rendered in **light and dark** modes. Stories are run as tests and checked with the a11y addon in `error` mode.
  - Visual snapshots: Playwright screenshots the stories tagged `visual`.
- Visual snapshots are OS- and architecture-sensitive. Generate and update them **only in the Playwright Docker image** (`linux/amd64`, the same as CI):
  - `pnpm test:visual:docker` compares against the committed baselines in `apps/storybook/tests/visual/__screenshots__/`.
  - `pnpm test:visual:update` rewrites them. Review every changed PNG before committing.
  - Never commit snapshots generated on macOS. Docker (OrbStack) must be running.
  - When you bump `@playwright/test`, also bump the image tag in `.github/workflows/ci.yml`.
- Run one test file: `pnpm --filter @renonreis/triquetra exec vitest run src/components/button`.
- Add or update tests for any change in behavior, even if nobody asked.

## PR and commit instructions

- Branch from `main`. Never push directly to `main`.
- Use Conventional Commits (`feat(button): add loading state`, `fix(tokens): …`, `chore: …`).
- Any change that affects consumers (components, tokens, CSS output, public types) **requires a changeset**: run `pnpm changeset`. Docs, tests and CI-only changes don't need one.
- Before you open a PR, run `pnpm lint && pnpm typecheck && pnpm test && pnpm build-storybook`.
- Each PR from this repository gets a Storybook preview on Cloudflare Pages at `https://pr-<number>.triquetra-storybook.pages.dev`, posted as a PR comment. `main` deploys to [triquetra.renon.dev](https://triquetra.renon.dev). Link the relevant stories in the PR description.
- Releases (`.github/workflows/release.yml`): when changesets are pending on `main`, Changesets opens or updates a `chore: release` PR. Merging it publishes to GitHub Packages. That PR is created by `GITHUB_TOKEN`, so CI doesn't run on it automatically. **Close and reopen it** to trigger the required checks.
- Keep PRs scoped: one component or one token concern per PR when possible.

## Boundaries

- **Always:** use semantic tokens, add stories and tests with components, keep light and dark in parity, and run the verification commands.
- **Ask first:** adding a runtime dependency, changing the token naming scheme or hierarchy, changing the public API of an existing component, or changing CI or release workflows.
- **Never:** edit `packages/react/src/styles/generated/` or any `dist/`, commit secrets or `.env` files, publish manually (`npm publish`) outside the Changesets workflow, update visual snapshots to hide an unexplained diff, or disable a11y rules.
