---
'@renonreis/triquetra': minor
---

Add `Popover`, a panel opened by a click that holds text, links or a small form, built on Ark UI with Dialog's part names (`Popover.Root`, `Trigger`, `Content`, `Header`, `Title`, `Description`, `Body`, `Footer`, `CloseTrigger`). It is not modal: focus moves in and returns to the trigger, and Escape, the close button or an outside press close it. It opens below the trigger, is 320 px wide, shrinks and scrolls to stay inside the viewport, renders in a portal, and leaves nothing in the DOM while closed. Every default can be overridden.
