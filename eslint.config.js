import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'storybook-static',
      'coverage',
      'src/styles/generated',
      'playwright-report',
      'test-results',
      '!.storybook',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
  },
  { files: ['**/*.js'], extends: [tseslint.configs.disableTypeChecked] },
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.strict,
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration',
          message: 'Use named exports (default exports are only allowed in stories and config).',
        },
      ],
    },
  },
  {
    files: ['**/*.stories.tsx', '.storybook/**', '*.config.ts', '*.config.js'],
    rules: { 'no-restricted-syntax': 'off' },
  },
  prettier,
);
