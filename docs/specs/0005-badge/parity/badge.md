# Parity: Badge · spec 0005

Code side: Storybook built from the code PR at `5116479` (the measurement SHA; the branch was then rebased onto `1dd5f51` with no change under `packages/` or `apps/`, commit `5b7a5ac`) inside the Playwright Docker image, served locally, each of the 7 visual stories opened at 1280 × 720 in light and dark after its `play` finished and fonts loaded, values read with `getComputedStyle` and `getBoundingClientRect` by a Playwright script. Paper side: the bindings of the run's nodes on `3OS-0` (light) and `3RR-0` (dark), read with `get_jsx` at the close, token references resolved to the default brand and theme in `tokens.json` (`-dark` names to the dark mode value). Paper ids per badge come from the artboard structure (row, cell, badge), not from names.

Normalization follows spec 0002: lengths in px rounded to 0.5; colors as OKLCH with each component rounded half up to 3 decimals (hue shown as `-` when chroma rounds to 0); radius reported as `full` when it is at least half the height; font family by first name. Gaps and vertical centering are compared where the spec asks for positions (Sizes and Count); badge width is excluded, since it follows from padding and text.

Excluded: Paper only chrome (header, captions, Props) and the `sr-only` text in `Count`. Every badge label is one line in both places (Paper scale 2 screenshot, code text range with one line box).

**Result: 554 rows, all `match`.**

**Negative control** (read only, in the comparison input only, no Paper write): on `positive`, the Paper border of the badge was swapped from `status.positive.border` to `status.positive.bg` before comparing. The comparison reported exactly two DIFF rows, one per mode:

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| positive | light | Active badge | 3PE-0 | border color | oklch(0.83 0.128 152) | oklch(0.95 0.043 152) | DIFF |
| positive | dark | Active badge | 3TT-0 | border color | oklch(0.44 0.116 152) | oklch(0.23 0.061 152) | DIFF |

## Rows

