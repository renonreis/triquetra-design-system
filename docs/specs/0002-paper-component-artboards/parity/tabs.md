# Parity table · Tabs

Spec [0002](../index.md), AC-6. Code at `e7dce45` (measured in Storybook at `5b402ec`, same `packages/react`), Paper file `01M7R4TP595GEKCEE8SHQCTJMX`, page `p-4-0`, artboards `2EE-0` (light) and `2NZ-0` (`Tabs · Dark`). Code values are Storybook computed styles; Paper values are the authored styles from `get_jsx`, with each `var(--tq-…)` resolved through the mode's `tokens.json` before comparing (_Normalization_ in the spec).

## Light

| Story / cell | Mode | Part | Paper node | Property | Code (Storybook) | Paper | Result | Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Line (anatomy) | light | root | 2EV-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | root | 2EV-0 | direction | column | column | match |  |
| Line (anatomy) | light | root | 2EV-0 | width | 512px | 512px | match | = 512px |
| Line (anatomy) | light | list rule | 2EX-0 | present | 1px bottom border | absolute Rule | match |  |
| Line (anatomy) | light | list rule | 2EX-0 | thickness | 1px | 1px | match |  |
| Line (anatomy) | light | list rule | 2EX-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Line (anatomy) | light | list rule | 2EX-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Line (anatomy) | light | list | 2EW-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| Line (anatomy) | light | list | 2EW-0 | direction | row | row | match |  |
| Line (anatomy) | light | list | 2EW-0 | height | 40px | trigger h + list padding | match | = 40px |
| Line (anatomy) | light | trigger | - | count | 4 | 4 | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | justify | center | center | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | indicator width | 2px | 2px | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | bottomleft radius | 0px | 0px | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | bottomright radius | 0px | 0px | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | background | none | none | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | shadow | none | none | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) | 2EY-0 | outline | none | none | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) text | 2EZ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) text | 2EZ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) text | 2EZ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (anatomy) | light | trigger 1 (tokens, selected) text | 2EZ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | light | trigger 1 (tokens, selected) text | 2EZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | justify | center | center | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | indicator width | 2px | 2px | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | indicator color | transparent | #00000000 | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | bottomleft radius | 0px | 0px | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | bottomright radius | 0px | 0px | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | background | none | none | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | shadow | none | none | match |  |
| Line (anatomy) | light | trigger 2 (components) | 2F0-0 | outline | none | none | match |  |
| Line (anatomy) | light | trigger 2 (components) text | 2F1-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Line (anatomy) | light | trigger 2 (components) text | 2F1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | light | trigger 2 (components) text | 2F1-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (anatomy) | light | trigger 2 (components) text | 2F1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | light | trigger 2 (components) text | 2F1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | justify | center | center | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | indicator width | 2px | 2px | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | indicator color | transparent | #00000000 | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | bottomleft radius | 0px | 0px | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | bottomright radius | 0px | 0px | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | background | none | none | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | shadow | none | none | match |  |
| Line (anatomy) | light | trigger 3 (patterns) | 2F2-0 | outline | none | none | match |  |
| Line (anatomy) | light | trigger 3 (patterns) text | 2F3-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) text | 2F3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) text | 2F3-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (anatomy) | light | trigger 3 (patterns) text | 2F3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | light | trigger 3 (patterns) text | 2F3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | justify | center | center | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | indicator width | 2px | 2px | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | indicator color | transparent | #00000000 | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | bottomleft radius | 0px | 0px | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | bottomright radius | 0px | 0px | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | background | none | none | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | shadow | none | none | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) | 2F4-0 | outline | none | none | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) text | 2F5-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) text | 2F5-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) text | 2F5-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (anatomy) | light | trigger 4 (archive, disabled) text | 2F5-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | light | trigger 4 (archive, disabled) text | 2F5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (anatomy) | light | content | 2F6-0 | y | 56px | code list h + root gap | match | = 56px |
| Line (anatomy) | light | content | 2F6-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | light | content | 2F6-0 | padding | 0px | 0px | match |  |
| Line (anatomy) | light | content | 2F6-0 | outline | none | none | match |  |
| Line (anatomy) | light | content text | 2F7-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Line (anatomy) | light | content text | 2F7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | light | content text | 2F7-0 | font weight | 400 | 400 | match |  |
| Line (anatomy) | light | content text | 2F7-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | light | content text | 2F7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | light | root | 2G2-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Line | light | root | 2G2-0 | direction | column | column | match |  |
| Line | light | root | 2G2-0 | width | 512px | 512px | match | = 512px |
| Line | light | list rule | 2G4-0 | present | 1px bottom border | absolute Rule | match |  |
| Line | light | list rule | 2G4-0 | thickness | 1px | 1px | match |  |
| Line | light | list rule | 2G4-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Line | light | list rule | 2G4-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Line | light | list | 2G3-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| Line | light | list | 2G3-0 | direction | row | row | match |  |
| Line | light | list | 2G3-0 | height | 40px | trigger h + list padding | match | = 40px |
| Line | light | trigger | - | count | 4 | 4 | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | justify | center | center | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | indicator width | 2px | 2px | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | bottomleft radius | 0px | 0px | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | bottomright radius | 0px | 0px | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | background | none | none | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | shadow | none | none | match |  |
| Line | light | trigger 1 (tokens, selected) | 2G5-0 | outline | none | none | match |  |
| Line | light | trigger 1 (tokens, selected) text | 2G6-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Line | light | trigger 1 (tokens, selected) text | 2G6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | light | trigger 1 (tokens, selected) text | 2G6-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line | light | trigger 1 (tokens, selected) text | 2G6-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | light | trigger 1 (tokens, selected) text | 2G6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | justify | center | center | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | indicator width | 2px | 2px | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | indicator color | transparent | #00000000 | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | bottomleft radius | 0px | 0px | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | bottomright radius | 0px | 0px | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | background | none | none | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | shadow | none | none | match |  |
| Line | light | trigger 2 (components) | 2G7-0 | outline | none | none | match |  |
| Line | light | trigger 2 (components) text | 2G8-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Line | light | trigger 2 (components) text | 2G8-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | light | trigger 2 (components) text | 2G8-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line | light | trigger 2 (components) text | 2G8-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | light | trigger 2 (components) text | 2G8-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | justify | center | center | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | indicator width | 2px | 2px | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | indicator color | transparent | #00000000 | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | bottomleft radius | 0px | 0px | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | bottomright radius | 0px | 0px | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | background | none | none | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | shadow | none | none | match |  |
| Line | light | trigger 3 (patterns) | 2G9-0 | outline | none | none | match |  |
| Line | light | trigger 3 (patterns) text | 2GA-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Line | light | trigger 3 (patterns) text | 2GA-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | light | trigger 3 (patterns) text | 2GA-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line | light | trigger 3 (patterns) text | 2GA-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | light | trigger 3 (patterns) text | 2GA-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | justify | center | center | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | indicator width | 2px | 2px | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | indicator color | transparent | #00000000 | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | bottomleft radius | 0px | 0px | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | bottomright radius | 0px | 0px | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | background | none | none | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | shadow | none | none | match |  |
| Line | light | trigger 4 (archive, disabled) | 2GB-0 | outline | none | none | match |  |
| Line | light | trigger 4 (archive, disabled) text | 2GC-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Line | light | trigger 4 (archive, disabled) text | 2GC-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | light | trigger 4 (archive, disabled) text | 2GC-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line | light | trigger 4 (archive, disabled) text | 2GC-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | light | trigger 4 (archive, disabled) text | 2GC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | light | content | 2GD-0 | y | 56px | code list h + root gap | match | = 56px |
| Line | light | content | 2GD-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | light | content | 2GD-0 | padding | 0px | 0px | match |  |
| Line | light | content | 2GD-0 | outline | none | none | match |  |
| Line | light | content text | 2GE-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Line | light | content text | 2GE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | light | content text | 2GE-0 | font weight | 400 | 400 | match |  |
| Line | light | content text | 2GE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | light | content text | 2GE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | light | root | 2GH-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | root | 2GH-0 | direction | column | column | match |  |
| Enclosed | light | root | 2GH-0 | width | 512px | 512px | match | = 512px |
| Enclosed | light | list | 2GI-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Enclosed | light | list | 2GI-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Enclosed | light | list | 2GI-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | list | 2GI-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-subtle)` | match |  |
| Enclosed | light | list | 2GI-0 | border width | 0px | 0px | match |  |
| Enclosed | light | list | 2GI-0 | cross size (width) | self-start | alignSelf start | match | 381.516 < root 512 |
| Enclosed | light | list | 2GI-0 | direction | row | row | match |  |
| Enclosed | light | list | 2GI-0 | height | 48px | trigger h + list padding | match | = 48px |
| Enclosed | light | trigger | - | count | 4 | 4 | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | justify | center | center | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F (spread 0 dropped by Paper) |
| Enclosed | light | trigger 1 (tokens, selected) | 2GJ-0 | outline | none | none | match |  |
| Enclosed | light | trigger 1 (tokens, selected) text | 2GK-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) text | 2GK-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) text | 2GK-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Enclosed | light | trigger 1 (tokens, selected) text | 2GK-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | light | trigger 1 (tokens, selected) text | 2GK-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | justify | center | center | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | background | none | none | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | shadow | none | none | match |  |
| Enclosed | light | trigger 2 (components) | 2GL-0 | outline | none | none | match |  |
| Enclosed | light | trigger 2 (components) text | 2GM-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Enclosed | light | trigger 2 (components) text | 2GM-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | light | trigger 2 (components) text | 2GM-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Enclosed | light | trigger 2 (components) text | 2GM-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | light | trigger 2 (components) text | 2GM-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | justify | center | center | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | background | none | none | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | shadow | none | none | match |  |
| Enclosed | light | trigger 3 (patterns) | 2GN-0 | outline | none | none | match |  |
| Enclosed | light | trigger 3 (patterns) text | 2GO-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Enclosed | light | trigger 3 (patterns) text | 2GO-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | light | trigger 3 (patterns) text | 2GO-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Enclosed | light | trigger 3 (patterns) text | 2GO-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | light | trigger 3 (patterns) text | 2GO-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | justify | center | center | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | background | none | none | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | shadow | none | none | match |  |
| Enclosed | light | trigger 4 (archive, disabled) | 2GP-0 | outline | none | none | match |  |
| Enclosed | light | trigger 4 (archive, disabled) text | 2GQ-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) text | 2GQ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) text | 2GQ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Enclosed | light | trigger 4 (archive, disabled) text | 2GQ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | light | trigger 4 (archive, disabled) text | 2GQ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | light | content | 2GR-0 | y | 64px | code list h + root gap | match | = 64px |
| Enclosed | light | content | 2GR-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | light | content | 2GR-0 | padding | 0px | 0px | match |  |
| Enclosed | light | content | 2GR-0 | outline | none | none | match |  |
| Enclosed | light | content text | 2GS-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Enclosed | light | content text | 2GS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | light | content text | 2GS-0 | font weight | 400 | 400 | match |  |
| Enclosed | light | content text | 2GS-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | light | content text | 2GS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | light | root | 2GY-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | root | 2GY-0 | direction | column | column | match |  |
| Hover (line) | light | root | 2GY-0 | width | 512px | 512px | match | = 512px |
| Hover (line) | light | list rule | 2H0-0 | present | 1px bottom border | absolute Rule | match |  |
| Hover (line) | light | list rule | 2H0-0 | thickness | 1px | 1px | match |  |
| Hover (line) | light | list rule | 2H0-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Hover (line) | light | list rule | 2H0-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Hover (line) | light | list | 2GZ-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| Hover (line) | light | list | 2GZ-0 | direction | row | row | match |  |
| Hover (line) | light | list | 2GZ-0 | height | 40px | trigger h + list padding | match | = 40px |
| Hover (line) | light | trigger | - | count | 4 | 4 | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | justify | center | center | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | indicator width | 2px | 2px | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | bottomleft radius | 0px | 0px | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | bottomright radius | 0px | 0px | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | background | none | none | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | shadow | none | none | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) | 2H1-0 | outline | none | none | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) text | 2H2-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) text | 2H2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) text | 2H2-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (line) | light | trigger 1 (tokens, selected) text | 2H2-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | light | trigger 1 (tokens, selected) text | 2H2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | justify | center | center | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | indicator width | 2px | 2px | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | indicator color | transparent | #00000000 | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | bottomleft radius | 0px | 0px | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | bottomright radius | 0px | 0px | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | background | none | none | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | shadow | none | none | match |  |
| Hover (line) | light | trigger 2 (components) | 2H3-0 | outline | none | none | match |  |
| Hover (line) | light | trigger 2 (components) text | 2H4-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover (line) | light | trigger 2 (components) text | 2H4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | light | trigger 2 (components) text | 2H4-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (line) | light | trigger 2 (components) text | 2H4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | light | trigger 2 (components) text | 2H4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | justify | center | center | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | indicator width | 2px | 2px | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | indicator color | transparent | #00000000 | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | bottomleft radius | 0px | 0px | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | bottomright radius | 0px | 0px | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | background | none | none | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | shadow | none | none | match |  |
| Hover (line) | light | trigger 3 (patterns) | 2H5-0 | outline | none | none | match |  |
| Hover (line) | light | trigger 3 (patterns) text | 2H6-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover (line) | light | trigger 3 (patterns) text | 2H6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | light | trigger 3 (patterns) text | 2H6-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (line) | light | trigger 3 (patterns) text | 2H6-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | light | trigger 3 (patterns) text | 2H6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | justify | center | center | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | indicator width | 2px | 2px | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | indicator color | transparent | #00000000 | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | bottomleft radius | 0px | 0px | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | bottomright radius | 0px | 0px | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | background | none | none | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | shadow | none | none | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) | 2H7-0 | outline | none | none | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) text | 2H8-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) text | 2H8-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) text | 2H8-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (line) | light | trigger 4 (archive, disabled) text | 2H8-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | light | trigger 4 (archive, disabled) text | 2H8-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | light | content | 2H9-0 | y | 56px | code list h + root gap | match | = 56px |
| Hover (line) | light | content | 2H9-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | light | content | 2H9-0 | padding | 0px | 0px | match |  |
| Hover (line) | light | content | 2H9-0 | outline | none | none | match |  |
| Hover (line) | light | content text | 2HA-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover (line) | light | content text | 2HA-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | light | content text | 2HA-0 | font weight | 400 | 400 | match |  |
| Hover (line) | light | content text | 2HA-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | light | content text | 2HA-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | light | root | 2HD-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | root | 2HD-0 | direction | column | column | match |  |
| Hover (enclosed) | light | root | 2HD-0 | width | 512px | 512px | match | = 512px |
| Hover (enclosed) | light | list | 2HE-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Hover (enclosed) | light | list | 2HE-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Hover (enclosed) | light | list | 2HE-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | list | 2HE-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-subtle)` | match |  |
| Hover (enclosed) | light | list | 2HE-0 | border width | 0px | 0px | match |  |
| Hover (enclosed) | light | list | 2HE-0 | cross size (width) | self-start | alignSelf start | match | 381.516 < root 512 |
| Hover (enclosed) | light | list | 2HE-0 | direction | row | row | match |  |
| Hover (enclosed) | light | list | 2HE-0 | height | 48px | trigger h + list padding | match | = 48px |
| Hover (enclosed) | light | trigger | - | count | 4 | 4 | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | justify | center | center | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F (spread 0 dropped by Paper) |
| Hover (enclosed) | light | trigger 1 (tokens, selected) | 2HF-0 | outline | none | none | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) text | 2HG-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) text | 2HG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) text | 2HG-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (enclosed) | light | trigger 1 (tokens, selected) text | 2HG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | light | trigger 1 (tokens, selected) text | 2HG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | justify | center | center | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | background | none | none | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | shadow | none | none | match |  |
| Hover (enclosed) | light | trigger 2 (components) | 2HH-0 | outline | none | none | match |  |
| Hover (enclosed) | light | trigger 2 (components) text | 2HI-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) text | 2HI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) text | 2HI-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (enclosed) | light | trigger 2 (components) text | 2HI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | light | trigger 2 (components) text | 2HI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | justify | center | center | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | background | none | none | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | shadow | none | none | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) | 2HJ-0 | outline | none | none | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) text | 2HK-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) text | 2HK-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) text | 2HK-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (enclosed) | light | trigger 3 (patterns) text | 2HK-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | light | trigger 3 (patterns) text | 2HK-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | justify | center | center | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | background | none | none | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | shadow | none | none | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) | 2HL-0 | outline | none | none | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) text | 2HM-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) text | 2HM-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) text | 2HM-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (enclosed) | light | trigger 4 (archive, disabled) text | 2HM-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | light | trigger 4 (archive, disabled) text | 2HM-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | light | content | 2HN-0 | y | 64px | code list h + root gap | match | = 64px |
| Hover (enclosed) | light | content | 2HN-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | light | content | 2HN-0 | padding | 0px | 0px | match |  |
| Hover (enclosed) | light | content | 2HN-0 | outline | none | none | match |  |
| Hover (enclosed) | light | content text | 2HO-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Hover (enclosed) | light | content text | 2HO-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | light | content text | 2HO-0 | font weight | 400 | 400 | match |  |
| Hover (enclosed) | light | content text | 2HO-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | light | content text | 2HO-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | light | root | 2HV-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | root | 2HV-0 | direction | column | column | match |  |
| FocusVisible (line) | light | root | 2HV-0 | width | 512px | 512px | match | = 512px |
| FocusVisible (line) | light | list rule | 2HX-0 | present | 1px bottom border | absolute Rule | match |  |
| FocusVisible (line) | light | list rule | 2HX-0 | thickness | 1px | 1px | match |  |
| FocusVisible (line) | light | list rule | 2HX-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| FocusVisible (line) | light | list rule | 2HX-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| FocusVisible (line) | light | list | 2HW-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| FocusVisible (line) | light | list | 2HW-0 | direction | row | row | match |  |
| FocusVisible (line) | light | list | 2HW-0 | height | 40px | trigger h + list padding | match | = 40px |
| FocusVisible (line) | light | trigger | - | count | 4 | 4 | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | justify | center | center | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | indicator width | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | bottomleft radius | 0px | 0px | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | bottomright radius | 0px | 0px | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | background | none | none | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | shadow | none | none | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) | 2HY-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) text | 2HZ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) text | 2HZ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) text | 2HZ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (line) | light | trigger 1 (tokens, selected) text | 2HZ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | light | trigger 1 (tokens, selected) text | 2HZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | justify | center | center | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | indicator width | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | indicator color | transparent | #00000000 | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | bottomleft radius | 0px | 0px | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | bottomright radius | 0px | 0px | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | background | none | none | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | shadow | none | none | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 2 (components) | 2I0-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 2 (components) text | 2I1-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) text | 2I1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) text | 2I1-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (line) | light | trigger 2 (components) text | 2I1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | light | trigger 2 (components) text | 2I1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | justify | center | center | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | indicator width | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | indicator color | transparent | #00000000 | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | bottomleft radius | 0px | 0px | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | bottomright radius | 0px | 0px | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | background | none | none | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | shadow | none | none | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) | 2I2-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) text | 2I3-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) text | 2I3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) text | 2I3-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (line) | light | trigger 3 (patterns) text | 2I3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | light | trigger 3 (patterns) text | 2I3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | justify | center | center | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | indicator width | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | indicator color | transparent | #00000000 | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | bottomleft radius | 0px | 0px | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | bottomright radius | 0px | 0px | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | background | none | none | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | shadow | none | none | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) | 2I4-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) text | 2I5-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) text | 2I5-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) text | 2I5-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (line) | light | trigger 4 (archive, disabled) text | 2I5-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | light | trigger 4 (archive, disabled) text | 2I5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | light | content | 2I6-0 | y | 56px | code list h + root gap | match | = 56px |
| FocusVisible (line) | light | content | 2I6-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | light | content | 2I6-0 | padding | 0px | 0px | match |  |
| FocusVisible (line) | light | content | 2I6-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (line) | light | content | 2I6-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | light | content | 2I6-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | light | content text | 2I7-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| FocusVisible (line) | light | content text | 2I7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | light | content text | 2I7-0 | font weight | 400 | 400 | match |  |
| FocusVisible (line) | light | content text | 2I7-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | light | content text | 2I7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | light | root | 2IA-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | root | 2IA-0 | direction | column | column | match |  |
| FocusVisible (enclosed) | light | root | 2IA-0 | width | 512px | 512px | match | = 512px |
| FocusVisible (enclosed) | light | list | 2IB-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| FocusVisible (enclosed) | light | list | 2IB-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| FocusVisible (enclosed) | light | list | 2IB-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | list | 2IB-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-subtle)` | match |  |
| FocusVisible (enclosed) | light | list | 2IB-0 | border width | 0px | 0px | match |  |
| FocusVisible (enclosed) | light | list | 2IB-0 | cross size (width) | self-start | alignSelf start | match | 381.516 < root 512 |
| FocusVisible (enclosed) | light | list | 2IB-0 | direction | row | row | match |  |
| FocusVisible (enclosed) | light | list | 2IB-0 | height | 48px | trigger h + list padding | match | = 48px |
| FocusVisible (enclosed) | light | trigger | - | count | 4 | 4 | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | justify | center | center | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F (spread 0 dropped by Paper) |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) | 2IC-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) text | 2ID-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) text | 2ID-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) text | 2ID-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) text | 2ID-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | light | trigger 1 (tokens, selected) text | 2ID-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | justify | center | center | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | background | none | none | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | shadow | none | none | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) | 2IE-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) text | 2IF-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) text | 2IF-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) text | 2IF-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (enclosed) | light | trigger 2 (components) text | 2IF-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | light | trigger 2 (components) text | 2IF-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | justify | center | center | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | background | none | none | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | shadow | none | none | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) | 2IG-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) text | 2IH-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) text | 2IH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) text | 2IH-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (enclosed) | light | trigger 3 (patterns) text | 2IH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | light | trigger 3 (patterns) text | 2IH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | justify | center | center | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | background | none | none | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | shadow | none | none | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) | 2II-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) text | 2IJ-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) text | 2IJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) text | 2IJ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) text | 2IJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | light | trigger 4 (archive, disabled) text | 2IJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | light | content | 2IK-0 | y | 64px | code list h + root gap | match | = 64px |
| FocusVisible (enclosed) | light | content | 2IK-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | light | content | 2IK-0 | padding | 0px | 0px | match |  |
| FocusVisible (enclosed) | light | content | 2IK-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| FocusVisible (enclosed) | light | content | 2IK-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | content | 2IK-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | light | content text | 2IL-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| FocusVisible (enclosed) | light | content text | 2IL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | light | content text | 2IL-0 | font weight | 400 | 400 | match |  |
| FocusVisible (enclosed) | light | content text | 2IL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | light | content text | 2IL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | light | root | 2IR-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | root | 2IR-0 | direction | column | column | match |  |
| SecondSelected | light | root | 2IR-0 | width | 512px | 512px | match | = 512px |
| SecondSelected | light | list rule | 2IT-0 | present | 1px bottom border | absolute Rule | match |  |
| SecondSelected | light | list rule | 2IT-0 | thickness | 1px | 1px | match |  |
| SecondSelected | light | list rule | 2IT-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| SecondSelected | light | list rule | 2IT-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| SecondSelected | light | list | 2IS-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| SecondSelected | light | list | 2IS-0 | direction | row | row | match |  |
| SecondSelected | light | list | 2IS-0 | height | 40px | trigger h + list padding | match | = 40px |
| SecondSelected | light | trigger | - | count | 4 | 4 | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | height | 40px | `var(--tq-space-10)` | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | justify | center | center | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | indicator width | 2px | 2px | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | indicator color | transparent | #00000000 | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | bottomleft radius | 0px | 0px | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | bottomright radius | 0px | 0px | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | background | none | none | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | shadow | none | none | match |  |
| SecondSelected | light | trigger 1 (tokens) | 2IU-0 | outline | none | none | match |  |
| SecondSelected | light | trigger 1 (tokens) text | 2IV-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| SecondSelected | light | trigger 1 (tokens) text | 2IV-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | light | trigger 1 (tokens) text | 2IV-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| SecondSelected | light | trigger 1 (tokens) text | 2IV-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | light | trigger 1 (tokens) text | 2IV-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | height | 40px | `var(--tq-space-10)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | justify | center | center | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | indicator width | 2px | 2px | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | bottomleft radius | 0px | 0px | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | bottomright radius | 0px | 0px | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | background | none | none | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | shadow | none | none | match |  |
| SecondSelected | light | trigger 2 (components, selected) | 2IW-0 | outline | none | none | match |  |
| SecondSelected | light | trigger 2 (components, selected) text | 2IX-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) text | 2IX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) text | 2IX-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| SecondSelected | light | trigger 2 (components, selected) text | 2IX-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | light | trigger 2 (components, selected) text | 2IX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | height | 40px | `var(--tq-space-10)` | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | justify | center | center | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | indicator width | 2px | 2px | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | indicator color | transparent | #00000000 | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | bottomleft radius | 0px | 0px | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | bottomright radius | 0px | 0px | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | background | none | none | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | shadow | none | none | match |  |
| SecondSelected | light | trigger 3 (patterns) | 2IY-0 | outline | none | none | match |  |
| SecondSelected | light | trigger 3 (patterns) text | 2IZ-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| SecondSelected | light | trigger 3 (patterns) text | 2IZ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | light | trigger 3 (patterns) text | 2IZ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| SecondSelected | light | trigger 3 (patterns) text | 2IZ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | light | trigger 3 (patterns) text | 2IZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | height | 40px | `var(--tq-space-10)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | justify | center | center | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | indicator width | 2px | 2px | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | indicator color | transparent | #00000000 | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | bottomleft radius | 0px | 0px | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | bottomright radius | 0px | 0px | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | background | none | none | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | shadow | none | none | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) | 2J0-0 | outline | none | none | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) text | 2J1-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) text | 2J1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) text | 2J1-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| SecondSelected | light | trigger 4 (archive, disabled) text | 2J1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | light | trigger 4 (archive, disabled) text | 2J1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | light | content | 2J2-0 | y | 56px | code list h + root gap | match | = 56px |
| SecondSelected | light | content | 2J2-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | light | content | 2J2-0 | padding | 0px | 0px | match |  |
| SecondSelected | light | content | 2J2-0 | outline | none | none | match |  |
| SecondSelected | light | content text | 2J3-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| SecondSelected | light | content text | 2J3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | light | content text | 2J3-0 | font weight | 400 | 400 | match |  |
| SecondSelected | light | content text | 2J3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | light | content text | 2J3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | light | root | 2J6-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | root | 2J6-0 | direction | column | column | match |  |
| ManualActivation (after play) | light | root | 2J6-0 | width | 512px | 512px | match | = 512px |
| ManualActivation (after play) | light | list rule | 2J8-0 | present | 1px bottom border | absolute Rule | match |  |
| ManualActivation (after play) | light | list rule | 2J8-0 | thickness | 1px | 1px | match |  |
| ManualActivation (after play) | light | list rule | 2J8-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| ManualActivation (after play) | light | list rule | 2J8-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| ManualActivation (after play) | light | list | 2J7-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| ManualActivation (after play) | light | list | 2J7-0 | direction | row | row | match |  |
| ManualActivation (after play) | light | list | 2J7-0 | height | 40px | trigger h + list padding | match | = 40px |
| ManualActivation (after play) | light | trigger | - | count | 4 | 4 | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | justify | center | center | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | indicator width | 2px | 2px | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | bottomleft radius | 0px | 0px | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | bottomright radius | 0px | 0px | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | background | none | none | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | shadow | none | none | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) | 2J9-0 | outline | none | none | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) text | 2JA-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) text | 2JA-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) text | 2JA-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) text | 2JA-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | light | trigger 1 (tokens, selected) text | 2JA-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | justify | center | center | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | indicator width | 2px | 2px | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | indicator color | transparent | #00000000 | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | bottomleft radius | 0px | 0px | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | bottomright radius | 0px | 0px | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | background | none | none | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | shadow | none | none | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | outline color | oklch(0.63 0.2 258) | `var(--tq-color-border-focus)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | outline width | 2px | 2px | match |  |
| ManualActivation (after play) | light | trigger 2 (components) | 2JB-0 | outline offset | 2px | 2px | match |  |
| ManualActivation (after play) | light | trigger 2 (components) text | 2JC-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) text | 2JC-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) text | 2JC-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ManualActivation (after play) | light | trigger 2 (components) text | 2JC-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | light | trigger 2 (components) text | 2JC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | justify | center | center | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | indicator width | 2px | 2px | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | indicator color | transparent | #00000000 | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | bottomleft radius | 0px | 0px | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | bottomright radius | 0px | 0px | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | background | none | none | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | shadow | none | none | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) | 2JD-0 | outline | none | none | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) text | 2JE-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) text | 2JE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) text | 2JE-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ManualActivation (after play) | light | trigger 3 (patterns) text | 2JE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | light | trigger 3 (patterns) text | 2JE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | justify | center | center | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | indicator width | 2px | 2px | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | indicator color | transparent | #00000000 | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | bottomleft radius | 0px | 0px | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | bottomright radius | 0px | 0px | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | background | none | none | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | shadow | none | none | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) | 2JF-0 | outline | none | none | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) text | 2JG-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) text | 2JG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) text | 2JG-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) text | 2JG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | light | trigger 4 (archive, disabled) text | 2JG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | light | content | 2JH-0 | y | 56px | code list h + root gap | match | = 56px |
| ManualActivation (after play) | light | content | 2JH-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | light | content | 2JH-0 | padding | 0px | 0px | match |  |
| ManualActivation (after play) | light | content | 2JH-0 | outline | none | none | match |  |
| ManualActivation (after play) | light | content text | 2JI-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| ManualActivation (after play) | light | content text | 2JI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | light | content text | 2JI-0 | font weight | 400 | 400 | match |  |
| ManualActivation (after play) | light | content text | 2JI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | light | content text | 2JI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | light | root | 2JX-0 | gap | 24px | `var(--tq-space-6)` | match |  |
| Vertical | light | root | 2JX-0 | direction | row | row | match |  |
| Vertical | light | root | 2JX-0 | width | 512px | 512px | match | = 512px |
| Vertical | light | list rule | 2JZ-0 | present | 1px right border | absolute Rule | match |  |
| Vertical | light | list rule | 2JZ-0 | thickness | 1px | 1px | match |  |
| Vertical | light | list rule | 2JZ-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Vertical | light | list rule | 2JZ-0 | pinned | top 0 bottom 0 right 0 | top 0px bottom 0px right 0px | match |  |
| Vertical | light | list | 2JY-0 | cross size (height) | stretch | alignSelf stretch | match | 160 = root = tabs, so the class decides (line stretches) |
| Vertical | light | list | 2JY-0 | direction | column | column | match |  |
| Vertical | light | list | 2JY-0 | trigger stack | 160px | sum of trigger h + gaps | match | = 160px |
| Vertical | light | trigger | - | count | 4 | 4 | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | justify | flex-start | start | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | indicator width | 2px | 2px | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | topright radius | 0px | 0px | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | bottomright radius | 0px | 0px | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | background | none | none | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | shadow | none | none | match |  |
| Vertical | light | trigger 1 (tokens, selected) | 2K0-0 | outline | none | none | match |  |
| Vertical | light | trigger 1 (tokens, selected) text | 2K1-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) text | 2K1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) text | 2K1-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Vertical | light | trigger 1 (tokens, selected) text | 2K1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | light | trigger 1 (tokens, selected) text | 2K1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | justify | flex-start | start | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | indicator width | 2px | 2px | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | indicator color | transparent | #00000000 | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | topright radius | 0px | 0px | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | bottomright radius | 0px | 0px | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | background | none | none | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | shadow | none | none | match |  |
| Vertical | light | trigger 2 (components) | 2K2-0 | outline | none | none | match |  |
| Vertical | light | trigger 2 (components) text | 2K3-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Vertical | light | trigger 2 (components) text | 2K3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | light | trigger 2 (components) text | 2K3-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Vertical | light | trigger 2 (components) text | 2K3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | light | trigger 2 (components) text | 2K3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | justify | flex-start | start | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | indicator width | 2px | 2px | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | indicator color | transparent | #00000000 | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | topright radius | 0px | 0px | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | bottomright radius | 0px | 0px | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | background | none | none | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | shadow | none | none | match |  |
| Vertical | light | trigger 3 (patterns) | 2K4-0 | outline | none | none | match |  |
| Vertical | light | trigger 3 (patterns) text | 2K5-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Vertical | light | trigger 3 (patterns) text | 2K5-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | light | trigger 3 (patterns) text | 2K5-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Vertical | light | trigger 3 (patterns) text | 2K5-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | light | trigger 3 (patterns) text | 2K5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | justify | flex-start | start | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | indicator width | 2px | 2px | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | indicator color | transparent | #00000000 | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | topright radius | 0px | 0px | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | bottomright radius | 0px | 0px | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | background | none | none | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | shadow | none | none | match |  |
| Vertical | light | trigger 4 (archive, disabled) | 2K6-0 | outline | none | none | match |  |
| Vertical | light | trigger 4 (archive, disabled) text | 2K7-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) text | 2K7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) text | 2K7-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Vertical | light | trigger 4 (archive, disabled) text | 2K7-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | light | trigger 4 (archive, disabled) text | 2K7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | light | content | 2K8-0 | x | 141.359px | code list w + root gap | match | = 141.359px |
| Vertical | light | content | 2K8-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | light | content | 2K8-0 | padding | 0px | 0px | match |  |
| Vertical | light | content | 2K8-0 | flex | grow (fills root) | 1 0% | match |  |
| Vertical | light | content | 2K8-0 | outline | none | none | match |  |
| Vertical | light | content text | 2K9-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Vertical | light | content text | 2K9-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | light | content text | 2K9-0 | font weight | 400 | 400 | match |  |
| Vertical | light | content text | 2K9-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | light | content text | 2K9-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | light | root | 2KC-0 | gap | 24px | `var(--tq-space-6)` | match |  |
| VerticalEnclosed | light | root | 2KC-0 | direction | row | row | match |  |
| VerticalEnclosed | light | root | 2KC-0 | width | 512px | 512px | match | = 512px |
| VerticalEnclosed | light | list | 2KD-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| VerticalEnclosed | light | list | 2KD-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| VerticalEnclosed | light | list | 2KD-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | list | 2KD-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-subtle)` | match |  |
| VerticalEnclosed | light | list | 2KD-0 | border width | 0px | 0px | match |  |
| VerticalEnclosed | light | list | 2KD-0 | cross size (height) | self-start | alignSelf start | match | 180 = root = tabs, so the class decides (enclosed self-start) |
| VerticalEnclosed | light | list | 2KD-0 | direction | column | column | match |  |
| VerticalEnclosed | light | list | 2KD-0 | trigger stack | 172px | sum of trigger h + gaps | match | = 172px |
| VerticalEnclosed | light | trigger | - | count | 4 | 4 | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | justify | flex-start | start | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F (spread 0 dropped by Paper) |
| VerticalEnclosed | light | trigger 1 (tokens, selected) | 2KE-0 | outline | none | none | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) text | 2KF-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) text | 2KF-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) text | 2KF-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalEnclosed | light | trigger 1 (tokens, selected) text | 2KF-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | light | trigger 1 (tokens, selected) text | 2KF-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | justify | flex-start | start | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | background | none | none | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | shadow | none | none | match |  |
| VerticalEnclosed | light | trigger 2 (components) | 2KG-0 | outline | none | none | match |  |
| VerticalEnclosed | light | trigger 2 (components) text | 2KH-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) text | 2KH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) text | 2KH-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalEnclosed | light | trigger 2 (components) text | 2KH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | light | trigger 2 (components) text | 2KH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | justify | flex-start | start | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | background | none | none | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | shadow | none | none | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) | 2KI-0 | outline | none | none | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) text | 2KJ-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) text | 2KJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) text | 2KJ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalEnclosed | light | trigger 3 (patterns) text | 2KJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | light | trigger 3 (patterns) text | 2KJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | justify | flex-start | start | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | background | none | none | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | shadow | none | none | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) | 2KK-0 | outline | none | none | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) text | 2KL-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) text | 2KL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) text | 2KL-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalEnclosed | light | trigger 4 (archive, disabled) text | 2KL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | light | trigger 4 (archive, disabled) text | 2KL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | light | content | 2KM-0 | x | 147.359px | code list w + root gap | match | = 147.359px |
| VerticalEnclosed | light | content | 2KM-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | light | content | 2KM-0 | padding | 0px | 0px | match |  |
| VerticalEnclosed | light | content | 2KM-0 | flex | grow (fills root) | 1 0% | match |  |
| VerticalEnclosed | light | content | 2KM-0 | outline | none | none | match |  |
| VerticalEnclosed | light | content text | 2KN-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalEnclosed | light | content text | 2KN-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | light | content text | 2KN-0 | font weight | 400 | 400 | match |  |
| VerticalEnclosed | light | content text | 2KN-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | light | content text | 2KN-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | light | root | 2KT-0 | gap | 24px | `var(--tq-space-6)` | match |  |
| VerticalTallPanel (line) | light | root | 2KT-0 | direction | row | row | match |  |
| VerticalTallPanel (line) | light | root | 2KT-0 | width | 512px | 512px | match | = 512px |
| VerticalTallPanel (line) | light | list rule | 2KV-0 | present | 1px right border | absolute Rule | match |  |
| VerticalTallPanel (line) | light | list rule | 2KV-0 | thickness | 1px | 1px | match |  |
| VerticalTallPanel (line) | light | list rule | 2KV-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| VerticalTallPanel (line) | light | list rule | 2KV-0 | pinned | top 0 bottom 0 right 0 | top 0px bottom 0px right 0px | match |  |
| VerticalTallPanel (line) | light | list | 2KU-0 | cross size (height) | stretch | alignSelf stretch | match | 189 = root 189 > tabs 80 |
| VerticalTallPanel (line) | light | list | 2KU-0 | direction | column | column | match |  |
| VerticalTallPanel (line) | light | list | 2KU-0 | trigger stack | 80px | sum of trigger h + gaps | match | = 80px |
| VerticalTallPanel (line) | light | trigger | - | count | 2 | 2 | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | justify | flex-start | start | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | indicator width | 2px | 2px | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | topright radius | 0px | 0px | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | bottomright radius | 0px | 0px | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | background | none | none | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | shadow | none | none | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) | 2KW-0 | outline | none | none | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) text | 2KX-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) text | 2KX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) text | 2KX-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) text | 2KX-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | light | trigger 1 (tokens, selected) text | 2KX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | justify | flex-start | start | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | indicator width | 2px | 2px | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | indicator color | transparent | #00000000 | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | topright radius | 0px | 0px | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | bottomright radius | 0px | 0px | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | background | none | none | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | shadow | none | none | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) | 2KY-0 | outline | none | none | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) text | 2KZ-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) text | 2KZ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) text | 2KZ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalTallPanel (line) | light | trigger 2 (components) text | 2KZ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | light | trigger 2 (components) text | 2KZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | light | content | 2L0-0 | x | 141.359px | code list w + root gap | match | = 141.359px |
| VerticalTallPanel (line) | light | content | 2L0-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | light | content | 2L0-0 | padding | 0px | 0px | match |  |
| VerticalTallPanel (line) | light | content | 2L0-0 | flex | grow (fills root) | 1 0% | match |  |
| VerticalTallPanel (line) | light | content | 2L0-0 | outline | none | none | match |  |
| VerticalTallPanel (line) | light | content text | 2L1-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (line) | light | content text | 2L1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | light | content text | 2L1-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | light | content text | 2L1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | light | content text | 2L1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | light | content | - | paragraphs | 5 | 5 | match |  |
| VerticalTallPanel (line) | light | content p1 | 2L1-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (line) | light | content p1 | 2L1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | light | content p1 | 2L1-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | light | content p1 | 2L1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | light | content p1 | 2L1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | light | content p2 | 2L2-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (line) | light | content p2 | 2L2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | light | content p2 | 2L2-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | light | content p2 | 2L2-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | light | content p2 | 2L2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | light | content p3 | 2L3-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (line) | light | content p3 | 2L3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | light | content p3 | 2L3-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | light | content p3 | 2L3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | light | content p3 | 2L3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | light | content p4 | 2L4-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (line) | light | content p4 | 2L4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | light | content p4 | 2L4-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | light | content p4 | 2L4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | light | content p4 | 2L4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | light | content p5 | 2L5-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (line) | light | content p5 | 2L5-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | light | content p5 | 2L5-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | light | content p5 | 2L5-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | light | content p5 | 2L5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | light | root | 2L8-0 | gap | 24px | `var(--tq-space-6)` | match |  |
| VerticalTallPanel (enclosed) | light | root | 2L8-0 | direction | row | row | match |  |
| VerticalTallPanel (enclosed) | light | root | 2L8-0 | width | 512px | 512px | match | = 512px |
| VerticalTallPanel (enclosed) | light | list | 2L9-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| VerticalTallPanel (enclosed) | light | list | 2L9-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| VerticalTallPanel (enclosed) | light | list | 2L9-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | list | 2L9-0 | background | oklch(0.96 0.0045 260) | `var(--tq-color-bg-subtle)` | match |  |
| VerticalTallPanel (enclosed) | light | list | 2L9-0 | border width | 0px | 0px | match |  |
| VerticalTallPanel (enclosed) | light | list | 2L9-0 | cross size (height) | self-start | alignSelf start | match | 92 < root 189 |
| VerticalTallPanel (enclosed) | light | list | 2L9-0 | direction | column | column | match |  |
| VerticalTallPanel (enclosed) | light | list | 2L9-0 | trigger stack | 84px | sum of trigger h + gaps | match | = 84px |
| VerticalTallPanel (enclosed) | light | trigger | - | count | 2 | 2 | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | justify | flex-start | start | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | background | oklch(1 0 260) | `var(--tq-color-bg-surface)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | shadow | oklch(0.23 0.009 260 / 0.06) 0px 1px 2px 0px | #1A1D210F 0px 1px 2px | match | oklch(0.23 0.009 260 / 0.06) = #1A1D210F (spread 0 dropped by Paper) |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) | 2LA-0 | outline | none | none | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) text | 2LB-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) text | 2LB-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) text | 2LB-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) text | 2LB-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | light | trigger 1 (tokens, selected) text | 2LB-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | justify | flex-start | start | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | background | none | none | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | shadow | none | none | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) | 2LC-0 | outline | none | none | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) text | 2LD-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) text | 2LD-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) text | 2LD-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) text | 2LD-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | light | trigger 2 (components) text | 2LD-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | light | content | 2LE-0 | x | 147.359px | code list w + root gap | match | = 147.359px |
| VerticalTallPanel (enclosed) | light | content | 2LE-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | light | content | 2LE-0 | padding | 0px | 0px | match |  |
| VerticalTallPanel (enclosed) | light | content | 2LE-0 | flex | grow (fills root) | 1 0% | match |  |
| VerticalTallPanel (enclosed) | light | content | 2LE-0 | outline | none | none | match |  |
| VerticalTallPanel (enclosed) | light | content text | 2LF-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (enclosed) | light | content text | 2LF-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | light | content text | 2LF-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | light | content text | 2LF-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | light | content text | 2LF-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | light | content | - | paragraphs | 5 | 5 | match |  |
| VerticalTallPanel (enclosed) | light | content p1 | 2LF-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (enclosed) | light | content p1 | 2LF-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | light | content p1 | 2LF-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | light | content p1 | 2LF-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | light | content p1 | 2LF-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | light | content p2 | 2LG-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (enclosed) | light | content p2 | 2LG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | light | content p2 | 2LG-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | light | content p2 | 2LG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | light | content p2 | 2LG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | light | content p3 | 2LH-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (enclosed) | light | content p3 | 2LH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | light | content p3 | 2LH-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | light | content p3 | 2LH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | light | content p3 | 2LH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | light | content p4 | 2LI-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (enclosed) | light | content p4 | 2LI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | light | content p4 | 2LI-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | light | content p4 | 2LI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | light | content p4 | 2LI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | light | content p5 | 2LJ-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| VerticalTallPanel (enclosed) | light | content p5 | 2LJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | light | content p5 | 2LJ-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | light | content p5 | 2LJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | light | content p5 | 2LJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | light | root | 2LU-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Small | light | root | 2LU-0 | direction | column | column | match |  |
| Small | light | root | 2LU-0 | width | 512px | 512px | match | = 512px |
| Small | light | list rule | 2LW-0 | present | 1px bottom border | absolute Rule | match |  |
| Small | light | list rule | 2LW-0 | thickness | 1px | 1px | match |  |
| Small | light | list rule | 2LW-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Small | light | list rule | 2LW-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Small | light | list | 2LV-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 329.516 |
| Small | light | list | 2LV-0 | direction | row | row | match |  |
| Small | light | list | 2LV-0 | height | 32px | trigger h + list padding | match | = 32px |
| Small | light | trigger | - | count | 4 | 4 | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | padding right | 12px | `var(--tq-space-3)` | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | justify | center | center | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | indicator width | 2px | 2px | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | bottomleft radius | 0px | 0px | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | bottomright radius | 0px | 0px | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | background | none | none | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | shadow | none | none | match |  |
| Small | light | trigger 1 (tokens, selected) | 2LX-0 | outline | none | none | match |  |
| Small | light | trigger 1 (tokens, selected) text | 2LY-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Small | light | trigger 1 (tokens, selected) text | 2LY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | light | trigger 1 (tokens, selected) text | 2LY-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Small | light | trigger 1 (tokens, selected) text | 2LY-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | light | trigger 1 (tokens, selected) text | 2LY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | padding right | 12px | `var(--tq-space-3)` | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | justify | center | center | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | indicator width | 2px | 2px | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | indicator color | transparent | #00000000 | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | bottomleft radius | 0px | 0px | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | bottomright radius | 0px | 0px | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | background | none | none | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | shadow | none | none | match |  |
| Small | light | trigger 2 (components) | 2LZ-0 | outline | none | none | match |  |
| Small | light | trigger 2 (components) text | 2M0-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Small | light | trigger 2 (components) text | 2M0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | light | trigger 2 (components) text | 2M0-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Small | light | trigger 2 (components) text | 2M0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | light | trigger 2 (components) text | 2M0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | padding right | 12px | `var(--tq-space-3)` | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | justify | center | center | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | indicator width | 2px | 2px | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | indicator color | transparent | #00000000 | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | bottomleft radius | 0px | 0px | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | bottomright radius | 0px | 0px | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | background | none | none | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | shadow | none | none | match |  |
| Small | light | trigger 3 (patterns) | 2M1-0 | outline | none | none | match |  |
| Small | light | trigger 3 (patterns) text | 2M2-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Small | light | trigger 3 (patterns) text | 2M2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | light | trigger 3 (patterns) text | 2M2-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Small | light | trigger 3 (patterns) text | 2M2-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | light | trigger 3 (patterns) text | 2M2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | padding right | 12px | `var(--tq-space-3)` | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | justify | center | center | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | indicator width | 2px | 2px | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | indicator color | transparent | #00000000 | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | bottomleft radius | 0px | 0px | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | bottomright radius | 0px | 0px | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | background | none | none | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | shadow | none | none | match |  |
| Small | light | trigger 4 (archive, disabled) | 2M3-0 | outline | none | none | match |  |
| Small | light | trigger 4 (archive, disabled) text | 2M4-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Small | light | trigger 4 (archive, disabled) text | 2M4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | light | trigger 4 (archive, disabled) text | 2M4-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Small | light | trigger 4 (archive, disabled) text | 2M4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | light | trigger 4 (archive, disabled) text | 2M4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | light | content | 2M5-0 | y | 48px | code list h + root gap | match | = 48px |
| Small | light | content | 2M5-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | light | content | 2M5-0 | padding | 0px | 0px | match |  |
| Small | light | content | 2M5-0 | outline | none | none | match |  |
| Small | light | content text | 2M6-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Small | light | content text | 2M6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | light | content text | 2M6-0 | font weight | 400 | 400 | match |  |
| Small | light | content text | 2M6-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | light | content text | 2M6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | light | root | 2M9-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | root | 2M9-0 | direction | column | column | match |  |
| Line (sizes md) | light | root | 2M9-0 | width | 512px | 512px | match | = 512px |
| Line (sizes md) | light | list rule | 2MB-0 | present | 1px bottom border | absolute Rule | match |  |
| Line (sizes md) | light | list rule | 2MB-0 | thickness | 1px | 1px | match |  |
| Line (sizes md) | light | list rule | 2MB-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Line (sizes md) | light | list rule | 2MB-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Line (sizes md) | light | list | 2MA-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| Line (sizes md) | light | list | 2MA-0 | direction | row | row | match |  |
| Line (sizes md) | light | list | 2MA-0 | height | 40px | trigger h + list padding | match | = 40px |
| Line (sizes md) | light | trigger | - | count | 4 | 4 | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | justify | center | center | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | indicator width | 2px | 2px | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | bottomleft radius | 0px | 0px | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | bottomright radius | 0px | 0px | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | background | none | none | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | shadow | none | none | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) | 2MC-0 | outline | none | none | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) text | 2MD-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) text | 2MD-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) text | 2MD-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (sizes md) | light | trigger 1 (tokens, selected) text | 2MD-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | light | trigger 1 (tokens, selected) text | 2MD-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | justify | center | center | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | indicator width | 2px | 2px | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | indicator color | transparent | #00000000 | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | bottomleft radius | 0px | 0px | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | bottomright radius | 0px | 0px | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | background | none | none | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | shadow | none | none | match |  |
| Line (sizes md) | light | trigger 2 (components) | 2ME-0 | outline | none | none | match |  |
| Line (sizes md) | light | trigger 2 (components) text | 2MF-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Line (sizes md) | light | trigger 2 (components) text | 2MF-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | light | trigger 2 (components) text | 2MF-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (sizes md) | light | trigger 2 (components) text | 2MF-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | light | trigger 2 (components) text | 2MF-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | justify | center | center | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | indicator width | 2px | 2px | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | indicator color | transparent | #00000000 | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | bottomleft radius | 0px | 0px | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | bottomright radius | 0px | 0px | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | background | none | none | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | shadow | none | none | match |  |
| Line (sizes md) | light | trigger 3 (patterns) | 2MG-0 | outline | none | none | match |  |
| Line (sizes md) | light | trigger 3 (patterns) text | 2MH-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) text | 2MH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) text | 2MH-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (sizes md) | light | trigger 3 (patterns) text | 2MH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | light | trigger 3 (patterns) text | 2MH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | justify | center | center | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | indicator width | 2px | 2px | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | indicator color | transparent | #00000000 | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | bottomleft radius | 0px | 0px | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | bottomright radius | 0px | 0px | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | background | none | none | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | shadow | none | none | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) | 2MI-0 | outline | none | none | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) text | 2MJ-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) text | 2MJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) text | 2MJ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (sizes md) | light | trigger 4 (archive, disabled) text | 2MJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | light | trigger 4 (archive, disabled) text | 2MJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | light | content | 2MK-0 | y | 56px | code list h + root gap | match | = 56px |
| Line (sizes md) | light | content | 2MK-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | light | content | 2MK-0 | padding | 0px | 0px | match |  |
| Line (sizes md) | light | content | 2MK-0 | outline | none | none | match |  |
| Line (sizes md) | light | content text | 2ML-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Line (sizes md) | light | content text | 2ML-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | light | content text | 2ML-0 | font weight | 400 | 400 | match |  |
| Line (sizes md) | light | content text | 2ML-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | light | content text | 2ML-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | light | root | 2MO-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Large | light | root | 2MO-0 | direction | column | column | match |  |
| Large | light | root | 2MO-0 | width | 512px | 512px | match | = 512px |
| Large | light | list rule | 2MQ-0 | present | 1px bottom border | absolute Rule | match |  |
| Large | light | list rule | 2MQ-0 | thickness | 1px | 1px | match |  |
| Large | light | list rule | 2MQ-0 | color | oklch(0.91 0.009 260) | `var(--tq-color-border-default)` | match |  |
| Large | light | list rule | 2MQ-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Large | light | list | 2MP-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 426.875 |
| Large | light | list | 2MP-0 | direction | row | row | match |  |
| Large | light | list | 2MP-0 | height | 48px | trigger h + list padding | match | = 48px |
| Large | light | trigger | - | count | 4 | 4 | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | padding left | 20px | `var(--tq-space-5)` | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | padding right | 20px | `var(--tq-space-5)` | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | justify | center | center | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | indicator width | 2px | 2px | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | indicator color | oklch(0.23 0.009 260) | `var(--tq-color-action-primary-bg)` | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | bottomleft radius | 0px | 0px | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | bottomright radius | 0px | 0px | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | background | none | none | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | shadow | none | none | match |  |
| Large | light | trigger 1 (tokens, selected) | 2MR-0 | outline | none | none | match |  |
| Large | light | trigger 1 (tokens, selected) text | 2MS-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Large | light | trigger 1 (tokens, selected) text | 2MS-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Large | light | trigger 1 (tokens, selected) text | 2MS-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Large | light | trigger 1 (tokens, selected) text | 2MS-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Large | light | trigger 1 (tokens, selected) text | 2MS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | padding left | 20px | `var(--tq-space-5)` | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | padding right | 20px | `var(--tq-space-5)` | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | justify | center | center | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | indicator width | 2px | 2px | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | indicator color | transparent | #00000000 | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | bottomleft radius | 0px | 0px | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | bottomright radius | 0px | 0px | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | background | none | none | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | shadow | none | none | match |  |
| Large | light | trigger 2 (components) | 2MT-0 | outline | none | none | match |  |
| Large | light | trigger 2 (components) text | 2MU-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Large | light | trigger 2 (components) text | 2MU-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Large | light | trigger 2 (components) text | 2MU-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Large | light | trigger 2 (components) text | 2MU-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Large | light | trigger 2 (components) text | 2MU-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | padding left | 20px | `var(--tq-space-5)` | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | padding right | 20px | `var(--tq-space-5)` | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | justify | center | center | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | indicator width | 2px | 2px | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | indicator color | transparent | #00000000 | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | bottomleft radius | 0px | 0px | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | bottomright radius | 0px | 0px | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | background | none | none | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | shadow | none | none | match |  |
| Large | light | trigger 3 (patterns) | 2MV-0 | outline | none | none | match |  |
| Large | light | trigger 3 (patterns) text | 2MW-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-muted)` | match |  |
| Large | light | trigger 3 (patterns) text | 2MW-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Large | light | trigger 3 (patterns) text | 2MW-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Large | light | trigger 3 (patterns) text | 2MW-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Large | light | trigger 3 (patterns) text | 2MW-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | padding left | 20px | `var(--tq-space-5)` | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | padding right | 20px | `var(--tq-space-5)` | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | justify | center | center | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | indicator width | 2px | 2px | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | indicator color | transparent | #00000000 | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | bottomleft radius | 0px | 0px | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | bottomright radius | 0px | 0px | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | background | none | none | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | shadow | none | none | match |  |
| Large | light | trigger 4 (archive, disabled) | 2MX-0 | outline | none | none | match |  |
| Large | light | trigger 4 (archive, disabled) text | 2MY-0 | color | oklch(0.73 0.0171 260) | `var(--tq-color-fg-disabled)` | match |  |
| Large | light | trigger 4 (archive, disabled) text | 2MY-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Large | light | trigger 4 (archive, disabled) text | 2MY-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Large | light | trigger 4 (archive, disabled) text | 2MY-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Large | light | trigger 4 (archive, disabled) text | 2MY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | light | content | 2MZ-0 | y | 64px | code list h + root gap | match | = 64px |
| Large | light | content | 2MZ-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | light | content | 2MZ-0 | padding | 0px | 0px | match |  |
| Large | light | content | 2MZ-0 | outline | none | none | match |  |
| Large | light | content text | 2N0-0 | color | oklch(0.23 0.009 260) | `var(--tq-color-fg-default)` | match |  |
| Large | light | content text | 2N0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Large | light | content text | 2N0-0 | font weight | 400 | 400 | match |  |
| Large | light | content text | 2N0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Large | light | content text | 2N0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |

## Dark

| Story / cell | Mode | Part | Paper node | Property | Code (Storybook) | Paper | Result | Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Line (anatomy) | dark | root | 2WP-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | root | 2WP-0 | direction | column | column | match |  |
| Line (anatomy) | dark | root | 2WP-0 | width | 512px | 512px | match | = 512px |
| Line (anatomy) | dark | list rule | 2X1-0 | present | 1px bottom border | absolute Rule | match |  |
| Line (anatomy) | dark | list rule | 2X1-0 | thickness | 1px | 1px | match |  |
| Line (anatomy) | dark | list rule | 2X1-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Line (anatomy) | dark | list rule | 2X1-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Line (anatomy) | dark | list | 2WS-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| Line (anatomy) | dark | list | 2WS-0 | direction | row | row | match |  |
| Line (anatomy) | dark | list | 2WS-0 | height | 40px | trigger h + list padding | match | = 40px |
| Line (anatomy) | dark | trigger | - | count | 4 | 4 | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | justify | center | center | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | indicator width | 2px | 2px | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | bottomleft radius | 0px | 0px | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | bottomright radius | 0px | 0px | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | background | none | none | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | shadow | none | none | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) | 2WZ-0 | outline | none | none | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) text | 2X0-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) text | 2X0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) text | 2X0-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (anatomy) | dark | trigger 1 (tokens, selected) text | 2X0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | dark | trigger 1 (tokens, selected) text | 2X0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | justify | center | center | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | indicator width | 2px | 2px | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | indicator color | transparent | #00000000 | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | bottomleft radius | 0px | 0px | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | bottomright radius | 0px | 0px | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | background | none | none | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | shadow | none | none | match |  |
| Line (anatomy) | dark | trigger 2 (components) | 2WX-0 | outline | none | none | match |  |
| Line (anatomy) | dark | trigger 2 (components) text | 2WY-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) text | 2WY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) text | 2WY-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (anatomy) | dark | trigger 2 (components) text | 2WY-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | dark | trigger 2 (components) text | 2WY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | justify | center | center | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | indicator width | 2px | 2px | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | indicator color | transparent | #00000000 | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | bottomleft radius | 0px | 0px | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | bottomright radius | 0px | 0px | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | background | none | none | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | shadow | none | none | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) | 2WV-0 | outline | none | none | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) text | 2WW-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) text | 2WW-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) text | 2WW-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (anatomy) | dark | trigger 3 (patterns) text | 2WW-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | dark | trigger 3 (patterns) text | 2WW-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | justify | center | center | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | indicator width | 2px | 2px | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | indicator color | transparent | #00000000 | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | bottomleft radius | 0px | 0px | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | bottomright radius | 0px | 0px | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | background | none | none | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | shadow | none | none | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) | 2WT-0 | outline | none | none | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) text | 2WU-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) text | 2WU-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) text | 2WU-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (anatomy) | dark | trigger 4 (archive, disabled) text | 2WU-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | dark | trigger 4 (archive, disabled) text | 2WU-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (anatomy) | dark | content | 2WQ-0 | y | 56px | code list h + root gap | match | = 56px |
| Line (anatomy) | dark | content | 2WQ-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (anatomy) | dark | content | 2WQ-0 | padding | 0px | 0px | match |  |
| Line (anatomy) | dark | content | 2WQ-0 | outline | none | none | match |  |
| Line (anatomy) | dark | content text | 2WR-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Line (anatomy) | dark | content text | 2WR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (anatomy) | dark | content text | 2WR-0 | font weight | 400 | 400 | match |  |
| Line (anatomy) | dark | content text | 2WR-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (anatomy) | dark | content text | 2WR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | dark | root | 2VJ-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | root | 2VJ-0 | direction | column | column | match |  |
| Line | dark | root | 2VJ-0 | width | 512px | 512px | match | = 512px |
| Line | dark | list rule | 2VV-0 | present | 1px bottom border | absolute Rule | match |  |
| Line | dark | list rule | 2VV-0 | thickness | 1px | 1px | match |  |
| Line | dark | list rule | 2VV-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Line | dark | list rule | 2VV-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Line | dark | list | 2VM-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| Line | dark | list | 2VM-0 | direction | row | row | match |  |
| Line | dark | list | 2VM-0 | height | 40px | trigger h + list padding | match | = 40px |
| Line | dark | trigger | - | count | 4 | 4 | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | justify | center | center | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | indicator width | 2px | 2px | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | bottomleft radius | 0px | 0px | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | bottomright radius | 0px | 0px | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | background | none | none | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | shadow | none | none | match |  |
| Line | dark | trigger 1 (tokens, selected) | 2VT-0 | outline | none | none | match |  |
| Line | dark | trigger 1 (tokens, selected) text | 2VU-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Line | dark | trigger 1 (tokens, selected) text | 2VU-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | dark | trigger 1 (tokens, selected) text | 2VU-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line | dark | trigger 1 (tokens, selected) text | 2VU-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | dark | trigger 1 (tokens, selected) text | 2VU-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | justify | center | center | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | indicator width | 2px | 2px | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | indicator color | transparent | #00000000 | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | bottomleft radius | 0px | 0px | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | bottomright radius | 0px | 0px | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | background | none | none | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | shadow | none | none | match |  |
| Line | dark | trigger 2 (components) | 2VR-0 | outline | none | none | match |  |
| Line | dark | trigger 2 (components) text | 2VS-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Line | dark | trigger 2 (components) text | 2VS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | dark | trigger 2 (components) text | 2VS-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line | dark | trigger 2 (components) text | 2VS-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | dark | trigger 2 (components) text | 2VS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | justify | center | center | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | indicator width | 2px | 2px | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | indicator color | transparent | #00000000 | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | bottomleft radius | 0px | 0px | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | bottomright radius | 0px | 0px | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | background | none | none | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | shadow | none | none | match |  |
| Line | dark | trigger 3 (patterns) | 2VP-0 | outline | none | none | match |  |
| Line | dark | trigger 3 (patterns) text | 2VQ-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Line | dark | trigger 3 (patterns) text | 2VQ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | dark | trigger 3 (patterns) text | 2VQ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line | dark | trigger 3 (patterns) text | 2VQ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | dark | trigger 3 (patterns) text | 2VQ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | justify | center | center | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | indicator width | 2px | 2px | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | indicator color | transparent | #00000000 | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | bottomleft radius | 0px | 0px | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | bottomright radius | 0px | 0px | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | background | none | none | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | shadow | none | none | match |  |
| Line | dark | trigger 4 (archive, disabled) | 2VN-0 | outline | none | none | match |  |
| Line | dark | trigger 4 (archive, disabled) text | 2VO-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Line | dark | trigger 4 (archive, disabled) text | 2VO-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | dark | trigger 4 (archive, disabled) text | 2VO-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line | dark | trigger 4 (archive, disabled) text | 2VO-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | dark | trigger 4 (archive, disabled) text | 2VO-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line | dark | content | 2VK-0 | y | 56px | code list h + root gap | match | = 56px |
| Line | dark | content | 2VK-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Line | dark | content | 2VK-0 | padding | 0px | 0px | match |  |
| Line | dark | content | 2VK-0 | outline | none | none | match |  |
| Line | dark | content text | 2VL-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Line | dark | content text | 2VL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line | dark | content text | 2VL-0 | font weight | 400 | 400 | match |  |
| Line | dark | content text | 2VL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line | dark | content text | 2VL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | dark | root | 2V5-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | root | 2V5-0 | direction | column | column | match |  |
| Enclosed | dark | root | 2V5-0 | width | 512px | 512px | match | = 512px |
| Enclosed | dark | list | 2V8-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Enclosed | dark | list | 2V8-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Enclosed | dark | list | 2V8-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | list | 2V8-0 | background | oklch(0.44 0.0153 260) | `var(--tq-color-bg-subtle-dark)` | match |  |
| Enclosed | dark | list | 2V8-0 | border width | 0px | 0px | match |  |
| Enclosed | dark | list | 2V8-0 | cross size (width) | self-start | alignSelf start | match | 381.516 < root 512 |
| Enclosed | dark | list | 2V8-0 | direction | row | row | match |  |
| Enclosed | dark | list | 2V8-0 | height | 48px | trigger h + list padding | match | = 48px |
| Enclosed | dark | trigger | - | count | 4 | 4 | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | justify | center | center | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D (spread 0 dropped by Paper) |
| Enclosed | dark | trigger 1 (tokens, selected) | 2VF-0 | outline | none | none | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) text | 2VG-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) text | 2VG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) text | 2VG-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Enclosed | dark | trigger 1 (tokens, selected) text | 2VG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | dark | trigger 1 (tokens, selected) text | 2VG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | justify | center | center | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | background | none | none | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | shadow | none | none | match |  |
| Enclosed | dark | trigger 2 (components) | 2VD-0 | outline | none | none | match |  |
| Enclosed | dark | trigger 2 (components) text | 2VE-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Enclosed | dark | trigger 2 (components) text | 2VE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | dark | trigger 2 (components) text | 2VE-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Enclosed | dark | trigger 2 (components) text | 2VE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | dark | trigger 2 (components) text | 2VE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | justify | center | center | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | background | none | none | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | shadow | none | none | match |  |
| Enclosed | dark | trigger 3 (patterns) | 2VB-0 | outline | none | none | match |  |
| Enclosed | dark | trigger 3 (patterns) text | 2VC-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Enclosed | dark | trigger 3 (patterns) text | 2VC-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | dark | trigger 3 (patterns) text | 2VC-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Enclosed | dark | trigger 3 (patterns) text | 2VC-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | dark | trigger 3 (patterns) text | 2VC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | justify | center | center | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | background | none | none | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | shadow | none | none | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) | 2V9-0 | outline | none | none | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) text | 2VA-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) text | 2VA-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) text | 2VA-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Enclosed | dark | trigger 4 (archive, disabled) text | 2VA-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | dark | trigger 4 (archive, disabled) text | 2VA-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Enclosed | dark | content | 2V6-0 | y | 64px | code list h + root gap | match | = 64px |
| Enclosed | dark | content | 2V6-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Enclosed | dark | content | 2V6-0 | padding | 0px | 0px | match |  |
| Enclosed | dark | content | 2V6-0 | outline | none | none | match |  |
| Enclosed | dark | content text | 2V7-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Enclosed | dark | content text | 2V7-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Enclosed | dark | content text | 2V7-0 | font weight | 400 | 400 | match |  |
| Enclosed | dark | content text | 2V7-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Enclosed | dark | content text | 2V7-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | dark | root | 2UN-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | root | 2UN-0 | direction | column | column | match |  |
| Hover (line) | dark | root | 2UN-0 | width | 512px | 512px | match | = 512px |
| Hover (line) | dark | list rule | 2UZ-0 | present | 1px bottom border | absolute Rule | match |  |
| Hover (line) | dark | list rule | 2UZ-0 | thickness | 1px | 1px | match |  |
| Hover (line) | dark | list rule | 2UZ-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Hover (line) | dark | list rule | 2UZ-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Hover (line) | dark | list | 2UQ-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| Hover (line) | dark | list | 2UQ-0 | direction | row | row | match |  |
| Hover (line) | dark | list | 2UQ-0 | height | 40px | trigger h + list padding | match | = 40px |
| Hover (line) | dark | trigger | - | count | 4 | 4 | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | justify | center | center | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | indicator width | 2px | 2px | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | bottomleft radius | 0px | 0px | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | bottomright radius | 0px | 0px | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | background | none | none | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | shadow | none | none | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) | 2UX-0 | outline | none | none | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) text | 2UY-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) text | 2UY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) text | 2UY-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (line) | dark | trigger 1 (tokens, selected) text | 2UY-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | dark | trigger 1 (tokens, selected) text | 2UY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | justify | center | center | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | indicator width | 2px | 2px | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | indicator color | transparent | #00000000 | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | bottomleft radius | 0px | 0px | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | bottomright radius | 0px | 0px | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | background | none | none | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | shadow | none | none | match |  |
| Hover (line) | dark | trigger 2 (components) | 2UV-0 | outline | none | none | match |  |
| Hover (line) | dark | trigger 2 (components) text | 2UW-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover (line) | dark | trigger 2 (components) text | 2UW-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | dark | trigger 2 (components) text | 2UW-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (line) | dark | trigger 2 (components) text | 2UW-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | dark | trigger 2 (components) text | 2UW-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | justify | center | center | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | indicator width | 2px | 2px | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | indicator color | transparent | #00000000 | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | bottomleft radius | 0px | 0px | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | bottomright radius | 0px | 0px | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | background | none | none | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | shadow | none | none | match |  |
| Hover (line) | dark | trigger 3 (patterns) | 2UT-0 | outline | none | none | match |  |
| Hover (line) | dark | trigger 3 (patterns) text | 2UU-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) text | 2UU-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) text | 2UU-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (line) | dark | trigger 3 (patterns) text | 2UU-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | dark | trigger 3 (patterns) text | 2UU-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | justify | center | center | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | indicator width | 2px | 2px | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | indicator color | transparent | #00000000 | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | bottomleft radius | 0px | 0px | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | bottomright radius | 0px | 0px | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | background | none | none | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | shadow | none | none | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) | 2UR-0 | outline | none | none | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) text | 2US-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) text | 2US-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) text | 2US-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (line) | dark | trigger 4 (archive, disabled) text | 2US-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | dark | trigger 4 (archive, disabled) text | 2US-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (line) | dark | content | 2UO-0 | y | 56px | code list h + root gap | match | = 56px |
| Hover (line) | dark | content | 2UO-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (line) | dark | content | 2UO-0 | padding | 0px | 0px | match |  |
| Hover (line) | dark | content | 2UO-0 | outline | none | none | match |  |
| Hover (line) | dark | content text | 2UP-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover (line) | dark | content text | 2UP-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (line) | dark | content text | 2UP-0 | font weight | 400 | 400 | match |  |
| Hover (line) | dark | content text | 2UP-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (line) | dark | content text | 2UP-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | dark | root | 2U9-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | root | 2U9-0 | direction | column | column | match |  |
| Hover (enclosed) | dark | root | 2U9-0 | width | 512px | 512px | match | = 512px |
| Hover (enclosed) | dark | list | 2UC-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| Hover (enclosed) | dark | list | 2UC-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| Hover (enclosed) | dark | list | 2UC-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | list | 2UC-0 | background | oklch(0.44 0.0153 260) | `var(--tq-color-bg-subtle-dark)` | match |  |
| Hover (enclosed) | dark | list | 2UC-0 | border width | 0px | 0px | match |  |
| Hover (enclosed) | dark | list | 2UC-0 | cross size (width) | self-start | alignSelf start | match | 381.516 < root 512 |
| Hover (enclosed) | dark | list | 2UC-0 | direction | row | row | match |  |
| Hover (enclosed) | dark | list | 2UC-0 | height | 48px | trigger h + list padding | match | = 48px |
| Hover (enclosed) | dark | trigger | - | count | 4 | 4 | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | justify | center | center | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D (spread 0 dropped by Paper) |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) | 2UJ-0 | outline | none | none | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) text | 2UK-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) text | 2UK-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) text | 2UK-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) text | 2UK-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | dark | trigger 1 (tokens, selected) text | 2UK-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | justify | center | center | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | background | none | none | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | shadow | none | none | match |  |
| Hover (enclosed) | dark | trigger 2 (components) | 2UH-0 | outline | none | none | match |  |
| Hover (enclosed) | dark | trigger 2 (components) text | 2UI-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) text | 2UI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) text | 2UI-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (enclosed) | dark | trigger 2 (components) text | 2UI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | dark | trigger 2 (components) text | 2UI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | justify | center | center | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | background | none | none | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | shadow | none | none | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) | 2UF-0 | outline | none | none | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) text | 2UG-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) text | 2UG-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) text | 2UG-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (enclosed) | dark | trigger 3 (patterns) text | 2UG-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | dark | trigger 3 (patterns) text | 2UG-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | justify | center | center | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | background | none | none | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | shadow | none | none | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) | 2UD-0 | outline | none | none | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) text | 2UE-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) text | 2UE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) text | 2UE-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) text | 2UE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | dark | trigger 4 (archive, disabled) text | 2UE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Hover (enclosed) | dark | content | 2UA-0 | y | 64px | code list h + root gap | match | = 64px |
| Hover (enclosed) | dark | content | 2UA-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Hover (enclosed) | dark | content | 2UA-0 | padding | 0px | 0px | match |  |
| Hover (enclosed) | dark | content | 2UA-0 | outline | none | none | match |  |
| Hover (enclosed) | dark | content text | 2UB-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Hover (enclosed) | dark | content text | 2UB-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Hover (enclosed) | dark | content text | 2UB-0 | font weight | 400 | 400 | match |  |
| Hover (enclosed) | dark | content text | 2UB-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Hover (enclosed) | dark | content text | 2UB-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | dark | root | 2TR-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | root | 2TR-0 | direction | column | column | match |  |
| FocusVisible (line) | dark | root | 2TR-0 | width | 512px | 512px | match | = 512px |
| FocusVisible (line) | dark | list rule | 2U3-0 | present | 1px bottom border | absolute Rule | match |  |
| FocusVisible (line) | dark | list rule | 2U3-0 | thickness | 1px | 1px | match |  |
| FocusVisible (line) | dark | list rule | 2U3-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| FocusVisible (line) | dark | list rule | 2U3-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| FocusVisible (line) | dark | list | 2TU-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| FocusVisible (line) | dark | list | 2TU-0 | direction | row | row | match |  |
| FocusVisible (line) | dark | list | 2TU-0 | height | 40px | trigger h + list padding | match | = 40px |
| FocusVisible (line) | dark | trigger | - | count | 4 | 4 | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | justify | center | center | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | indicator width | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | bottomleft radius | 0px | 0px | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | bottomright radius | 0px | 0px | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | background | none | none | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | shadow | none | none | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) | 2U1-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) text | 2U2-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) text | 2U2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) text | 2U2-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) text | 2U2-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | dark | trigger 1 (tokens, selected) text | 2U2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | justify | center | center | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | indicator width | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | indicator color | transparent | #00000000 | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | bottomleft radius | 0px | 0px | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | bottomright radius | 0px | 0px | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | background | none | none | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | shadow | none | none | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 2 (components) | 2TZ-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 2 (components) text | 2U0-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) text | 2U0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) text | 2U0-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (line) | dark | trigger 2 (components) text | 2U0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | dark | trigger 2 (components) text | 2U0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | justify | center | center | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | indicator width | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | indicator color | transparent | #00000000 | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | bottomleft radius | 0px | 0px | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | bottomright radius | 0px | 0px | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | background | none | none | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | shadow | none | none | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) | 2TX-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) text | 2TY-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) text | 2TY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) text | 2TY-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (line) | dark | trigger 3 (patterns) text | 2TY-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | dark | trigger 3 (patterns) text | 2TY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | justify | center | center | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | indicator width | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | indicator color | transparent | #00000000 | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | bottomleft radius | 0px | 0px | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | bottomright radius | 0px | 0px | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | background | none | none | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | shadow | none | none | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) | 2TV-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) text | 2TW-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) text | 2TW-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) text | 2TW-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) text | 2TW-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | dark | trigger 4 (archive, disabled) text | 2TW-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (line) | dark | content | 2TS-0 | y | 56px | code list h + root gap | match | = 56px |
| FocusVisible (line) | dark | content | 2TS-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (line) | dark | content | 2TS-0 | padding | 0px | 0px | match |  |
| FocusVisible (line) | dark | content | 2TS-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (line) | dark | content | 2TS-0 | outline width | 2px | 2px | match |  |
| FocusVisible (line) | dark | content | 2TS-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (line) | dark | content text | 2TT-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| FocusVisible (line) | dark | content text | 2TT-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (line) | dark | content text | 2TT-0 | font weight | 400 | 400 | match |  |
| FocusVisible (line) | dark | content text | 2TT-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (line) | dark | content text | 2TT-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | dark | root | 2TD-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | root | 2TD-0 | direction | column | column | match |  |
| FocusVisible (enclosed) | dark | root | 2TD-0 | width | 512px | 512px | match | = 512px |
| FocusVisible (enclosed) | dark | list | 2TG-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| FocusVisible (enclosed) | dark | list | 2TG-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| FocusVisible (enclosed) | dark | list | 2TG-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | list | 2TG-0 | background | oklch(0.44 0.0153 260) | `var(--tq-color-bg-subtle-dark)` | match |  |
| FocusVisible (enclosed) | dark | list | 2TG-0 | border width | 0px | 0px | match |  |
| FocusVisible (enclosed) | dark | list | 2TG-0 | cross size (width) | self-start | alignSelf start | match | 381.516 < root 512 |
| FocusVisible (enclosed) | dark | list | 2TG-0 | direction | row | row | match |  |
| FocusVisible (enclosed) | dark | list | 2TG-0 | height | 48px | trigger h + list padding | match | = 48px |
| FocusVisible (enclosed) | dark | trigger | - | count | 4 | 4 | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | justify | center | center | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D (spread 0 dropped by Paper) |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) | 2TN-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) text | 2TO-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) text | 2TO-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) text | 2TO-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) text | 2TO-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | dark | trigger 1 (tokens, selected) text | 2TO-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | justify | center | center | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | background | none | none | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | shadow | none | none | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) | 2TL-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) text | 2TM-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) text | 2TM-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) text | 2TM-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (enclosed) | dark | trigger 2 (components) text | 2TM-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | dark | trigger 2 (components) text | 2TM-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | justify | center | center | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | background | none | none | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | shadow | none | none | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) | 2TJ-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) text | 2TK-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) text | 2TK-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) text | 2TK-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) text | 2TK-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | dark | trigger 3 (patterns) text | 2TK-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | height | 40px | `var(--tq-space-10)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | justify | center | center | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | background | none | none | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | shadow | none | none | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) | 2TH-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) text | 2TI-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) text | 2TI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) text | 2TI-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) text | 2TI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | dark | trigger 4 (archive, disabled) text | 2TI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| FocusVisible (enclosed) | dark | content | 2TE-0 | y | 64px | code list h + root gap | match | = 64px |
| FocusVisible (enclosed) | dark | content | 2TE-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| FocusVisible (enclosed) | dark | content | 2TE-0 | padding | 0px | 0px | match |  |
| FocusVisible (enclosed) | dark | content | 2TE-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| FocusVisible (enclosed) | dark | content | 2TE-0 | outline width | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | content | 2TE-0 | outline offset | 2px | 2px | match |  |
| FocusVisible (enclosed) | dark | content text | 2TF-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| FocusVisible (enclosed) | dark | content text | 2TF-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| FocusVisible (enclosed) | dark | content text | 2TF-0 | font weight | 400 | 400 | match |  |
| FocusVisible (enclosed) | dark | content text | 2TF-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| FocusVisible (enclosed) | dark | content text | 2TF-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | dark | root | 2SV-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | root | 2SV-0 | direction | column | column | match |  |
| SecondSelected | dark | root | 2SV-0 | width | 512px | 512px | match | = 512px |
| SecondSelected | dark | list rule | 2T7-0 | present | 1px bottom border | absolute Rule | match |  |
| SecondSelected | dark | list rule | 2T7-0 | thickness | 1px | 1px | match |  |
| SecondSelected | dark | list rule | 2T7-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| SecondSelected | dark | list rule | 2T7-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| SecondSelected | dark | list | 2SY-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| SecondSelected | dark | list | 2SY-0 | direction | row | row | match |  |
| SecondSelected | dark | list | 2SY-0 | height | 40px | trigger h + list padding | match | = 40px |
| SecondSelected | dark | trigger | - | count | 4 | 4 | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | height | 40px | `var(--tq-space-10)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | justify | center | center | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | indicator width | 2px | 2px | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | indicator color | transparent | #00000000 | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | bottomleft radius | 0px | 0px | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | bottomright radius | 0px | 0px | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | background | none | none | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | shadow | none | none | match |  |
| SecondSelected | dark | trigger 1 (tokens) | 2T5-0 | outline | none | none | match |  |
| SecondSelected | dark | trigger 1 (tokens) text | 2T6-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) text | 2T6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) text | 2T6-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| SecondSelected | dark | trigger 1 (tokens) text | 2T6-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | dark | trigger 1 (tokens) text | 2T6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | height | 40px | `var(--tq-space-10)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | justify | center | center | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | indicator width | 2px | 2px | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | bottomleft radius | 0px | 0px | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | bottomright radius | 0px | 0px | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | background | none | none | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | shadow | none | none | match |  |
| SecondSelected | dark | trigger 2 (components, selected) | 2T3-0 | outline | none | none | match |  |
| SecondSelected | dark | trigger 2 (components, selected) text | 2T4-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) text | 2T4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) text | 2T4-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| SecondSelected | dark | trigger 2 (components, selected) text | 2T4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | dark | trigger 2 (components, selected) text | 2T4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | height | 40px | `var(--tq-space-10)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | justify | center | center | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | indicator width | 2px | 2px | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | indicator color | transparent | #00000000 | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | bottomleft radius | 0px | 0px | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | bottomright radius | 0px | 0px | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | background | none | none | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | shadow | none | none | match |  |
| SecondSelected | dark | trigger 3 (patterns) | 2T1-0 | outline | none | none | match |  |
| SecondSelected | dark | trigger 3 (patterns) text | 2T2-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) text | 2T2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) text | 2T2-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| SecondSelected | dark | trigger 3 (patterns) text | 2T2-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | dark | trigger 3 (patterns) text | 2T2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | justify | center | center | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | indicator width | 2px | 2px | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | indicator color | transparent | #00000000 | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | bottomleft radius | 0px | 0px | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | bottomright radius | 0px | 0px | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | background | none | none | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | shadow | none | none | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) | 2SZ-0 | outline | none | none | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) text | 2T0-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) text | 2T0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) text | 2T0-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| SecondSelected | dark | trigger 4 (archive, disabled) text | 2T0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | dark | trigger 4 (archive, disabled) text | 2T0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| SecondSelected | dark | content | 2SW-0 | y | 56px | code list h + root gap | match | = 56px |
| SecondSelected | dark | content | 2SW-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| SecondSelected | dark | content | 2SW-0 | padding | 0px | 0px | match |  |
| SecondSelected | dark | content | 2SW-0 | outline | none | none | match |  |
| SecondSelected | dark | content text | 2SX-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| SecondSelected | dark | content text | 2SX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| SecondSelected | dark | content text | 2SX-0 | font weight | 400 | 400 | match |  |
| SecondSelected | dark | content text | 2SX-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| SecondSelected | dark | content text | 2SX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | dark | root | 2SG-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | root | 2SG-0 | direction | column | column | match |  |
| ManualActivation (after play) | dark | root | 2SG-0 | width | 512px | 512px | match | = 512px |
| ManualActivation (after play) | dark | list rule | 2SS-0 | present | 1px bottom border | absolute Rule | match |  |
| ManualActivation (after play) | dark | list rule | 2SS-0 | thickness | 1px | 1px | match |  |
| ManualActivation (after play) | dark | list rule | 2SS-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| ManualActivation (after play) | dark | list rule | 2SS-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| ManualActivation (after play) | dark | list | 2SJ-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| ManualActivation (after play) | dark | list | 2SJ-0 | direction | row | row | match |  |
| ManualActivation (after play) | dark | list | 2SJ-0 | height | 40px | trigger h + list padding | match | = 40px |
| ManualActivation (after play) | dark | trigger | - | count | 4 | 4 | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | justify | center | center | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | indicator width | 2px | 2px | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | bottomleft radius | 0px | 0px | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | bottomright radius | 0px | 0px | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | background | none | none | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | shadow | none | none | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) | 2SQ-0 | outline | none | none | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) text | 2SR-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) text | 2SR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) text | 2SR-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) text | 2SR-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | dark | trigger 1 (tokens, selected) text | 2SR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | justify | center | center | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | indicator width | 2px | 2px | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | indicator color | transparent | #00000000 | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | bottomleft radius | 0px | 0px | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | bottomright radius | 0px | 0px | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | background | none | none | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | shadow | none | none | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | outline color | oklch(0.73 0.1407 258) | `var(--tq-color-border-focus-dark)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | outline width | 2px | 2px | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) | 2SO-0 | outline offset | 2px | 2px | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) text | 2SP-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) text | 2SP-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) text | 2SP-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ManualActivation (after play) | dark | trigger 2 (components) text | 2SP-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | dark | trigger 2 (components) text | 2SP-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | justify | center | center | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | indicator width | 2px | 2px | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | indicator color | transparent | #00000000 | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | bottomleft radius | 0px | 0px | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | bottomright radius | 0px | 0px | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | background | none | none | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | shadow | none | none | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) | 2SM-0 | outline | none | none | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) text | 2SN-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) text | 2SN-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) text | 2SN-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ManualActivation (after play) | dark | trigger 3 (patterns) text | 2SN-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | dark | trigger 3 (patterns) text | 2SN-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | height | 40px | `var(--tq-space-10)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | justify | center | center | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | indicator width | 2px | 2px | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | indicator color | transparent | #00000000 | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | bottomleft radius | 0px | 0px | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | bottomright radius | 0px | 0px | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | background | none | none | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | shadow | none | none | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) | 2SK-0 | outline | none | none | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) text | 2SL-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) text | 2SL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) text | 2SL-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) text | 2SL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | dark | trigger 4 (archive, disabled) text | 2SL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| ManualActivation (after play) | dark | content | 2SH-0 | y | 56px | code list h + root gap | match | = 56px |
| ManualActivation (after play) | dark | content | 2SH-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| ManualActivation (after play) | dark | content | 2SH-0 | padding | 0px | 0px | match |  |
| ManualActivation (after play) | dark | content | 2SH-0 | outline | none | none | match |  |
| ManualActivation (after play) | dark | content text | 2SI-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| ManualActivation (after play) | dark | content text | 2SI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| ManualActivation (after play) | dark | content text | 2SI-0 | font weight | 400 | 400 | match |  |
| ManualActivation (after play) | dark | content text | 2SI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| ManualActivation (after play) | dark | content text | 2SI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | dark | root | 2RQ-0 | gap | 24px | `var(--tq-space-6)` | match |  |
| Vertical | dark | root | 2RQ-0 | direction | row | row | match |  |
| Vertical | dark | root | 2RQ-0 | width | 512px | 512px | match | = 512px |
| Vertical | dark | list rule | 2S2-0 | present | 1px right border | absolute Rule | match |  |
| Vertical | dark | list rule | 2S2-0 | thickness | 1px | 1px | match |  |
| Vertical | dark | list rule | 2S2-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Vertical | dark | list rule | 2S2-0 | pinned | top 0 bottom 0 right 0 | top 0px bottom 0px right 0px | match |  |
| Vertical | dark | list | 2RT-0 | cross size (height) | stretch | alignSelf stretch | match | 160 = root = tabs, so the class decides (line stretches) |
| Vertical | dark | list | 2RT-0 | direction | column | column | match |  |
| Vertical | dark | list | 2RT-0 | trigger stack | 160px | sum of trigger h + gaps | match | = 160px |
| Vertical | dark | trigger | - | count | 4 | 4 | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | justify | flex-start | start | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | indicator width | 2px | 2px | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | topright radius | 0px | 0px | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | bottomright radius | 0px | 0px | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | background | none | none | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | shadow | none | none | match |  |
| Vertical | dark | trigger 1 (tokens, selected) | 2S0-0 | outline | none | none | match |  |
| Vertical | dark | trigger 1 (tokens, selected) text | 2S1-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) text | 2S1-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) text | 2S1-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Vertical | dark | trigger 1 (tokens, selected) text | 2S1-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | dark | trigger 1 (tokens, selected) text | 2S1-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | justify | flex-start | start | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | indicator width | 2px | 2px | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | indicator color | transparent | #00000000 | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | topright radius | 0px | 0px | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | bottomright radius | 0px | 0px | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | background | none | none | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | shadow | none | none | match |  |
| Vertical | dark | trigger 2 (components) | 2RY-0 | outline | none | none | match |  |
| Vertical | dark | trigger 2 (components) text | 2RZ-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Vertical | dark | trigger 2 (components) text | 2RZ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | dark | trigger 2 (components) text | 2RZ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Vertical | dark | trigger 2 (components) text | 2RZ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | dark | trigger 2 (components) text | 2RZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | justify | flex-start | start | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | indicator width | 2px | 2px | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | indicator color | transparent | #00000000 | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | topright radius | 0px | 0px | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | bottomright radius | 0px | 0px | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | background | none | none | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | shadow | none | none | match |  |
| Vertical | dark | trigger 3 (patterns) | 2RW-0 | outline | none | none | match |  |
| Vertical | dark | trigger 3 (patterns) text | 2RX-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Vertical | dark | trigger 3 (patterns) text | 2RX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | dark | trigger 3 (patterns) text | 2RX-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Vertical | dark | trigger 3 (patterns) text | 2RX-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | dark | trigger 3 (patterns) text | 2RX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | justify | flex-start | start | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | indicator width | 2px | 2px | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | indicator color | transparent | #00000000 | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | topright radius | 0px | 0px | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | bottomright radius | 0px | 0px | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | background | none | none | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | shadow | none | none | match |  |
| Vertical | dark | trigger 4 (archive, disabled) | 2RU-0 | outline | none | none | match |  |
| Vertical | dark | trigger 4 (archive, disabled) text | 2RV-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) text | 2RV-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) text | 2RV-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Vertical | dark | trigger 4 (archive, disabled) text | 2RV-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | dark | trigger 4 (archive, disabled) text | 2RV-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Vertical | dark | content | 2RR-0 | x | 141.359px | code list w + root gap | match | = 141.359px |
| Vertical | dark | content | 2RR-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Vertical | dark | content | 2RR-0 | padding | 0px | 0px | match |  |
| Vertical | dark | content | 2RR-0 | flex | grow (fills root) | 1 0% | match |  |
| Vertical | dark | content | 2RR-0 | outline | none | none | match |  |
| Vertical | dark | content text | 2RS-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Vertical | dark | content text | 2RS-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Vertical | dark | content text | 2RS-0 | font weight | 400 | 400 | match |  |
| Vertical | dark | content text | 2RS-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Vertical | dark | content text | 2RS-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | dark | root | 2RC-0 | gap | 24px | `var(--tq-space-6)` | match |  |
| VerticalEnclosed | dark | root | 2RC-0 | direction | row | row | match |  |
| VerticalEnclosed | dark | root | 2RC-0 | width | 512px | 512px | match | = 512px |
| VerticalEnclosed | dark | list | 2RF-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| VerticalEnclosed | dark | list | 2RF-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| VerticalEnclosed | dark | list | 2RF-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | list | 2RF-0 | background | oklch(0.44 0.0153 260) | `var(--tq-color-bg-subtle-dark)` | match |  |
| VerticalEnclosed | dark | list | 2RF-0 | border width | 0px | 0px | match |  |
| VerticalEnclosed | dark | list | 2RF-0 | cross size (height) | self-start | alignSelf start | match | 180 = root = tabs, so the class decides (enclosed self-start) |
| VerticalEnclosed | dark | list | 2RF-0 | direction | column | column | match |  |
| VerticalEnclosed | dark | list | 2RF-0 | trigger stack | 172px | sum of trigger h + gaps | match | = 172px |
| VerticalEnclosed | dark | trigger | - | count | 4 | 4 | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | justify | flex-start | start | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D (spread 0 dropped by Paper) |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) | 2RM-0 | outline | none | none | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) text | 2RN-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) text | 2RN-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) text | 2RN-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) text | 2RN-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | dark | trigger 1 (tokens, selected) text | 2RN-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | justify | flex-start | start | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | background | none | none | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | shadow | none | none | match |  |
| VerticalEnclosed | dark | trigger 2 (components) | 2RK-0 | outline | none | none | match |  |
| VerticalEnclosed | dark | trigger 2 (components) text | 2RL-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) text | 2RL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) text | 2RL-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalEnclosed | dark | trigger 2 (components) text | 2RL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | dark | trigger 2 (components) text | 2RL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | justify | flex-start | start | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | background | none | none | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | shadow | none | none | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) | 2RI-0 | outline | none | none | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) text | 2RJ-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) text | 2RJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) text | 2RJ-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalEnclosed | dark | trigger 3 (patterns) text | 2RJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | dark | trigger 3 (patterns) text | 2RJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | justify | flex-start | start | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | background | none | none | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | shadow | none | none | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) | 2RG-0 | outline | none | none | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) text | 2RH-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) text | 2RH-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) text | 2RH-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) text | 2RH-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | dark | trigger 4 (archive, disabled) text | 2RH-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalEnclosed | dark | content | 2RD-0 | x | 147.359px | code list w + root gap | match | = 147.359px |
| VerticalEnclosed | dark | content | 2RD-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalEnclosed | dark | content | 2RD-0 | padding | 0px | 0px | match |  |
| VerticalEnclosed | dark | content | 2RD-0 | flex | grow (fills root) | 1 0% | match |  |
| VerticalEnclosed | dark | content | 2RD-0 | outline | none | none | match |  |
| VerticalEnclosed | dark | content text | 2RE-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalEnclosed | dark | content text | 2RE-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalEnclosed | dark | content text | 2RE-0 | font weight | 400 | 400 | match |  |
| VerticalEnclosed | dark | content text | 2RE-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalEnclosed | dark | content text | 2RE-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | dark | root | 2QU-0 | gap | 24px | `var(--tq-space-6)` | match |  |
| VerticalTallPanel (line) | dark | root | 2QU-0 | direction | row | row | match |  |
| VerticalTallPanel (line) | dark | root | 2QU-0 | width | 512px | 512px | match | = 512px |
| VerticalTallPanel (line) | dark | list rule | 2R6-0 | present | 1px right border | absolute Rule | match |  |
| VerticalTallPanel (line) | dark | list rule | 2R6-0 | thickness | 1px | 1px | match |  |
| VerticalTallPanel (line) | dark | list rule | 2R6-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| VerticalTallPanel (line) | dark | list rule | 2R6-0 | pinned | top 0 bottom 0 right 0 | top 0px bottom 0px right 0px | match |  |
| VerticalTallPanel (line) | dark | list | 2R1-0 | cross size (height) | stretch | alignSelf stretch | match | 189 = root 189 > tabs 80 |
| VerticalTallPanel (line) | dark | list | 2R1-0 | direction | column | column | match |  |
| VerticalTallPanel (line) | dark | list | 2R1-0 | trigger stack | 80px | sum of trigger h + gaps | match | = 80px |
| VerticalTallPanel (line) | dark | trigger | - | count | 2 | 2 | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | justify | flex-start | start | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | indicator width | 2px | 2px | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | topright radius | 0px | 0px | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | bottomright radius | 0px | 0px | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | background | none | none | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | shadow | none | none | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) | 2R4-0 | outline | none | none | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) text | 2R5-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) text | 2R5-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) text | 2R5-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) text | 2R5-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | dark | trigger 1 (tokens, selected) text | 2R5-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | justify | flex-start | start | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | indicator width | 2px | 2px | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | indicator color | transparent | #00000000 | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | topright radius | 0px | 0px | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | bottomright radius | 0px | 0px | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | background | none | none | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | shadow | none | none | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) | 2R2-0 | outline | none | none | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) text | 2R3-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) text | 2R3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) text | 2R3-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalTallPanel (line) | dark | trigger 2 (components) text | 2R3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | dark | trigger 2 (components) text | 2R3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | dark | content | 2QV-0 | x | 141.359px | code list w + root gap | match | = 141.359px |
| VerticalTallPanel (line) | dark | content | 2QV-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (line) | dark | content | 2QV-0 | padding | 0px | 0px | match |  |
| VerticalTallPanel (line) | dark | content | 2QV-0 | flex | grow (fills root) | 1 0% | match |  |
| VerticalTallPanel (line) | dark | content | 2QV-0 | outline | none | none | match |  |
| VerticalTallPanel (line) | dark | content text | 2R0-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (line) | dark | content text | 2R0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | dark | content text | 2R0-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | dark | content text | 2R0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | dark | content text | 2R0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | dark | content | - | paragraphs | 5 | 5 | match |  |
| VerticalTallPanel (line) | dark | content p1 | 2R0-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (line) | dark | content p1 | 2R0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | dark | content p1 | 2R0-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | dark | content p1 | 2R0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | dark | content p1 | 2R0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | dark | content p2 | 2QZ-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (line) | dark | content p2 | 2QZ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | dark | content p2 | 2QZ-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | dark | content p2 | 2QZ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | dark | content p2 | 2QZ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | dark | content p3 | 2QY-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (line) | dark | content p3 | 2QY-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | dark | content p3 | 2QY-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | dark | content p3 | 2QY-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | dark | content p3 | 2QY-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | dark | content p4 | 2QX-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (line) | dark | content p4 | 2QX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | dark | content p4 | 2QX-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | dark | content p4 | 2QX-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | dark | content p4 | 2QX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (line) | dark | content p5 | 2QW-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (line) | dark | content p5 | 2QW-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (line) | dark | content p5 | 2QW-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (line) | dark | content p5 | 2QW-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (line) | dark | content p5 | 2QW-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | dark | root | 2QG-0 | gap | 24px | `var(--tq-space-6)` | match |  |
| VerticalTallPanel (enclosed) | dark | root | 2QG-0 | direction | row | row | match |  |
| VerticalTallPanel (enclosed) | dark | root | 2QG-0 | width | 512px | 512px | match | = 512px |
| VerticalTallPanel (enclosed) | dark | list | 2QN-0 | padding | 4px | `var(--tq-space-1)` | match |  |
| VerticalTallPanel (enclosed) | dark | list | 2QN-0 | gap | 4px | `var(--tq-space-1)` | match |  |
| VerticalTallPanel (enclosed) | dark | list | 2QN-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | list | 2QN-0 | background | oklch(0.44 0.0153 260) | `var(--tq-color-bg-subtle-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | list | 2QN-0 | border width | 0px | 0px | match |  |
| VerticalTallPanel (enclosed) | dark | list | 2QN-0 | cross size (height) | self-start | alignSelf start | match | 92 < root 189 |
| VerticalTallPanel (enclosed) | dark | list | 2QN-0 | direction | column | column | match |  |
| VerticalTallPanel (enclosed) | dark | list | 2QN-0 | trigger stack | 84px | sum of trigger h + gaps | match | = 84px |
| VerticalTallPanel (enclosed) | dark | trigger | - | count | 2 | 2 | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | justify | flex-start | start | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | background | oklch(0.33 0.0126 260) | `var(--tq-color-bg-surface-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | shadow | oklch(0 0 0 / 0.3) 0px 1px 2px 0px | #0000004D 0px 1px 2px | match | oklch(0 0 0 / 0.3) = #0000004D (spread 0 dropped by Paper) |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) | 2QQ-0 | outline | none | none | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) text | 2QR-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) text | 2QR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) text | 2QR-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) text | 2QR-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | dark | trigger 1 (tokens, selected) text | 2QR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | height | 40px | `var(--tq-space-10)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | justify | flex-start | start | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | bottomleft radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | bottomright radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | background | none | none | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | shadow | none | none | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) | 2QO-0 | outline | none | none | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) text | 2QP-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) text | 2QP-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) text | 2QP-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) text | 2QP-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | dark | trigger 2 (components) text | 2QP-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | dark | content | 2QH-0 | x | 147.359px | code list w + root gap | match | = 147.359px |
| VerticalTallPanel (enclosed) | dark | content | 2QH-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| VerticalTallPanel (enclosed) | dark | content | 2QH-0 | padding | 0px | 0px | match |  |
| VerticalTallPanel (enclosed) | dark | content | 2QH-0 | flex | grow (fills root) | 1 0% | match |  |
| VerticalTallPanel (enclosed) | dark | content | 2QH-0 | outline | none | none | match |  |
| VerticalTallPanel (enclosed) | dark | content text | 2QM-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | content text | 2QM-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | dark | content text | 2QM-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | dark | content text | 2QM-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | dark | content text | 2QM-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | dark | content | - | paragraphs | 5 | 5 | match |  |
| VerticalTallPanel (enclosed) | dark | content p1 | 2QM-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p1 | 2QM-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p1 | 2QM-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | dark | content p1 | 2QM-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | dark | content p1 | 2QM-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p2 | 2QL-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p2 | 2QL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p2 | 2QL-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | dark | content p2 | 2QL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | dark | content p2 | 2QL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p3 | 2QK-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p3 | 2QK-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p3 | 2QK-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | dark | content p3 | 2QK-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | dark | content p3 | 2QK-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p4 | 2QJ-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p4 | 2QJ-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p4 | 2QJ-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | dark | content p4 | 2QJ-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | dark | content p4 | 2QJ-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p5 | 2QI-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p5 | 2QI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| VerticalTallPanel (enclosed) | dark | content p5 | 2QI-0 | font weight | 400 | 400 | match |  |
| VerticalTallPanel (enclosed) | dark | content p5 | 2QI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| VerticalTallPanel (enclosed) | dark | content p5 | 2QI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | dark | root | 2PV-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Small | dark | root | 2PV-0 | direction | column | column | match |  |
| Small | dark | root | 2PV-0 | width | 512px | 512px | match | = 512px |
| Small | dark | list rule | 2Q7-0 | present | 1px bottom border | absolute Rule | match |  |
| Small | dark | list rule | 2Q7-0 | thickness | 1px | 1px | match |  |
| Small | dark | list rule | 2Q7-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Small | dark | list rule | 2Q7-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Small | dark | list | 2PY-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 329.516 |
| Small | dark | list | 2PY-0 | direction | row | row | match |  |
| Small | dark | list | 2PY-0 | height | 32px | trigger h + list padding | match | = 32px |
| Small | dark | trigger | - | count | 4 | 4 | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | padding right | 12px | `var(--tq-space-3)` | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | justify | center | center | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | indicator width | 2px | 2px | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | bottomleft radius | 0px | 0px | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | bottomright radius | 0px | 0px | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | background | none | none | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | shadow | none | none | match |  |
| Small | dark | trigger 1 (tokens, selected) | 2Q5-0 | outline | none | none | match |  |
| Small | dark | trigger 1 (tokens, selected) text | 2Q6-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Small | dark | trigger 1 (tokens, selected) text | 2Q6-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | dark | trigger 1 (tokens, selected) text | 2Q6-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Small | dark | trigger 1 (tokens, selected) text | 2Q6-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | dark | trigger 1 (tokens, selected) text | 2Q6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | padding right | 12px | `var(--tq-space-3)` | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | justify | center | center | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | indicator width | 2px | 2px | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | indicator color | transparent | #00000000 | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | bottomleft radius | 0px | 0px | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | bottomright radius | 0px | 0px | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | background | none | none | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | shadow | none | none | match |  |
| Small | dark | trigger 2 (components) | 2Q3-0 | outline | none | none | match |  |
| Small | dark | trigger 2 (components) text | 2Q4-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Small | dark | trigger 2 (components) text | 2Q4-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | dark | trigger 2 (components) text | 2Q4-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Small | dark | trigger 2 (components) text | 2Q4-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | dark | trigger 2 (components) text | 2Q4-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | padding right | 12px | `var(--tq-space-3)` | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | justify | center | center | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | indicator width | 2px | 2px | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | indicator color | transparent | #00000000 | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | bottomleft radius | 0px | 0px | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | bottomright radius | 0px | 0px | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | background | none | none | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | shadow | none | none | match |  |
| Small | dark | trigger 3 (patterns) | 2Q1-0 | outline | none | none | match |  |
| Small | dark | trigger 3 (patterns) text | 2Q2-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Small | dark | trigger 3 (patterns) text | 2Q2-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | dark | trigger 3 (patterns) text | 2Q2-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Small | dark | trigger 3 (patterns) text | 2Q2-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | dark | trigger 3 (patterns) text | 2Q2-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | height | 32px | `var(--tq-space-8)` | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | padding left | 12px | `var(--tq-space-3)` | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | padding right | 12px | `var(--tq-space-3)` | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | justify | center | center | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | indicator width | 2px | 2px | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | indicator color | transparent | #00000000 | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | bottomleft radius | 0px | 0px | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | bottomright radius | 0px | 0px | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | background | none | none | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | shadow | none | none | match |  |
| Small | dark | trigger 4 (archive, disabled) | 2PZ-0 | outline | none | none | match |  |
| Small | dark | trigger 4 (archive, disabled) text | 2Q0-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Small | dark | trigger 4 (archive, disabled) text | 2Q0-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | dark | trigger 4 (archive, disabled) text | 2Q0-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Small | dark | trigger 4 (archive, disabled) text | 2Q0-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | dark | trigger 4 (archive, disabled) text | 2Q0-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Small | dark | content | 2PW-0 | y | 48px | code list h + root gap | match | = 48px |
| Small | dark | content | 2PW-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Small | dark | content | 2PW-0 | padding | 0px | 0px | match |  |
| Small | dark | content | 2PW-0 | outline | none | none | match |  |
| Small | dark | content text | 2PX-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Small | dark | content text | 2PX-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Small | dark | content text | 2PX-0 | font weight | 400 | 400 | match |  |
| Small | dark | content text | 2PX-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Small | dark | content text | 2PX-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | dark | root | 2PG-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | root | 2PG-0 | direction | column | column | match |  |
| Line (sizes md) | dark | root | 2PG-0 | width | 512px | 512px | match | = 512px |
| Line (sizes md) | dark | list rule | 2PS-0 | present | 1px bottom border | absolute Rule | match |  |
| Line (sizes md) | dark | list rule | 2PS-0 | thickness | 1px | 1px | match |  |
| Line (sizes md) | dark | list rule | 2PS-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Line (sizes md) | dark | list rule | 2PS-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Line (sizes md) | dark | list | 2PJ-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 361.516 |
| Line (sizes md) | dark | list | 2PJ-0 | direction | row | row | match |  |
| Line (sizes md) | dark | list | 2PJ-0 | height | 40px | trigger h + list padding | match | = 40px |
| Line (sizes md) | dark | trigger | - | count | 4 | 4 | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | justify | center | center | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | indicator width | 2px | 2px | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | bottomleft radius | 0px | 0px | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | bottomright radius | 0px | 0px | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | background | none | none | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | shadow | none | none | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) | 2PQ-0 | outline | none | none | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) text | 2PR-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) text | 2PR-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) text | 2PR-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (sizes md) | dark | trigger 1 (tokens, selected) text | 2PR-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | dark | trigger 1 (tokens, selected) text | 2PR-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | justify | center | center | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | indicator width | 2px | 2px | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | indicator color | transparent | #00000000 | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | bottomleft radius | 0px | 0px | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | bottomright radius | 0px | 0px | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | background | none | none | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | shadow | none | none | match |  |
| Line (sizes md) | dark | trigger 2 (components) | 2PO-0 | outline | none | none | match |  |
| Line (sizes md) | dark | trigger 2 (components) text | 2PP-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) text | 2PP-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) text | 2PP-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (sizes md) | dark | trigger 2 (components) text | 2PP-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | dark | trigger 2 (components) text | 2PP-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | justify | center | center | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | indicator width | 2px | 2px | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | indicator color | transparent | #00000000 | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | bottomleft radius | 0px | 0px | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | bottomright radius | 0px | 0px | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | background | none | none | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | shadow | none | none | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) | 2PM-0 | outline | none | none | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) text | 2PN-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) text | 2PN-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) text | 2PN-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (sizes md) | dark | trigger 3 (patterns) text | 2PN-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | dark | trigger 3 (patterns) text | 2PN-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | height | 40px | `var(--tq-space-10)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | padding left | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | padding right | 16px | `var(--tq-space-4)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | justify | center | center | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | indicator width | 2px | 2px | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | indicator color | transparent | #00000000 | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | bottomleft radius | 0px | 0px | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | bottomright radius | 0px | 0px | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | background | none | none | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | shadow | none | none | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) | 2PK-0 | outline | none | none | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) text | 2PL-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) text | 2PL-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) text | 2PL-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Line (sizes md) | dark | trigger 4 (archive, disabled) text | 2PL-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | dark | trigger 4 (archive, disabled) text | 2PL-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Line (sizes md) | dark | content | 2PH-0 | y | 56px | code list h + root gap | match | = 56px |
| Line (sizes md) | dark | content | 2PH-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Line (sizes md) | dark | content | 2PH-0 | padding | 0px | 0px | match |  |
| Line (sizes md) | dark | content | 2PH-0 | outline | none | none | match |  |
| Line (sizes md) | dark | content text | 2PI-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Line (sizes md) | dark | content text | 2PI-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Line (sizes md) | dark | content text | 2PI-0 | font weight | 400 | 400 | match |  |
| Line (sizes md) | dark | content text | 2PI-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Line (sizes md) | dark | content text | 2PI-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | dark | root | 2P1-0 | gap | 16px | `var(--tq-space-4)` | match |  |
| Large | dark | root | 2P1-0 | direction | column | column | match |  |
| Large | dark | root | 2P1-0 | width | 512px | 512px | match | = 512px |
| Large | dark | list rule | 2PD-0 | present | 1px bottom border | absolute Rule | match |  |
| Large | dark | list rule | 2PD-0 | thickness | 1px | 1px | match |  |
| Large | dark | list rule | 2PD-0 | color | oklch(0.44 0.0153 260) | `var(--tq-color-border-default-dark)` | match |  |
| Large | dark | list rule | 2PD-0 | pinned | left 0 right 0 bottom 0 | left 0px right 0px bottom 0px | match |  |
| Large | dark | list | 2P4-0 | cross size (width) | stretch | alignSelf stretch | match | 512 = root 512 > tabs 426.875 |
| Large | dark | list | 2P4-0 | direction | row | row | match |  |
| Large | dark | list | 2P4-0 | height | 48px | trigger h + list padding | match | = 48px |
| Large | dark | trigger | - | count | 4 | 4 | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | padding left | 20px | `var(--tq-space-5)` | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | padding right | 20px | `var(--tq-space-5)` | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | justify | center | center | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | indicator width | 2px | 2px | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | indicator color | oklch(1 0 260) | `var(--tq-color-action-primary-bg-dark)` | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | bottomleft radius | 0px | 0px | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | bottomright radius | 0px | 0px | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | background | none | none | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | shadow | none | none | match |  |
| Large | dark | trigger 1 (tokens, selected) | 2PB-0 | outline | none | none | match |  |
| Large | dark | trigger 1 (tokens, selected) text | 2PC-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Large | dark | trigger 1 (tokens, selected) text | 2PC-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Large | dark | trigger 1 (tokens, selected) text | 2PC-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Large | dark | trigger 1 (tokens, selected) text | 2PC-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Large | dark | trigger 1 (tokens, selected) text | 2PC-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | padding left | 20px | `var(--tq-space-5)` | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | padding right | 20px | `var(--tq-space-5)` | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | justify | center | center | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | indicator width | 2px | 2px | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | indicator color | transparent | #00000000 | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | bottomleft radius | 0px | 0px | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | bottomright radius | 0px | 0px | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | background | none | none | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | shadow | none | none | match |  |
| Large | dark | trigger 2 (components) | 2P9-0 | outline | none | none | match |  |
| Large | dark | trigger 2 (components) text | 2PA-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Large | dark | trigger 2 (components) text | 2PA-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Large | dark | trigger 2 (components) text | 2PA-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Large | dark | trigger 2 (components) text | 2PA-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Large | dark | trigger 2 (components) text | 2PA-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | padding left | 20px | `var(--tq-space-5)` | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | padding right | 20px | `var(--tq-space-5)` | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | justify | center | center | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | indicator width | 2px | 2px | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | indicator color | transparent | #00000000 | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | bottomleft radius | 0px | 0px | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | bottomright radius | 0px | 0px | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | background | none | none | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | shadow | none | none | match |  |
| Large | dark | trigger 3 (patterns) | 2P7-0 | outline | none | none | match |  |
| Large | dark | trigger 3 (patterns) text | 2P8-0 | color | oklch(0.84 0.0135 260) | `var(--tq-color-fg-muted-dark)` | match |  |
| Large | dark | trigger 3 (patterns) text | 2P8-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Large | dark | trigger 3 (patterns) text | 2P8-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Large | dark | trigger 3 (patterns) text | 2P8-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Large | dark | trigger 3 (patterns) text | 2P8-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | height | 48px | `var(--tq-space-12)` | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | padding left | 20px | `var(--tq-space-5)` | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | padding right | 20px | `var(--tq-space-5)` | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | gap | 8px | `var(--tq-space-2)` | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | justify | center | center | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | indicator width | 2px | 2px | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | indicator color | transparent | #00000000 | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | topleft radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | topright radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | bottomleft radius | 0px | 0px | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | bottomright radius | 0px | 0px | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | background | none | none | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | shadow | none | none | match |  |
| Large | dark | trigger 4 (archive, disabled) | 2P5-0 | outline | none | none | match |  |
| Large | dark | trigger 4 (archive, disabled) text | 2P6-0 | color | oklch(0.53 0.0171 260) | `var(--tq-color-fg-disabled-dark)` | match |  |
| Large | dark | trigger 4 (archive, disabled) text | 2P6-0 | font size | 16px | `var(--tq-font-size-md)` | match |  |
| Large | dark | trigger 4 (archive, disabled) text | 2P6-0 | font weight | 500 | `var(--tq-font-weight-medium)` | match |  |
| Large | dark | trigger 4 (archive, disabled) text | 2P6-0 | line height | 24px | `var(--tq-font-line-height-normal)` | match | 1.5 × 16px |
| Large | dark | trigger 4 (archive, disabled) text | 2P6-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
| Large | dark | content | 2P2-0 | y | 64px | code list h + root gap | match | = 64px |
| Large | dark | content | 2P2-0 | radius | 6px | `var(--tq-radius-control)` | match |  |
| Large | dark | content | 2P2-0 | padding | 0px | 0px | match |  |
| Large | dark | content | 2P2-0 | outline | none | none | match |  |
| Large | dark | content text | 2P3-0 | color | oklch(1 0 260) | `var(--tq-color-fg-default-dark)` | match |  |
| Large | dark | content text | 2P3-0 | font size | 14px | `var(--tq-font-size-sm)` | match |  |
| Large | dark | content text | 2P3-0 | font weight | 400 | 400 | match |  |
| Large | dark | content text | 2P3-0 | line height | 21px | `var(--tq-font-line-height-normal)` | match | 1.5 × 14px |
| Large | dark | content text | 2P3-0 | font family | Geist | `var(--tq-font-family-body)` | match |  |
