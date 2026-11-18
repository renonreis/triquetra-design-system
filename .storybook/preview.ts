import type { Preview } from '@storybook/react-vite';
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    // Accessibility violations fail story tests (CI blocks the merge).
    a11y: { test: 'error' },
  },
  tags: ['autodocs'],
};

export default preview;
