import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { axe } from '../../test/axe.js';
import { Badge, type BadgeProps } from './badge.js';

const TONES = ['neutral', 'positive', 'warning', 'negative', 'informative'] as const;

describe('Badge', () => {
  it('renders a span with its text, neutral and md by default (AC-6)', () => {
    render(<Badge>Draft</Badge>);
    const badge = screen.getByText('Draft');
    expect(badge.tagName).toBe('SPAN');
    expect(badge).toHaveClass('bg-bg-subtle', 'text-fg-muted', 'border-border-default', 'h-6');
  });

  it('applies the tone and size (AC-6, AC-8)', () => {
    render(
      <Badge tone="negative" size="sm">
        Failed
      </Badge>,
    );
    expect(screen.getByText('Failed')).toHaveClass(
      'bg-status-negative-bg',
      'text-status-negative-fg',
      'border-status-negative-border',
      'h-5',
      'text-xs',
    );
  });

  it.each(TONES)('maps the %s tone to its status tokens (AC-8)', (tone) => {
    const [bg, fg, border] =
      tone === 'neutral'
        ? ['bg-bg-subtle', 'text-fg-muted', 'border-border-default']
        : [`bg-status-${tone}-bg`, `text-status-${tone}-fg`, `border-status-${tone}-border`];
    render(<Badge tone={tone}>Label</Badge>);
    expect(screen.getByText('Label')).toHaveClass(bg, fg, border, 'border', 'rounded-full');
  });

  it.each([
    ['sm', 'h-5', 'text-xs', 'leading-4'],
    ['md', 'h-6', 'text-sm', 'leading-5'],
  ] as const)('sizes %s with its height and text (AC-8)', (size, height, text, leading) => {
    render(<Badge size={size}>Label</Badge>);
    expect(screen.getByText('Label')).toHaveClass(height, text, leading, 'px-2', 'font-medium');
  });

  it('forwards its ref and spreads props (AC-6)', () => {
    const ref = createRef<HTMLSpanElement>();
    render(
      <Badge ref={ref} id="status" data-testid="badge" aria-hidden="true">
        Paid
      </Badge>,
    );
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    expect(ref.current).toHaveAttribute('id', 'status');
    expect(ref.current).toHaveAttribute('data-testid', 'badge');
    expect(ref.current).toHaveAttribute('aria-hidden', 'true');
  });

  it('merges className through tv (AC-6)', () => {
    render(<Badge className="ml-auto px-3">Paid</Badge>);
    const badge = screen.getByText('Paid');
    expect(badge).toHaveClass('ml-auto', 'px-3');
    expect(badge).not.toHaveClass('px-2');
  });

  it('is static: no role, not focusable, skipped by Tab (AC-7)', async () => {
    const user = userEvent.setup();
    render(
      <>
        <button type="button">Before</button>
        <Badge>Draft</Badge>
        <button type="button">After</button>
      </>,
    );
    const badge = screen.getByText('Draft');
    expect(badge).not.toHaveAttribute('role');
    expect(badge).not.toHaveAttribute('tabindex');
    await user.tab();
    expect(screen.getByRole('button', { name: 'Before' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'After' })).toHaveFocus();
  });

  it('sets no aria attribute of its own (AC-7)', () => {
    render(<Badge tone="positive">Paid</Badge>);
    const names = [...screen.getByText('Paid').attributes].map((a) => a.name);
    expect(names.filter((n) => n.startsWith('aria-'))).toEqual([]);
  });

  it('does not take asChild (AC-6)', () => {
    // @ts-expect-error asChild is not part of BadgeProps
    const props: BadgeProps = { asChild: true };
    expect(props).toBeDefined();
  });

  it('keeps hidden context in the text of a count (AC-7)', () => {
    render(
      <Badge>
        3<span className="sr-only"> unread messages</span>
      </Badge>,
    );
    expect(screen.getByText('3').textContent).toBe('3 unread messages');
  });

  const cases: [string, BadgeProps][] = [
    ...TONES.map((tone): [string, BadgeProps] => [`${tone} md`, { tone, children: tone }]),
    ['neutral sm', { size: 'sm', children: 'Draft' }],
    [
      'count',
      {
        tone: 'negative',
        children: (
          <>
            12<span className="sr-only"> failed jobs</span>
          </>
        ),
      },
    ],
  ];

  it.each(cases)('has no axe violations: %s (AC-9)', async (_name, props) => {
    const { container } = render(<Badge {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
