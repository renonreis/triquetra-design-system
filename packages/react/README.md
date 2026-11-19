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

### Next.js (App Router) and React Server Components

The bundle is a client module (`'use client'`), so you can import components from Server Components. Simple components such as `Button` render there directly. Compound components (`Card.Root`, `Dialog.Content`…) can't be accessed with a dot from a Server Component, so use them inside your own `'use client'` component:

```tsx
'use client';
import { Card } from '@renonreis/triquetra';

export function ProfileCard() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title asChild>
          <h2>Profile</h2>
        </Card.Title>
      </Card.Header>
    </Card.Root>
  );
}
```

`Card.Title` renders an `h3` by default. Use `asChild` to pick the heading level that fits your page outline.

### Apps that use Tailwind CSS v4

Instead of `styles.css`, import the tokens and the theme into your own Tailwind entry and scan the package, so component classes are generated with yours (one preflight, one utility layer):

```css
@import 'tailwindcss';
@import '@renonreis/triquetra/tokens.css';
@import '@renonreis/triquetra/theme.css';
@source '../node_modules/@renonreis/triquetra/dist/*.js';
```

`theme.css` replaces Tailwind's default theme: only Triquetra's semantic utilities exist (`bg-bg-surface`, `text-fg-muted`, `p-4`…). See [`apps/sample`](https://github.com/renonreis/triquetra-design-system/tree/main/apps/sample) for a complete Next.js example.

Documentation and live examples: [triquetra.renon.dev](https://triquetra.renon.dev).

## License

MIT
