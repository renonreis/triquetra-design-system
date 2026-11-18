import type { Decorator, Preview } from '@storybook/react-vite';
import tokens from '../src/styles/generated/tokens.json' with { type: 'json' };
import './preview.css';

const permutations = Object.keys(tokens).map((key) => key.split('/'));
const unique = (index: number) => [...new Set(permutations.map((p) => p[index] ?? ''))];

/** Applies brand, theme and mode to <html>, the same way consuming apps do. */
const withTokens: Decorator = (Story, { globals }) => {
  const root = document.documentElement;
  root.dataset.brand = String(globals.brand);
  root.dataset.theme = String(globals.theme);
  root.dataset.mode = String(globals.mode);
  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    brand: {
      description: 'Brand',
      toolbar: { title: 'Brand', icon: 'flag', items: unique(0), dynamicTitle: true },
    },
    theme: {
      description: 'Theme',
      toolbar: { title: 'Theme', icon: 'paintbrush', items: unique(1), dynamicTitle: true },
    },
    mode: {
      description: 'Color mode',
      toolbar: {
        title: 'Mode',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brand: 'triquetra',
    theme: 'default',
    // Story tests run once per mode (see vitest.config.ts).
    mode: import.meta.env.STORYBOOK_TEST_MODE ?? 'light',
  },
  decorators: [withTokens],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    // Accessibility violations fail story tests (CI blocks the merge).
    a11y: { test: 'error' },
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
};

export default preview;
