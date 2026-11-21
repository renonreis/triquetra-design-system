# Parity: Radio Group · spec 0004

Code side: Storybook built from the code PR at `714ce55` (the measurement SHA; the branch was then rebased onto `a6a3300` with no change under `packages/` or `apps/`, head `f1d4136`), served locally, each of the 14 visual stories opened at 1280 × 720 in light and dark after its `play` finished and fonts loaded, values read with `getComputedStyle` and `getBoundingClientRect`. Paper side: the styles of the run's nodes on `380-0` (light) and `3GK-0` (dark), token references resolved to the default brand and theme in `tokens.json` (`-dark` names to the dark mode value). Paper ids per cell come from the artboard structure (row, cell, group, item), not from names.

Normalization follows spec 0002: lengths in px rounded to 0.5; colors as OKLCH with each component rounded half up to 3 decimals (hue shown as `-` when chroma rounds to 0); radius reported as `full` when it is at least half the width; font family by first name. Line heights bound to `font.line-height.normal` are 1.5 × the font size. Positions are compared where the spec asks for them: the horizontal items share one row, and each checked dot is centered in its control (within 0.5 px).

Excluded: Paper only chrome (header, captions, Props) and the visually hidden radio inputs. Every label is one line in both places (Paper scale 2 screenshot, code single line box).

**Result: 1692 rows, all `match`.**

**Negative control** (read only, in the comparison input only, no Paper write): on `default`, the Email control's Paper border was swapped from `border.strong` to `border.default` before comparing. The comparison reported exactly two DIFF rows, one per mode:

| Story | Mode | Part | Paper node | Property | Code value | Paper value (altered) | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | light | Email control | 38K-0 | border color | oklch(0.63 0.018 260) | oklch(0.91 0.009 260) | DIFF |
| default | dark | Email control | 3OF-0 | border color | oklch(0.63 0.018 260) | oklch(0.44 0.015 260) | DIFF |

