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
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
