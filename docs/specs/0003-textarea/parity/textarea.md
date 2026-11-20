# Parity table · Textarea

Spec [0003](../index.md), AC-12. Code measured in Storybook at `f64e8a5` (branch `feat/textarea`, the code PR), 1280 × 720, light and dark. Paper file `01M7R4TP595GEKCEE8SHQCTJMX`, page `p-4-0`, artboards `2XD-0` (light) and `32V-0` (`Textarea · Dark`). Code values are Storybook computed styles. Paper values are the authored styles from `get_jsx`, with each `var(--tq-…)` resolved through the Paper token export and normalized per spec 0002 (lengths in px to 0.5, OKLCH components to 3 decimals rounded half up, alpha to 2, font family by first name).

Synthesized cells use the nearest story and set or clear the value in the page before measuring; nothing was committed for them. The Paper value line count is read from a scale 2 screenshot, since the Paper text box stretches to the field.

**Result:** 632 rows, all `match` (316 per mode).

**Negative control** (read only, comparison input only): replacing the Paper border color of `Default` with `border.default` reports a DIFF in both modes (light `oklch(0.63 0.018 260)` against `oklch(0.91 0.009 260)`, dark `oklch(0.63 0.018 260)` against `oklch(0.44 0.015 260)`). No Paper write.

## Light