## Rows

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | light | group | 38H-0 | row gap | 12 | 12 | match |
| default | light | group label | 38I-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | group label | 38I-0 | font size | 14 | 14 | match |
| default | light | group label | 38I-0 | font weight | 500 | 500 | match |
| default | light | group label | 38I-0 | line height | 21 | 21 | match |
| default | light | Email item | 38J-0 | gap | 8 | 8 | match |
| default | light | Email control | 38K-0 | width | 20 | 20 | match |
| default | light | Email control | 38K-0 | height | 20 | 20 | match |
| default | light | Email control | 38K-0 | radius | full | full | match |
| default | light | Email control | 38K-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| default | light | Email control | 38K-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| default | light | Email control | 38K-0 | border width | 1 | 1 | match |
| default | light | Email control | 38K-0 | border style | solid | solid | match |
| default | light | Email control | 38K-0 | outline | none | none | match |
| default | light | Email dot | - | visible | no | no | match |
| default | light | Email text | 38L-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | Email text | 38L-0 | font family | Geist | Geist | match |
| default | light | Email text | 38L-0 | font size | 14 | 14 | match |
| default | light | Email text | 38L-0 | font weight | 400 | 400 | match |
| default | light | Email text | 38L-0 | line height | 20 | 20 | match |
| default | light | Phone item | 38M-0 | gap | 8 | 8 | match |
| default | light | Phone control | 38N-0 | width | 20 | 20 | match |
| default | light | Phone control | 38N-0 | height | 20 | 20 | match |
| default | light | Phone control | 38N-0 | radius | full | full | match |
| default | light | Phone control | 38N-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| default | light | Phone control | 38N-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| default | light | Phone control | 38N-0 | border width | 1 | 1 | match |
| default | light | Phone control | 38N-0 | border style | solid | solid | match |
| default | light | Phone control | 38N-0 | outline | none | none | match |
| default | light | Phone dot | - | visible | no | no | match |
| default | light | Phone text | 38O-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | Phone text | 38O-0 | font family | Geist | Geist | match |
| default | light | Phone text | 38O-0 | font size | 14 | 14 | match |
| default | light | Phone text | 38O-0 | font weight | 400 | 400 | match |
| default | light | Phone text | 38O-0 | line height | 20 | 20 | match |
| default | light | Text message item | 38P-0 | gap | 8 | 8 | match |
| default | light | Text message control | 38Q-0 | width | 20 | 20 | match |
| default | light | Text message control | 38Q-0 | height | 20 | 20 | match |
| default | light | Text message control | 38Q-0 | radius | full | full | match |
| default | light | Text message control | 38Q-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| default | light | Text message control | 38Q-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| default | light | Text message control | 38Q-0 | border width | 1 | 1 | match |
| default | light | Text message control | 38Q-0 | border style | solid | solid | match |
| default | light | Text message control | 38Q-0 | outline | none | none | match |
| default | light | Text message dot | - | visible | no | no | match |
| default | light | Text message text | 38R-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | Text message text | 38R-0 | font family | Geist | Geist | match |
| default | light | Text message text | 38R-0 | font size | 14 | 14 | match |
| default | light | Text message text | 38R-0 | font weight | 400 | 400 | match |
| default | light | Text message text | 38R-0 | line height | 20 | 20 | match |
| default | dark | group | 3O6-0 | row gap | 12 | 12 | match |
| default | dark | group label | 3OG-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | group label | 3OG-0 | font size | 14 | 14 | match |
| default | dark | group label | 3OG-0 | font weight | 500 | 500 | match |
| default | dark | group label | 3OG-0 | line height | 21 | 21 | match |
| default | dark | Email item | 3OD-0 | gap | 8 | 8 | match |
| default | dark | Email control | 3OF-0 | width | 20 | 20 | match |
| default | dark | Email control | 3OF-0 | height | 20 | 20 | match |
| default | dark | Email control | 3OF-0 | radius | full | full | match |
| default | dark | Email control | 3OF-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| default | dark | Email control | 3OF-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| default | dark | Email control | 3OF-0 | border width | 1 | 1 | match |
| default | dark | Email control | 3OF-0 | border style | solid | solid | match |
| default | dark | Email control | 3OF-0 | outline | none | none | match |
| default | dark | Email dot | - | visible | no | no | match |
| default | dark | Email text | 3OE-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | Email text | 3OE-0 | font family | Geist | Geist | match |
| default | dark | Email text | 3OE-0 | font size | 14 | 14 | match |
| default | dark | Email text | 3OE-0 | font weight | 400 | 400 | match |
| default | dark | Email text | 3OE-0 | line height | 20 | 20 | match |
| default | dark | Phone item | 3OA-0 | gap | 8 | 8 | match |
| default | dark | Phone control | 3OC-0 | width | 20 | 20 | match |
| default | dark | Phone control | 3OC-0 | height | 20 | 20 | match |
| default | dark | Phone control | 3OC-0 | radius | full | full | match |
| default | dark | Phone control | 3OC-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| default | dark | Phone control | 3OC-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| default | dark | Phone control | 3OC-0 | border width | 1 | 1 | match |
| default | dark | Phone control | 3OC-0 | border style | solid | solid | match |
| default | dark | Phone control | 3OC-0 | outline | none | none | match |
| default | dark | Phone dot | - | visible | no | no | match |
| default | dark | Phone text | 3OB-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | Phone text | 3OB-0 | font family | Geist | Geist | match |
| default | dark | Phone text | 3OB-0 | font size | 14 | 14 | match |
| default | dark | Phone text | 3OB-0 | font weight | 400 | 400 | match |
| default | dark | Phone text | 3OB-0 | line height | 20 | 20 | match |
| default | dark | Text message item | 3O7-0 | gap | 8 | 8 | match |
| default | dark | Text message control | 3O9-0 | width | 20 | 20 | match |
| default | dark | Text message control | 3O9-0 | height | 20 | 20 | match |
| default | dark | Text message control | 3O9-0 | radius | full | full | match |
| default | dark | Text message control | 3O9-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| default | dark | Text message control | 3O9-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| default | dark | Text message control | 3O9-0 | border width | 1 | 1 | match |
| default | dark | Text message control | 3O9-0 | border style | solid | solid | match |
| default | dark | Text message control | 3O9-0 | outline | none | none | match |
| default | dark | Text message dot | - | visible | no | no | match |
| default | dark | Text message text | 3O8-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | Text message text | 3O8-0 | font family | Geist | Geist | match |
| default | dark | Text message text | 3O8-0 | font size | 14 | 14 | match |
| default | dark | Text message text | 3O8-0 | font weight | 400 | 400 | match |
| default | dark | Text message text | 3O8-0 | line height | 20 | 20 | match |
| checked | light | group | 38V-0 | row gap | 12 | 12 | match |
| checked | light | group label | 38W-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked | light | group label | 38W-0 | font size | 14 | 14 | match |
| checked | light | group label | 38W-0 | font weight | 500 | 500 | match |
| checked | light | group label | 38W-0 | line height | 21 | 21 | match |
| checked | light | Email item | 38X-0 | gap | 8 | 8 | match |
| checked | light | Email control | 38Y-0 | width | 20 | 20 | match |
| checked | light | Email control | 38Y-0 | height | 20 | 20 | match |
| checked | light | Email control | 38Y-0 | radius | full | full | match |
| checked | light | Email control | 38Y-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked | light | Email control | 38Y-0 | border color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked | light | Email control | 38Y-0 | border width | 1 | 1 | match |
| checked | light | Email control | 38Y-0 | border style | solid | solid | match |
| checked | light | Email control | 38Y-0 | outline | none | none | match |
| checked | light | Email dot | 38Z-0 | visible | yes | yes | match |
| checked | light | Email dot | 38Z-0 | size | 8x8 | 8x8 | match |
| checked | light | Email dot | 38Z-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | light | Email dot | 38Z-0 | centered | yes | yes | match |
| checked | light | Email text | 390-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked | light | Email text | 390-0 | font family | Geist | Geist | match |
| checked | light | Email text | 390-0 | font size | 14 | 14 | match |
| checked | light | Email text | 390-0 | font weight | 400 | 400 | match |
| checked | light | Email text | 390-0 | line height | 20 | 20 | match |
| checked | light | Phone item | 391-0 | gap | 8 | 8 | match |
| checked | light | Phone control | 392-0 | width | 20 | 20 | match |
| checked | light | Phone control | 392-0 | height | 20 | 20 | match |
| checked | light | Phone control | 392-0 | radius | full | full | match |
| checked | light | Phone control | 392-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | light | Phone control | 392-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked | light | Phone control | 392-0 | border width | 1 | 1 | match |
| checked | light | Phone control | 392-0 | border style | solid | solid | match |
| checked | light | Phone control | 392-0 | outline | none | none | match |
| checked | light | Phone dot | - | visible | no | no | match |
| checked | light | Phone text | 393-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked | light | Phone text | 393-0 | font family | Geist | Geist | match |
| checked | light | Phone text | 393-0 | font size | 14 | 14 | match |
| checked | light | Phone text | 393-0 | font weight | 400 | 400 | match |
| checked | light | Phone text | 393-0 | line height | 20 | 20 | match |
| checked | light | Text message item | 394-0 | gap | 8 | 8 | match |
| checked | light | Text message control | 395-0 | width | 20 | 20 | match |
| checked | light | Text message control | 395-0 | height | 20 | 20 | match |
| checked | light | Text message control | 395-0 | radius | full | full | match |
| checked | light | Text message control | 395-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | light | Text message control | 395-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked | light | Text message control | 395-0 | border width | 1 | 1 | match |
| checked | light | Text message control | 395-0 | border style | solid | solid | match |
| checked | light | Text message control | 395-0 | outline | none | none | match |
| checked | light | Text message dot | - | visible | no | no | match |
| checked | light | Text message text | 396-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked | light | Text message text | 396-0 | font family | Geist | Geist | match |
| checked | light | Text message text | 396-0 | font size | 14 | 14 | match |
| checked | light | Text message text | 396-0 | font weight | 400 | 400 | match |
| checked | light | Text message text | 396-0 | line height | 20 | 20 | match |
| checked | dark | group | 3NS-0 | row gap | 12 | 12 | match |
| checked | dark | group label | 3O3-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | dark | group label | 3O3-0 | font size | 14 | 14 | match |
| checked | dark | group label | 3O3-0 | font weight | 500 | 500 | match |
| checked | dark | group label | 3O3-0 | line height | 21 | 21 | match |
| checked | dark | Email item | 3NZ-0 | gap | 8 | 8 | match |
| checked | dark | Email control | 3O1-0 | width | 20 | 20 | match |
| checked | dark | Email control | 3O1-0 | height | 20 | 20 | match |
| checked | dark | Email control | 3O1-0 | radius | full | full | match |
| checked | dark | Email control | 3O1-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | dark | Email control | 3O1-0 | border color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | dark | Email control | 3O1-0 | border width | 1 | 1 | match |
| checked | dark | Email control | 3O1-0 | border style | solid | solid | match |
| checked | dark | Email control | 3O1-0 | outline | none | none | match |
| checked | dark | Email dot | 3O2-0 | visible | yes | yes | match |
| checked | dark | Email dot | 3O2-0 | size | 8x8 | 8x8 | match |
| checked | dark | Email dot | 3O2-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked | dark | Email dot | 3O2-0 | centered | yes | yes | match |
| checked | dark | Email text | 3O0-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | dark | Email text | 3O0-0 | font family | Geist | Geist | match |
| checked | dark | Email text | 3O0-0 | font size | 14 | 14 | match |
| checked | dark | Email text | 3O0-0 | font weight | 400 | 400 | match |
| checked | dark | Email text | 3O0-0 | line height | 20 | 20 | match |
| checked | dark | Phone item | 3NW-0 | gap | 8 | 8 | match |
| checked | dark | Phone control | 3NY-0 | width | 20 | 20 | match |
| checked | dark | Phone control | 3NY-0 | height | 20 | 20 | match |
| checked | dark | Phone control | 3NY-0 | radius | full | full | match |
| checked | dark | Phone control | 3NY-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| checked | dark | Phone control | 3NY-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked | dark | Phone control | 3NY-0 | border width | 1 | 1 | match |
| checked | dark | Phone control | 3NY-0 | border style | solid | solid | match |
| checked | dark | Phone control | 3NY-0 | outline | none | none | match |
| checked | dark | Phone dot | - | visible | no | no | match |
| checked | dark | Phone text | 3NX-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | dark | Phone text | 3NX-0 | font family | Geist | Geist | match |
| checked | dark | Phone text | 3NX-0 | font size | 14 | 14 | match |
| checked | dark | Phone text | 3NX-0 | font weight | 400 | 400 | match |
| checked | dark | Phone text | 3NX-0 | line height | 20 | 20 | match |
| checked | dark | Text message item | 3NT-0 | gap | 8 | 8 | match |
| checked | dark | Text message control | 3NV-0 | width | 20 | 20 | match |
| checked | dark | Text message control | 3NV-0 | height | 20 | 20 | match |
| checked | dark | Text message control | 3NV-0 | radius | full | full | match |
| checked | dark | Text message control | 3NV-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| checked | dark | Text message control | 3NV-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked | dark | Text message control | 3NV-0 | border width | 1 | 1 | match |
| checked | dark | Text message control | 3NV-0 | border style | solid | solid | match |
| checked | dark | Text message control | 3NV-0 | outline | none | none | match |
| checked | dark | Text message dot | - | visible | no | no | match |
| checked | dark | Text message text | 3NU-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked | dark | Text message text | 3NU-0 | font family | Geist | Geist | match |
| checked | dark | Text message text | 3NU-0 | font size | 14 | 14 | match |
| checked | dark | Text message text | 3NU-0 | font weight | 400 | 400 | match |
| checked | dark | Text message text | 3NU-0 | line height | 20 | 20 | match |
| hover | light | group | 39B-0 | row gap | 12 | 12 | match |
| hover | light | group label | 39L-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| hover | light | group label | 39L-0 | font size | 14 | 14 | match |
| hover | light | group label | 39L-0 | font weight | 500 | 500 | match |
| hover | light | group label | 39L-0 | line height | 21 | 21 | match |
| hover | light | Email item | 39I-0 | gap | 8 | 8 | match |
| hover | light | Email control | 39K-0 | width | 20 | 20 | match |
| hover | light | Email control | 39K-0 | height | 20 | 20 | match |
| hover | light | Email control | 39K-0 | radius | full | full | match |
| hover | light | Email control | 39K-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| hover | light | Email control | 39K-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| hover | light | Email control | 39K-0 | border width | 1 | 1 | match |
| hover | light | Email control | 39K-0 | border style | solid | solid | match |
| hover | light | Email control | 39K-0 | outline | none | none | match |
| hover | light | Email dot | - | visible | no | no | match |
| hover | light | Email text | 39J-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| hover | light | Email text | 39J-0 | font family | Geist | Geist | match |
| hover | light | Email text | 39J-0 | font size | 14 | 14 | match |
| hover | light | Email text | 39J-0 | font weight | 400 | 400 | match |
| hover | light | Email text | 39J-0 | line height | 20 | 20 | match |
| hover | light | Phone item | 39F-0 | gap | 8 | 8 | match |
| hover | light | Phone control | 39H-0 | width | 20 | 20 | match |
| hover | light | Phone control | 39H-0 | height | 20 | 20 | match |
| hover | light | Phone control | 39H-0 | radius | full | full | match |
| hover | light | Phone control | 39H-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| hover | light | Phone control | 39H-0 | border color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| hover | light | Phone control | 39H-0 | border width | 1 | 1 | match |
| hover | light | Phone control | 39H-0 | border style | solid | solid | match |
| hover | light | Phone control | 39H-0 | outline | none | none | match |
| hover | light | Phone dot | - | visible | no | no | match |
| hover | light | Phone text | 39G-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| hover | light | Phone text | 39G-0 | font family | Geist | Geist | match |
| hover | light | Phone text | 39G-0 | font size | 14 | 14 | match |
| hover | light | Phone text | 39G-0 | font weight | 400 | 400 | match |
| hover | light | Phone text | 39G-0 | line height | 20 | 20 | match |
| hover | light | Text message item | 39C-0 | gap | 8 | 8 | match |
| hover | light | Text message control | 39E-0 | width | 20 | 20 | match |
| hover | light | Text message control | 39E-0 | height | 20 | 20 | match |
| hover | light | Text message control | 39E-0 | radius | full | full | match |
| hover | light | Text message control | 39E-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| hover | light | Text message control | 39E-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| hover | light | Text message control | 39E-0 | border width | 1 | 1 | match |
| hover | light | Text message control | 39E-0 | border style | solid | solid | match |
| hover | light | Text message control | 39E-0 | outline | none | none | match |
| hover | light | Text message dot | - | visible | no | no | match |
| hover | light | Text message text | 39D-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| hover | light | Text message text | 39D-0 | font family | Geist | Geist | match |
| hover | light | Text message text | 39D-0 | font size | 14 | 14 | match |
| hover | light | Text message text | 39D-0 | font weight | 400 | 400 | match |
| hover | light | Text message text | 39D-0 | line height | 20 | 20 | match |
| hover | dark | group | 3NF-0 | row gap | 12 | 12 | match |
| hover | dark | group label | 3NP-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| hover | dark | group label | 3NP-0 | font size | 14 | 14 | match |
| hover | dark | group label | 3NP-0 | font weight | 500 | 500 | match |
| hover | dark | group label | 3NP-0 | line height | 21 | 21 | match |
| hover | dark | Email item | 3NM-0 | gap | 8 | 8 | match |
| hover | dark | Email control | 3NO-0 | width | 20 | 20 | match |
| hover | dark | Email control | 3NO-0 | height | 20 | 20 | match |
| hover | dark | Email control | 3NO-0 | radius | full | full | match |
| hover | dark | Email control | 3NO-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| hover | dark | Email control | 3NO-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| hover | dark | Email control | 3NO-0 | border width | 1 | 1 | match |
| hover | dark | Email control | 3NO-0 | border style | solid | solid | match |
| hover | dark | Email control | 3NO-0 | outline | none | none | match |
| hover | dark | Email dot | - | visible | no | no | match |
| hover | dark | Email text | 3NN-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| hover | dark | Email text | 3NN-0 | font family | Geist | Geist | match |
| hover | dark | Email text | 3NN-0 | font size | 14 | 14 | match |
| hover | dark | Email text | 3NN-0 | font weight | 400 | 400 | match |
| hover | dark | Email text | 3NN-0 | line height | 20 | 20 | match |
| hover | dark | Phone item | 3NJ-0 | gap | 8 | 8 | match |
| hover | dark | Phone control | 3NL-0 | width | 20 | 20 | match |
| hover | dark | Phone control | 3NL-0 | height | 20 | 20 | match |
| hover | dark | Phone control | 3NL-0 | radius | full | full | match |
| hover | dark | Phone control | 3NL-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| hover | dark | Phone control | 3NL-0 | border color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| hover | dark | Phone control | 3NL-0 | border width | 1 | 1 | match |
| hover | dark | Phone control | 3NL-0 | border style | solid | solid | match |
| hover | dark | Phone control | 3NL-0 | outline | none | none | match |
| hover | dark | Phone dot | - | visible | no | no | match |
| hover | dark | Phone text | 3NK-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| hover | dark | Phone text | 3NK-0 | font family | Geist | Geist | match |
| hover | dark | Phone text | 3NK-0 | font size | 14 | 14 | match |
| hover | dark | Phone text | 3NK-0 | font weight | 400 | 400 | match |
| hover | dark | Phone text | 3NK-0 | line height | 20 | 20 | match |
| hover | dark | Text message item | 3NG-0 | gap | 8 | 8 | match |
| hover | dark | Text message control | 3NI-0 | width | 20 | 20 | match |
| hover | dark | Text message control | 3NI-0 | height | 20 | 20 | match |
| hover | dark | Text message control | 3NI-0 | radius | full | full | match |
| hover | dark | Text message control | 3NI-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| hover | dark | Text message control | 3NI-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| hover | dark | Text message control | 3NI-0 | border width | 1 | 1 | match |
| hover | dark | Text message control | 3NI-0 | border style | solid | solid | match |
| hover | dark | Text message control | 3NI-0 | outline | none | none | match |
| hover | dark | Text message dot | - | visible | no | no | match |
| hover | dark | Text message text | 3NH-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| hover | dark | Text message text | 3NH-0 | font family | Geist | Geist | match |
| hover | dark | Text message text | 3NH-0 | font size | 14 | 14 | match |
| hover | dark | Text message text | 3NH-0 | font weight | 400 | 400 | match |
| hover | dark | Text message text | 3NH-0 | line height | 20 | 20 | match |
| checked-hover | light | group | 39U-0 | row gap | 12 | 12 | match |
| checked-hover | light | group label | 3A5-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-hover | light | group label | 3A5-0 | font size | 14 | 14 | match |
| checked-hover | light | group label | 3A5-0 | font weight | 500 | 500 | match |
| checked-hover | light | group label | 3A5-0 | line height | 21 | 21 | match |
| checked-hover | light | Email item | 3A1-0 | gap | 8 | 8 | match |
| checked-hover | light | Email control | 3A3-0 | width | 20 | 20 | match |
| checked-hover | light | Email control | 3A3-0 | height | 20 | 20 | match |
| checked-hover | light | Email control | 3A3-0 | radius | full | full | match |
| checked-hover | light | Email control | 3A3-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| checked-hover | light | Email control | 3A3-0 | border color | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| checked-hover | light | Email control | 3A3-0 | border width | 1 | 1 | match |
| checked-hover | light | Email control | 3A3-0 | border style | solid | solid | match |
| checked-hover | light | Email control | 3A3-0 | outline | none | none | match |
| checked-hover | light | Email dot | 3A4-0 | visible | yes | yes | match |
| checked-hover | light | Email dot | 3A4-0 | size | 8x8 | 8x8 | match |
| checked-hover | light | Email dot | 3A4-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-hover | light | Email dot | 3A4-0 | centered | yes | yes | match |
| checked-hover | light | Email text | 3A2-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-hover | light | Email text | 3A2-0 | font family | Geist | Geist | match |
| checked-hover | light | Email text | 3A2-0 | font size | 14 | 14 | match |
| checked-hover | light | Email text | 3A2-0 | font weight | 400 | 400 | match |
| checked-hover | light | Email text | 3A2-0 | line height | 20 | 20 | match |
| checked-hover | light | Phone item | 39Y-0 | gap | 8 | 8 | match |
| checked-hover | light | Phone control | 3A0-0 | width | 20 | 20 | match |
| checked-hover | light | Phone control | 3A0-0 | height | 20 | 20 | match |
| checked-hover | light | Phone control | 3A0-0 | radius | full | full | match |
| checked-hover | light | Phone control | 3A0-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-hover | light | Phone control | 3A0-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked-hover | light | Phone control | 3A0-0 | border width | 1 | 1 | match |
| checked-hover | light | Phone control | 3A0-0 | border style | solid | solid | match |
| checked-hover | light | Phone control | 3A0-0 | outline | none | none | match |
| checked-hover | light | Phone dot | - | visible | no | no | match |
| checked-hover | light | Phone text | 39Z-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-hover | light | Phone text | 39Z-0 | font family | Geist | Geist | match |
| checked-hover | light | Phone text | 39Z-0 | font size | 14 | 14 | match |
| checked-hover | light | Phone text | 39Z-0 | font weight | 400 | 400 | match |
| checked-hover | light | Phone text | 39Z-0 | line height | 20 | 20 | match |
| checked-hover | light | Text message item | 39V-0 | gap | 8 | 8 | match |
| checked-hover | light | Text message control | 39X-0 | width | 20 | 20 | match |
| checked-hover | light | Text message control | 39X-0 | height | 20 | 20 | match |
| checked-hover | light | Text message control | 39X-0 | radius | full | full | match |
| checked-hover | light | Text message control | 39X-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-hover | light | Text message control | 39X-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked-hover | light | Text message control | 39X-0 | border width | 1 | 1 | match |
| checked-hover | light | Text message control | 39X-0 | border style | solid | solid | match |
| checked-hover | light | Text message control | 39X-0 | outline | none | none | match |
| checked-hover | light | Text message dot | - | visible | no | no | match |
| checked-hover | light | Text message text | 39W-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-hover | light | Text message text | 39W-0 | font family | Geist | Geist | match |
| checked-hover | light | Text message text | 39W-0 | font size | 14 | 14 | match |
| checked-hover | light | Text message text | 39W-0 | font weight | 400 | 400 | match |
| checked-hover | light | Text message text | 39W-0 | line height | 20 | 20 | match |
| checked-hover | dark | group | 3N0-0 | row gap | 12 | 12 | match |
| checked-hover | dark | group label | 3NB-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-hover | dark | group label | 3NB-0 | font size | 14 | 14 | match |
| checked-hover | dark | group label | 3NB-0 | font weight | 500 | 500 | match |
| checked-hover | dark | group label | 3NB-0 | line height | 21 | 21 | match |
| checked-hover | dark | Email item | 3N7-0 | gap | 8 | 8 | match |
| checked-hover | dark | Email control | 3N9-0 | width | 20 | 20 | match |
| checked-hover | dark | Email control | 3N9-0 | height | 20 | 20 | match |
| checked-hover | dark | Email control | 3N9-0 | radius | full | full | match |
| checked-hover | dark | Email control | 3N9-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| checked-hover | dark | Email control | 3N9-0 | border color | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| checked-hover | dark | Email control | 3N9-0 | border width | 1 | 1 | match |
| checked-hover | dark | Email control | 3N9-0 | border style | solid | solid | match |
| checked-hover | dark | Email control | 3N9-0 | outline | none | none | match |
| checked-hover | dark | Email dot | 3NA-0 | visible | yes | yes | match |
| checked-hover | dark | Email dot | 3NA-0 | size | 8x8 | 8x8 | match |
| checked-hover | dark | Email dot | 3NA-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-hover | dark | Email dot | 3NA-0 | centered | yes | yes | match |
| checked-hover | dark | Email text | 3N8-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-hover | dark | Email text | 3N8-0 | font family | Geist | Geist | match |
| checked-hover | dark | Email text | 3N8-0 | font size | 14 | 14 | match |
| checked-hover | dark | Email text | 3N8-0 | font weight | 400 | 400 | match |
| checked-hover | dark | Email text | 3N8-0 | line height | 20 | 20 | match |
| checked-hover | dark | Phone item | 3N4-0 | gap | 8 | 8 | match |
| checked-hover | dark | Phone control | 3N6-0 | width | 20 | 20 | match |
| checked-hover | dark | Phone control | 3N6-0 | height | 20 | 20 | match |
| checked-hover | dark | Phone control | 3N6-0 | radius | full | full | match |
| checked-hover | dark | Phone control | 3N6-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| checked-hover | dark | Phone control | 3N6-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked-hover | dark | Phone control | 3N6-0 | border width | 1 | 1 | match |
| checked-hover | dark | Phone control | 3N6-0 | border style | solid | solid | match |
| checked-hover | dark | Phone control | 3N6-0 | outline | none | none | match |
| checked-hover | dark | Phone dot | - | visible | no | no | match |
| checked-hover | dark | Phone text | 3N5-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-hover | dark | Phone text | 3N5-0 | font family | Geist | Geist | match |
| checked-hover | dark | Phone text | 3N5-0 | font size | 14 | 14 | match |
| checked-hover | dark | Phone text | 3N5-0 | font weight | 400 | 400 | match |
| checked-hover | dark | Phone text | 3N5-0 | line height | 20 | 20 | match |
| checked-hover | dark | Text message item | 3N1-0 | gap | 8 | 8 | match |
| checked-hover | dark | Text message control | 3N3-0 | width | 20 | 20 | match |
| checked-hover | dark | Text message control | 3N3-0 | height | 20 | 20 | match |
| checked-hover | dark | Text message control | 3N3-0 | radius | full | full | match |
| checked-hover | dark | Text message control | 3N3-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| checked-hover | dark | Text message control | 3N3-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked-hover | dark | Text message control | 3N3-0 | border width | 1 | 1 | match |
| checked-hover | dark | Text message control | 3N3-0 | border style | solid | solid | match |
| checked-hover | dark | Text message control | 3N3-0 | outline | none | none | match |
| checked-hover | dark | Text message dot | - | visible | no | no | match |
| checked-hover | dark | Text message text | 3N2-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-hover | dark | Text message text | 3N2-0 | font family | Geist | Geist | match |
| checked-hover | dark | Text message text | 3N2-0 | font size | 14 | 14 | match |
| checked-hover | dark | Text message text | 3N2-0 | font weight | 400 | 400 | match |
| checked-hover | dark | Text message text | 3N2-0 | line height | 20 | 20 | match |
| focus-visible | light | group | 3A8-0 | row gap | 12 | 12 | match |
| focus-visible | light | group label | 3AI-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| focus-visible | light | group label | 3AI-0 | font size | 14 | 14 | match |
| focus-visible | light | group label | 3AI-0 | font weight | 500 | 500 | match |
| focus-visible | light | group label | 3AI-0 | line height | 21 | 21 | match |
| focus-visible | light | Email item | 3AF-0 | gap | 8 | 8 | match |
| focus-visible | light | Email control | 3AH-0 | width | 20 | 20 | match |
| focus-visible | light | Email control | 3AH-0 | height | 20 | 20 | match |
| focus-visible | light | Email control | 3AH-0 | radius | full | full | match |
| focus-visible | light | Email control | 3AH-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| focus-visible | light | Email control | 3AH-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| focus-visible | light | Email control | 3AH-0 | border width | 1 | 1 | match |
| focus-visible | light | Email control | 3AH-0 | border style | solid | solid | match |
| focus-visible | light | Email control | 3AH-0 | outline | 2 solid oklch(0.63 0.2 258) | 2 solid oklch(0.63 0.2 258) | match |
| focus-visible | light | Email control | 3AH-0 | outline offset | 2 | 2 | match |
| focus-visible | light | Email dot | - | visible | no | no | match |
| focus-visible | light | Email text | 3AG-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| focus-visible | light | Email text | 3AG-0 | font family | Geist | Geist | match |
| focus-visible | light | Email text | 3AG-0 | font size | 14 | 14 | match |
| focus-visible | light | Email text | 3AG-0 | font weight | 400 | 400 | match |
| focus-visible | light | Email text | 3AG-0 | line height | 20 | 20 | match |
| focus-visible | light | Phone item | 3AC-0 | gap | 8 | 8 | match |
| focus-visible | light | Phone control | 3AE-0 | width | 20 | 20 | match |
| focus-visible | light | Phone control | 3AE-0 | height | 20 | 20 | match |
| focus-visible | light | Phone control | 3AE-0 | radius | full | full | match |
| focus-visible | light | Phone control | 3AE-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| focus-visible | light | Phone control | 3AE-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| focus-visible | light | Phone control | 3AE-0 | border width | 1 | 1 | match |
| focus-visible | light | Phone control | 3AE-0 | border style | solid | solid | match |
| focus-visible | light | Phone control | 3AE-0 | outline | none | none | match |
| focus-visible | light | Phone dot | - | visible | no | no | match |
| focus-visible | light | Phone text | 3AD-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| focus-visible | light | Phone text | 3AD-0 | font family | Geist | Geist | match |
| focus-visible | light | Phone text | 3AD-0 | font size | 14 | 14 | match |
| focus-visible | light | Phone text | 3AD-0 | font weight | 400 | 400 | match |
| focus-visible | light | Phone text | 3AD-0 | line height | 20 | 20 | match |
| focus-visible | light | Text message item | 3A9-0 | gap | 8 | 8 | match |
| focus-visible | light | Text message control | 3AB-0 | width | 20 | 20 | match |
| focus-visible | light | Text message control | 3AB-0 | height | 20 | 20 | match |
| focus-visible | light | Text message control | 3AB-0 | radius | full | full | match |
| focus-visible | light | Text message control | 3AB-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| focus-visible | light | Text message control | 3AB-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| focus-visible | light | Text message control | 3AB-0 | border width | 1 | 1 | match |
| focus-visible | light | Text message control | 3AB-0 | border style | solid | solid | match |
| focus-visible | light | Text message control | 3AB-0 | outline | none | none | match |
| focus-visible | light | Text message dot | - | visible | no | no | match |
| focus-visible | light | Text message text | 3AA-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| focus-visible | light | Text message text | 3AA-0 | font family | Geist | Geist | match |
| focus-visible | light | Text message text | 3AA-0 | font size | 14 | 14 | match |
| focus-visible | light | Text message text | 3AA-0 | font weight | 400 | 400 | match |
| focus-visible | light | Text message text | 3AA-0 | line height | 20 | 20 | match |
| focus-visible | dark | group | 3MN-0 | row gap | 12 | 12 | match |
| focus-visible | dark | group label | 3MX-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| focus-visible | dark | group label | 3MX-0 | font size | 14 | 14 | match |
| focus-visible | dark | group label | 3MX-0 | font weight | 500 | 500 | match |
| focus-visible | dark | group label | 3MX-0 | line height | 21 | 21 | match |
| focus-visible | dark | Email item | 3MU-0 | gap | 8 | 8 | match |
| focus-visible | dark | Email control | 3MW-0 | width | 20 | 20 | match |
| focus-visible | dark | Email control | 3MW-0 | height | 20 | 20 | match |
| focus-visible | dark | Email control | 3MW-0 | radius | full | full | match |
| focus-visible | dark | Email control | 3MW-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| focus-visible | dark | Email control | 3MW-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| focus-visible | dark | Email control | 3MW-0 | border width | 1 | 1 | match |
| focus-visible | dark | Email control | 3MW-0 | border style | solid | solid | match |
| focus-visible | dark | Email control | 3MW-0 | outline | 2 solid oklch(0.73 0.141 258) | 2 solid oklch(0.73 0.141 258) | match |
| focus-visible | dark | Email control | 3MW-0 | outline offset | 2 | 2 | match |
| focus-visible | dark | Email dot | - | visible | no | no | match |
| focus-visible | dark | Email text | 3MV-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| focus-visible | dark | Email text | 3MV-0 | font family | Geist | Geist | match |
| focus-visible | dark | Email text | 3MV-0 | font size | 14 | 14 | match |
| focus-visible | dark | Email text | 3MV-0 | font weight | 400 | 400 | match |
| focus-visible | dark | Email text | 3MV-0 | line height | 20 | 20 | match |
| focus-visible | dark | Phone item | 3MR-0 | gap | 8 | 8 | match |
| focus-visible | dark | Phone control | 3MT-0 | width | 20 | 20 | match |
| focus-visible | dark | Phone control | 3MT-0 | height | 20 | 20 | match |
| focus-visible | dark | Phone control | 3MT-0 | radius | full | full | match |
| focus-visible | dark | Phone control | 3MT-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| focus-visible | dark | Phone control | 3MT-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| focus-visible | dark | Phone control | 3MT-0 | border width | 1 | 1 | match |
| focus-visible | dark | Phone control | 3MT-0 | border style | solid | solid | match |
| focus-visible | dark | Phone control | 3MT-0 | outline | none | none | match |
| focus-visible | dark | Phone dot | - | visible | no | no | match |
| focus-visible | dark | Phone text | 3MS-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| focus-visible | dark | Phone text | 3MS-0 | font family | Geist | Geist | match |
| focus-visible | dark | Phone text | 3MS-0 | font size | 14 | 14 | match |
| focus-visible | dark | Phone text | 3MS-0 | font weight | 400 | 400 | match |
| focus-visible | dark | Phone text | 3MS-0 | line height | 20 | 20 | match |
| focus-visible | dark | Text message item | 3MO-0 | gap | 8 | 8 | match |
| focus-visible | dark | Text message control | 3MQ-0 | width | 20 | 20 | match |
| focus-visible | dark | Text message control | 3MQ-0 | height | 20 | 20 | match |
| focus-visible | dark | Text message control | 3MQ-0 | radius | full | full | match |
| focus-visible | dark | Text message control | 3MQ-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| focus-visible | dark | Text message control | 3MQ-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| focus-visible | dark | Text message control | 3MQ-0 | border width | 1 | 1 | match |
| focus-visible | dark | Text message control | 3MQ-0 | border style | solid | solid | match |
| focus-visible | dark | Text message control | 3MQ-0 | outline | none | none | match |
| focus-visible | dark | Text message dot | - | visible | no | no | match |
| focus-visible | dark | Text message text | 3MP-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| focus-visible | dark | Text message text | 3MP-0 | font family | Geist | Geist | match |
| focus-visible | dark | Text message text | 3MP-0 | font size | 14 | 14 | match |
| focus-visible | dark | Text message text | 3MP-0 | font weight | 400 | 400 | match |
| focus-visible | dark | Text message text | 3MP-0 | line height | 20 | 20 | match |
| checked-focus-visible | light | group | 3AL-0 | row gap | 12 | 12 | match |
| checked-focus-visible | light | group label | 3AW-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-focus-visible | light | group label | 3AW-0 | font size | 14 | 14 | match |
| checked-focus-visible | light | group label | 3AW-0 | font weight | 500 | 500 | match |
| checked-focus-visible | light | group label | 3AW-0 | line height | 21 | 21 | match |
| checked-focus-visible | light | Email item | 3AS-0 | gap | 8 | 8 | match |
| checked-focus-visible | light | Email control | 3AU-0 | width | 20 | 20 | match |
| checked-focus-visible | light | Email control | 3AU-0 | height | 20 | 20 | match |
| checked-focus-visible | light | Email control | 3AU-0 | radius | full | full | match |
| checked-focus-visible | light | Email control | 3AU-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | light | Email control | 3AU-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked-focus-visible | light | Email control | 3AU-0 | border width | 1 | 1 | match |
| checked-focus-visible | light | Email control | 3AU-0 | border style | solid | solid | match |
| checked-focus-visible | light | Email control | 3AU-0 | outline | none | none | match |
| checked-focus-visible | light | Email dot | - | visible | no | no | match |
| checked-focus-visible | light | Email text | 3AT-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-focus-visible | light | Email text | 3AT-0 | font family | Geist | Geist | match |
| checked-focus-visible | light | Email text | 3AT-0 | font size | 14 | 14 | match |
| checked-focus-visible | light | Email text | 3AT-0 | font weight | 400 | 400 | match |
| checked-focus-visible | light | Email text | 3AT-0 | line height | 20 | 20 | match |
| checked-focus-visible | light | Phone item | 3AP-0 | gap | 8 | 8 | match |
| checked-focus-visible | light | Phone control | 3AR-0 | width | 20 | 20 | match |
| checked-focus-visible | light | Phone control | 3AR-0 | height | 20 | 20 | match |
| checked-focus-visible | light | Phone control | 3AR-0 | radius | full | full | match |
| checked-focus-visible | light | Phone control | 3AR-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-focus-visible | light | Phone control | 3AR-0 | border color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-focus-visible | light | Phone control | 3AR-0 | border width | 1 | 1 | match |
| checked-focus-visible | light | Phone control | 3AR-0 | border style | solid | solid | match |
| checked-focus-visible | light | Phone control | 3AR-0 | outline | 2 solid oklch(0.63 0.2 258) | 2 solid oklch(0.63 0.2 258) | match |
| checked-focus-visible | light | Phone control | 3AR-0 | outline offset | 2 | 2 | match |
| checked-focus-visible | light | Phone dot | 3AV-0 | visible | yes | yes | match |
| checked-focus-visible | light | Phone dot | 3AV-0 | size | 8x8 | 8x8 | match |
| checked-focus-visible | light | Phone dot | 3AV-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | light | Phone dot | 3AV-0 | centered | yes | yes | match |
| checked-focus-visible | light | Phone text | 3AQ-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-focus-visible | light | Phone text | 3AQ-0 | font family | Geist | Geist | match |
| checked-focus-visible | light | Phone text | 3AQ-0 | font size | 14 | 14 | match |
| checked-focus-visible | light | Phone text | 3AQ-0 | font weight | 400 | 400 | match |
| checked-focus-visible | light | Phone text | 3AQ-0 | line height | 20 | 20 | match |
| checked-focus-visible | light | Text message item | 3AM-0 | gap | 8 | 8 | match |
| checked-focus-visible | light | Text message control | 3AO-0 | width | 20 | 20 | match |
| checked-focus-visible | light | Text message control | 3AO-0 | height | 20 | 20 | match |
| checked-focus-visible | light | Text message control | 3AO-0 | radius | full | full | match |
| checked-focus-visible | light | Text message control | 3AO-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | light | Text message control | 3AO-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked-focus-visible | light | Text message control | 3AO-0 | border width | 1 | 1 | match |
| checked-focus-visible | light | Text message control | 3AO-0 | border style | solid | solid | match |
| checked-focus-visible | light | Text message control | 3AO-0 | outline | none | none | match |
| checked-focus-visible | light | Text message dot | - | visible | no | no | match |
| checked-focus-visible | light | Text message text | 3AN-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-focus-visible | light | Text message text | 3AN-0 | font family | Geist | Geist | match |
| checked-focus-visible | light | Text message text | 3AN-0 | font size | 14 | 14 | match |
| checked-focus-visible | light | Text message text | 3AN-0 | font weight | 400 | 400 | match |
| checked-focus-visible | light | Text message text | 3AN-0 | line height | 20 | 20 | match |
| checked-focus-visible | dark | group | 3M9-0 | row gap | 12 | 12 | match |
| checked-focus-visible | dark | group label | 3MK-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | dark | group label | 3MK-0 | font size | 14 | 14 | match |
| checked-focus-visible | dark | group label | 3MK-0 | font weight | 500 | 500 | match |
| checked-focus-visible | dark | group label | 3MK-0 | line height | 21 | 21 | match |
| checked-focus-visible | dark | Email item | 3MH-0 | gap | 8 | 8 | match |
| checked-focus-visible | dark | Email control | 3MJ-0 | width | 20 | 20 | match |
| checked-focus-visible | dark | Email control | 3MJ-0 | height | 20 | 20 | match |
| checked-focus-visible | dark | Email control | 3MJ-0 | radius | full | full | match |
| checked-focus-visible | dark | Email control | 3MJ-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| checked-focus-visible | dark | Email control | 3MJ-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked-focus-visible | dark | Email control | 3MJ-0 | border width | 1 | 1 | match |
| checked-focus-visible | dark | Email control | 3MJ-0 | border style | solid | solid | match |
| checked-focus-visible | dark | Email control | 3MJ-0 | outline | none | none | match |
| checked-focus-visible | dark | Email dot | - | visible | no | no | match |
| checked-focus-visible | dark | Email text | 3MI-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | dark | Email text | 3MI-0 | font family | Geist | Geist | match |
| checked-focus-visible | dark | Email text | 3MI-0 | font size | 14 | 14 | match |
| checked-focus-visible | dark | Email text | 3MI-0 | font weight | 400 | 400 | match |
| checked-focus-visible | dark | Email text | 3MI-0 | line height | 20 | 20 | match |
| checked-focus-visible | dark | Phone item | 3MD-0 | gap | 8 | 8 | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | width | 20 | 20 | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | height | 20 | 20 | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | radius | full | full | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | border color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | border width | 1 | 1 | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | border style | solid | solid | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | outline | 2 solid oklch(0.73 0.141 258) | 2 solid oklch(0.73 0.141 258) | match |
| checked-focus-visible | dark | Phone control | 3MF-0 | outline offset | 2 | 2 | match |
| checked-focus-visible | dark | Phone dot | 3MG-0 | visible | yes | yes | match |
| checked-focus-visible | dark | Phone dot | 3MG-0 | size | 8x8 | 8x8 | match |
| checked-focus-visible | dark | Phone dot | 3MG-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| checked-focus-visible | dark | Phone dot | 3MG-0 | centered | yes | yes | match |
| checked-focus-visible | dark | Phone text | 3ME-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | dark | Phone text | 3ME-0 | font family | Geist | Geist | match |
| checked-focus-visible | dark | Phone text | 3ME-0 | font size | 14 | 14 | match |
| checked-focus-visible | dark | Phone text | 3ME-0 | font weight | 400 | 400 | match |
| checked-focus-visible | dark | Phone text | 3ME-0 | line height | 20 | 20 | match |
| checked-focus-visible | dark | Text message item | 3MA-0 | gap | 8 | 8 | match |
| checked-focus-visible | dark | Text message control | 3MC-0 | width | 20 | 20 | match |
| checked-focus-visible | dark | Text message control | 3MC-0 | height | 20 | 20 | match |
| checked-focus-visible | dark | Text message control | 3MC-0 | radius | full | full | match |
| checked-focus-visible | dark | Text message control | 3MC-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| checked-focus-visible | dark | Text message control | 3MC-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| checked-focus-visible | dark | Text message control | 3MC-0 | border width | 1 | 1 | match |
| checked-focus-visible | dark | Text message control | 3MC-0 | border style | solid | solid | match |
| checked-focus-visible | dark | Text message control | 3MC-0 | outline | none | none | match |
| checked-focus-visible | dark | Text message dot | - | visible | no | no | match |
| checked-focus-visible | dark | Text message text | 3MB-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| checked-focus-visible | dark | Text message text | 3MB-0 | font family | Geist | Geist | match |
| checked-focus-visible | dark | Text message text | 3MB-0 | font size | 14 | 14 | match |
| checked-focus-visible | dark | Text message text | 3MB-0 | font weight | 400 | 400 | match |
| checked-focus-visible | dark | Text message text | 3MB-0 | line height | 20 | 20 | match |
| invalid | light | group | 3AZ-0 | row gap | 12 | 12 | match |
| invalid | light | group label | 3BA-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid | light | group label | 3BA-0 | font size | 14 | 14 | match |
| invalid | light | group label | 3BA-0 | font weight | 500 | 500 | match |
| invalid | light | group label | 3BA-0 | line height | 21 | 21 | match |
| invalid | light | Email item | 3B6-0 | gap | 8 | 8 | match |
| invalid | light | Email control | 3B8-0 | width | 20 | 20 | match |
| invalid | light | Email control | 3B8-0 | height | 20 | 20 | match |
| invalid | light | Email control | 3B8-0 | radius | full | full | match |
| invalid | light | Email control | 3B8-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid | light | Email control | 3B8-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| invalid | light | Email control | 3B8-0 | border width | 1 | 1 | match |
| invalid | light | Email control | 3B8-0 | border style | solid | solid | match |
| invalid | light | Email control | 3B8-0 | outline | none | none | match |
| invalid | light | Email dot | 3B9-0 | visible | yes | yes | match |
| invalid | light | Email dot | 3B9-0 | size | 8x8 | 8x8 | match |
| invalid | light | Email dot | 3B9-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid | light | Email dot | 3B9-0 | centered | yes | yes | match |
| invalid | light | Email text | 3B7-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid | light | Email text | 3B7-0 | font family | Geist | Geist | match |
| invalid | light | Email text | 3B7-0 | font size | 14 | 14 | match |
| invalid | light | Email text | 3B7-0 | font weight | 400 | 400 | match |
| invalid | light | Email text | 3B7-0 | line height | 20 | 20 | match |
| invalid | light | Phone item | 3B3-0 | gap | 8 | 8 | match |
| invalid | light | Phone control | 3B5-0 | width | 20 | 20 | match |
| invalid | light | Phone control | 3B5-0 | height | 20 | 20 | match |
| invalid | light | Phone control | 3B5-0 | radius | full | full | match |
| invalid | light | Phone control | 3B5-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid | light | Phone control | 3B5-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| invalid | light | Phone control | 3B5-0 | border width | 1 | 1 | match |
| invalid | light | Phone control | 3B5-0 | border style | solid | solid | match |
| invalid | light | Phone control | 3B5-0 | outline | none | none | match |
| invalid | light | Phone dot | - | visible | no | no | match |
| invalid | light | Phone text | 3B4-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid | light | Phone text | 3B4-0 | font family | Geist | Geist | match |
| invalid | light | Phone text | 3B4-0 | font size | 14 | 14 | match |
| invalid | light | Phone text | 3B4-0 | font weight | 400 | 400 | match |
| invalid | light | Phone text | 3B4-0 | line height | 20 | 20 | match |
| invalid | light | Text message item | 3B0-0 | gap | 8 | 8 | match |
| invalid | light | Text message control | 3B2-0 | width | 20 | 20 | match |
| invalid | light | Text message control | 3B2-0 | height | 20 | 20 | match |
| invalid | light | Text message control | 3B2-0 | radius | full | full | match |
| invalid | light | Text message control | 3B2-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid | light | Text message control | 3B2-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| invalid | light | Text message control | 3B2-0 | border width | 1 | 1 | match |
| invalid | light | Text message control | 3B2-0 | border style | solid | solid | match |
| invalid | light | Text message control | 3B2-0 | outline | none | none | match |
| invalid | light | Text message dot | - | visible | no | no | match |
| invalid | light | Text message text | 3B1-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid | light | Text message text | 3B1-0 | font family | Geist | Geist | match |
| invalid | light | Text message text | 3B1-0 | font size | 14 | 14 | match |
| invalid | light | Text message text | 3B1-0 | font weight | 400 | 400 | match |
| invalid | light | Text message text | 3B1-0 | line height | 20 | 20 | match |
| invalid | dark | group | 3LU-0 | row gap | 12 | 12 | match |
| invalid | dark | group label | 3M5-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid | dark | group label | 3M5-0 | font size | 14 | 14 | match |
| invalid | dark | group label | 3M5-0 | font weight | 500 | 500 | match |
| invalid | dark | group label | 3M5-0 | line height | 21 | 21 | match |
| invalid | dark | Email item | 3M1-0 | gap | 8 | 8 | match |
| invalid | dark | Email control | 3M3-0 | width | 20 | 20 | match |
| invalid | dark | Email control | 3M3-0 | height | 20 | 20 | match |
| invalid | dark | Email control | 3M3-0 | radius | full | full | match |
| invalid | dark | Email control | 3M3-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid | dark | Email control | 3M3-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| invalid | dark | Email control | 3M3-0 | border width | 1 | 1 | match |
| invalid | dark | Email control | 3M3-0 | border style | solid | solid | match |
| invalid | dark | Email control | 3M3-0 | outline | none | none | match |
| invalid | dark | Email dot | 3M4-0 | visible | yes | yes | match |
| invalid | dark | Email dot | 3M4-0 | size | 8x8 | 8x8 | match |
| invalid | dark | Email dot | 3M4-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid | dark | Email dot | 3M4-0 | centered | yes | yes | match |
| invalid | dark | Email text | 3M2-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid | dark | Email text | 3M2-0 | font family | Geist | Geist | match |
| invalid | dark | Email text | 3M2-0 | font size | 14 | 14 | match |
| invalid | dark | Email text | 3M2-0 | font weight | 400 | 400 | match |
| invalid | dark | Email text | 3M2-0 | line height | 20 | 20 | match |
| invalid | dark | Phone item | 3LY-0 | gap | 8 | 8 | match |
| invalid | dark | Phone control | 3M0-0 | width | 20 | 20 | match |
| invalid | dark | Phone control | 3M0-0 | height | 20 | 20 | match |
| invalid | dark | Phone control | 3M0-0 | radius | full | full | match |
| invalid | dark | Phone control | 3M0-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| invalid | dark | Phone control | 3M0-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| invalid | dark | Phone control | 3M0-0 | border width | 1 | 1 | match |
| invalid | dark | Phone control | 3M0-0 | border style | solid | solid | match |
| invalid | dark | Phone control | 3M0-0 | outline | none | none | match |
| invalid | dark | Phone dot | - | visible | no | no | match |
| invalid | dark | Phone text | 3LZ-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid | dark | Phone text | 3LZ-0 | font family | Geist | Geist | match |
| invalid | dark | Phone text | 3LZ-0 | font size | 14 | 14 | match |
| invalid | dark | Phone text | 3LZ-0 | font weight | 400 | 400 | match |
| invalid | dark | Phone text | 3LZ-0 | line height | 20 | 20 | match |
| invalid | dark | Text message item | 3LV-0 | gap | 8 | 8 | match |
| invalid | dark | Text message control | 3LX-0 | width | 20 | 20 | match |
| invalid | dark | Text message control | 3LX-0 | height | 20 | 20 | match |
| invalid | dark | Text message control | 3LX-0 | radius | full | full | match |
| invalid | dark | Text message control | 3LX-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| invalid | dark | Text message control | 3LX-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| invalid | dark | Text message control | 3LX-0 | border width | 1 | 1 | match |
| invalid | dark | Text message control | 3LX-0 | border style | solid | solid | match |
| invalid | dark | Text message control | 3LX-0 | outline | none | none | match |
| invalid | dark | Text message dot | - | visible | no | no | match |
| invalid | dark | Text message text | 3LW-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid | dark | Text message text | 3LW-0 | font family | Geist | Geist | match |
| invalid | dark | Text message text | 3LW-0 | font size | 14 | 14 | match |
| invalid | dark | Text message text | 3LW-0 | font weight | 400 | 400 | match |
| invalid | dark | Text message text | 3LW-0 | line height | 20 | 20 | match |
| invalid-focus-visible | light | group | 3BD-0 | row gap | 12 | 12 | match |
| invalid-focus-visible | light | group label | 3BO-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid-focus-visible | light | group label | 3BO-0 | font size | 14 | 14 | match |
| invalid-focus-visible | light | group label | 3BO-0 | font weight | 500 | 500 | match |
| invalid-focus-visible | light | group label | 3BO-0 | line height | 21 | 21 | match |
| invalid-focus-visible | light | Email item | 3BK-0 | gap | 8 | 8 | match |
| invalid-focus-visible | light | Email control | 3BM-0 | width | 20 | 20 | match |
| invalid-focus-visible | light | Email control | 3BM-0 | height | 20 | 20 | match |
| invalid-focus-visible | light | Email control | 3BM-0 | radius | full | full | match |
| invalid-focus-visible | light | Email control | 3BM-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid-focus-visible | light | Email control | 3BM-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| invalid-focus-visible | light | Email control | 3BM-0 | border width | 1 | 1 | match |
| invalid-focus-visible | light | Email control | 3BM-0 | border style | solid | solid | match |
| invalid-focus-visible | light | Email control | 3BM-0 | outline | 2 solid oklch(0.53 0.2 25) | 2 solid oklch(0.53 0.2 25) | match |
| invalid-focus-visible | light | Email control | 3BM-0 | outline offset | 2 | 2 | match |
| invalid-focus-visible | light | Email dot | 3BN-0 | visible | yes | yes | match |
| invalid-focus-visible | light | Email dot | 3BN-0 | size | 8x8 | 8x8 | match |
| invalid-focus-visible | light | Email dot | 3BN-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid-focus-visible | light | Email dot | 3BN-0 | centered | yes | yes | match |
| invalid-focus-visible | light | Email text | 3BL-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid-focus-visible | light | Email text | 3BL-0 | font family | Geist | Geist | match |
| invalid-focus-visible | light | Email text | 3BL-0 | font size | 14 | 14 | match |
| invalid-focus-visible | light | Email text | 3BL-0 | font weight | 400 | 400 | match |
| invalid-focus-visible | light | Email text | 3BL-0 | line height | 20 | 20 | match |
| invalid-focus-visible | light | Phone item | 3BH-0 | gap | 8 | 8 | match |
| invalid-focus-visible | light | Phone control | 3BJ-0 | width | 20 | 20 | match |
| invalid-focus-visible | light | Phone control | 3BJ-0 | height | 20 | 20 | match |
| invalid-focus-visible | light | Phone control | 3BJ-0 | radius | full | full | match |
| invalid-focus-visible | light | Phone control | 3BJ-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid-focus-visible | light | Phone control | 3BJ-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| invalid-focus-visible | light | Phone control | 3BJ-0 | border width | 1 | 1 | match |
| invalid-focus-visible | light | Phone control | 3BJ-0 | border style | solid | solid | match |
| invalid-focus-visible | light | Phone control | 3BJ-0 | outline | none | none | match |
| invalid-focus-visible | light | Phone dot | - | visible | no | no | match |
| invalid-focus-visible | light | Phone text | 3BI-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid-focus-visible | light | Phone text | 3BI-0 | font family | Geist | Geist | match |
| invalid-focus-visible | light | Phone text | 3BI-0 | font size | 14 | 14 | match |
| invalid-focus-visible | light | Phone text | 3BI-0 | font weight | 400 | 400 | match |
| invalid-focus-visible | light | Phone text | 3BI-0 | line height | 20 | 20 | match |
| invalid-focus-visible | light | Text message item | 3BE-0 | gap | 8 | 8 | match |
| invalid-focus-visible | light | Text message control | 3BG-0 | width | 20 | 20 | match |
| invalid-focus-visible | light | Text message control | 3BG-0 | height | 20 | 20 | match |
| invalid-focus-visible | light | Text message control | 3BG-0 | radius | full | full | match |
| invalid-focus-visible | light | Text message control | 3BG-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid-focus-visible | light | Text message control | 3BG-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| invalid-focus-visible | light | Text message control | 3BG-0 | border width | 1 | 1 | match |
| invalid-focus-visible | light | Text message control | 3BG-0 | border style | solid | solid | match |
| invalid-focus-visible | light | Text message control | 3BG-0 | outline | none | none | match |
| invalid-focus-visible | light | Text message dot | - | visible | no | no | match |
| invalid-focus-visible | light | Text message text | 3BF-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid-focus-visible | light | Text message text | 3BF-0 | font family | Geist | Geist | match |
| invalid-focus-visible | light | Text message text | 3BF-0 | font size | 14 | 14 | match |
| invalid-focus-visible | light | Text message text | 3BF-0 | font weight | 400 | 400 | match |
| invalid-focus-visible | light | Text message text | 3BF-0 | line height | 20 | 20 | match |
| invalid-focus-visible | dark | group | 3LG-0 | row gap | 12 | 12 | match |
| invalid-focus-visible | dark | group label | 3LR-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid-focus-visible | dark | group label | 3LR-0 | font size | 14 | 14 | match |
| invalid-focus-visible | dark | group label | 3LR-0 | font weight | 500 | 500 | match |
| invalid-focus-visible | dark | group label | 3LR-0 | line height | 21 | 21 | match |
| invalid-focus-visible | dark | Email item | 3LN-0 | gap | 8 | 8 | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | width | 20 | 20 | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | height | 20 | 20 | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | radius | full | full | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | border width | 1 | 1 | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | border style | solid | solid | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | outline | 2 solid oklch(0.73 0.166 25) | 2 solid oklch(0.73 0.166 25) | match |
| invalid-focus-visible | dark | Email control | 3LP-0 | outline offset | 2 | 2 | match |
| invalid-focus-visible | dark | Email dot | 3LQ-0 | visible | yes | yes | match |
| invalid-focus-visible | dark | Email dot | 3LQ-0 | size | 8x8 | 8x8 | match |
| invalid-focus-visible | dark | Email dot | 3LQ-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| invalid-focus-visible | dark | Email dot | 3LQ-0 | centered | yes | yes | match |
| invalid-focus-visible | dark | Email text | 3LO-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid-focus-visible | dark | Email text | 3LO-0 | font family | Geist | Geist | match |
| invalid-focus-visible | dark | Email text | 3LO-0 | font size | 14 | 14 | match |
| invalid-focus-visible | dark | Email text | 3LO-0 | font weight | 400 | 400 | match |
| invalid-focus-visible | dark | Email text | 3LO-0 | line height | 20 | 20 | match |
| invalid-focus-visible | dark | Phone item | 3LK-0 | gap | 8 | 8 | match |
| invalid-focus-visible | dark | Phone control | 3LM-0 | width | 20 | 20 | match |
| invalid-focus-visible | dark | Phone control | 3LM-0 | height | 20 | 20 | match |
| invalid-focus-visible | dark | Phone control | 3LM-0 | radius | full | full | match |
| invalid-focus-visible | dark | Phone control | 3LM-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| invalid-focus-visible | dark | Phone control | 3LM-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| invalid-focus-visible | dark | Phone control | 3LM-0 | border width | 1 | 1 | match |
| invalid-focus-visible | dark | Phone control | 3LM-0 | border style | solid | solid | match |
| invalid-focus-visible | dark | Phone control | 3LM-0 | outline | none | none | match |
| invalid-focus-visible | dark | Phone dot | - | visible | no | no | match |
| invalid-focus-visible | dark | Phone text | 3LL-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid-focus-visible | dark | Phone text | 3LL-0 | font family | Geist | Geist | match |
| invalid-focus-visible | dark | Phone text | 3LL-0 | font size | 14 | 14 | match |
| invalid-focus-visible | dark | Phone text | 3LL-0 | font weight | 400 | 400 | match |
| invalid-focus-visible | dark | Phone text | 3LL-0 | line height | 20 | 20 | match |
| invalid-focus-visible | dark | Text message item | 3LH-0 | gap | 8 | 8 | match |
| invalid-focus-visible | dark | Text message control | 3LJ-0 | width | 20 | 20 | match |
| invalid-focus-visible | dark | Text message control | 3LJ-0 | height | 20 | 20 | match |
| invalid-focus-visible | dark | Text message control | 3LJ-0 | radius | full | full | match |
| invalid-focus-visible | dark | Text message control | 3LJ-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| invalid-focus-visible | dark | Text message control | 3LJ-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| invalid-focus-visible | dark | Text message control | 3LJ-0 | border width | 1 | 1 | match |
| invalid-focus-visible | dark | Text message control | 3LJ-0 | border style | solid | solid | match |
| invalid-focus-visible | dark | Text message control | 3LJ-0 | outline | none | none | match |
| invalid-focus-visible | dark | Text message dot | - | visible | no | no | match |
| invalid-focus-visible | dark | Text message text | 3LI-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| invalid-focus-visible | dark | Text message text | 3LI-0 | font family | Geist | Geist | match |
| invalid-focus-visible | dark | Text message text | 3LI-0 | font size | 14 | 14 | match |
| invalid-focus-visible | dark | Text message text | 3LI-0 | font weight | 400 | 400 | match |
| invalid-focus-visible | dark | Text message text | 3LI-0 | line height | 20 | 20 | match |
| disabled | light | group | 3BR-0 | row gap | 12 | 12 | match |
| disabled | light | group label | 3C2-0 | color | oklch(0.73 0.017 260) | oklch(0.73 0.017 260) | match |
| disabled | light | group label | 3C2-0 | font size | 14 | 14 | match |
| disabled | light | group label | 3C2-0 | font weight | 500 | 500 | match |
| disabled | light | group label | 3C2-0 | line height | 21 | 21 | match |
| disabled | light | Email item | 3BY-0 | gap | 8 | 8 | match |
| disabled | light | Email control | 3C0-0 | width | 20 | 20 | match |
| disabled | light | Email control | 3C0-0 | height | 20 | 20 | match |
| disabled | light | Email control | 3C0-0 | radius | full | full | match |
| disabled | light | Email control | 3C0-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| disabled | light | Email control | 3C0-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| disabled | light | Email control | 3C0-0 | border width | 1 | 1 | match |
| disabled | light | Email control | 3C0-0 | border style | solid | solid | match |
| disabled | light | Email control | 3C0-0 | outline | none | none | match |
| disabled | light | Email dot | 3C1-0 | visible | yes | yes | match |
| disabled | light | Email dot | 3C1-0 | size | 8x8 | 8x8 | match |
| disabled | light | Email dot | 3C1-0 | color | oklch(0.73 0.017 260) | oklch(0.73 0.017 260) | match |
| disabled | light | Email dot | 3C1-0 | centered | yes | yes | match |
| disabled | light | Email text | 3BZ-0 | color | oklch(0.73 0.017 260) | oklch(0.73 0.017 260) | match |
| disabled | light | Email text | 3BZ-0 | font family | Geist | Geist | match |
| disabled | light | Email text | 3BZ-0 | font size | 14 | 14 | match |
| disabled | light | Email text | 3BZ-0 | font weight | 400 | 400 | match |
| disabled | light | Email text | 3BZ-0 | line height | 20 | 20 | match |
| disabled | light | Phone item | 3BV-0 | gap | 8 | 8 | match |
| disabled | light | Phone control | 3BX-0 | width | 20 | 20 | match |
| disabled | light | Phone control | 3BX-0 | height | 20 | 20 | match |
| disabled | light | Phone control | 3BX-0 | radius | full | full | match |
| disabled | light | Phone control | 3BX-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| disabled | light | Phone control | 3BX-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| disabled | light | Phone control | 3BX-0 | border width | 1 | 1 | match |
| disabled | light | Phone control | 3BX-0 | border style | solid | solid | match |
| disabled | light | Phone control | 3BX-0 | outline | none | none | match |
| disabled | light | Phone dot | - | visible | no | no | match |
| disabled | light | Phone text | 3BW-0 | color | oklch(0.73 0.017 260) | oklch(0.73 0.017 260) | match |
| disabled | light | Phone text | 3BW-0 | font family | Geist | Geist | match |
| disabled | light | Phone text | 3BW-0 | font size | 14 | 14 | match |
| disabled | light | Phone text | 3BW-0 | font weight | 400 | 400 | match |
| disabled | light | Phone text | 3BW-0 | line height | 20 | 20 | match |
| disabled | light | Text message item | 3BS-0 | gap | 8 | 8 | match |
| disabled | light | Text message control | 3BU-0 | width | 20 | 20 | match |
| disabled | light | Text message control | 3BU-0 | height | 20 | 20 | match |
| disabled | light | Text message control | 3BU-0 | radius | full | full | match |
| disabled | light | Text message control | 3BU-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| disabled | light | Text message control | 3BU-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| disabled | light | Text message control | 3BU-0 | border width | 1 | 1 | match |
| disabled | light | Text message control | 3BU-0 | border style | solid | solid | match |
| disabled | light | Text message control | 3BU-0 | outline | none | none | match |
| disabled | light | Text message dot | - | visible | no | no | match |
| disabled | light | Text message text | 3BT-0 | color | oklch(0.73 0.017 260) | oklch(0.73 0.017 260) | match |
| disabled | light | Text message text | 3BT-0 | font family | Geist | Geist | match |
| disabled | light | Text message text | 3BT-0 | font size | 14 | 14 | match |
| disabled | light | Text message text | 3BT-0 | font weight | 400 | 400 | match |
| disabled | light | Text message text | 3BT-0 | line height | 20 | 20 | match |
| disabled | dark | group | 3L2-0 | row gap | 12 | 12 | match |
| disabled | dark | group label | 3LD-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| disabled | dark | group label | 3LD-0 | font size | 14 | 14 | match |
| disabled | dark | group label | 3LD-0 | font weight | 500 | 500 | match |
| disabled | dark | group label | 3LD-0 | line height | 21 | 21 | match |
| disabled | dark | Email item | 3L9-0 | gap | 8 | 8 | match |
| disabled | dark | Email control | 3LB-0 | width | 20 | 20 | match |
| disabled | dark | Email control | 3LB-0 | height | 20 | 20 | match |
| disabled | dark | Email control | 3LB-0 | radius | full | full | match |
| disabled | dark | Email control | 3LB-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| disabled | dark | Email control | 3LB-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| disabled | dark | Email control | 3LB-0 | border width | 1 | 1 | match |
| disabled | dark | Email control | 3LB-0 | border style | solid | solid | match |
| disabled | dark | Email control | 3LB-0 | outline | none | none | match |
| disabled | dark | Email dot | 3LC-0 | visible | yes | yes | match |
| disabled | dark | Email dot | 3LC-0 | size | 8x8 | 8x8 | match |
| disabled | dark | Email dot | 3LC-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| disabled | dark | Email dot | 3LC-0 | centered | yes | yes | match |
| disabled | dark | Email text | 3LA-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| disabled | dark | Email text | 3LA-0 | font family | Geist | Geist | match |
| disabled | dark | Email text | 3LA-0 | font size | 14 | 14 | match |
| disabled | dark | Email text | 3LA-0 | font weight | 400 | 400 | match |
| disabled | dark | Email text | 3LA-0 | line height | 20 | 20 | match |
| disabled | dark | Phone item | 3L6-0 | gap | 8 | 8 | match |
| disabled | dark | Phone control | 3L8-0 | width | 20 | 20 | match |
| disabled | dark | Phone control | 3L8-0 | height | 20 | 20 | match |
| disabled | dark | Phone control | 3L8-0 | radius | full | full | match |
| disabled | dark | Phone control | 3L8-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| disabled | dark | Phone control | 3L8-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| disabled | dark | Phone control | 3L8-0 | border width | 1 | 1 | match |
| disabled | dark | Phone control | 3L8-0 | border style | solid | solid | match |
| disabled | dark | Phone control | 3L8-0 | outline | none | none | match |
| disabled | dark | Phone dot | - | visible | no | no | match |
| disabled | dark | Phone text | 3L7-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| disabled | dark | Phone text | 3L7-0 | font family | Geist | Geist | match |
| disabled | dark | Phone text | 3L7-0 | font size | 14 | 14 | match |
| disabled | dark | Phone text | 3L7-0 | font weight | 400 | 400 | match |
| disabled | dark | Phone text | 3L7-0 | line height | 20 | 20 | match |
| disabled | dark | Text message item | 3L3-0 | gap | 8 | 8 | match |
| disabled | dark | Text message control | 3L5-0 | width | 20 | 20 | match |
| disabled | dark | Text message control | 3L5-0 | height | 20 | 20 | match |
| disabled | dark | Text message control | 3L5-0 | radius | full | full | match |
| disabled | dark | Text message control | 3L5-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| disabled | dark | Text message control | 3L5-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| disabled | dark | Text message control | 3L5-0 | border width | 1 | 1 | match |
| disabled | dark | Text message control | 3L5-0 | border style | solid | solid | match |
| disabled | dark | Text message control | 3L5-0 | outline | none | none | match |
| disabled | dark | Text message dot | - | visible | no | no | match |
| disabled | dark | Text message text | 3L4-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| disabled | dark | Text message text | 3L4-0 | font family | Geist | Geist | match |
| disabled | dark | Text message text | 3L4-0 | font size | 14 | 14 | match |
| disabled | dark | Text message text | 3L4-0 | font weight | 400 | 400 | match |
| disabled | dark | Text message text | 3L4-0 | line height | 20 | 20 | match |
| disabled-item | light | group | 3C5-0 | row gap | 12 | 12 | match |
| disabled-item | light | group label | 3CG-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| disabled-item | light | group label | 3CG-0 | font size | 14 | 14 | match |
| disabled-item | light | group label | 3CG-0 | font weight | 500 | 500 | match |
| disabled-item | light | group label | 3CG-0 | line height | 21 | 21 | match |
| disabled-item | light | Email item | 3CC-0 | gap | 8 | 8 | match |
| disabled-item | light | Email control | 3CE-0 | width | 20 | 20 | match |
| disabled-item | light | Email control | 3CE-0 | height | 20 | 20 | match |
| disabled-item | light | Email control | 3CE-0 | radius | full | full | match |
| disabled-item | light | Email control | 3CE-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| disabled-item | light | Email control | 3CE-0 | border color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| disabled-item | light | Email control | 3CE-0 | border width | 1 | 1 | match |
| disabled-item | light | Email control | 3CE-0 | border style | solid | solid | match |
| disabled-item | light | Email control | 3CE-0 | outline | none | none | match |
| disabled-item | light | Email dot | 3CF-0 | visible | yes | yes | match |
| disabled-item | light | Email dot | 3CF-0 | size | 8x8 | 8x8 | match |
| disabled-item | light | Email dot | 3CF-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| disabled-item | light | Email dot | 3CF-0 | centered | yes | yes | match |
| disabled-item | light | Email text | 3CD-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| disabled-item | light | Email text | 3CD-0 | font family | Geist | Geist | match |
| disabled-item | light | Email text | 3CD-0 | font size | 14 | 14 | match |
| disabled-item | light | Email text | 3CD-0 | font weight | 400 | 400 | match |
| disabled-item | light | Email text | 3CD-0 | line height | 20 | 20 | match |
| disabled-item | light | Phone item | 3C9-0 | gap | 8 | 8 | match |
| disabled-item | light | Phone control | 3CB-0 | width | 20 | 20 | match |
| disabled-item | light | Phone control | 3CB-0 | height | 20 | 20 | match |
| disabled-item | light | Phone control | 3CB-0 | radius | full | full | match |
| disabled-item | light | Phone control | 3CB-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| disabled-item | light | Phone control | 3CB-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| disabled-item | light | Phone control | 3CB-0 | border width | 1 | 1 | match |
| disabled-item | light | Phone control | 3CB-0 | border style | solid | solid | match |
| disabled-item | light | Phone control | 3CB-0 | outline | none | none | match |
| disabled-item | light | Phone dot | - | visible | no | no | match |
| disabled-item | light | Phone text | 3CA-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| disabled-item | light | Phone text | 3CA-0 | font family | Geist | Geist | match |
| disabled-item | light | Phone text | 3CA-0 | font size | 14 | 14 | match |
| disabled-item | light | Phone text | 3CA-0 | font weight | 400 | 400 | match |
| disabled-item | light | Phone text | 3CA-0 | line height | 20 | 20 | match |
| disabled-item | light | Text message item | 3C6-0 | gap | 8 | 8 | match |
| disabled-item | light | Text message control | 3C8-0 | width | 20 | 20 | match |
| disabled-item | light | Text message control | 3C8-0 | height | 20 | 20 | match |
| disabled-item | light | Text message control | 3C8-0 | radius | full | full | match |
| disabled-item | light | Text message control | 3C8-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| disabled-item | light | Text message control | 3C8-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| disabled-item | light | Text message control | 3C8-0 | border width | 1 | 1 | match |
| disabled-item | light | Text message control | 3C8-0 | border style | solid | solid | match |
| disabled-item | light | Text message control | 3C8-0 | outline | none | none | match |
| disabled-item | light | Text message dot | - | visible | no | no | match |
| disabled-item | light | Text message text | 3C7-0 | color | oklch(0.73 0.017 260) | oklch(0.73 0.017 260) | match |
| disabled-item | light | Text message text | 3C7-0 | font family | Geist | Geist | match |
| disabled-item | light | Text message text | 3C7-0 | font size | 14 | 14 | match |
| disabled-item | light | Text message text | 3C7-0 | font weight | 400 | 400 | match |
| disabled-item | light | Text message text | 3C7-0 | line height | 20 | 20 | match |
| disabled-item | dark | group | 3KN-0 | row gap | 12 | 12 | match |
| disabled-item | dark | group label | 3KY-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| disabled-item | dark | group label | 3KY-0 | font size | 14 | 14 | match |
| disabled-item | dark | group label | 3KY-0 | font weight | 500 | 500 | match |
| disabled-item | dark | group label | 3KY-0 | line height | 21 | 21 | match |
| disabled-item | dark | Email item | 3KU-0 | gap | 8 | 8 | match |
| disabled-item | dark | Email control | 3KW-0 | width | 20 | 20 | match |
| disabled-item | dark | Email control | 3KW-0 | height | 20 | 20 | match |
| disabled-item | dark | Email control | 3KW-0 | radius | full | full | match |
| disabled-item | dark | Email control | 3KW-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| disabled-item | dark | Email control | 3KW-0 | border color | oklch(1 0 -) | oklch(1 0 -) | match |
| disabled-item | dark | Email control | 3KW-0 | border width | 1 | 1 | match |
| disabled-item | dark | Email control | 3KW-0 | border style | solid | solid | match |
| disabled-item | dark | Email control | 3KW-0 | outline | none | none | match |
| disabled-item | dark | Email dot | 3KX-0 | visible | yes | yes | match |
| disabled-item | dark | Email dot | 3KX-0 | size | 8x8 | 8x8 | match |
| disabled-item | dark | Email dot | 3KX-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| disabled-item | dark | Email dot | 3KX-0 | centered | yes | yes | match |
| disabled-item | dark | Email text | 3KV-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| disabled-item | dark | Email text | 3KV-0 | font family | Geist | Geist | match |
| disabled-item | dark | Email text | 3KV-0 | font size | 14 | 14 | match |
| disabled-item | dark | Email text | 3KV-0 | font weight | 400 | 400 | match |
| disabled-item | dark | Email text | 3KV-0 | line height | 20 | 20 | match |
| disabled-item | dark | Phone item | 3KR-0 | gap | 8 | 8 | match |
| disabled-item | dark | Phone control | 3KT-0 | width | 20 | 20 | match |
| disabled-item | dark | Phone control | 3KT-0 | height | 20 | 20 | match |
| disabled-item | dark | Phone control | 3KT-0 | radius | full | full | match |
| disabled-item | dark | Phone control | 3KT-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| disabled-item | dark | Phone control | 3KT-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| disabled-item | dark | Phone control | 3KT-0 | border width | 1 | 1 | match |
| disabled-item | dark | Phone control | 3KT-0 | border style | solid | solid | match |
| disabled-item | dark | Phone control | 3KT-0 | outline | none | none | match |
| disabled-item | dark | Phone dot | - | visible | no | no | match |
| disabled-item | dark | Phone text | 3KS-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| disabled-item | dark | Phone text | 3KS-0 | font family | Geist | Geist | match |
| disabled-item | dark | Phone text | 3KS-0 | font size | 14 | 14 | match |
| disabled-item | dark | Phone text | 3KS-0 | font weight | 400 | 400 | match |
| disabled-item | dark | Phone text | 3KS-0 | line height | 20 | 20 | match |
| disabled-item | dark | Text message item | 3KO-0 | gap | 8 | 8 | match |
| disabled-item | dark | Text message control | 3KQ-0 | width | 20 | 20 | match |
| disabled-item | dark | Text message control | 3KQ-0 | height | 20 | 20 | match |
| disabled-item | dark | Text message control | 3KQ-0 | radius | full | full | match |
| disabled-item | dark | Text message control | 3KQ-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| disabled-item | dark | Text message control | 3KQ-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| disabled-item | dark | Text message control | 3KQ-0 | border width | 1 | 1 | match |
| disabled-item | dark | Text message control | 3KQ-0 | border style | solid | solid | match |
| disabled-item | dark | Text message control | 3KQ-0 | outline | none | none | match |
| disabled-item | dark | Text message dot | - | visible | no | no | match |
| disabled-item | dark | Text message text | 3KP-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| disabled-item | dark | Text message text | 3KP-0 | font family | Geist | Geist | match |
| disabled-item | dark | Text message text | 3KP-0 | font size | 14 | 14 | match |
| disabled-item | dark | Text message text | 3KP-0 | font weight | 400 | 400 | match |
| disabled-item | dark | Text message text | 3KP-0 | line height | 20 | 20 | match |
| read-only | light | group | 3CJ-0 | row gap | 12 | 12 | match |
| read-only | light | group label | 3CU-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| read-only | light | group label | 3CU-0 | font size | 14 | 14 | match |
| read-only | light | group label | 3CU-0 | font weight | 500 | 500 | match |
| read-only | light | group label | 3CU-0 | line height | 21 | 21 | match |
| read-only | light | Email item | 3CQ-0 | gap | 8 | 8 | match |
| read-only | light | Email control | 3CS-0 | width | 20 | 20 | match |
| read-only | light | Email control | 3CS-0 | height | 20 | 20 | match |
| read-only | light | Email control | 3CS-0 | radius | full | full | match |
| read-only | light | Email control | 3CS-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| read-only | light | Email control | 3CS-0 | border color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| read-only | light | Email control | 3CS-0 | border width | 1 | 1 | match |
| read-only | light | Email control | 3CS-0 | border style | solid | solid | match |
| read-only | light | Email control | 3CS-0 | outline | none | none | match |
| read-only | light | Email dot | 3CT-0 | visible | yes | yes | match |
| read-only | light | Email dot | 3CT-0 | size | 8x8 | 8x8 | match |
| read-only | light | Email dot | 3CT-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| read-only | light | Email dot | 3CT-0 | centered | yes | yes | match |
| read-only | light | Email text | 3CR-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| read-only | light | Email text | 3CR-0 | font family | Geist | Geist | match |
| read-only | light | Email text | 3CR-0 | font size | 14 | 14 | match |
| read-only | light | Email text | 3CR-0 | font weight | 400 | 400 | match |
| read-only | light | Email text | 3CR-0 | line height | 20 | 20 | match |
| read-only | light | Phone item | 3CN-0 | gap | 8 | 8 | match |
| read-only | light | Phone control | 3CP-0 | width | 20 | 20 | match |
| read-only | light | Phone control | 3CP-0 | height | 20 | 20 | match |
| read-only | light | Phone control | 3CP-0 | radius | full | full | match |
| read-only | light | Phone control | 3CP-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| read-only | light | Phone control | 3CP-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| read-only | light | Phone control | 3CP-0 | border width | 1 | 1 | match |
| read-only | light | Phone control | 3CP-0 | border style | solid | solid | match |
| read-only | light | Phone control | 3CP-0 | outline | none | none | match |
| read-only | light | Phone dot | - | visible | no | no | match |
| read-only | light | Phone text | 3CO-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| read-only | light | Phone text | 3CO-0 | font family | Geist | Geist | match |
| read-only | light | Phone text | 3CO-0 | font size | 14 | 14 | match |
| read-only | light | Phone text | 3CO-0 | font weight | 400 | 400 | match |
| read-only | light | Phone text | 3CO-0 | line height | 20 | 20 | match |
| read-only | light | Text message item | 3CK-0 | gap | 8 | 8 | match |
| read-only | light | Text message control | 3CM-0 | width | 20 | 20 | match |
| read-only | light | Text message control | 3CM-0 | height | 20 | 20 | match |
| read-only | light | Text message control | 3CM-0 | radius | full | full | match |
| read-only | light | Text message control | 3CM-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| read-only | light | Text message control | 3CM-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| read-only | light | Text message control | 3CM-0 | border width | 1 | 1 | match |
| read-only | light | Text message control | 3CM-0 | border style | solid | solid | match |
| read-only | light | Text message control | 3CM-0 | outline | none | none | match |
| read-only | light | Text message dot | - | visible | no | no | match |
| read-only | light | Text message text | 3CL-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| read-only | light | Text message text | 3CL-0 | font family | Geist | Geist | match |
| read-only | light | Text message text | 3CL-0 | font size | 14 | 14 | match |
| read-only | light | Text message text | 3CL-0 | font weight | 400 | 400 | match |
| read-only | light | Text message text | 3CL-0 | line height | 20 | 20 | match |
| read-only | dark | group | 3K9-0 | row gap | 12 | 12 | match |
| read-only | dark | group label | 3KK-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| read-only | dark | group label | 3KK-0 | font size | 14 | 14 | match |
| read-only | dark | group label | 3KK-0 | font weight | 500 | 500 | match |
| read-only | dark | group label | 3KK-0 | line height | 21 | 21 | match |
| read-only | dark | Email item | 3KG-0 | gap | 8 | 8 | match |
| read-only | dark | Email control | 3KI-0 | width | 20 | 20 | match |
| read-only | dark | Email control | 3KI-0 | height | 20 | 20 | match |
| read-only | dark | Email control | 3KI-0 | radius | full | full | match |
| read-only | dark | Email control | 3KI-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| read-only | dark | Email control | 3KI-0 | border color | oklch(1 0 -) | oklch(1 0 -) | match |
| read-only | dark | Email control | 3KI-0 | border width | 1 | 1 | match |
| read-only | dark | Email control | 3KI-0 | border style | solid | solid | match |
| read-only | dark | Email control | 3KI-0 | outline | none | none | match |
| read-only | dark | Email dot | 3KJ-0 | visible | yes | yes | match |
| read-only | dark | Email dot | 3KJ-0 | size | 8x8 | 8x8 | match |
| read-only | dark | Email dot | 3KJ-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| read-only | dark | Email dot | 3KJ-0 | centered | yes | yes | match |
| read-only | dark | Email text | 3KH-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| read-only | dark | Email text | 3KH-0 | font family | Geist | Geist | match |
| read-only | dark | Email text | 3KH-0 | font size | 14 | 14 | match |
| read-only | dark | Email text | 3KH-0 | font weight | 400 | 400 | match |
| read-only | dark | Email text | 3KH-0 | line height | 20 | 20 | match |
| read-only | dark | Phone item | 3KD-0 | gap | 8 | 8 | match |
| read-only | dark | Phone control | 3KF-0 | width | 20 | 20 | match |
| read-only | dark | Phone control | 3KF-0 | height | 20 | 20 | match |
| read-only | dark | Phone control | 3KF-0 | radius | full | full | match |
| read-only | dark | Phone control | 3KF-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| read-only | dark | Phone control | 3KF-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| read-only | dark | Phone control | 3KF-0 | border width | 1 | 1 | match |
| read-only | dark | Phone control | 3KF-0 | border style | solid | solid | match |
| read-only | dark | Phone control | 3KF-0 | outline | none | none | match |
| read-only | dark | Phone dot | - | visible | no | no | match |
| read-only | dark | Phone text | 3KE-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| read-only | dark | Phone text | 3KE-0 | font family | Geist | Geist | match |
| read-only | dark | Phone text | 3KE-0 | font size | 14 | 14 | match |
| read-only | dark | Phone text | 3KE-0 | font weight | 400 | 400 | match |
| read-only | dark | Phone text | 3KE-0 | line height | 20 | 20 | match |
| read-only | dark | Text message item | 3KA-0 | gap | 8 | 8 | match |
| read-only | dark | Text message control | 3KC-0 | width | 20 | 20 | match |
| read-only | dark | Text message control | 3KC-0 | height | 20 | 20 | match |
| read-only | dark | Text message control | 3KC-0 | radius | full | full | match |
| read-only | dark | Text message control | 3KC-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| read-only | dark | Text message control | 3KC-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| read-only | dark | Text message control | 3KC-0 | border width | 1 | 1 | match |
| read-only | dark | Text message control | 3KC-0 | border style | solid | solid | match |
| read-only | dark | Text message control | 3KC-0 | outline | none | none | match |
| read-only | dark | Text message dot | - | visible | no | no | match |
| read-only | dark | Text message text | 3KB-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| read-only | dark | Text message text | 3KB-0 | font family | Geist | Geist | match |
| read-only | dark | Text message text | 3KB-0 | font size | 14 | 14 | match |
| read-only | dark | Text message text | 3KB-0 | font weight | 400 | 400 | match |
| read-only | dark | Text message text | 3KB-0 | line height | 20 | 20 | match |
| sizes | light | group1 | 3D5-0 | row gap | 12 | 12 | match |
| sizes | light | group1 label | 3DG-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | group1 label | 3DG-0 | font size | 14 | 14 | match |
| sizes | light | group1 label | 3DG-0 | font weight | 500 | 500 | match |
| sizes | light | group1 label | 3DG-0 | line height | 21 | 21 | match |
| sizes | light | Email item | 3DC-0 | gap | 8 | 8 | match |
| sizes | light | Email control | 3DE-0 | width | 16 | 16 | match |
| sizes | light | Email control | 3DE-0 | height | 16 | 16 | match |
| sizes | light | Email control | 3DE-0 | radius | full | full | match |
| sizes | light | Email control | 3DE-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email control | 3DE-0 | border color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email control | 3DE-0 | border width | 1 | 1 | match |
| sizes | light | Email control | 3DE-0 | border style | solid | solid | match |
| sizes | light | Email control | 3DE-0 | outline | none | none | match |
| sizes | light | Email dot | 3DF-0 | visible | yes | yes | match |
| sizes | light | Email dot | 3DF-0 | size | 8x8 | 8x8 | match |
| sizes | light | Email dot | 3DF-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Email dot | 3DF-0 | centered | yes | yes | match |
| sizes | light | Email text | 3DD-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email text | 3DD-0 | font family | Geist | Geist | match |
| sizes | light | Email text | 3DD-0 | font size | 14 | 14 | match |
| sizes | light | Email text | 3DD-0 | font weight | 400 | 400 | match |
| sizes | light | Email text | 3DD-0 | line height | 16 | 16 | match |
| sizes | light | Phone item | 3D9-0 | gap | 8 | 8 | match |
| sizes | light | Phone control | 3DB-0 | width | 16 | 16 | match |
| sizes | light | Phone control | 3DB-0 | height | 16 | 16 | match |
| sizes | light | Phone control | 3DB-0 | radius | full | full | match |
| sizes | light | Phone control | 3DB-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Phone control | 3DB-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | light | Phone control | 3DB-0 | border width | 1 | 1 | match |
| sizes | light | Phone control | 3DB-0 | border style | solid | solid | match |
| sizes | light | Phone control | 3DB-0 | outline | none | none | match |
| sizes | light | Phone dot | - | visible | no | no | match |
| sizes | light | Phone text | 3DA-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Phone text | 3DA-0 | font family | Geist | Geist | match |
| sizes | light | Phone text | 3DA-0 | font size | 14 | 14 | match |
| sizes | light | Phone text | 3DA-0 | font weight | 400 | 400 | match |
| sizes | light | Phone text | 3DA-0 | line height | 16 | 16 | match |
| sizes | light | Text message item | 3D6-0 | gap | 8 | 8 | match |
| sizes | light | Text message control | 3D8-0 | width | 16 | 16 | match |
| sizes | light | Text message control | 3D8-0 | height | 16 | 16 | match |
| sizes | light | Text message control | 3D8-0 | radius | full | full | match |
| sizes | light | Text message control | 3D8-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Text message control | 3D8-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | light | Text message control | 3D8-0 | border width | 1 | 1 | match |
| sizes | light | Text message control | 3D8-0 | border style | solid | solid | match |
| sizes | light | Text message control | 3D8-0 | outline | none | none | match |
| sizes | light | Text message dot | - | visible | no | no | match |
| sizes | light | Text message text | 3D7-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Text message text | 3D7-0 | font family | Geist | Geist | match |
| sizes | light | Text message text | 3D7-0 | font size | 14 | 14 | match |
| sizes | light | Text message text | 3D7-0 | font weight | 400 | 400 | match |
| sizes | light | Text message text | 3D7-0 | line height | 16 | 16 | match |
| sizes | light | group2 | 3DH-0 | row gap | 12 | 12 | match |
| sizes | light | group2 label | 3DS-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | group2 label | 3DS-0 | font size | 14 | 14 | match |
| sizes | light | group2 label | 3DS-0 | font weight | 500 | 500 | match |
| sizes | light | group2 label | 3DS-0 | line height | 21 | 21 | match |
| sizes | light | Email item | 3DO-0 | gap | 8 | 8 | match |
| sizes | light | Email control | 3DQ-0 | width | 20 | 20 | match |
| sizes | light | Email control | 3DQ-0 | height | 20 | 20 | match |
| sizes | light | Email control | 3DQ-0 | radius | full | full | match |
| sizes | light | Email control | 3DQ-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email control | 3DQ-0 | border color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email control | 3DQ-0 | border width | 1 | 1 | match |
| sizes | light | Email control | 3DQ-0 | border style | solid | solid | match |
| sizes | light | Email control | 3DQ-0 | outline | none | none | match |
| sizes | light | Email dot | 3DR-0 | visible | yes | yes | match |
| sizes | light | Email dot | 3DR-0 | size | 8x8 | 8x8 | match |
| sizes | light | Email dot | 3DR-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Email dot | 3DR-0 | centered | yes | yes | match |
| sizes | light | Email text | 3DP-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email text | 3DP-0 | font family | Geist | Geist | match |
| sizes | light | Email text | 3DP-0 | font size | 14 | 14 | match |
| sizes | light | Email text | 3DP-0 | font weight | 400 | 400 | match |
| sizes | light | Email text | 3DP-0 | line height | 20 | 20 | match |
| sizes | light | Phone item | 3DL-0 | gap | 8 | 8 | match |
| sizes | light | Phone control | 3DN-0 | width | 20 | 20 | match |
| sizes | light | Phone control | 3DN-0 | height | 20 | 20 | match |
| sizes | light | Phone control | 3DN-0 | radius | full | full | match |
| sizes | light | Phone control | 3DN-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Phone control | 3DN-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | light | Phone control | 3DN-0 | border width | 1 | 1 | match |
| sizes | light | Phone control | 3DN-0 | border style | solid | solid | match |
| sizes | light | Phone control | 3DN-0 | outline | none | none | match |
| sizes | light | Phone dot | - | visible | no | no | match |
| sizes | light | Phone text | 3DM-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Phone text | 3DM-0 | font family | Geist | Geist | match |
| sizes | light | Phone text | 3DM-0 | font size | 14 | 14 | match |
| sizes | light | Phone text | 3DM-0 | font weight | 400 | 400 | match |
| sizes | light | Phone text | 3DM-0 | line height | 20 | 20 | match |
| sizes | light | Text message item | 3DI-0 | gap | 8 | 8 | match |
| sizes | light | Text message control | 3DK-0 | width | 20 | 20 | match |
| sizes | light | Text message control | 3DK-0 | height | 20 | 20 | match |
| sizes | light | Text message control | 3DK-0 | radius | full | full | match |
| sizes | light | Text message control | 3DK-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Text message control | 3DK-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | light | Text message control | 3DK-0 | border width | 1 | 1 | match |
| sizes | light | Text message control | 3DK-0 | border style | solid | solid | match |
| sizes | light | Text message control | 3DK-0 | outline | none | none | match |
| sizes | light | Text message dot | - | visible | no | no | match |
| sizes | light | Text message text | 3DJ-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Text message text | 3DJ-0 | font family | Geist | Geist | match |
| sizes | light | Text message text | 3DJ-0 | font size | 14 | 14 | match |
| sizes | light | Text message text | 3DJ-0 | font weight | 400 | 400 | match |
| sizes | light | Text message text | 3DJ-0 | line height | 20 | 20 | match |
| sizes | light | group3 | 3DT-0 | row gap | 12 | 12 | match |
| sizes | light | group3 label | 3E4-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | group3 label | 3E4-0 | font size | 14 | 14 | match |
| sizes | light | group3 label | 3E4-0 | font weight | 500 | 500 | match |
| sizes | light | group3 label | 3E4-0 | line height | 21 | 21 | match |
| sizes | light | Email item | 3E0-0 | gap | 8 | 8 | match |
| sizes | light | Email control | 3E2-0 | width | 24 | 24 | match |
| sizes | light | Email control | 3E2-0 | height | 24 | 24 | match |
| sizes | light | Email control | 3E2-0 | radius | full | full | match |
| sizes | light | Email control | 3E2-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email control | 3E2-0 | border color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email control | 3E2-0 | border width | 1 | 1 | match |
| sizes | light | Email control | 3E2-0 | border style | solid | solid | match |
| sizes | light | Email control | 3E2-0 | outline | none | none | match |
| sizes | light | Email dot | 3E3-0 | visible | yes | yes | match |
| sizes | light | Email dot | 3E3-0 | size | 12x12 | 12x12 | match |
| sizes | light | Email dot | 3E3-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Email dot | 3E3-0 | centered | yes | yes | match |
| sizes | light | Email text | 3E1-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Email text | 3E1-0 | font family | Geist | Geist | match |
| sizes | light | Email text | 3E1-0 | font size | 16 | 16 | match |
| sizes | light | Email text | 3E1-0 | font weight | 400 | 400 | match |
| sizes | light | Email text | 3E1-0 | line height | 24 | 24 | match |
| sizes | light | Phone item | 3DX-0 | gap | 8 | 8 | match |
| sizes | light | Phone control | 3DZ-0 | width | 24 | 24 | match |
| sizes | light | Phone control | 3DZ-0 | height | 24 | 24 | match |
| sizes | light | Phone control | 3DZ-0 | radius | full | full | match |
| sizes | light | Phone control | 3DZ-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Phone control | 3DZ-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | light | Phone control | 3DZ-0 | border width | 1 | 1 | match |
| sizes | light | Phone control | 3DZ-0 | border style | solid | solid | match |
| sizes | light | Phone control | 3DZ-0 | outline | none | none | match |
| sizes | light | Phone dot | - | visible | no | no | match |
| sizes | light | Phone text | 3DY-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Phone text | 3DY-0 | font family | Geist | Geist | match |
| sizes | light | Phone text | 3DY-0 | font size | 16 | 16 | match |
| sizes | light | Phone text | 3DY-0 | font weight | 400 | 400 | match |
| sizes | light | Phone text | 3DY-0 | line height | 24 | 24 | match |
| sizes | light | Text message item | 3DU-0 | gap | 8 | 8 | match |
| sizes | light | Text message control | 3DW-0 | width | 24 | 24 | match |
| sizes | light | Text message control | 3DW-0 | height | 24 | 24 | match |
| sizes | light | Text message control | 3DW-0 | radius | full | full | match |
| sizes | light | Text message control | 3DW-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | light | Text message control | 3DW-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | light | Text message control | 3DW-0 | border width | 1 | 1 | match |
| sizes | light | Text message control | 3DW-0 | border style | solid | solid | match |
| sizes | light | Text message control | 3DW-0 | outline | none | none | match |
| sizes | light | Text message dot | - | visible | no | no | match |
| sizes | light | Text message text | 3DV-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | light | Text message text | 3DV-0 | font family | Geist | Geist | match |
| sizes | light | Text message text | 3DV-0 | font size | 16 | 16 | match |
| sizes | light | Text message text | 3DV-0 | font weight | 400 | 400 | match |
| sizes | light | Text message text | 3DV-0 | line height | 24 | 24 | match |
| sizes | dark | group1 | 3JQ-0 | row gap | 12 | 12 | match |
| sizes | dark | group1 label | 3K1-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | group1 label | 3K1-0 | font size | 14 | 14 | match |
| sizes | dark | group1 label | 3K1-0 | font weight | 500 | 500 | match |
| sizes | dark | group1 label | 3K1-0 | line height | 21 | 21 | match |
| sizes | dark | Email item | 3JX-0 | gap | 8 | 8 | match |
| sizes | dark | Email control | 3JZ-0 | width | 16 | 16 | match |
| sizes | dark | Email control | 3JZ-0 | height | 16 | 16 | match |
| sizes | dark | Email control | 3JZ-0 | radius | full | full | match |
| sizes | dark | Email control | 3JZ-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email control | 3JZ-0 | border color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email control | 3JZ-0 | border width | 1 | 1 | match |
| sizes | dark | Email control | 3JZ-0 | border style | solid | solid | match |
| sizes | dark | Email control | 3JZ-0 | outline | none | none | match |
| sizes | dark | Email dot | 3K0-0 | visible | yes | yes | match |
| sizes | dark | Email dot | 3K0-0 | size | 8x8 | 8x8 | match |
| sizes | dark | Email dot | 3K0-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | dark | Email dot | 3K0-0 | centered | yes | yes | match |
| sizes | dark | Email text | 3JY-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email text | 3JY-0 | font family | Geist | Geist | match |
| sizes | dark | Email text | 3JY-0 | font size | 14 | 14 | match |
| sizes | dark | Email text | 3JY-0 | font weight | 400 | 400 | match |
| sizes | dark | Email text | 3JY-0 | line height | 16 | 16 | match |
| sizes | dark | Phone item | 3JU-0 | gap | 8 | 8 | match |
| sizes | dark | Phone control | 3JW-0 | width | 16 | 16 | match |
| sizes | dark | Phone control | 3JW-0 | height | 16 | 16 | match |
| sizes | dark | Phone control | 3JW-0 | radius | full | full | match |
| sizes | dark | Phone control | 3JW-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| sizes | dark | Phone control | 3JW-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | dark | Phone control | 3JW-0 | border width | 1 | 1 | match |
| sizes | dark | Phone control | 3JW-0 | border style | solid | solid | match |
| sizes | dark | Phone control | 3JW-0 | outline | none | none | match |
| sizes | dark | Phone dot | - | visible | no | no | match |
| sizes | dark | Phone text | 3JV-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Phone text | 3JV-0 | font family | Geist | Geist | match |
| sizes | dark | Phone text | 3JV-0 | font size | 14 | 14 | match |
| sizes | dark | Phone text | 3JV-0 | font weight | 400 | 400 | match |
| sizes | dark | Phone text | 3JV-0 | line height | 16 | 16 | match |
| sizes | dark | Text message item | 3JR-0 | gap | 8 | 8 | match |
| sizes | dark | Text message control | 3JT-0 | width | 16 | 16 | match |
| sizes | dark | Text message control | 3JT-0 | height | 16 | 16 | match |
| sizes | dark | Text message control | 3JT-0 | radius | full | full | match |
| sizes | dark | Text message control | 3JT-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| sizes | dark | Text message control | 3JT-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | dark | Text message control | 3JT-0 | border width | 1 | 1 | match |
| sizes | dark | Text message control | 3JT-0 | border style | solid | solid | match |
| sizes | dark | Text message control | 3JT-0 | outline | none | none | match |
| sizes | dark | Text message dot | - | visible | no | no | match |
| sizes | dark | Text message text | 3JS-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Text message text | 3JS-0 | font family | Geist | Geist | match |
| sizes | dark | Text message text | 3JS-0 | font size | 14 | 14 | match |
| sizes | dark | Text message text | 3JS-0 | font weight | 400 | 400 | match |
| sizes | dark | Text message text | 3JS-0 | line height | 16 | 16 | match |
| sizes | dark | group2 | 3JE-0 | row gap | 12 | 12 | match |
| sizes | dark | group2 label | 3JP-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | group2 label | 3JP-0 | font size | 14 | 14 | match |
| sizes | dark | group2 label | 3JP-0 | font weight | 500 | 500 | match |
| sizes | dark | group2 label | 3JP-0 | line height | 21 | 21 | match |
| sizes | dark | Email item | 3JL-0 | gap | 8 | 8 | match |
| sizes | dark | Email control | 3JN-0 | width | 20 | 20 | match |
| sizes | dark | Email control | 3JN-0 | height | 20 | 20 | match |
| sizes | dark | Email control | 3JN-0 | radius | full | full | match |
| sizes | dark | Email control | 3JN-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email control | 3JN-0 | border color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email control | 3JN-0 | border width | 1 | 1 | match |
| sizes | dark | Email control | 3JN-0 | border style | solid | solid | match |
| sizes | dark | Email control | 3JN-0 | outline | none | none | match |
| sizes | dark | Email dot | 3JO-0 | visible | yes | yes | match |
| sizes | dark | Email dot | 3JO-0 | size | 8x8 | 8x8 | match |
| sizes | dark | Email dot | 3JO-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | dark | Email dot | 3JO-0 | centered | yes | yes | match |
| sizes | dark | Email text | 3JM-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email text | 3JM-0 | font family | Geist | Geist | match |
| sizes | dark | Email text | 3JM-0 | font size | 14 | 14 | match |
| sizes | dark | Email text | 3JM-0 | font weight | 400 | 400 | match |
| sizes | dark | Email text | 3JM-0 | line height | 20 | 20 | match |
| sizes | dark | Phone item | 3JI-0 | gap | 8 | 8 | match |
| sizes | dark | Phone control | 3JK-0 | width | 20 | 20 | match |
| sizes | dark | Phone control | 3JK-0 | height | 20 | 20 | match |
| sizes | dark | Phone control | 3JK-0 | radius | full | full | match |
| sizes | dark | Phone control | 3JK-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| sizes | dark | Phone control | 3JK-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | dark | Phone control | 3JK-0 | border width | 1 | 1 | match |
| sizes | dark | Phone control | 3JK-0 | border style | solid | solid | match |
| sizes | dark | Phone control | 3JK-0 | outline | none | none | match |
| sizes | dark | Phone dot | - | visible | no | no | match |
| sizes | dark | Phone text | 3JJ-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Phone text | 3JJ-0 | font family | Geist | Geist | match |
| sizes | dark | Phone text | 3JJ-0 | font size | 14 | 14 | match |
| sizes | dark | Phone text | 3JJ-0 | font weight | 400 | 400 | match |
| sizes | dark | Phone text | 3JJ-0 | line height | 20 | 20 | match |
| sizes | dark | Text message item | 3JF-0 | gap | 8 | 8 | match |
| sizes | dark | Text message control | 3JH-0 | width | 20 | 20 | match |
| sizes | dark | Text message control | 3JH-0 | height | 20 | 20 | match |
| sizes | dark | Text message control | 3JH-0 | radius | full | full | match |
| sizes | dark | Text message control | 3JH-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| sizes | dark | Text message control | 3JH-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | dark | Text message control | 3JH-0 | border width | 1 | 1 | match |
| sizes | dark | Text message control | 3JH-0 | border style | solid | solid | match |
| sizes | dark | Text message control | 3JH-0 | outline | none | none | match |
| sizes | dark | Text message dot | - | visible | no | no | match |
| sizes | dark | Text message text | 3JG-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Text message text | 3JG-0 | font family | Geist | Geist | match |
| sizes | dark | Text message text | 3JG-0 | font size | 14 | 14 | match |
| sizes | dark | Text message text | 3JG-0 | font weight | 400 | 400 | match |
| sizes | dark | Text message text | 3JG-0 | line height | 20 | 20 | match |
| sizes | dark | group3 | 3J2-0 | row gap | 12 | 12 | match |
| sizes | dark | group3 label | 3JD-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | group3 label | 3JD-0 | font size | 14 | 14 | match |
| sizes | dark | group3 label | 3JD-0 | font weight | 500 | 500 | match |
| sizes | dark | group3 label | 3JD-0 | line height | 21 | 21 | match |
| sizes | dark | Email item | 3J9-0 | gap | 8 | 8 | match |
| sizes | dark | Email control | 3JB-0 | width | 24 | 24 | match |
| sizes | dark | Email control | 3JB-0 | height | 24 | 24 | match |
| sizes | dark | Email control | 3JB-0 | radius | full | full | match |
| sizes | dark | Email control | 3JB-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email control | 3JB-0 | border color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email control | 3JB-0 | border width | 1 | 1 | match |
| sizes | dark | Email control | 3JB-0 | border style | solid | solid | match |
| sizes | dark | Email control | 3JB-0 | outline | none | none | match |
| sizes | dark | Email dot | 3JC-0 | visible | yes | yes | match |
| sizes | dark | Email dot | 3JC-0 | size | 12x12 | 12x12 | match |
| sizes | dark | Email dot | 3JC-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| sizes | dark | Email dot | 3JC-0 | centered | yes | yes | match |
| sizes | dark | Email text | 3JA-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Email text | 3JA-0 | font family | Geist | Geist | match |
| sizes | dark | Email text | 3JA-0 | font size | 16 | 16 | match |
| sizes | dark | Email text | 3JA-0 | font weight | 400 | 400 | match |
| sizes | dark | Email text | 3JA-0 | line height | 24 | 24 | match |
| sizes | dark | Phone item | 3J6-0 | gap | 8 | 8 | match |
| sizes | dark | Phone control | 3J8-0 | width | 24 | 24 | match |
| sizes | dark | Phone control | 3J8-0 | height | 24 | 24 | match |
| sizes | dark | Phone control | 3J8-0 | radius | full | full | match |
| sizes | dark | Phone control | 3J8-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| sizes | dark | Phone control | 3J8-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | dark | Phone control | 3J8-0 | border width | 1 | 1 | match |
| sizes | dark | Phone control | 3J8-0 | border style | solid | solid | match |
| sizes | dark | Phone control | 3J8-0 | outline | none | none | match |
| sizes | dark | Phone dot | - | visible | no | no | match |
| sizes | dark | Phone text | 3J7-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Phone text | 3J7-0 | font family | Geist | Geist | match |
| sizes | dark | Phone text | 3J7-0 | font size | 16 | 16 | match |
| sizes | dark | Phone text | 3J7-0 | font weight | 400 | 400 | match |
| sizes | dark | Phone text | 3J7-0 | line height | 24 | 24 | match |
| sizes | dark | Text message item | 3J3-0 | gap | 8 | 8 | match |
| sizes | dark | Text message control | 3J5-0 | width | 24 | 24 | match |
| sizes | dark | Text message control | 3J5-0 | height | 24 | 24 | match |
| sizes | dark | Text message control | 3J5-0 | radius | full | full | match |
| sizes | dark | Text message control | 3J5-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| sizes | dark | Text message control | 3J5-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| sizes | dark | Text message control | 3J5-0 | border width | 1 | 1 | match |
| sizes | dark | Text message control | 3J5-0 | border style | solid | solid | match |
| sizes | dark | Text message control | 3J5-0 | outline | none | none | match |
| sizes | dark | Text message dot | - | visible | no | no | match |
| sizes | dark | Text message text | 3J4-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| sizes | dark | Text message text | 3J4-0 | font family | Geist | Geist | match |
| sizes | dark | Text message text | 3J4-0 | font size | 16 | 16 | match |
| sizes | dark | Text message text | 3J4-0 | font weight | 400 | 400 | match |
| sizes | dark | Text message text | 3J4-0 | line height | 24 | 24 | match |
| horizontal | light | group | 3E6-0 | row gap | 12 | 12 | match |
| horizontal | light | group | 3E8-0 | column gap | 16 | 16 | match |
| horizontal | light | group | 3E6-0 | items on one row | yes | yes | match |
| horizontal | light | group label | 3E7-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| horizontal | light | group label | 3E7-0 | font size | 14 | 14 | match |
| horizontal | light | group label | 3E7-0 | font weight | 500 | 500 | match |
| horizontal | light | group label | 3E7-0 | line height | 21 | 21 | match |
| horizontal | light | Email item | 3E9-0 | gap | 8 | 8 | match |
| horizontal | light | Email control | 3EA-0 | width | 20 | 20 | match |
| horizontal | light | Email control | 3EA-0 | height | 20 | 20 | match |
| horizontal | light | Email control | 3EA-0 | radius | full | full | match |
| horizontal | light | Email control | 3EA-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| horizontal | light | Email control | 3EA-0 | border color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| horizontal | light | Email control | 3EA-0 | border width | 1 | 1 | match |
| horizontal | light | Email control | 3EA-0 | border style | solid | solid | match |
| horizontal | light | Email control | 3EA-0 | outline | none | none | match |
| horizontal | light | Email dot | 3EB-0 | visible | yes | yes | match |
| horizontal | light | Email dot | 3EB-0 | size | 8x8 | 8x8 | match |
| horizontal | light | Email dot | 3EB-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | light | Email dot | 3EB-0 | centered | yes | yes | match |
| horizontal | light | Email text | 3EC-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| horizontal | light | Email text | 3EC-0 | font family | Geist | Geist | match |
| horizontal | light | Email text | 3EC-0 | font size | 14 | 14 | match |
| horizontal | light | Email text | 3EC-0 | font weight | 400 | 400 | match |
| horizontal | light | Email text | 3EC-0 | line height | 20 | 20 | match |
| horizontal | light | Phone item | 3ED-0 | gap | 8 | 8 | match |
| horizontal | light | Phone control | 3EE-0 | width | 20 | 20 | match |
| horizontal | light | Phone control | 3EE-0 | height | 20 | 20 | match |
| horizontal | light | Phone control | 3EE-0 | radius | full | full | match |
| horizontal | light | Phone control | 3EE-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | light | Phone control | 3EE-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| horizontal | light | Phone control | 3EE-0 | border width | 1 | 1 | match |
| horizontal | light | Phone control | 3EE-0 | border style | solid | solid | match |
| horizontal | light | Phone control | 3EE-0 | outline | none | none | match |
| horizontal | light | Phone dot | - | visible | no | no | match |
| horizontal | light | Phone text | 3EF-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| horizontal | light | Phone text | 3EF-0 | font family | Geist | Geist | match |
| horizontal | light | Phone text | 3EF-0 | font size | 14 | 14 | match |
| horizontal | light | Phone text | 3EF-0 | font weight | 400 | 400 | match |
| horizontal | light | Phone text | 3EF-0 | line height | 20 | 20 | match |
| horizontal | light | Text message item | 3EG-0 | gap | 8 | 8 | match |
| horizontal | light | Text message control | 3EH-0 | width | 20 | 20 | match |
| horizontal | light | Text message control | 3EH-0 | height | 20 | 20 | match |
| horizontal | light | Text message control | 3EH-0 | radius | full | full | match |
| horizontal | light | Text message control | 3EH-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | light | Text message control | 3EH-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| horizontal | light | Text message control | 3EH-0 | border width | 1 | 1 | match |
| horizontal | light | Text message control | 3EH-0 | border style | solid | solid | match |
| horizontal | light | Text message control | 3EH-0 | outline | none | none | match |
| horizontal | light | Text message dot | - | visible | no | no | match |
| horizontal | light | Text message text | 3EI-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| horizontal | light | Text message text | 3EI-0 | font family | Geist | Geist | match |
| horizontal | light | Text message text | 3EI-0 | font size | 14 | 14 | match |
| horizontal | light | Text message text | 3EI-0 | font weight | 400 | 400 | match |
| horizontal | light | Text message text | 3EI-0 | line height | 20 | 20 | match |
| horizontal | dark | group | 3IM-0 | row gap | 12 | 12 | match |
| horizontal | dark | group | 3IN-0 | column gap | 16 | 16 | match |
| horizontal | dark | group | 3IM-0 | items on one row | yes | yes | match |
| horizontal | dark | group label | 3IY-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | dark | group label | 3IY-0 | font size | 14 | 14 | match |
| horizontal | dark | group label | 3IY-0 | font weight | 500 | 500 | match |
| horizontal | dark | group label | 3IY-0 | line height | 21 | 21 | match |
| horizontal | dark | Email item | 3IU-0 | gap | 8 | 8 | match |
| horizontal | dark | Email control | 3IW-0 | width | 20 | 20 | match |
| horizontal | dark | Email control | 3IW-0 | height | 20 | 20 | match |
| horizontal | dark | Email control | 3IW-0 | radius | full | full | match |
| horizontal | dark | Email control | 3IW-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | dark | Email control | 3IW-0 | border color | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | dark | Email control | 3IW-0 | border width | 1 | 1 | match |
| horizontal | dark | Email control | 3IW-0 | border style | solid | solid | match |
| horizontal | dark | Email control | 3IW-0 | outline | none | none | match |
| horizontal | dark | Email dot | 3IX-0 | visible | yes | yes | match |
| horizontal | dark | Email dot | 3IX-0 | size | 8x8 | 8x8 | match |
| horizontal | dark | Email dot | 3IX-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| horizontal | dark | Email dot | 3IX-0 | centered | yes | yes | match |
| horizontal | dark | Email text | 3IV-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | dark | Email text | 3IV-0 | font family | Geist | Geist | match |
| horizontal | dark | Email text | 3IV-0 | font size | 14 | 14 | match |
| horizontal | dark | Email text | 3IV-0 | font weight | 400 | 400 | match |
| horizontal | dark | Email text | 3IV-0 | line height | 20 | 20 | match |
| horizontal | dark | Phone item | 3IR-0 | gap | 8 | 8 | match |
| horizontal | dark | Phone control | 3IT-0 | width | 20 | 20 | match |
| horizontal | dark | Phone control | 3IT-0 | height | 20 | 20 | match |
| horizontal | dark | Phone control | 3IT-0 | radius | full | full | match |
| horizontal | dark | Phone control | 3IT-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| horizontal | dark | Phone control | 3IT-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| horizontal | dark | Phone control | 3IT-0 | border width | 1 | 1 | match |
| horizontal | dark | Phone control | 3IT-0 | border style | solid | solid | match |
| horizontal | dark | Phone control | 3IT-0 | outline | none | none | match |
| horizontal | dark | Phone dot | - | visible | no | no | match |
| horizontal | dark | Phone text | 3IS-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | dark | Phone text | 3IS-0 | font family | Geist | Geist | match |
| horizontal | dark | Phone text | 3IS-0 | font size | 14 | 14 | match |
| horizontal | dark | Phone text | 3IS-0 | font weight | 400 | 400 | match |
| horizontal | dark | Phone text | 3IS-0 | line height | 20 | 20 | match |
| horizontal | dark | Text message item | 3IO-0 | gap | 8 | 8 | match |
| horizontal | dark | Text message control | 3IQ-0 | width | 20 | 20 | match |
| horizontal | dark | Text message control | 3IQ-0 | height | 20 | 20 | match |
| horizontal | dark | Text message control | 3IQ-0 | radius | full | full | match |
| horizontal | dark | Text message control | 3IQ-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| horizontal | dark | Text message control | 3IQ-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| horizontal | dark | Text message control | 3IQ-0 | border width | 1 | 1 | match |
| horizontal | dark | Text message control | 3IQ-0 | border style | solid | solid | match |
| horizontal | dark | Text message control | 3IQ-0 | outline | none | none | match |
| horizontal | dark | Text message dot | - | visible | no | no | match |
| horizontal | dark | Text message text | 3IP-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| horizontal | dark | Text message text | 3IP-0 | font family | Geist | Geist | match |
| horizontal | dark | Text message text | 3IP-0 | font size | 14 | 14 | match |
| horizontal | dark | Text message text | 3IP-0 | font weight | 400 | 400 | match |
| horizontal | dark | Text message text | 3IP-0 | line height | 20 | 20 | match |
| in-form | light | group | 3EQ-0 | row gap | 12 | 12 | match |
| in-form | light | group label | 3F0-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| in-form | light | group label | 3F0-0 | font size | 14 | 14 | match |
| in-form | light | group label | 3F0-0 | font weight | 500 | 500 | match |
| in-form | light | group label | 3F0-0 | line height | 21 | 21 | match |
| in-form | light | Email item | 3EX-0 | gap | 8 | 8 | match |
| in-form | light | Email control | 3EZ-0 | width | 20 | 20 | match |
| in-form | light | Email control | 3EZ-0 | height | 20 | 20 | match |
| in-form | light | Email control | 3EZ-0 | radius | full | full | match |
| in-form | light | Email control | 3EZ-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| in-form | light | Email control | 3EZ-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| in-form | light | Email control | 3EZ-0 | border width | 1 | 1 | match |
| in-form | light | Email control | 3EZ-0 | border style | solid | solid | match |
| in-form | light | Email control | 3EZ-0 | outline | none | none | match |
| in-form | light | Email dot | - | visible | no | no | match |
| in-form | light | Email text | 3EY-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| in-form | light | Email text | 3EY-0 | font family | Geist | Geist | match |
| in-form | light | Email text | 3EY-0 | font size | 14 | 14 | match |
| in-form | light | Email text | 3EY-0 | font weight | 400 | 400 | match |
| in-form | light | Email text | 3EY-0 | line height | 20 | 20 | match |
| in-form | light | Phone item | 3EU-0 | gap | 8 | 8 | match |
| in-form | light | Phone control | 3EW-0 | width | 20 | 20 | match |
| in-form | light | Phone control | 3EW-0 | height | 20 | 20 | match |
| in-form | light | Phone control | 3EW-0 | radius | full | full | match |
| in-form | light | Phone control | 3EW-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| in-form | light | Phone control | 3EW-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| in-form | light | Phone control | 3EW-0 | border width | 1 | 1 | match |
| in-form | light | Phone control | 3EW-0 | border style | solid | solid | match |
| in-form | light | Phone control | 3EW-0 | outline | none | none | match |
| in-form | light | Phone dot | - | visible | no | no | match |
| in-form | light | Phone text | 3EV-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| in-form | light | Phone text | 3EV-0 | font family | Geist | Geist | match |
| in-form | light | Phone text | 3EV-0 | font size | 14 | 14 | match |
| in-form | light | Phone text | 3EV-0 | font weight | 400 | 400 | match |
| in-form | light | Phone text | 3EV-0 | line height | 20 | 20 | match |
| in-form | light | Text message item | 3ER-0 | gap | 8 | 8 | match |
| in-form | light | Text message control | 3ET-0 | width | 20 | 20 | match |
| in-form | light | Text message control | 3ET-0 | height | 20 | 20 | match |
| in-form | light | Text message control | 3ET-0 | radius | full | full | match |
| in-form | light | Text message control | 3ET-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| in-form | light | Text message control | 3ET-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |
| in-form | light | Text message control | 3ET-0 | border width | 1 | 1 | match |
| in-form | light | Text message control | 3ET-0 | border style | solid | solid | match |
| in-form | light | Text message control | 3ET-0 | outline | none | none | match |
| in-form | light | Text message dot | - | visible | no | no | match |
| in-form | light | Text message text | 3ES-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| in-form | light | Text message text | 3ES-0 | font family | Geist | Geist | match |
| in-form | light | Text message text | 3ES-0 | font size | 14 | 14 | match |
| in-form | light | Text message text | 3ES-0 | font weight | 400 | 400 | match |
| in-form | light | Text message text | 3ES-0 | line height | 20 | 20 | match |
| in-form | light | error | 3EN-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| in-form | light | error | 3EN-0 | font size | 12 | 12 | match |
| in-form | light | error | 3EN-0 | font weight | 500 | 500 | match |
| in-form | light | error | 3EN-0 | line height | 18 | 18 | match |
| in-form | light | error | 3EN-0 | gap from group | 8 | 8 | match |
| in-form | dark | group | 3I9-0 | row gap | 12 | 12 | match |
| in-form | dark | group label | 3IJ-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| in-form | dark | group label | 3IJ-0 | font size | 14 | 14 | match |
| in-form | dark | group label | 3IJ-0 | font weight | 500 | 500 | match |
| in-form | dark | group label | 3IJ-0 | line height | 21 | 21 | match |
| in-form | dark | Email item | 3IG-0 | gap | 8 | 8 | match |
| in-form | dark | Email control | 3II-0 | width | 20 | 20 | match |
| in-form | dark | Email control | 3II-0 | height | 20 | 20 | match |
| in-form | dark | Email control | 3II-0 | radius | full | full | match |
| in-form | dark | Email control | 3II-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| in-form | dark | Email control | 3II-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| in-form | dark | Email control | 3II-0 | border width | 1 | 1 | match |
| in-form | dark | Email control | 3II-0 | border style | solid | solid | match |
| in-form | dark | Email control | 3II-0 | outline | none | none | match |
| in-form | dark | Email dot | - | visible | no | no | match |
| in-form | dark | Email text | 3IH-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| in-form | dark | Email text | 3IH-0 | font family | Geist | Geist | match |
| in-form | dark | Email text | 3IH-0 | font size | 14 | 14 | match |
| in-form | dark | Email text | 3IH-0 | font weight | 400 | 400 | match |
| in-form | dark | Email text | 3IH-0 | line height | 20 | 20 | match |
| in-form | dark | Phone item | 3ID-0 | gap | 8 | 8 | match |
| in-form | dark | Phone control | 3IF-0 | width | 20 | 20 | match |
| in-form | dark | Phone control | 3IF-0 | height | 20 | 20 | match |
| in-form | dark | Phone control | 3IF-0 | radius | full | full | match |
| in-form | dark | Phone control | 3IF-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| in-form | dark | Phone control | 3IF-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| in-form | dark | Phone control | 3IF-0 | border width | 1 | 1 | match |
| in-form | dark | Phone control | 3IF-0 | border style | solid | solid | match |
| in-form | dark | Phone control | 3IF-0 | outline | none | none | match |
| in-form | dark | Phone dot | - | visible | no | no | match |
| in-form | dark | Phone text | 3IE-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| in-form | dark | Phone text | 3IE-0 | font family | Geist | Geist | match |
| in-form | dark | Phone text | 3IE-0 | font size | 14 | 14 | match |
| in-form | dark | Phone text | 3IE-0 | font weight | 400 | 400 | match |
| in-form | dark | Phone text | 3IE-0 | line height | 20 | 20 | match |
| in-form | dark | Text message item | 3IA-0 | gap | 8 | 8 | match |
| in-form | dark | Text message control | 3IC-0 | width | 20 | 20 | match |
| in-form | dark | Text message control | 3IC-0 | height | 20 | 20 | match |
| in-form | dark | Text message control | 3IC-0 | radius | full | full | match |
| in-form | dark | Text message control | 3IC-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| in-form | dark | Text message control | 3IC-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |
| in-form | dark | Text message control | 3IC-0 | border width | 1 | 1 | match |
| in-form | dark | Text message control | 3IC-0 | border style | solid | solid | match |
| in-form | dark | Text message control | 3IC-0 | outline | none | none | match |
| in-form | dark | Text message dot | - | visible | no | no | match |
| in-form | dark | Text message text | 3IB-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| in-form | dark | Text message text | 3IB-0 | font family | Geist | Geist | match |
| in-form | dark | Text message text | 3IB-0 | font size | 14 | 14 | match |
| in-form | dark | Text message text | 3IB-0 | font weight | 400 | 400 | match |
| in-form | dark | Text message text | 3IB-0 | line height | 20 | 20 | match |
| in-form | dark | error | 3I8-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| in-form | dark | error | 3I8-0 | font size | 12 | 12 | match |
| in-form | dark | error | 3I8-0 | font weight | 500 | 500 | match |
| in-form | dark | error | 3I8-0 | line height | 18 | 18 | match |
| in-form | dark | error | 3I8-0 | gap from group | 8 | 8 | match |
