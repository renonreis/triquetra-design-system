<img src="assets/icon.svg" width="64" height="64" alt="Triquetra logo">

# Triquetra Design System

Design tokens and accessible React components, built on [Ark UI](https://ark-ui.com) and Tailwind CSS v4.
The triquetra is three interlaced arcs: **design**, **technology** and **product**, in one continuous loop.

📖 **Documentation (Storybook):** [triquetra.renon.dev](https://triquetra.renon.dev)

## Install

The package is published to GitHub Packages. Add this to your project's `.npmrc` (GitHub Packages requires a token with `read:packages`, even for public packages):

```ini
@renonreis:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
pnpm add @renonreis/triquetra
```

```tsx
import '@renonreis/triquetra/styles.css';
```

## Development

```bash
corepack enable
pnpm install
pnpm dev          # Storybook on http://localhost:6006
```

This is a pnpm + Turborepo monorepo:

| Workspace                            |                                                                  |
| ------------------------------------ | ---------------------------------------------------------------- |
| [`packages/react`](./packages/react) | `@renonreis/triquetra`: components and design tokens (published) |
| [`apps/storybook`](./apps/storybook) | Documentation, story tests and visual regression                 |

See [AGENTS.md](./AGENTS.md) for conventions, commands and contribution rules.

## License

[MIT](./LICENSE)
