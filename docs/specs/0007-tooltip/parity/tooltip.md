# Parity: Tooltip · spec 0007

Code side: Storybook built from the code PR at `dde7b1b` (the measurement SHA) inside the Playwright Docker image by the compare only visual run, served locally, each of the 5 visual stories opened at 1280 × 720 in light and dark after fonts loaded, values read with `getComputedStyle` and `getBoundingClientRect` by a Playwright script; parts found by `[data-scope="tooltip"][data-part="content"]` and `[data-part="trigger"]`. Paper side: the bindings of the run's nodes on `40N-0` (light) and `43F-0` (dark), read with `get_jsx` and `get_node_info` at the close, token references resolved to the default brand and theme in `tokens.json` (`-dark` names to the dark mode value). Paper ids per cell come from the artboard structure (cell, stage, tooltip, trigger), not from names.

Normalization follows spec 0005: lengths in px rounded to 0.5; colors as OKLCH with each component rounded half up to 3 decimals (hue shown as `-` when chroma rounds to 0); font family by first name. Gap and cross axis offset are rounded to the nearest whole px (spec 0007, _Parity_). The width of a box that hugs its text (one line tooltips and the trigger) matches within 1 px, because Paper sizes text boxes to whole pixels (run ledger, _Differences from the spec_); `LongText` (fixed 320 px) is compared exactly.

Excluded: Paper only chrome (header, captions, Props, stage padding) and the exact text box width.

**Result: 280 rows, 280 `match`.**

**Negative control** (read only, in the comparison input only, no Paper write): on `default`, the Paper background of the tooltip was swapped from `bg.inverse` to `bg.surface` before comparing. The comparison reported:

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | light | tooltip | 417-0 | background | oklch(0.23 0.009 260) | oklch(1 0 -) | DIFF |
| default | dark | tooltip | 45P-0 | background | oklch(1 0 -) | oklch(0.33 0.013 260) | DIFF |

