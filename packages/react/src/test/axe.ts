import axeCore, { type AxeResults, type RunOptions } from 'axe-core';

/**
 * Runs axe-core against a rendered container.
 * Color contrast is checked in the browser (Storybook a11y tests), because jsdom does not compute styles.
 */
export async function axe(container: Element, options: RunOptions = {}): Promise<AxeResults> {
  return axeCore.run(container, {
    ...options,
    rules: { 'color-contrast': { enabled: false }, ...options.rules },
  });
}

export function toHaveNoViolations(results: AxeResults) {
  const { violations } = results;
  const pass = violations.length === 0;
  const message = () =>
    pass
      ? 'Expected accessibility violations, but found none.'
      : `Expected no accessibility violations, but found ${String(violations.length)}:\n\n${violations
          .map(
            (v) =>
              `• [${v.impact ?? 'n/a'}] ${v.id}: ${v.help}\n  ${v.helpUrl}\n${v.nodes
                .map((n) => `    → ${n.target.join(' ')}`)
                .join('\n')}`,
          )
          .join('\n\n')}`;
  return { pass, message };
}

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- T must match vitest's declaration
  interface Matchers<R extends void | Promise<void> = void | Promise<void>, T = unknown> {
    toHaveNoViolations(): R;
  }
}
