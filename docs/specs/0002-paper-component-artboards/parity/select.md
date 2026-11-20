# Parity table · Select

Spec [0002](../index.md), AC-6. Code at `e7dce45` (measured in Storybook at `5b402ec`, same `packages/react`), Paper file `01M7R4TP595GEKCEE8SHQCTJMX`, page `p-4-0`, artboards `1KQ-0` (light) and `1ZP-0` (`Select · Dark`). Code values are Storybook computed styles; Paper values are the authored styles from `get_jsx`, with each `var(--tq-…)` resolved through the mode's `tokens.json` before comparing (_Normalization_ in the spec).

## Light

| Story and checkpoint | Mode | Part | Paper node | Property | Code value | Paper value | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Invalid + {"invalid": false} | light | root | 1N5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid + {"invalid": false} | light | root | 1N5-0 | width | 320px | 320px | match | = 320px |
| Invalid + {"invalid": false} | light | label | 1N6-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Invalid + {"invalid": false} | light | label | 1N6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false} | light | label | 1N6-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Invalid + {"invalid": false} | light | label | 1N6-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false} | light | label | 1N6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | y | 29px | label h + root gap | match | = 29px |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | border width | 1px | 1px | match |  |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | outline | none | none | match |  |
| Invalid + {"invalid": false} | light | trigger | 1N7-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Invalid + {"invalid": false} | light | value text | 1N8-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Invalid + {"invalid": false} | light | value text | 1N8-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false} | light | value text | 1N8-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid + {"invalid": false} | light | value text | 1N8-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false} | light | value text | 1N8-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false} | light | value text | 1N8-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Invalid + {"invalid": false} | light | value text | 1N8-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Invalid + {"invalid": false} | light | indicator | 1NA-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Invalid + {"invalid": false} | light | indicator | 1NA-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid + {"invalid": false} | light | indicator | 1NA-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Invalid + {"invalid": false} | light | clear trigger | - | present | absent | absent | match |  |
| WithValue | light | root | 1NF-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue | light | root | 1NF-0 | width | 320px | 320px | match | = 320px |
| WithValue | light | label | 1NG-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue | light | label | 1NG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue | light | label | 1NG-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue | light | label | 1NG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue | light | label | 1NG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue | light | trigger | 1NH-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue | light | trigger | 1NH-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue | light | trigger | 1NH-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue | light | trigger | 1NH-0 | border width | 1px | 1px | match |  |
| WithValue | light | trigger | 1NH-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| WithValue | light | trigger | 1NH-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue | light | trigger | 1NH-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| WithValue | light | trigger | 1NH-0 | outline | none | none | match |  |
| WithValue | light | trigger | 1NH-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue | light | value text | 1NI-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue | light | value text | 1NI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue | light | value text | 1NI-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue | light | value text | 1NI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue | light | value text | 1NI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue | light | value text | 1NI-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue | light | value text | 1NI-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue | light | indicator | 1NK-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue | light | indicator | 1NK-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue | light | indicator | 1NK-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithValue | light | clear trigger | - | present | absent | absent | match |  |
| Hover | light | root | 1NS-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover | light | root | 1NS-0 | width | 320px | 320px | match | = 320px |
| Hover | light | label | 1NT-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover | light | label | 1NT-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover | light | label | 1NT-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover | light | label | 1NT-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover | light | label | 1NT-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover | light | trigger | 1NU-0 | y | 29px | label h + root gap | match | = 29px |
| Hover | light | trigger | 1NU-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover | light | trigger | 1NU-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Hover | light | trigger | 1NU-0 | border width | 1px | 1px | match |  |
| Hover | light | trigger | 1NU-0 | border color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Hover | light | trigger | 1NU-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover | light | trigger | 1NU-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Hover | light | trigger | 1NU-0 | outline | none | none | match |  |
| Hover | light | trigger | 1NU-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Hover | light | value text | 1NV-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Hover | light | value text | 1NV-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover | light | value text | 1NV-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Hover | light | value text | 1NV-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover | light | value text | 1NV-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover | light | value text | 1NV-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Hover | light | value text | 1NV-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Hover | light | indicator | 1NX-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Hover | light | indicator | 1NX-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Hover | light | indicator | 1NX-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Hover | light | clear trigger | - | present | absent | absent | match |  |
| WithValue + hover-trigger | light | root | 1O2-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + hover-trigger | light | root | 1O2-0 | width | 320px | 320px | match | = 320px |
| WithValue + hover-trigger | light | label | 1O3-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + hover-trigger | light | label | 1O3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + hover-trigger | light | label | 1O3-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + hover-trigger | light | label | 1O3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + hover-trigger | light | label | 1O3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + hover-trigger | light | trigger | 1O4-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + hover-trigger | light | trigger | 1O4-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + hover-trigger | light | trigger | 1O4-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + hover-trigger | light | trigger | 1O4-0 | border width | 1px | 1px | match |  |
| WithValue + hover-trigger | light | trigger | 1O4-0 | border color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithValue + hover-trigger | light | trigger | 1O4-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + hover-trigger | light | trigger | 1O4-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| WithValue + hover-trigger | light | trigger | 1O4-0 | outline | none | none | match |  |
| WithValue + hover-trigger | light | trigger | 1O4-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue + hover-trigger | light | value text | 1O5-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + hover-trigger | light | value text | 1O5-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + hover-trigger | light | value text | 1O5-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + hover-trigger | light | value text | 1O5-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + hover-trigger | light | value text | 1O5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + hover-trigger | light | value text | 1O5-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + hover-trigger | light | value text | 1O5-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue + hover-trigger | light | indicator | 1O7-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + hover-trigger | light | indicator | 1O7-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + hover-trigger | light | indicator | 1O7-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithValue + hover-trigger | light | clear trigger | - | present | absent | absent | match |  |
| FocusVisible | light | root | 1OF-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible | light | root | 1OF-0 | width | 320px | 320px | match | = 320px |
| FocusVisible | light | label | 1OG-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| FocusVisible | light | label | 1OG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible | light | label | 1OG-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible | light | label | 1OG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible | light | label | 1OG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible | light | trigger | 1OH-0 | y | 29px | label h + root gap | match | = 29px |
| FocusVisible | light | trigger | 1OH-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible | light | trigger | 1OH-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| FocusVisible | light | trigger | 1OH-0 | border width | 1px | 1px | match |  |
| FocusVisible | light | trigger | 1OH-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| FocusVisible | light | trigger | 1OH-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible | light | trigger | 1OH-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| FocusVisible | light | trigger | 1OH-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible | light | trigger | 1OH-0 | outline width | 2px | 2px | match |  |
| FocusVisible | light | trigger | 1OH-0 | outline offset | 0px | 0px | match |  |
| FocusVisible | light | trigger | 1OH-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| FocusVisible | light | value text | 1OI-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| FocusVisible | light | value text | 1OI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible | light | value text | 1OI-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| FocusVisible | light | value text | 1OI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible | light | value text | 1OI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible | light | value text | 1OI-0 | x in trigger | 13px | border + padding left | match | = 13px |
| FocusVisible | light | value text | 1OI-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| FocusVisible | light | indicator | 1OK-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| FocusVisible | light | indicator | 1OK-0 | size | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible | light | indicator | 1OK-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| FocusVisible | light | clear trigger | - | present | absent | absent | match |  |
| WithValue + tab | light | root | 1OP-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + tab | light | root | 1OP-0 | width | 320px | 320px | match | = 320px |
| WithValue + tab | light | label | 1OQ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + tab | light | label | 1OQ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + tab | light | label | 1OQ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + tab | light | label | 1OQ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + tab | light | label | 1OQ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + tab | light | trigger | 1OR-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + tab | light | trigger | 1OR-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + tab | light | trigger | 1OR-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + tab | light | trigger | 1OR-0 | border width | 1px | 1px | match |  |
| WithValue + tab | light | trigger | 1OR-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| WithValue + tab | light | trigger | 1OR-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + tab | light | trigger | 1OR-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| WithValue + tab | light | trigger | 1OR-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| WithValue + tab | light | trigger | 1OR-0 | outline width | 2px | 2px | match |  |
| WithValue + tab | light | trigger | 1OR-0 | outline offset | 0px | 0px | match |  |
| WithValue + tab | light | trigger | 1OR-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue + tab | light | value text | 1OS-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + tab | light | value text | 1OS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + tab | light | value text | 1OS-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + tab | light | value text | 1OS-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + tab | light | value text | 1OS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + tab | light | value text | 1OS-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + tab | light | value text | 1OS-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue + tab | light | indicator | 1OU-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + tab | light | indicator | 1OU-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + tab | light | indicator | 1OU-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithValue + tab | light | clear trigger | - | present | absent | absent | match |  |
| Invalid | light | root | 1P3-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid | light | root | 1P3-0 | width | 320px | 320px | match | = 320px |
| Invalid | light | label | 1P4-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Invalid | light | label | 1P4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid | light | label | 1P4-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Invalid | light | label | 1P4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid | light | label | 1P4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid | light | trigger | 1P5-0 | y | 29px | label h + root gap | match | = 29px |
| Invalid | light | trigger | 1P5-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Invalid | light | trigger | 1P5-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Invalid | light | trigger | 1P5-0 | border width | 1px | 1px | match |  |
| Invalid | light | trigger | 1P5-0 | border color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| Invalid | light | trigger | 1P5-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Invalid | light | trigger | 1P5-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Invalid | light | trigger | 1P5-0 | outline | none | none | match |  |
| Invalid | light | trigger | 1P5-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Invalid | light | value text | 1P6-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Invalid | light | value text | 1P6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid | light | value text | 1P6-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid | light | value text | 1P6-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid | light | value text | 1P6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid | light | value text | 1P6-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Invalid | light | value text | 1P6-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Invalid | light | indicator | 1P8-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Invalid | light | indicator | 1P8-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid | light | indicator | 1P8-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Invalid | light | clear trigger | - | present | absent | absent | match |  |
| WithValue + {"invalid": true} | light | root | 1PD-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + {"invalid": true} | light | root | 1PD-0 | width | 320px | 320px | match | = 320px |
| WithValue + {"invalid": true} | light | label | 1PE-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + {"invalid": true} | light | label | 1PE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"invalid": true} | light | label | 1PE-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + {"invalid": true} | light | label | 1PE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"invalid": true} | light | label | 1PE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | border width | 1px | 1px | match |  |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | border color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | outline | none | none | match |  |
| WithValue + {"invalid": true} | light | trigger | 1PF-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue + {"invalid": true} | light | value text | 1PG-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + {"invalid": true} | light | value text | 1PG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"invalid": true} | light | value text | 1PG-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + {"invalid": true} | light | value text | 1PG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"invalid": true} | light | value text | 1PG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"invalid": true} | light | value text | 1PG-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + {"invalid": true} | light | value text | 1PG-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue + {"invalid": true} | light | indicator | 1PI-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + {"invalid": true} | light | indicator | 1PI-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + {"invalid": true} | light | indicator | 1PI-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithValue + {"invalid": true} | light | clear trigger | - | present | absent | absent | match |  |
| InvalidFocused | light | root | 1PQ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| InvalidFocused | light | root | 1PQ-0 | width | 320px | 320px | match | = 320px |
| InvalidFocused | light | label | 1PR-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| InvalidFocused | light | label | 1PR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| InvalidFocused | light | label | 1PR-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| InvalidFocused | light | label | 1PR-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| InvalidFocused | light | label | 1PR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InvalidFocused | light | trigger | 1PS-0 | y | 29px | label h + root gap | match | = 29px |
| InvalidFocused | light | trigger | 1PS-0 | height | 40px | `var(--tq-space-10)` | match |  |
| InvalidFocused | light | trigger | 1PS-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| InvalidFocused | light | trigger | 1PS-0 | border width | 1px | 1px | match |  |
| InvalidFocused | light | trigger | 1PS-0 | border color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| InvalidFocused | light | trigger | 1PS-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| InvalidFocused | light | trigger | 1PS-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| InvalidFocused | light | trigger | 1PS-0 | outline color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| InvalidFocused | light | trigger | 1PS-0 | outline width | 2px | 2px | match |  |
| InvalidFocused | light | trigger | 1PS-0 | outline offset | 0px | 0px | match |  |
| InvalidFocused | light | trigger | 1PS-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| InvalidFocused | light | value text | 1PT-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| InvalidFocused | light | value text | 1PT-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| InvalidFocused | light | value text | 1PT-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| InvalidFocused | light | value text | 1PT-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| InvalidFocused | light | value text | 1PT-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InvalidFocused | light | value text | 1PT-0 | x in trigger | 13px | border + padding left | match | = 13px |
| InvalidFocused | light | value text | 1PT-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| InvalidFocused | light | indicator | 1PV-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| InvalidFocused | light | indicator | 1PV-0 | size | 16px | `var(--tq-space-4)` | match |  |
| InvalidFocused | light | indicator | 1PV-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| InvalidFocused | light | clear trigger | - | present | absent | absent | match |  |
| WithValue + {"invalid": true} + tab | light | root | 1Q0-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + {"invalid": true} + tab | light | root | 1Q0-0 | width | 320px | 320px | match | = 320px |
| WithValue + {"invalid": true} + tab | light | label | 1Q1-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + {"invalid": true} + tab | light | label | 1Q1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"invalid": true} + tab | light | label | 1Q1-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + {"invalid": true} + tab | light | label | 1Q1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"invalid": true} + tab | light | label | 1Q1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | border width | 1px | 1px | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | border color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | outline color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | outline width | 2px | 2px | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | outline offset | 0px | 0px | match |  |
| WithValue + {"invalid": true} + tab | light | trigger | 1Q2-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue + {"invalid": true} + tab | light | value text | 1Q3-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + {"invalid": true} + tab | light | value text | 1Q3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"invalid": true} + tab | light | value text | 1Q3-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + {"invalid": true} + tab | light | value text | 1Q3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"invalid": true} + tab | light | value text | 1Q3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"invalid": true} + tab | light | value text | 1Q3-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + {"invalid": true} + tab | light | value text | 1Q3-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue + {"invalid": true} + tab | light | indicator | 1Q5-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + {"invalid": true} + tab | light | indicator | 1Q5-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + {"invalid": true} + tab | light | indicator | 1Q5-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithValue + {"invalid": true} + tab | light | clear trigger | - | present | absent | absent | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | root | 1QD-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | root | 1QD-0 | width | 320px | 320px | match | = 320px |
| Invalid + {"invalid": false, "disabled": true} | light | label | 1QE-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | label | 1QE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | label | 1QE-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | label | 1QE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false, "disabled": true} | light | label | 1QE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | y | 29px | label h + root gap | match | = 29px |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | border width | 1px | 1px | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | border color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-disabled)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | outline | none | none | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | trigger | 1QF-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Invalid + {"invalid": false, "disabled": true} | light | value text | 1QG-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | value text | 1QG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | value text | 1QG-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | value text | 1QG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false, "disabled": true} | light | value text | 1QG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | value text | 1QG-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Invalid + {"invalid": false, "disabled": true} | light | value text | 1QG-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Invalid + {"invalid": false, "disabled": true} | light | indicator | 1QI-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Invalid + {"invalid": false, "disabled": true} | light | indicator | 1QI-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | indicator | 1QI-0 | icon color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | light | clear trigger | - | present | absent | absent | match |  |
| Disabled | light | root | 1QN-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Disabled | light | root | 1QN-0 | width | 320px | 320px | match | = 320px |
| Disabled | light | label | 1QO-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Disabled | light | label | 1QO-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Disabled | light | label | 1QO-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Disabled | light | label | 1QO-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Disabled | light | label | 1QO-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Disabled | light | trigger | 1QP-0 | y | 29px | label h + root gap | match | = 29px |
| Disabled | light | trigger | 1QP-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Disabled | light | trigger | 1QP-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Disabled | light | trigger | 1QP-0 | border width | 1px | 1px | match |  |
| Disabled | light | trigger | 1QP-0 | border color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Disabled | light | trigger | 1QP-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Disabled | light | trigger | 1QP-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-disabled)` | match |  |
| Disabled | light | trigger | 1QP-0 | outline | none | none | match |  |
| Disabled | light | trigger | 1QP-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Disabled | light | value text | 1QQ-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Disabled | light | value text | 1QQ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Disabled | light | value text | 1QQ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Disabled | light | value text | 1QQ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Disabled | light | value text | 1QQ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Disabled | light | value text | 1QQ-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Disabled | light | value text | 1QQ-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Disabled | light | indicator | 1QS-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Disabled | light | indicator | 1QS-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Disabled | light | indicator | 1QS-0 | icon color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Disabled | light | clear trigger | - | present | absent | absent | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | root | 1R1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | root | 1R1-0 | width | 320px | 320px | match | = 320px |
| Invalid + {"invalid": false, "readOnly": true} | light | label | 1R2-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | label | 1R2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | label | 1R2-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | label | 1R2-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false, "readOnly": true} | light | label | 1R2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | y | 29px | label h + root gap | match | = 29px |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | border width | 1px | 1px | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-subtle)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | outline | none | none | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | trigger | 1R3-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Invalid + {"invalid": false, "readOnly": true} | light | value text | 1R4-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | value text | 1R4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | value text | 1R4-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | value text | 1R4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false, "readOnly": true} | light | value text | 1R4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | value text | 1R4-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Invalid + {"invalid": false, "readOnly": true} | light | value text | 1R4-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Invalid + {"invalid": false, "readOnly": true} | light | indicator | 1R6-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Invalid + {"invalid": false, "readOnly": true} | light | indicator | 1R6-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | indicator | 1R6-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | light | clear trigger | - | present | absent | absent | match |  |
| ReadOnly | light | root | 1RB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ReadOnly | light | root | 1RB-0 | width | 320px | 320px | match | = 320px |
| ReadOnly | light | label | 1RC-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| ReadOnly | light | label | 1RC-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ReadOnly | light | label | 1RC-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ReadOnly | light | label | 1RC-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ReadOnly | light | label | 1RC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ReadOnly | light | trigger | 1RD-0 | y | 29px | label h + root gap | match | = 29px |
| ReadOnly | light | trigger | 1RD-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ReadOnly | light | trigger | 1RD-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| ReadOnly | light | trigger | 1RD-0 | border width | 1px | 1px | match |  |
| ReadOnly | light | trigger | 1RD-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| ReadOnly | light | trigger | 1RD-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| ReadOnly | light | trigger | 1RD-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-subtle)` | match |  |
| ReadOnly | light | trigger | 1RD-0 | outline | none | none | match |  |
| ReadOnly | light | trigger | 1RD-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| ReadOnly | light | value text | 1RE-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| ReadOnly | light | value text | 1RE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ReadOnly | light | value text | 1RE-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| ReadOnly | light | value text | 1RE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ReadOnly | light | value text | 1RE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ReadOnly | light | value text | 1RE-0 | x in trigger | 13px | border + padding left | match | = 13px |
| ReadOnly | light | value text | 1RE-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| ReadOnly | light | indicator | 1RG-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| ReadOnly | light | indicator | 1RG-0 | size | 16px | `var(--tq-space-4)` | match |  |
| ReadOnly | light | indicator | 1RG-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| ReadOnly | light | clear trigger | - | present | absent | absent | match |  |
| Multiple | light | root | 1RO-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Multiple | light | root | 1RO-0 | width | 320px | 320px | match | = 320px |
| Multiple | light | label | 1RP-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Multiple | light | label | 1RP-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Multiple | light | label | 1RP-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Multiple | light | label | 1RP-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Multiple | light | label | 1RP-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Multiple | light | trigger | 1RQ-0 | y | 29px | label h + root gap | match | = 29px |
| Multiple | light | trigger | 1RQ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Multiple | light | trigger | 1RQ-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Multiple | light | trigger | 1RQ-0 | border width | 1px | 1px | match |  |
| Multiple | light | trigger | 1RQ-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Multiple | light | trigger | 1RQ-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Multiple | light | trigger | 1RQ-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Multiple | light | trigger | 1RQ-0 | outline | none | none | match |  |
| Multiple | light | trigger | 1RQ-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Multiple | light | value text | 1RR-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Multiple | light | value text | 1RR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Multiple | light | value text | 1RR-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Multiple | light | value text | 1RR-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Multiple | light | value text | 1RR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Multiple | light | value text | 1RR-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Multiple | light | value text | 1RR-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Multiple | light | indicator | 1RT-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Multiple | light | indicator | 1RT-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Multiple | light | indicator | 1RT-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Multiple | light | clear trigger | - | present | absent | absent | match |  |
| ClearableWithValue | light | root | 1RY-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ClearableWithValue | light | root | 1RY-0 | width | 320px | 320px | match | = 320px |
| ClearableWithValue | light | label | 1RZ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| ClearableWithValue | light | label | 1RZ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ClearableWithValue | light | label | 1RZ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ClearableWithValue | light | label | 1RZ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ClearableWithValue | light | label | 1RZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ClearableWithValue | light | trigger | 1S0-0 | y | 29px | label h + root gap | match | = 29px |
| ClearableWithValue | light | trigger | 1S0-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ClearableWithValue | light | trigger | 1S0-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| ClearableWithValue | light | trigger | 1S0-0 | border width | 1px | 1px | match |  |
| ClearableWithValue | light | trigger | 1S0-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| ClearableWithValue | light | trigger | 1S0-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| ClearableWithValue | light | trigger | 1S0-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| ClearableWithValue | light | trigger | 1S0-0 | outline | none | none | match |  |
| ClearableWithValue | light | trigger | 1S0-0 | padding right | 64px | padding right 12 + End 52 (code: absolute indicator) | match | = 64px |
| ClearableWithValue | light | value text | 1S1-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| ClearableWithValue | light | value text | 1S1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ClearableWithValue | light | value text | 1S1-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| ClearableWithValue | light | value text | 1S1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ClearableWithValue | light | value text | 1S1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ClearableWithValue | light | value text | 1S1-0 | x in trigger | 13px | border + padding left | match | = 13px |
| ClearableWithValue | light | value text | 1S1-0 | width | 242px | flex 1 = trigger w − border − padding − End | match | = 242px |
| ClearableWithValue | light | indicator | 1S6-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| ClearableWithValue | light | indicator | 1S6-0 | size | 16px | `var(--tq-space-4)` | match |  |
| ClearableWithValue | light | indicator | 1S6-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| ClearableWithValue | light | clear trigger | 1S3-0 | x in trigger | 264px | indicator x − End gap − 24 | match | = 264px |
| ClearableWithValue | light | clear trigger | 1S3-0 | size | 24px | `var(--tq-space-6)` | match |  |
| ClearableWithValue | light | clear trigger | 1S3-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| ClearableWithValue | light | clear trigger | 1S4-0 | icon size | 14px | 14px | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | root | 1SE-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | root | 1SE-0 | width | 320px | 320px | match | = 320px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | label | 1SF-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | label | 1SF-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | label | 1SF-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | label | 1SF-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | label | 1SF-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | border width | 1px | 1px | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | outline | none | none | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | trigger | 1SG-0 | padding right | 64px | padding right 12 + End 52 (code: absolute indicator) | match | = 64px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | value text | 1SH-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | value text | 1SH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | value text | 1SH-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | value text | 1SH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | value text | 1SH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | value text | 1SH-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | value text | 1SH-0 | width | 242px | flex 1 = trigger w − border − padding − End | match | = 242px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | indicator | 1SM-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | indicator | 1SM-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | indicator | 1SM-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | clear trigger | 1SJ-0 | x in trigger | 264px | indicator x − End gap − 24 | match | = 264px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | clear trigger | 1SJ-0 | size | 24px | `var(--tq-space-6)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | clear trigger | 1SJ-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | light | clear trigger | 1SK-0 | icon size | 14px | 14px | match |  |
| Clearable | light | root | 1SR-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Clearable | light | root | 1SR-0 | width | 320px | 320px | match | = 320px |
| Clearable | light | label | 1SS-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Clearable | light | label | 1SS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Clearable | light | label | 1SS-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Clearable | light | label | 1SS-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Clearable | light | label | 1SS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Clearable | light | trigger | 1ST-0 | y | 29px | label h + root gap | match | = 29px |
| Clearable | light | trigger | 1ST-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Clearable | light | trigger | 1ST-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Clearable | light | trigger | 1ST-0 | border width | 1px | 1px | match |  |
| Clearable | light | trigger | 1ST-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Clearable | light | trigger | 1ST-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Clearable | light | trigger | 1ST-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Clearable | light | trigger | 1ST-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| Clearable | light | trigger | 1ST-0 | outline width | 2px | 2px | match |  |
| Clearable | light | trigger | 1ST-0 | outline offset | 0px | 0px | match |  |
| Clearable | light | trigger | 1ST-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Clearable | light | value text | 1SU-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Clearable | light | value text | 1SU-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Clearable | light | value text | 1SU-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Clearable | light | value text | 1SU-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Clearable | light | value text | 1SU-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Clearable | light | value text | 1SU-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Clearable | light | value text | 1SU-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Clearable | light | indicator | 1SW-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Clearable | light | indicator | 1SW-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Clearable | light | indicator | 1SW-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Clearable | light | clear trigger | - | present | absent (hidden) | absent | match |  |
| Sizes #1 | light | root | 1TA-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #1 | light | root | 1TA-0 | width | 320px | 320px | match | = 320px |
| Sizes #1 | light | label | 1TB-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #1 | light | label | 1TB-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #1 | light | label | 1TB-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Sizes #1 | light | label | 1TB-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #1 | light | label | 1TB-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #1 | light | trigger | 1TC-0 | y | 29px | label h + root gap | match | = 29px |
| Sizes #1 | light | trigger | 1TC-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Sizes #1 | light | trigger | 1TC-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Sizes #1 | light | trigger | 1TC-0 | border width | 1px | 1px | match |  |
| Sizes #1 | light | trigger | 1TC-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Sizes #1 | light | trigger | 1TC-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Sizes #1 | light | trigger | 1TC-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Sizes #1 | light | trigger | 1TC-0 | outline | none | none | match |  |
| Sizes #1 | light | trigger | 1TC-0 | padding right | 32px | padding right 8 + End 24 (code: absolute indicator) | match | = 32px |
| Sizes #1 | light | value text | 1TD-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #1 | light | value text | 1TD-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #1 | light | value text | 1TD-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #1 | light | value text | 1TD-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #1 | light | value text | 1TD-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #1 | light | value text | 1TD-0 | x in trigger | 9px | border + padding left | match | = 9px |
| Sizes #1 | light | value text | 1TD-0 | width | 278px | flex 1 = trigger w − border − padding − End | match | = 278px |
| Sizes #1 | light | indicator | 1TF-0 | x in trigger | 295px | trigger w − border − padding right − 16 | match | = 295px |
| Sizes #1 | light | indicator | 1TF-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #1 | light | indicator | 1TF-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Sizes #1 | light | clear trigger | - | present | absent | absent | match |  |
| Sizes #2 | light | root | 1TL-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #2 | light | root | 1TL-0 | width | 320px | 320px | match | = 320px |
| Sizes #2 | light | label | 1TM-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #2 | light | label | 1TM-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #2 | light | label | 1TM-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Sizes #2 | light | label | 1TM-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #2 | light | label | 1TM-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #2 | light | trigger | 1TN-0 | y | 29px | label h + root gap | match | = 29px |
| Sizes #2 | light | trigger | 1TN-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Sizes #2 | light | trigger | 1TN-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Sizes #2 | light | trigger | 1TN-0 | border width | 1px | 1px | match |  |
| Sizes #2 | light | trigger | 1TN-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Sizes #2 | light | trigger | 1TN-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Sizes #2 | light | trigger | 1TN-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Sizes #2 | light | trigger | 1TN-0 | outline | none | none | match |  |
| Sizes #2 | light | trigger | 1TN-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Sizes #2 | light | value text | 1TO-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #2 | light | value text | 1TO-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #2 | light | value text | 1TO-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #2 | light | value text | 1TO-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #2 | light | value text | 1TO-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #2 | light | value text | 1TO-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Sizes #2 | light | value text | 1TO-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Sizes #2 | light | indicator | 1TQ-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Sizes #2 | light | indicator | 1TQ-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #2 | light | indicator | 1TQ-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Sizes #2 | light | clear trigger | - | present | absent | absent | match |  |
| Sizes #3 | light | root | 1TW-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #3 | light | root | 1TW-0 | width | 320px | 320px | match | = 320px |
| Sizes #3 | light | label | 1TX-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #3 | light | label | 1TX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #3 | light | label | 1TX-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Sizes #3 | light | label | 1TX-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #3 | light | label | 1TX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #3 | light | trigger | 1TY-0 | y | 29px | label h + root gap | match | = 29px |
| Sizes #3 | light | trigger | 1TY-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Sizes #3 | light | trigger | 1TY-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Sizes #3 | light | trigger | 1TY-0 | border width | 1px | 1px | match |  |
| Sizes #3 | light | trigger | 1TY-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Sizes #3 | light | trigger | 1TY-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Sizes #3 | light | trigger | 1TY-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Sizes #3 | light | trigger | 1TY-0 | outline | none | none | match |  |
| Sizes #3 | light | trigger | 1TY-0 | padding right | 40px | padding right 16 + End 24 (code: absolute indicator) | match | = 40px |
| Sizes #3 | light | value text | 1TZ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Sizes #3 | light | value text | 1TZ-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Sizes #3 | light | value text | 1TZ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #3 | light | value text | 1TZ-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Sizes #3 | light | value text | 1TZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #3 | light | value text | 1TZ-0 | x in trigger | 17px | border + padding left | match | = 17px |
| Sizes #3 | light | value text | 1TZ-0 | width | 262px | flex 1 = trigger w − border − padding − End | match | = 262px |
| Sizes #3 | light | indicator | 1U1-0 | x in trigger | 287px | trigger w − border − padding right − 16 | match | = 287px |
| Sizes #3 | light | indicator | 1U1-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #3 | light | indicator | 1U1-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Sizes #3 | light | clear trigger | - | present | absent | absent | match |  |
| Open | light | root | 1VS-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Open | light | root | 1VS-0 | width | 320px | 320px | match | = 320px |
| Open | light | label | 1VT-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open | light | label | 1VT-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | light | label | 1VT-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Open | light | label | 1VT-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | light | label | 1VT-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | light | trigger | 1VU-0 | y | 29px | label h + root gap | match | = 29px |
| Open | light | trigger | 1VU-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Open | light | trigger | 1VU-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Open | light | trigger | 1VU-0 | border width | 1px | 1px | match |  |
| Open | light | trigger | 1VU-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Open | light | trigger | 1VU-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | light | trigger | 1VU-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Open | light | trigger | 1VU-0 | outline | none | none | match |  |
| Open | light | trigger | 1VU-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Open | light | value text | 1VV-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open | light | value text | 1VV-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | light | value text | 1VV-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | light | value text | 1VV-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | light | value text | 1VV-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | light | value text | 1VV-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Open | light | value text | 1VV-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Open | light | indicator | 1VX-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Open | light | indicator | 1VX-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Open | light | indicator | 1VX-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Open | light | clear trigger | - | present | absent | absent | match |  |
| Open | light | content | 1W0-0 | y | 77px | label + gap + trigger + gap | match | = 77px |
| Open | light | content | 1W0-0 | width | 320px | stretch = root width | match | = 320px |
| Open | light | content | 1W0-0 | height | 186px | sum of items, groups and gaps | match | = 186px |
| Open | light | content | 1W0-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Open | light | content | 1W0-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Open | light | content | 1W0-0 | border color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Open | light | content | 1W0-0 | border width | 1px | 1px | match |  |
| Open | light | content | 1W0-0 | radius | 8px | `var(--tq-radius-surface)` | match |  |
| Open | light | content | 1W0-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Open | light | content | 1W0-0 | shadow | oklch(0.23 0.009 260 / 0.08) 0px 4px 8px -2px; oklch(0.23 0.009 260 / 0.06) 0px 2px 4px -2px | #1A1D2114 0px 4px 8px -2px, #1A1D210F 0px 2px 4px -2px | match | oklch(0.23 0.009 260 / 0.08) = #1A1D2114, oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Open | light | item 1 | 1W1-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | light | item 1 | 1W1-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | light | item 1 | 1W1-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | light | item 1 | 1W1-0 | background | none | none | match |  |
| Open | light | item 1 text | 1W2-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open | light | item 1 text | 1W2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | light | item 1 text | 1W2-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | light | item 1 text | 1W2-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | light | item 1 text | 1W2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | light | item 1 text | 1W2-0 | width | 294px | flex 1 in item | match | = 294px |
| Open | light | item 1 indicator | - | present | no (hidden) | no | match |  |
| Open | light | item 2 | 1W3-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | light | item 2 | 1W3-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | light | item 2 | 1W3-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | light | item 2 | 1W3-0 | background | none | none | match |  |
| Open | light | item 2 text | 1W4-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open | light | item 2 text | 1W4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | light | item 2 text | 1W4-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Open | light | item 2 text | 1W4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | light | item 2 text | 1W4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | light | item 2 text | 1W4-0 | width | 270px | flex 1 in item | match | = 270px |
| Open | light | item 2 indicator | 1W5-0 | present | yes | yes | match |  |
| Open | light | item 2 indicator | 1W5-0 | icon color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open | light | item 3 | 1W8-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | light | item 3 | 1W8-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | light | item 3 | 1W8-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | light | item 3 | 1W8-0 | background | none | none | match |  |
| Open | light | item 3 text | 1W9-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open | light | item 3 text | 1W9-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | light | item 3 text | 1W9-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | light | item 3 text | 1W9-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | light | item 3 text | 1W9-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | light | item 3 text | 1W9-0 | width | 294px | flex 1 in item | match | = 294px |
| Open | light | item 3 indicator | - | present | no (hidden) | no | match |  |
| Open | light | item 4 | 1WA-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | light | item 4 | 1WA-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | light | item 4 | 1WA-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | light | item 4 | 1WA-0 | background | none | none | match |  |
| Open | light | item 4 text | 1WB-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open | light | item 4 text | 1WB-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | light | item 4 text | 1WB-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | light | item 4 text | 1WB-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | light | item 4 text | 1WB-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | light | item 4 text | 1WB-0 | width | 294px | flex 1 in item | match | = 294px |
| Open | light | item 4 indicator | - | present | no (hidden) | no | match |  |
| Open | light | item 5 | 1WC-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | light | item 5 | 1WC-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | light | item 5 | 1WC-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | light | item 5 | 1WC-0 | background | none | none | match |  |
| Open | light | item 5 text | 1WD-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Open | light | item 5 text | 1WD-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | light | item 5 text | 1WD-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | light | item 5 text | 1WD-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | light | item 5 text | 1WD-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | light | item 5 text | 1WD-0 | width | 294px | flex 1 in item | match | = 294px |
| Open | light | item 5 indicator | - | present | no (hidden) | no | match |  |
| Open + hover-svelte | light | root | 1WG-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | light | root | 1WG-0 | width | 320px | 320px | match | = 320px |
| Open + hover-svelte | light | label | 1WH-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open + hover-svelte | light | label | 1WH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | light | label | 1WH-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Open + hover-svelte | light | label | 1WH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | light | label | 1WH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | light | trigger | 1WI-0 | y | 29px | label h + root gap | match | = 29px |
| Open + hover-svelte | light | trigger | 1WI-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Open + hover-svelte | light | trigger | 1WI-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Open + hover-svelte | light | trigger | 1WI-0 | border width | 1px | 1px | match |  |
| Open + hover-svelte | light | trigger | 1WI-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Open + hover-svelte | light | trigger | 1WI-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | light | trigger | 1WI-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Open + hover-svelte | light | trigger | 1WI-0 | outline | none | none | match |  |
| Open + hover-svelte | light | trigger | 1WI-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Open + hover-svelte | light | value text | 1WJ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open + hover-svelte | light | value text | 1WJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | light | value text | 1WJ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | light | value text | 1WJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | light | value text | 1WJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | light | value text | 1WJ-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Open + hover-svelte | light | value text | 1WJ-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Open + hover-svelte | light | indicator | 1WL-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Open + hover-svelte | light | indicator | 1WL-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Open + hover-svelte | light | indicator | 1WL-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Open + hover-svelte | light | clear trigger | - | present | absent | absent | match |  |
| Open + hover-svelte | light | content | 1WO-0 | y | 77px | label + gap + trigger + gap | match | = 77px |
| Open + hover-svelte | light | content | 1WO-0 | width | 320px | stretch = root width | match | = 320px |
| Open + hover-svelte | light | content | 1WO-0 | height | 186px | sum of items, groups and gaps | match | = 186px |
| Open + hover-svelte | light | content | 1WO-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Open + hover-svelte | light | content | 1WO-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Open + hover-svelte | light | content | 1WO-0 | border color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Open + hover-svelte | light | content | 1WO-0 | border width | 1px | 1px | match |  |
| Open + hover-svelte | light | content | 1WO-0 | radius | 8px | `var(--tq-radius-surface)` | match |  |
| Open + hover-svelte | light | content | 1WO-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Open + hover-svelte | light | content | 1WO-0 | shadow | oklch(0.23 0.009 260 / 0.08) 0px 4px 8px -2px; oklch(0.23 0.009 260 / 0.06) 0px 2px 4px -2px | #1A1D2114 0px 4px 8px -2px, #1A1D210F 0px 2px 4px -2px | match | oklch(0.23 0.009 260 / 0.08) = #1A1D2114, oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Open + hover-svelte | light | item 1 | 1WP-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | light | item 1 | 1WP-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | light | item 1 | 1WP-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | light | item 1 | 1WP-0 | background | none | none | match |  |
| Open + hover-svelte | light | item 1 text | 1WQ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open + hover-svelte | light | item 1 text | 1WQ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | light | item 1 text | 1WQ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | light | item 1 text | 1WQ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | light | item 1 text | 1WQ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | light | item 1 text | 1WQ-0 | width | 294px | flex 1 in item | match | = 294px |
| Open + hover-svelte | light | item 1 indicator | - | present | no (hidden) | no | match |  |
| Open + hover-svelte | light | item 2 | 1WR-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | light | item 2 | 1WR-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | light | item 2 | 1WR-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | light | item 2 | 1WR-0 | background | none | none | match |  |
| Open + hover-svelte | light | item 2 text | 1WS-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open + hover-svelte | light | item 2 text | 1WS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | light | item 2 text | 1WS-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Open + hover-svelte | light | item 2 text | 1WS-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | light | item 2 text | 1WS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | light | item 2 text | 1WS-0 | width | 270px | flex 1 in item | match | = 270px |
| Open + hover-svelte | light | item 2 indicator | 1WT-0 | present | yes | yes | match |  |
| Open + hover-svelte | light | item 2 indicator | 1WT-0 | icon color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open + hover-svelte | light | item 3 | 1WW-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | light | item 3 | 1WW-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | light | item 3 | 1WW-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | light | item 3 | 1WW-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-subtle)` | match |  |
| Open + hover-svelte | light | item 3 text | 1WX-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open + hover-svelte | light | item 3 text | 1WX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | light | item 3 text | 1WX-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | light | item 3 text | 1WX-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | light | item 3 text | 1WX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | light | item 3 text | 1WX-0 | width | 294px | flex 1 in item | match | = 294px |
| Open + hover-svelte | light | item 3 indicator | - | present | no (hidden) | no | match |  |
| Open + hover-svelte | light | item 4 | 1WY-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | light | item 4 | 1WY-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | light | item 4 | 1WY-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | light | item 4 | 1WY-0 | background | none | none | match |  |
| Open + hover-svelte | light | item 4 text | 1WZ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Open + hover-svelte | light | item 4 text | 1WZ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | light | item 4 text | 1WZ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | light | item 4 text | 1WZ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | light | item 4 text | 1WZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | light | item 4 text | 1WZ-0 | width | 294px | flex 1 in item | match | = 294px |
| Open + hover-svelte | light | item 4 indicator | - | present | no (hidden) | no | match |  |
| Open + hover-svelte | light | item 5 | 1X0-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | light | item 5 | 1X0-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | light | item 5 | 1X0-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | light | item 5 | 1X0-0 | background | none | none | match |  |
| Open + hover-svelte | light | item 5 text | 1X1-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Open + hover-svelte | light | item 5 text | 1X1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | light | item 5 text | 1X1-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | light | item 5 text | 1X1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | light | item 5 text | 1X1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | light | item 5 text | 1X1-0 | width | 294px | flex 1 in item | match | = 294px |
| Open + hover-svelte | light | item 5 indicator | - | present | no (hidden) | no | match |  |
| MultipleOpen | light | root | 1X4-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | light | root | 1X4-0 | width | 320px | 320px | match | = 320px |
| MultipleOpen | light | label | 1X5-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| MultipleOpen | light | label | 1X5-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | light | label | 1X5-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| MultipleOpen | light | label | 1X5-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | light | label | 1X5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | light | trigger | 1X6-0 | y | 29px | label h + root gap | match | = 29px |
| MultipleOpen | light | trigger | 1X6-0 | height | 40px | `var(--tq-space-10)` | match |  |
| MultipleOpen | light | trigger | 1X6-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| MultipleOpen | light | trigger | 1X6-0 | border width | 1px | 1px | match |  |
| MultipleOpen | light | trigger | 1X6-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| MultipleOpen | light | trigger | 1X6-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | light | trigger | 1X6-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| MultipleOpen | light | trigger | 1X6-0 | outline | none | none | match |  |
| MultipleOpen | light | trigger | 1X6-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| MultipleOpen | light | value text | 1X7-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| MultipleOpen | light | value text | 1X7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | light | value text | 1X7-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| MultipleOpen | light | value text | 1X7-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | light | value text | 1X7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | light | value text | 1X7-0 | x in trigger | 13px | border + padding left | match | = 13px |
| MultipleOpen | light | value text | 1X7-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| MultipleOpen | light | indicator | 1X9-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| MultipleOpen | light | indicator | 1X9-0 | size | 16px | `var(--tq-space-4)` | match |  |
| MultipleOpen | light | indicator | 1X9-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| MultipleOpen | light | clear trigger | - | present | absent | absent | match |  |
| MultipleOpen | light | content | 1XC-0 | y | 77px | label + gap + trigger + gap | match | = 77px |
| MultipleOpen | light | content | 1XC-0 | width | 320px | stretch = root width | match | = 320px |
| MultipleOpen | light | content | 1XC-0 | height | 186px | sum of items, groups and gaps | match | = 186px |
| MultipleOpen | light | content | 1XC-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| MultipleOpen | light | content | 1XC-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| MultipleOpen | light | content | 1XC-0 | border color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| MultipleOpen | light | content | 1XC-0 | border width | 1px | 1px | match |  |
| MultipleOpen | light | content | 1XC-0 | radius | 8px | `var(--tq-radius-surface)` | match |  |
| MultipleOpen | light | content | 1XC-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| MultipleOpen | light | content | 1XC-0 | shadow | oklch(0.23 0.009 260 / 0.08) 0px 4px 8px -2px; oklch(0.23 0.009 260 / 0.06) 0px 2px 4px -2px | #1A1D2114 0px 4px 8px -2px, #1A1D210F 0px 2px 4px -2px | match | oklch(0.23 0.009 260 / 0.08) = #1A1D2114, oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| MultipleOpen | light | item 1 | 1XD-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | light | item 1 | 1XD-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | light | item 1 | 1XD-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | light | item 1 | 1XD-0 | background | none | none | match |  |
| MultipleOpen | light | item 1 text | 1XE-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| MultipleOpen | light | item 1 text | 1XE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | light | item 1 text | 1XE-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| MultipleOpen | light | item 1 text | 1XE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | light | item 1 text | 1XE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | light | item 1 text | 1XE-0 | width | 270px | flex 1 in item | match | = 270px |
| MultipleOpen | light | item 1 indicator | 1XF-0 | present | yes | yes | match |  |
| MultipleOpen | light | item 1 indicator | 1XF-0 | icon color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| MultipleOpen | light | item 2 | 1XI-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | light | item 2 | 1XI-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | light | item 2 | 1XI-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | light | item 2 | 1XI-0 | background | none | none | match |  |
| MultipleOpen | light | item 2 text | 1XJ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| MultipleOpen | light | item 2 text | 1XJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | light | item 2 text | 1XJ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| MultipleOpen | light | item 2 text | 1XJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | light | item 2 text | 1XJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | light | item 2 text | 1XJ-0 | width | 294px | flex 1 in item | match | = 294px |
| MultipleOpen | light | item 2 indicator | - | present | no (hidden) | no | match |  |
| MultipleOpen | light | item 3 | 1XK-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | light | item 3 | 1XK-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | light | item 3 | 1XK-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | light | item 3 | 1XK-0 | background | none | none | match |  |
| MultipleOpen | light | item 3 text | 1XL-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| MultipleOpen | light | item 3 text | 1XL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | light | item 3 text | 1XL-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| MultipleOpen | light | item 3 text | 1XL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | light | item 3 text | 1XL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | light | item 3 text | 1XL-0 | width | 270px | flex 1 in item | match | = 270px |
| MultipleOpen | light | item 3 indicator | 1XM-0 | present | yes | yes | match |  |
| MultipleOpen | light | item 3 indicator | 1XM-0 | icon color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| MultipleOpen | light | item 4 | 1XP-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | light | item 4 | 1XP-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | light | item 4 | 1XP-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | light | item 4 | 1XP-0 | background | none | none | match |  |
| MultipleOpen | light | item 4 text | 1XQ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| MultipleOpen | light | item 4 text | 1XQ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | light | item 4 text | 1XQ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| MultipleOpen | light | item 4 text | 1XQ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | light | item 4 text | 1XQ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | light | item 4 text | 1XQ-0 | width | 294px | flex 1 in item | match | = 294px |
| MultipleOpen | light | item 4 indicator | - | present | no (hidden) | no | match |  |
| MultipleOpen | light | item 5 | 1XR-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | light | item 5 | 1XR-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | light | item 5 | 1XR-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | light | item 5 | 1XR-0 | background | none | none | match |  |
| MultipleOpen | light | item 5 text | 1XS-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| MultipleOpen | light | item 5 text | 1XS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | light | item 5 text | 1XS-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| MultipleOpen | light | item 5 text | 1XS-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | light | item 5 text | 1XS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | light | item 5 text | 1XS-0 | width | 294px | flex 1 in item | match | = 294px |
| MultipleOpen | light | item 5 indicator | - | present | no (hidden) | no | match |  |
| Grouped | light | root | 1XX-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Grouped | light | root | 1XX-0 | width | 320px | 320px | match | = 320px |
| Grouped | light | label | 1XY-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Grouped | light | label | 1XY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | light | label | 1XY-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Grouped | light | label | 1XY-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | light | label | 1XY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | light | trigger | 1XZ-0 | y | 29px | label h + root gap | match | = 29px |
| Grouped | light | trigger | 1XZ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Grouped | light | trigger | 1XZ-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Grouped | light | trigger | 1XZ-0 | border width | 1px | 1px | match |  |
| Grouped | light | trigger | 1XZ-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Grouped | light | trigger | 1XZ-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | light | trigger | 1XZ-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Grouped | light | trigger | 1XZ-0 | outline | none | none | match |  |
| Grouped | light | trigger | 1XZ-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Grouped | light | value text | 1Y0-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Grouped | light | value text | 1Y0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | light | value text | 1Y0-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | light | value text | 1Y0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | light | value text | 1Y0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | light | value text | 1Y0-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Grouped | light | value text | 1Y0-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Grouped | light | indicator | 1Y2-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Grouped | light | indicator | 1Y2-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Grouped | light | indicator | 1Y2-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Grouped | light | clear trigger | - | present | absent | absent | match |  |
| Grouped | light | content | 1Y5-0 | y | 77px | label + gap + trigger + gap | match | = 77px |
| Grouped | light | content | 1Y5-0 | width | 320px | stretch = root width | match | = 320px |
| Grouped | light | content | 1Y5-0 | height | 210px | sum of items, groups and gaps | match | = 210px |
| Grouped | light | content | 1Y5-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Grouped | light | content | 1Y5-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Grouped | light | content | 1Y5-0 | border color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Grouped | light | content | 1Y5-0 | border width | 1px | 1px | match |  |
| Grouped | light | content | 1Y5-0 | radius | 8px | `var(--tq-radius-surface)` | match |  |
| Grouped | light | content | 1Y5-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Grouped | light | content | 1Y5-0 | shadow | oklch(0.23 0.009 260 / 0.08) 0px 4px 8px -2px; oklch(0.23 0.009 260 / 0.06) 0px 2px 4px -2px | #1A1D2114 0px 4px 8px -2px, #1A1D210F 0px 2px 4px -2px | match | oklch(0.23 0.009 260 / 0.08) = #1A1D2114, oklch(0.23 0.009 260 / 0.06) = #1A1D210F |
| Grouped | light | item 1 | 1Y9-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Grouped | light | item 1 | 1Y9-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | light | item 1 | 1Y9-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | light | item 1 | 1Y9-0 | background | none | none | match |  |
| Grouped | light | item 1 text | 1YA-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Grouped | light | item 1 text | 1YA-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | light | item 1 text | 1YA-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | light | item 1 text | 1YA-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | light | item 1 text | 1YA-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | light | item 1 text | 1YA-0 | width | 294px | flex 1 in item | match | = 294px |
| Grouped | light | item 1 indicator | - | present | no (hidden) | no | match |  |
| Grouped | light | item 2 | 1YB-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Grouped | light | item 2 | 1YB-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | light | item 2 | 1YB-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | light | item 2 | 1YB-0 | background | none | none | match |  |
| Grouped | light | item 2 text | 1YC-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Grouped | light | item 2 text | 1YC-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | light | item 2 text | 1YC-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | light | item 2 text | 1YC-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | light | item 2 text | 1YC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | light | item 2 text | 1YC-0 | width | 294px | flex 1 in item | match | = 294px |
| Grouped | light | item 2 indicator | - | present | no (hidden) | no | match |  |
| Grouped | light | item 3 | 1YG-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Grouped | light | item 3 | 1YG-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | light | item 3 | 1YG-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | light | item 3 | 1YG-0 | background | none | none | match |  |
| Grouped | light | item 3 text | 1YH-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Grouped | light | item 3 text | 1YH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | light | item 3 text | 1YH-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | light | item 3 text | 1YH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | light | item 3 text | 1YH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | light | item 3 text | 1YH-0 | width | 294px | flex 1 in item | match | = 294px |
| Grouped | light | item 3 indicator | - | present | no (hidden) | no | match |  |
| Grouped | light | item 4 | 1YI-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Grouped | light | item 4 | 1YI-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | light | item 4 | 1YI-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | light | item 4 | 1YI-0 | background | none | none | match |  |
| Grouped | light | item 4 text | 1YJ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Grouped | light | item 4 text | 1YJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | light | item 4 text | 1YJ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | light | item 4 text | 1YJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | light | item 4 text | 1YJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | light | item 4 text | 1YJ-0 | width | 294px | flex 1 in item | match | = 294px |
| Grouped | light | item 4 indicator | - | present | no (hidden) | no | match |  |
| Grouped | light | group label | 1Y7-0 | padding top | 4px | `var(--tq-space-1)` | match |  |
| Grouped | light | group label | 1Y7-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | light | group label | 1Y7-0 | height | 26px | padding + xs line | match | = 26px |
| Grouped | light | group label | 1Y7-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Grouped | light | group label | 1Y7-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| Grouped | light | group label | 1Y7-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Grouped | light | group label | 1Y7-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| Grouped | light | group label | 1Y7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | light | group | 1Y6-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Grouped | light | group label | 1YE-0 | padding top | 4px | `var(--tq-space-1)` | match |  |
| Grouped | light | group label | 1YE-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | light | group label | 1YE-0 | height | 26px | padding + xs line | match | = 26px |
| Grouped | light | group label | 1YE-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Grouped | light | group label | 1YE-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| Grouped | light | group label | 1YE-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Grouped | light | group label | 1YE-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| Grouped | light | group label | 1YE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | light | group | 1YD-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Default | light | root | 1YM-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Default | light | root | 1YM-0 | width | 320px | 320px | match | = 320px |
| Default | light | label | 1YN-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Default | light | label | 1YN-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Default | light | label | 1YN-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Default | light | label | 1YN-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Default | light | label | 1YN-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Default | light | trigger | 1YO-0 | y | 29px | label h + root gap | match | = 29px |
| Default | light | trigger | 1YO-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Default | light | trigger | 1YO-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Default | light | trigger | 1YO-0 | border width | 1px | 1px | match |  |
| Default | light | trigger | 1YO-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| Default | light | trigger | 1YO-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Default | light | trigger | 1YO-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Default | light | trigger | 1YO-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| Default | light | trigger | 1YO-0 | outline width | 2px | 2px | match |  |
| Default | light | trigger | 1YO-0 | outline offset | 0px | 0px | match |  |
| Default | light | trigger | 1YO-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Default | light | value text | 1YP-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Default | light | value text | 1YP-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Default | light | value text | 1YP-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Default | light | value text | 1YP-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Default | light | value text | 1YP-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Default | light | value text | 1YP-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Default | light | value text | 1YP-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Default | light | indicator | 1YR-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Default | light | indicator | 1YR-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Default | light | indicator | 1YR-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Default | light | clear trigger | - | present | absent | absent | match |  |
| WithField | light | field root | 1YW-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithField | light | root | 1YX-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithField | light | root | 1YX-0 | width | 320px | 320px | match | = 320px |
| WithField | light | label | 1YY-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithField | light | label | 1YY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithField | light | label | 1YY-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithField | light | label | 1YY-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithField | light | label | 1YY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithField | light | trigger | 1YZ-0 | y | 29px | label h + root gap | match | = 29px |
| WithField | light | trigger | 1YZ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithField | light | trigger | 1YZ-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithField | light | trigger | 1YZ-0 | border width | 1px | 1px | match |  |
| WithField | light | trigger | 1YZ-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong)` | match |  |
| WithField | light | trigger | 1YZ-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithField | light | trigger | 1YZ-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| WithField | light | trigger | 1YZ-0 | outline | none | none | match |  |
| WithField | light | trigger | 1YZ-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithField | light | value text | 1Z0-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithField | light | value text | 1Z0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithField | light | value text | 1Z0-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithField | light | value text | 1Z0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithField | light | value text | 1Z0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithField | light | value text | 1Z0-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithField | light | value text | 1Z0-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithField | light | indicator | 1Z2-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithField | light | indicator | 1Z2-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithField | light | indicator | 1Z2-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithField | light | clear trigger | - | present | absent | absent | match |  |
| WithField | light | helper-text | 1Z5-0 | y | 77px | stacked with field gap | match | = 77px |
| WithField | light | helper-text | 1Z5-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithField | light | helper-text | 1Z5-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| WithField | light | helper-text | 1Z5-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithField | light | helper-text | 1Z5-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| WithField | light | helper-text | 1Z5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithFieldInvalid | light | field root | 1ZA-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithFieldInvalid | light | root | 1ZB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithFieldInvalid | light | root | 1ZB-0 | width | 320px | 320px | match | = 320px |
| WithFieldInvalid | light | label | 1ZC-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| WithFieldInvalid | light | label | 1ZC-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithFieldInvalid | light | label | 1ZC-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithFieldInvalid | light | label | 1ZC-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithFieldInvalid | light | label | 1ZC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithFieldInvalid | light | trigger | 1ZD-0 | y | 29px | label h + root gap | match | = 29px |
| WithFieldInvalid | light | trigger | 1ZD-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithFieldInvalid | light | trigger | 1ZD-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithFieldInvalid | light | trigger | 1ZD-0 | border width | 1px | 1px | match |  |
| WithFieldInvalid | light | trigger | 1ZD-0 | border color | oklch(0.53 0.1995 25) | `var(--tq-color-border-negative)` | match |  |
| WithFieldInvalid | light | trigger | 1ZD-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithFieldInvalid | light | trigger | 1ZD-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| WithFieldInvalid | light | trigger | 1ZD-0 | outline | none | none | match |  |
| WithFieldInvalid | light | trigger | 1ZD-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithFieldInvalid | light | value text | 1ZE-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithFieldInvalid | light | value text | 1ZE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithFieldInvalid | light | value text | 1ZE-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithFieldInvalid | light | value text | 1ZE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithFieldInvalid | light | value text | 1ZE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithFieldInvalid | light | value text | 1ZE-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithFieldInvalid | light | value text | 1ZE-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithFieldInvalid | light | indicator | 1ZG-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithFieldInvalid | light | indicator | 1ZG-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithFieldInvalid | light | indicator | 1ZG-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithFieldInvalid | light | clear trigger | - | present | absent | absent | match |  |
| WithFieldInvalid | light | helper-text | 1ZJ-0 | y | 77px | stacked with field gap | match | = 77px |
| WithFieldInvalid | light | helper-text | 1ZJ-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| WithFieldInvalid | light | helper-text | 1ZJ-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| WithFieldInvalid | light | helper-text | 1ZJ-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithFieldInvalid | light | helper-text | 1ZJ-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| WithFieldInvalid | light | helper-text | 1ZJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithFieldInvalid | light | error-text | 1ZK-0 | y | 103px | stacked with field gap | match | = 103px |
| WithFieldInvalid | light | error-text | 1ZK-0 | color | oklch(0.44 0.1784 25) | `var(--tq-color-status-negative-fg)` | match |  |
| WithFieldInvalid | light | error-text | 1ZK-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| WithFieldInvalid | light | error-text | 1ZK-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithFieldInvalid | light | error-text | 1ZK-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| WithFieldInvalid | light | error-text | 1ZK-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |

## Dark

| Story and checkpoint | Mode | Part | Paper node | Property | Code value | Paper value | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Invalid + {"invalid": false} | dark | root | 2BY-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid + {"invalid": false} | dark | root | 2BY-0 | width | 320px | 320px | match | = 320px |
| Invalid + {"invalid": false} | dark | label | 2C5-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Invalid + {"invalid": false} | dark | label | 2C5-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false} | dark | label | 2C5-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Invalid + {"invalid": false} | dark | label | 2C5-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false} | dark | label | 2C5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | y | 29px | label h + root gap | match | = 29px |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | border width | 1px | 1px | match |  |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | outline | none | none | match |  |
| Invalid + {"invalid": false} | dark | trigger | 2BZ-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Invalid + {"invalid": false} | dark | value text | 2C4-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Invalid + {"invalid": false} | dark | value text | 2C4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false} | dark | value text | 2C4-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid + {"invalid": false} | dark | value text | 2C4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false} | dark | value text | 2C4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false} | dark | value text | 2C4-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Invalid + {"invalid": false} | dark | value text | 2C4-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Invalid + {"invalid": false} | dark | indicator | 2C1-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Invalid + {"invalid": false} | dark | indicator | 2C1-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid + {"invalid": false} | dark | indicator | 2C1-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Invalid + {"invalid": false} | dark | clear trigger | - | present | absent | absent | match |  |
| WithValue | dark | root | 2BO-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue | dark | root | 2BO-0 | width | 320px | 320px | match | = 320px |
| WithValue | dark | label | 2BV-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue | dark | label | 2BV-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue | dark | label | 2BV-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue | dark | label | 2BV-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue | dark | label | 2BV-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue | dark | trigger | 2BP-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue | dark | trigger | 2BP-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue | dark | trigger | 2BP-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue | dark | trigger | 2BP-0 | border width | 1px | 1px | match |  |
| WithValue | dark | trigger | 2BP-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| WithValue | dark | trigger | 2BP-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue | dark | trigger | 2BP-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| WithValue | dark | trigger | 2BP-0 | outline | none | none | match |  |
| WithValue | dark | trigger | 2BP-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue | dark | value text | 2BU-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue | dark | value text | 2BU-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue | dark | value text | 2BU-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue | dark | value text | 2BU-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue | dark | value text | 2BU-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue | dark | value text | 2BU-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue | dark | value text | 2BU-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue | dark | indicator | 2BR-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue | dark | indicator | 2BR-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue | dark | indicator | 2BR-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithValue | dark | clear trigger | - | present | absent | absent | match |  |
| Hover | dark | root | 2BB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover | dark | root | 2BB-0 | width | 320px | 320px | match | = 320px |
| Hover | dark | label | 2BI-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover | dark | label | 2BI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover | dark | label | 2BI-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover | dark | label | 2BI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover | dark | label | 2BI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover | dark | trigger | 2BC-0 | y | 29px | label h + root gap | match | = 29px |
| Hover | dark | trigger | 2BC-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover | dark | trigger | 2BC-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Hover | dark | trigger | 2BC-0 | border width | 1px | 1px | match |  |
| Hover | dark | trigger | 2BC-0 | border color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Hover | dark | trigger | 2BC-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover | dark | trigger | 2BC-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Hover | dark | trigger | 2BC-0 | outline | none | none | match |  |
| Hover | dark | trigger | 2BC-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Hover | dark | value text | 2BH-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Hover | dark | value text | 2BH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover | dark | value text | 2BH-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Hover | dark | value text | 2BH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover | dark | value text | 2BH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover | dark | value text | 2BH-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Hover | dark | value text | 2BH-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Hover | dark | indicator | 2BE-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Hover | dark | indicator | 2BE-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Hover | dark | indicator | 2BE-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Hover | dark | clear trigger | - | present | absent | absent | match |  |
| WithValue + hover-trigger | dark | root | 2B1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + hover-trigger | dark | root | 2B1-0 | width | 320px | 320px | match | = 320px |
| WithValue + hover-trigger | dark | label | 2B8-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + hover-trigger | dark | label | 2B8-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + hover-trigger | dark | label | 2B8-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + hover-trigger | dark | label | 2B8-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + hover-trigger | dark | label | 2B8-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | border width | 1px | 1px | match |  |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | border color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | outline | none | none | match |  |
| WithValue + hover-trigger | dark | trigger | 2B2-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue + hover-trigger | dark | value text | 2B7-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + hover-trigger | dark | value text | 2B7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + hover-trigger | dark | value text | 2B7-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + hover-trigger | dark | value text | 2B7-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + hover-trigger | dark | value text | 2B7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + hover-trigger | dark | value text | 2B7-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + hover-trigger | dark | value text | 2B7-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue + hover-trigger | dark | indicator | 2B4-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + hover-trigger | dark | indicator | 2B4-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + hover-trigger | dark | indicator | 2B4-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithValue + hover-trigger | dark | clear trigger | - | present | absent | absent | match |  |
| FocusVisible | dark | root | 2AO-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible | dark | root | 2AO-0 | width | 320px | 320px | match | = 320px |
| FocusVisible | dark | label | 2AV-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| FocusVisible | dark | label | 2AV-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible | dark | label | 2AV-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible | dark | label | 2AV-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible | dark | label | 2AV-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible | dark | trigger | 2AP-0 | y | 29px | label h + root gap | match | = 29px |
| FocusVisible | dark | trigger | 2AP-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible | dark | trigger | 2AP-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| FocusVisible | dark | trigger | 2AP-0 | border width | 1px | 1px | match |  |
| FocusVisible | dark | trigger | 2AP-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| FocusVisible | dark | trigger | 2AP-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible | dark | trigger | 2AP-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| FocusVisible | dark | trigger | 2AP-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible | dark | trigger | 2AP-0 | outline width | 2px | 2px | match |  |
| FocusVisible | dark | trigger | 2AP-0 | outline offset | 0px | 0px | match |  |
| FocusVisible | dark | trigger | 2AP-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| FocusVisible | dark | value text | 2AU-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| FocusVisible | dark | value text | 2AU-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible | dark | value text | 2AU-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| FocusVisible | dark | value text | 2AU-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible | dark | value text | 2AU-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible | dark | value text | 2AU-0 | x in trigger | 13px | border + padding left | match | = 13px |
| FocusVisible | dark | value text | 2AU-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| FocusVisible | dark | indicator | 2AR-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| FocusVisible | dark | indicator | 2AR-0 | size | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible | dark | indicator | 2AR-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| FocusVisible | dark | clear trigger | - | present | absent | absent | match |  |
| WithValue + tab | dark | root | 2AE-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + tab | dark | root | 2AE-0 | width | 320px | 320px | match | = 320px |
| WithValue + tab | dark | label | 2AL-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + tab | dark | label | 2AL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + tab | dark | label | 2AL-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + tab | dark | label | 2AL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + tab | dark | label | 2AL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + tab | dark | trigger | 2AF-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | border width | 1px | 1px | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | outline width | 2px | 2px | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | outline offset | 0px | 0px | match |  |
| WithValue + tab | dark | trigger | 2AF-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue + tab | dark | value text | 2AK-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + tab | dark | value text | 2AK-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + tab | dark | value text | 2AK-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + tab | dark | value text | 2AK-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + tab | dark | value text | 2AK-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + tab | dark | value text | 2AK-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + tab | dark | value text | 2AK-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue + tab | dark | indicator | 2AH-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + tab | dark | indicator | 2AH-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + tab | dark | indicator | 2AH-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithValue + tab | dark | clear trigger | - | present | absent | absent | match |  |
| Invalid | dark | root | 2A1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid | dark | root | 2A1-0 | width | 320px | 320px | match | = 320px |
| Invalid | dark | label | 2A8-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Invalid | dark | label | 2A8-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid | dark | label | 2A8-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Invalid | dark | label | 2A8-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid | dark | label | 2A8-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid | dark | trigger | 2A2-0 | y | 29px | label h + root gap | match | = 29px |
| Invalid | dark | trigger | 2A2-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Invalid | dark | trigger | 2A2-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Invalid | dark | trigger | 2A2-0 | border width | 1px | 1px | match |  |
| Invalid | dark | trigger | 2A2-0 | border color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| Invalid | dark | trigger | 2A2-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Invalid | dark | trigger | 2A2-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Invalid | dark | trigger | 2A2-0 | outline | none | none | match |  |
| Invalid | dark | trigger | 2A2-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Invalid | dark | value text | 2A7-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Invalid | dark | value text | 2A7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid | dark | value text | 2A7-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid | dark | value text | 2A7-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid | dark | value text | 2A7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid | dark | value text | 2A7-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Invalid | dark | value text | 2A7-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Invalid | dark | indicator | 2A4-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Invalid | dark | indicator | 2A4-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid | dark | indicator | 2A4-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Invalid | dark | clear trigger | - | present | absent | absent | match |  |
| WithValue + {"invalid": true} | dark | root | 29R-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + {"invalid": true} | dark | root | 29R-0 | width | 320px | 320px | match | = 320px |
| WithValue + {"invalid": true} | dark | label | 29Y-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + {"invalid": true} | dark | label | 29Y-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"invalid": true} | dark | label | 29Y-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + {"invalid": true} | dark | label | 29Y-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"invalid": true} | dark | label | 29Y-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | border width | 1px | 1px | match |  |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | border color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | outline | none | none | match |  |
| WithValue + {"invalid": true} | dark | trigger | 29S-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue + {"invalid": true} | dark | value text | 29X-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + {"invalid": true} | dark | value text | 29X-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"invalid": true} | dark | value text | 29X-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + {"invalid": true} | dark | value text | 29X-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"invalid": true} | dark | value text | 29X-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"invalid": true} | dark | value text | 29X-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + {"invalid": true} | dark | value text | 29X-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue + {"invalid": true} | dark | indicator | 29U-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + {"invalid": true} | dark | indicator | 29U-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + {"invalid": true} | dark | indicator | 29U-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithValue + {"invalid": true} | dark | clear trigger | - | present | absent | absent | match |  |
| InvalidFocused | dark | root | 29E-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| InvalidFocused | dark | root | 29E-0 | width | 320px | 320px | match | = 320px |
| InvalidFocused | dark | label | 29L-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| InvalidFocused | dark | label | 29L-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| InvalidFocused | dark | label | 29L-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| InvalidFocused | dark | label | 29L-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| InvalidFocused | dark | label | 29L-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InvalidFocused | dark | trigger | 29F-0 | y | 29px | label h + root gap | match | = 29px |
| InvalidFocused | dark | trigger | 29F-0 | height | 40px | `var(--tq-space-10)` | match |  |
| InvalidFocused | dark | trigger | 29F-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| InvalidFocused | dark | trigger | 29F-0 | border width | 1px | 1px | match |  |
| InvalidFocused | dark | trigger | 29F-0 | border color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| InvalidFocused | dark | trigger | 29F-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| InvalidFocused | dark | trigger | 29F-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| InvalidFocused | dark | trigger | 29F-0 | outline color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| InvalidFocused | dark | trigger | 29F-0 | outline width | 2px | 2px | match |  |
| InvalidFocused | dark | trigger | 29F-0 | outline offset | 0px | 0px | match |  |
| InvalidFocused | dark | trigger | 29F-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| InvalidFocused | dark | value text | 29K-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| InvalidFocused | dark | value text | 29K-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| InvalidFocused | dark | value text | 29K-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| InvalidFocused | dark | value text | 29K-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| InvalidFocused | dark | value text | 29K-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| InvalidFocused | dark | value text | 29K-0 | x in trigger | 13px | border + padding left | match | = 13px |
| InvalidFocused | dark | value text | 29K-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| InvalidFocused | dark | indicator | 29H-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| InvalidFocused | dark | indicator | 29H-0 | size | 16px | `var(--tq-space-4)` | match |  |
| InvalidFocused | dark | indicator | 29H-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| InvalidFocused | dark | clear trigger | - | present | absent | absent | match |  |
| WithValue + {"invalid": true} + tab | dark | root | 294-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + {"invalid": true} + tab | dark | root | 294-0 | width | 320px | 320px | match | = 320px |
| WithValue + {"invalid": true} + tab | dark | label | 29B-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + {"invalid": true} + tab | dark | label | 29B-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"invalid": true} + tab | dark | label | 29B-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + {"invalid": true} + tab | dark | label | 29B-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"invalid": true} + tab | dark | label | 29B-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | border width | 1px | 1px | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | border color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | outline color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | outline width | 2px | 2px | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | outline offset | 0px | 0px | match |  |
| WithValue + {"invalid": true} + tab | dark | trigger | 295-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithValue + {"invalid": true} + tab | dark | value text | 29A-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + {"invalid": true} + tab | dark | value text | 29A-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"invalid": true} + tab | dark | value text | 29A-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + {"invalid": true} + tab | dark | value text | 29A-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"invalid": true} + tab | dark | value text | 29A-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"invalid": true} + tab | dark | value text | 29A-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + {"invalid": true} + tab | dark | value text | 29A-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithValue + {"invalid": true} + tab | dark | indicator | 297-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + {"invalid": true} + tab | dark | indicator | 297-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + {"invalid": true} + tab | dark | indicator | 297-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithValue + {"invalid": true} + tab | dark | clear trigger | - | present | absent | absent | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | root | 28R-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | root | 28R-0 | width | 320px | 320px | match | = 320px |
| Invalid + {"invalid": false, "disabled": true} | dark | label | 28Y-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | label | 28Y-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | label | 28Y-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | label | 28Y-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false, "disabled": true} | dark | label | 28Y-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | y | 29px | label h + root gap | match | = 29px |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | border width | 1px | 1px | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | border color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-disabled-dark)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | outline | none | none | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | trigger | 28S-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Invalid + {"invalid": false, "disabled": true} | dark | value text | 28X-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | value text | 28X-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | value text | 28X-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | value text | 28X-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false, "disabled": true} | dark | value text | 28X-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | value text | 28X-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Invalid + {"invalid": false, "disabled": true} | dark | value text | 28X-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Invalid + {"invalid": false, "disabled": true} | dark | indicator | 28U-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Invalid + {"invalid": false, "disabled": true} | dark | indicator | 28U-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | indicator | 28U-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Invalid + {"invalid": false, "disabled": true} | dark | clear trigger | - | present | absent | absent | match |  |
| Disabled | dark | root | 28H-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Disabled | dark | root | 28H-0 | width | 320px | 320px | match | = 320px |
| Disabled | dark | label | 28O-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Disabled | dark | label | 28O-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Disabled | dark | label | 28O-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Disabled | dark | label | 28O-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Disabled | dark | label | 28O-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Disabled | dark | trigger | 28I-0 | y | 29px | label h + root gap | match | = 29px |
| Disabled | dark | trigger | 28I-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Disabled | dark | trigger | 28I-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Disabled | dark | trigger | 28I-0 | border width | 1px | 1px | match |  |
| Disabled | dark | trigger | 28I-0 | border color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Disabled | dark | trigger | 28I-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Disabled | dark | trigger | 28I-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-disabled-dark)` | match |  |
| Disabled | dark | trigger | 28I-0 | outline | none | none | match |  |
| Disabled | dark | trigger | 28I-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Disabled | dark | value text | 28N-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Disabled | dark | value text | 28N-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Disabled | dark | value text | 28N-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Disabled | dark | value text | 28N-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Disabled | dark | value text | 28N-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Disabled | dark | value text | 28N-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Disabled | dark | value text | 28N-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Disabled | dark | indicator | 28K-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Disabled | dark | indicator | 28K-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Disabled | dark | indicator | 28K-0 | icon color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Disabled | dark | clear trigger | - | present | absent | absent | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | root | 284-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | root | 284-0 | width | 320px | 320px | match | = 320px |
| Invalid + {"invalid": false, "readOnly": true} | dark | label | 28B-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | label | 28B-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | label | 28B-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | label | 28B-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false, "readOnly": true} | dark | label | 28B-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | y | 29px | label h + root gap | match | = 29px |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | border width | 1px | 1px | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | background | oklch(0.44 0.0153 260) | `var(--tq-color-bg-subtle-dark)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | outline | none | none | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | trigger | 285-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Invalid + {"invalid": false, "readOnly": true} | dark | value text | 28A-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | value text | 28A-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | value text | 28A-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | value text | 28A-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Invalid + {"invalid": false, "readOnly": true} | dark | value text | 28A-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | value text | 28A-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Invalid + {"invalid": false, "readOnly": true} | dark | value text | 28A-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Invalid + {"invalid": false, "readOnly": true} | dark | indicator | 287-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Invalid + {"invalid": false, "readOnly": true} | dark | indicator | 287-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | indicator | 287-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Invalid + {"invalid": false, "readOnly": true} | dark | clear trigger | - | present | absent | absent | match |  |
| ReadOnly | dark | root | 27U-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ReadOnly | dark | root | 27U-0 | width | 320px | 320px | match | = 320px |
| ReadOnly | dark | label | 281-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| ReadOnly | dark | label | 281-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ReadOnly | dark | label | 281-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ReadOnly | dark | label | 281-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ReadOnly | dark | label | 281-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ReadOnly | dark | trigger | 27V-0 | y | 29px | label h + root gap | match | = 29px |
| ReadOnly | dark | trigger | 27V-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ReadOnly | dark | trigger | 27V-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| ReadOnly | dark | trigger | 27V-0 | border width | 1px | 1px | match |  |
| ReadOnly | dark | trigger | 27V-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| ReadOnly | dark | trigger | 27V-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| ReadOnly | dark | trigger | 27V-0 | background | oklch(0.44 0.0153 260) | `var(--tq-color-bg-subtle-dark)` | match |  |
| ReadOnly | dark | trigger | 27V-0 | outline | none | none | match |  |
| ReadOnly | dark | trigger | 27V-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| ReadOnly | dark | value text | 280-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| ReadOnly | dark | value text | 280-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ReadOnly | dark | value text | 280-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| ReadOnly | dark | value text | 280-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ReadOnly | dark | value text | 280-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ReadOnly | dark | value text | 280-0 | x in trigger | 13px | border + padding left | match | = 13px |
| ReadOnly | dark | value text | 280-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| ReadOnly | dark | indicator | 27X-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| ReadOnly | dark | indicator | 27X-0 | size | 16px | `var(--tq-space-4)` | match |  |
| ReadOnly | dark | indicator | 27X-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| ReadOnly | dark | clear trigger | - | present | absent | absent | match |  |
| Multiple | dark | root | 27H-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Multiple | dark | root | 27H-0 | width | 320px | 320px | match | = 320px |
| Multiple | dark | label | 27O-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Multiple | dark | label | 27O-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Multiple | dark | label | 27O-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Multiple | dark | label | 27O-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Multiple | dark | label | 27O-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Multiple | dark | trigger | 27I-0 | y | 29px | label h + root gap | match | = 29px |
| Multiple | dark | trigger | 27I-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Multiple | dark | trigger | 27I-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Multiple | dark | trigger | 27I-0 | border width | 1px | 1px | match |  |
| Multiple | dark | trigger | 27I-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Multiple | dark | trigger | 27I-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Multiple | dark | trigger | 27I-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Multiple | dark | trigger | 27I-0 | outline | none | none | match |  |
| Multiple | dark | trigger | 27I-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Multiple | dark | value text | 27N-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Multiple | dark | value text | 27N-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Multiple | dark | value text | 27N-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Multiple | dark | value text | 27N-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Multiple | dark | value text | 27N-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Multiple | dark | value text | 27N-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Multiple | dark | value text | 27N-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Multiple | dark | indicator | 27K-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Multiple | dark | indicator | 27K-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Multiple | dark | indicator | 27K-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Multiple | dark | clear trigger | - | present | absent | absent | match |  |
| ClearableWithValue | dark | root | 274-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ClearableWithValue | dark | root | 274-0 | width | 320px | 320px | match | = 320px |
| ClearableWithValue | dark | label | 27E-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| ClearableWithValue | dark | label | 27E-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ClearableWithValue | dark | label | 27E-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ClearableWithValue | dark | label | 27E-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ClearableWithValue | dark | label | 27E-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ClearableWithValue | dark | trigger | 275-0 | y | 29px | label h + root gap | match | = 29px |
| ClearableWithValue | dark | trigger | 275-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ClearableWithValue | dark | trigger | 275-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| ClearableWithValue | dark | trigger | 275-0 | border width | 1px | 1px | match |  |
| ClearableWithValue | dark | trigger | 275-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| ClearableWithValue | dark | trigger | 275-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| ClearableWithValue | dark | trigger | 275-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| ClearableWithValue | dark | trigger | 275-0 | outline | none | none | match |  |
| ClearableWithValue | dark | trigger | 275-0 | padding right | 64px | padding right 12 + End 52 (code: absolute indicator) | match | = 64px |
| ClearableWithValue | dark | value text | 27D-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| ClearableWithValue | dark | value text | 27D-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ClearableWithValue | dark | value text | 27D-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| ClearableWithValue | dark | value text | 27D-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ClearableWithValue | dark | value text | 27D-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ClearableWithValue | dark | value text | 27D-0 | x in trigger | 13px | border + padding left | match | = 13px |
| ClearableWithValue | dark | value text | 27D-0 | width | 242px | flex 1 = trigger w − border − padding − End | match | = 242px |
| ClearableWithValue | dark | indicator | 277-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| ClearableWithValue | dark | indicator | 277-0 | size | 16px | `var(--tq-space-4)` | match |  |
| ClearableWithValue | dark | indicator | 277-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| ClearableWithValue | dark | clear trigger | 27A-0 | x in trigger | 264px | indicator x − End gap − 24 | match | = 264px |
| ClearableWithValue | dark | clear trigger | 27A-0 | size | 24px | `var(--tq-space-6)` | match |  |
| ClearableWithValue | dark | clear trigger | 27A-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| ClearableWithValue | dark | clear trigger | 27B-0 | icon size | 14px | 14px | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | root | 26O-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | root | 26O-0 | width | 320px | 320px | match | = 320px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | label | 26Y-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | label | 26Y-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | label | 26Y-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | label | 26Y-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | label | 26Y-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | y | 29px | label h + root gap | match | = 29px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | border width | 1px | 1px | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | outline | none | none | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | trigger | 26P-0 | padding right | 64px | padding right 12 + End 52 (code: absolute indicator) | match | = 64px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | value text | 26X-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | value text | 26X-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | value text | 26X-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | value text | 26X-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | value text | 26X-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | value text | 26X-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | value text | 26X-0 | width | 242px | flex 1 = trigger w − border − padding − End | match | = 242px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | indicator | 26R-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | indicator | 26R-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | indicator | 26R-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | clear trigger | 26U-0 | x in trigger | 264px | indicator x − End gap − 24 | match | = 264px |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | clear trigger | 26U-0 | size | 24px | `var(--tq-space-6)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | clear trigger | 26U-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithValue + {"clearable": true, "defaultValue[0]": "solid"} | dark | clear trigger | 26V-0 | icon size | 14px | 14px | match |  |
| Clearable | dark | root | 26E-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Clearable | dark | root | 26E-0 | width | 320px | 320px | match | = 320px |
| Clearable | dark | label | 26L-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Clearable | dark | label | 26L-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Clearable | dark | label | 26L-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Clearable | dark | label | 26L-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Clearable | dark | label | 26L-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Clearable | dark | trigger | 26F-0 | y | 29px | label h + root gap | match | = 29px |
| Clearable | dark | trigger | 26F-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Clearable | dark | trigger | 26F-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Clearable | dark | trigger | 26F-0 | border width | 1px | 1px | match |  |
| Clearable | dark | trigger | 26F-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Clearable | dark | trigger | 26F-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Clearable | dark | trigger | 26F-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Clearable | dark | trigger | 26F-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| Clearable | dark | trigger | 26F-0 | outline width | 2px | 2px | match |  |
| Clearable | dark | trigger | 26F-0 | outline offset | 0px | 0px | match |  |
| Clearable | dark | trigger | 26F-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Clearable | dark | value text | 26K-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Clearable | dark | value text | 26K-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Clearable | dark | value text | 26K-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Clearable | dark | value text | 26K-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Clearable | dark | value text | 26K-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Clearable | dark | value text | 26K-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Clearable | dark | value text | 26K-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Clearable | dark | indicator | 26H-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Clearable | dark | indicator | 26H-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Clearable | dark | indicator | 26H-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Clearable | dark | clear trigger | - | present | absent (hidden) | absent | match |  |
| Sizes #1 | dark | root | 25X-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #1 | dark | root | 25X-0 | width | 320px | 320px | match | = 320px |
| Sizes #1 | dark | label | 264-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #1 | dark | label | 264-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #1 | dark | label | 264-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Sizes #1 | dark | label | 264-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #1 | dark | label | 264-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #1 | dark | trigger | 25Y-0 | y | 29px | label h + root gap | match | = 29px |
| Sizes #1 | dark | trigger | 25Y-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Sizes #1 | dark | trigger | 25Y-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Sizes #1 | dark | trigger | 25Y-0 | border width | 1px | 1px | match |  |
| Sizes #1 | dark | trigger | 25Y-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Sizes #1 | dark | trigger | 25Y-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Sizes #1 | dark | trigger | 25Y-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Sizes #1 | dark | trigger | 25Y-0 | outline | none | none | match |  |
| Sizes #1 | dark | trigger | 25Y-0 | padding right | 32px | padding right 8 + End 24 (code: absolute indicator) | match | = 32px |
| Sizes #1 | dark | value text | 263-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #1 | dark | value text | 263-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #1 | dark | value text | 263-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #1 | dark | value text | 263-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #1 | dark | value text | 263-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #1 | dark | value text | 263-0 | x in trigger | 9px | border + padding left | match | = 9px |
| Sizes #1 | dark | value text | 263-0 | width | 278px | flex 1 = trigger w − border − padding − End | match | = 278px |
| Sizes #1 | dark | indicator | 260-0 | x in trigger | 295px | trigger w − border − padding right − 16 | match | = 295px |
| Sizes #1 | dark | indicator | 260-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #1 | dark | indicator | 260-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Sizes #1 | dark | clear trigger | - | present | absent | absent | match |  |
| Sizes #2 | dark | root | 25M-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #2 | dark | root | 25M-0 | width | 320px | 320px | match | = 320px |
| Sizes #2 | dark | label | 25T-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #2 | dark | label | 25T-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #2 | dark | label | 25T-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Sizes #2 | dark | label | 25T-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #2 | dark | label | 25T-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #2 | dark | trigger | 25N-0 | y | 29px | label h + root gap | match | = 29px |
| Sizes #2 | dark | trigger | 25N-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Sizes #2 | dark | trigger | 25N-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Sizes #2 | dark | trigger | 25N-0 | border width | 1px | 1px | match |  |
| Sizes #2 | dark | trigger | 25N-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Sizes #2 | dark | trigger | 25N-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Sizes #2 | dark | trigger | 25N-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Sizes #2 | dark | trigger | 25N-0 | outline | none | none | match |  |
| Sizes #2 | dark | trigger | 25N-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Sizes #2 | dark | value text | 25S-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #2 | dark | value text | 25S-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #2 | dark | value text | 25S-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #2 | dark | value text | 25S-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #2 | dark | value text | 25S-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #2 | dark | value text | 25S-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Sizes #2 | dark | value text | 25S-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Sizes #2 | dark | indicator | 25P-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Sizes #2 | dark | indicator | 25P-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #2 | dark | indicator | 25P-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Sizes #2 | dark | clear trigger | - | present | absent | absent | match |  |
| Sizes #3 | dark | root | 25B-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Sizes #3 | dark | root | 25B-0 | width | 320px | 320px | match | = 320px |
| Sizes #3 | dark | label | 25I-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #3 | dark | label | 25I-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Sizes #3 | dark | label | 25I-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Sizes #3 | dark | label | 25I-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Sizes #3 | dark | label | 25I-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #3 | dark | trigger | 25C-0 | y | 29px | label h + root gap | match | = 29px |
| Sizes #3 | dark | trigger | 25C-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Sizes #3 | dark | trigger | 25C-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Sizes #3 | dark | trigger | 25C-0 | border width | 1px | 1px | match |  |
| Sizes #3 | dark | trigger | 25C-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Sizes #3 | dark | trigger | 25C-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Sizes #3 | dark | trigger | 25C-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Sizes #3 | dark | trigger | 25C-0 | outline | none | none | match |  |
| Sizes #3 | dark | trigger | 25C-0 | padding right | 40px | padding right 16 + End 24 (code: absolute indicator) | match | = 40px |
| Sizes #3 | dark | value text | 25H-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Sizes #3 | dark | value text | 25H-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Sizes #3 | dark | value text | 25H-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Sizes #3 | dark | value text | 25H-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Sizes #3 | dark | value text | 25H-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Sizes #3 | dark | value text | 25H-0 | x in trigger | 17px | border + padding left | match | = 17px |
| Sizes #3 | dark | value text | 25H-0 | width | 262px | flex 1 = trigger w − border − padding − End | match | = 262px |
| Sizes #3 | dark | indicator | 25E-0 | x in trigger | 287px | trigger w − border − padding right − 16 | match | = 287px |
| Sizes #3 | dark | indicator | 25E-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Sizes #3 | dark | indicator | 25E-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Sizes #3 | dark | clear trigger | - | present | absent | absent | match |  |
| Open | dark | root | 231-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Open | dark | root | 231-0 | width | 320px | 320px | match | = 320px |
| Open | dark | label | 23M-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open | dark | label | 23M-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | dark | label | 23M-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Open | dark | label | 23M-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | dark | label | 23M-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | dark | trigger | 23G-0 | y | 29px | label h + root gap | match | = 29px |
| Open | dark | trigger | 23G-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Open | dark | trigger | 23G-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Open | dark | trigger | 23G-0 | border width | 1px | 1px | match |  |
| Open | dark | trigger | 23G-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Open | dark | trigger | 23G-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | dark | trigger | 23G-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Open | dark | trigger | 23G-0 | outline | none | none | match |  |
| Open | dark | trigger | 23G-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Open | dark | value text | 23L-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open | dark | value text | 23L-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | dark | value text | 23L-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | dark | value text | 23L-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | dark | value text | 23L-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | dark | value text | 23L-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Open | dark | value text | 23L-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Open | dark | indicator | 23I-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Open | dark | indicator | 23I-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Open | dark | indicator | 23I-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Open | dark | clear trigger | - | present | absent | absent | match |  |
| Open | dark | content | 232-0 | y | 77px | label + gap + trigger + gap | match | = 77px |
| Open | dark | content | 232-0 | width | 320px | stretch = root width | match | = 320px |
| Open | dark | content | 232-0 | height | 186px | sum of items, groups and gaps | match | = 186px |
| Open | dark | content | 232-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Open | dark | content | 232-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Open | dark | content | 232-0 | border color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Open | dark | content | 232-0 | border width | 1px | 1px | match |  |
| Open | dark | content | 232-0 | radius | 8px | `var(--tq-radius-surface)` | match |  |
| Open | dark | content | 232-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Open | dark | content | 232-0 | shadow | oklch(0 0 0 / 0.4) 0px 4px 8px -2px; oklch(0 0 0 / 0.3) 0px 2px 4px -2px | #00000066 0px 4px 8px -2px, #0000004D 0px 2px 4px -2px | match | oklch(0 0 0 / 0.4) = #00000066, oklch(0 0 0 / 0.3) = #0000004D |
| Open | dark | item 1 | 23E-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | dark | item 1 | 23E-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | dark | item 1 | 23E-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | dark | item 1 | 23E-0 | background | none | none | match |  |
| Open | dark | item 1 text | 23F-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open | dark | item 1 text | 23F-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | dark | item 1 text | 23F-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | dark | item 1 text | 23F-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | dark | item 1 text | 23F-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | dark | item 1 text | 23F-0 | width | 294px | flex 1 in item | match | = 294px |
| Open | dark | item 1 indicator | - | present | no (hidden) | no | match |  |
| Open | dark | item 2 | 239-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | dark | item 2 | 239-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | dark | item 2 | 239-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | dark | item 2 | 239-0 | background | none | none | match |  |
| Open | dark | item 2 text | 23D-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open | dark | item 2 text | 23D-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | dark | item 2 text | 23D-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Open | dark | item 2 text | 23D-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | dark | item 2 text | 23D-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | dark | item 2 text | 23D-0 | width | 270px | flex 1 in item | match | = 270px |
| Open | dark | item 2 indicator | 23A-0 | present | yes | yes | match |  |
| Open | dark | item 2 indicator | 23A-0 | icon color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open | dark | item 3 | 237-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | dark | item 3 | 237-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | dark | item 3 | 237-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | dark | item 3 | 237-0 | background | none | none | match |  |
| Open | dark | item 3 text | 238-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open | dark | item 3 text | 238-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | dark | item 3 text | 238-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | dark | item 3 text | 238-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | dark | item 3 text | 238-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | dark | item 3 text | 238-0 | width | 294px | flex 1 in item | match | = 294px |
| Open | dark | item 3 indicator | - | present | no (hidden) | no | match |  |
| Open | dark | item 4 | 235-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | dark | item 4 | 235-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | dark | item 4 | 235-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | dark | item 4 | 235-0 | background | none | none | match |  |
| Open | dark | item 4 text | 236-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open | dark | item 4 text | 236-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | dark | item 4 text | 236-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | dark | item 4 text | 236-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | dark | item 4 text | 236-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | dark | item 4 text | 236-0 | width | 294px | flex 1 in item | match | = 294px |
| Open | dark | item 4 indicator | - | present | no (hidden) | no | match |  |
| Open | dark | item 5 | 233-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open | dark | item 5 | 233-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open | dark | item 5 | 233-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open | dark | item 5 | 233-0 | background | none | none | match |  |
| Open | dark | item 5 text | 234-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Open | dark | item 5 text | 234-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open | dark | item 5 text | 234-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open | dark | item 5 text | 234-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open | dark | item 5 text | 234-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open | dark | item 5 text | 234-0 | width | 294px | flex 1 in item | match | = 294px |
| Open | dark | item 5 indicator | - | present | no (hidden) | no | match |  |
| Open + hover-svelte | dark | root | 22D-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | dark | root | 22D-0 | width | 320px | 320px | match | = 320px |
| Open + hover-svelte | dark | label | 22Y-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open + hover-svelte | dark | label | 22Y-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | dark | label | 22Y-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Open + hover-svelte | dark | label | 22Y-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | dark | label | 22Y-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | dark | trigger | 22S-0 | y | 29px | label h + root gap | match | = 29px |
| Open + hover-svelte | dark | trigger | 22S-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Open + hover-svelte | dark | trigger | 22S-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Open + hover-svelte | dark | trigger | 22S-0 | border width | 1px | 1px | match |  |
| Open + hover-svelte | dark | trigger | 22S-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Open + hover-svelte | dark | trigger | 22S-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | dark | trigger | 22S-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Open + hover-svelte | dark | trigger | 22S-0 | outline | none | none | match |  |
| Open + hover-svelte | dark | trigger | 22S-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Open + hover-svelte | dark | value text | 22X-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open + hover-svelte | dark | value text | 22X-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | dark | value text | 22X-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | dark | value text | 22X-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | dark | value text | 22X-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | dark | value text | 22X-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Open + hover-svelte | dark | value text | 22X-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Open + hover-svelte | dark | indicator | 22U-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Open + hover-svelte | dark | indicator | 22U-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Open + hover-svelte | dark | indicator | 22U-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Open + hover-svelte | dark | clear trigger | - | present | absent | absent | match |  |
| Open + hover-svelte | dark | content | 22E-0 | y | 77px | label + gap + trigger + gap | match | = 77px |
| Open + hover-svelte | dark | content | 22E-0 | width | 320px | stretch = root width | match | = 320px |
| Open + hover-svelte | dark | content | 22E-0 | height | 186px | sum of items, groups and gaps | match | = 186px |
| Open + hover-svelte | dark | content | 22E-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Open + hover-svelte | dark | content | 22E-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Open + hover-svelte | dark | content | 22E-0 | border color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Open + hover-svelte | dark | content | 22E-0 | border width | 1px | 1px | match |  |
| Open + hover-svelte | dark | content | 22E-0 | radius | 8px | `var(--tq-radius-surface)` | match |  |
| Open + hover-svelte | dark | content | 22E-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Open + hover-svelte | dark | content | 22E-0 | shadow | oklch(0 0 0 / 0.4) 0px 4px 8px -2px; oklch(0 0 0 / 0.3) 0px 2px 4px -2px | #00000066 0px 4px 8px -2px, #0000004D 0px 2px 4px -2px | match | oklch(0 0 0 / 0.4) = #00000066, oklch(0 0 0 / 0.3) = #0000004D |
| Open + hover-svelte | dark | item 1 | 22Q-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | dark | item 1 | 22Q-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | dark | item 1 | 22Q-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | dark | item 1 | 22Q-0 | background | none | none | match |  |
| Open + hover-svelte | dark | item 1 text | 22R-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open + hover-svelte | dark | item 1 text | 22R-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | dark | item 1 text | 22R-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | dark | item 1 text | 22R-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | dark | item 1 text | 22R-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | dark | item 1 text | 22R-0 | width | 294px | flex 1 in item | match | = 294px |
| Open + hover-svelte | dark | item 1 indicator | - | present | no (hidden) | no | match |  |
| Open + hover-svelte | dark | item 2 | 22L-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | dark | item 2 | 22L-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | dark | item 2 | 22L-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | dark | item 2 | 22L-0 | background | none | none | match |  |
| Open + hover-svelte | dark | item 2 text | 22P-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open + hover-svelte | dark | item 2 text | 22P-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | dark | item 2 text | 22P-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Open + hover-svelte | dark | item 2 text | 22P-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | dark | item 2 text | 22P-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | dark | item 2 text | 22P-0 | width | 270px | flex 1 in item | match | = 270px |
| Open + hover-svelte | dark | item 2 indicator | 22M-0 | present | yes | yes | match |  |
| Open + hover-svelte | dark | item 2 indicator | 22M-0 | icon color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open + hover-svelte | dark | item 3 | 22J-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | dark | item 3 | 22J-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | dark | item 3 | 22J-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | dark | item 3 | 22J-0 | background | oklch(0.44 0.0153 260) | `var(--tq-color-bg-subtle-dark)` | match |  |
| Open + hover-svelte | dark | item 3 text | 22K-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open + hover-svelte | dark | item 3 text | 22K-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | dark | item 3 text | 22K-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | dark | item 3 text | 22K-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | dark | item 3 text | 22K-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | dark | item 3 text | 22K-0 | width | 294px | flex 1 in item | match | = 294px |
| Open + hover-svelte | dark | item 3 indicator | - | present | no (hidden) | no | match |  |
| Open + hover-svelte | dark | item 4 | 22H-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | dark | item 4 | 22H-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | dark | item 4 | 22H-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | dark | item 4 | 22H-0 | background | none | none | match |  |
| Open + hover-svelte | dark | item 4 text | 22I-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Open + hover-svelte | dark | item 4 text | 22I-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | dark | item 4 text | 22I-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | dark | item 4 text | 22I-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | dark | item 4 text | 22I-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | dark | item 4 text | 22I-0 | width | 294px | flex 1 in item | match | = 294px |
| Open + hover-svelte | dark | item 4 indicator | - | present | no (hidden) | no | match |  |
| Open + hover-svelte | dark | item 5 | 22F-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Open + hover-svelte | dark | item 5 | 22F-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Open + hover-svelte | dark | item 5 | 22F-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Open + hover-svelte | dark | item 5 | 22F-0 | background | none | none | match |  |
| Open + hover-svelte | dark | item 5 text | 22G-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Open + hover-svelte | dark | item 5 text | 22G-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Open + hover-svelte | dark | item 5 text | 22G-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Open + hover-svelte | dark | item 5 text | 22G-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Open + hover-svelte | dark | item 5 text | 22G-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Open + hover-svelte | dark | item 5 text | 22G-0 | width | 294px | flex 1 in item | match | = 294px |
| Open + hover-svelte | dark | item 5 indicator | - | present | no (hidden) | no | match |  |
| MultipleOpen | dark | root | 21M-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | dark | root | 21M-0 | width | 320px | 320px | match | = 320px |
| MultipleOpen | dark | label | 22A-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| MultipleOpen | dark | label | 22A-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | dark | label | 22A-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| MultipleOpen | dark | label | 22A-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | dark | label | 22A-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | dark | trigger | 224-0 | y | 29px | label h + root gap | match | = 29px |
| MultipleOpen | dark | trigger | 224-0 | height | 40px | `var(--tq-space-10)` | match |  |
| MultipleOpen | dark | trigger | 224-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| MultipleOpen | dark | trigger | 224-0 | border width | 1px | 1px | match |  |
| MultipleOpen | dark | trigger | 224-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| MultipleOpen | dark | trigger | 224-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | dark | trigger | 224-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| MultipleOpen | dark | trigger | 224-0 | outline | none | none | match |  |
| MultipleOpen | dark | trigger | 224-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| MultipleOpen | dark | value text | 229-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| MultipleOpen | dark | value text | 229-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | dark | value text | 229-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| MultipleOpen | dark | value text | 229-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | dark | value text | 229-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | dark | value text | 229-0 | x in trigger | 13px | border + padding left | match | = 13px |
| MultipleOpen | dark | value text | 229-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| MultipleOpen | dark | indicator | 226-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| MultipleOpen | dark | indicator | 226-0 | size | 16px | `var(--tq-space-4)` | match |  |
| MultipleOpen | dark | indicator | 226-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| MultipleOpen | dark | clear trigger | - | present | absent | absent | match |  |
| MultipleOpen | dark | content | 21N-0 | y | 77px | label + gap + trigger + gap | match | = 77px |
| MultipleOpen | dark | content | 21N-0 | width | 320px | stretch = root width | match | = 320px |
| MultipleOpen | dark | content | 21N-0 | height | 186px | sum of items, groups and gaps | match | = 186px |
| MultipleOpen | dark | content | 21N-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| MultipleOpen | dark | content | 21N-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| MultipleOpen | dark | content | 21N-0 | border color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| MultipleOpen | dark | content | 21N-0 | border width | 1px | 1px | match |  |
| MultipleOpen | dark | content | 21N-0 | radius | 8px | `var(--tq-radius-surface)` | match |  |
| MultipleOpen | dark | content | 21N-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| MultipleOpen | dark | content | 21N-0 | shadow | oklch(0 0 0 / 0.4) 0px 4px 8px -2px; oklch(0 0 0 / 0.3) 0px 2px 4px -2px | #00000066 0px 4px 8px -2px, #0000004D 0px 2px 4px -2px | match | oklch(0 0 0 / 0.4) = #00000066, oklch(0 0 0 / 0.3) = #0000004D |
| MultipleOpen | dark | item 1 | 21Z-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | dark | item 1 | 21Z-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | dark | item 1 | 21Z-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | dark | item 1 | 21Z-0 | background | none | none | match |  |
| MultipleOpen | dark | item 1 text | 223-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| MultipleOpen | dark | item 1 text | 223-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | dark | item 1 text | 223-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| MultipleOpen | dark | item 1 text | 223-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | dark | item 1 text | 223-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | dark | item 1 text | 223-0 | width | 270px | flex 1 in item | match | = 270px |
| MultipleOpen | dark | item 1 indicator | 220-0 | present | yes | yes | match |  |
| MultipleOpen | dark | item 1 indicator | 220-0 | icon color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| MultipleOpen | dark | item 2 | 21X-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | dark | item 2 | 21X-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | dark | item 2 | 21X-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | dark | item 2 | 21X-0 | background | none | none | match |  |
| MultipleOpen | dark | item 2 text | 21Y-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| MultipleOpen | dark | item 2 text | 21Y-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | dark | item 2 text | 21Y-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| MultipleOpen | dark | item 2 text | 21Y-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | dark | item 2 text | 21Y-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | dark | item 2 text | 21Y-0 | width | 294px | flex 1 in item | match | = 294px |
| MultipleOpen | dark | item 2 indicator | - | present | no (hidden) | no | match |  |
| MultipleOpen | dark | item 3 | 21S-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | dark | item 3 | 21S-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | dark | item 3 | 21S-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | dark | item 3 | 21S-0 | background | none | none | match |  |
| MultipleOpen | dark | item 3 text | 21W-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| MultipleOpen | dark | item 3 text | 21W-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | dark | item 3 text | 21W-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| MultipleOpen | dark | item 3 text | 21W-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | dark | item 3 text | 21W-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | dark | item 3 text | 21W-0 | width | 270px | flex 1 in item | match | = 270px |
| MultipleOpen | dark | item 3 indicator | 21T-0 | present | yes | yes | match |  |
| MultipleOpen | dark | item 3 indicator | 21T-0 | icon color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| MultipleOpen | dark | item 4 | 21Q-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | dark | item 4 | 21Q-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | dark | item 4 | 21Q-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | dark | item 4 | 21Q-0 | background | none | none | match |  |
| MultipleOpen | dark | item 4 text | 21R-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| MultipleOpen | dark | item 4 text | 21R-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | dark | item 4 text | 21R-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| MultipleOpen | dark | item 4 text | 21R-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | dark | item 4 text | 21R-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | dark | item 4 text | 21R-0 | width | 294px | flex 1 in item | match | = 294px |
| MultipleOpen | dark | item 4 indicator | - | present | no (hidden) | no | match |  |
| MultipleOpen | dark | item 5 | 21O-0 | height | 32px | `var(--tq-space-8)` | match |  |
| MultipleOpen | dark | item 5 | 21O-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| MultipleOpen | dark | item 5 | 21O-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| MultipleOpen | dark | item 5 | 21O-0 | background | none | none | match |  |
| MultipleOpen | dark | item 5 text | 21P-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| MultipleOpen | dark | item 5 text | 21P-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| MultipleOpen | dark | item 5 text | 21P-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| MultipleOpen | dark | item 5 text | 21P-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| MultipleOpen | dark | item 5 text | 21P-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| MultipleOpen | dark | item 5 text | 21P-0 | width | 294px | flex 1 in item | match | = 294px |
| MultipleOpen | dark | item 5 indicator | - | present | no (hidden) | no | match |  |
| Grouped | dark | root | 20W-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Grouped | dark | root | 20W-0 | width | 320px | 320px | match | = 320px |
| Grouped | dark | label | 21I-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Grouped | dark | label | 21I-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | dark | label | 21I-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Grouped | dark | label | 21I-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | dark | label | 21I-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | dark | trigger | 21C-0 | y | 29px | label h + root gap | match | = 29px |
| Grouped | dark | trigger | 21C-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Grouped | dark | trigger | 21C-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Grouped | dark | trigger | 21C-0 | border width | 1px | 1px | match |  |
| Grouped | dark | trigger | 21C-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Grouped | dark | trigger | 21C-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | dark | trigger | 21C-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Grouped | dark | trigger | 21C-0 | outline | none | none | match |  |
| Grouped | dark | trigger | 21C-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Grouped | dark | value text | 21H-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Grouped | dark | value text | 21H-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | dark | value text | 21H-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | dark | value text | 21H-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | dark | value text | 21H-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | dark | value text | 21H-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Grouped | dark | value text | 21H-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Grouped | dark | indicator | 21E-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Grouped | dark | indicator | 21E-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Grouped | dark | indicator | 21E-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Grouped | dark | clear trigger | - | present | absent | absent | match |  |
| Grouped | dark | content | 20X-0 | y | 77px | label + gap + trigger + gap | match | = 77px |
| Grouped | dark | content | 20X-0 | width | 320px | stretch = root width | match | = 320px |
| Grouped | dark | content | 20X-0 | height | 210px | sum of items, groups and gaps | match | = 210px |
| Grouped | dark | content | 20X-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Grouped | dark | content | 20X-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Grouped | dark | content | 20X-0 | border color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Grouped | dark | content | 20X-0 | border width | 1px | 1px | match |  |
| Grouped | dark | content | 20X-0 | radius | 8px | `var(--tq-radius-surface)` | match |  |
| Grouped | dark | content | 20X-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Grouped | dark | content | 20X-0 | shadow | oklch(0 0 0 / 0.4) 0px 4px 8px -2px; oklch(0 0 0 / 0.3) 0px 2px 4px -2px | #00000066 0px 4px 8px -2px, #0000004D 0px 2px 4px -2px | match | oklch(0 0 0 / 0.4) = #00000066, oklch(0 0 0 / 0.3) = #0000004D |
| Grouped | dark | item 1 | 218-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Grouped | dark | item 1 | 218-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | dark | item 1 | 218-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | dark | item 1 | 218-0 | background | none | none | match |  |
| Grouped | dark | item 1 text | 219-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Grouped | dark | item 1 text | 219-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | dark | item 1 text | 219-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | dark | item 1 text | 219-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | dark | item 1 text | 219-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | dark | item 1 text | 219-0 | width | 294px | flex 1 in item | match | = 294px |
| Grouped | dark | item 1 indicator | - | present | no (hidden) | no | match |  |
| Grouped | dark | item 2 | 216-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Grouped | dark | item 2 | 216-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | dark | item 2 | 216-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | dark | item 2 | 216-0 | background | none | none | match |  |
| Grouped | dark | item 2 text | 217-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Grouped | dark | item 2 text | 217-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | dark | item 2 text | 217-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | dark | item 2 text | 217-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | dark | item 2 text | 217-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | dark | item 2 text | 217-0 | width | 294px | flex 1 in item | match | = 294px |
| Grouped | dark | item 2 indicator | - | present | no (hidden) | no | match |  |
| Grouped | dark | item 3 | 211-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Grouped | dark | item 3 | 211-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | dark | item 3 | 211-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | dark | item 3 | 211-0 | background | none | none | match |  |
| Grouped | dark | item 3 text | 212-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Grouped | dark | item 3 text | 212-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | dark | item 3 text | 212-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | dark | item 3 text | 212-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | dark | item 3 text | 212-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | dark | item 3 text | 212-0 | width | 294px | flex 1 in item | match | = 294px |
| Grouped | dark | item 3 indicator | - | present | no (hidden) | no | match |  |
| Grouped | dark | item 4 | 20Z-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Grouped | dark | item 4 | 20Z-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | dark | item 4 | 20Z-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Grouped | dark | item 4 | 20Z-0 | background | none | none | match |  |
| Grouped | dark | item 4 text | 210-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Grouped | dark | item 4 text | 210-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Grouped | dark | item 4 text | 210-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Grouped | dark | item 4 text | 210-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Grouped | dark | item 4 text | 210-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | dark | item 4 text | 210-0 | width | 294px | flex 1 in item | match | = 294px |
| Grouped | dark | item 4 indicator | - | present | no (hidden) | no | match |  |
| Grouped | dark | group label | 21A-0 | padding top | 4px | `var(--tq-space-1)` | match |  |
| Grouped | dark | group label | 21A-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | dark | group label | 21A-0 | height | 26px | padding + xs line | match | = 26px |
| Grouped | dark | group label | 21A-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Grouped | dark | group label | 21A-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| Grouped | dark | group label | 21A-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Grouped | dark | group label | 21A-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| Grouped | dark | group label | 21A-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | dark | group | 215-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Grouped | dark | group label | 213-0 | padding top | 4px | `var(--tq-space-1)` | match |  |
| Grouped | dark | group label | 213-0 | padding left | 8px | `var(--tq-space-2)` | match |  |
| Grouped | dark | group label | 213-0 | height | 26px | padding + xs line | match | = 26px |
| Grouped | dark | group label | 213-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Grouped | dark | group label | 213-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| Grouped | dark | group label | 213-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Grouped | dark | group label | 213-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| Grouped | dark | group label | 213-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Grouped | dark | group | 20Y-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Default | dark | root | 20M-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Default | dark | root | 20M-0 | width | 320px | 320px | match | = 320px |
| Default | dark | label | 20T-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Default | dark | label | 20T-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Default | dark | label | 20T-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Default | dark | label | 20T-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Default | dark | label | 20T-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Default | dark | trigger | 20N-0 | y | 29px | label h + root gap | match | = 29px |
| Default | dark | trigger | 20N-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Default | dark | trigger | 20N-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Default | dark | trigger | 20N-0 | border width | 1px | 1px | match |  |
| Default | dark | trigger | 20N-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| Default | dark | trigger | 20N-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Default | dark | trigger | 20N-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Default | dark | trigger | 20N-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| Default | dark | trigger | 20N-0 | outline width | 2px | 2px | match |  |
| Default | dark | trigger | 20N-0 | outline offset | 0px | 0px | match |  |
| Default | dark | trigger | 20N-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| Default | dark | value text | 20S-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Default | dark | value text | 20S-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Default | dark | value text | 20S-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| Default | dark | value text | 20S-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Default | dark | value text | 20S-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Default | dark | value text | 20S-0 | x in trigger | 13px | border + padding left | match | = 13px |
| Default | dark | value text | 20S-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| Default | dark | indicator | 20P-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| Default | dark | indicator | 20P-0 | size | 16px | `var(--tq-space-4)` | match |  |
| Default | dark | indicator | 20P-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Default | dark | clear trigger | - | present | absent | absent | match |  |
| WithField | dark | field root | 20A-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithField | dark | root | 20C-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithField | dark | root | 20C-0 | width | 320px | 320px | match | = 320px |
| WithField | dark | label | 20J-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithField | dark | label | 20J-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithField | dark | label | 20J-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithField | dark | label | 20J-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithField | dark | label | 20J-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithField | dark | trigger | 20D-0 | y | 29px | label h + root gap | match | = 29px |
| WithField | dark | trigger | 20D-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithField | dark | trigger | 20D-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithField | dark | trigger | 20D-0 | border width | 1px | 1px | match |  |
| WithField | dark | trigger | 20D-0 | border color | oklch(0.63 0.018 260) | `var(--tq-color-border-strong-dark)` | match |  |
| WithField | dark | trigger | 20D-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithField | dark | trigger | 20D-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| WithField | dark | trigger | 20D-0 | outline | none | none | match |  |
| WithField | dark | trigger | 20D-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithField | dark | value text | 20I-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithField | dark | value text | 20I-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithField | dark | value text | 20I-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithField | dark | value text | 20I-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithField | dark | value text | 20I-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithField | dark | value text | 20I-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithField | dark | value text | 20I-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithField | dark | indicator | 20F-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithField | dark | indicator | 20F-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithField | dark | indicator | 20F-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithField | dark | clear trigger | - | present | absent | absent | match |  |
| WithField | dark | helper-text | 20B-0 | y | 77px | stacked with field gap | match | = 77px |
| WithField | dark | helper-text | 20B-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithField | dark | helper-text | 20B-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| WithField | dark | helper-text | 20B-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithField | dark | helper-text | 20B-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| WithField | dark | helper-text | 20B-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithFieldInvalid | dark | field root | 1ZW-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithFieldInvalid | dark | root | 1ZZ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| WithFieldInvalid | dark | root | 1ZZ-0 | width | 320px | 320px | match | = 320px |
| WithFieldInvalid | dark | label | 206-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| WithFieldInvalid | dark | label | 206-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithFieldInvalid | dark | label | 206-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithFieldInvalid | dark | label | 206-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithFieldInvalid | dark | label | 206-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithFieldInvalid | dark | trigger | 200-0 | y | 29px | label h + root gap | match | = 29px |
| WithFieldInvalid | dark | trigger | 200-0 | height | 40px | `var(--tq-space-10)` | match |  |
| WithFieldInvalid | dark | trigger | 200-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| WithFieldInvalid | dark | trigger | 200-0 | border width | 1px | 1px | match |  |
| WithFieldInvalid | dark | trigger | 200-0 | border color | oklch(0.73 0.1661 25) | `var(--tq-color-border-negative-dark)` | match |  |
| WithFieldInvalid | dark | trigger | 200-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| WithFieldInvalid | dark | trigger | 200-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| WithFieldInvalid | dark | trigger | 200-0 | outline | none | none | match |  |
| WithFieldInvalid | dark | trigger | 200-0 | padding right | 40px | padding right 12 + End 28 (code: absolute indicator) | match | = 40px |
| WithFieldInvalid | dark | value text | 205-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithFieldInvalid | dark | value text | 205-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| WithFieldInvalid | dark | value text | 205-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithFieldInvalid | dark | value text | 205-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| WithFieldInvalid | dark | value text | 205-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithFieldInvalid | dark | value text | 205-0 | x in trigger | 13px | border + padding left | match | = 13px |
| WithFieldInvalid | dark | value text | 205-0 | width | 266px | flex 1 = trigger w − border − padding − End | match | = 266px |
| WithFieldInvalid | dark | indicator | 202-0 | x in trigger | 291px | trigger w − border − padding right − 16 | match | = 291px |
| WithFieldInvalid | dark | indicator | 202-0 | size | 16px | `var(--tq-space-4)` | match |  |
| WithFieldInvalid | dark | indicator | 202-0 | icon color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithFieldInvalid | dark | clear trigger | - | present | absent | absent | match |  |
| WithFieldInvalid | dark | helper-text | 1ZY-0 | y | 77px | stacked with field gap | match | = 77px |
| WithFieldInvalid | dark | helper-text | 1ZY-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| WithFieldInvalid | dark | helper-text | 1ZY-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| WithFieldInvalid | dark | helper-text | 1ZY-0 | font weight | 400 | `var(--tq-font-weight-regular)` | match |  |
| WithFieldInvalid | dark | helper-text | 1ZY-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| WithFieldInvalid | dark | helper-text | 1ZY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| WithFieldInvalid | dark | error-text | 1ZX-0 | y | 103px | stacked with field gap | match | = 103px |
| WithFieldInvalid | dark | error-text | 1ZX-0 | color | oklch(0.9 0.0519 25) | `var(--tq-color-status-negative-fg-dark)` | match |  |
| WithFieldInvalid | dark | error-text | 1ZX-0 | font size | 12px | `var(--tq-font-size-xs)` | match |  |
| WithFieldInvalid | dark | error-text | 1ZX-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| WithFieldInvalid | dark | error-text | 1ZX-0 | line height | 18px | `var(--tq-font-line-height-normal)` | match | 1.5 × 12px |
| WithFieldInvalid | dark | error-text | 1ZX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