## Rows

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | light | tooltip | 417-0 | width | 181.5 | 182 | match |
| default | light | tooltip | 417-0 | height | 24 | 24 | match |
| default | light | tooltip | 417-0 | padding top | 4 | 4 | match |
| default | light | tooltip | 417-0 | padding right | 8 | 8 | match |
| default | light | tooltip | 417-0 | padding bottom | 4 | 4 | match |
| default | light | tooltip | 417-0 | padding left | 8 | 8 | match |
| default | light | tooltip | 417-0 | radius | 6 | 6 | match |
| default | light | tooltip | 417-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | tooltip | 417-0 | border width | 0 | 0 | match |
| default | light | tooltip | 417-0 | box shadow | none | none | match |
| default | light | tooltip | 417-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | light | tooltip | 417-0 | font family | Geist | Geist | match |
| default | light | tooltip | 417-0 | font size | 12 | 12 | match |
| default | light | tooltip | 417-0 | font weight | 400 | 400 | match |
| default | light | tooltip | 417-0 | line height | 16 | 16 | match |
| default | light | tooltip | 417-0 | lines | 1 | 1 | match |
| default | light | tooltip | 417-0 | placement | top | top | match |
| default | light | tooltip | 417-0 | gap | 8 | 8 | match |
| default | light | tooltip | 417-0 | cross axis offset | 0 | 0 | match |
| default | light | trigger | 419-0 | width | 75 | 76 | match |
| default | light | trigger | 419-0 | height | 40 | 40 | match |
| default | light | trigger | 419-0 | padding left | 16 | 16 | match |
| default | light | trigger | 419-0 | padding right | 16 | 16 | match |
| default | light | trigger | 419-0 | radius | 6 | 6 | match |
| default | light | trigger | 419-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| default | light | trigger | 419-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | trigger | 419-0 | font size | 14 | 14 | match |
| default | light | trigger | 419-0 | font weight | 500 | 500 | match |
| bottom | light | tooltip | 41I-0 | width | 181.5 | 182 | match |
| bottom | light | tooltip | 41I-0 | height | 24 | 24 | match |
| bottom | light | tooltip | 41I-0 | padding top | 4 | 4 | match |
| bottom | light | tooltip | 41I-0 | padding right | 8 | 8 | match |
| bottom | light | tooltip | 41I-0 | padding bottom | 4 | 4 | match |
| bottom | light | tooltip | 41I-0 | padding left | 8 | 8 | match |
| bottom | light | tooltip | 41I-0 | radius | 6 | 6 | match |
| bottom | light | tooltip | 41I-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| bottom | light | tooltip | 41I-0 | border width | 0 | 0 | match |
| bottom | light | tooltip | 41I-0 | box shadow | none | none | match |
| bottom | light | tooltip | 41I-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| bottom | light | tooltip | 41I-0 | font family | Geist | Geist | match |
| bottom | light | tooltip | 41I-0 | font size | 12 | 12 | match |
| bottom | light | tooltip | 41I-0 | font weight | 400 | 400 | match |
| bottom | light | tooltip | 41I-0 | line height | 16 | 16 | match |
| bottom | light | tooltip | 41I-0 | lines | 1 | 1 | match |
| bottom | light | tooltip | 41I-0 | placement | bottom | bottom | match |
| bottom | light | tooltip | 41I-0 | gap | 8 | 8 | match |
| bottom | light | tooltip | 41I-0 | cross axis offset | 0 | 0 | match |
| bottom | light | trigger | 41G-0 | width | 75 | 76 | match |
| bottom | light | trigger | 41G-0 | height | 40 | 40 | match |
| bottom | light | trigger | 41G-0 | padding left | 16 | 16 | match |
| bottom | light | trigger | 41G-0 | padding right | 16 | 16 | match |
| bottom | light | trigger | 41G-0 | radius | 6 | 6 | match |
| bottom | light | trigger | 41G-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| bottom | light | trigger | 41G-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| bottom | light | trigger | 41G-0 | font size | 14 | 14 | match |
| bottom | light | trigger | 41G-0 | font weight | 500 | 500 | match |
| left | light | tooltip | 41P-0 | width | 181.5 | 182 | match |
| left | light | tooltip | 41P-0 | height | 24 | 24 | match |
| left | light | tooltip | 41P-0 | padding top | 4 | 4 | match |
| left | light | tooltip | 41P-0 | padding right | 8 | 8 | match |
| left | light | tooltip | 41P-0 | padding bottom | 4 | 4 | match |
| left | light | tooltip | 41P-0 | padding left | 8 | 8 | match |
| left | light | tooltip | 41P-0 | radius | 6 | 6 | match |
| left | light | tooltip | 41P-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| left | light | tooltip | 41P-0 | border width | 0 | 0 | match |
| left | light | tooltip | 41P-0 | box shadow | none | none | match |
| left | light | tooltip | 41P-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| left | light | tooltip | 41P-0 | font family | Geist | Geist | match |
| left | light | tooltip | 41P-0 | font size | 12 | 12 | match |
| left | light | tooltip | 41P-0 | font weight | 400 | 400 | match |
| left | light | tooltip | 41P-0 | line height | 16 | 16 | match |
| left | light | tooltip | 41P-0 | lines | 1 | 1 | match |
| left | light | tooltip | 41P-0 | placement | left | left | match |
| left | light | tooltip | 41P-0 | gap | 8 | 8 | match |
| left | light | tooltip | 41P-0 | cross axis offset | 0 | 0 | match |
| left | light | trigger | 41N-0 | width | 75 | 76 | match |
| left | light | trigger | 41N-0 | height | 40 | 40 | match |
| left | light | trigger | 41N-0 | padding left | 16 | 16 | match |
| left | light | trigger | 41N-0 | padding right | 16 | 16 | match |
| left | light | trigger | 41N-0 | radius | 6 | 6 | match |
| left | light | trigger | 41N-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| left | light | trigger | 41N-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| left | light | trigger | 41N-0 | font size | 14 | 14 | match |
| left | light | trigger | 41N-0 | font weight | 500 | 500 | match |
| right | light | tooltip | 41W-0 | width | 181.5 | 182 | match |
| right | light | tooltip | 41W-0 | height | 24 | 24 | match |
| right | light | tooltip | 41W-0 | padding top | 4 | 4 | match |
| right | light | tooltip | 41W-0 | padding right | 8 | 8 | match |
| right | light | tooltip | 41W-0 | padding bottom | 4 | 4 | match |
| right | light | tooltip | 41W-0 | padding left | 8 | 8 | match |
| right | light | tooltip | 41W-0 | radius | 6 | 6 | match |
| right | light | tooltip | 41W-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| right | light | tooltip | 41W-0 | border width | 0 | 0 | match |
| right | light | tooltip | 41W-0 | box shadow | none | none | match |
| right | light | tooltip | 41W-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| right | light | tooltip | 41W-0 | font family | Geist | Geist | match |
| right | light | tooltip | 41W-0 | font size | 12 | 12 | match |
| right | light | tooltip | 41W-0 | font weight | 400 | 400 | match |
| right | light | tooltip | 41W-0 | line height | 16 | 16 | match |
| right | light | tooltip | 41W-0 | lines | 1 | 1 | match |
| right | light | tooltip | 41W-0 | placement | right | right | match |
| right | light | tooltip | 41W-0 | gap | 8 | 8 | match |
| right | light | tooltip | 41W-0 | cross axis offset | 0 | 0 | match |
| right | light | trigger | 41U-0 | width | 75 | 76 | match |
| right | light | trigger | 41U-0 | height | 40 | 40 | match |
| right | light | trigger | 41U-0 | padding left | 16 | 16 | match |
| right | light | trigger | 41U-0 | padding right | 16 | 16 | match |
| right | light | trigger | 41U-0 | radius | 6 | 6 | match |
| right | light | trigger | 41U-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| right | light | trigger | 41U-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| right | light | trigger | 41U-0 | font size | 14 | 14 | match |
| right | light | trigger | 41U-0 | font weight | 500 | 500 | match |
| long-text | light | tooltip | 426-0 | width | 320 | 320 | match |
| long-text | light | tooltip | 426-0 | height | 40 | 40 | match |
| long-text | light | tooltip | 426-0 | padding top | 4 | 4 | match |
| long-text | light | tooltip | 426-0 | padding right | 8 | 8 | match |
| long-text | light | tooltip | 426-0 | padding bottom | 4 | 4 | match |
| long-text | light | tooltip | 426-0 | padding left | 8 | 8 | match |
| long-text | light | tooltip | 426-0 | radius | 6 | 6 | match |
| long-text | light | tooltip | 426-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| long-text | light | tooltip | 426-0 | border width | 0 | 0 | match |
| long-text | light | tooltip | 426-0 | box shadow | none | none | match |
| long-text | light | tooltip | 426-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| long-text | light | tooltip | 426-0 | font family | Geist | Geist | match |
| long-text | light | tooltip | 426-0 | font size | 12 | 12 | match |
| long-text | light | tooltip | 426-0 | font weight | 400 | 400 | match |
| long-text | light | tooltip | 426-0 | line height | 16 | 16 | match |
| long-text | light | tooltip | 426-0 | lines | 2 | 2 | match |
| long-text | light | tooltip | 426-0 | placement | top | top | match |
| long-text | light | tooltip | 426-0 | gap | 8 | 8 | match |
| long-text | light | tooltip | 426-0 | cross axis offset | 0 | 0 | match |
| long-text | light | trigger | 428-0 | width | 75 | 76 | match |
| long-text | light | trigger | 428-0 | height | 40 | 40 | match |
| long-text | light | trigger | 428-0 | padding left | 16 | 16 | match |
| long-text | light | trigger | 428-0 | padding right | 16 | 16 | match |
| long-text | light | trigger | 428-0 | radius | 6 | 6 | match |
| long-text | light | trigger | 428-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| long-text | light | trigger | 428-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| long-text | light | trigger | 428-0 | font size | 14 | 14 | match |
| long-text | light | trigger | 428-0 | font weight | 500 | 500 | match |
| default | dark | tooltip | 45P-0 | width | 181.5 | 182 | match |
| default | dark | tooltip | 45P-0 | height | 24 | 24 | match |
| default | dark | tooltip | 45P-0 | padding top | 4 | 4 | match |
| default | dark | tooltip | 45P-0 | padding right | 8 | 8 | match |
| default | dark | tooltip | 45P-0 | padding bottom | 4 | 4 | match |
| default | dark | tooltip | 45P-0 | padding left | 8 | 8 | match |
| default | dark | tooltip | 45P-0 | radius | 6 | 6 | match |
| default | dark | tooltip | 45P-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | tooltip | 45P-0 | border width | 0 | 0 | match |
| default | dark | tooltip | 45P-0 | box shadow | none | none | match |
| default | dark | tooltip | 45P-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | dark | tooltip | 45P-0 | font family | Geist | Geist | match |
| default | dark | tooltip | 45P-0 | font size | 12 | 12 | match |
| default | dark | tooltip | 45P-0 | font weight | 400 | 400 | match |
| default | dark | tooltip | 45P-0 | line height | 16 | 16 | match |
| default | dark | tooltip | 45P-0 | lines | 1 | 1 | match |
| default | dark | tooltip | 45P-0 | placement | top | top | match |
| default | dark | tooltip | 45P-0 | gap | 8 | 8 | match |
| default | dark | tooltip | 45P-0 | cross axis offset | 0 | 0 | match |
| default | dark | trigger | 45N-0 | width | 75 | 76 | match |
| default | dark | trigger | 45N-0 | height | 40 | 40 | match |
| default | dark | trigger | 45N-0 | padding left | 16 | 16 | match |
| default | dark | trigger | 45N-0 | padding right | 16 | 16 | match |
| default | dark | trigger | 45N-0 | radius | 6 | 6 | match |
| default | dark | trigger | 45N-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| default | dark | trigger | 45N-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | trigger | 45N-0 | font size | 14 | 14 | match |
| default | dark | trigger | 45N-0 | font weight | 500 | 500 | match |
| bottom | dark | tooltip | 45G-0 | width | 181.5 | 182 | match |
| bottom | dark | tooltip | 45G-0 | height | 24 | 24 | match |
| bottom | dark | tooltip | 45G-0 | padding top | 4 | 4 | match |
| bottom | dark | tooltip | 45G-0 | padding right | 8 | 8 | match |
| bottom | dark | tooltip | 45G-0 | padding bottom | 4 | 4 | match |
| bottom | dark | tooltip | 45G-0 | padding left | 8 | 8 | match |
| bottom | dark | tooltip | 45G-0 | radius | 6 | 6 | match |
| bottom | dark | tooltip | 45G-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| bottom | dark | tooltip | 45G-0 | border width | 0 | 0 | match |
| bottom | dark | tooltip | 45G-0 | box shadow | none | none | match |
| bottom | dark | tooltip | 45G-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| bottom | dark | tooltip | 45G-0 | font family | Geist | Geist | match |
| bottom | dark | tooltip | 45G-0 | font size | 12 | 12 | match |
| bottom | dark | tooltip | 45G-0 | font weight | 400 | 400 | match |
| bottom | dark | tooltip | 45G-0 | line height | 16 | 16 | match |
| bottom | dark | tooltip | 45G-0 | lines | 1 | 1 | match |
| bottom | dark | tooltip | 45G-0 | placement | bottom | bottom | match |
| bottom | dark | tooltip | 45G-0 | gap | 8 | 8 | match |
| bottom | dark | tooltip | 45G-0 | cross axis offset | 0 | 0 | match |
| bottom | dark | trigger | 45I-0 | width | 75 | 76 | match |
| bottom | dark | trigger | 45I-0 | height | 40 | 40 | match |
| bottom | dark | trigger | 45I-0 | padding left | 16 | 16 | match |
| bottom | dark | trigger | 45I-0 | padding right | 16 | 16 | match |
| bottom | dark | trigger | 45I-0 | radius | 6 | 6 | match |
| bottom | dark | trigger | 45I-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| bottom | dark | trigger | 45I-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| bottom | dark | trigger | 45I-0 | font size | 14 | 14 | match |
| bottom | dark | trigger | 45I-0 | font weight | 500 | 500 | match |
| left | dark | tooltip | 45A-0 | width | 181.5 | 182 | match |
| left | dark | tooltip | 45A-0 | height | 24 | 24 | match |
| left | dark | tooltip | 45A-0 | padding top | 4 | 4 | match |
| left | dark | tooltip | 45A-0 | padding right | 8 | 8 | match |
| left | dark | tooltip | 45A-0 | padding bottom | 4 | 4 | match |
| left | dark | tooltip | 45A-0 | padding left | 8 | 8 | match |
| left | dark | tooltip | 45A-0 | radius | 6 | 6 | match |
| left | dark | tooltip | 45A-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| left | dark | tooltip | 45A-0 | border width | 0 | 0 | match |
| left | dark | tooltip | 45A-0 | box shadow | none | none | match |
| left | dark | tooltip | 45A-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| left | dark | tooltip | 45A-0 | font family | Geist | Geist | match |
| left | dark | tooltip | 45A-0 | font size | 12 | 12 | match |
| left | dark | tooltip | 45A-0 | font weight | 400 | 400 | match |
| left | dark | tooltip | 45A-0 | line height | 16 | 16 | match |
| left | dark | tooltip | 45A-0 | lines | 1 | 1 | match |
| left | dark | tooltip | 45A-0 | placement | left | left | match |
| left | dark | tooltip | 45A-0 | gap | 8 | 8 | match |
| left | dark | tooltip | 45A-0 | cross axis offset | 0 | 0 | match |
| left | dark | trigger | 458-0 | width | 75 | 76 | match |
| left | dark | trigger | 458-0 | height | 40 | 40 | match |
| left | dark | trigger | 458-0 | padding left | 16 | 16 | match |
| left | dark | trigger | 458-0 | padding right | 16 | 16 | match |
| left | dark | trigger | 458-0 | radius | 6 | 6 | match |
| left | dark | trigger | 458-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| left | dark | trigger | 458-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| left | dark | trigger | 458-0 | font size | 14 | 14 | match |
| left | dark | trigger | 458-0 | font weight | 500 | 500 | match |
| right | dark | tooltip | 451-0 | width | 181.5 | 182 | match |
| right | dark | tooltip | 451-0 | height | 24 | 24 | match |
| right | dark | tooltip | 451-0 | padding top | 4 | 4 | match |
| right | dark | tooltip | 451-0 | padding right | 8 | 8 | match |
| right | dark | tooltip | 451-0 | padding bottom | 4 | 4 | match |
| right | dark | tooltip | 451-0 | padding left | 8 | 8 | match |
| right | dark | tooltip | 451-0 | radius | 6 | 6 | match |
| right | dark | tooltip | 451-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| right | dark | tooltip | 451-0 | border width | 0 | 0 | match |
| right | dark | tooltip | 451-0 | box shadow | none | none | match |
| right | dark | tooltip | 451-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| right | dark | tooltip | 451-0 | font family | Geist | Geist | match |
| right | dark | tooltip | 451-0 | font size | 12 | 12 | match |
| right | dark | tooltip | 451-0 | font weight | 400 | 400 | match |
| right | dark | tooltip | 451-0 | line height | 16 | 16 | match |
| right | dark | tooltip | 451-0 | lines | 1 | 1 | match |
| right | dark | tooltip | 451-0 | placement | right | right | match |
| right | dark | tooltip | 451-0 | gap | 8 | 8 | match |
| right | dark | tooltip | 451-0 | cross axis offset | 0 | 0 | match |
| right | dark | trigger | 453-0 | width | 75 | 76 | match |
| right | dark | trigger | 453-0 | height | 40 | 40 | match |
| right | dark | trigger | 453-0 | padding left | 16 | 16 | match |
| right | dark | trigger | 453-0 | padding right | 16 | 16 | match |
| right | dark | trigger | 453-0 | radius | 6 | 6 | match |
| right | dark | trigger | 453-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| right | dark | trigger | 453-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| right | dark | trigger | 453-0 | font size | 14 | 14 | match |
| right | dark | trigger | 453-0 | font weight | 500 | 500 | match |
| long-text | dark | tooltip | 44Q-0 | width | 320 | 320 | match |
| long-text | dark | tooltip | 44Q-0 | height | 40 | 40 | match |
| long-text | dark | tooltip | 44Q-0 | padding top | 4 | 4 | match |
| long-text | dark | tooltip | 44Q-0 | padding right | 8 | 8 | match |
| long-text | dark | tooltip | 44Q-0 | padding bottom | 4 | 4 | match |
| long-text | dark | tooltip | 44Q-0 | padding left | 8 | 8 | match |
| long-text | dark | tooltip | 44Q-0 | radius | 6 | 6 | match |
| long-text | dark | tooltip | 44Q-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| long-text | dark | tooltip | 44Q-0 | border width | 0 | 0 | match |
| long-text | dark | tooltip | 44Q-0 | box shadow | none | none | match |
| long-text | dark | tooltip | 44Q-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| long-text | dark | tooltip | 44Q-0 | font family | Geist | Geist | match |
| long-text | dark | tooltip | 44Q-0 | font size | 12 | 12 | match |
| long-text | dark | tooltip | 44Q-0 | font weight | 400 | 400 | match |
| long-text | dark | tooltip | 44Q-0 | line height | 16 | 16 | match |
| long-text | dark | tooltip | 44Q-0 | lines | 2 | 2 | match |
| long-text | dark | tooltip | 44Q-0 | placement | top | top | match |
| long-text | dark | tooltip | 44Q-0 | gap | 8 | 8 | match |
| long-text | dark | tooltip | 44Q-0 | cross axis offset | 0 | 0 | match |
| long-text | dark | trigger | 44O-0 | width | 75 | 76 | match |
| long-text | dark | trigger | 44O-0 | height | 40 | 40 | match |
| long-text | dark | trigger | 44O-0 | padding left | 16 | 16 | match |
| long-text | dark | trigger | 44O-0 | padding right | 16 | 16 | match |
| long-text | dark | trigger | 44O-0 | radius | 6 | 6 | match |
| long-text | dark | trigger | 44O-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| long-text | dark | trigger | 44O-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| long-text | dark | trigger | 44O-0 | font size | 14 | 14 | match |
| long-text | dark | trigger | 44O-0 | font weight | 500 | 500 | match |
