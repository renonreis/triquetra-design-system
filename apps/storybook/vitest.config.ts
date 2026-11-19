import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  // Pre-bundle runtime deps so a cold run (CI) never re-optimizes and reloads mid-test.
  optimizeDeps: {
    include: [
      '@ark-ui/react',
      '@ark-ui/react/factory',
      'tailwind-variants',
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
    ],
  },
  test: {
    // Every story is tested in both color modes (a11y addon in `error` mode, incl. contrast).
    projects: (['light', 'dark'] as const).map((mode) => ({
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
  },
});
