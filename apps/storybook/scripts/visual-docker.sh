#!/usr/bin/env bash
# Runs the visual regression suite inside the Playwright Docker image (linux/amd64), the same environment as CI.
# Usage: scripts/visual-docker.sh [extra playwright args, e.g. --update-snapshots]
set -euo pipefail
APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ROOT="$(cd "$APP_DIR/../.." && pwd)"
cd "$APP_DIR"

PLAYWRIGHT_VERSION=$(node -p "require('@playwright/test/package.json').version")
PNPM_VERSION=$(node -p "require('$ROOT/package.json').packageManager.split('@')[1]")
IMAGE="mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-noble"

# Linux node_modules live in named volumes so they never mix with the host's macOS binaries.
docker run --rm --ipc=host --platform linux/amd64 \
  -v "$ROOT":/work \
  -v triquetra-visual-nm-root:/work/node_modules \
  -v triquetra-visual-nm-react:/work/packages/react/node_modules \
  -v triquetra-visual-nm-storybook:/work/apps/storybook/node_modules \
  -v triquetra-visual-pnpm-store:/root/.local/share/pnpm/store \
  -w /work -e CI=1 -e STORYBOOK_DISABLE_TELEMETRY=1 -e TURBO_TELEMETRY_DISABLED=1 \
  "$IMAGE" \
  bash -c "npm install -g pnpm@${PNPM_VERSION} >/dev/null 2>&1 \
    && pnpm install --frozen-lockfile \
    && pnpm turbo run build-storybook --filter=storybook --output-logs=errors-only \
    && cd apps/storybook && pnpm exec playwright test $*"
