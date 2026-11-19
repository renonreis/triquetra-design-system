import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Field } from '../field/index.js';
import { Switch } from './switch.js';

const sizes = ['sm', 'md', 'lg'] as const;

const meta = {
  title: 'Components/Switch',
  component: Switch.Root,
  tags: ['autodocs', 'visual'],
  args: { disabled: false, invalid: false, readOnly: false, required: false },
  argTypes: { size: { control: 'inline-radio', options: sizes } },
  render: (args) => (
    <Switch.Root {...args}>
      <Switch.Control />
      <Switch.Label>Email notifications</Switch.Label>
    </Switch.Root>
  ),
} satisfies Meta<typeof Switch.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', { name: 'Email notifications' });
    await userEvent.click(canvas.getByText('Email notifications'));
    await expect(toggle).toBeChecked();
    await userEvent.click(canvas.getByText('Email notifications'));
    await expect(toggle).not.toBeChecked();
    // Leave the pointer off the control, so the screenshot shows the resting state.
    await userEvent.unhover(canvas.getByText('Email notifications'));
  },
};

export const Checked: Story = { args: { defaultChecked: true } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      {sizes.map((size) => (
        <div key={size} className="flex gap-6">
          <Switch.Root {...args} size={size}>
            <Switch.Control />
            <Switch.Label>Size {size}</Switch.Label>
          </Switch.Root>
          <Switch.Root {...args} size={size} defaultChecked>
            <Switch.Control />
            <Switch.Label>Size {size}, on</Switch.Label>
          </Switch.Root>
        </div>
      ))}
    </div>
  ),
};

// Ark sets `data-hover` and `data-focus-visible` from real pointer and keyboard events, which the
// pseudo-states addon cannot simulate, so these stories interact for real.
const hover: Story['play'] = async ({ canvasElement }) => {
  await userEvent.hover(within(canvasElement).getByText('Email notifications'));
};

export const Hover: Story = { play: hover };
export const CheckedHover: Story = { args: { defaultChecked: true }, play: hover };
export const FocusVisible: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.tab();
    await expect(within(canvasElement).getByRole('switch')).toHaveFocus();
  },
};
export const Invalid: Story = { args: { invalid: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } };
export const ReadOnly: Story = { args: { readOnly: true, defaultChecked: true } };

export const InField: Story = {
  render: (args) => (
    <Field.Root invalid={args.invalid} required>
      <Switch.Root>
        <Switch.Control />
        <Switch.Label>Share usage data</Switch.Label>
      </Switch.Root>
      <Field.HelperText>Anonymous, and you can turn it off at any time.</Field.HelperText>
      <Field.ErrorText>Turn this on to join the beta.</Field.ErrorText>
    </Field.Root>
  ),
  args: { invalid: true },
  play: async ({ canvasElement }) => {
    const toggle = within(canvasElement).getByRole('switch', { name: 'Share usage data' });
    await expect(toggle).toBeInvalid();
    await expect(toggle).toBeRequired();
    await expect(toggle).toHaveAccessibleDescription(
      expect.stringContaining('Turn this on to join the beta.'),
    );
  },
};
