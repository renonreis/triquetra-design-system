import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// Unit, accessibility (axe) and token contrast tests. Story tests live in apps/storybook.
export default defineConfig({
  plugins: [react()],
  test: {
    name: 'unit',
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}', 'tokens/**/*.test.ts'],
    setupFiles: ['./src/test/setup.ts'],
  },
});
