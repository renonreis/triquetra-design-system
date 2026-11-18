#!/usr/bin/env bash
# Runs the visual regression suite inside the Playwright Docker image (linux/amd64), the same environment as CI.
# Usage: scripts/visual-docker.sh [extra playwright args, e.g. --update-snapshots]
set -euo pipefail
cd "$(dirname "$0")/.."

PLAYWRIGHT_VERSION=$(node -p "require('@playwright/test/package.json').version")
PNPM_VERSION=$(node -p "require('./package.json').packageManager.split('@')[1]")
IMAGE="mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-noble"

docker run --rm --ipc=host --platform linux/amd64 \
  -v "$PWD":/work \
  -v triquetra-visual-node-modules:/work/node_modules \
  -v triquetra-visual-pnpm-store:/root/.local/share/pnpm/store \
  -w /work -e CI=1 -e STORYBOOK_DISABLE_TELEMETRY=1 \
  "$IMAGE" \
  bash -c "npm install -g pnpm@${PNPM_VERSION} >/dev/null 2>&1 \
    && pnpm install --frozen-lockfile \
    && pnpm build-storybook --quiet \
    && pnpm exec playwright test $*"
