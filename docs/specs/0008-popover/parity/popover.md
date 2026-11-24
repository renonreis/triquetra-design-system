# Parity: Popover · spec 0008

Code side: Storybook built in the Playwright Docker image by the compare only visual run, from the same component and story files as `cd98e46` (the measurement SHA), served locally; each visual story opened at 1280 × 720 in light and dark after fonts loaded, read with `getComputedStyle` and `getBoundingClientRect`. Later commits of the PR change tests, baselines and docs only.

Paper side: the `get_jsx` of the run's nodes on `462-0` (light) and `49E-0` (dark), token references resolved from `tokens.json` (`-dark` names to the dark mode value), laid out in the same Chromium with Geist and read with the same code. The panel, trigger, button, input and close button sizes of the light artboard were also checked against the sizes Paper itself reports (`get_tree_summary`), within 1 px.

Normalization follows spec 0005 (px rounded to 0.5; OKLCH components rounded half up to 3 decimals, hue `-` at zero chroma; first font family). Shadows are compared layer by layer, as geometry plus 8 bit RGB and alpha to 2 decimals, because Paper stores shadow colors as 8 bit hex. Gap to the trigger and cross axis offset are rounded to whole px. Button widths compare with a 1 px tolerance, because Paper sizes text boxes to whole px.

Excluded: Paper only chrome and exact text box widths.

**Result: 538 rows, 538 `match`.**

**Negative control** (in the comparison input only, no Paper write): on `default`, the Paper background of the panel was swapped from `bg.surface` to `bg.inverse`. The comparison reported:

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | light | panel | 46M-0 | background | oklch(1 0 -) | oklch(0.23 0.009 260) | DIFF |
| default | dark | panel | 4BY-0 | background | oklch(0.33 0.013 260) | oklch(1 0 -) | DIFF |

