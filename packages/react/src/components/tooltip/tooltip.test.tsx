import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Button } from '../button/index.js';
import { Tooltip, type TooltipRootProps } from './tooltip.js';
import { tooltipVariants } from './tooltip.variants.js';

const Example = (props: TooltipRootProps) => (
  <Tooltip.Root {...props}>
    <Tooltip.Trigger asChild>
      <Button variant="neutral">Export</Button>
    </Tooltip.Trigger>
    <Tooltip.Content>Download a CSV of this report</Tooltip.Content>
  </Tooltip.Root>
);

const trigger = () => screen.getByRole('button', { name: 'Export' });

describe('Tooltip', () => {
  it('renders nothing of the tooltip while closed (AC-6, AC-7)', () => {
    render(<Example />);
    expect(trigger()).toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    expect(trigger()).not.toHaveAttribute('aria-describedby');
  });

  it('opens on keyboard focus as the description of the trigger (AC-7, AC-9)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    expect(trigger()).toHaveFocus();
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Download a CSV of this report');
    expect(trigger()).toHaveAttribute('aria-describedby', tooltip.id);
    expect(trigger()).toHaveAccessibleDescription('Download a CSV of this report');
    expect(trigger()).toHaveAccessibleName('Export');
  });

  it('closes on Escape (AC-7, AC-9)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    await screen.findByRole('tooltip');
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
  });

  it('closes on blur (AC-7)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    await screen.findByRole('tooltip');
    await user.tab();
    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
  });

  it('opens on hover only after the open delay, and closes when the pointer leaves (AC-7, AC-9)', async () => {
    const user = userEvent.setup();
    render(<Example openDelay={300} />);
    await user.hover(trigger());
    await act(() => new Promise((resolve) => setTimeout(resolve, 100)));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    expect(await screen.findByRole('tooltip', {}, { timeout: 1500 })).toBeInTheDocument();
    await user.unhover(trigger());
    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
  });

  it('never opens while disabled (AC-7, AC-9)', async () => {
    const user = userEvent.setup();
    render(<Example disabled openDelay={0} />);
    await user.tab();
    await user.hover(trigger());
    await act(() => new Promise((resolve) => setTimeout(resolve, 200)));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('ignores touch pointers (AC-7)', async () => {
    render(<Example openDelay={0} />);
    fireEvent.pointerMove(trigger(), { pointerType: 'touch' });
    await act(() => new Promise((resolve) => setTimeout(resolve, 100)));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('renders the content in a portal in document.body, never focusable (AC-6, AC-7, AC-9)', () => {
    const { container } = render(<Example open />);
    const tooltip = screen.getByRole('tooltip');
    expect(container).not.toContainElement(tooltip);
    expect(document.body).toContainElement(tooltip);
    expect(tooltip).not.toHaveAttribute('tabindex');
    expect(tooltip).toHaveAttribute('data-scope', 'tooltip');
    expect(tooltip).toHaveAttribute('data-part', 'content');
  });

  it('defaults to the top placement and lets the caller override it (AC-6, AC-9)', async () => {
    const { unmount } = render(<Example open />);
    await waitFor(() =>
      expect(screen.getByRole('tooltip')).toHaveAttribute('data-placement', 'top'),
    );
    unmount();
    render(<Example open positioning={{ placement: 'right' }} />);
    await waitFor(() =>
      expect(screen.getByRole('tooltip')).toHaveAttribute('data-placement', 'right'),
    );
  });

  it('keeps the content hoverable by default, and not when interactive is off (AC-6, AC-9)', () => {
    const { unmount } = render(<Example open />);
    expect(screen.getByRole('tooltip')).toHaveStyle({ pointerEvents: 'auto' });
    unmount();
    render(<Example open interactive={false} />);
    expect(screen.getByRole('tooltip')).toHaveStyle({ pointerEvents: 'none' });
  });

  it('stays mounted after closing when unmountOnExit is off (AC-6, AC-9)', async () => {
    const user = userEvent.setup();
    render(<Example unmountOnExit={false} />);
    await user.tab();
    await screen.findByRole('tooltip');
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
    expect(
      document.querySelector('[data-scope="tooltip"][data-part="content"]'),
    ).toBeInTheDocument();
  });

  it('mounts the content before the first open when lazyMount is off (AC-6, AC-9)', () => {
    render(<Example lazyMount={false} />);
    expect(
      document.querySelector('[data-scope="tooltip"][data-part="content"]'),
    ).toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('forwards refs, spreads props and merges className on Trigger and Content (AC-6, AC-9)', () => {
    const triggerRef = createRef<HTMLButtonElement>();
    const contentRef = createRef<HTMLDivElement>();
    render(
      <Tooltip.Root open>
        <Tooltip.Trigger ref={triggerRef} id="t" data-testid="trigger" className="mt-2">
          Help
        </Tooltip.Trigger>
        <Tooltip.Content ref={contentRef} id="c" data-extra="yes" className="max-w-sm">
          Hint
        </Tooltip.Content>
      </Tooltip.Root>,
    );
    const button = screen.getByRole('button', { name: 'Help' });
    expect(triggerRef.current).toBe(button);
    expect(button).toHaveAttribute('id', 't');
    expect(button).toHaveAttribute('data-testid', 'trigger');
    expect(button).toHaveClass('mt-2', 'focus-visible:outline-border-focus');
    const tooltip = screen.getByRole('tooltip');
    expect(contentRef.current).toBe(tooltip);
    expect(tooltip).toHaveAttribute('data-extra', 'yes');
    expect(tooltip).toHaveClass('max-w-sm', 'bg-bg-inverse', 'text-fg-inverse');
    expect(tooltip).not.toHaveClass('max-w-xs');
  });

  it('exposes the three slots in tooltipVariants (AC-6, AC-8)', () => {
    const styles = tooltipVariants();
    expect(styles.positioner()).toBe('z-50');
    expect(styles.content()).toContain('bg-bg-inverse');
    expect(styles.trigger()).toContain('focus-visible:outline-2');
  });

  it('has no axe violations closed and open (AC-9)', async () => {
    const { container, unmount } = render(<Example />);
    expect(await axe(container)).toHaveNoViolations();
    unmount();
    const open = render(<Example open />);
    const tooltip = await screen.findByRole('tooltip');
    // Like Select's listbox: the trigger and the portalled content are checked where they live.
    expect(await axe(open.container)).toHaveNoViolations();
    expect(await axe(tooltip)).toHaveNoViolations();
  });

  it('waits the default 400 ms before opening on hover (AC-7)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.hover(trigger());
    await act(() => new Promise((resolve) => setTimeout(resolve, 250)));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    expect(await screen.findByRole('tooltip', {}, { timeout: 1500 })).toBeInTheDocument();
  });

  it('closes when the trigger is clicked and reports each change (AC-7)', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<Example onOpenChange={onOpenChange} />);
    await user.tab();
    await screen.findByRole('tooltip');
    expect(onOpenChange).toHaveBeenLastCalledWith(expect.objectContaining({ open: true }));
    await user.click(trigger());
    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
    expect(onOpenChange).toHaveBeenLastCalledWith(expect.objectContaining({ open: false }));
  });

  it('renders its own focusable button when Trigger has no asChild (AC-6, AC-7)', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip.Root>
        <Tooltip.Trigger aria-label="Help">?</Tooltip.Trigger>
        <Tooltip.Content>More about exports</Tooltip.Content>
      </Tooltip.Root>,
    );
    const button = screen.getByRole('button', { name: 'Help' });
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveClass('focus-visible:outline-border-focus');
    await user.tab();
    expect(button).toHaveFocus();
    expect(button).toHaveAccessibleDescription('More about exports');
  });
});