| Story and checkpoint | Mode | Part | Paper node | Property | Code value | Paper value | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Default | light | textarea | 2Y0-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Default | light | textarea | 2Y0-0 | height | 81 | 81 | match |  |
| Default | light | textarea | 2Y0-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Default | light | textarea | 2Y0-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Default | light | textarea | 2Y0-0 | border width and style | 1px solid | 1px solid | match |  |
| Default | light | textarea | 2Y0-0 | radius | 6 | 6 | match |  |
| Default | light | textarea | 2Y0-0 | padding | 8 12 | 8 12 | match |  |
| Default | light | textarea | 2Y1-0 | font family | Geist | Geist | match |  |
| Default | light | textarea | 2Y1-0 | font size | 14 | 14 | match |  |
| Default | light | textarea | 2Y1-0 | font weight | 400 | 400 | match |  |
| Default | light | textarea | 2Y1-0 | line height | 21 | 21 | match |  |
| Default | light | textarea | 2Y1-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| Default | light | textarea | 2Y1-0 | ::placeholder opacity | 1 | 1 | match |  |
| Default | light | textarea | 2Y0-0 | outline | none | none | match |  |
| WithValue | light | textarea | 2Y4-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| WithValue | light | textarea | 2Y4-0 | height | 81 | 81 | match |  |
| WithValue | light | textarea | 2Y4-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| WithValue | light | textarea | 2Y4-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| WithValue | light | textarea | 2Y4-0 | border width and style | 1px solid | 1px solid | match |  |
| WithValue | light | textarea | 2Y4-0 | radius | 6 | 6 | match |  |
| WithValue | light | textarea | 2Y4-0 | padding | 8 12 | 8 12 | match |  |
| WithValue | light | textarea | 2Y5-0 | font family | Geist | Geist | match |  |
| WithValue | light | textarea | 2Y5-0 | font size | 14 | 14 | match |  |
| WithValue | light | textarea | 2Y5-0 | font weight | 400 | 400 | match |  |
| WithValue | light | textarea | 2Y5-0 | line height | 21 | 21 | match |  |
| WithValue | light | textarea | 2Y5-0 | text color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| WithValue | light | textarea | 2Y5-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| WithValue | light | textarea | 2Y4-0 | outline | none | none | match |  |
| Hover | light | textarea | 2YC-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Hover | light | textarea | 2YC-0 | height | 81 | 81 | match |  |
| Hover | light | textarea | 2YC-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Hover | light | textarea | 2YC-0 | border color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| Hover | light | textarea | 2YC-0 | border width and style | 1px solid | 1px solid | match |  |
| Hover | light | textarea | 2YC-0 | radius | 6 | 6 | match |  |
| Hover | light | textarea | 2YC-0 | padding | 8 12 | 8 12 | match |  |
| Hover | light | textarea | 2YD-0 | font family | Geist | Geist | match |  |
| Hover | light | textarea | 2YD-0 | font size | 14 | 14 | match |  |
| Hover | light | textarea | 2YD-0 | font weight | 400 | 400 | match |  |
| Hover | light | textarea | 2YD-0 | line height | 21 | 21 | match |  |
| Hover | light | textarea | 2YD-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| Hover | light | textarea | 2YD-0 | ::placeholder opacity | 1 | 1 | match |  |
| Hover | light | textarea | 2YC-0 | outline | none | none | match |  |
| synthesized (value, hover) | light | textarea | 2YG-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (value, hover) | light | textarea | 2YG-0 | height | 81 | 81 | match |  |
| synthesized (value, hover) | light | textarea | 2YG-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| synthesized (value, hover) | light | textarea | 2YG-0 | border color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| synthesized (value, hover) | light | textarea | 2YG-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (value, hover) | light | textarea | 2YG-0 | radius | 6 | 6 | match |  |
| synthesized (value, hover) | light | textarea | 2YG-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (value, hover) | light | textarea | 2YH-0 | font family | Geist | Geist | match |  |
| synthesized (value, hover) | light | textarea | 2YH-0 | font size | 14 | 14 | match |  |
| synthesized (value, hover) | light | textarea | 2YH-0 | font weight | 400 | 400 | match |  |
| synthesized (value, hover) | light | textarea | 2YH-0 | line height | 21 | 21 | match |  |
| synthesized (value, hover) | light | textarea | 2YH-0 | text color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| synthesized (value, hover) | light | textarea | 2YH-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| synthesized (value, hover) | light | textarea | 2YG-0 | outline | none | none | match |  |
| FocusVisible | light | textarea | 2YO-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| FocusVisible | light | textarea | 2YO-0 | height | 81 | 81 | match |  |
| FocusVisible | light | textarea | 2YO-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| FocusVisible | light | textarea | 2YO-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| FocusVisible | light | textarea | 2YO-0 | border width and style | 1px solid | 1px solid | match |  |
| FocusVisible | light | textarea | 2YO-0 | radius | 6 | 6 | match |  |
| FocusVisible | light | textarea | 2YO-0 | padding | 8 12 | 8 12 | match |  |
| FocusVisible | light | textarea | 2YP-0 | font family | Geist | Geist | match |  |
| FocusVisible | light | textarea | 2YP-0 | font size | 14 | 14 | match |  |
| FocusVisible | light | textarea | 2YP-0 | font weight | 400 | 400 | match |  |
| FocusVisible | light | textarea | 2YP-0 | line height | 21 | 21 | match |  |
| FocusVisible | light | textarea | 2YP-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| FocusVisible | light | textarea | 2YP-0 | ::placeholder opacity | 1 | 1 | match |  |
| FocusVisible | light | textarea | 2YO-0 | outline | 2px solid oklch(0.63 0.2 258) | 2px solid oklch(0.63 0.2 258) | match |  |
| FocusVisible | light | textarea | 2YO-0 | outline offset | 0px | 0px | match |  |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | height | 81 | 81 | match |  |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | radius | 6 | 6 | match |  |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (value, focus visible) | light | textarea | 2YT-0 | font family | Geist | Geist | match |  |
| synthesized (value, focus visible) | light | textarea | 2YT-0 | font size | 14 | 14 | match |  |
| synthesized (value, focus visible) | light | textarea | 2YT-0 | font weight | 400 | 400 | match |  |
| synthesized (value, focus visible) | light | textarea | 2YT-0 | line height | 21 | 21 | match |  |
| synthesized (value, focus visible) | light | textarea | 2YT-0 | text color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| synthesized (value, focus visible) | light | textarea | 2YT-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | outline | 2px solid oklch(0.63 0.2 258) | 2px solid oklch(0.63 0.2 258) | match |  |
| synthesized (value, focus visible) | light | textarea | 2YS-0 | outline offset | 0px | 0px | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZC-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (invalid, no value) | light | textarea | 2ZC-0 | height | 81 | 81 | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZC-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZC-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZC-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZC-0 | radius | 6 | 6 | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZC-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZD-0 | font family | Geist | Geist | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZD-0 | font size | 14 | 14 | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZD-0 | font weight | 400 | 400 | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZD-0 | line height | 21 | 21 | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZD-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZD-0 | ::placeholder opacity | 1 | 1 | match |  |
| synthesized (invalid, no value) | light | textarea | 2ZC-0 | outline | none | none | match |  |
| Invalid | light | textarea | 2ZG-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Invalid | light | textarea | 2ZG-0 | height | 81 | 81 | match |  |
| Invalid | light | textarea | 2ZG-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Invalid | light | textarea | 2ZG-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |  |
| Invalid | light | textarea | 2ZG-0 | border width and style | 1px solid | 1px solid | match |  |
| Invalid | light | textarea | 2ZG-0 | radius | 6 | 6 | match |  |
| Invalid | light | textarea | 2ZG-0 | padding | 8 12 | 8 12 | match |  |
| Invalid | light | textarea | 2ZH-0 | font family | Geist | Geist | match |  |
| Invalid | light | textarea | 2ZH-0 | font size | 14 | 14 | match |  |
| Invalid | light | textarea | 2ZH-0 | font weight | 400 | 400 | match |  |
| Invalid | light | textarea | 2ZH-0 | line height | 21 | 21 | match |  |
| Invalid | light | textarea | 2ZH-0 | text color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| Invalid | light | textarea | 2ZH-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| Invalid | light | textarea | 2ZG-0 | outline | none | none | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | height | 81 | 81 | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | radius | 6 | 6 | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z1-0 | font family | Geist | Geist | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z1-0 | font size | 14 | 14 | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z1-0 | font weight | 400 | 400 | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z1-0 | line height | 21 | 21 | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z1-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z1-0 | ::placeholder opacity | 1 | 1 | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | outline | 2px solid oklch(0.53 0.2 25) | 2px solid oklch(0.53 0.2 25) | match |  |
| synthesized (invalid, no value, focus visible) | light | textarea | 2Z0-0 | outline offset | 0px | 0px | match |  |
| InvalidFocused | light | textarea | 2Z4-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| InvalidFocused | light | textarea | 2Z4-0 | height | 81 | 81 | match |  |
| InvalidFocused | light | textarea | 2Z4-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| InvalidFocused | light | textarea | 2Z4-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |  |
| InvalidFocused | light | textarea | 2Z4-0 | border width and style | 1px solid | 1px solid | match |  |
| InvalidFocused | light | textarea | 2Z4-0 | radius | 6 | 6 | match |  |
| InvalidFocused | light | textarea | 2Z4-0 | padding | 8 12 | 8 12 | match |  |
| InvalidFocused | light | textarea | 2Z5-0 | font family | Geist | Geist | match |  |
| InvalidFocused | light | textarea | 2Z5-0 | font size | 14 | 14 | match |  |
| InvalidFocused | light | textarea | 2Z5-0 | font weight | 400 | 400 | match |  |
| InvalidFocused | light | textarea | 2Z5-0 | line height | 21 | 21 | match |  |
| InvalidFocused | light | textarea | 2Z5-0 | text color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| InvalidFocused | light | textarea | 2Z5-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| InvalidFocused | light | textarea | 2Z4-0 | outline | 2px solid oklch(0.53 0.2 25) | 2px solid oklch(0.53 0.2 25) | match |  |
| InvalidFocused | light | textarea | 2Z4-0 | outline offset | 0px | 0px | match |  |
| synthesized (disabled, no value) | light | textarea | 300-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (disabled, no value) | light | textarea | 300-0 | height | 81 | 81 | match |  |
| synthesized (disabled, no value) | light | textarea | 300-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |  |
| synthesized (disabled, no value) | light | textarea | 300-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |  |
| synthesized (disabled, no value) | light | textarea | 300-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (disabled, no value) | light | textarea | 300-0 | radius | 6 | 6 | match |  |
| synthesized (disabled, no value) | light | textarea | 300-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (disabled, no value) | light | textarea | 301-0 | font family | Geist | Geist | match |  |
| synthesized (disabled, no value) | light | textarea | 301-0 | font size | 14 | 14 | match |  |
| synthesized (disabled, no value) | light | textarea | 301-0 | font weight | 400 | 400 | match |  |
| synthesized (disabled, no value) | light | textarea | 301-0 | line height | 21 | 21 | match |  |
| synthesized (disabled, no value) | light | textarea | 301-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| synthesized (disabled, no value) | light | textarea | 301-0 | ::placeholder opacity | 1 | 1 | match |  |
| synthesized (disabled, no value) | light | textarea | 300-0 | outline | none | none | match |  |
| Disabled | light | textarea | 304-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Disabled | light | textarea | 304-0 | height | 81 | 81 | match |  |
| Disabled | light | textarea | 304-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |  |
| Disabled | light | textarea | 304-0 | border color | oklch(0.91 0.009 260) | oklch(0.91 0.009 260) | match |  |
| Disabled | light | textarea | 304-0 | border width and style | 1px solid | 1px solid | match |  |
| Disabled | light | textarea | 304-0 | radius | 6 | 6 | match |  |
| Disabled | light | textarea | 304-0 | padding | 8 12 | 8 12 | match |  |
| Disabled | light | textarea | 305-0 | font family | Geist | Geist | match |  |
| Disabled | light | textarea | 305-0 | font size | 14 | 14 | match |  |
| Disabled | light | textarea | 305-0 | font weight | 400 | 400 | match |  |
| Disabled | light | textarea | 305-0 | line height | 21 | 21 | match |  |
| Disabled | light | textarea | 305-0 | text color | oklch(0.73 0.017 260) | oklch(0.73 0.017 260) | match |  |
| Disabled | light | textarea | 305-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| Disabled | light | textarea | 304-0 | outline | none | none | match |  |
| synthesized (read only, no value) | light | textarea | 2ZO-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (read only, no value) | light | textarea | 2ZO-0 | height | 81 | 81 | match |  |
| synthesized (read only, no value) | light | textarea | 2ZO-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |  |
| synthesized (read only, no value) | light | textarea | 2ZO-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| synthesized (read only, no value) | light | textarea | 2ZO-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (read only, no value) | light | textarea | 2ZO-0 | radius | 6 | 6 | match |  |
| synthesized (read only, no value) | light | textarea | 2ZO-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (read only, no value) | light | textarea | 2ZP-0 | font family | Geist | Geist | match |  |
| synthesized (read only, no value) | light | textarea | 2ZP-0 | font size | 14 | 14 | match |  |
| synthesized (read only, no value) | light | textarea | 2ZP-0 | font weight | 400 | 400 | match |  |
| synthesized (read only, no value) | light | textarea | 2ZP-0 | line height | 21 | 21 | match |  |
| synthesized (read only, no value) | light | textarea | 2ZP-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| synthesized (read only, no value) | light | textarea | 2ZP-0 | ::placeholder opacity | 1 | 1 | match |  |
| synthesized (read only, no value) | light | textarea | 2ZO-0 | outline | none | none | match |  |
| ReadOnly | light | textarea | 2ZS-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| ReadOnly | light | textarea | 2ZS-0 | height | 81 | 81 | match |  |
| ReadOnly | light | textarea | 2ZS-0 | background | oklch(0.96 0.005 260) | oklch(0.96 0.005 260) | match |  |
| ReadOnly | light | textarea | 2ZS-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| ReadOnly | light | textarea | 2ZS-0 | border width and style | 1px solid | 1px solid | match |  |
| ReadOnly | light | textarea | 2ZS-0 | radius | 6 | 6 | match |  |
| ReadOnly | light | textarea | 2ZS-0 | padding | 8 12 | 8 12 | match |  |
| ReadOnly | light | textarea | 2ZT-0 | font family | Geist | Geist | match |  |
| ReadOnly | light | textarea | 2ZT-0 | font size | 14 | 14 | match |  |
| ReadOnly | light | textarea | 2ZT-0 | font weight | 400 | 400 | match |  |
| ReadOnly | light | textarea | 2ZT-0 | line height | 21 | 21 | match |  |
| ReadOnly | light | textarea | 2ZT-0 | text color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| ReadOnly | light | textarea | 2ZT-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| ReadOnly | light | textarea | 2ZS-0 | outline | none | none | match |  |
| Sizes | light | textarea sm | 30H-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Sizes | light | textarea sm | 30H-0 | height | 73 | 73 | match |  |
| Sizes | light | textarea sm | 30H-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Sizes | light | textarea sm | 30H-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Sizes | light | textarea sm | 30H-0 | border width and style | 1px solid | 1px solid | match |  |
| Sizes | light | textarea sm | 30H-0 | radius | 6 | 6 | match |  |
| Sizes | light | textarea sm | 30H-0 | padding | 4 8 | 4 8 | match |  |
| Sizes | light | textarea sm | 30I-0 | font family | Geist | Geist | match |  |
| Sizes | light | textarea sm | 30I-0 | font size | 14 | 14 | match |  |
| Sizes | light | textarea sm | 30I-0 | font weight | 400 | 400 | match |  |
| Sizes | light | textarea sm | 30I-0 | line height | 21 | 21 | match |  |
| Sizes | light | textarea sm | 30I-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| Sizes | light | textarea sm | 30I-0 | ::placeholder opacity | 1 | 1 | match |  |
| Sizes | light | textarea sm | 30H-0 | outline | none | none | match |  |
| Sizes | light | textarea md | 30J-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Sizes | light | textarea md | 30J-0 | height | 81 | 81 | match |  |
| Sizes | light | textarea md | 30J-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Sizes | light | textarea md | 30J-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Sizes | light | textarea md | 30J-0 | border width and style | 1px solid | 1px solid | match |  |
| Sizes | light | textarea md | 30J-0 | radius | 6 | 6 | match |  |
| Sizes | light | textarea md | 30J-0 | padding | 8 12 | 8 12 | match |  |
| Sizes | light | textarea md | 30K-0 | font family | Geist | Geist | match |  |
| Sizes | light | textarea md | 30K-0 | font size | 14 | 14 | match |  |
| Sizes | light | textarea md | 30K-0 | font weight | 400 | 400 | match |  |
| Sizes | light | textarea md | 30K-0 | line height | 21 | 21 | match |  |
| Sizes | light | textarea md | 30K-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| Sizes | light | textarea md | 30K-0 | ::placeholder opacity | 1 | 1 | match |  |
| Sizes | light | textarea md | 30J-0 | outline | none | none | match |  |
| Sizes | light | textarea lg | 30L-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Sizes | light | textarea lg | 30L-0 | height | 98 | 98 | match |  |
| Sizes | light | textarea lg | 30L-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Sizes | light | textarea lg | 30L-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Sizes | light | textarea lg | 30L-0 | border width and style | 1px solid | 1px solid | match |  |
| Sizes | light | textarea lg | 30L-0 | radius | 6 | 6 | match |  |
| Sizes | light | textarea lg | 30L-0 | padding | 12 16 | 12 16 | match |  |
| Sizes | light | textarea lg | 30M-0 | font family | Geist | Geist | match |  |
| Sizes | light | textarea lg | 30M-0 | font size | 16 | 16 | match |  |
| Sizes | light | textarea lg | 30M-0 | font weight | 400 | 400 | match |  |
| Sizes | light | textarea lg | 30M-0 | line height | 24 | 24 | match |  |
| Sizes | light | textarea lg | 30M-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| Sizes | light | textarea lg | 30M-0 | ::placeholder opacity | 1 | 1 | match |  |
| Sizes | light | textarea lg | 30L-0 | outline | none | none | match |  |
| Autoresize | light | textarea | 30T-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Autoresize | light | textarea | 30T-0 | height | 123 | 123 | match |  |
| Autoresize | light | textarea | 30T-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Autoresize | light | textarea | 30T-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Autoresize | light | textarea | 30T-0 | border width and style | 1px solid | 1px solid | match |  |
| Autoresize | light | textarea | 30T-0 | radius | 6 | 6 | match |  |
| Autoresize | light | textarea | 30T-0 | padding | 8 12 | 8 12 | match |  |
| Autoresize | light | textarea | 30U-0 | font family | Geist | Geist | match |  |
| Autoresize | light | textarea | 30U-0 | font size | 14 | 14 | match |  |
| Autoresize | light | textarea | 30U-0 | font weight | 400 | 400 | match |  |
| Autoresize | light | textarea | 30U-0 | line height | 21 | 21 | match |  |
| Autoresize | light | textarea | 30U-0 | text color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| Autoresize | light | textarea | 30U-0 | value line count | 5 | 5 | match | five explicit lines |
| Autoresize | light | textarea | 30T-0 | outline | none | none | match |  |
| InField | light | textarea | 315-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| InField | light | textarea | 315-0 | height | 81 | 81 | match |  |
| InField | light | textarea | 315-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| InField | light | textarea | 315-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| InField | light | textarea | 315-0 | border width and style | 1px solid | 1px solid | match |  |
| InField | light | textarea | 315-0 | radius | 6 | 6 | match |  |
| InField | light | textarea | 315-0 | padding | 8 12 | 8 12 | match |  |
| InField | light | textarea | 316-0 | font family | Geist | Geist | match |  |
| InField | light | textarea | 316-0 | font size | 14 | 14 | match |  |
| InField | light | textarea | 316-0 | font weight | 400 | 400 | match |  |
| InField | light | textarea | 316-0 | line height | 21 | 21 | match |  |
| InField | light | textarea | 316-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| InField | light | textarea | 316-0 | ::placeholder opacity | 1 | 1 | match |  |
| InField | light | textarea | 315-0 | outline | none | none | match |  |
| InField | light | root | 311-0 | gap | 8 | 8 | match |  |
| InField | light | label | 313-0 | visibility | shown | shown | match |  |
| InField | light | label | 313-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| InField | light | label | 313-0 | font size | 14 | 14 | match |  |
| InField | light | label | 313-0 | font weight | 500 | 500 | match |  |
| InField | light | label | 313-0 | line height | 21 | 21 | match |  |
| InField | light | indicator | 314-0 | visibility | shown | shown | match |  |
| InField | light | indicator | 314-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |  |
| InField | light | helper | 317-0 | visibility | shown | shown | match |  |
| InField | light | helper | 317-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| InField | light | helper | 317-0 | font size | 12 | 12 | match |  |
| InField | light | helper | 317-0 | font weight | 400 | 400 | match |  |
| InField | light | helper | 317-0 | line height | 18 | 18 | match |  |
| InField | light | error | — | visibility | hidden | hidden | match | error text renders only while invalid |
| InFieldInvalid | light | textarea | 31E-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| InFieldInvalid | light | textarea | 31E-0 | height | 81 | 81 | match |  |
| InFieldInvalid | light | textarea | 31E-0 | background | oklch(1 0 0) | oklch(1 0 0) | match |  |
| InFieldInvalid | light | textarea | 31E-0 | border color | oklch(0.53 0.2 25) | oklch(0.53 0.2 25) | match |  |
| InFieldInvalid | light | textarea | 31E-0 | border width and style | 1px solid | 1px solid | match |  |
| InFieldInvalid | light | textarea | 31E-0 | radius | 6 | 6 | match |  |
| InFieldInvalid | light | textarea | 31E-0 | padding | 8 12 | 8 12 | match |  |
| InFieldInvalid | light | textarea | 31F-0 | font family | Geist | Geist | match |  |
| InFieldInvalid | light | textarea | 31F-0 | font size | 14 | 14 | match |  |
| InFieldInvalid | light | textarea | 31F-0 | font weight | 400 | 400 | match |  |
| InFieldInvalid | light | textarea | 31F-0 | line height | 21 | 21 | match |  |
| InFieldInvalid | light | textarea | 31F-0 | ::placeholder color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| InFieldInvalid | light | textarea | 31F-0 | ::placeholder opacity | 1 | 1 | match |  |
| InFieldInvalid | light | textarea | 31E-0 | outline | none | none | match |  |
| InFieldInvalid | light | root | 31A-0 | gap | 8 | 8 | match |  |
| InFieldInvalid | light | label | 31C-0 | visibility | shown | shown | match |  |
| InFieldInvalid | light | label | 31C-0 | color | oklch(0.23 0.009 260) | oklch(0.23 0.009 260) | match |  |
| InFieldInvalid | light | label | 31C-0 | font size | 14 | 14 | match |  |
| InFieldInvalid | light | label | 31C-0 | font weight | 500 | 500 | match |  |
| InFieldInvalid | light | label | 31C-0 | line height | 21 | 21 | match |  |
| InFieldInvalid | light | indicator | 31D-0 | visibility | shown | shown | match |  |
| InFieldInvalid | light | indicator | 31D-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |  |
| InFieldInvalid | light | helper | 31G-0 | visibility | shown | shown | match |  |
| InFieldInvalid | light | helper | 31G-0 | color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| InFieldInvalid | light | helper | 31G-0 | font size | 12 | 12 | match |  |
| InFieldInvalid | light | helper | 31G-0 | font weight | 400 | 400 | match |  |
| InFieldInvalid | light | helper | 31G-0 | line height | 18 | 18 | match |  |
| InFieldInvalid | light | error | 31H-0 | visibility | shown | shown | match |  |
| InFieldInvalid | light | error | 31H-0 | color | oklch(0.44 0.178 25) | oklch(0.44 0.178 25) | match |  |
| InFieldInvalid | light | error | 31H-0 | font size | 12 | 12 | match |  |
| InFieldInvalid | light | error | 31H-0 | font weight | 500 | 500 | match |  |
| InFieldInvalid | light | error | 31H-0 | line height | 18 | 18 | match |  |