## Rows

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | light | panel | 46M-0 | width | 320 | 320 | match |
| default | light | panel | 46M-0 | height | 148 | 148 | match |
| default | light | panel | 46M-0 | padding top | 16 | 16 | match |
| default | light | panel | 46M-0 | padding right | 16 | 16 | match |
| default | light | panel | 46M-0 | padding bottom | 16 | 16 | match |
| default | light | panel | 46M-0 | padding left | 16 | 16 | match |
| default | light | panel | 46M-0 | gap | 16 | 16 | match |
| default | light | panel | 46M-0 | radius | 8 | 8 | match |
| default | light | panel | 46M-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| default | light | panel | 46M-0 | border width | 1 | 1 | match |
| default | light | panel | 46M-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| default | light | panel | 46M-0 | box shadow | 0px 4px 8px -2px rgb(26 29 33) a 0.08; 0px 2px 4px -2px rgb(26 29 33) a 0.06 | 0px 4px 8px -2px rgb(26 29 33) a 0.08; 0px 2px 4px -2px rgb(26 29 33) a 0.06 | match |
| default | light | panel | 46M-0 | placement | bottom | bottom | match |
| default | light | panel | 46M-0 | gap to trigger | 8 | 8 | match |
| default | light | panel | 46M-0 | cross axis offset | 0 | 0 | match |
| default | light | header | 46N-0 | present | yes | yes | match |
| default | light | header | 46N-0 | left in panel | 17 | 17 | match |
| default | light | header | 46N-0 | top in panel | 17 | 17 | match |
| default | light | header | 46N-0 | gap | 4 | 4 | match |
| default | light | header | 46N-0 | padding end | 32 | 32 | match |
| default | light | body |  | present | no | no | match |
| default | light | footer | 46Q-0 | present | yes | yes | match |
| default | light | footer | 46Q-0 | left in panel | 17 | 17 | match |
| default | light | footer | 46Q-0 | top in panel | 99 | 99 | match |
| default | light | footer | 46Q-0 | gap | 12 | 12 | match |
| default | light | title | 46O-0 | present | yes | yes | match |
| default | light | title | 46O-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | title | 46O-0 | font family | Geist | Geist | match |
| default | light | title | 46O-0 | font size | 16 | 16 | match |
| default | light | title | 46O-0 | font weight | 600 | 600 | match |
| default | light | title | 46O-0 | line height | 20 | 20 | match |
| default | light | title | 46O-0 | lines | 1 | 1 | match |
| default | light | description | 46P-0 | present | yes | yes | match |
| default | light | description | 46P-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| default | light | description | 46P-0 | font family | Geist | Geist | match |
| default | light | description | 46P-0 | font size | 14 | 14 | match |
| default | light | description | 46P-0 | font weight | 400 | 400 | match |
| default | light | description | 46P-0 | line height | 21 | 21 | match |
| default | light | description | 46P-0 | lines | 2 | 2 | match |
| default | light | bodyText |  | present | no | no | match |
| default | light | closeTrigger | 46T-0 | present | yes | yes | match |
| default | light | closeTrigger | 46T-0 | width | 32 | 32 | match |
| default | light | closeTrigger | 46T-0 | height | 32 | 32 | match |
| default | light | closeTrigger | 46T-0 | offset top | 9 | 9 | match |
| default | light | closeTrigger | 46T-0 | offset end | 9 | 9 | match |
| default | light | closeTrigger | 46T-0 | radius | 6 | 6 | match |
| default | light | closeTrigger | 46T-0 | icon size | 16 | 16 | match |
| default | light | closeTrigger | 46T-0 | icon path | M6 6l12 12M18 6L6 18 | M6 6l12 12M18 6L6 18 | match |
| default | light | closeTrigger | 46T-0 | icon color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| default | light | closeTrigger | 46T-0 | icon stroke | 2 | 2 | match |
| default | light | trigger | 46K-0 | width | 70 | 70 | match |
| default | light | trigger | 46K-0 | height | 40 | 40 | match |
| default | light | trigger | 46K-0 | padding inline | 16 | 16 | match |
| default | light | trigger | 46K-0 | radius | 6 | 6 | match |
| default | light | trigger | 46K-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| default | light | trigger | 46K-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | trigger | 46K-0 | font family | Geist | Geist | match |
| default | light | trigger | 46K-0 | font size | 14 | 14 | match |
| default | light | trigger | 46K-0 | font weight | 500 | 500 | match |
| default | light | trigger | 46K-0 | line height | 21 | 21 | match |
| default | light | footer button 1 | 46R-0 | width | 85 | 85 | match |
| default | light | footer button 1 | 46R-0 | height | 32 | 32 | match |
| default | light | footer button 1 | 46R-0 | padding inline | 12 | 12 | match |
| default | light | footer button 1 | 46R-0 | radius | 6 | 6 | match |
| default | light | footer button 1 | 46R-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | light | footer button 1 | 46R-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | light | footer button 1 | 46R-0 | font family | Geist | Geist | match |
| default | light | footer button 1 | 46R-0 | font size | 14 | 14 | match |
| default | light | footer button 1 | 46R-0 | font weight | 500 | 500 | match |
| default | light | footer button 1 | 46R-0 | line height | 21 | 21 | match |
| default | light | field |  | present | no | no | match |
| top | light | panel | 471-0 | width | 320 | 320 | match |
| top | light | panel | 471-0 | height | 148 | 148 | match |
| top | light | panel | 471-0 | padding top | 16 | 16 | match |
| top | light | panel | 471-0 | padding right | 16 | 16 | match |
| top | light | panel | 471-0 | padding bottom | 16 | 16 | match |
| top | light | panel | 471-0 | padding left | 16 | 16 | match |
| top | light | panel | 471-0 | gap | 16 | 16 | match |
| top | light | panel | 471-0 | radius | 8 | 8 | match |
| top | light | panel | 471-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| top | light | panel | 471-0 | border width | 1 | 1 | match |
| top | light | panel | 471-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| top | light | panel | 471-0 | box shadow | 0px 4px 8px -2px rgb(26 29 33) a 0.08; 0px 2px 4px -2px rgb(26 29 33) a 0.06 | 0px 4px 8px -2px rgb(26 29 33) a 0.08; 0px 2px 4px -2px rgb(26 29 33) a 0.06 | match |
| top | light | panel | 471-0 | placement | top | top | match |
| top | light | panel | 471-0 | gap to trigger | 8 | 8 | match |
| top | light | panel | 471-0 | cross axis offset | 0 | 0 | match |
| top | light | header | 478-0 | present | yes | yes | match |
| top | light | header | 478-0 | left in panel | 17 | 17 | match |
| top | light | header | 478-0 | top in panel | 17 | 17 | match |
| top | light | header | 478-0 | gap | 4 | 4 | match |
| top | light | header | 478-0 | padding end | 32 | 32 | match |
| top | light | body |  | present | no | no | match |
| top | light | footer | 475-0 | present | yes | yes | match |
| top | light | footer | 475-0 | left in panel | 17 | 17 | match |
| top | light | footer | 475-0 | top in panel | 99 | 99 | match |
| top | light | footer | 475-0 | gap | 12 | 12 | match |
| top | light | title | 47A-0 | present | yes | yes | match |
| top | light | title | 47A-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| top | light | title | 47A-0 | font family | Geist | Geist | match |
| top | light | title | 47A-0 | font size | 16 | 16 | match |
| top | light | title | 47A-0 | font weight | 600 | 600 | match |
| top | light | title | 47A-0 | line height | 20 | 20 | match |
| top | light | title | 47A-0 | lines | 1 | 1 | match |
| top | light | description | 479-0 | present | yes | yes | match |
| top | light | description | 479-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| top | light | description | 479-0 | font family | Geist | Geist | match |
| top | light | description | 479-0 | font size | 14 | 14 | match |
| top | light | description | 479-0 | font weight | 400 | 400 | match |
| top | light | description | 479-0 | line height | 21 | 21 | match |
| top | light | description | 479-0 | lines | 2 | 2 | match |
| top | light | bodyText |  | present | no | no | match |
| top | light | closeTrigger | 472-0 | present | yes | yes | match |
| top | light | closeTrigger | 472-0 | width | 32 | 32 | match |
| top | light | closeTrigger | 472-0 | height | 32 | 32 | match |
| top | light | closeTrigger | 472-0 | offset top | 9 | 9 | match |
| top | light | closeTrigger | 472-0 | offset end | 9 | 9 | match |
| top | light | closeTrigger | 472-0 | radius | 6 | 6 | match |
| top | light | closeTrigger | 472-0 | icon size | 16 | 16 | match |
| top | light | closeTrigger | 472-0 | icon path | M6 6l12 12M18 6L6 18 | M6 6l12 12M18 6L6 18 | match |
| top | light | closeTrigger | 472-0 | icon color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| top | light | closeTrigger | 472-0 | icon stroke | 2 | 2 | match |
| top | light | trigger | 47B-0 | width | 70 | 70 | match |
| top | light | trigger | 47B-0 | height | 40 | 40 | match |
| top | light | trigger | 47B-0 | padding inline | 16 | 16 | match |
| top | light | trigger | 47B-0 | radius | 6 | 6 | match |
| top | light | trigger | 47B-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| top | light | trigger | 47B-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| top | light | trigger | 47B-0 | font family | Geist | Geist | match |
| top | light | trigger | 47B-0 | font size | 14 | 14 | match |
| top | light | trigger | 47B-0 | font weight | 500 | 500 | match |
| top | light | trigger | 47B-0 | line height | 21 | 21 | match |
| top | light | footer button 1 | 476-0 | width | 85 | 85 | match |
| top | light | footer button 1 | 476-0 | height | 32 | 32 | match |
| top | light | footer button 1 | 476-0 | padding inline | 12 | 12 | match |
| top | light | footer button 1 | 476-0 | radius | 6 | 6 | match |
| top | light | footer button 1 | 476-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| top | light | footer button 1 | 476-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| top | light | footer button 1 | 476-0 | font family | Geist | Geist | match |
| top | light | footer button 1 | 476-0 | font size | 14 | 14 | match |
| top | light | footer button 1 | 476-0 | font weight | 500 | 500 | match |
| top | light | footer button 1 | 476-0 | line height | 21 | 21 | match |
| top | light | field |  | present | no | no | match |
| with-form | light | panel | 47N-0 | width | 320 | 320 | match |
| with-form | light | panel | 47N-0 | height | 187 | 187 | match |
| with-form | light | panel | 47N-0 | padding top | 16 | 16 | match |
| with-form | light | panel | 47N-0 | padding right | 16 | 16 | match |
| with-form | light | panel | 47N-0 | padding bottom | 16 | 16 | match |
| with-form | light | panel | 47N-0 | padding left | 16 | 16 | match |
| with-form | light | panel | 47N-0 | gap | 16 | 16 | match |
| with-form | light | panel | 47N-0 | radius | 8 | 8 | match |
| with-form | light | panel | 47N-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | light | panel | 47N-0 | border width | 1 | 1 | match |
| with-form | light | panel | 47N-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| with-form | light | panel | 47N-0 | box shadow | 0px 4px 8px -2px rgb(26 29 33) a 0.08; 0px 2px 4px -2px rgb(26 29 33) a 0.06 | 0px 4px 8px -2px rgb(26 29 33) a 0.08; 0px 2px 4px -2px rgb(26 29 33) a 0.06 | match |
| with-form | light | panel | 47N-0 | placement | bottom | bottom | match |
| with-form | light | panel | 47N-0 | gap to trigger | 8 | 8 | match |
| with-form | light | panel | 47N-0 | cross axis offset | 0 | 0 | match |
| with-form | light | header | 47O-0 | present | yes | yes | match |
| with-form | light | header | 47O-0 | left in panel | 17 | 17 | match |
| with-form | light | header | 47O-0 | top in panel | 17 | 17 | match |
| with-form | light | header | 47O-0 | gap | 4 | 4 | match |
| with-form | light | header | 47O-0 | padding end | 32 | 32 | match |
| with-form | light | body | 47Q-0 | present | yes | yes | match |
| with-form | light | body | 47Q-0 | left in panel | 17 | 17 | match |
| with-form | light | body | 47Q-0 | top in panel | 53 | 53 | match |
| with-form | light | footer | 47V-0 | present | yes | yes | match |
| with-form | light | footer | 47V-0 | left in panel | 17 | 17 | match |
| with-form | light | footer | 47V-0 | top in panel | 138 | 138 | match |
| with-form | light | footer | 47V-0 | gap | 12 | 12 | match |
| with-form | light | title | 47P-0 | present | yes | yes | match |
| with-form | light | title | 47P-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| with-form | light | title | 47P-0 | font family | Geist | Geist | match |
| with-form | light | title | 47P-0 | font size | 16 | 16 | match |
| with-form | light | title | 47P-0 | font weight | 600 | 600 | match |
| with-form | light | title | 47P-0 | line height | 20 | 20 | match |
| with-form | light | title | 47P-0 | lines | 1 | 1 | match |
| with-form | light | description |  | present | no | no | match |
| with-form | light | bodyText |  | present | no | no | match |
| with-form | light | closeTrigger |  | present | no | no | match |
| with-form | light | trigger | 47L-0 | width | 86 | 86 | match |
| with-form | light | trigger | 47L-0 | height | 40 | 40 | match |
| with-form | light | trigger | 47L-0 | padding inline | 16 | 16 | match |
| with-form | light | trigger | 47L-0 | radius | 6 | 6 | match |
| with-form | light | trigger | 47L-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| with-form | light | trigger | 47L-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| with-form | light | trigger | 47L-0 | font family | Geist | Geist | match |
| with-form | light | trigger | 47L-0 | font size | 14 | 14 | match |
| with-form | light | trigger | 47L-0 | font weight | 500 | 500 | match |
| with-form | light | trigger | 47L-0 | line height | 21 | 21 | match |
| with-form | light | footer button 1 | 47W-0 | width | 70 | 70 | match |
| with-form | light | footer button 1 | 47W-0 | height | 32 | 32 | match |
| with-form | light | footer button 1 | 47W-0 | padding inline | 12 | 12 | match |
| with-form | light | footer button 1 | 47W-0 | radius | 6 | 6 | match |
| with-form | light | footer button 1 | 47W-0 | background | transparent | transparent | match |
| with-form | light | footer button 1 | 47W-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| with-form | light | footer button 1 | 47W-0 | font family | Geist | Geist | match |
| with-form | light | footer button 1 | 47W-0 | font size | 14 | 14 | match |
| with-form | light | footer button 1 | 47W-0 | font weight | 500 | 500 | match |
| with-form | light | footer button 1 | 47W-0 | line height | 21 | 21 | match |
| with-form | light | footer button 2 | 47Y-0 | width | 56 | 56 | match |
| with-form | light | footer button 2 | 47Y-0 | height | 32 | 32 | match |
| with-form | light | footer button 2 | 47Y-0 | padding inline | 12 | 12 | match |
| with-form | light | footer button 2 | 47Y-0 | radius | 6 | 6 | match |
| with-form | light | footer button 2 | 47Y-0 | background | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| with-form | light | footer button 2 | 47Y-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | light | footer button 2 | 47Y-0 | font family | Geist | Geist | match |
| with-form | light | footer button 2 | 47Y-0 | font size | 14 | 14 | match |
| with-form | light | footer button 2 | 47Y-0 | font weight | 500 | 500 | match |
| with-form | light | footer button 2 | 47Y-0 | line height | 21 | 21 | match |
| with-form | light | field | 47R-0 | present | yes | yes | match |
| with-form | light | field | 47R-0 | gap | 8 | 8 | match |
| with-form | light | field label | 47S-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| with-form | light | field label | 47S-0 | font family | Geist | Geist | match |
| with-form | light | field label | 47S-0 | font size | 14 | 14 | match |
| with-form | light | field label | 47S-0 | font weight | 500 | 500 | match |
| with-form | light | field label | 47S-0 | line height | 21 | 21 | match |
| with-form | light | input | 47T-0 | width | 286 | 286 | match |
| with-form | light | input | 47T-0 | height | 40 | 40 | match |
| with-form | light | input | 47T-0 | padding inline | 12 | 12 | match |
| with-form | light | input | 47T-0 | radius | 6 | 6 | match |
| with-form | light | input | 47T-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | light | input | 47T-0 | border width | 1 | 1 | match |
| with-form | light | input | 47T-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| with-form | light | input | 47T-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| with-form | light | input | 47T-0 | font family | Geist | Geist | match |
| with-form | light | input | 47T-0 | font size | 14 | 14 | match |
| with-form | light | input | 47T-0 | font weight | 400 | 400 | match |
| with-form | light | input | 47T-0 | line height | 21 | 21 | match |
| body-only | light | panel | 486-0 | width | 320 | 320 | match |
| body-only | light | panel | 486-0 | height | 76 | 76 | match |
| body-only | light | panel | 486-0 | padding top | 16 | 16 | match |
| body-only | light | panel | 486-0 | padding right | 16 | 16 | match |
| body-only | light | panel | 486-0 | padding bottom | 16 | 16 | match |
| body-only | light | panel | 486-0 | padding left | 16 | 16 | match |
| body-only | light | panel | 486-0 | gap | 16 | 16 | match |
| body-only | light | panel | 486-0 | radius | 8 | 8 | match |
| body-only | light | panel | 486-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| body-only | light | panel | 486-0 | border width | 1 | 1 | match |
| body-only | light | panel | 486-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| body-only | light | panel | 486-0 | box shadow | 0px 4px 8px -2px rgb(26 29 33) a 0.08; 0px 2px 4px -2px rgb(26 29 33) a 0.06 | 0px 4px 8px -2px rgb(26 29 33) a 0.08; 0px 2px 4px -2px rgb(26 29 33) a 0.06 | match |
| body-only | light | panel | 486-0 | placement | bottom | bottom | match |
| body-only | light | panel | 486-0 | gap to trigger | 8 | 8 | match |
| body-only | light | panel | 486-0 | cross axis offset | 0 | 0 | match |
| body-only | light | header |  | present | no | no | match |
| body-only | light | body | 487-0 | present | yes | yes | match |
| body-only | light | body | 487-0 | left in panel | 17 | 17 | match |
| body-only | light | body | 487-0 | top in panel | 17 | 17 | match |
| body-only | light | footer |  | present | no | no | match |
| body-only | light | title |  | present | no | no | match |
| body-only | light | description |  | present | no | no | match |
| body-only | light | bodyText | 488-0 | present | yes | yes | match |
| body-only | light | bodyText | 488-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| body-only | light | bodyText | 488-0 | font family | Geist | Geist | match |
| body-only | light | bodyText | 488-0 | font size | 14 | 14 | match |
| body-only | light | bodyText | 488-0 | font weight | 400 | 400 | match |
| body-only | light | bodyText | 488-0 | line height | 21 | 21 | match |
| body-only | light | bodyText | 488-0 | lines | 2 | 2 | match |
| body-only | light | closeTrigger |  | present | no | no | match |
| body-only | light | trigger | 484-0 | width | 120 | 120 | match |
| body-only | light | trigger | 484-0 | height | 40 | 40 | match |
| body-only | light | trigger | 484-0 | padding inline | 16 | 16 | match |
| body-only | light | trigger | 484-0 | radius | 6 | 6 | match |
| body-only | light | trigger | 484-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| body-only | light | trigger | 484-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| body-only | light | trigger | 484-0 | font family | Geist | Geist | match |
| body-only | light | trigger | 484-0 | font size | 14 | 14 | match |
| body-only | light | trigger | 484-0 | font weight | 500 | 500 | match |
| body-only | light | trigger | 484-0 | line height | 21 | 21 | match |
| body-only | light | field |  | present | no | no | match |
| default | dark | panel | 4BY-0 | width | 320 | 320 | match |
| default | dark | panel | 4BY-0 | height | 148 | 148 | match |
| default | dark | panel | 4BY-0 | padding top | 16 | 16 | match |
| default | dark | panel | 4BY-0 | padding right | 16 | 16 | match |
| default | dark | panel | 4BY-0 | padding bottom | 16 | 16 | match |
| default | dark | panel | 4BY-0 | padding left | 16 | 16 | match |
| default | dark | panel | 4BY-0 | gap | 16 | 16 | match |
| default | dark | panel | 4BY-0 | radius | 8 | 8 | match |
| default | dark | panel | 4BY-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| default | dark | panel | 4BY-0 | border width | 1 | 1 | match |
| default | dark | panel | 4BY-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| default | dark | panel | 4BY-0 | box shadow | 0px 4px 8px -2px rgb(0 0 0) a 0.4; 0px 2px 4px -2px rgb(0 0 0) a 0.3 | 0px 4px 8px -2px rgb(0 0 0) a 0.4; 0px 2px 4px -2px rgb(0 0 0) a 0.3 | match |
| default | dark | panel | 4BY-0 | placement | bottom | bottom | match |
| default | dark | panel | 4BY-0 | gap to trigger | 8 | 8 | match |
| default | dark | panel | 4BY-0 | cross axis offset | 0 | 0 | match |
| default | dark | header | 4C5-0 | present | yes | yes | match |
| default | dark | header | 4C5-0 | left in panel | 17 | 17 | match |
| default | dark | header | 4C5-0 | top in panel | 17 | 17 | match |
| default | dark | header | 4C5-0 | gap | 4 | 4 | match |
| default | dark | header | 4C5-0 | padding end | 32 | 32 | match |
| default | dark | body |  | present | no | no | match |
| default | dark | footer | 4C2-0 | present | yes | yes | match |
| default | dark | footer | 4C2-0 | left in panel | 17 | 17 | match |
| default | dark | footer | 4C2-0 | top in panel | 99 | 99 | match |
| default | dark | footer | 4C2-0 | gap | 12 | 12 | match |
| default | dark | title | 4C7-0 | present | yes | yes | match |
| default | dark | title | 4C7-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | title | 4C7-0 | font family | Geist | Geist | match |
| default | dark | title | 4C7-0 | font size | 16 | 16 | match |
| default | dark | title | 4C7-0 | font weight | 600 | 600 | match |
| default | dark | title | 4C7-0 | line height | 20 | 20 | match |
| default | dark | title | 4C7-0 | lines | 1 | 1 | match |
| default | dark | description | 4C6-0 | present | yes | yes | match |
| default | dark | description | 4C6-0 | color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| default | dark | description | 4C6-0 | font family | Geist | Geist | match |
| default | dark | description | 4C6-0 | font size | 14 | 14 | match |
| default | dark | description | 4C6-0 | font weight | 400 | 400 | match |
| default | dark | description | 4C6-0 | line height | 21 | 21 | match |
| default | dark | description | 4C6-0 | lines | 2 | 2 | match |
| default | dark | bodyText |  | present | no | no | match |
| default | dark | closeTrigger | 4BZ-0 | present | yes | yes | match |
| default | dark | closeTrigger | 4BZ-0 | width | 32 | 32 | match |
| default | dark | closeTrigger | 4BZ-0 | height | 32 | 32 | match |
| default | dark | closeTrigger | 4BZ-0 | offset top | 9 | 9 | match |
| default | dark | closeTrigger | 4BZ-0 | offset end | 9 | 9 | match |
| default | dark | closeTrigger | 4BZ-0 | radius | 6 | 6 | match |
| default | dark | closeTrigger | 4BZ-0 | icon size | 16 | 16 | match |
| default | dark | closeTrigger | 4BZ-0 | icon path | M6 6l12 12M18 6L6 18 | M6 6l12 12M18 6L6 18 | match |
| default | dark | closeTrigger | 4BZ-0 | icon color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| default | dark | closeTrigger | 4BZ-0 | icon stroke | 2 | 2 | match |
| default | dark | trigger | 4C8-0 | width | 70 | 70 | match |
| default | dark | trigger | 4C8-0 | height | 40 | 40 | match |
| default | dark | trigger | 4C8-0 | padding inline | 16 | 16 | match |
| default | dark | trigger | 4C8-0 | radius | 6 | 6 | match |
| default | dark | trigger | 4C8-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| default | dark | trigger | 4C8-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | trigger | 4C8-0 | font family | Geist | Geist | match |
| default | dark | trigger | 4C8-0 | font size | 14 | 14 | match |
| default | dark | trigger | 4C8-0 | font weight | 500 | 500 | match |
| default | dark | trigger | 4C8-0 | line height | 21 | 21 | match |
| default | dark | footer button 1 | 4C3-0 | width | 85 | 85 | match |
| default | dark | footer button 1 | 4C3-0 | height | 32 | 32 | match |
| default | dark | footer button 1 | 4C3-0 | padding inline | 12 | 12 | match |
| default | dark | footer button 1 | 4C3-0 | radius | 6 | 6 | match |
| default | dark | footer button 1 | 4C3-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| default | dark | footer button 1 | 4C3-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| default | dark | footer button 1 | 4C3-0 | font family | Geist | Geist | match |
| default | dark | footer button 1 | 4C3-0 | font size | 14 | 14 | match |
| default | dark | footer button 1 | 4C3-0 | font weight | 500 | 500 | match |
| default | dark | footer button 1 | 4C3-0 | line height | 21 | 21 | match |
| default | dark | field |  | present | no | no | match |
| top | dark | panel | 4BL-0 | width | 320 | 320 | match |
| top | dark | panel | 4BL-0 | height | 148 | 148 | match |
| top | dark | panel | 4BL-0 | padding top | 16 | 16 | match |
| top | dark | panel | 4BL-0 | padding right | 16 | 16 | match |
| top | dark | panel | 4BL-0 | padding bottom | 16 | 16 | match |
| top | dark | panel | 4BL-0 | padding left | 16 | 16 | match |
| top | dark | panel | 4BL-0 | gap | 16 | 16 | match |
| top | dark | panel | 4BL-0 | radius | 8 | 8 | match |
| top | dark | panel | 4BL-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| top | dark | panel | 4BL-0 | border width | 1 | 1 | match |
| top | dark | panel | 4BL-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| top | dark | panel | 4BL-0 | box shadow | 0px 4px 8px -2px rgb(0 0 0) a 0.4; 0px 2px 4px -2px rgb(0 0 0) a 0.3 | 0px 4px 8px -2px rgb(0 0 0) a 0.4; 0px 2px 4px -2px rgb(0 0 0) a 0.3 | match |
| top | dark | panel | 4BL-0 | placement | top | top | match |
| top | dark | panel | 4BL-0 | gap to trigger | 8 | 8 | match |
| top | dark | panel | 4BL-0 | cross axis offset | 0 | 0 | match |
| top | dark | header | 4BS-0 | present | yes | yes | match |
| top | dark | header | 4BS-0 | left in panel | 17 | 17 | match |
| top | dark | header | 4BS-0 | top in panel | 17 | 17 | match |
| top | dark | header | 4BS-0 | gap | 4 | 4 | match |
| top | dark | header | 4BS-0 | padding end | 32 | 32 | match |
| top | dark | body |  | present | no | no | match |
| top | dark | footer | 4BP-0 | present | yes | yes | match |
| top | dark | footer | 4BP-0 | left in panel | 17 | 17 | match |
| top | dark | footer | 4BP-0 | top in panel | 99 | 99 | match |
| top | dark | footer | 4BP-0 | gap | 12 | 12 | match |
| top | dark | title | 4BU-0 | present | yes | yes | match |
| top | dark | title | 4BU-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| top | dark | title | 4BU-0 | font family | Geist | Geist | match |
| top | dark | title | 4BU-0 | font size | 16 | 16 | match |
| top | dark | title | 4BU-0 | font weight | 600 | 600 | match |
| top | dark | title | 4BU-0 | line height | 20 | 20 | match |
| top | dark | title | 4BU-0 | lines | 1 | 1 | match |
| top | dark | description | 4BT-0 | present | yes | yes | match |
| top | dark | description | 4BT-0 | color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| top | dark | description | 4BT-0 | font family | Geist | Geist | match |
| top | dark | description | 4BT-0 | font size | 14 | 14 | match |
| top | dark | description | 4BT-0 | font weight | 400 | 400 | match |
| top | dark | description | 4BT-0 | line height | 21 | 21 | match |
| top | dark | description | 4BT-0 | lines | 2 | 2 | match |
| top | dark | bodyText |  | present | no | no | match |
| top | dark | closeTrigger | 4BM-0 | present | yes | yes | match |
| top | dark | closeTrigger | 4BM-0 | width | 32 | 32 | match |
| top | dark | closeTrigger | 4BM-0 | height | 32 | 32 | match |
| top | dark | closeTrigger | 4BM-0 | offset top | 9 | 9 | match |
| top | dark | closeTrigger | 4BM-0 | offset end | 9 | 9 | match |
| top | dark | closeTrigger | 4BM-0 | radius | 6 | 6 | match |
| top | dark | closeTrigger | 4BM-0 | icon size | 16 | 16 | match |
| top | dark | closeTrigger | 4BM-0 | icon path | M6 6l12 12M18 6L6 18 | M6 6l12 12M18 6L6 18 | match |
| top | dark | closeTrigger | 4BM-0 | icon color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| top | dark | closeTrigger | 4BM-0 | icon stroke | 2 | 2 | match |
| top | dark | trigger | 4BJ-0 | width | 70 | 70 | match |
| top | dark | trigger | 4BJ-0 | height | 40 | 40 | match |
| top | dark | trigger | 4BJ-0 | padding inline | 16 | 16 | match |
| top | dark | trigger | 4BJ-0 | radius | 6 | 6 | match |
| top | dark | trigger | 4BJ-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| top | dark | trigger | 4BJ-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| top | dark | trigger | 4BJ-0 | font family | Geist | Geist | match |
| top | dark | trigger | 4BJ-0 | font size | 14 | 14 | match |
| top | dark | trigger | 4BJ-0 | font weight | 500 | 500 | match |
| top | dark | trigger | 4BJ-0 | line height | 21 | 21 | match |
| top | dark | footer button 1 | 4BQ-0 | width | 85 | 85 | match |
| top | dark | footer button 1 | 4BQ-0 | height | 32 | 32 | match |
| top | dark | footer button 1 | 4BQ-0 | padding inline | 12 | 12 | match |
| top | dark | footer button 1 | 4BQ-0 | radius | 6 | 6 | match |
| top | dark | footer button 1 | 4BQ-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| top | dark | footer button 1 | 4BQ-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| top | dark | footer button 1 | 4BQ-0 | font family | Geist | Geist | match |
| top | dark | footer button 1 | 4BQ-0 | font size | 14 | 14 | match |
| top | dark | footer button 1 | 4BQ-0 | font weight | 500 | 500 | match |
| top | dark | footer button 1 | 4BQ-0 | line height | 21 | 21 | match |
| top | dark | field |  | present | no | no | match |
| with-form | dark | panel | 4AV-0 | width | 320 | 320 | match |
| with-form | dark | panel | 4AV-0 | height | 187 | 187 | match |
| with-form | dark | panel | 4AV-0 | padding top | 16 | 16 | match |
| with-form | dark | panel | 4AV-0 | padding right | 16 | 16 | match |
| with-form | dark | panel | 4AV-0 | padding bottom | 16 | 16 | match |
| with-form | dark | panel | 4AV-0 | padding left | 16 | 16 | match |
| with-form | dark | panel | 4AV-0 | gap | 16 | 16 | match |
| with-form | dark | panel | 4AV-0 | radius | 8 | 8 | match |
| with-form | dark | panel | 4AV-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| with-form | dark | panel | 4AV-0 | border width | 1 | 1 | match |
| with-form | dark | panel | 4AV-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| with-form | dark | panel | 4AV-0 | box shadow | 0px 4px 8px -2px rgb(0 0 0) a 0.4; 0px 2px 4px -2px rgb(0 0 0) a 0.3 | 0px 4px 8px -2px rgb(0 0 0) a 0.4; 0px 2px 4px -2px rgb(0 0 0) a 0.3 | match |
| with-form | dark | panel | 4AV-0 | placement | bottom | bottom | match |
| with-form | dark | panel | 4AV-0 | gap to trigger | 8 | 8 | match |
| with-form | dark | panel | 4AV-0 | cross axis offset | 0 | 0 | match |
| with-form | dark | header | 4B6-0 | present | yes | yes | match |
| with-form | dark | header | 4B6-0 | left in panel | 17 | 17 | match |
| with-form | dark | header | 4B6-0 | top in panel | 17 | 17 | match |
| with-form | dark | header | 4B6-0 | gap | 4 | 4 | match |
| with-form | dark | header | 4B6-0 | padding end | 32 | 32 | match |
| with-form | dark | body | 4B1-0 | present | yes | yes | match |
| with-form | dark | body | 4B1-0 | left in panel | 17 | 17 | match |
| with-form | dark | body | 4B1-0 | top in panel | 53 | 53 | match |
| with-form | dark | footer | 4AW-0 | present | yes | yes | match |
| with-form | dark | footer | 4AW-0 | left in panel | 17 | 17 | match |
| with-form | dark | footer | 4AW-0 | top in panel | 138 | 138 | match |
| with-form | dark | footer | 4AW-0 | gap | 12 | 12 | match |
| with-form | dark | title | 4B7-0 | present | yes | yes | match |
| with-form | dark | title | 4B7-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | dark | title | 4B7-0 | font family | Geist | Geist | match |
| with-form | dark | title | 4B7-0 | font size | 16 | 16 | match |
| with-form | dark | title | 4B7-0 | font weight | 600 | 600 | match |
| with-form | dark | title | 4B7-0 | line height | 20 | 20 | match |
| with-form | dark | title | 4B7-0 | lines | 1 | 1 | match |
| with-form | dark | description |  | present | no | no | match |
| with-form | dark | bodyText |  | present | no | no | match |
| with-form | dark | closeTrigger |  | present | no | no | match |
| with-form | dark | trigger | 4B8-0 | width | 86 | 86 | match |
| with-form | dark | trigger | 4B8-0 | height | 40 | 40 | match |
| with-form | dark | trigger | 4B8-0 | padding inline | 16 | 16 | match |
| with-form | dark | trigger | 4B8-0 | radius | 6 | 6 | match |
| with-form | dark | trigger | 4B8-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| with-form | dark | trigger | 4B8-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | dark | trigger | 4B8-0 | font family | Geist | Geist | match |
| with-form | dark | trigger | 4B8-0 | font size | 14 | 14 | match |
| with-form | dark | trigger | 4B8-0 | font weight | 500 | 500 | match |
| with-form | dark | trigger | 4B8-0 | line height | 21 | 21 | match |
| with-form | dark | footer button 1 | 4AZ-0 | width | 70 | 70 | match |
| with-form | dark | footer button 1 | 4AZ-0 | height | 32 | 32 | match |
| with-form | dark | footer button 1 | 4AZ-0 | padding inline | 12 | 12 | match |
| with-form | dark | footer button 1 | 4AZ-0 | radius | 6 | 6 | match |
| with-form | dark | footer button 1 | 4AZ-0 | background | transparent | transparent | match |
| with-form | dark | footer button 1 | 4AZ-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | dark | footer button 1 | 4AZ-0 | font family | Geist | Geist | match |
| with-form | dark | footer button 1 | 4AZ-0 | font size | 14 | 14 | match |
| with-form | dark | footer button 1 | 4AZ-0 | font weight | 500 | 500 | match |
| with-form | dark | footer button 1 | 4AZ-0 | line height | 21 | 21 | match |
| with-form | dark | footer button 2 | 4AX-0 | width | 56 | 56 | match |
| with-form | dark | footer button 2 | 4AX-0 | height | 32 | 32 | match |
| with-form | dark | footer button 2 | 4AX-0 | padding inline | 12 | 12 | match |
| with-form | dark | footer button 2 | 4AX-0 | radius | 6 | 6 | match |
| with-form | dark | footer button 2 | 4AX-0 | background | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | dark | footer button 2 | 4AX-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| with-form | dark | footer button 2 | 4AX-0 | font family | Geist | Geist | match |
| with-form | dark | footer button 2 | 4AX-0 | font size | 14 | 14 | match |
| with-form | dark | footer button 2 | 4AX-0 | font weight | 500 | 500 | match |
| with-form | dark | footer button 2 | 4AX-0 | line height | 21 | 21 | match |
| with-form | dark | field | 4B2-0 | present | yes | yes | match |
| with-form | dark | field | 4B2-0 | gap | 8 | 8 | match |
| with-form | dark | field label | 4B5-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | dark | field label | 4B5-0 | font family | Geist | Geist | match |
| with-form | dark | field label | 4B5-0 | font size | 14 | 14 | match |
| with-form | dark | field label | 4B5-0 | font weight | 500 | 500 | match |
| with-form | dark | field label | 4B5-0 | line height | 21 | 21 | match |
| with-form | dark | input | 4B3-0 | width | 286 | 286 | match |
| with-form | dark | input | 4B3-0 | height | 40 | 40 | match |
| with-form | dark | input | 4B3-0 | padding inline | 12 | 12 | match |
| with-form | dark | input | 4B3-0 | radius | 6 | 6 | match |
| with-form | dark | input | 4B3-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| with-form | dark | input | 4B3-0 | border width | 1 | 1 | match |
| with-form | dark | input | 4B3-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |
| with-form | dark | input | 4B3-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| with-form | dark | input | 4B3-0 | font family | Geist | Geist | match |
| with-form | dark | input | 4B3-0 | font size | 14 | 14 | match |
| with-form | dark | input | 4B3-0 | font weight | 400 | 400 | match |
| with-form | dark | input | 4B3-0 | line height | 21 | 21 | match |
| body-only | dark | panel | 4AN-0 | width | 320 | 320 | match |
| body-only | dark | panel | 4AN-0 | height | 76 | 76 | match |
| body-only | dark | panel | 4AN-0 | padding top | 16 | 16 | match |
| body-only | dark | panel | 4AN-0 | padding right | 16 | 16 | match |
| body-only | dark | panel | 4AN-0 | padding bottom | 16 | 16 | match |
| body-only | dark | panel | 4AN-0 | padding left | 16 | 16 | match |
| body-only | dark | panel | 4AN-0 | gap | 16 | 16 | match |
| body-only | dark | panel | 4AN-0 | radius | 8 | 8 | match |
| body-only | dark | panel | 4AN-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |
| body-only | dark | panel | 4AN-0 | border width | 1 | 1 | match |
| body-only | dark | panel | 4AN-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| body-only | dark | panel | 4AN-0 | box shadow | 0px 4px 8px -2px rgb(0 0 0) a 0.4; 0px 2px 4px -2px rgb(0 0 0) a 0.3 | 0px 4px 8px -2px rgb(0 0 0) a 0.4; 0px 2px 4px -2px rgb(0 0 0) a 0.3 | match |
| body-only | dark | panel | 4AN-0 | placement | bottom | bottom | match |
| body-only | dark | panel | 4AN-0 | gap to trigger | 8 | 8 | match |
| body-only | dark | panel | 4AN-0 | cross axis offset | 0 | 0 | match |
| body-only | dark | header |  | present | no | no | match |
| body-only | dark | body | 4AO-0 | present | yes | yes | match |
| body-only | dark | body | 4AO-0 | left in panel | 17 | 17 | match |
| body-only | dark | body | 4AO-0 | top in panel | 17 | 17 | match |
| body-only | dark | footer |  | present | no | no | match |
| body-only | dark | title |  | present | no | no | match |
| body-only | dark | description |  | present | no | no | match |
| body-only | dark | bodyText | 4AP-0 | present | yes | yes | match |
| body-only | dark | bodyText | 4AP-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| body-only | dark | bodyText | 4AP-0 | font family | Geist | Geist | match |
| body-only | dark | bodyText | 4AP-0 | font size | 14 | 14 | match |
| body-only | dark | bodyText | 4AP-0 | font weight | 400 | 400 | match |
| body-only | dark | bodyText | 4AP-0 | line height | 21 | 21 | match |
| body-only | dark | bodyText | 4AP-0 | lines | 2 | 2 | match |
| body-only | dark | closeTrigger |  | present | no | no | match |
| body-only | dark | trigger | 4AQ-0 | width | 120 | 120 | match |
| body-only | dark | trigger | 4AQ-0 | height | 40 | 40 | match |
| body-only | dark | trigger | 4AQ-0 | padding inline | 16 | 16 | match |
| body-only | dark | trigger | 4AQ-0 | radius | 6 | 6 | match |
| body-only | dark | trigger | 4AQ-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| body-only | dark | trigger | 4AQ-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| body-only | dark | trigger | 4AQ-0 | font family | Geist | Geist | match |
| body-only | dark | trigger | 4AQ-0 | font size | 14 | 14 | match |
| body-only | dark | trigger | 4AQ-0 | font weight | 500 | 500 | match |
| body-only | dark | trigger | 4AQ-0 | line height | 21 | 21 | match |
| body-only | dark | field |  | present | no | no | match |
