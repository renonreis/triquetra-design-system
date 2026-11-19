---
'@renonreis/triquetra': patch
---

Type declarations now use explicit `.js` extensions in relative imports, so projects with `moduleResolution: "node16"` or `"nodenext"` resolve the component types instead of getting `any`.
