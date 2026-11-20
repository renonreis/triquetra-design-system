# Parity table · Switch

Spec [0002](../index.md), AC-6. Code at `e7dce45` (measured in Storybook at `5b402ec`, same `packages/react`), Paper file `01M7R4TP595GEKCEE8SHQCTJMX`, page `p-4-0`, artboards `190-0` (light) and `1EX-0` (`Switch · Dark`). Code values are Storybook computed styles; Paper values are the authored styles from `get_jsx`, with each `var(--tq-…)` resolved through the mode's `tokens.json` before comparing (_Normalization_ in the spec).

## Light

| Story and checkpoint | Mode | Part | Paper node | Property | Code value | Paper value | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Default | light | root | 19M-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Default | light | control | 19N-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Default | light | control | 19N-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Default | light | control | 19N-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Default | light | control | 19N-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Default | light | control | 19N-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Default | light | control | 19N-0 | outline | none | none | match |  |
| Default | light | thumb | 19O-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Default | light | thumb | 19O-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Default | light | thumb | 19O-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Default | light | thumb | 19O-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Default | light | thumb | 19O-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Default | light | label | 19P-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Default | light | label | 19P-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Default | light | label | 19P-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Default | light | label | 19P-0 | line height | 24px | 24px | match |  |
| Default | light | label | 19P-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover | light | root | 1A1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover | light | control | 1A2-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Hover | light | control | 1A2-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Hover | light | control | 1A2-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Hover | light | control | 1A2-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Hover | light | control | 1A2-0 | background | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Hover | light | control | 1A2-0 | outline | none | none | match |  |
| Hover | light | thumb | 1A3-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Hover | light | thumb | 1A3-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Hover | light | thumb | 1A3-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Hover | light | thumb | 1A3-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Hover | light | thumb | 1A3-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Hover | light | label | 1A4-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover | light | label | 1A4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover | light | label | 1A4-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Hover | light | label | 1A4-0 | line height | 24px | 24px | match |  |
| Hover | light | label | 1A4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible | light | root | 1AG-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible | light | control | 1AH-0 | width | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible | light | control | 1AH-0 | height | 24px | `var(--tq-space-6)` | match |  |
| FocusVisible | light | control | 1AH-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| FocusVisible | light | control | 1AH-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| FocusVisible | light | control | 1AH-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| FocusVisible | light | control | 1AH-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible | light | control | 1AH-0 | outline width | 2px | 2px | match |  |
| FocusVisible | light | control | 1AH-0 | outline offset | 2px | 2px | match |  |
| FocusVisible | light | thumb | 1AI-0 | size | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible | light | thumb | 1AI-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| FocusVisible | light | thumb | 1AI-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| FocusVisible | light | thumb | 1AI-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| FocusVisible | light | thumb | 1AI-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| FocusVisible | light | label | 1AJ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| FocusVisible | light | label | 1AJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible | light | label | 1AJ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| FocusVisible | light | label | 1AJ-0 | line height | 24px | 24px | match |  |
| FocusVisible | light | label | 1AJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid | light | root | 1AV-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid | light | control | 1AW-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Invalid | light | control | 1AW-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Invalid | light | control | 1AW-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Invalid | light | control | 1AW-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Invalid | light | control | 1AW-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Invalid | light | control | 1AW-0 | outline color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| Invalid | light | control | 1AW-0 | outline width | 1px | 1px | match |  |
| Invalid | light | control | 1AW-0 | outline offset | 2px | 2px | match |  |
| Invalid | light | thumb | 1AX-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid | light | thumb | 1AX-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Invalid | light | thumb | 1AX-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Invalid | light | thumb | 1AX-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Invalid | light | thumb | 1AX-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Invalid | light | label | 1AY-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Invalid | light | label | 1AY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid | light | label | 1AY-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid | light | label | 1AY-0 | line height | 24px | 24px | match |  |
| Invalid | light | label | 1AY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InvalidFocusVisible | light | root | 1BA-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| InvalidFocusVisible | light | control | 1BB-0 | width | 40px | `var(--tq-space-10)` | match |  |
| InvalidFocusVisible | light | control | 1BB-0 | height | 24px | `var(--tq-space-6)` | match |  |
| InvalidFocusVisible | light | control | 1BB-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| InvalidFocusVisible | light | control | 1BB-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| InvalidFocusVisible | light | control | 1BB-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| InvalidFocusVisible | light | control | 1BB-0 | outline color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| InvalidFocusVisible | light | control | 1BB-0 | outline width | 2px | 2px | match |  |
| InvalidFocusVisible | light | control | 1BB-0 | outline offset | 2px | 2px | match |  |
| InvalidFocusVisible | light | thumb | 1BC-0 | size | 16px | `var(--tq-space-4)` | match |  |
| InvalidFocusVisible | light | thumb | 1BC-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| InvalidFocusVisible | light | thumb | 1BC-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| InvalidFocusVisible | light | thumb | 1BC-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| InvalidFocusVisible | light | thumb | 1BC-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| InvalidFocusVisible | light | label | 1BD-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| InvalidFocusVisible | light | label | 1BD-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| InvalidFocusVisible | light | label | 1BD-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| InvalidFocusVisible | light | label | 1BD-0 | line height | 24px | 24px | match |  |
| InvalidFocusVisible | light | label | 1BD-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Disabled | light | root | 1BP-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Disabled | light | control | 1BQ-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Disabled | light | control | 1BQ-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Disabled | light | control | 1BQ-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Disabled | light | control | 1BQ-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Disabled | light | control | 1BQ-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-disabled)` | match |  |
| Disabled | light | control | 1BQ-0 | outline | none | none | match |  |
| Disabled | light | thumb | 1BR-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Disabled | light | thumb | 1BR-0 | background | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Disabled | light | thumb | 1BR-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Disabled | light | thumb | 1BR-0 | shadow | none | none | match |  |
| Disabled | light | thumb | 1BR-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Disabled | light | label | 1BS-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Disabled | light | label | 1BS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Disabled | light | label | 1BS-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Disabled | light | label | 1BS-0 | line height | 24px | 24px | match |  |
| Disabled | light | label | 1BS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | root | 1C4-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | control | 1C5-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | control | 1C5-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | control | 1C5-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | control | 1C5-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | control | 1C5-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | control | 1C5-0 | outline | none | none | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | thumb | 1C6-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | thumb | 1C6-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | thumb | 1C6-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | thumb | 1C6-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | thumb | 1C6-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | label | 1C7-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | label | 1C7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | label | 1C7-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | label | 1C7-0 | line height | 24px | 24px | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | light | label | 1C7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Checked | light | root | 19S-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Checked | light | control | 19T-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Checked | light | control | 19T-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Checked | light | control | 19T-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Checked | light | control | 19T-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Checked | light | control | 19T-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Checked | light | control | 19T-0 | outline | none | none | match |  |
| Checked | light | thumb | 19U-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Checked | light | thumb | 19U-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| Checked | light | thumb | 19U-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Checked | light | thumb | 19U-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Checked | light | thumb | 19U-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Checked | light | label | 19V-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Checked | light | label | 19V-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Checked | light | label | 19V-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Checked | light | label | 19V-0 | line height | 24px | 24px | match |  |
| Checked | light | label | 19V-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| CheckedHover | light | root | 1A7-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| CheckedHover | light | control | 1A8-0 | width | 40px | `var(--tq-space-10)` | match |  |
| CheckedHover | light | control | 1A8-0 | height | 24px | `var(--tq-space-6)` | match |  |
| CheckedHover | light | control | 1A8-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| CheckedHover | light | control | 1A8-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| CheckedHover | light | control | 1A8-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-action-primary-bg-hover)` | match |  |
| CheckedHover | light | control | 1A8-0 | outline | none | none | match |  |
| CheckedHover | light | thumb | 1A9-0 | size | 16px | `var(--tq-space-4)` | match |  |
| CheckedHover | light | thumb | 1A9-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| CheckedHover | light | thumb | 1A9-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| CheckedHover | light | thumb | 1A9-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| CheckedHover | light | thumb | 1A9-0 | x in control | 20px | justifyContent end = 20px | match |  |
| CheckedHover | light | label | 1AA-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| CheckedHover | light | label | 1AA-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| CheckedHover | light | label | 1AA-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| CheckedHover | light | label | 1AA-0 | line height | 24px | 24px | match |  |
| CheckedHover | light | label | 1AA-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Checked + tab | light | root | 1AM-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Checked + tab | light | control | 1AN-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Checked + tab | light | control | 1AN-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Checked + tab | light | control | 1AN-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Checked + tab | light | control | 1AN-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Checked + tab | light | control | 1AN-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Checked + tab | light | control | 1AN-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| Checked + tab | light | control | 1AN-0 | outline width | 2px | 2px | match |  |
| Checked + tab | light | control | 1AN-0 | outline offset | 2px | 2px | match |  |
| Checked + tab | light | thumb | 1AO-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Checked + tab | light | thumb | 1AO-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| Checked + tab | light | thumb | 1AO-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Checked + tab | light | thumb | 1AO-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Checked + tab | light | thumb | 1AO-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Checked + tab | light | label | 1AP-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Checked + tab | light | label | 1AP-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Checked + tab | light | label | 1AP-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Checked + tab | light | label | 1AP-0 | line height | 24px | 24px | match |  |
| Checked + tab | light | label | 1AP-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Checked + {"invalid": true} | light | root | 1B1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Checked + {"invalid": true} | light | control | 1B2-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Checked + {"invalid": true} | light | control | 1B2-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Checked + {"invalid": true} | light | control | 1B2-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Checked + {"invalid": true} | light | control | 1B2-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Checked + {"invalid": true} | light | control | 1B2-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Checked + {"invalid": true} | light | control | 1B2-0 | outline color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| Checked + {"invalid": true} | light | control | 1B2-0 | outline width | 1px | 1px | match |  |
| Checked + {"invalid": true} | light | control | 1B2-0 | outline offset | 2px | 2px | match |  |
| Checked + {"invalid": true} | light | thumb | 1B3-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Checked + {"invalid": true} | light | thumb | 1B3-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| Checked + {"invalid": true} | light | thumb | 1B3-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Checked + {"invalid": true} | light | thumb | 1B3-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Checked + {"invalid": true} | light | thumb | 1B3-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Checked + {"invalid": true} | light | label | 1B4-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Checked + {"invalid": true} | light | label | 1B4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Checked + {"invalid": true} | light | label | 1B4-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Checked + {"invalid": true} | light | label | 1B4-0 | line height | 24px | 24px | match |  |
| Checked + {"invalid": true} | light | label | 1B4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Checked + {"invalid": true} + tab | light | root | 1BG-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Checked + {"invalid": true} + tab | light | control | 1BH-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Checked + {"invalid": true} + tab | light | control | 1BH-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Checked + {"invalid": true} + tab | light | control | 1BH-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Checked + {"invalid": true} + tab | light | control | 1BH-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Checked + {"invalid": true} + tab | light | control | 1BH-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Checked + {"invalid": true} + tab | light | control | 1BH-0 | outline color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| Checked + {"invalid": true} + tab | light | control | 1BH-0 | outline width | 2px | 2px | match |  |
| Checked + {"invalid": true} + tab | light | control | 1BH-0 | outline offset | 2px | 2px | match |  |
| Checked + {"invalid": true} + tab | light | thumb | 1BI-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Checked + {"invalid": true} + tab | light | thumb | 1BI-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| Checked + {"invalid": true} + tab | light | thumb | 1BI-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Checked + {"invalid": true} + tab | light | thumb | 1BI-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Checked + {"invalid": true} + tab | light | thumb | 1BI-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Checked + {"invalid": true} + tab | light | label | 1BJ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Checked + {"invalid": true} + tab | light | label | 1BJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Checked + {"invalid": true} + tab | light | label | 1BJ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Checked + {"invalid": true} + tab | light | label | 1BJ-0 | line height | 24px | 24px | match |  |
| Checked + {"invalid": true} + tab | light | label | 1BJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| DisabledChecked | light | root | 1BV-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| DisabledChecked | light | control | 1BW-0 | width | 40px | `var(--tq-space-10)` | match |  |
| DisabledChecked | light | control | 1BW-0 | height | 24px | `var(--tq-space-6)` | match |  |
| DisabledChecked | light | control | 1BW-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| DisabledChecked | light | control | 1BW-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| DisabledChecked | light | control | 1BW-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-disabled)` | match |  |
| DisabledChecked | light | control | 1BW-0 | outline | none | none | match |  |
| DisabledChecked | light | thumb | 1BX-0 | size | 16px | `var(--tq-space-4)` | match |  |
| DisabledChecked | light | thumb | 1BX-0 | background | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| DisabledChecked | light | thumb | 1BX-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| DisabledChecked | light | thumb | 1BX-0 | shadow | none | none | match |  |
| DisabledChecked | light | thumb | 1BX-0 | x in control | 20px | justifyContent end = 20px | match |  |
| DisabledChecked | light | label | 1BY-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| DisabledChecked | light | label | 1BY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| DisabledChecked | light | label | 1BY-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| DisabledChecked | light | label | 1BY-0 | line height | 24px | 24px | match |  |
| DisabledChecked | light | label | 1BY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ReadOnly | light | root | 1CA-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ReadOnly | light | control | 1CB-0 | width | 40px | `var(--tq-space-10)` | match |  |
| ReadOnly | light | control | 1CB-0 | height | 24px | `var(--tq-space-6)` | match |  |
| ReadOnly | light | control | 1CB-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| ReadOnly | light | control | 1CB-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| ReadOnly | light | control | 1CB-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| ReadOnly | light | control | 1CB-0 | outline | none | none | match |  |
| ReadOnly | light | thumb | 1CC-0 | size | 16px | `var(--tq-space-4)` | match |  |
| ReadOnly | light | thumb | 1CC-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| ReadOnly | light | thumb | 1CC-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| ReadOnly | light | thumb | 1CC-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| ReadOnly | light | thumb | 1CC-0 | x in control | 20px | justifyContent end = 20px | match |  |
| ReadOnly | light | label | 1CD-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| ReadOnly | light | label | 1CD-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ReadOnly | light | label | 1CD-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| ReadOnly | light | label | 1CD-0 | line height | 24px | 24px | match |  |
| ReadOnly | light | label | 1CD-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #1 | light | root | 1CP-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #1 | light | control | 1CQ-0 | width | 32px | `var(--tq-space-8)` | match |  |
| Sizes #1 | light | control | 1CQ-0 | height | 20px | `var(--tq-space-5)` | match |  |
| Sizes #1 | light | control | 1CQ-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #1 | light | control | 1CQ-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #1 | light | control | 1CQ-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Sizes #1 | light | control | 1CQ-0 | outline | none | none | match |  |
| Sizes #1 | light | thumb | 1CR-0 | size | 12px | `var(--tq-space-3)` | match |  |
| Sizes #1 | light | thumb | 1CR-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Sizes #1 | light | thumb | 1CR-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #1 | light | thumb | 1CR-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Sizes #1 | light | thumb | 1CR-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Sizes #1 | light | label | 1CS-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #1 | light | label | 1CS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #1 | light | label | 1CS-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #1 | light | label | 1CS-0 | line height | 20px | 20px | match |  |
| Sizes #1 | light | label | 1CS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #2 | light | root | 1CT-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #2 | light | control | 1CU-0 | width | 32px | `var(--tq-space-8)` | match |  |
| Sizes #2 | light | control | 1CU-0 | height | 20px | `var(--tq-space-5)` | match |  |
| Sizes #2 | light | control | 1CU-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #2 | light | control | 1CU-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #2 | light | control | 1CU-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Sizes #2 | light | control | 1CU-0 | outline | none | none | match |  |
| Sizes #2 | light | thumb | 1CV-0 | size | 12px | `var(--tq-space-3)` | match |  |
| Sizes #2 | light | thumb | 1CV-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| Sizes #2 | light | thumb | 1CV-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #2 | light | thumb | 1CV-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Sizes #2 | light | thumb | 1CV-0 | x in control | 16px | justifyContent end = 16px | match |  |
| Sizes #2 | light | label | 1CW-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #2 | light | label | 1CW-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #2 | light | label | 1CW-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #2 | light | label | 1CW-0 | line height | 20px | 20px | match |  |
| Sizes #2 | light | label | 1CW-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #3 | light | root | 1D0-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #3 | light | control | 1D1-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Sizes #3 | light | control | 1D1-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Sizes #3 | light | control | 1D1-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #3 | light | control | 1D1-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #3 | light | control | 1D1-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Sizes #3 | light | control | 1D1-0 | outline | none | none | match |  |
| Sizes #3 | light | thumb | 1D2-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #3 | light | thumb | 1D2-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Sizes #3 | light | thumb | 1D2-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #3 | light | thumb | 1D2-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Sizes #3 | light | thumb | 1D2-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Sizes #3 | light | label | 1D3-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #3 | light | label | 1D3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #3 | light | label | 1D3-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #3 | light | label | 1D3-0 | line height | 24px | 24px | match |  |
| Sizes #3 | light | label | 1D3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #4 | light | root | 1D4-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #4 | light | control | 1D5-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Sizes #4 | light | control | 1D5-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Sizes #4 | light | control | 1D5-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #4 | light | control | 1D5-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #4 | light | control | 1D5-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Sizes #4 | light | control | 1D5-0 | outline | none | none | match |  |
| Sizes #4 | light | thumb | 1D6-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #4 | light | thumb | 1D6-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| Sizes #4 | light | thumb | 1D6-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #4 | light | thumb | 1D6-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Sizes #4 | light | thumb | 1D6-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Sizes #4 | light | label | 1D7-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #4 | light | label | 1D7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #4 | light | label | 1D7-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #4 | light | label | 1D7-0 | line height | 24px | 24px | match |  |
| Sizes #4 | light | label | 1D7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #5 | light | root | 1DB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #5 | light | control | 1DC-0 | width | 48px | `var(--tq-space-12)` | match |  |
| Sizes #5 | light | control | 1DC-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Sizes #5 | light | control | 1DC-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #5 | light | control | 1DC-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #5 | light | control | 1DC-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Sizes #5 | light | control | 1DC-0 | outline | none | none | match |  |
| Sizes #5 | light | thumb | 1DD-0 | size | 24px | `var(--tq-space-6)` | match |  |
| Sizes #5 | light | thumb | 1DD-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Sizes #5 | light | thumb | 1DD-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #5 | light | thumb | 1DD-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Sizes #5 | light | thumb | 1DD-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Sizes #5 | light | label | 1DE-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #5 | light | label | 1DE-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Sizes #5 | light | label | 1DE-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #5 | light | label | 1DE-0 | line height | 32px | 32px | match |  |
| Sizes #5 | light | label | 1DE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #6 | light | root | 1DF-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #6 | light | control | 1DG-0 | width | 48px | `var(--tq-space-12)` | match |  |
| Sizes #6 | light | control | 1DG-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Sizes #6 | light | control | 1DG-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #6 | light | control | 1DG-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #6 | light | control | 1DG-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Sizes #6 | light | control | 1DG-0 | outline | none | none | match |  |
| Sizes #6 | light | thumb | 1DH-0 | size | 24px | `var(--tq-space-6)` | match |  |
| Sizes #6 | light | thumb | 1DH-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-fg)` | match |  |
| Sizes #6 | light | thumb | 1DH-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #6 | light | thumb | 1DH-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Sizes #6 | light | thumb | 1DH-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Sizes #6 | light | label | 1DI-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #6 | light | label | 1DI-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Sizes #6 | light | label | 1DI-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #6 | light | label | 1DI-0 | line height | 32px | 32px | match |  |
| Sizes #6 | light | label | 1DI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InField | light | field root | 1EN-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| InField | light | root | 1EO-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| InField | light | control | 1EP-0 | width | 40px | `var(--tq-space-10)` | match |  |
| InField | light | control | 1EP-0 | height | 24px | `var(--tq-space-6)` | match |  |
| InField | light | control | 1EP-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| InField | light | control | 1EP-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| InField | light | control | 1EP-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| InField | light | control | 1EP-0 | outline color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| InField | light | control | 1EP-0 | outline width | 1px | 1px | match |  |
| InField | light | control | 1EP-0 | outline offset | 2px | 2px | match |  |
| InField | light | thumb | 1EQ-0 | size | 16px | `var(--tq-space-4)` | match |  |
| InField | light | thumb | 1EQ-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| InField | light | thumb | 1EQ-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| InField | light | thumb | 1EQ-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| InField | light | thumb | 1EQ-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| InField | light | label | 1ER-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| InField | light | label | 1ER-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| InField | light | label | 1ER-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| InField | light | label | 1ER-0 | line height | 24px | 24px | match |  |
| InField | light | label | 1ER-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InField | light | helper-text | 1ES-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| InField | light | helper-text | 1ES-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| InField | light | helper-text | 1ES-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| InField | light | helper-text | 1ES-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| InField | light | error-text | 1ET-0 | color | oklch(0.44 0.1784 25) | `var(--tq-color-status-negative-fg)` | match |  |
| InField | light | error-text | 1ET-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| InField | light | error-text | 1ET-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| InField | light | error-text | 1ET-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |

