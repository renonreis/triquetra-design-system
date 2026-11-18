import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    passWithNoTests: true,
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}', 'tokens/**/*.test.ts'],
          setupFiles: ['./src/test/setup.ts'],
        },
      },
      // Every story is tested in both color modes (a11y addon in `error` mode, incl. contrast).
      ...(['light', 'dark'] as const).map((mode) => ({
        extends: true as const,
        plugins: [tailwindcss(), storybookTest({ configDir: '.storybook' })],
        define: { 'import.meta.env.STORYBOOK_TEST_MODE': JSON.stringify(mode) },
        test: {
          name: `storybook:${mode}`,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' as const }],
          },
        },
      })),
    ],
  },
});
