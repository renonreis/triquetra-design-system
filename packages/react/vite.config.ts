import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import pkg from './package.json' with { type: 'json' };

const externals = [...Object.keys(pkg.dependencies), 'react', 'react-dom', 'react/jsx-runtime'];

// Library build. CSS is built separately by the Tailwind CLI (see `build:css`).
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rolldownOptions: {
      external: (id) => externals.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      // Every component relies on React context or hooks (Ark UI), so the bundle is a client
      // module. The directive lets React Server Components frameworks (Next.js App Router)
      // import it from server files.
      output: { banner: "'use client';" },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
