import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Button } from '../button/index.js';
import { Popover, type PopoverRootProps } from './popover.js';
import { popoverVariants } from './popover.variants.js';

const Example = (props: PopoverRootProps) => (
  <>
    <Popover.Root {...props}>
      <Popover.Trigger asChild>
        <Button variant="neutral">Share</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Share project</Popover.Title>
          <Popover.Description>Anyone with the link can view it.</Popover.Description>
        </Popover.Header>
        <Popover.Body>
          <a href="#help">Help</a>
        </Popover.Body>
        <Popover.Footer>
          <Popover.CloseTrigger asChild>
            <Button variant="ghost">Cancel</Button>
          </Popover.CloseTrigger>
          <Button>Copy link</Button>
        </Popover.Footer>
        <Popover.CloseTrigger />
      </Popover.Content>
    </Popover.Root>
    <button type="button">Elsewhere</button>
  </>
);

const trigger = () => screen.getByRole('button', { name: 'Share' });
const opened = () => screen.findByRole('dialog', { name: 'Share project' });
const closed = () => waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
// Ark moves focus in the next frame.
const frames = () => act(() => new Promise((resolve) => setTimeout(resolve, 60)));
const content = () => document.querySelector('[data-scope="popover"][data-part="content"]');

describe('Popover', () => {
  it('renders nothing of the panel while closed (AC-6, AC-7)', () => {
    render(<Example />);
    expect(content()).not.toBeInTheDocument();
    expect(trigger()).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger()).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens and closes on trigger click and reports each change (AC-7)', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<Example onOpenChange={onOpenChange} />);
    await user.click(trigger());
    await opened();
    expect(onOpenChange).toHaveBeenLastCalledWith(expect.objectContaining({ open: true }));
    await user.click(trigger());
    await closed();
    expect(onOpenChange).toHaveBeenLastCalledWith(expect.objectContaining({ open: false }));
  });

  it.each(['{Enter}', ' '])('opens with the key "%s" (AC-7)', async (key) => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    await user.keyboard(key);
    expect(await opened()).toBeInTheDocument();
  });

  it('respects a controlled open (AC-7)', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<Example open={false} onOpenChange={onOpenChange} />);
    await user.click(trigger());
    expect(onOpenChange).toHaveBeenCalledWith(expect.objectContaining({ open: true }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // jsdom has no layout, so Ark finds no tabbable element and focuses the panel itself; the
  // `Interaction` and `NoFocusable` stories prove the target in a real browser.
  it('moves focus into the panel and returns it on Escape (AC-7)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.click(trigger());
    const panel = await opened();
    await waitFor(() => {
      expect(panel.contains(document.activeElement)).toBe(true);
    });
    await user.keyboard('{Escape}');
    await closed();
    await waitFor(() => expect(trigger()).toHaveFocus());
  });

  it('moves focus to initialFocusEl when given (AC-7)', async () => {
    const user = userEvent.setup();
    render(<Example initialFocusEl={() => screen.getByRole('button', { name: 'Copy link' })} />);
    await user.click(trigger());
    await opened();
    await waitFor(() => expect(screen.getByRole('button', { name: 'Copy link' })).toHaveFocus());
  });

  it('keeps focus on the trigger with autoFocus off (AC-7)', async () => {
    const user = userEvent.setup();
    const props: PopoverRootProps = { autoFocus: false };
    render(<Example {...props} />);
    await user.click(trigger());
    await opened();
    await frames();
    expect(trigger()).toHaveFocus();
  });

  it('closes from the corner close button and returns focus (AC-7, AC-8)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.click(trigger());
    await user.click(await screen.findByRole('button', { name: 'Close' }));
    await closed();
    await waitFor(() => expect(trigger()).toHaveFocus());
  });

  it('closes on an outside press (AC-7)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.click(trigger());
    await opened();
    await frames();
    await user.click(screen.getByRole('button', { name: 'Elsewhere' }));
    await closed();
  });

  it('stays open with closeOnInteractOutside and closeOnEscape off (AC-7)', async () => {
    const user = userEvent.setup();
    render(<Example closeOnInteractOutside={false} closeOnEscape={false} />);
    await user.click(trigger());
    await opened();
    await frames();
    await user.click(screen.getByRole('button', { name: 'Elsewhere' }));
    await user.keyboard('{Escape}');
    await frames();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('is named and described by its title and description (AC-8)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.click(trigger());
    const panel = await opened();
    expect(panel).toHaveAccessibleDescription('Anyone with the link can view it.');
    expect(panel).not.toHaveAttribute('aria-modal', 'true');
    expect(trigger()).toHaveAttribute('aria-expanded', 'true');
    expect(trigger()).toHaveAttribute('aria-controls', panel.id);
    expect(screen.getByRole('heading', { level: 2, name: 'Share project' })).toBeInTheDocument();
  });

  it('is named by aria-label without a title, with no dangling ids (AC-8)', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Info</Popover.Trigger>
        <Popover.Content aria-label="Quotas">Text</Popover.Content>
      </Popover.Root>,
    );
    await user.click(screen.getByRole('button', { name: 'Info' }));
    const panel = await screen.findByRole('dialog', { name: 'Quotas' });
    await waitFor(() => expect(panel).not.toHaveAttribute('aria-labelledby'));
    expect(panel).not.toHaveAttribute('aria-describedby');
  });

  it('keeps the name of an asChild close button, with no repeated id (AC-8)', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.click(trigger());
    const panel = await opened();
    const ids = [...panel.querySelectorAll('[id]')].map((el) => el.id);
    expect(new Set(ids).size).toBe(ids.length);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await closed();
    await waitFor(() => expect(trigger()).toHaveFocus());
  });

  it('runs the onClick of an asChild close button, which can cancel the close (AC-8)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn((event: { preventDefault: () => void }) => {
      event.preventDefault();
    });
    render(
      <Popover.Root defaultOpen>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content aria-label="Panel">
          <Popover.CloseTrigger asChild onClick={onClick}>
            <Button>Done</Button>
          </Popover.CloseTrigger>
        </Popover.Content>
      </Popover.Root>,
    );
    await user.click(screen.getByRole('button', { name: 'Done' }));
    expect(onClick).toHaveBeenCalledOnce();
    await frames();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('runs the onClick of the child of an asChild close button (AC-8)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Popover.Root defaultOpen>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content aria-label="Panel">
          <Popover.CloseTrigger asChild>
            <Button onClick={onClick}>Done</Button>
          </Popover.CloseTrigger>
        </Popover.Content>
      </Popover.Root>,
    );
    await user.click(screen.getByRole('button', { name: 'Done' }));
    expect(onClick).toHaveBeenCalledOnce();
    await closed();
  });

  it('renders the panel in a portal in document.body (AC-6)', () => {
    const { container } = render(<Example open />);
    const panel = screen.getByRole('dialog');
    expect(container).not.toContainElement(panel);
    expect(document.body).toContainElement(panel);
  });

  it('defaults to the bottom placement and lets the caller override it (AC-6)', async () => {
    const { unmount } = render(<Example open />);
    await waitFor(() =>
      expect(screen.getByRole('dialog')).toHaveAttribute('data-placement', 'bottom'),
    );
    unmount();
    render(<Example open positioning={{ placement: 'top' }} />);
    await waitFor(() =>
      expect(screen.getByRole('dialog')).toHaveAttribute('data-placement', 'top'),
    );
  });

  it('limits the panel to the space left by default, and not when fitViewport is off (AC-9)', () => {
    const { unmount } = render(<Example open />);
    const positioner = () => screen.getByRole('dialog').parentElement;
    expect(positioner()?.getAttribute('style')).toContain('max-width');
    unmount();
    render(<Example open positioning={{ fitViewport: false }} />);
    expect(positioner()?.getAttribute('style')).not.toContain('max-width');
  });

  it('lets the caller override lazyMount and unmountOnExit (AC-6)', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<Example lazyMount={false} />);
    expect(content()).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    unmount();
    render(<Example unmountOnExit={false} />);
    await user.click(trigger());
    await opened();
    await user.keyboard('{Escape}');
    await closed();
    expect(content()).toBeInTheDocument();
  });

  it('forwards refs, spreads props and merges className on every part (AC-6)', () => {
    const refs = {
      trigger: createRef<HTMLButtonElement>(),
      content: createRef<HTMLDivElement>(),
      header: createRef<HTMLDivElement>(),
      title: createRef<HTMLHeadingElement>(),
      description: createRef<HTMLDivElement>(),
      body: createRef<HTMLDivElement>(),
      footer: createRef<HTMLDivElement>(),
      close: createRef<HTMLButtonElement>(),
    };
    render(
      <Popover.Root open>
        <Popover.Trigger ref={refs.trigger} data-extra="trigger" className="mt-2">
          Open
        </Popover.Trigger>
        <Popover.Content ref={refs.content} data-extra="content" className="w-md">
          <Popover.Header ref={refs.header} data-extra="header" className="pe-0">
            <Popover.Title ref={refs.title} data-extra="title" className="text-lg">
              Title
            </Popover.Title>
            <Popover.Description
              ref={refs.description}
              data-extra="description"
              className="text-xs"
            >
              Description
            </Popover.Description>
          </Popover.Header>
          <Popover.Body ref={refs.body} data-extra="body" className="text-md">
            Body
          </Popover.Body>
          <Popover.Footer ref={refs.footer} data-extra="footer" className="gap-1" />
          <Popover.CloseTrigger ref={refs.close} data-extra="close" className="top-4" />
        </Popover.Content>
      </Popover.Root>,
    );
    for (const [name, ref] of Object.entries(refs)) {
      expect(ref.current).toHaveAttribute('data-extra', name);
    }
    expect(refs.trigger.current).toHaveClass('mt-2', 'focus-visible:outline-border-focus');
    expect(refs.content.current).toHaveClass('w-md', 'bg-bg-surface');
    expect(refs.content.current).not.toHaveClass('w-xs');
    expect(refs.header.current).toHaveClass('pe-0');
    expect(refs.header.current).not.toHaveClass('pe-8');
    expect(refs.title.current).toHaveClass('text-lg');
    expect(refs.title.current).not.toHaveClass('text-md');
    expect(refs.description.current).toHaveClass('text-xs');
    expect(refs.body.current).toHaveClass('text-md');
    expect(refs.footer.current).toHaveClass('gap-1');
    expect(refs.close.current).toHaveClass('top-4');
    expect(refs.close.current).not.toHaveClass('top-2');
  });

  it('exposes every slot in popoverVariants (AC-6, AC-10)', () => {
    const styles = popoverVariants();
    expect(styles.positioner()).toContain('z-50');
    expect(styles.content()).toContain('rounded-surface');
    expect(styles.trigger()).toContain('focus-visible:outline-2');
  });

  it('throws outside Popover.Root, as Ark does (AC-6)', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    expect(() => render(<Popover.Trigger>Open</Popover.Trigger>)).toThrow();
    error.mockRestore();
  });

  it('has no axe violations closed and open (AC-11)', async () => {
    const { container, unmount } = render(<Example />);
    expect(await axe(container)).toHaveNoViolations();
    unmount();
    const open = render(<Example open />);
    const panel = await opened();
    expect(await axe(open.container)).toHaveNoViolations();
    expect(await axe(panel)).toHaveNoViolations();
  });
});
