import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../button';
import { Field } from './field';

const meta = {
  title: 'Components/Field',
  component: Field.Root,
  tags: ['autodocs', 'visual'],
  args: { invalid: false, disabled: false, required: false, readOnly: false },
  decorators: [
    (Story) => (
      // Story layout only: the token scale has no large widths on purpose.
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Field.Root {...args}>
      <Field.Label>
        Email <Field.RequiredIndicator />
      </Field.Label>
      <Field.Input type="email" placeholder="you@example.com" />
      <Field.HelperText>We only use it to send release notes.</Field.HelperText>
      <Field.ErrorText>Enter a valid email address.</Field.ErrorText>
    </Field.Root>
  ),
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Email' });
    await expect(input).toHaveAccessibleDescription('We only use it to send release notes.');
    await userEvent.click(canvas.getByText('Email'));
    await expect(input).toHaveFocus();
  },
};

export const Required: Story = { args: { required: true } };

export const Invalid: Story = {
  args: { invalid: true, required: true },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox', { name: 'Email' });
    await expect(input).toBeInvalid();
    await expect(input).toHaveAccessibleDescription(
      expect.stringContaining('Enter a valid email address.'),
    );
  },
};

export const Disabled: Story = { args: { disabled: true } };
export const ReadOnly: Story = { args: { readOnly: true } };

export const Validation: Story = {
  // Interaction story: its play function types, so a screenshot would race it.
  render: function Render() {
    const [value, setValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const invalid = submitted && !/^\S+@\S+\.\S+$/.test(value);
    return (
      <form
        noValidate
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <Field.Root invalid={invalid} required>
          <Field.Label>
            Email <Field.RequiredIndicator />
          </Field.Label>
          <Field.Input
            type="email"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Field.HelperText>We only use it to send release notes.</Field.HelperText>
          <Field.ErrorText>Enter a valid email address.</Field.ErrorText>
        </Field.Root>
        <Button type="submit">Subscribe</Button>
      </form>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Subscribe' }));
    await expect(await canvas.findByText('Enter a valid email address.')).toBeVisible();
    await userEvent.type(canvas.getByRole('textbox', { name: 'Email' }), 'ada@triquetra.dev');
    await expect(canvas.queryByText('Enter a valid email address.')).not.toBeInTheDocument();
  },
};