## Dark

| Story and checkpoint | Mode | Part | Paper node | Property | Code value | Paper value | Result | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Default | dark | textarea | 37H-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Default | dark | textarea | 37H-0 | height | 81 | 81 | match |  |
| Default | dark | textarea | 37H-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| Default | dark | textarea | 37H-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Default | dark | textarea | 37H-0 | border width and style | 1px solid | 1px solid | match |  |
| Default | dark | textarea | 37H-0 | radius | 6 | 6 | match |  |
| Default | dark | textarea | 37H-0 | padding | 8 12 | 8 12 | match |  |
| Default | dark | textarea | 37I-0 | font family | Geist | Geist | match |  |
| Default | dark | textarea | 37I-0 | font size | 14 | 14 | match |  |
| Default | dark | textarea | 37I-0 | font weight | 400 | 400 | match |  |
| Default | dark | textarea | 37I-0 | line height | 21 | 21 | match |  |
| Default | dark | textarea | 37I-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| Default | dark | textarea | 37I-0 | ::placeholder opacity | 1 | 1 | match |  |
| Default | dark | textarea | 37H-0 | outline | none | none | match |  |
| WithValue | dark | textarea | 37D-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| WithValue | dark | textarea | 37D-0 | height | 81 | 81 | match |  |
| WithValue | dark | textarea | 37D-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| WithValue | dark | textarea | 37D-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| WithValue | dark | textarea | 37D-0 | border width and style | 1px solid | 1px solid | match |  |
| WithValue | dark | textarea | 37D-0 | radius | 6 | 6 | match |  |
| WithValue | dark | textarea | 37D-0 | padding | 8 12 | 8 12 | match |  |
| WithValue | dark | textarea | 37E-0 | font family | Geist | Geist | match |  |
| WithValue | dark | textarea | 37E-0 | font size | 14 | 14 | match |  |
| WithValue | dark | textarea | 37E-0 | font weight | 400 | 400 | match |  |
| WithValue | dark | textarea | 37E-0 | line height | 21 | 21 | match |  |
| WithValue | dark | textarea | 37E-0 | text color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| WithValue | dark | textarea | 37E-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| WithValue | dark | textarea | 37D-0 | outline | none | none | match |  |
| Hover | dark | textarea | 376-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Hover | dark | textarea | 376-0 | height | 81 | 81 | match |  |
| Hover | dark | textarea | 376-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| Hover | dark | textarea | 376-0 | border color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| Hover | dark | textarea | 376-0 | border width and style | 1px solid | 1px solid | match |  |
| Hover | dark | textarea | 376-0 | radius | 6 | 6 | match |  |
| Hover | dark | textarea | 376-0 | padding | 8 12 | 8 12 | match |  |
| Hover | dark | textarea | 377-0 | font family | Geist | Geist | match |  |
| Hover | dark | textarea | 377-0 | font size | 14 | 14 | match |  |
| Hover | dark | textarea | 377-0 | font weight | 400 | 400 | match |  |
| Hover | dark | textarea | 377-0 | line height | 21 | 21 | match |  |
| Hover | dark | textarea | 377-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| Hover | dark | textarea | 377-0 | ::placeholder opacity | 1 | 1 | match |  |
| Hover | dark | textarea | 376-0 | outline | none | none | match |  |
| synthesized (value, hover) | dark | textarea | 372-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (value, hover) | dark | textarea | 372-0 | height | 81 | 81 | match |  |
| synthesized (value, hover) | dark | textarea | 372-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| synthesized (value, hover) | dark | textarea | 372-0 | border color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| synthesized (value, hover) | dark | textarea | 372-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (value, hover) | dark | textarea | 372-0 | radius | 6 | 6 | match |  |
| synthesized (value, hover) | dark | textarea | 372-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (value, hover) | dark | textarea | 373-0 | font family | Geist | Geist | match |  |
| synthesized (value, hover) | dark | textarea | 373-0 | font size | 14 | 14 | match |  |
| synthesized (value, hover) | dark | textarea | 373-0 | font weight | 400 | 400 | match |  |
| synthesized (value, hover) | dark | textarea | 373-0 | line height | 21 | 21 | match |  |
| synthesized (value, hover) | dark | textarea | 373-0 | text color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| synthesized (value, hover) | dark | textarea | 373-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| synthesized (value, hover) | dark | textarea | 372-0 | outline | none | none | match |  |
| FocusVisible | dark | textarea | 36V-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| FocusVisible | dark | textarea | 36V-0 | height | 81 | 81 | match |  |
| FocusVisible | dark | textarea | 36V-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| FocusVisible | dark | textarea | 36V-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| FocusVisible | dark | textarea | 36V-0 | border width and style | 1px solid | 1px solid | match |  |
| FocusVisible | dark | textarea | 36V-0 | radius | 6 | 6 | match |  |
| FocusVisible | dark | textarea | 36V-0 | padding | 8 12 | 8 12 | match |  |
| FocusVisible | dark | textarea | 36W-0 | font family | Geist | Geist | match |  |
| FocusVisible | dark | textarea | 36W-0 | font size | 14 | 14 | match |  |
| FocusVisible | dark | textarea | 36W-0 | font weight | 400 | 400 | match |  |
| FocusVisible | dark | textarea | 36W-0 | line height | 21 | 21 | match |  |
| FocusVisible | dark | textarea | 36W-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| FocusVisible | dark | textarea | 36W-0 | ::placeholder opacity | 1 | 1 | match |  |
| FocusVisible | dark | textarea | 36V-0 | outline | 2px solid oklch(0.73 0.141 258) | 2px solid oklch(0.73 0.141 258) | match |  |
| FocusVisible | dark | textarea | 36V-0 | outline offset | 0px | 0px | match |  |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | height | 81 | 81 | match |  |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | radius | 6 | 6 | match |  |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (value, focus visible) | dark | textarea | 36S-0 | font family | Geist | Geist | match |  |
| synthesized (value, focus visible) | dark | textarea | 36S-0 | font size | 14 | 14 | match |  |
| synthesized (value, focus visible) | dark | textarea | 36S-0 | font weight | 400 | 400 | match |  |
| synthesized (value, focus visible) | dark | textarea | 36S-0 | line height | 21 | 21 | match |  |
| synthesized (value, focus visible) | dark | textarea | 36S-0 | text color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| synthesized (value, focus visible) | dark | textarea | 36S-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | outline | 2px solid oklch(0.73 0.141 258) | 2px solid oklch(0.73 0.141 258) | match |  |
| synthesized (value, focus visible) | dark | textarea | 36R-0 | outline offset | 0px | 0px | match |  |
| synthesized (invalid, no value) | dark | textarea | 36K-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (invalid, no value) | dark | textarea | 36K-0 | height | 81 | 81 | match |  |
| synthesized (invalid, no value) | dark | textarea | 36K-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| synthesized (invalid, no value) | dark | textarea | 36K-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |  |
| synthesized (invalid, no value) | dark | textarea | 36K-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (invalid, no value) | dark | textarea | 36K-0 | radius | 6 | 6 | match |  |
| synthesized (invalid, no value) | dark | textarea | 36K-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (invalid, no value) | dark | textarea | 36L-0 | font family | Geist | Geist | match |  |
| synthesized (invalid, no value) | dark | textarea | 36L-0 | font size | 14 | 14 | match |  |
| synthesized (invalid, no value) | dark | textarea | 36L-0 | font weight | 400 | 400 | match |  |
| synthesized (invalid, no value) | dark | textarea | 36L-0 | line height | 21 | 21 | match |  |
| synthesized (invalid, no value) | dark | textarea | 36L-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| synthesized (invalid, no value) | dark | textarea | 36L-0 | ::placeholder opacity | 1 | 1 | match |  |
| synthesized (invalid, no value) | dark | textarea | 36K-0 | outline | none | none | match |  |
| Invalid | dark | textarea | 36G-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Invalid | dark | textarea | 36G-0 | height | 81 | 81 | match |  |
| Invalid | dark | textarea | 36G-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| Invalid | dark | textarea | 36G-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |  |
| Invalid | dark | textarea | 36G-0 | border width and style | 1px solid | 1px solid | match |  |
| Invalid | dark | textarea | 36G-0 | radius | 6 | 6 | match |  |
| Invalid | dark | textarea | 36G-0 | padding | 8 12 | 8 12 | match |  |
| Invalid | dark | textarea | 36H-0 | font family | Geist | Geist | match |  |
| Invalid | dark | textarea | 36H-0 | font size | 14 | 14 | match |  |
| Invalid | dark | textarea | 36H-0 | font weight | 400 | 400 | match |  |
| Invalid | dark | textarea | 36H-0 | line height | 21 | 21 | match |  |
| Invalid | dark | textarea | 36H-0 | text color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Invalid | dark | textarea | 36H-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| Invalid | dark | textarea | 36G-0 | outline | none | none | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | height | 81 | 81 | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | radius | 6 | 6 | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 36A-0 | font family | Geist | Geist | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 36A-0 | font size | 14 | 14 | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 36A-0 | font weight | 400 | 400 | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 36A-0 | line height | 21 | 21 | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 36A-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 36A-0 | ::placeholder opacity | 1 | 1 | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | outline | 2px solid oklch(0.73 0.166 25) | 2px solid oklch(0.73 0.166 25) | match |  |
| synthesized (invalid, no value, focus visible) | dark | textarea | 369-0 | outline offset | 0px | 0px | match |  |
| InvalidFocused | dark | textarea | 365-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| InvalidFocused | dark | textarea | 365-0 | height | 81 | 81 | match |  |
| InvalidFocused | dark | textarea | 365-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| InvalidFocused | dark | textarea | 365-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |  |
| InvalidFocused | dark | textarea | 365-0 | border width and style | 1px solid | 1px solid | match |  |
| InvalidFocused | dark | textarea | 365-0 | radius | 6 | 6 | match |  |
| InvalidFocused | dark | textarea | 365-0 | padding | 8 12 | 8 12 | match |  |
| InvalidFocused | dark | textarea | 366-0 | font family | Geist | Geist | match |  |
| InvalidFocused | dark | textarea | 366-0 | font size | 14 | 14 | match |  |
| InvalidFocused | dark | textarea | 366-0 | font weight | 400 | 400 | match |  |
| InvalidFocused | dark | textarea | 366-0 | line height | 21 | 21 | match |  |
| InvalidFocused | dark | textarea | 366-0 | text color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| InvalidFocused | dark | textarea | 366-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| InvalidFocused | dark | textarea | 365-0 | outline | 2px solid oklch(0.73 0.166 25) | 2px solid oklch(0.73 0.166 25) | match |  |
| InvalidFocused | dark | textarea | 365-0 | outline offset | 0px | 0px | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Y-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (disabled, no value) | dark | textarea | 35Y-0 | height | 81 | 81 | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Y-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Y-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Y-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Y-0 | radius | 6 | 6 | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Y-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Z-0 | font family | Geist | Geist | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Z-0 | font size | 14 | 14 | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Z-0 | font weight | 400 | 400 | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Z-0 | line height | 21 | 21 | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Z-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Z-0 | ::placeholder opacity | 1 | 1 | match |  |
| synthesized (disabled, no value) | dark | textarea | 35Y-0 | outline | none | none | match |  |
| Disabled | dark | textarea | 35U-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Disabled | dark | textarea | 35U-0 | height | 81 | 81 | match |  |
| Disabled | dark | textarea | 35U-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| Disabled | dark | textarea | 35U-0 | border color | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |  |
| Disabled | dark | textarea | 35U-0 | border width and style | 1px solid | 1px solid | match |  |
| Disabled | dark | textarea | 35U-0 | radius | 6 | 6 | match |  |
| Disabled | dark | textarea | 35U-0 | padding | 8 12 | 8 12 | match |  |
| Disabled | dark | textarea | 35V-0 | font family | Geist | Geist | match |  |
| Disabled | dark | textarea | 35V-0 | font size | 14 | 14 | match |  |
| Disabled | dark | textarea | 35V-0 | font weight | 400 | 400 | match |  |
| Disabled | dark | textarea | 35V-0 | line height | 21 | 21 | match |  |
| Disabled | dark | textarea | 35V-0 | text color | oklch(0.53 0.017 260) | oklch(0.53 0.017 260) | match |  |
| Disabled | dark | textarea | 35V-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| Disabled | dark | textarea | 35U-0 | outline | none | none | match |  |
| synthesized (read only, no value) | dark | textarea | 35N-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| synthesized (read only, no value) | dark | textarea | 35N-0 | height | 81 | 81 | match |  |
| synthesized (read only, no value) | dark | textarea | 35N-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |  |
| synthesized (read only, no value) | dark | textarea | 35N-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| synthesized (read only, no value) | dark | textarea | 35N-0 | border width and style | 1px solid | 1px solid | match |  |
| synthesized (read only, no value) | dark | textarea | 35N-0 | radius | 6 | 6 | match |  |
| synthesized (read only, no value) | dark | textarea | 35N-0 | padding | 8 12 | 8 12 | match |  |
| synthesized (read only, no value) | dark | textarea | 35O-0 | font family | Geist | Geist | match |  |
| synthesized (read only, no value) | dark | textarea | 35O-0 | font size | 14 | 14 | match |  |
| synthesized (read only, no value) | dark | textarea | 35O-0 | font weight | 400 | 400 | match |  |
| synthesized (read only, no value) | dark | textarea | 35O-0 | line height | 21 | 21 | match |  |
| synthesized (read only, no value) | dark | textarea | 35O-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| synthesized (read only, no value) | dark | textarea | 35O-0 | ::placeholder opacity | 1 | 1 | match |  |
| synthesized (read only, no value) | dark | textarea | 35N-0 | outline | none | none | match |  |
| ReadOnly | dark | textarea | 35J-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| ReadOnly | dark | textarea | 35J-0 | height | 81 | 81 | match |  |
| ReadOnly | dark | textarea | 35J-0 | background | oklch(0.44 0.015 260) | oklch(0.44 0.015 260) | match |  |
| ReadOnly | dark | textarea | 35J-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| ReadOnly | dark | textarea | 35J-0 | border width and style | 1px solid | 1px solid | match |  |
| ReadOnly | dark | textarea | 35J-0 | radius | 6 | 6 | match |  |
| ReadOnly | dark | textarea | 35J-0 | padding | 8 12 | 8 12 | match |  |
| ReadOnly | dark | textarea | 35K-0 | font family | Geist | Geist | match |  |
| ReadOnly | dark | textarea | 35K-0 | font size | 14 | 14 | match |  |
| ReadOnly | dark | textarea | 35K-0 | font weight | 400 | 400 | match |  |
| ReadOnly | dark | textarea | 35K-0 | line height | 21 | 21 | match |  |
| ReadOnly | dark | textarea | 35K-0 | text color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| ReadOnly | dark | textarea | 35K-0 | value line count | 2 | 2 | match | Paper count read from a scale 2 screenshot |
| ReadOnly | dark | textarea | 35J-0 | outline | none | none | match |  |
| Sizes | dark | textarea sm | 358-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Sizes | dark | textarea sm | 358-0 | height | 73 | 73 | match |  |
| Sizes | dark | textarea sm | 358-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| Sizes | dark | textarea sm | 358-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Sizes | dark | textarea sm | 358-0 | border width and style | 1px solid | 1px solid | match |  |
| Sizes | dark | textarea sm | 358-0 | radius | 6 | 6 | match |  |
| Sizes | dark | textarea sm | 358-0 | padding | 4 8 | 4 8 | match |  |
| Sizes | dark | textarea sm | 359-0 | font family | Geist | Geist | match |  |
| Sizes | dark | textarea sm | 359-0 | font size | 14 | 14 | match |  |
| Sizes | dark | textarea sm | 359-0 | font weight | 400 | 400 | match |  |
| Sizes | dark | textarea sm | 359-0 | line height | 21 | 21 | match |  |
| Sizes | dark | textarea sm | 359-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| Sizes | dark | textarea sm | 359-0 | ::placeholder opacity | 1 | 1 | match |  |
| Sizes | dark | textarea sm | 358-0 | outline | none | none | match |  |
| Sizes | dark | textarea md | 356-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Sizes | dark | textarea md | 356-0 | height | 81 | 81 | match |  |
| Sizes | dark | textarea md | 356-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| Sizes | dark | textarea md | 356-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Sizes | dark | textarea md | 356-0 | border width and style | 1px solid | 1px solid | match |  |
| Sizes | dark | textarea md | 356-0 | radius | 6 | 6 | match |  |
| Sizes | dark | textarea md | 356-0 | padding | 8 12 | 8 12 | match |  |
| Sizes | dark | textarea md | 357-0 | font family | Geist | Geist | match |  |
| Sizes | dark | textarea md | 357-0 | font size | 14 | 14 | match |  |
| Sizes | dark | textarea md | 357-0 | font weight | 400 | 400 | match |  |
| Sizes | dark | textarea md | 357-0 | line height | 21 | 21 | match |  |
| Sizes | dark | textarea md | 357-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| Sizes | dark | textarea md | 357-0 | ::placeholder opacity | 1 | 1 | match |  |
| Sizes | dark | textarea md | 356-0 | outline | none | none | match |  |
| Sizes | dark | textarea lg | 354-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Sizes | dark | textarea lg | 354-0 | height | 98 | 98 | match |  |
| Sizes | dark | textarea lg | 354-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| Sizes | dark | textarea lg | 354-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Sizes | dark | textarea lg | 354-0 | border width and style | 1px solid | 1px solid | match |  |
| Sizes | dark | textarea lg | 354-0 | radius | 6 | 6 | match |  |
| Sizes | dark | textarea lg | 354-0 | padding | 12 16 | 12 16 | match |  |
| Sizes | dark | textarea lg | 355-0 | font family | Geist | Geist | match |  |
| Sizes | dark | textarea lg | 355-0 | font size | 16 | 16 | match |  |
| Sizes | dark | textarea lg | 355-0 | font weight | 400 | 400 | match |  |
| Sizes | dark | textarea lg | 355-0 | line height | 24 | 24 | match |  |
| Sizes | dark | textarea lg | 355-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| Sizes | dark | textarea lg | 355-0 | ::placeholder opacity | 1 | 1 | match |  |
| Sizes | dark | textarea lg | 354-0 | outline | none | none | match |  |
| Autoresize | dark | textarea | 34W-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| Autoresize | dark | textarea | 34W-0 | height | 123 | 123 | match |  |
| Autoresize | dark | textarea | 34W-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| Autoresize | dark | textarea | 34W-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| Autoresize | dark | textarea | 34W-0 | border width and style | 1px solid | 1px solid | match |  |
| Autoresize | dark | textarea | 34W-0 | radius | 6 | 6 | match |  |
| Autoresize | dark | textarea | 34W-0 | padding | 8 12 | 8 12 | match |  |
| Autoresize | dark | textarea | 34X-0 | font family | Geist | Geist | match |  |
| Autoresize | dark | textarea | 34X-0 | font size | 14 | 14 | match |  |
| Autoresize | dark | textarea | 34X-0 | font weight | 400 | 400 | match |  |
| Autoresize | dark | textarea | 34X-0 | line height | 21 | 21 | match |  |
| Autoresize | dark | textarea | 34X-0 | text color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| Autoresize | dark | textarea | 34X-0 | value line count | 5 | 5 | match | five explicit lines |
| Autoresize | dark | textarea | 34W-0 | outline | none | none | match |  |
| InField | dark | textarea | 34M-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| InField | dark | textarea | 34M-0 | height | 81 | 81 | match |  |
| InField | dark | textarea | 34M-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| InField | dark | textarea | 34M-0 | border color | oklch(0.63 0.018 260) | oklch(0.63 0.018 260) | match |  |
| InField | dark | textarea | 34M-0 | border width and style | 1px solid | 1px solid | match |  |
| InField | dark | textarea | 34M-0 | radius | 6 | 6 | match |  |
| InField | dark | textarea | 34M-0 | padding | 8 12 | 8 12 | match |  |
| InField | dark | textarea | 34N-0 | font family | Geist | Geist | match |  |
| InField | dark | textarea | 34N-0 | font size | 14 | 14 | match |  |
| InField | dark | textarea | 34N-0 | font weight | 400 | 400 | match |  |
| InField | dark | textarea | 34N-0 | line height | 21 | 21 | match |  |
| InField | dark | textarea | 34N-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| InField | dark | textarea | 34N-0 | ::placeholder opacity | 1 | 1 | match |  |
| InField | dark | textarea | 34M-0 | outline | none | none | match |  |
| InField | dark | root | 34K-0 | gap | 8 | 8 | match |  |
| InField | dark | label | 34Q-0 | visibility | shown | shown | match |  |
| InField | dark | label | 34Q-0 | color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| InField | dark | label | 34Q-0 | font size | 14 | 14 | match |  |
| InField | dark | label | 34Q-0 | font weight | 500 | 500 | match |  |
| InField | dark | label | 34Q-0 | line height | 21 | 21 | match |  |
| InField | dark | indicator | 34P-0 | visibility | shown | shown | match |  |
| InField | dark | indicator | 34P-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |  |
| InField | dark | helper | 34L-0 | visibility | shown | shown | match |  |
| InField | dark | helper | 34L-0 | color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| InField | dark | helper | 34L-0 | font size | 12 | 12 | match |  |
| InField | dark | helper | 34L-0 | font weight | 400 | 400 | match |  |
| InField | dark | helper | 34L-0 | line height | 18 | 18 | match |  |
| InField | dark | error | — | visibility | hidden | hidden | match | error text renders only while invalid |
| InFieldInvalid | dark | textarea | 34D-0 | width | 320 | 320 | match | Paper 100% of the 320 px cell |
| InFieldInvalid | dark | textarea | 34D-0 | height | 81 | 81 | match |  |
| InFieldInvalid | dark | textarea | 34D-0 | background | oklch(0.33 0.013 260) | oklch(0.33 0.013 260) | match |  |
| InFieldInvalid | dark | textarea | 34D-0 | border color | oklch(0.73 0.166 25) | oklch(0.73 0.166 25) | match |  |
| InFieldInvalid | dark | textarea | 34D-0 | border width and style | 1px solid | 1px solid | match |  |
| InFieldInvalid | dark | textarea | 34D-0 | radius | 6 | 6 | match |  |
| InFieldInvalid | dark | textarea | 34D-0 | padding | 8 12 | 8 12 | match |  |
| InFieldInvalid | dark | textarea | 34E-0 | font family | Geist | Geist | match |  |
| InFieldInvalid | dark | textarea | 34E-0 | font size | 14 | 14 | match |  |
| InFieldInvalid | dark | textarea | 34E-0 | font weight | 400 | 400 | match |  |
| InFieldInvalid | dark | textarea | 34E-0 | line height | 21 | 21 | match |  |
| InFieldInvalid | dark | textarea | 34E-0 | ::placeholder color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| InFieldInvalid | dark | textarea | 34E-0 | ::placeholder opacity | 1 | 1 | match |  |
| InFieldInvalid | dark | textarea | 34D-0 | outline | none | none | match |  |
| InFieldInvalid | dark | root | 34A-0 | gap | 8 | 8 | match |  |
| InFieldInvalid | dark | label | 34H-0 | visibility | shown | shown | match |  |
| InFieldInvalid | dark | label | 34H-0 | color | oklch(1 0 0) | oklch(1 0 0) | match |  |
| InFieldInvalid | dark | label | 34H-0 | font size | 14 | 14 | match |  |
| InFieldInvalid | dark | label | 34H-0 | font weight | 500 | 500 | match |  |
| InFieldInvalid | dark | label | 34H-0 | line height | 21 | 21 | match |  |
| InFieldInvalid | dark | indicator | 34G-0 | visibility | shown | shown | match |  |
| InFieldInvalid | dark | indicator | 34G-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |  |
| InFieldInvalid | dark | helper | 34C-0 | visibility | shown | shown | match |  |
| InFieldInvalid | dark | helper | 34C-0 | color | oklch(0.84 0.014 260) | oklch(0.84 0.014 260) | match |  |
| InFieldInvalid | dark | helper | 34C-0 | font size | 12 | 12 | match |  |
| InFieldInvalid | dark | helper | 34C-0 | font weight | 400 | 400 | match |  |
| InFieldInvalid | dark | helper | 34C-0 | line height | 18 | 18 | match |  |
| InFieldInvalid | dark | error | 34B-0 | visibility | shown | shown | match |  |
| InFieldInvalid | dark | error | 34B-0 | color | oklch(0.9 0.052 25) | oklch(0.9 0.052 25) | match |  |
| InFieldInvalid | dark | error | 34B-0 | font size | 12 | 12 | match |  |
| InFieldInvalid | dark | error | 34B-0 | font weight | 500 | 500 | match |  |
| InFieldInvalid | dark | error | 34B-0 | line height | 18 | 18 | match |  |
