import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Button } from '../button/index.js';
import { Dialog, type DialogRootProps } from './dialog.js';

const Example = (props: DialogRootProps) => (
  <Dialog.Root {...props}>
    <Dialog.Trigger asChild>
      <Button>Open</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
      </Dialog.Header>
      <Dialog.Footer>
        <Dialog.CloseTrigger asChild>
          <Button variant="ghost">Cancel</Button>
        </Dialog.CloseTrigger>
        <Button>Confirm</Button>
      </Dialog.Footer>
      <Dialog.CloseTrigger />
    </Dialog.Content>
  </Dialog.Root>
);

describe('Dialog', () => {
  it('is not mounted until opened', () => {
    render(<Example />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens from the trigger as a named, described modal dialog', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const dialog = await screen.findByRole('dialog', { name: 'Title' });
    expect(dialog).toHaveAccessibleDescription('Description');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it.each([
    ['Escape', async (user: ReturnType<typeof userEvent.setup>) => user.keyboard('{Escape}')],
    [
      'the Cancel button',
      async (user: ReturnType<typeof userEvent.setup>) =>
        user.click(screen.getByRole('button', { name: 'Cancel' })),
    ],
    [
      'the close icon',
      async (user: ReturnType<typeof userEvent.setup>) =>
        user.click(screen.getByRole('button', { name: 'Close' })),
    ],
  ])('closes with %s and calls onOpenChange', async (_how, close) => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<Example defaultOpen onOpenChange={onOpenChange} />);
    await screen.findByRole('dialog');
    await close(user);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    expect(onOpenChange).toHaveBeenLastCalledWith(expect.objectContaining({ open: false }));
  });

  it('supports controlled open state', async () => {
    const { rerender } = render(<Example open />);
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    rerender(<Example open={false} />);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('labels the icon close button', async () => {
    render(<Example defaultOpen />);
    expect(await screen.findByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('has no axe violations when open', async () => {
    render(<Example defaultOpen />);
    await screen.findByRole('dialog');
    expect(await axe(document.body)).toHaveNoViolations();
  });
});
