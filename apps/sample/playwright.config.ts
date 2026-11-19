import { defineConfig, devices } from '@playwright/test';

const port = 3100;

// Smoke tests against the production build (`pnpm build` first). Timeouts stay short so a
// broken page fails fast instead of hanging.
export default defineConfig({
  testDir: 'tests',
  timeout: 15_000,
  globalTimeout: 5 * 60_000,
  expect: { timeout: 5_000 },
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL: `http://127.0.0.1:${String(port)}`, trace: 'retain-on-failure' },
  projects: [
    { name: 'light', use: { ...devices['Desktop Chrome'], colorScheme: 'light' } },
    { name: 'dark', use: { ...devices['Desktop Chrome'], colorScheme: 'dark' } },
  ],
  webServer: {
    command: `pnpm exec next start --port ${String(port)} --hostname 127.0.0.1`,
    url: `http://127.0.0.1:${String(port)}`,
    timeout: 30_000,
    reuseExistingServer: !process.env.CI,
  },
});
