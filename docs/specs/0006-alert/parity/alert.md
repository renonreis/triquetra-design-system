# Parity: Alert · spec 0006

Code side: Storybook built from the code PR at `873ec84` (the measurement SHA) inside the Playwright Docker image by the compare only visual run, served locally, each of the 7 visual stories opened at 1280 × 720 in light and dark after fonts loaded, values read with `getComputedStyle` and `getBoundingClientRect` by a Playwright script; parts found by `data-scope="alert"` and `data-part`. The branch was then rebased onto `d9e940e` (docs only, no change under `packages/` or `apps/`). Paper side: the bindings of the run's nodes on `3UA-0` (light) and `3XM-0` (dark), read with `get_jsx` at the close, token references resolved to the default brand and theme in `tokens.json` (`-dark` names to the dark mode value); Paper line counts from the scale 2 and scale 1 screenshots of the run. Paper ids per alert come from the artboard structure (cell, root, indicator, content, title, description), not from names.

Normalization follows spec 0005: lengths in px rounded to 0.5; colors as OKLCH with each component rounded half up to 3 decimals (hue shown as `-` when chroma rounds to 0); font family by first name. Icon shape is the ordered list of the SVG's child elements with their geometry (`circle` and `dot` as `cx cy r`, `path` as `d`). A part a story does not render gets one `present` row and no property rows.

Excluded: Paper only chrome (header, captions, Props) and the exact text box width of the title and description (the content width is compared).

**Result: 504 rows, all `match`.**

**Negative control** (read only, in the comparison input only, no Paper write): on `negative`, the Paper border of the alert was swapped from `status.negative.border` to `status.negative.bg` before comparing. The comparison reported exactly two DIFF rows, one per mode:

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| negative | light | root | 3W5-0 | border color | oklch(0.83 0.094 25) | oklch(0.95 0.025 25) | DIFF |
| negative | dark | root | 3YV-0 | border color | oklch(0.44 0.178 25) | oklch(0.23 0.093 25) | DIFF |

