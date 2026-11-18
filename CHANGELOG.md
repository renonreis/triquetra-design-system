# @renonreis/triquetra

## 0.2.0

### Minor Changes

- cdf1e8c: Add `Button`, built on Ark UI's `ark.button`: variants `primary`, `secondary`, `neutral`, `negative` and `ghost`; sizes `sm`, `md` and `lg`; `fullWidth`; `loading`, which stays focusable and sets `aria-busy`; and `asChild`. Also declares `react` and `react-dom` (`^18.3 || ^19`) as peer dependencies.
- 00560f5: Add `Card`, a compound component (`Card.Root`, `Header`, `Title`, `Description`, `Body`, `Footer`) with `outline` and `elevated` variants and `sm`, `md` and `lg` sizes. Every part supports `asChild`; `Card.Title` renders an `h3` by default.
- de883e9: Add `Dialog`, built on Ark UI's `Dialog`: `Dialog.Root` (sizes `sm`, `md` and `lg`; lazily mounted), `Trigger`, `Content` (portal, backdrop and positioner), `Header`, `Title`, `Description`, `Body`, `Footer` and `CloseTrigger` (a labelled "×" icon button, or `asChild` around your own button). Also adds `size.container.*` tokens, exposed as the Tailwind `max-w-{xs,sm,md,lg,xl}` utilities.
- f6c49b8: Add `Field`, built on Ark UI's `Field`: `Field.Root`, `Label`, `RequiredIndicator`, `Input`, `HelperText` and `ErrorText`. Labels, descriptions and the `invalid`, `required`, `disabled` and `readOnly` states are wired to the input automatically; the error text renders only while the field is invalid and is announced politely.
- 581ebdf: Add `Input`, built on Ark UI's `Field.Input`: sizes `sm`, `md` and `lg`, plus invalid, disabled and read-only states. It works standalone or inside `Field.Root`, which wires the label, descriptions and states.

## 0.1.0

### Minor Changes

- 05ca343: Add Triquetra design tokens (DTCG 2025.10): six OKLCH palettes (grey, blue, green, red, yellow, orange, steps 0–900), the `triquetra` brand (roles: primary on grey, secondary on blue, neutral, positive, warning, negative, informative), and the `default` theme in light and dark. Ships `styles.css` with the tokens and a Tailwind v4 theme that exposes only semantic utilities, plus `tokens.css`, `theme.css` and `tokens.json`.
