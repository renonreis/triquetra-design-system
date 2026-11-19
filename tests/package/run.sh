#!/usr/bin/env bash
# Packs @renonreis/triquetra and installs the tarball into clean Vite and Next.js apps outside
# the workspace (tests/package/{vite,next}), then lints the package metadata and builds both apps.
set -euo pipefail

root="$(cd "$(dirname "$0")/../.." && pwd)"
work="$(mktemp -d "${RUNNER_TEMP:-${TMPDIR:-/tmp}}/triquetra-package.XXXXXX")"
trap 'rm -rf "$work"' EXIT

echo "▶ Building and packing @renonreis/triquetra"
cd "$root"
pnpm turbo run build --filter=@renonreis/triquetra --output-logs=errors-only
(cd packages/react && pnpm pack --out "$work/triquetra.tgz" >/dev/null)
echo "  $(tar -tzf "$work/triquetra.tgz" | wc -l | tr -d ' ') files in the tarball"

echo "▶ Linting package metadata (publint, are-the-types-wrong)"
pnpm dlx publint@0.3.25 run --strict "$work/triquetra.tgz"
# CSS entry points are not modules, so attw cannot resolve them.
pnpm dlx @arethetypeswrong/cli@0.18.5 "$work/triquetra.tgz" --profile esm-only \
  --exclude-entrypoints styles.css tokens.css theme.css

for app in vite next; do
  echo "▶ Installing the tarball into a clean $app app"
  cp -R "$root/tests/package/$app" "$work/$app"
  (
    cd "$work/$app"
    pnpm install --ignore-workspace --reporter=append-only >/dev/null
    echo "▶ Building the $app app"
    pnpm run build
  )
done

echo "✔ Package smoke tests passed"
