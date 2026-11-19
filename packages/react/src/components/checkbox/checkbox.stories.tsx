import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Field } from '../field/index.js';
import { Checkbox } from './checkbox.js';

const sizes = ['sm', 'md', 'lg'] as const;

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox.Root,
  tags: ['autodocs', 'visual'],
  args: { disabled: false, invalid: false, readOnly: false, required: false },
  argTypes: { size: { control: 'inline-radio', options: sizes } },
  render: (args) => (
    <Checkbox.Root {...args}>
      <Checkbox.Control />
      <Checkbox.Label>Accept the terms</Checkbox.Label>
    </Checkbox.Root>
  ),
} satisfies Meta<typeof Checkbox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { name: 'Accept the terms' });
    await userEvent.click(canvas.getByText('Accept the terms'));
    await expect(checkbox).toBeChecked();
    await userEvent.click(canvas.getByText('Accept the terms'));
    await expect(checkbox).not.toBeChecked();
    // Leave the pointer off the control, so the screenshot shows the resting state.
    await userEvent.unhover(canvas.getByText('Accept the terms'));
  },
};

export const Checked: Story = { args: { defaultChecked: true } };
export const Indeterminate: Story = { args: { checked: 'indeterminate' } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      {sizes.map((size) => (
        <Checkbox.Root key={size} {...args} size={size} defaultChecked>
          <Checkbox.Control />
          <Checkbox.Label>Size {size}</Checkbox.Label>
        </Checkbox.Root>
      ))}
    </div>
  ),
};

// Ark sets `data-hover` and `data-focus-visible` from real pointer and keyboard events, which the
// pseudo-states addon cannot simulate, so these stories interact for real.
const hover: Story['play'] = async ({ canvasElement }) => {
  await userEvent.hover(within(canvasElement).getByText('Accept the terms'));
};

export const Hover: Story = { play: hover };
export const CheckedHover: Story = { args: { defaultChecked: true }, play: hover };
export const FocusVisible: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.tab();
    await expect(within(canvasElement).getByRole('checkbox')).toHaveFocus();
  },
};
export const Invalid: Story = { args: { invalid: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } };
export const ReadOnly: Story = { args: { readOnly: true, defaultChecked: true } };

export const InField: Story = {
  render: (args) => (
    <Field.Root invalid={args.invalid} required>
      <Checkbox.Root>
        <Checkbox.Control />
        <Checkbox.Label>Accept the terms</Checkbox.Label>
      </Checkbox.Root>
      <Field.HelperText>You can withdraw at any time.</Field.HelperText>
      <Field.ErrorText>You must accept the terms to continue.</Field.ErrorText>
    </Field.Root>
  ),
  args: { invalid: true },
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByRole('checkbox', { name: 'Accept the terms' });
    await expect(checkbox).toBeInvalid();
    await expect(checkbox).toBeRequired();
  },
};

export const Group: Story = {
  render: (args) => (
    <fieldset className="flex flex-col gap-3 font-body">
      <legend className="mb-3 text-sm font-medium text-fg-default">Topics</legend>
      <Checkbox.Group defaultValue={['tokens']} name="topics">
        {[
          ['react', 'React components'],
          ['tokens', 'Design tokens'],
          ['a11y', 'Accessibility'],
        ].map(([value, label]) => (
          <Checkbox.Root key={value} {...args} value={value}>
            <Checkbox.Control />
            <Checkbox.Label>{label}</Checkbox.Label>
          </Checkbox.Root>
        ))}
      </Checkbox.Group>
    </fieldset>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox', { name: 'Design tokens' })).toBeChecked();
    await expect(canvas.getByRole('checkbox', { name: 'React components' })).not.toBeChecked();
  },
};