## Dark

| Story and checkpoint | Mode | Part | Paper node | Property | Code value | Paper value | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Default | dark | root | 1K5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Default | dark | control | 1K7-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Default | dark | control | 1K7-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Default | dark | control | 1K7-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Default | dark | control | 1K7-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Default | dark | control | 1K7-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Default | dark | control | 1K7-0 | outline | none | none | match |  |
| Default | dark | thumb | 1K8-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Default | dark | thumb | 1K8-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Default | dark | thumb | 1K8-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Default | dark | thumb | 1K8-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Default | dark | thumb | 1K8-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Default | dark | label | 1K6-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Default | dark | label | 1K6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Default | dark | label | 1K6-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Default | dark | label | 1K6-0 | line height | 24px | 24px | match |  |
| Default | dark | label | 1K6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover | dark | root | 1JQ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover | dark | control | 1JS-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Hover | dark | control | 1JS-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Hover | dark | control | 1JS-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Hover | dark | control | 1JS-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Hover | dark | control | 1JS-0 | background | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Hover | dark | control | 1JS-0 | outline | none | none | match |  |
| Hover | dark | thumb | 1JT-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Hover | dark | thumb | 1JT-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Hover | dark | thumb | 1JT-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Hover | dark | thumb | 1JT-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Hover | dark | thumb | 1JT-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Hover | dark | label | 1JR-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover | dark | label | 1JR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover | dark | label | 1JR-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Hover | dark | label | 1JR-0 | line height | 24px | 24px | match |  |
| Hover | dark | label | 1JR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible | dark | root | 1JB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible | dark | control | 1JD-0 | width | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible | dark | control | 1JD-0 | height | 24px | `var(--tq-space-6)` | match |  |
| FocusVisible | dark | control | 1JD-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| FocusVisible | dark | control | 1JD-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| FocusVisible | dark | control | 1JD-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| FocusVisible | dark | control | 1JD-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible | dark | control | 1JD-0 | outline width | 2px | 2px | match |  |
| FocusVisible | dark | control | 1JD-0 | outline offset | 2px | 2px | match |  |
| FocusVisible | dark | thumb | 1JE-0 | size | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible | dark | thumb | 1JE-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| FocusVisible | dark | thumb | 1JE-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| FocusVisible | dark | thumb | 1JE-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| FocusVisible | dark | thumb | 1JE-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| FocusVisible | dark | label | 1JC-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| FocusVisible | dark | label | 1JC-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible | dark | label | 1JC-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| FocusVisible | dark | label | 1JC-0 | line height | 24px | 24px | match |  |
| FocusVisible | dark | label | 1JC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid | dark | root | 1IW-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid | dark | control | 1IY-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Invalid | dark | control | 1IY-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Invalid | dark | control | 1IY-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Invalid | dark | control | 1IY-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Invalid | dark | control | 1IY-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Invalid | dark | control | 1IY-0 | outline color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| Invalid | dark | control | 1IY-0 | outline width | 1px | 1px | match |  |
| Invalid | dark | control | 1IY-0 | outline offset | 2px | 2px | match |  |
| Invalid | dark | thumb | 1IZ-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid | dark | thumb | 1IZ-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Invalid | dark | thumb | 1IZ-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Invalid | dark | thumb | 1IZ-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Invalid | dark | thumb | 1IZ-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Invalid | dark | label | 1IX-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Invalid | dark | label | 1IX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid | dark | label | 1IX-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid | dark | label | 1IX-0 | line height | 24px | 24px | match |  |
| Invalid | dark | label | 1IX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InvalidFocusVisible | dark | root | 1IH-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| InvalidFocusVisible | dark | control | 1IJ-0 | width | 40px | `var(--tq-space-10)` | match |  |
| InvalidFocusVisible | dark | control | 1IJ-0 | height | 24px | `var(--tq-space-6)` | match |  |
| InvalidFocusVisible | dark | control | 1IJ-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| InvalidFocusVisible | dark | control | 1IJ-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| InvalidFocusVisible | dark | control | 1IJ-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| InvalidFocusVisible | dark | control | 1IJ-0 | outline color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| InvalidFocusVisible | dark | control | 1IJ-0 | outline width | 2px | 2px | match |  |
| InvalidFocusVisible | dark | control | 1IJ-0 | outline offset | 2px | 2px | match |  |
| InvalidFocusVisible | dark | thumb | 1IK-0 | size | 16px | `var(--tq-space-4)` | match |  |
| InvalidFocusVisible | dark | thumb | 1IK-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| InvalidFocusVisible | dark | thumb | 1IK-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| InvalidFocusVisible | dark | thumb | 1IK-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| InvalidFocusVisible | dark | thumb | 1IK-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| InvalidFocusVisible | dark | label | 1II-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| InvalidFocusVisible | dark | label | 1II-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| InvalidFocusVisible | dark | label | 1II-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| InvalidFocusVisible | dark | label | 1II-0 | line height | 24px | 24px | match |  |
| InvalidFocusVisible | dark | label | 1II-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Disabled | dark | root | 1I2-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Disabled | dark | control | 1I4-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Disabled | dark | control | 1I4-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Disabled | dark | control | 1I4-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Disabled | dark | control | 1I4-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Disabled | dark | control | 1I4-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-disabled-dark)` | match |  |
| Disabled | dark | control | 1I4-0 | outline | none | none | match |  |
| Disabled | dark | thumb | 1I5-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Disabled | dark | thumb | 1I5-0 | background | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Disabled | dark | thumb | 1I5-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Disabled | dark | thumb | 1I5-0 | shadow | none | none | match |  |
| Disabled | dark | thumb | 1I5-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Disabled | dark | label | 1I3-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Disabled | dark | label | 1I3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Disabled | dark | label | 1I3-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Disabled | dark | label | 1I3-0 | line height | 24px | 24px | match |  |
| Disabled | dark | label | 1I3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | root | 1HN-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | control | 1HP-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | control | 1HP-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | control | 1HP-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | control | 1HP-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | control | 1HP-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | control | 1HP-0 | outline | none | none | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | thumb | 1HQ-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | thumb | 1HQ-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | thumb | 1HQ-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | thumb | 1HQ-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | thumb | 1HQ-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | label | 1HO-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | label | 1HO-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | label | 1HO-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | label | 1HO-0 | line height | 24px | 24px | match |  |
| Invalid + {"invalid": false, "readOnly": true} (synthesized cell, off/readonly) | dark | label | 1HO-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Checked | dark | root | 1JZ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Checked | dark | control | 1K1-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Checked | dark | control | 1K1-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Checked | dark | control | 1K1-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Checked | dark | control | 1K1-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Checked | dark | control | 1K1-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Checked | dark | control | 1K1-0 | outline | none | none | match |  |
| Checked | dark | thumb | 1K2-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Checked | dark | thumb | 1K2-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| Checked | dark | thumb | 1K2-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Checked | dark | thumb | 1K2-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Checked | dark | thumb | 1K2-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Checked | dark | label | 1K0-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Checked | dark | label | 1K0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Checked | dark | label | 1K0-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Checked | dark | label | 1K0-0 | line height | 24px | 24px | match |  |
| Checked | dark | label | 1K0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| CheckedHover | dark | root | 1JK-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| CheckedHover | dark | control | 1JM-0 | width | 40px | `var(--tq-space-10)` | match |  |
| CheckedHover | dark | control | 1JM-0 | height | 24px | `var(--tq-space-6)` | match |  |
| CheckedHover | dark | control | 1JM-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| CheckedHover | dark | control | 1JM-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| CheckedHover | dark | control | 1JM-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-action-primary-bg-hover-dark)` | match |  |
| CheckedHover | dark | control | 1JM-0 | outline | none | none | match |  |
| CheckedHover | dark | thumb | 1JN-0 | size | 16px | `var(--tq-space-4)` | match |  |
| CheckedHover | dark | thumb | 1JN-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| CheckedHover | dark | thumb | 1JN-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| CheckedHover | dark | thumb | 1JN-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| CheckedHover | dark | thumb | 1JN-0 | x in control | 20px | justifyContent end = 20px | match |  |
| CheckedHover | dark | label | 1JL-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| CheckedHover | dark | label | 1JL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| CheckedHover | dark | label | 1JL-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| CheckedHover | dark | label | 1JL-0 | line height | 24px | 24px | match |  |
| CheckedHover | dark | label | 1JL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Checked + tab | dark | root | 1J5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Checked + tab | dark | control | 1J7-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Checked + tab | dark | control | 1J7-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Checked + tab | dark | control | 1J7-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Checked + tab | dark | control | 1J7-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Checked + tab | dark | control | 1J7-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Checked + tab | dark | control | 1J7-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| Checked + tab | dark | control | 1J7-0 | outline width | 2px | 2px | match |  |
| Checked + tab | dark | control | 1J7-0 | outline offset | 2px | 2px | match |  |
| Checked + tab | dark | thumb | 1J8-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Checked + tab | dark | thumb | 1J8-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| Checked + tab | dark | thumb | 1J8-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Checked + tab | dark | thumb | 1J8-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Checked + tab | dark | thumb | 1J8-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Checked + tab | dark | label | 1J6-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Checked + tab | dark | label | 1J6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Checked + tab | dark | label | 1J6-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Checked + tab | dark | label | 1J6-0 | line height | 24px | 24px | match |  |
| Checked + tab | dark | label | 1J6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Checked + {"invalid": true} | dark | root | 1IQ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Checked + {"invalid": true} | dark | control | 1IS-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Checked + {"invalid": true} | dark | control | 1IS-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Checked + {"invalid": true} | dark | control | 1IS-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Checked + {"invalid": true} | dark | control | 1IS-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Checked + {"invalid": true} | dark | control | 1IS-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Checked + {"invalid": true} | dark | control | 1IS-0 | outline color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| Checked + {"invalid": true} | dark | control | 1IS-0 | outline width | 1px | 1px | match |  |
| Checked + {"invalid": true} | dark | control | 1IS-0 | outline offset | 2px | 2px | match |  |
| Checked + {"invalid": true} | dark | thumb | 1IT-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Checked + {"invalid": true} | dark | thumb | 1IT-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| Checked + {"invalid": true} | dark | thumb | 1IT-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Checked + {"invalid": true} | dark | thumb | 1IT-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Checked + {"invalid": true} | dark | thumb | 1IT-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Checked + {"invalid": true} | dark | label | 1IR-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Checked + {"invalid": true} | dark | label | 1IR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Checked + {"invalid": true} | dark | label | 1IR-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Checked + {"invalid": true} | dark | label | 1IR-0 | line height | 24px | 24px | match |  |
| Checked + {"invalid": true} | dark | label | 1IR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Checked + {"invalid": true} + tab | dark | root | 1IB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Checked + {"invalid": true} + tab | dark | control | 1ID-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Checked + {"invalid": true} + tab | dark | control | 1ID-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Checked + {"invalid": true} + tab | dark | control | 1ID-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Checked + {"invalid": true} + tab | dark | control | 1ID-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Checked + {"invalid": true} + tab | dark | control | 1ID-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Checked + {"invalid": true} + tab | dark | control | 1ID-0 | outline color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| Checked + {"invalid": true} + tab | dark | control | 1ID-0 | outline width | 2px | 2px | match |  |
| Checked + {"invalid": true} + tab | dark | control | 1ID-0 | outline offset | 2px | 2px | match |  |
| Checked + {"invalid": true} + tab | dark | thumb | 1IE-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Checked + {"invalid": true} + tab | dark | thumb | 1IE-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| Checked + {"invalid": true} + tab | dark | thumb | 1IE-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Checked + {"invalid": true} + tab | dark | thumb | 1IE-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Checked + {"invalid": true} + tab | dark | thumb | 1IE-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Checked + {"invalid": true} + tab | dark | label | 1IC-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Checked + {"invalid": true} + tab | dark | label | 1IC-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Checked + {"invalid": true} + tab | dark | label | 1IC-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Checked + {"invalid": true} + tab | dark | label | 1IC-0 | line height | 24px | 24px | match |  |
| Checked + {"invalid": true} + tab | dark | label | 1IC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| DisabledChecked | dark | root | 1HW-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| DisabledChecked | dark | control | 1HY-0 | width | 40px | `var(--tq-space-10)` | match |  |
| DisabledChecked | dark | control | 1HY-0 | height | 24px | `var(--tq-space-6)` | match |  |
| DisabledChecked | dark | control | 1HY-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| DisabledChecked | dark | control | 1HY-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| DisabledChecked | dark | control | 1HY-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-disabled-dark)` | match |  |
| DisabledChecked | dark | control | 1HY-0 | outline | none | none | match |  |
| DisabledChecked | dark | thumb | 1HZ-0 | size | 16px | `var(--tq-space-4)` | match |  |
| DisabledChecked | dark | thumb | 1HZ-0 | background | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| DisabledChecked | dark | thumb | 1HZ-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| DisabledChecked | dark | thumb | 1HZ-0 | shadow | none | none | match |  |
| DisabledChecked | dark | thumb | 1HZ-0 | x in control | 20px | justifyContent end = 20px | match |  |
| DisabledChecked | dark | label | 1HX-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| DisabledChecked | dark | label | 1HX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| DisabledChecked | dark | label | 1HX-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| DisabledChecked | dark | label | 1HX-0 | line height | 24px | 24px | match |  |
| DisabledChecked | dark | label | 1HX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ReadOnly | dark | root | 1HH-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ReadOnly | dark | control | 1HJ-0 | width | 40px | `var(--tq-space-10)` | match |  |
| ReadOnly | dark | control | 1HJ-0 | height | 24px | `var(--tq-space-6)` | match |  |
| ReadOnly | dark | control | 1HJ-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| ReadOnly | dark | control | 1HJ-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| ReadOnly | dark | control | 1HJ-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| ReadOnly | dark | control | 1HJ-0 | outline | none | none | match |  |
| ReadOnly | dark | thumb | 1HK-0 | size | 16px | `var(--tq-space-4)` | match |  |
| ReadOnly | dark | thumb | 1HK-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| ReadOnly | dark | thumb | 1HK-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| ReadOnly | dark | thumb | 1HK-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| ReadOnly | dark | thumb | 1HK-0 | x in control | 20px | justifyContent end = 20px | match |  |
| ReadOnly | dark | label | 1HI-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| ReadOnly | dark | label | 1HI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ReadOnly | dark | label | 1HI-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| ReadOnly | dark | label | 1HI-0 | line height | 24px | 24px | match |  |
| ReadOnly | dark | label | 1HI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #1 | dark | root | 1H5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #1 | dark | control | 1H7-0 | width | 32px | `var(--tq-space-8)` | match |  |
| Sizes #1 | dark | control | 1H7-0 | height | 20px | `var(--tq-space-5)` | match |  |
| Sizes #1 | dark | control | 1H7-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #1 | dark | control | 1H7-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #1 | dark | control | 1H7-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Sizes #1 | dark | control | 1H7-0 | outline | none | none | match |  |
| Sizes #1 | dark | thumb | 1H8-0 | size | 12px | `var(--tq-space-3)` | match |  |
| Sizes #1 | dark | thumb | 1H8-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Sizes #1 | dark | thumb | 1H8-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #1 | dark | thumb | 1H8-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Sizes #1 | dark | thumb | 1H8-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Sizes #1 | dark | label | 1H6-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #1 | dark | label | 1H6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #1 | dark | label | 1H6-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #1 | dark | label | 1H6-0 | line height | 20px | 20px | match |  |
| Sizes #1 | dark | label | 1H6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #2 | dark | root | 1H1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #2 | dark | control | 1H3-0 | width | 32px | `var(--tq-space-8)` | match |  |
| Sizes #2 | dark | control | 1H3-0 | height | 20px | `var(--tq-space-5)` | match |  |
| Sizes #2 | dark | control | 1H3-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #2 | dark | control | 1H3-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #2 | dark | control | 1H3-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Sizes #2 | dark | control | 1H3-0 | outline | none | none | match |  |
| Sizes #2 | dark | thumb | 1H4-0 | size | 12px | `var(--tq-space-3)` | match |  |
| Sizes #2 | dark | thumb | 1H4-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| Sizes #2 | dark | thumb | 1H4-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #2 | dark | thumb | 1H4-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Sizes #2 | dark | thumb | 1H4-0 | x in control | 16px | justifyContent end = 16px | match |  |
| Sizes #2 | dark | label | 1H2-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #2 | dark | label | 1H2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #2 | dark | label | 1H2-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #2 | dark | label | 1H2-0 | line height | 20px | 20px | match |  |
| Sizes #2 | dark | label | 1H2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #3 | dark | root | 1GU-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #3 | dark | control | 1GW-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Sizes #3 | dark | control | 1GW-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Sizes #3 | dark | control | 1GW-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #3 | dark | control | 1GW-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #3 | dark | control | 1GW-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Sizes #3 | dark | control | 1GW-0 | outline | none | none | match |  |
| Sizes #3 | dark | thumb | 1GX-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #3 | dark | thumb | 1GX-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Sizes #3 | dark | thumb | 1GX-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #3 | dark | thumb | 1GX-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Sizes #3 | dark | thumb | 1GX-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Sizes #3 | dark | label | 1GV-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #3 | dark | label | 1GV-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #3 | dark | label | 1GV-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #3 | dark | label | 1GV-0 | line height | 24px | 24px | match |  |
| Sizes #3 | dark | label | 1GV-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #4 | dark | root | 1GQ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #4 | dark | control | 1GS-0 | width | 40px | `var(--tq-space-10)` | match |  |
| Sizes #4 | dark | control | 1GS-0 | height | 24px | `var(--tq-space-6)` | match |  |
| Sizes #4 | dark | control | 1GS-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #4 | dark | control | 1GS-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #4 | dark | control | 1GS-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Sizes #4 | dark | control | 1GS-0 | outline | none | none | match |  |
| Sizes #4 | dark | thumb | 1GT-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #4 | dark | thumb | 1GT-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| Sizes #4 | dark | thumb | 1GT-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #4 | dark | thumb | 1GT-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Sizes #4 | dark | thumb | 1GT-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Sizes #4 | dark | label | 1GR-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #4 | dark | label | 1GR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #4 | dark | label | 1GR-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #4 | dark | label | 1GR-0 | line height | 24px | 24px | match |  |
| Sizes #4 | dark | label | 1GR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #5 | dark | root | 1GJ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #5 | dark | control | 1GL-0 | width | 48px | `var(--tq-space-12)` | match |  |
| Sizes #5 | dark | control | 1GL-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Sizes #5 | dark | control | 1GL-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #5 | dark | control | 1GL-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #5 | dark | control | 1GL-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Sizes #5 | dark | control | 1GL-0 | outline | none | none | match |  |
| Sizes #5 | dark | thumb | 1GM-0 | size | 24px | `var(--tq-space-6)` | match |  |
| Sizes #5 | dark | thumb | 1GM-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Sizes #5 | dark | thumb | 1GM-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #5 | dark | thumb | 1GM-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Sizes #5 | dark | thumb | 1GM-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| Sizes #5 | dark | label | 1GK-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #5 | dark | label | 1GK-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Sizes #5 | dark | label | 1GK-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #5 | dark | label | 1GK-0 | line height | 32px | 32px | match |  |
| Sizes #5 | dark | label | 1GK-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #6 | dark | root | 1GF-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #6 | dark | control | 1GH-0 | width | 48px | `var(--tq-space-12)` | match |  |
| Sizes #6 | dark | control | 1GH-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Sizes #6 | dark | control | 1GH-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Sizes #6 | dark | control | 1GH-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| Sizes #6 | dark | control | 1GH-0 | background | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Sizes #6 | dark | control | 1GH-0 | outline | none | none | match |  |
| Sizes #6 | dark | thumb | 1GI-0 | size | 24px | `var(--tq-space-6)` | match |  |
| Sizes #6 | dark | thumb | 1GI-0 | background | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-fg-dark)` | match |  |
| Sizes #6 | dark | thumb | 1GI-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| Sizes #6 | dark | thumb | 1GI-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| Sizes #6 | dark | thumb | 1GI-0 | x in control | 20px | justifyContent end = 20px | match |  |
| Sizes #6 | dark | label | 1GG-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #6 | dark | label | 1GG-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Sizes #6 | dark | label | 1GG-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #6 | dark | label | 1GG-0 | line height | 32px | 32px | match |  |
| Sizes #6 | dark | label | 1GG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InField | dark | field root | 1F3-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| InField | dark | root | 1F6-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| InField | dark | control | 1F8-0 | width | 40px | `var(--tq-space-10)` | match |  |
| InField | dark | control | 1F8-0 | height | 24px | `var(--tq-space-6)` | match |  |
| InField | dark | control | 1F8-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| InField | dark | control | 1F8-0 | radius | 9999px | `var(--tq-radius-full)` | match | 9999px = radius.full |
| InField | dark | control | 1F8-0 | background | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| InField | dark | control | 1F8-0 | outline color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| InField | dark | control | 1F8-0 | outline width | 1px | 1px | match |  |
| InField | dark | control | 1F8-0 | outline offset | 2px | 2px | match |  |
| InField | dark | thumb | 1F9-0 | size | 16px | `var(--tq-space-4)` | match |  |
| InField | dark | thumb | 1F9-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| InField | dark | thumb | 1F9-0 | radius | 9999px | `var(--tq-radius-full)` | match |  |
| InField | dark | thumb | 1F9-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D |
| InField | dark | thumb | 1F9-0 | x in control | 4px | justifyContent flex-start = 4px | match |  |
| InField | dark | label | 1F7-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| InField | dark | label | 1F7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| InField | dark | label | 1F7-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| InField | dark | label | 1F7-0 | line height | 24px | 24px | match |  |
| InField | dark | label | 1F7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InField | dark | helper-text | 1F5-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| InField | dark | helper-text | 1F5-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| InField | dark | helper-text | 1F5-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| InField | dark | helper-text | 1F5-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| InField | dark | error-text | 1F4-0 | color | oklch(0.9 0.0519 25) | `var(--tq-color-status-negative-fg-dark)` | match |  |
| InField | dark | error-text | 1F4-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| InField | dark | error-text | 1F4-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| InField | dark | error-text | 1F4-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
