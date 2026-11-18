# @renonreis/triquetra

Accessible React components and design tokens of the [Triquetra Design System](https://triquetra.renon.dev), built on [Ark UI](https://ark-ui.com) and Tailwind CSS v4.

## Install

The package is published to GitHub Packages, which requires a token with `read:packages` even for public packages:

```ini
# .npmrc
@renonreis:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
pnpm add @renonreis/triquetra
```

## Use

```tsx
import '@renonreis/triquetra/styles.css';
import { Button } from '@renonreis/triquetra';

export function App() {
  return <Button variant="secondary">Hello</Button>;
}
```

Set `data-mode="light|dark"` (and optionally `data-brand` and `data-theme`) on `<html>`. Without `data-mode`, the mode follows the system preference.

| Entry point                        | Contents                                                                     |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| `@renonreis/triquetra`             | Components and their prop types                                              |
| `@renonreis/triquetra/styles.css`  | Everything compiled (tokens + component styles)                              |
| `@renonreis/triquetra/tokens.css`  | CSS custom properties only                                                   |
| `@renonreis/triquetra/theme.css`   | Tailwind v4 `@theme` mapping the semantic tokens, for apps that use Tailwind |
| `@renonreis/triquetra/tokens.json` | Resolved token values per brand, theme and mode                              |

Documentation and live examples: [triquetra.renon.dev](https://triquetra.renon.dev).

## License

MIT
