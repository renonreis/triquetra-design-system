import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '../button';
import { Field } from '../field';
import { Dialog, type DialogRootProps } from './dialog';

const Example = (props: DialogRootProps) => (
  <Dialog.Root {...props}>
    <Dialog.Trigger asChild>
      <Button>Delete project</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Delete project?</Dialog.Title>
        <Dialog.Description>
          This permanently removes the project and its tokens. This cannot be undone.
        </Dialog.Description>
      </Dialog.Header>
      <Dialog.Footer>
        <Dialog.CloseTrigger asChild>
          <Button variant="ghost">Cancel</Button>
        </Dialog.CloseTrigger>
        <Button variant="negative">Delete</Button>
      </Dialog.Footer>
      <Dialog.CloseTrigger />
    </Dialog.Content>
  </Dialog.Root>
);

const meta = {
  title: 'Components/Dialog',
  component: Dialog.Root,
  tags: ['autodocs', 'visual'],
  args: { size: 'md' },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] } },
  render: (args) => <Example {...args} />,
} satisfies Meta<typeof Dialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByRole('button', { name: 'Delete project' });
    await userEvent.click(trigger);
    const dialog = await screen.findByRole('dialog', { name: 'Delete project?' });
    await expect(dialog).toHaveAccessibleDescription(expect.stringContaining('permanently'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(trigger).toHaveFocus();
  },
};

export const Open: Story = { args: { defaultOpen: true } };
export const Small: Story = { args: { defaultOpen: true, size: 'sm' } };
export const Large: Story = { args: { defaultOpen: true, size: 'lg' } };

export const WithForm: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Dialog.Root {...args}>
      <Dialog.Trigger asChild>
        <Button>Invite</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Invite a teammate</Dialog.Title>
          <Dialog.Description>They will get access to every brand and theme.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <Field.Root required>
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Field.Input type="email" placeholder="you@example.com" />
          </Field.Root>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger asChild>
            <Button variant="ghost">Cancel</Button>
          </Dialog.CloseTrigger>
          <Button variant="secondary">Send invite</Button>
        </Dialog.Footer>
        <Dialog.CloseTrigger />
      </Dialog.Content>
    </Dialog.Root>
  ),
};
