# Package smoke tests

Fixtures that install the **packed tarball** of `@renonreis/triquetra` (exactly what gets
published) into clean apps outside the workspace, then build them. They catch broken
`exports`, missing files in `files`, bad type declarations and RSC (`'use client'`) issues
that `workspace:*` consumers like `apps/sample` can't see.

Run with `pnpm test:package` (CI job `Package (packed tarball)`).