## Rows

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | light | root | 3UU-0 | width | 448 | 448 | match |
| default | light | root | 3UU-0 | padding top | 16 | 16 | match |
| default | light | root | 3UU-0 | padding right | 16 | 16 | match |
| default | light | root | 3UU-0 | padding bottom | 16 | 16 | match |
| default | light | root | 3UU-0 | padding left | 16 | 16 | match |
| default | light | root | 3UU-0 | gap | 12 | 12 | match |
| default | light | root | 3UU-0 | radius | 8 | 8 | match |
| default | light | root | 3UU-0 | background | oklch(0.95 0.024 258) | oklch(0.95 0.024 258) | match |
| default | light | root | 3UU-0 | border color | oklch(0.83 0.085 258) | oklch(0.83 0.085 258) | match |
| default | light | root | 3UU-0 | border width | 1 | 1 | match |
| default | light | root | 3UU-0 | border style | solid | solid | match |
| default | light | root | 3UU-0 | color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| default | light | indicator | 3UV-0 | present | yes | yes | match |
| default | light | indicator | 3UV-0 | width | 20 | 20 | match |
| default | light | indicator | 3UV-0 | height | 20 | 20 | match |
| default | light | indicator | 3UV-0 | left | 17 | 17 | match |
| default | light | indicator | 3UV-0 | top | 17 | 17 | match |
| default | light | indicator | 3UV-0 | icon shape | circle:10 10 7.5 \| path:M10 9v4.5 \| dot:10 6.5 1 | circle:10 10 7.5 \| path:M10 9v4.5 \| dot:10 6.5 1 | match |
| default | light | indicator | 3UV-0 | icon stroke | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| default | light | indicator | 3UV-0 | stroke width | 1.5 | 1.5 | match |
| default | light | indicator | 3UV-0 | dot fill | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| default | light | content | 3V0-0 | width | 382 | 382 | match |
| default | light | content | 3V0-0 | left | 49 | 49 | match |
| default | light | content | 3V0-0 | top | 17 | 17 | match |
| default | light | content | 3V0-0 | gap | 4 | 4 | match |
| default | light | title | 3V1-0 | color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| default | light | title | 3V1-0 | font family | Geist | Geist | match |
| default | light | title | 3V1-0 | font size | 14 | 14 | match |
| default | light | title | 3V1-0 | font weight | 600 | 600 | match |
| default | light | title | 3V1-0 | line height | 20 | 20 | match |
| default | light | title | 3V1-0 | lines | 1 | 1 | match |
| default | light | description | 3V2-0 | present | yes | yes | match |
| default | light | description | 3V2-0 | color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| default | light | description | 3V2-0 | font family | Geist | Geist | match |
| default | light | description | 3V2-0 | font size | 14 | 14 | match |
| default | light | description | 3V2-0 | font weight | 400 | 400 | match |
| default | light | description | 3V2-0 | line height | 20 | 20 | match |
| default | light | description | 3V2-0 | lines | 2 | 2 | match |
| neutral | light | root | 3V6-0 | width | 448 | 448 | match |
| neutral | light | root | 3V6-0 | padding top | 16 | 16 | match |
| neutral | light | root | 3V6-0 | padding right | 16 | 16 | match |
| neutral | light | root | 3V6-0 | padding bottom | 16 | 16 | match |
| neutral | light | root | 3V6-0 | padding left | 16 | 16 | match |
| neutral | light | root | 3V6-0 | gap | 12 | 12 | match |
| neutral | light | root | 3V6-0 | radius | 8 | 8 | match |
| neutral | light | root | 3V6-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| neutral | light | root | 3V6-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| neutral | light | root | 3V6-0 | border width | 1 | 1 | match |
| neutral | light | root | 3V6-0 | border style | solid | solid | match |
| neutral | light | root | 3V6-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| neutral | light | indicator | 3V7-0 | present | yes | yes | match |
| neutral | light | indicator | 3V7-0 | width | 20 | 20 | match |
| neutral | light | indicator | 3V7-0 | height | 20 | 20 | match |
| neutral | light | indicator | 3V7-0 | left | 17 | 17 | match |
| neutral | light | indicator | 3V7-0 | top | 17 | 17 | match |
| neutral | light | indicator | 3V7-0 | icon shape | circle:10 10 7.5 \| path:M10 9v4.5 \| dot:10 6.5 1 | circle:10 10 7.5 \| path:M10 9v4.5 \| dot:10 6.5 1 | match |
| neutral | light | indicator | 3V7-0 | icon stroke | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| neutral | light | indicator | 3V7-0 | stroke width | 1.5 | 1.5 | match |
| neutral | light | indicator | 3V7-0 | dot fill | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| neutral | light | content | 3VC-0 | width | 382 | 382 | match |
| neutral | light | content | 3VC-0 | left | 49 | 49 | match |
| neutral | light | content | 3VC-0 | top | 17 | 17 | match |
| neutral | light | content | 3VC-0 | gap | 4 | 4 | match |
| neutral | light | title | 3VD-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| neutral | light | title | 3VD-0 | font family | Geist | Geist | match |
| neutral | light | title | 3VD-0 | font size | 14 | 14 | match |
| neutral | light | title | 3VD-0 | font weight | 600 | 600 | match |
| neutral | light | title | 3VD-0 | line height | 20 | 20 | match |
| neutral | light | title | 3VD-0 | lines | 1 | 1 | match |
| neutral | light | description | 3VE-0 | present | yes | yes | match |
| neutral | light | description | 3VE-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |
| neutral | light | description | 3VE-0 | font family | Geist | Geist | match |
| neutral | light | description | 3VE-0 | font size | 14 | 14 | match |
| neutral | light | description | 3VE-0 | font weight | 400 | 400 | match |
| neutral | light | description | 3VE-0 | line height | 20 | 20 | match |
| neutral | light | description | 3VE-0 | lines | 2 | 2 | match |
| positive | light | root | 3VI-0 | width | 448 | 448 | match |
| positive | light | root | 3VI-0 | padding top | 16 | 16 | match |
| positive | light | root | 3VI-0 | padding right | 16 | 16 | match |
| positive | light | root | 3VI-0 | padding bottom | 16 | 16 | match |
| positive | light | root | 3VI-0 | padding left | 16 | 16 | match |
| positive | light | root | 3VI-0 | gap | 12 | 12 | match |
| positive | light | root | 3VI-0 | radius | 8 | 8 | match |
| positive | light | root | 3VI-0 | background | oklch(0.95 0.043 152) | oklch(0.95 0.043 152) | match |
| positive | light | root | 3VI-0 | border color | oklch(0.83 0.128 152) | oklch(0.83 0.128 152) | match |
| positive | light | root | 3VI-0 | border width | 1 | 1 | match |
| positive | light | root | 3VI-0 | border style | solid | solid | match |
| positive | light | root | 3VI-0 | color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| positive | light | indicator | 3VJ-0 | present | yes | yes | match |
| positive | light | indicator | 3VJ-0 | width | 20 | 20 | match |
| positive | light | indicator | 3VJ-0 | height | 20 | 20 | match |
| positive | light | indicator | 3VJ-0 | left | 17 | 17 | match |
| positive | light | indicator | 3VJ-0 | top | 17 | 17 | match |
| positive | light | indicator | 3VJ-0 | icon shape | circle:10 10 7.5 \| path:M6.75 10.25l2.25 2.25 4.25-4.5 | circle:10 10 7.5 \| path:M6.75 10.25l2.25 2.25 4.25-4.5 | match |
| positive | light | indicator | 3VJ-0 | icon stroke | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| positive | light | indicator | 3VJ-0 | stroke width | 1.5 | 1.5 | match |
| positive | light | indicator | 3VJ-0 | dot fill | none | none | match |
| positive | light | content | 3VN-0 | width | 382 | 382 | match |
| positive | light | content | 3VN-0 | left | 49 | 49 | match |
| positive | light | content | 3VN-0 | top | 17 | 17 | match |
| positive | light | content | 3VN-0 | gap | 4 | 4 | match |
| positive | light | title | 3VO-0 | color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| positive | light | title | 3VO-0 | font family | Geist | Geist | match |
| positive | light | title | 3VO-0 | font size | 14 | 14 | match |
| positive | light | title | 3VO-0 | font weight | 600 | 600 | match |
| positive | light | title | 3VO-0 | line height | 20 | 20 | match |
| positive | light | title | 3VO-0 | lines | 1 | 1 | match |
| positive | light | description | 3VP-0 | present | yes | yes | match |
| positive | light | description | 3VP-0 | color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| positive | light | description | 3VP-0 | font family | Geist | Geist | match |
| positive | light | description | 3VP-0 | font size | 14 | 14 | match |
| positive | light | description | 3VP-0 | font weight | 400 | 400 | match |
| positive | light | description | 3VP-0 | line height | 20 | 20 | match |
| positive | light | description | 3VP-0 | lines | 2 | 2 | match |
| warning | light | root | 3VT-0 | width | 448 | 448 | match |
| warning | light | root | 3VT-0 | padding top | 16 | 16 | match |
| warning | light | root | 3VT-0 | padding right | 16 | 16 | match |
| warning | light | root | 3VT-0 | padding bottom | 16 | 16 | match |
| warning | light | root | 3VT-0 | padding left | 16 | 16 | match |
| warning | light | root | 3VT-0 | gap | 12 | 12 | match |
| warning | light | root | 3VT-0 | radius | 8 | 8 | match |
| warning | light | root | 3VT-0 | background | oklch(0.97 0.041 92) | oklch(0.97 0.041 92) | match |
| warning | light | root | 3VT-0 | border color | oklch(0.9 0.135 92) | oklch(0.9 0.135 92) | match |
| warning | light | root | 3VT-0 | border width | 1 | 1 | match |
| warning | light | root | 3VT-0 | border style | solid | solid | match |
| warning | light | root | 3VT-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| warning | light | indicator | 3VU-0 | present | yes | yes | match |
| warning | light | indicator | 3VU-0 | width | 20 | 20 | match |
| warning | light | indicator | 3VU-0 | height | 20 | 20 | match |
| warning | light | indicator | 3VU-0 | left | 17 | 17 | match |
| warning | light | indicator | 3VU-0 | top | 17 | 17 | match |
| warning | light | indicator | 3VU-0 | icon shape | path:M8.7 3.25 2.4 14.5a1.5 1.5 0 0 0 1.3 2.25h12.6a1.5 1.5 0 0 0 1.3-2.25L11.3 3.25a1.5 1.5 0 0 0-2.6 0Z \| path:M10 7.5v3.75 \| dot:10 14 1 | path:M8.7 3.25 2.4 14.5a1.5 1.5 0 0 0 1.3 2.25h12.6a1.5 1.5 0 0 0 1.3-2.25L11.3 3.25a1.5 1.5 0 0 0-2.6 0Z \| path:M10 7.5v3.75 \| dot:10 14 1 | match |
| warning | light | indicator | 3VU-0 | icon stroke | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| warning | light | indicator | 3VU-0 | stroke width | 1.5 | 1.5 | match |
| warning | light | indicator | 3VU-0 | dot fill | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| warning | light | content | 3VZ-0 | width | 382 | 382 | match |
| warning | light | content | 3VZ-0 | left | 49 | 49 | match |
| warning | light | content | 3VZ-0 | top | 17 | 17 | match |
| warning | light | content | 3VZ-0 | gap | 4 | 4 | match |
| warning | light | title | 3W0-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| warning | light | title | 3W0-0 | font family | Geist | Geist | match |
| warning | light | title | 3W0-0 | font size | 14 | 14 | match |
| warning | light | title | 3W0-0 | font weight | 600 | 600 | match |
| warning | light | title | 3W0-0 | line height | 20 | 20 | match |
| warning | light | title | 3W0-0 | lines | 1 | 1 | match |
| warning | light | description | 3W1-0 | present | yes | yes | match |
| warning | light | description | 3W1-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| warning | light | description | 3W1-0 | font family | Geist | Geist | match |
| warning | light | description | 3W1-0 | font size | 14 | 14 | match |
| warning | light | description | 3W1-0 | font weight | 400 | 400 | match |
| warning | light | description | 3W1-0 | line height | 20 | 20 | match |
| warning | light | description | 3W1-0 | lines | 2 | 2 | match |
| negative | light | root | 3W5-0 | width | 448 | 448 | match |
| negative | light | root | 3W5-0 | padding top | 16 | 16 | match |
| negative | light | root | 3W5-0 | padding right | 16 | 16 | match |
| negative | light | root | 3W5-0 | padding bottom | 16 | 16 | match |
| negative | light | root | 3W5-0 | padding left | 16 | 16 | match |
| negative | light | root | 3W5-0 | gap | 12 | 12 | match |
| negative | light | root | 3W5-0 | radius | 8 | 8 | match |
| negative | light | root | 3W5-0 | background | oklch(0.95 0.025 25) | oklch(0.95 0.025 25) | match |
| negative | light | root | 3W5-0 | border color | oklch(0.83 0.094 25) | oklch(0.83 0.094 25) | match |
| negative | light | root | 3W5-0 | border width | 1 | 1 | match |
| negative | light | root | 3W5-0 | border style | solid | solid | match |
| negative | light | root | 3W5-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| negative | light | indicator | 3W6-0 | present | yes | yes | match |
| negative | light | indicator | 3W6-0 | width | 20 | 20 | match |
| negative | light | indicator | 3W6-0 | height | 20 | 20 | match |
| negative | light | indicator | 3W6-0 | left | 17 | 17 | match |
| negative | light | indicator | 3W6-0 | top | 17 | 17 | match |
| negative | light | indicator | 3W6-0 | icon shape | circle:10 10 7.5 \| path:M7.5 7.5l5 5M12.5 7.5l-5 5 | circle:10 10 7.5 \| path:M7.5 7.5l5 5M12.5 7.5l-5 5 | match |
| negative | light | indicator | 3W6-0 | icon stroke | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| negative | light | indicator | 3W6-0 | stroke width | 1.5 | 1.5 | match |
| negative | light | indicator | 3W6-0 | dot fill | none | none | match |
| negative | light | content | 3WA-0 | width | 382 | 382 | match |
| negative | light | content | 3WA-0 | left | 49 | 49 | match |
| negative | light | content | 3WA-0 | top | 17 | 17 | match |
| negative | light | content | 3WA-0 | gap | 4 | 4 | match |
| negative | light | title | 3WB-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| negative | light | title | 3WB-0 | font family | Geist | Geist | match |
| negative | light | title | 3WB-0 | font size | 14 | 14 | match |
| negative | light | title | 3WB-0 | font weight | 600 | 600 | match |
| negative | light | title | 3WB-0 | line height | 20 | 20 | match |
| negative | light | title | 3WB-0 | lines | 1 | 1 | match |
| negative | light | description | 3WC-0 | present | yes | yes | match |
| negative | light | description | 3WC-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| negative | light | description | 3WC-0 | font family | Geist | Geist | match |
| negative | light | description | 3WC-0 | font size | 14 | 14 | match |
| negative | light | description | 3WC-0 | font weight | 400 | 400 | match |
| negative | light | description | 3WC-0 | line height | 20 | 20 | match |
| negative | light | description | 3WC-0 | lines | 2 | 2 | match |
| title-only | light | root | 3WN-0 | width | 448 | 448 | match |
| title-only | light | root | 3WN-0 | padding top | 16 | 16 | match |
| title-only | light | root | 3WN-0 | padding right | 16 | 16 | match |
| title-only | light | root | 3WN-0 | padding bottom | 16 | 16 | match |
| title-only | light | root | 3WN-0 | padding left | 16 | 16 | match |
| title-only | light | root | 3WN-0 | gap | 12 | 12 | match |
| title-only | light | root | 3WN-0 | radius | 8 | 8 | match |
| title-only | light | root | 3WN-0 | background | oklch(0.95 0.043 152) | oklch(0.95 0.043 152) | match |
| title-only | light | root | 3WN-0 | border color | oklch(0.83 0.128 152) | oklch(0.83 0.128 152) | match |
| title-only | light | root | 3WN-0 | border width | 1 | 1 | match |
| title-only | light | root | 3WN-0 | border style | solid | solid | match |
| title-only | light | root | 3WN-0 | color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| title-only | light | indicator | 3WO-0 | present | yes | yes | match |
| title-only | light | indicator | 3WO-0 | width | 20 | 20 | match |
| title-only | light | indicator | 3WO-0 | height | 20 | 20 | match |
| title-only | light | indicator | 3WO-0 | left | 17 | 17 | match |
| title-only | light | indicator | 3WO-0 | top | 17 | 17 | match |
| title-only | light | indicator | 3WO-0 | icon shape | circle:10 10 7.5 \| path:M6.75 10.25l2.25 2.25 4.25-4.5 | circle:10 10 7.5 \| path:M6.75 10.25l2.25 2.25 4.25-4.5 | match |
| title-only | light | indicator | 3WO-0 | icon stroke | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| title-only | light | indicator | 3WO-0 | stroke width | 1.5 | 1.5 | match |
| title-only | light | indicator | 3WO-0 | dot fill | none | none | match |
| title-only | light | content | 3WS-0 | width | 382 | 382 | match |
| title-only | light | content | 3WS-0 | left | 49 | 49 | match |
| title-only | light | content | 3WS-0 | top | 17 | 17 | match |
| title-only | light | content | 3WS-0 | gap | 4 | 4 | match |
| title-only | light | title | 3WT-0 | color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| title-only | light | title | 3WT-0 | font family | Geist | Geist | match |
| title-only | light | title | 3WT-0 | font size | 14 | 14 | match |
| title-only | light | title | 3WT-0 | font weight | 600 | 600 | match |
| title-only | light | title | 3WT-0 | line height | 20 | 20 | match |
| title-only | light | title | 3WT-0 | lines | 1 | 1 | match |
| title-only | light | description | - | present | no | no | match |
| without-indicator | light | root | 3WX-0 | width | 448 | 448 | match |
| without-indicator | light | root | 3WX-0 | padding top | 16 | 16 | match |
| without-indicator | light | root | 3WX-0 | padding right | 16 | 16 | match |
| without-indicator | light | root | 3WX-0 | padding bottom | 16 | 16 | match |
| without-indicator | light | root | 3WX-0 | padding left | 16 | 16 | match |
| without-indicator | light | root | 3WX-0 | gap | 12 | 12 | match |
| without-indicator | light | root | 3WX-0 | radius | 8 | 8 | match |
| without-indicator | light | root | 3WX-0 | background | oklch(0.97 0.041 92) | oklch(0.97 0.041 92) | match |
| without-indicator | light | root | 3WX-0 | border color | oklch(0.9 0.135 92) | oklch(0.9 0.135 92) | match |
| without-indicator | light | root | 3WX-0 | border width | 1 | 1 | match |
| without-indicator | light | root | 3WX-0 | border style | solid | solid | match |
| without-indicator | light | root | 3WX-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| without-indicator | light | indicator | - | present | no | no | match |
| without-indicator | light | content | 3WY-0 | width | 414 | 414 | match |
| without-indicator | light | content | 3WY-0 | left | 17 | 17 | match |
| without-indicator | light | content | 3WY-0 | top | 17 | 17 | match |
| without-indicator | light | content | 3WY-0 | gap | 4 | 4 | match |
| without-indicator | light | title | 3WZ-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| without-indicator | light | title | 3WZ-0 | font family | Geist | Geist | match |
| without-indicator | light | title | 3WZ-0 | font size | 14 | 14 | match |
| without-indicator | light | title | 3WZ-0 | font weight | 600 | 600 | match |
| without-indicator | light | title | 3WZ-0 | line height | 20 | 20 | match |
| without-indicator | light | title | 3WZ-0 | lines | 1 | 1 | match |
| without-indicator | light | description | 3X0-0 | present | yes | yes | match |
| without-indicator | light | description | 3X0-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| without-indicator | light | description | 3X0-0 | font family | Geist | Geist | match |
| without-indicator | light | description | 3X0-0 | font size | 14 | 14 | match |
| without-indicator | light | description | 3X0-0 | font weight | 400 | 400 | match |
| without-indicator | light | description | 3X0-0 | line height | 20 | 20 | match |
| without-indicator | light | description | 3X0-0 | lines | 1 | 1 | match |
| default | dark | root | 403-0 | width | 448 | 448 | match |
| default | dark | root | 403-0 | padding top | 16 | 16 | match |
| default | dark | root | 403-0 | padding right | 16 | 16 | match |
| default | dark | root | 403-0 | padding bottom | 16 | 16 | match |
| default | dark | root | 403-0 | padding left | 16 | 16 | match |
| default | dark | root | 403-0 | gap | 12 | 12 | match |
| default | dark | root | 403-0 | radius | 8 | 8 | match |
| default | dark | root | 403-0 | background | oklch(0.23 0.085 258) | oklch(0.23 0.085 258) | match |
| default | dark | root | 403-0 | border color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| default | dark | root | 403-0 | border width | 1 | 1 | match |
| default | dark | root | 403-0 | border style | solid | solid | match |
| default | dark | root | 403-0 | color | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| default | dark | indicator | 407-0 | present | yes | yes | match |
| default | dark | indicator | 407-0 | width | 20 | 20 | match |
| default | dark | indicator | 407-0 | height | 20 | 20 | match |
| default | dark | indicator | 407-0 | left | 17 | 17 | match |
| default | dark | indicator | 407-0 | top | 17 | 17 | match |
| default | dark | indicator | 407-0 | icon shape | circle:10 10 7.5 \| path:M10 9v4.5 \| dot:10 6.5 1 | circle:10 10 7.5 \| path:M10 9v4.5 \| dot:10 6.5 1 | match |
| default | dark | indicator | 407-0 | icon stroke | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| default | dark | indicator | 407-0 | stroke width | 1.5 | 1.5 | match |
| default | dark | indicator | 407-0 | dot fill | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| default | dark | content | 404-0 | width | 382 | 382 | match |
| default | dark | content | 404-0 | left | 49 | 49 | match |
| default | dark | content | 404-0 | top | 17 | 17 | match |
| default | dark | content | 404-0 | gap | 4 | 4 | match |
| default | dark | title | 406-0 | color | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| default | dark | title | 406-0 | font family | Geist | Geist | match |
| default | dark | title | 406-0 | font size | 14 | 14 | match |
| default | dark | title | 406-0 | font weight | 600 | 600 | match |
| default | dark | title | 406-0 | line height | 20 | 20 | match |
| default | dark | title | 406-0 | lines | 1 | 1 | match |
| default | dark | description | 405-0 | present | yes | yes | match |
| default | dark | description | 405-0 | color | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| default | dark | description | 405-0 | font family | Geist | Geist | match |
| default | dark | description | 405-0 | font size | 14 | 14 | match |
| default | dark | description | 405-0 | font weight | 400 | 400 | match |
| default | dark | description | 405-0 | line height | 20 | 20 | match |
| default | dark | description | 405-0 | lines | 2 | 2 | match |
| neutral | dark | root | 3ZS-0 | width | 448 | 448 | match |
| neutral | dark | root | 3ZS-0 | padding top | 16 | 16 | match |
| neutral | dark | root | 3ZS-0 | padding right | 16 | 16 | match |
| neutral | dark | root | 3ZS-0 | padding bottom | 16 | 16 | match |
| neutral | dark | root | 3ZS-0 | padding left | 16 | 16 | match |
| neutral | dark | root | 3ZS-0 | gap | 12 | 12 | match |
| neutral | dark | root | 3ZS-0 | radius | 8 | 8 | match |
| neutral | dark | root | 3ZS-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| neutral | dark | root | 3ZS-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| neutral | dark | root | 3ZS-0 | border width | 1 | 1 | match |
| neutral | dark | root | 3ZS-0 | border style | solid | solid | match |
| neutral | dark | root | 3ZS-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| neutral | dark | indicator | 3ZW-0 | present | yes | yes | match |
| neutral | dark | indicator | 3ZW-0 | width | 20 | 20 | match |
| neutral | dark | indicator | 3ZW-0 | height | 20 | 20 | match |
| neutral | dark | indicator | 3ZW-0 | left | 17 | 17 | match |
| neutral | dark | indicator | 3ZW-0 | top | 17 | 17 | match |
| neutral | dark | indicator | 3ZW-0 | icon shape | circle:10 10 7.5 \| path:M10 9v4.5 \| dot:10 6.5 1 | circle:10 10 7.5 \| path:M10 9v4.5 \| dot:10 6.5 1 | match |
| neutral | dark | indicator | 3ZW-0 | icon stroke | oklch(1 0 -) | oklch(1 0 -) | match |
| neutral | dark | indicator | 3ZW-0 | stroke width | 1.5 | 1.5 | match |
| neutral | dark | indicator | 3ZW-0 | dot fill | oklch(1 0 -) | oklch(1 0 -) | match |
| neutral | dark | content | 3ZT-0 | width | 382 | 382 | match |
| neutral | dark | content | 3ZT-0 | left | 49 | 49 | match |
| neutral | dark | content | 3ZT-0 | top | 17 | 17 | match |
| neutral | dark | content | 3ZT-0 | gap | 4 | 4 | match |
| neutral | dark | title | 3ZV-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| neutral | dark | title | 3ZV-0 | font family | Geist | Geist | match |
| neutral | dark | title | 3ZV-0 | font size | 14 | 14 | match |
| neutral | dark | title | 3ZV-0 | font weight | 600 | 600 | match |
| neutral | dark | title | 3ZV-0 | line height | 20 | 20 | match |
| neutral | dark | title | 3ZV-0 | lines | 1 | 1 | match |
| neutral | dark | description | 3ZU-0 | present | yes | yes | match |
| neutral | dark | description | 3ZU-0 | color | oklch(1 0 -) | oklch(1 0 -) | match |
| neutral | dark | description | 3ZU-0 | font family | Geist | Geist | match |
| neutral | dark | description | 3ZU-0 | font size | 14 | 14 | match |
| neutral | dark | description | 3ZU-0 | font weight | 400 | 400 | match |
| neutral | dark | description | 3ZU-0 | line height | 20 | 20 | match |
| neutral | dark | description | 3ZU-0 | lines | 2 | 2 | match |
| positive | dark | root | 3ZH-0 | width | 448 | 448 | match |
| positive | dark | root | 3ZH-0 | padding top | 16 | 16 | match |
| positive | dark | root | 3ZH-0 | padding right | 16 | 16 | match |
| positive | dark | root | 3ZH-0 | padding bottom | 16 | 16 | match |
| positive | dark | root | 3ZH-0 | padding left | 16 | 16 | match |
| positive | dark | root | 3ZH-0 | gap | 12 | 12 | match |
| positive | dark | root | 3ZH-0 | radius | 8 | 8 | match |
| positive | dark | root | 3ZH-0 | background | oklch(0.23 0.061 152) | oklch(0.23 0.061 152) | match |
| positive | dark | root | 3ZH-0 | border color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| positive | dark | root | 3ZH-0 | border width | 1 | 1 | match |
| positive | dark | root | 3ZH-0 | border style | solid | solid | match |
| positive | dark | root | 3ZH-0 | color | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| positive | dark | indicator | 3ZL-0 | present | yes | yes | match |
| positive | dark | indicator | 3ZL-0 | width | 20 | 20 | match |
| positive | dark | indicator | 3ZL-0 | height | 20 | 20 | match |
| positive | dark | indicator | 3ZL-0 | left | 17 | 17 | match |
| positive | dark | indicator | 3ZL-0 | top | 17 | 17 | match |
| positive | dark | indicator | 3ZL-0 | icon shape | circle:10 10 7.5 \| path:M6.75 10.25l2.25 2.25 4.25-4.5 | circle:10 10 7.5 \| path:M6.75 10.25l2.25 2.25 4.25-4.5 | match |
| positive | dark | indicator | 3ZL-0 | icon stroke | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| positive | dark | indicator | 3ZL-0 | stroke width | 1.5 | 1.5 | match |
| positive | dark | indicator | 3ZL-0 | dot fill | none | none | match |
| positive | dark | content | 3ZI-0 | width | 382 | 382 | match |
| positive | dark | content | 3ZI-0 | left | 49 | 49 | match |
| positive | dark | content | 3ZI-0 | top | 17 | 17 | match |
| positive | dark | content | 3ZI-0 | gap | 4 | 4 | match |
| positive | dark | title | 3ZK-0 | color | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| positive | dark | title | 3ZK-0 | font family | Geist | Geist | match |
| positive | dark | title | 3ZK-0 | font size | 14 | 14 | match |
| positive | dark | title | 3ZK-0 | font weight | 600 | 600 | match |
| positive | dark | title | 3ZK-0 | line height | 20 | 20 | match |
| positive | dark | title | 3ZK-0 | lines | 1 | 1 | match |
| positive | dark | description | 3ZJ-0 | present | yes | yes | match |
| positive | dark | description | 3ZJ-0 | color | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| positive | dark | description | 3ZJ-0 | font family | Geist | Geist | match |
| positive | dark | description | 3ZJ-0 | font size | 14 | 14 | match |
| positive | dark | description | 3ZJ-0 | font weight | 400 | 400 | match |
| positive | dark | description | 3ZJ-0 | line height | 20 | 20 | match |
| positive | dark | description | 3ZJ-0 | lines | 2 | 2 | match |
| warning | dark | root | 3Z6-0 | width | 448 | 448 | match |
| warning | dark | root | 3Z6-0 | padding top | 16 | 16 | match |
| warning | dark | root | 3Z6-0 | padding right | 16 | 16 | match |
| warning | dark | root | 3Z6-0 | padding bottom | 16 | 16 | match |
| warning | dark | root | 3Z6-0 | padding left | 16 | 16 | match |
| warning | dark | root | 3Z6-0 | gap | 12 | 12 | match |
| warning | dark | root | 3Z6-0 | radius | 8 | 8 | match |
| warning | dark | root | 3Z6-0 | background | oklch(0.3 0.061 92) | oklch(0.3 0.061 92) | match |
| warning | dark | root | 3Z6-0 | border color | oklch(0.55 0.113 92) | oklch(0.55 0.113 92) | match |
| warning | dark | root | 3Z6-0 | border width | 1 | 1 | match |
| warning | dark | root | 3Z6-0 | border style | solid | solid | match |
| warning | dark | root | 3Z6-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| warning | dark | indicator | 3ZA-0 | present | yes | yes | match |
| warning | dark | indicator | 3ZA-0 | width | 20 | 20 | match |
| warning | dark | indicator | 3ZA-0 | height | 20 | 20 | match |
| warning | dark | indicator | 3ZA-0 | left | 17 | 17 | match |
| warning | dark | indicator | 3ZA-0 | top | 17 | 17 | match |
| warning | dark | indicator | 3ZA-0 | icon shape | path:M8.7 3.25 2.4 14.5a1.5 1.5 0 0 0 1.3 2.25h12.6a1.5 1.5 0 0 0 1.3-2.25L11.3 3.25a1.5 1.5 0 0 0-2.6 0Z \| path:M10 7.5v3.75 \| dot:10 14 1 | path:M8.7 3.25 2.4 14.5a1.5 1.5 0 0 0 1.3 2.25h12.6a1.5 1.5 0 0 0 1.3-2.25L11.3 3.25a1.5 1.5 0 0 0-2.6 0Z \| path:M10 7.5v3.75 \| dot:10 14 1 | match |
| warning | dark | indicator | 3ZA-0 | icon stroke | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| warning | dark | indicator | 3ZA-0 | stroke width | 1.5 | 1.5 | match |
| warning | dark | indicator | 3ZA-0 | dot fill | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| warning | dark | content | 3Z7-0 | width | 382 | 382 | match |
| warning | dark | content | 3Z7-0 | left | 49 | 49 | match |
| warning | dark | content | 3Z7-0 | top | 17 | 17 | match |
| warning | dark | content | 3Z7-0 | gap | 4 | 4 | match |
| warning | dark | title | 3Z9-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| warning | dark | title | 3Z9-0 | font family | Geist | Geist | match |
| warning | dark | title | 3Z9-0 | font size | 14 | 14 | match |
| warning | dark | title | 3Z9-0 | font weight | 600 | 600 | match |
| warning | dark | title | 3Z9-0 | line height | 20 | 20 | match |
| warning | dark | title | 3Z9-0 | lines | 1 | 1 | match |
| warning | dark | description | 3Z8-0 | present | yes | yes | match |
| warning | dark | description | 3Z8-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| warning | dark | description | 3Z8-0 | font family | Geist | Geist | match |
| warning | dark | description | 3Z8-0 | font size | 14 | 14 | match |
| warning | dark | description | 3Z8-0 | font weight | 400 | 400 | match |
| warning | dark | description | 3Z8-0 | line height | 20 | 20 | match |
| warning | dark | description | 3Z8-0 | lines | 2 | 2 | match |
| negative | dark | root | 3YV-0 | width | 448 | 448 | match |
| negative | dark | root | 3YV-0 | padding top | 16 | 16 | match |
| negative | dark | root | 3YV-0 | padding right | 16 | 16 | match |
| negative | dark | root | 3YV-0 | padding bottom | 16 | 16 | match |
| negative | dark | root | 3YV-0 | padding left | 16 | 16 | match |
| negative | dark | root | 3YV-0 | gap | 12 | 12 | match |
| negative | dark | root | 3YV-0 | radius | 8 | 8 | match |
| negative | dark | root | 3YV-0 | background | oklch(0.23 0.093 25) | oklch(0.23 0.093 25) | match |
| negative | dark | root | 3YV-0 | border color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| negative | dark | root | 3YV-0 | border width | 1 | 1 | match |
| negative | dark | root | 3YV-0 | border style | solid | solid | match |
| negative | dark | root | 3YV-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| negative | dark | indicator | 3YZ-0 | present | yes | yes | match |
| negative | dark | indicator | 3YZ-0 | width | 20 | 20 | match |
| negative | dark | indicator | 3YZ-0 | height | 20 | 20 | match |
| negative | dark | indicator | 3YZ-0 | left | 17 | 17 | match |
| negative | dark | indicator | 3YZ-0 | top | 17 | 17 | match |
| negative | dark | indicator | 3YZ-0 | icon shape | circle:10 10 7.5 \| path:M7.5 7.5l5 5M12.5 7.5l-5 5 | circle:10 10 7.5 \| path:M7.5 7.5l5 5M12.5 7.5l-5 5 | match |
| negative | dark | indicator | 3YZ-0 | icon stroke | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| negative | dark | indicator | 3YZ-0 | stroke width | 1.5 | 1.5 | match |
| negative | dark | indicator | 3YZ-0 | dot fill | none | none | match |
| negative | dark | content | 3YW-0 | width | 382 | 382 | match |
| negative | dark | content | 3YW-0 | left | 49 | 49 | match |
| negative | dark | content | 3YW-0 | top | 17 | 17 | match |
| negative | dark | content | 3YW-0 | gap | 4 | 4 | match |
| negative | dark | title | 3YY-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| negative | dark | title | 3YY-0 | font family | Geist | Geist | match |
| negative | dark | title | 3YY-0 | font size | 14 | 14 | match |
| negative | dark | title | 3YY-0 | font weight | 600 | 600 | match |
| negative | dark | title | 3YY-0 | line height | 20 | 20 | match |
| negative | dark | title | 3YY-0 | lines | 1 | 1 | match |
| negative | dark | description | 3YX-0 | present | yes | yes | match |
| negative | dark | description | 3YX-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| negative | dark | description | 3YX-0 | font family | Geist | Geist | match |
| negative | dark | description | 3YX-0 | font size | 14 | 14 | match |
| negative | dark | description | 3YX-0 | font weight | 400 | 400 | match |
| negative | dark | description | 3YX-0 | line height | 20 | 20 | match |
| negative | dark | description | 3YX-0 | lines | 2 | 2 | match |
| title-only | dark | root | 3YG-0 | width | 448 | 448 | match |
| title-only | dark | root | 3YG-0 | padding top | 16 | 16 | match |
| title-only | dark | root | 3YG-0 | padding right | 16 | 16 | match |
| title-only | dark | root | 3YG-0 | padding bottom | 16 | 16 | match |
| title-only | dark | root | 3YG-0 | padding left | 16 | 16 | match |
| title-only | dark | root | 3YG-0 | gap | 12 | 12 | match |
| title-only | dark | root | 3YG-0 | radius | 8 | 8 | match |
| title-only | dark | root | 3YG-0 | background | oklch(0.23 0.061 152) | oklch(0.23 0.061 152) | match |
| title-only | dark | root | 3YG-0 | border color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| title-only | dark | root | 3YG-0 | border width | 1 | 1 | match |
| title-only | dark | root | 3YG-0 | border style | solid | solid | match |
| title-only | dark | root | 3YG-0 | color | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| title-only | dark | indicator | 3YJ-0 | present | yes | yes | match |
| title-only | dark | indicator | 3YJ-0 | width | 20 | 20 | match |
| title-only | dark | indicator | 3YJ-0 | height | 20 | 20 | match |
| title-only | dark | indicator | 3YJ-0 | left | 17 | 17 | match |
| title-only | dark | indicator | 3YJ-0 | top | 17 | 17 | match |
| title-only | dark | indicator | 3YJ-0 | icon shape | circle:10 10 7.5 \| path:M6.75 10.25l2.25 2.25 4.25-4.5 | circle:10 10 7.5 \| path:M6.75 10.25l2.25 2.25 4.25-4.5 | match |
| title-only | dark | indicator | 3YJ-0 | icon stroke | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| title-only | dark | indicator | 3YJ-0 | stroke width | 1.5 | 1.5 | match |
| title-only | dark | indicator | 3YJ-0 | dot fill | none | none | match |
| title-only | dark | content | 3YH-0 | width | 382 | 382 | match |
| title-only | dark | content | 3YH-0 | left | 49 | 49 | match |
| title-only | dark | content | 3YH-0 | top | 17 | 17 | match |
| title-only | dark | content | 3YH-0 | gap | 4 | 4 | match |
| title-only | dark | title | 3YI-0 | color | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| title-only | dark | title | 3YI-0 | font family | Geist | Geist | match |
| title-only | dark | title | 3YI-0 | font size | 14 | 14 | match |
| title-only | dark | title | 3YI-0 | font weight | 600 | 600 | match |
| title-only | dark | title | 3YI-0 | line height | 20 | 20 | match |
| title-only | dark | title | 3YI-0 | lines | 1 | 1 | match |
| title-only | dark | description | - | present | no | no | match |
| without-indicator | dark | root | 3YA-0 | width | 448 | 448 | match |
| without-indicator | dark | root | 3YA-0 | padding top | 16 | 16 | match |
| without-indicator | dark | root | 3YA-0 | padding right | 16 | 16 | match |
| without-indicator | dark | root | 3YA-0 | padding bottom | 16 | 16 | match |
| without-indicator | dark | root | 3YA-0 | padding left | 16 | 16 | match |
| without-indicator | dark | root | 3YA-0 | gap | 12 | 12 | match |
| without-indicator | dark | root | 3YA-0 | radius | 8 | 8 | match |
| without-indicator | dark | root | 3YA-0 | background | oklch(0.3 0.061 92) | oklch(0.3 0.061 92) | match |
| without-indicator | dark | root | 3YA-0 | border color | oklch(0.55 0.113 92) | oklch(0.55 0.113 92) | match |
| without-indicator | dark | root | 3YA-0 | border width | 1 | 1 | match |
| without-indicator | dark | root | 3YA-0 | border style | solid | solid | match |
| without-indicator | dark | root | 3YA-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| without-indicator | dark | indicator | - | present | no | no | match |
| without-indicator | dark | content | 3YB-0 | width | 414 | 414 | match |
| without-indicator | dark | content | 3YB-0 | left | 17 | 17 | match |
| without-indicator | dark | content | 3YB-0 | top | 17 | 17 | match |
| without-indicator | dark | content | 3YB-0 | gap | 4 | 4 | match |
| without-indicator | dark | title | 3YD-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| without-indicator | dark | title | 3YD-0 | font family | Geist | Geist | match |
| without-indicator | dark | title | 3YD-0 | font size | 14 | 14 | match |
| without-indicator | dark | title | 3YD-0 | font weight | 600 | 600 | match |
| without-indicator | dark | title | 3YD-0 | line height | 20 | 20 | match |
| without-indicator | dark | title | 3YD-0 | lines | 1 | 1 | match |
| without-indicator | dark | description | 3YC-0 | present | yes | yes | match |
| without-indicator | dark | description | 3YC-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| without-indicator | dark | description | 3YC-0 | font family | Geist | Geist | match |
| without-indicator | dark | description | 3YC-0 | font size | 14 | 14 | match |
| without-indicator | dark | description | 3YC-0 | font weight | 400 | 400 | match |
| without-indicator | dark | description | 3YC-0 | line height | 20 | 20 | match |
| without-indicator | dark | description | 3YC-0 | lines | 1 | 1 | match |
