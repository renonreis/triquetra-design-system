import { defineConfig } from '@playwright/test';

/**
 * Visual regression of Storybook stories tagged `visual`, in light and dark.
 * Screenshots are OS-sensitive: run only in the Playwright Docker image
 * (`pnpm test:visual:docker`, `pnpm test:visual:update`) or in CI.
 */
export default defineConfig({
  testDir: 'tests/visual',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:6007',
    viewport: { width: 1024, height: 768 },
    deviceScaleFactor: 1,
    browserName: 'chromium',
  },
  expect: {
    toHaveScreenshot: { animations: 'disabled', caret: 'hide', scale: 'css' },
  },
  webServer: {
    command:
      'pnpm exec vite preview --outDir storybook-static --port 6007 --strictPort --host 127.0.0.1',
    url: 'http://127.0.0.1:6007/index.json',
    reuseExistingServer: !process.env.CI,
  },
});