| Story | Mode | Part | Paper node | Property | Code value | Paper value | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | light | Draft badge | 3P9-0 | height | 24 | 24 | match |
| default | light | Draft badge | 3P9-0 | padding left | 8 | 8 | match |
| default | light | Draft badge | 3P9-0 | padding right | 8 | 8 | match |
| default | light | Draft badge | 3P9-0 | gap | 4 | 4 | match |
| default | light | Draft badge | 3P9-0 | radius | full | full | match |
| default | light | Draft badge | 3P9-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| default | light | Draft badge | 3P9-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| default | light | Draft badge | 3P9-0 | border width | 1 | 1 | match |
| default | light | Draft badge | 3P9-0 | border style | solid | solid | match |
| default | light | Draft badge | 3P9-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| default | light | Draft badge | 3P9-0 | font family | Geist | Geist | match |
| default | light | Draft badge | 3P9-0 | font size | 14 | 14 | match |
| default | light | Draft badge | 3P9-0 | font weight | 500 | 500 | match |
| default | light | Draft badge | 3P9-0 | line height | 20 | 20 | match |
| default | light | Draft badge | 3P9-0 | lines | 1 | 1 | match |
| positive | light | Active badge | 3PE-0 | height | 24 | 24 | match |
| positive | light | Active badge | 3PE-0 | padding left | 8 | 8 | match |
| positive | light | Active badge | 3PE-0 | padding right | 8 | 8 | match |
| positive | light | Active badge | 3PE-0 | gap | 4 | 4 | match |
| positive | light | Active badge | 3PE-0 | radius | full | full | match |
| positive | light | Active badge | 3PE-0 | background | oklch(0.95 0.043 152) | oklch(0.95 0.043 152) | match |
| positive | light | Active badge | 3PE-0 | border color | oklch(0.83 0.128 152) | oklch(0.83 0.128 152) | match |
| positive | light | Active badge | 3PE-0 | border width | 1 | 1 | match |
| positive | light | Active badge | 3PE-0 | border style | solid | solid | match |
| positive | light | Active badge | 3PE-0 | color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| positive | light | Active badge | 3PE-0 | font family | Geist | Geist | match |
| positive | light | Active badge | 3PE-0 | font size | 14 | 14 | match |
| positive | light | Active badge | 3PE-0 | font weight | 500 | 500 | match |
| positive | light | Active badge | 3PE-0 | line height | 20 | 20 | match |
| positive | light | Active badge | 3PE-0 | lines | 1 | 1 | match |
| warning | light | Pending badge | 3PJ-0 | height | 24 | 24 | match |
| warning | light | Pending badge | 3PJ-0 | padding left | 8 | 8 | match |
| warning | light | Pending badge | 3PJ-0 | padding right | 8 | 8 | match |
| warning | light | Pending badge | 3PJ-0 | gap | 4 | 4 | match |
| warning | light | Pending badge | 3PJ-0 | radius | full | full | match |
| warning | light | Pending badge | 3PJ-0 | background | oklch(0.97 0.041 92) | oklch(0.97 0.041 92) | match |
| warning | light | Pending badge | 3PJ-0 | border color | oklch(0.9 0.135 92) | oklch(0.9 0.135 92) | match |
| warning | light | Pending badge | 3PJ-0 | border width | 1 | 1 | match |
| warning | light | Pending badge | 3PJ-0 | border style | solid | solid | match |
| warning | light | Pending badge | 3PJ-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| warning | light | Pending badge | 3PJ-0 | font family | Geist | Geist | match |
| warning | light | Pending badge | 3PJ-0 | font size | 14 | 14 | match |
| warning | light | Pending badge | 3PJ-0 | font weight | 500 | 500 | match |
| warning | light | Pending badge | 3PJ-0 | line height | 20 | 20 | match |
| warning | light | Pending badge | 3PJ-0 | lines | 1 | 1 | match |
| negative | light | Failed badge | 3PO-0 | height | 24 | 24 | match |
| negative | light | Failed badge | 3PO-0 | padding left | 8 | 8 | match |
| negative | light | Failed badge | 3PO-0 | padding right | 8 | 8 | match |
| negative | light | Failed badge | 3PO-0 | gap | 4 | 4 | match |
| negative | light | Failed badge | 3PO-0 | radius | full | full | match |
| negative | light | Failed badge | 3PO-0 | background | oklch(0.95 0.025 25) | oklch(0.95 0.025 25) | match |
| negative | light | Failed badge | 3PO-0 | border color | oklch(0.83 0.094 25) | oklch(0.83 0.094 25) | match |
| negative | light | Failed badge | 3PO-0 | border width | 1 | 1 | match |
| negative | light | Failed badge | 3PO-0 | border style | solid | solid | match |
| negative | light | Failed badge | 3PO-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| negative | light | Failed badge | 3PO-0 | font family | Geist | Geist | match |
| negative | light | Failed badge | 3PO-0 | font size | 14 | 14 | match |
| negative | light | Failed badge | 3PO-0 | font weight | 500 | 500 | match |
| negative | light | Failed badge | 3PO-0 | line height | 20 | 20 | match |
| negative | light | Failed badge | 3PO-0 | lines | 1 | 1 | match |
| informative | light | New badge | 3PT-0 | height | 24 | 24 | match |
| informative | light | New badge | 3PT-0 | padding left | 8 | 8 | match |
| informative | light | New badge | 3PT-0 | padding right | 8 | 8 | match |
| informative | light | New badge | 3PT-0 | gap | 4 | 4 | match |
| informative | light | New badge | 3PT-0 | radius | full | full | match |
| informative | light | New badge | 3PT-0 | background | oklch(0.95 0.024 258) | oklch(0.95 0.024 258) | match |
| informative | light | New badge | 3PT-0 | border color | oklch(0.83 0.085 258) | oklch(0.83 0.085 258) | match |
| informative | light | New badge | 3PT-0 | border width | 1 | 1 | match |
| informative | light | New badge | 3PT-0 | border style | solid | solid | match |
| informative | light | New badge | 3PT-0 | color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| informative | light | New badge | 3PT-0 | font family | Geist | Geist | match |
| informative | light | New badge | 3PT-0 | font size | 14 | 14 | match |
| informative | light | New badge | 3PT-0 | font weight | 500 | 500 | match |
| informative | light | New badge | 3PT-0 | line height | 20 | 20 | match |
| informative | light | New badge | 3PT-0 | lines | 1 | 1 | match |
| sizes | light | Draft sm badge | 3Q6-0 | height | 20 | 20 | match |
| sizes | light | Draft sm badge | 3Q6-0 | padding left | 8 | 8 | match |
| sizes | light | Draft sm badge | 3Q6-0 | padding right | 8 | 8 | match |
| sizes | light | Draft sm badge | 3Q6-0 | gap | 4 | 4 | match |
| sizes | light | Draft sm badge | 3Q6-0 | radius | full | full | match |
| sizes | light | Draft sm badge | 3Q6-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| sizes | light | Draft sm badge | 3Q6-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| sizes | light | Draft sm badge | 3Q6-0 | border width | 1 | 1 | match |
| sizes | light | Draft sm badge | 3Q6-0 | border style | solid | solid | match |
| sizes | light | Draft sm badge | 3Q6-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| sizes | light | Draft sm badge | 3Q6-0 | font family | Geist | Geist | match |
| sizes | light | Draft sm badge | 3Q6-0 | font size | 12 | 12 | match |
| sizes | light | Draft sm badge | 3Q6-0 | font weight | 500 | 500 | match |
| sizes | light | Draft sm badge | 3Q6-0 | line height | 16 | 16 | match |
| sizes | light | Draft sm badge | 3Q6-0 | lines | 1 | 1 | match |
| sizes | light | Active sm badge | 3Q8-0 | height | 20 | 20 | match |
| sizes | light | Active sm badge | 3Q8-0 | padding left | 8 | 8 | match |
| sizes | light | Active sm badge | 3Q8-0 | padding right | 8 | 8 | match |
| sizes | light | Active sm badge | 3Q8-0 | gap | 4 | 4 | match |
| sizes | light | Active sm badge | 3Q8-0 | radius | full | full | match |
| sizes | light | Active sm badge | 3Q8-0 | background | oklch(0.95 0.043 152) | oklch(0.95 0.043 152) | match |
| sizes | light | Active sm badge | 3Q8-0 | border color | oklch(0.83 0.128 152) | oklch(0.83 0.128 152) | match |
| sizes | light | Active sm badge | 3Q8-0 | border width | 1 | 1 | match |
| sizes | light | Active sm badge | 3Q8-0 | border style | solid | solid | match |
| sizes | light | Active sm badge | 3Q8-0 | color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| sizes | light | Active sm badge | 3Q8-0 | font family | Geist | Geist | match |
| sizes | light | Active sm badge | 3Q8-0 | font size | 12 | 12 | match |
| sizes | light | Active sm badge | 3Q8-0 | font weight | 500 | 500 | match |
| sizes | light | Active sm badge | 3Q8-0 | line height | 16 | 16 | match |
| sizes | light | Active sm badge | 3Q8-0 | lines | 1 | 1 | match |
| sizes | light | Pending sm badge | 3QA-0 | height | 20 | 20 | match |
| sizes | light | Pending sm badge | 3QA-0 | padding left | 8 | 8 | match |
| sizes | light | Pending sm badge | 3QA-0 | padding right | 8 | 8 | match |
| sizes | light | Pending sm badge | 3QA-0 | gap | 4 | 4 | match |
| sizes | light | Pending sm badge | 3QA-0 | radius | full | full | match |
| sizes | light | Pending sm badge | 3QA-0 | background | oklch(0.97 0.041 92) | oklch(0.97 0.041 92) | match |
| sizes | light | Pending sm badge | 3QA-0 | border color | oklch(0.9 0.135 92) | oklch(0.9 0.135 92) | match |
| sizes | light | Pending sm badge | 3QA-0 | border width | 1 | 1 | match |
| sizes | light | Pending sm badge | 3QA-0 | border style | solid | solid | match |
| sizes | light | Pending sm badge | 3QA-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| sizes | light | Pending sm badge | 3QA-0 | font family | Geist | Geist | match |
| sizes | light | Pending sm badge | 3QA-0 | font size | 12 | 12 | match |
| sizes | light | Pending sm badge | 3QA-0 | font weight | 500 | 500 | match |
| sizes | light | Pending sm badge | 3QA-0 | line height | 16 | 16 | match |
| sizes | light | Pending sm badge | 3QA-0 | lines | 1 | 1 | match |
| sizes | light | Failed sm badge | 3QC-0 | height | 20 | 20 | match |
| sizes | light | Failed sm badge | 3QC-0 | padding left | 8 | 8 | match |
| sizes | light | Failed sm badge | 3QC-0 | padding right | 8 | 8 | match |
| sizes | light | Failed sm badge | 3QC-0 | gap | 4 | 4 | match |
| sizes | light | Failed sm badge | 3QC-0 | radius | full | full | match |
| sizes | light | Failed sm badge | 3QC-0 | background | oklch(0.95 0.025 25) | oklch(0.95 0.025 25) | match |
| sizes | light | Failed sm badge | 3QC-0 | border color | oklch(0.83 0.094 25) | oklch(0.83 0.094 25) | match |
| sizes | light | Failed sm badge | 3QC-0 | border width | 1 | 1 | match |
| sizes | light | Failed sm badge | 3QC-0 | border style | solid | solid | match |
| sizes | light | Failed sm badge | 3QC-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| sizes | light | Failed sm badge | 3QC-0 | font family | Geist | Geist | match |
| sizes | light | Failed sm badge | 3QC-0 | font size | 12 | 12 | match |
| sizes | light | Failed sm badge | 3QC-0 | font weight | 500 | 500 | match |
| sizes | light | Failed sm badge | 3QC-0 | line height | 16 | 16 | match |
| sizes | light | Failed sm badge | 3QC-0 | lines | 1 | 1 | match |
| sizes | light | New sm badge | 3QE-0 | height | 20 | 20 | match |
| sizes | light | New sm badge | 3QE-0 | padding left | 8 | 8 | match |
| sizes | light | New sm badge | 3QE-0 | padding right | 8 | 8 | match |
| sizes | light | New sm badge | 3QE-0 | gap | 4 | 4 | match |
| sizes | light | New sm badge | 3QE-0 | radius | full | full | match |
| sizes | light | New sm badge | 3QE-0 | background | oklch(0.95 0.024 258) | oklch(0.95 0.024 258) | match |
| sizes | light | New sm badge | 3QE-0 | border color | oklch(0.83 0.085 258) | oklch(0.83 0.085 258) | match |
| sizes | light | New sm badge | 3QE-0 | border width | 1 | 1 | match |
| sizes | light | New sm badge | 3QE-0 | border style | solid | solid | match |
| sizes | light | New sm badge | 3QE-0 | color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| sizes | light | New sm badge | 3QE-0 | font family | Geist | Geist | match |
| sizes | light | New sm badge | 3QE-0 | font size | 12 | 12 | match |
| sizes | light | New sm badge | 3QE-0 | font weight | 500 | 500 | match |
| sizes | light | New sm badge | 3QE-0 | line height | 16 | 16 | match |
| sizes | light | New sm badge | 3QE-0 | lines | 1 | 1 | match |
| sizes | light | Draft md badge | 3QJ-0 | height | 24 | 24 | match |
| sizes | light | Draft md badge | 3QJ-0 | padding left | 8 | 8 | match |
| sizes | light | Draft md badge | 3QJ-0 | padding right | 8 | 8 | match |
| sizes | light | Draft md badge | 3QJ-0 | gap | 4 | 4 | match |
| sizes | light | Draft md badge | 3QJ-0 | radius | full | full | match |
| sizes | light | Draft md badge | 3QJ-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| sizes | light | Draft md badge | 3QJ-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| sizes | light | Draft md badge | 3QJ-0 | border width | 1 | 1 | match |
| sizes | light | Draft md badge | 3QJ-0 | border style | solid | solid | match |
| sizes | light | Draft md badge | 3QJ-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| sizes | light | Draft md badge | 3QJ-0 | font family | Geist | Geist | match |
| sizes | light | Draft md badge | 3QJ-0 | font size | 14 | 14 | match |
| sizes | light | Draft md badge | 3QJ-0 | font weight | 500 | 500 | match |
| sizes | light | Draft md badge | 3QJ-0 | line height | 20 | 20 | match |
| sizes | light | Draft md badge | 3QJ-0 | lines | 1 | 1 | match |
| sizes | light | Active md badge | 3QL-0 | height | 24 | 24 | match |
| sizes | light | Active md badge | 3QL-0 | padding left | 8 | 8 | match |
| sizes | light | Active md badge | 3QL-0 | padding right | 8 | 8 | match |
| sizes | light | Active md badge | 3QL-0 | gap | 4 | 4 | match |
| sizes | light | Active md badge | 3QL-0 | radius | full | full | match |
| sizes | light | Active md badge | 3QL-0 | background | oklch(0.95 0.043 152) | oklch(0.95 0.043 152) | match |
| sizes | light | Active md badge | 3QL-0 | border color | oklch(0.83 0.128 152) | oklch(0.83 0.128 152) | match |
| sizes | light | Active md badge | 3QL-0 | border width | 1 | 1 | match |
| sizes | light | Active md badge | 3QL-0 | border style | solid | solid | match |
| sizes | light | Active md badge | 3QL-0 | color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| sizes | light | Active md badge | 3QL-0 | font family | Geist | Geist | match |
| sizes | light | Active md badge | 3QL-0 | font size | 14 | 14 | match |
| sizes | light | Active md badge | 3QL-0 | font weight | 500 | 500 | match |
| sizes | light | Active md badge | 3QL-0 | line height | 20 | 20 | match |
| sizes | light | Active md badge | 3QL-0 | lines | 1 | 1 | match |
| sizes | light | Pending md badge | 3QN-0 | height | 24 | 24 | match |
| sizes | light | Pending md badge | 3QN-0 | padding left | 8 | 8 | match |
| sizes | light | Pending md badge | 3QN-0 | padding right | 8 | 8 | match |
| sizes | light | Pending md badge | 3QN-0 | gap | 4 | 4 | match |
| sizes | light | Pending md badge | 3QN-0 | radius | full | full | match |
| sizes | light | Pending md badge | 3QN-0 | background | oklch(0.97 0.041 92) | oklch(0.97 0.041 92) | match |
| sizes | light | Pending md badge | 3QN-0 | border color | oklch(0.9 0.135 92) | oklch(0.9 0.135 92) | match |
| sizes | light | Pending md badge | 3QN-0 | border width | 1 | 1 | match |
| sizes | light | Pending md badge | 3QN-0 | border style | solid | solid | match |
| sizes | light | Pending md badge | 3QN-0 | color | oklch(0.43 0.088 92) | oklch(0.43 0.088 92) | match |
| sizes | light | Pending md badge | 3QN-0 | font family | Geist | Geist | match |
| sizes | light | Pending md badge | 3QN-0 | font size | 14 | 14 | match |
| sizes | light | Pending md badge | 3QN-0 | font weight | 500 | 500 | match |
| sizes | light | Pending md badge | 3QN-0 | line height | 20 | 20 | match |
| sizes | light | Pending md badge | 3QN-0 | lines | 1 | 1 | match |
| sizes | light | Failed md badge | 3QP-0 | height | 24 | 24 | match |
| sizes | light | Failed md badge | 3QP-0 | padding left | 8 | 8 | match |
| sizes | light | Failed md badge | 3QP-0 | padding right | 8 | 8 | match |
| sizes | light | Failed md badge | 3QP-0 | gap | 4 | 4 | match |
| sizes | light | Failed md badge | 3QP-0 | radius | full | full | match |
| sizes | light | Failed md badge | 3QP-0 | background | oklch(0.95 0.025 25) | oklch(0.95 0.025 25) | match |
| sizes | light | Failed md badge | 3QP-0 | border color | oklch(0.83 0.094 25) | oklch(0.83 0.094 25) | match |
| sizes | light | Failed md badge | 3QP-0 | border width | 1 | 1 | match |
| sizes | light | Failed md badge | 3QP-0 | border style | solid | solid | match |
| sizes | light | Failed md badge | 3QP-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| sizes | light | Failed md badge | 3QP-0 | font family | Geist | Geist | match |
| sizes | light | Failed md badge | 3QP-0 | font size | 14 | 14 | match |
| sizes | light | Failed md badge | 3QP-0 | font weight | 500 | 500 | match |
| sizes | light | Failed md badge | 3QP-0 | line height | 20 | 20 | match |
| sizes | light | Failed md badge | 3QP-0 | lines | 1 | 1 | match |
| sizes | light | New md badge | 3QR-0 | height | 24 | 24 | match |
| sizes | light | New md badge | 3QR-0 | padding left | 8 | 8 | match |
| sizes | light | New md badge | 3QR-0 | padding right | 8 | 8 | match |
| sizes | light | New md badge | 3QR-0 | gap | 4 | 4 | match |
| sizes | light | New md badge | 3QR-0 | radius | full | full | match |
| sizes | light | New md badge | 3QR-0 | background | oklch(0.95 0.024 258) | oklch(0.95 0.024 258) | match |
| sizes | light | New md badge | 3QR-0 | border color | oklch(0.83 0.085 258) | oklch(0.83 0.085 258) | match |
| sizes | light | New md badge | 3QR-0 | border width | 1 | 1 | match |
| sizes | light | New md badge | 3QR-0 | border style | solid | solid | match |
| sizes | light | New md badge | 3QR-0 | color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| sizes | light | New md badge | 3QR-0 | font family | Geist | Geist | match |
| sizes | light | New md badge | 3QR-0 | font size | 14 | 14 | match |
| sizes | light | New md badge | 3QR-0 | font weight | 500 | 500 | match |
| sizes | light | New md badge | 3QR-0 | line height | 20 | 20 | match |
| sizes | light | New md badge | 3QR-0 | lines | 1 | 1 | match |
| sizes | light | rows stack | 3Q4-0 | row gap | 12 | 12 | match |
| sizes | light | sm row | 3Q5-0 | column gap | 8 | 8 | match |
| sizes | light | sm row | 3Q5-0 | align items | center | center | match |
| sizes | light | md row | 3QI-0 | column gap | 8 | 8 | match |
| sizes | light | md row | 3QI-0 | align items | center | center | match |
| count | light | 3 badge | 3QW-0 | height | 24 | 24 | match |
| count | light | 3 badge | 3QW-0 | padding left | 8 | 8 | match |
| count | light | 3 badge | 3QW-0 | padding right | 8 | 8 | match |
| count | light | 3 badge | 3QW-0 | gap | 4 | 4 | match |
| count | light | 3 badge | 3QW-0 | radius | full | full | match |
| count | light | 3 badge | 3QW-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |
| count | light | 3 badge | 3QW-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |
| count | light | 3 badge | 3QW-0 | border width | 1 | 1 | match |
| count | light | 3 badge | 3QW-0 | border style | solid | solid | match |
| count | light | 3 badge | 3QW-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |
| count | light | 3 badge | 3QW-0 | font family | Geist | Geist | match |
| count | light | 3 badge | 3QW-0 | font size | 14 | 14 | match |
| count | light | 3 badge | 3QW-0 | font weight | 500 | 500 | match |
| count | light | 3 badge | 3QW-0 | line height | 20 | 20 | match |
| count | light | 3 badge | 3QW-0 | lines | 1 | 1 | match |
| count | light | 12 badge | 3QY-0 | height | 24 | 24 | match |
| count | light | 12 badge | 3QY-0 | padding left | 8 | 8 | match |
| count | light | 12 badge | 3QY-0 | padding right | 8 | 8 | match |
| count | light | 12 badge | 3QY-0 | gap | 4 | 4 | match |
| count | light | 12 badge | 3QY-0 | radius | full | full | match |
| count | light | 12 badge | 3QY-0 | background | oklch(0.95 0.025 25) | oklch(0.95 0.025 25) | match |
| count | light | 12 badge | 3QY-0 | border color | oklch(0.83 0.094 25) | oklch(0.83 0.094 25) | match |
| count | light | 12 badge | 3QY-0 | border width | 1 | 1 | match |
| count | light | 12 badge | 3QY-0 | border style | solid | solid | match |
| count | light | 12 badge | 3QY-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| count | light | 12 badge | 3QY-0 | font family | Geist | Geist | match |
| count | light | 12 badge | 3QY-0 | font size | 14 | 14 | match |
| count | light | 12 badge | 3QY-0 | font weight | 500 | 500 | match |
| count | light | 12 badge | 3QY-0 | line height | 20 | 20 | match |
| count | light | 12 badge | 3QY-0 | lines | 1 | 1 | match |
| count | light | 99+ badge | 3R0-0 | height | 24 | 24 | match |
| count | light | 99+ badge | 3R0-0 | padding left | 8 | 8 | match |
| count | light | 99+ badge | 3R0-0 | padding right | 8 | 8 | match |
| count | light | 99+ badge | 3R0-0 | gap | 4 | 4 | match |
| count | light | 99+ badge | 3R0-0 | radius | full | full | match |
| count | light | 99+ badge | 3R0-0 | background | oklch(0.95 0.024 258) | oklch(0.95 0.024 258) | match |
| count | light | 99+ badge | 3R0-0 | border color | oklch(0.83 0.085 258) | oklch(0.83 0.085 258) | match |
| count | light | 99+ badge | 3R0-0 | border width | 1 | 1 | match |
| count | light | 99+ badge | 3R0-0 | border style | solid | solid | match |
| count | light | 99+ badge | 3R0-0 | color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| count | light | 99+ badge | 3R0-0 | font family | Geist | Geist | match |
| count | light | 99+ badge | 3R0-0 | font size | 14 | 14 | match |
| count | light | 99+ badge | 3R0-0 | font weight | 500 | 500 | match |
| count | light | 99+ badge | 3R0-0 | line height | 20 | 20 | match |
| count | light | 99+ badge | 3R0-0 | lines | 1 | 1 | match |
| count | light | row | 3QV-0 | column gap | 8 | 8 | match |
| count | light | row | 3QV-0 | align items | center | center | match |
| default | dark | Draft badge | 3TX-0 | height | 24 | 24 | match |
| default | dark | Draft badge | 3TX-0 | padding left | 8 | 8 | match |
| default | dark | Draft badge | 3TX-0 | padding right | 8 | 8 | match |
| default | dark | Draft badge | 3TX-0 | gap | 4 | 4 | match |
| default | dark | Draft badge | 3TX-0 | radius | full | full | match |
| default | dark | Draft badge | 3TX-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| default | dark | Draft badge | 3TX-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| default | dark | Draft badge | 3TX-0 | border width | 1 | 1 | match |
| default | dark | Draft badge | 3TX-0 | border style | solid | solid | match |
| default | dark | Draft badge | 3TX-0 | color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| default | dark | Draft badge | 3TX-0 | font family | Geist | Geist | match |
| default | dark | Draft badge | 3TX-0 | font size | 14 | 14 | match |
| default | dark | Draft badge | 3TX-0 | font weight | 500 | 500 | match |
| default | dark | Draft badge | 3TX-0 | line height | 20 | 20 | match |
| default | dark | Draft badge | 3TX-0 | lines | 1 | 1 | match |
| positive | dark | Active badge | 3TT-0 | height | 24 | 24 | match |
| positive | dark | Active badge | 3TT-0 | padding left | 8 | 8 | match |
| positive | dark | Active badge | 3TT-0 | padding right | 8 | 8 | match |
| positive | dark | Active badge | 3TT-0 | gap | 4 | 4 | match |
| positive | dark | Active badge | 3TT-0 | radius | full | full | match |
| positive | dark | Active badge | 3TT-0 | background | oklch(0.23 0.061 152) | oklch(0.23 0.061 152) | match |
| positive | dark | Active badge | 3TT-0 | border color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| positive | dark | Active badge | 3TT-0 | border width | 1 | 1 | match |
| positive | dark | Active badge | 3TT-0 | border style | solid | solid | match |
| positive | dark | Active badge | 3TT-0 | color | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| positive | dark | Active badge | 3TT-0 | font family | Geist | Geist | match |
| positive | dark | Active badge | 3TT-0 | font size | 14 | 14 | match |
| positive | dark | Active badge | 3TT-0 | font weight | 500 | 500 | match |
| positive | dark | Active badge | 3TT-0 | line height | 20 | 20 | match |
| positive | dark | Active badge | 3TT-0 | lines | 1 | 1 | match |
| warning | dark | Pending badge | 3TP-0 | height | 24 | 24 | match |
| warning | dark | Pending badge | 3TP-0 | padding left | 8 | 8 | match |
| warning | dark | Pending badge | 3TP-0 | padding right | 8 | 8 | match |
| warning | dark | Pending badge | 3TP-0 | gap | 4 | 4 | match |
| warning | dark | Pending badge | 3TP-0 | radius | full | full | match |
| warning | dark | Pending badge | 3TP-0 | background | oklch(0.3 0.061 92) | oklch(0.3 0.061 92) | match |
| warning | dark | Pending badge | 3TP-0 | border color | oklch(0.55 0.113 92) | oklch(0.55 0.113 92) | match |
| warning | dark | Pending badge | 3TP-0 | border width | 1 | 1 | match |
| warning | dark | Pending badge | 3TP-0 | border style | solid | solid | match |
| warning | dark | Pending badge | 3TP-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| warning | dark | Pending badge | 3TP-0 | font family | Geist | Geist | match |
| warning | dark | Pending badge | 3TP-0 | font size | 14 | 14 | match |
| warning | dark | Pending badge | 3TP-0 | font weight | 500 | 500 | match |
| warning | dark | Pending badge | 3TP-0 | line height | 20 | 20 | match |
| warning | dark | Pending badge | 3TP-0 | lines | 1 | 1 | match |
| negative | dark | Failed badge | 3TL-0 | height | 24 | 24 | match |
| negative | dark | Failed badge | 3TL-0 | padding left | 8 | 8 | match |
| negative | dark | Failed badge | 3TL-0 | padding right | 8 | 8 | match |
| negative | dark | Failed badge | 3TL-0 | gap | 4 | 4 | match |
| negative | dark | Failed badge | 3TL-0 | radius | full | full | match |
| negative | dark | Failed badge | 3TL-0 | background | oklch(0.23 0.093 25) | oklch(0.23 0.093 25) | match |
| negative | dark | Failed badge | 3TL-0 | border color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| negative | dark | Failed badge | 3TL-0 | border width | 1 | 1 | match |
| negative | dark | Failed badge | 3TL-0 | border style | solid | solid | match |
| negative | dark | Failed badge | 3TL-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| negative | dark | Failed badge | 3TL-0 | font family | Geist | Geist | match |
| negative | dark | Failed badge | 3TL-0 | font size | 14 | 14 | match |
| negative | dark | Failed badge | 3TL-0 | font weight | 500 | 500 | match |
| negative | dark | Failed badge | 3TL-0 | line height | 20 | 20 | match |
| negative | dark | Failed badge | 3TL-0 | lines | 1 | 1 | match |
| informative | dark | New badge | 3TH-0 | height | 24 | 24 | match |
| informative | dark | New badge | 3TH-0 | padding left | 8 | 8 | match |
| informative | dark | New badge | 3TH-0 | padding right | 8 | 8 | match |
| informative | dark | New badge | 3TH-0 | gap | 4 | 4 | match |
| informative | dark | New badge | 3TH-0 | radius | full | full | match |
| informative | dark | New badge | 3TH-0 | background | oklch(0.23 0.085 258) | oklch(0.23 0.085 258) | match |
| informative | dark | New badge | 3TH-0 | border color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| informative | dark | New badge | 3TH-0 | border width | 1 | 1 | match |
| informative | dark | New badge | 3TH-0 | border style | solid | solid | match |
| informative | dark | New badge | 3TH-0 | color | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| informative | dark | New badge | 3TH-0 | font family | Geist | Geist | match |
| informative | dark | New badge | 3TH-0 | font size | 14 | 14 | match |
| informative | dark | New badge | 3TH-0 | font weight | 500 | 500 | match |
| informative | dark | New badge | 3TH-0 | line height | 20 | 20 | match |
| informative | dark | New badge | 3TH-0 | lines | 1 | 1 | match |
| sizes | dark | Draft sm badge | 3T8-0 | height | 20 | 20 | match |
| sizes | dark | Draft sm badge | 3T8-0 | padding left | 8 | 8 | match |
| sizes | dark | Draft sm badge | 3T8-0 | padding right | 8 | 8 | match |
| sizes | dark | Draft sm badge | 3T8-0 | gap | 4 | 4 | match |
| sizes | dark | Draft sm badge | 3T8-0 | radius | full | full | match |
| sizes | dark | Draft sm badge | 3T8-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| sizes | dark | Draft sm badge | 3T8-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| sizes | dark | Draft sm badge | 3T8-0 | border width | 1 | 1 | match |
| sizes | dark | Draft sm badge | 3T8-0 | border style | solid | solid | match |
| sizes | dark | Draft sm badge | 3T8-0 | color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| sizes | dark | Draft sm badge | 3T8-0 | font family | Geist | Geist | match |
| sizes | dark | Draft sm badge | 3T8-0 | font size | 12 | 12 | match |
| sizes | dark | Draft sm badge | 3T8-0 | font weight | 500 | 500 | match |
| sizes | dark | Draft sm badge | 3T8-0 | line height | 16 | 16 | match |
| sizes | dark | Draft sm badge | 3T8-0 | lines | 1 | 1 | match |
| sizes | dark | Active sm badge | 3T6-0 | height | 20 | 20 | match |
| sizes | dark | Active sm badge | 3T6-0 | padding left | 8 | 8 | match |
| sizes | dark | Active sm badge | 3T6-0 | padding right | 8 | 8 | match |
| sizes | dark | Active sm badge | 3T6-0 | gap | 4 | 4 | match |
| sizes | dark | Active sm badge | 3T6-0 | radius | full | full | match |
| sizes | dark | Active sm badge | 3T6-0 | background | oklch(0.23 0.061 152) | oklch(0.23 0.061 152) | match |
| sizes | dark | Active sm badge | 3T6-0 | border color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| sizes | dark | Active sm badge | 3T6-0 | border width | 1 | 1 | match |
| sizes | dark | Active sm badge | 3T6-0 | border style | solid | solid | match |
| sizes | dark | Active sm badge | 3T6-0 | color | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| sizes | dark | Active sm badge | 3T6-0 | font family | Geist | Geist | match |
| sizes | dark | Active sm badge | 3T6-0 | font size | 12 | 12 | match |
| sizes | dark | Active sm badge | 3T6-0 | font weight | 500 | 500 | match |
| sizes | dark | Active sm badge | 3T6-0 | line height | 16 | 16 | match |
| sizes | dark | Active sm badge | 3T6-0 | lines | 1 | 1 | match |
| sizes | dark | Pending sm badge | 3T4-0 | height | 20 | 20 | match |
| sizes | dark | Pending sm badge | 3T4-0 | padding left | 8 | 8 | match |
| sizes | dark | Pending sm badge | 3T4-0 | padding right | 8 | 8 | match |
| sizes | dark | Pending sm badge | 3T4-0 | gap | 4 | 4 | match |
| sizes | dark | Pending sm badge | 3T4-0 | radius | full | full | match |
| sizes | dark | Pending sm badge | 3T4-0 | background | oklch(0.3 0.061 92) | oklch(0.3 0.061 92) | match |
| sizes | dark | Pending sm badge | 3T4-0 | border color | oklch(0.55 0.113 92) | oklch(0.55 0.113 92) | match |
| sizes | dark | Pending sm badge | 3T4-0 | border width | 1 | 1 | match |
| sizes | dark | Pending sm badge | 3T4-0 | border style | solid | solid | match |
| sizes | dark | Pending sm badge | 3T4-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| sizes | dark | Pending sm badge | 3T4-0 | font family | Geist | Geist | match |
| sizes | dark | Pending sm badge | 3T4-0 | font size | 12 | 12 | match |
| sizes | dark | Pending sm badge | 3T4-0 | font weight | 500 | 500 | match |
| sizes | dark | Pending sm badge | 3T4-0 | line height | 16 | 16 | match |
| sizes | dark | Pending sm badge | 3T4-0 | lines | 1 | 1 | match |
| sizes | dark | Failed sm badge | 3T2-0 | height | 20 | 20 | match |
| sizes | dark | Failed sm badge | 3T2-0 | padding left | 8 | 8 | match |
| sizes | dark | Failed sm badge | 3T2-0 | padding right | 8 | 8 | match |
| sizes | dark | Failed sm badge | 3T2-0 | gap | 4 | 4 | match |
| sizes | dark | Failed sm badge | 3T2-0 | radius | full | full | match |
| sizes | dark | Failed sm badge | 3T2-0 | background | oklch(0.23 0.093 25) | oklch(0.23 0.093 25) | match |
| sizes | dark | Failed sm badge | 3T2-0 | border color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| sizes | dark | Failed sm badge | 3T2-0 | border width | 1 | 1 | match |
| sizes | dark | Failed sm badge | 3T2-0 | border style | solid | solid | match |
| sizes | dark | Failed sm badge | 3T2-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| sizes | dark | Failed sm badge | 3T2-0 | font family | Geist | Geist | match |
| sizes | dark | Failed sm badge | 3T2-0 | font size | 12 | 12 | match |
| sizes | dark | Failed sm badge | 3T2-0 | font weight | 500 | 500 | match |
| sizes | dark | Failed sm badge | 3T2-0 | line height | 16 | 16 | match |
| sizes | dark | Failed sm badge | 3T2-0 | lines | 1 | 1 | match |
| sizes | dark | New sm badge | 3T0-0 | height | 20 | 20 | match |
| sizes | dark | New sm badge | 3T0-0 | padding left | 8 | 8 | match |
| sizes | dark | New sm badge | 3T0-0 | padding right | 8 | 8 | match |
| sizes | dark | New sm badge | 3T0-0 | gap | 4 | 4 | match |
| sizes | dark | New sm badge | 3T0-0 | radius | full | full | match |
| sizes | dark | New sm badge | 3T0-0 | background | oklch(0.23 0.085 258) | oklch(0.23 0.085 258) | match |
| sizes | dark | New sm badge | 3T0-0 | border color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| sizes | dark | New sm badge | 3T0-0 | border width | 1 | 1 | match |
| sizes | dark | New sm badge | 3T0-0 | border style | solid | solid | match |
| sizes | dark | New sm badge | 3T0-0 | color | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| sizes | dark | New sm badge | 3T0-0 | font family | Geist | Geist | match |
| sizes | dark | New sm badge | 3T0-0 | font size | 12 | 12 | match |
| sizes | dark | New sm badge | 3T0-0 | font weight | 500 | 500 | match |
| sizes | dark | New sm badge | 3T0-0 | line height | 16 | 16 | match |
| sizes | dark | New sm badge | 3T0-0 | lines | 1 | 1 | match |
| sizes | dark | Draft md badge | 3SX-0 | height | 24 | 24 | match |
| sizes | dark | Draft md badge | 3SX-0 | padding left | 8 | 8 | match |
| sizes | dark | Draft md badge | 3SX-0 | padding right | 8 | 8 | match |
| sizes | dark | Draft md badge | 3SX-0 | gap | 4 | 4 | match |
| sizes | dark | Draft md badge | 3SX-0 | radius | full | full | match |
| sizes | dark | Draft md badge | 3SX-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| sizes | dark | Draft md badge | 3SX-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| sizes | dark | Draft md badge | 3SX-0 | border width | 1 | 1 | match |
| sizes | dark | Draft md badge | 3SX-0 | border style | solid | solid | match |
| sizes | dark | Draft md badge | 3SX-0 | color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| sizes | dark | Draft md badge | 3SX-0 | font family | Geist | Geist | match |
| sizes | dark | Draft md badge | 3SX-0 | font size | 14 | 14 | match |
| sizes | dark | Draft md badge | 3SX-0 | font weight | 500 | 500 | match |
| sizes | dark | Draft md badge | 3SX-0 | line height | 20 | 20 | match |
| sizes | dark | Draft md badge | 3SX-0 | lines | 1 | 1 | match |
| sizes | dark | Active md badge | 3SV-0 | height | 24 | 24 | match |
| sizes | dark | Active md badge | 3SV-0 | padding left | 8 | 8 | match |
| sizes | dark | Active md badge | 3SV-0 | padding right | 8 | 8 | match |
| sizes | dark | Active md badge | 3SV-0 | gap | 4 | 4 | match |
| sizes | dark | Active md badge | 3SV-0 | radius | full | full | match |
| sizes | dark | Active md badge | 3SV-0 | background | oklch(0.23 0.061 152) | oklch(0.23 0.061 152) | match |
| sizes | dark | Active md badge | 3SV-0 | border color | oklch(0.44 0.116 152) | oklch(0.44 0.116 152) | match |
| sizes | dark | Active md badge | 3SV-0 | border width | 1 | 1 | match |
| sizes | dark | Active md badge | 3SV-0 | border style | solid | solid | match |
| sizes | dark | Active md badge | 3SV-0 | color | oklch(0.9 0.085 152) | oklch(0.9 0.085 152) | match |
| sizes | dark | Active md badge | 3SV-0 | font family | Geist | Geist | match |
| sizes | dark | Active md badge | 3SV-0 | font size | 14 | 14 | match |
| sizes | dark | Active md badge | 3SV-0 | font weight | 500 | 500 | match |
| sizes | dark | Active md badge | 3SV-0 | line height | 20 | 20 | match |
| sizes | dark | Active md badge | 3SV-0 | lines | 1 | 1 | match |
| sizes | dark | Pending md badge | 3ST-0 | height | 24 | 24 | match |
| sizes | dark | Pending md badge | 3ST-0 | padding left | 8 | 8 | match |
| sizes | dark | Pending md badge | 3ST-0 | padding right | 8 | 8 | match |
| sizes | dark | Pending md badge | 3ST-0 | gap | 4 | 4 | match |
| sizes | dark | Pending md badge | 3ST-0 | radius | full | full | match |
| sizes | dark | Pending md badge | 3ST-0 | background | oklch(0.3 0.061 92) | oklch(0.3 0.061 92) | match |
| sizes | dark | Pending md badge | 3ST-0 | border color | oklch(0.55 0.113 92) | oklch(0.55 0.113 92) | match |
| sizes | dark | Pending md badge | 3ST-0 | border width | 1 | 1 | match |
| sizes | dark | Pending md badge | 3ST-0 | border style | solid | solid | match |
| sizes | dark | Pending md badge | 3ST-0 | color | oklch(0.94 0.083 92) | oklch(0.94 0.083 92) | match |
| sizes | dark | Pending md badge | 3ST-0 | font family | Geist | Geist | match |
| sizes | dark | Pending md badge | 3ST-0 | font size | 14 | 14 | match |
| sizes | dark | Pending md badge | 3ST-0 | font weight | 500 | 500 | match |
| sizes | dark | Pending md badge | 3ST-0 | line height | 20 | 20 | match |
| sizes | dark | Pending md badge | 3ST-0 | lines | 1 | 1 | match |
| sizes | dark | Failed md badge | 3SR-0 | height | 24 | 24 | match |
| sizes | dark | Failed md badge | 3SR-0 | padding left | 8 | 8 | match |
| sizes | dark | Failed md badge | 3SR-0 | padding right | 8 | 8 | match |
| sizes | dark | Failed md badge | 3SR-0 | gap | 4 | 4 | match |
| sizes | dark | Failed md badge | 3SR-0 | radius | full | full | match |
| sizes | dark | Failed md badge | 3SR-0 | background | oklch(0.23 0.093 25) | oklch(0.23 0.093 25) | match |
| sizes | dark | Failed md badge | 3SR-0 | border color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| sizes | dark | Failed md badge | 3SR-0 | border width | 1 | 1 | match |
| sizes | dark | Failed md badge | 3SR-0 | border style | solid | solid | match |
| sizes | dark | Failed md badge | 3SR-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| sizes | dark | Failed md badge | 3SR-0 | font family | Geist | Geist | match |
| sizes | dark | Failed md badge | 3SR-0 | font size | 14 | 14 | match |
| sizes | dark | Failed md badge | 3SR-0 | font weight | 500 | 500 | match |
| sizes | dark | Failed md badge | 3SR-0 | line height | 20 | 20 | match |
| sizes | dark | Failed md badge | 3SR-0 | lines | 1 | 1 | match |
| sizes | dark | New md badge | 3SP-0 | height | 24 | 24 | match |
| sizes | dark | New md badge | 3SP-0 | padding left | 8 | 8 | match |
| sizes | dark | New md badge | 3SP-0 | padding right | 8 | 8 | match |
| sizes | dark | New md badge | 3SP-0 | gap | 4 | 4 | match |
| sizes | dark | New md badge | 3SP-0 | radius | full | full | match |
| sizes | dark | New md badge | 3SP-0 | background | oklch(0.23 0.085 258) | oklch(0.23 0.085 258) | match |
| sizes | dark | New md badge | 3SP-0 | border color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| sizes | dark | New md badge | 3SP-0 | border width | 1 | 1 | match |
| sizes | dark | New md badge | 3SP-0 | border style | solid | solid | match |
| sizes | dark | New md badge | 3SP-0 | color | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| sizes | dark | New md badge | 3SP-0 | font family | Geist | Geist | match |
| sizes | dark | New md badge | 3SP-0 | font size | 14 | 14 | match |
| sizes | dark | New md badge | 3SP-0 | font weight | 500 | 500 | match |
| sizes | dark | New md badge | 3SP-0 | line height | 20 | 20 | match |
| sizes | dark | New md badge | 3SP-0 | lines | 1 | 1 | match |
| sizes | dark | rows stack | 3SN-0 | row gap | 12 | 12 | match |
| sizes | dark | sm row | 3SZ-0 | column gap | 8 | 8 | match |
| sizes | dark | sm row | 3SZ-0 | align items | center | center | match |
| sizes | dark | md row | 3SO-0 | column gap | 8 | 8 | match |
| sizes | dark | md row | 3SO-0 | align items | center | center | match |
| count | dark | 3 badge | 3SJ-0 | height | 24 | 24 | match |
| count | dark | 3 badge | 3SJ-0 | padding left | 8 | 8 | match |
| count | dark | 3 badge | 3SJ-0 | padding right | 8 | 8 | match |
| count | dark | 3 badge | 3SJ-0 | gap | 4 | 4 | match |
| count | dark | 3 badge | 3SJ-0 | radius | full | full | match |
| count | dark | 3 badge | 3SJ-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| count | dark | 3 badge | 3SJ-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |
| count | dark | 3 badge | 3SJ-0 | border width | 1 | 1 | match |
| count | dark | 3 badge | 3SJ-0 | border style | solid | solid | match |
| count | dark | 3 badge | 3SJ-0 | color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |
| count | dark | 3 badge | 3SJ-0 | font family | Geist | Geist | match |
| count | dark | 3 badge | 3SJ-0 | font size | 14 | 14 | match |
| count | dark | 3 badge | 3SJ-0 | font weight | 500 | 500 | match |
| count | dark | 3 badge | 3SJ-0 | line height | 20 | 20 | match |
| count | dark | 3 badge | 3SJ-0 | lines | 1 | 1 | match |
| count | dark | 12 badge | 3SH-0 | height | 24 | 24 | match |
| count | dark | 12 badge | 3SH-0 | padding left | 8 | 8 | match |
| count | dark | 12 badge | 3SH-0 | padding right | 8 | 8 | match |
| count | dark | 12 badge | 3SH-0 | gap | 4 | 4 | match |
| count | dark | 12 badge | 3SH-0 | radius | full | full | match |
| count | dark | 12 badge | 3SH-0 | background | oklch(0.23 0.093 25) | oklch(0.23 0.093 25) | match |
| count | dark | 12 badge | 3SH-0 | border color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |
| count | dark | 12 badge | 3SH-0 | border width | 1 | 1 | match |
| count | dark | 12 badge | 3SH-0 | border style | solid | solid | match |
| count | dark | 12 badge | 3SH-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |
| count | dark | 12 badge | 3SH-0 | font family | Geist | Geist | match |
| count | dark | 12 badge | 3SH-0 | font size | 14 | 14 | match |
| count | dark | 12 badge | 3SH-0 | font weight | 500 | 500 | match |
| count | dark | 12 badge | 3SH-0 | line height | 20 | 20 | match |
| count | dark | 12 badge | 3SH-0 | lines | 1 | 1 | match |
| count | dark | 99+ badge | 3SF-0 | height | 24 | 24 | match |
| count | dark | 99+ badge | 3SF-0 | padding left | 8 | 8 | match |
| count | dark | 99+ badge | 3SF-0 | padding right | 8 | 8 | match |
| count | dark | 99+ badge | 3SF-0 | gap | 4 | 4 | match |
| count | dark | 99+ badge | 3SF-0 | radius | full | full | match |
| count | dark | 99+ badge | 3SF-0 | background | oklch(0.23 0.085 258) | oklch(0.23 0.085 258) | match |
| count | dark | 99+ badge | 3SF-0 | border color | oklch(0.44 0.163 258) | oklch(0.44 0.163 258) | match |
| count | dark | 99+ badge | 3SF-0 | border width | 1 | 1 | match |
| count | dark | 99+ badge | 3SF-0 | border style | solid | solid | match |
| count | dark | 99+ badge | 3SF-0 | color | oklch(0.9 0.049 258) | oklch(0.9 0.049 258) | match |
| count | dark | 99+ badge | 3SF-0 | font family | Geist | Geist | match |
| count | dark | 99+ badge | 3SF-0 | font size | 14 | 14 | match |
| count | dark | 99+ badge | 3SF-0 | font weight | 500 | 500 | match |
| count | dark | 99+ badge | 3SF-0 | line height | 20 | 20 | match |
| count | dark | 99+ badge | 3SF-0 | lines | 1 | 1 | match |
| count | dark | row | 3SE-0 | column gap | 8 | 8 | match |
| count | dark | row | 3SE-0 | align items | center | center | match |
