# @renonreis/triquetra

## 0.6.0

### Minor Changes

- fded868: Add `Popover`, a panel opened by a click that holds text, links or a small form, built on Ark UI with Dialog's part names (`Popover.Root`, `Trigger`, `Content`, `Header`, `Title`, `Description`, `Body`, `Footer`, `CloseTrigger`). It is not modal: focus moves in and returns to the trigger, and Escape, the close button or an outside press close it. It opens below the trigger, is 320 px wide, shrinks and scrolls to stay inside the viewport, renders in a portal, and leaves nothing in the DOM while closed. Every default can be overridden.

### Patch Changes

- d45d0c2: Correct the `radius.overlay` description: Popover uses `radius.surface`. No value changes.

## 0.5.0

### Minor Changes

- 4d93c4d: Add `Alert`, an inline status message with `Alert.Root`, `Alert.Indicator`, `Alert.Content`, `Alert.Title` and `Alert.Description`. It takes the same five tones as `Badge` (`informative` by default), shows a built in icon per tone, and sets no live region role unless you pass `role="status"` or `role="alert"`.
- e847bc5: Add `Badge`: a small static label for status and counts. Five tones (`neutral`, `positive`, `warning`, `negative`, `informative`) on the status color roles, a soft look with a 1 px border, a pill shape and two sizes (`sm`, `md`). Exports `Badge`, `BadgeProps`, `badgeVariants` and `BadgeVariants`.
- 57c2ce2: Add `RadioGroup`: a single choice group on Ark UI's Radio Group, styled like Checkbox with a round control. Parts `Root`, `Label`, `Item`, `ItemControl` and `ItemText`; `size` (`sm`, `md`, `lg`) on `Root`; vertical by default, or `orientation="horizontal"`. Exports `RadioGroup`, `RadioGroupRootProps`, `RadioGroupLabelProps`, `RadioGroupItemProps`, `RadioGroupItemControlProps`, `RadioGroupItemTextProps`, `radioGroupVariants` and `RadioGroupVariants`.
- 91ae44c: Add `Textarea` and `Field.Textarea`: a multi line text field that matches Input, with `size`, `rows` (3 by default), vertical resize and opt in `autoresize`. Exports `Textarea`, `TextareaProps`, `textareaVariants`, `TextareaVariants` and `FieldTextareaProps`.
- eae6f18: Add `Tooltip`, a short hint on pointer hover and keyboard focus, built on Ark UI with `Tooltip.Root`, `Tooltip.Trigger` and `Tooltip.Content`. It opens on top by default, keeps the content hoverable (WCAG 1.4.13), renders the content in a portal, and leaves nothing in the DOM while closed. Every default can be overridden through Ark's props.

## 0.4.0

### Minor Changes

- d568198: Add the `Tabs` compound component (`Tabs.Root`, `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`) on top of Ark UI, with `line` and `enclosed` variants, `sm`/`md`/`lg` sizes and horizontal or vertical orientation.
- e56058c: Add the `Checkbox` compound component (`Checkbox.Root`, `Control`, `Indicator`, `Label`, `Group`) on Ark UI: checked, unchecked and indeterminate states, three sizes, `Field.Root` integration (invalid, required, disabled, helper and error text) and groups with several values.
- f62757e: Add the `Select` compound component (single and `multiple`) on Ark UI Select: `Select.Root` (sizes `sm`, `md`, `lg`), `Label`, `Control`, `Trigger`, `ValueText`, `Indicator`, `ClearTrigger`, `Content`, `ItemGroup`, `ItemGroupLabel`, `Item`, `ItemText` and `ItemIndicator`, plus `selectVariants` and a re-exported `createListCollection` to build its items. Inside `Field.Root`, it takes the field's label, states, and helper/error text.
- 73d0ef0: Add the `Switch` compound component (`Switch.Root`, `Control`, `Thumb`, `Label`) on Ark UI: an on/off toggle exposed as `role="switch"`, three sizes, form submission (`name`, `value`) and `Field.Root` integration (invalid, required, disabled, read-only, helper and error text).

## 0.3.0

### Minor Changes

- 7bf4d14: The brand sans font is now **Geist Sans**, shipped with the package (variable, weights 100–900, normal and italic, SIL OFL 1.1). `styles.css` includes its `@font-face` rules. Apps that use Tailwind import the new `@renonreis/triquetra/fonts.css` entry point next to `tokens.css` and `theme.css`.

### Patch Changes

- 9e30e14: Type declarations now use explicit `.js` extensions in relative imports, so projects with `moduleResolution: "node16"` or `"nodenext"` resolve the component types instead of getting `any`.

## 0.2.2

### Patch Changes

- 1c36c3d: The bundle now starts with a `'use client'` directive, so components can be imported from React Server Components (Next.js App Router) without a wrapper.

## 0.2.1

### Patch Changes

- 963f185: The package now lives in `packages/react` of the Triquetra monorepo and ships a README. No API or styling changes.

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
