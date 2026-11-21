import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef, type ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Alert, type AlertRootProps } from './alert.js';

const TONES = ['neutral', 'positive', 'warning', 'negative', 'informative'] as const;

const part = (container: HTMLElement, name: string) =>
  container.querySelector(`[data-scope="alert"][data-part="${name}"]`);

function Full({
  description = true,
  indicator = true,
  ...props
}: AlertRootProps & {
  description?: boolean;
  indicator?: boolean;
}) {
  return (
    <Alert.Root {...props}>
      {indicator ? <Alert.Indicator /> : null}
      <Alert.Content>
        <Alert.Title>Payment failed</Alert.Title>
        {description ? <Alert.Description>Your card was declined.</Alert.Description> : null}
      </Alert.Content>
    </Alert.Root>
  );
}

describe('Alert', () => {
  it('renders the title and description in a div, informative by default (AC-6)', () => {
    const { container } = render(<Full />);
    const root = part(container, 'root');
    expect(root?.tagName).toBe('DIV');
    expect(root).toHaveClass(
      'bg-status-informative-bg',
      'text-status-informative-fg',
      'border-status-informative-border',
    );
    expect(screen.getByText('Payment failed').tagName).toBe('P');
    expect(screen.getByText('Your card was declined.').tagName).toBe('DIV');
  });

  it.each(TONES)('maps the %s tone to its tokens (AC-8)', (tone) => {
    const [bg, fg, border] =
      tone === 'neutral'
        ? ['bg-bg-subtle', 'text-fg-default', 'border-border-default']
        : [`bg-status-${tone}-bg`, `text-status-${tone}-fg`, `border-status-${tone}-border`];
    const { container } = render(<Full tone={tone} />);
    expect(part(container, 'root')).toHaveClass(bg, fg, border, 'border', 'rounded-surface', 'p-4');
  });

  it.each([
    ['informative', 'info'],
    ['neutral', 'info'],
    ['positive', 'check'],
    ['warning', 'warning'],
    ['negative', 'error'],
  ] as const)('the %s tone shows the %s icon (AC-7, AC-9)', (tone, icon) => {
    const { container } = render(<Full tone={tone} />);
    const svg = part(container, 'indicator')?.querySelector('svg');
    expect(svg).toHaveAttribute('data-icon', icon);
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders custom indicator children instead of the tone icon (AC-7)', () => {
    const { container } = render(
      <Alert.Root>
        <Alert.Indicator>
          <svg data-testid="custom" />
        </Alert.Indicator>
      </Alert.Root>,
    );
    const indicator = part(container, 'indicator');
    expect(indicator?.querySelector('[data-testid="custom"]')).not.toBeNull();
    expect(indicator?.querySelector('[data-icon]')).toBeNull();
    expect(indicator).toHaveAttribute('aria-hidden', 'true');
  });

  it('forwards refs on every part and spreads props (AC-6)', () => {
    const refs = {
      root: createRef<HTMLDivElement>(),
      indicator: createRef<HTMLSpanElement>(),
      content: createRef<HTMLDivElement>(),
      title: createRef<HTMLParagraphElement>(),
      description: createRef<HTMLDivElement>(),
    };
    render(
      <Alert.Root ref={refs.root} id="notice" data-testid="alert">
        <Alert.Indicator ref={refs.indicator} data-x="i" />
        <Alert.Content ref={refs.content} data-x="c">
          <Alert.Title ref={refs.title} id="t">
            Saved
          </Alert.Title>
          <Alert.Description ref={refs.description} data-x="d">
            Done.
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>,
    );
    expect(refs.root.current).toBeInstanceOf(HTMLDivElement);
    expect(refs.root.current).toHaveAttribute('id', 'notice');
    expect(refs.root.current).toHaveAttribute('data-testid', 'alert');
    expect(refs.indicator.current).toBeInstanceOf(HTMLSpanElement);
    expect(refs.indicator.current).toHaveAttribute('data-x', 'i');
    expect(refs.content.current).toHaveAttribute('data-x', 'c');
    expect(refs.title.current).toBeInstanceOf(HTMLParagraphElement);
    expect(refs.title.current).toHaveAttribute('id', 't');
    expect(refs.description.current).toHaveAttribute('data-x', 'd');
  });

  it('keeps data-scope and data-part on every part (AC-6)', () => {
    const { container } = render(<Full data-part="other" />);
    for (const name of ['root', 'indicator', 'content', 'title', 'description']) {
      expect(part(container, name)).not.toBeNull();
    }
  });

  it('merges className through tv (AC-6)', () => {
    const { container } = render(<Full className="mt-4 p-6" />);
    const root = part(container, 'root');
    expect(root).toHaveClass('mt-4', 'p-6');
    expect(root).not.toHaveClass('p-4');
  });

  it('title takes asChild for a heading (AC-6)', () => {
    render(
      <Alert.Root>
        <Alert.Title asChild>
          <h2>Payment failed</h2>
        </Alert.Title>
      </Alert.Root>,
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Payment failed' })).toHaveClass(
      'font-semibold',
    );
  });

  it('sets no role or aria attribute on the root by default (AC-7)', () => {
    const { container } = render(<Full />);
    const root = part(container, 'root');
    expect(root).not.toHaveAttribute('role');
    const names = [...(root?.attributes ?? [])].map((a) => a.name);
    expect(names.filter((n) => n.startsWith('aria-'))).toEqual([]);
  });

  it.each(['status', 'alert'] as const)('passes role="%s" through (AC-7)', (role) => {
    render(<Full role={role} tone="negative" />);
    expect(screen.getByRole(role)).toHaveTextContent('Payment failed');
  });

  it('is not focusable: Tab skips it (AC-7)', async () => {
    const user = userEvent.setup();
    render(
      <>
        <button type="button">Before</button>
        <Full />
        <button type="button">After</button>
      </>,
    );
    await user.tab();
    expect(screen.getByRole('button', { name: 'Before' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'After' })).toHaveFocus();
  });

  it.each(['Indicator', 'Content', 'Title', 'Description'] as const)(
    'throws when Alert.%s is outside Alert.Root (AC-6)',
    (name) => {
      const Part = Alert[name] as (props: { children?: ReactNode }) => ReactNode;
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
      expect(() => render(<Part />)).toThrow(`<Alert.${name}> must be used inside <Alert.Root>.`);
      spy.mockRestore();
    },
  );

  const cases: [string, Parameters<typeof Full>[0]][] = [
    ...TONES.map((tone): [string, Parameters<typeof Full>[0]] => [tone, { tone }]),
    ['title only', { tone: 'positive', description: false }],
    ['without indicator', { tone: 'warning', indicator: false }],
  ];

  it.each(cases)('has no axe violations: %s (AC-9)', async (_name, props) => {
    const { container } = render(<Full {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
