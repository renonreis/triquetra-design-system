import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../button/index.js';
import { RadioGroup, type RadioGroupRootProps } from './radio-group.js';

const sizes = ['sm', 'md', 'lg'] as const;
const OPTIONS = [
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['sms', 'Text message'],
] as const;

function Options({ disabled = [] }: { disabled?: string[] }) {
  return OPTIONS.map(([value, label]) => (
    <RadioGroup.Item key={value} value={value} disabled={disabled.includes(value)}>
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
    </RadioGroup.Item>
  ));
}

function Group({ label = 'Contact method', ...props }: RadioGroupRootProps & { label?: string }) {
  return (
    <RadioGroup.Root {...props}>
      <RadioGroup.Label>{label}</RadioGroup.Label>
      <Options />
    </RadioGroup.Root>
  );
}

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup.Root,
  tags: ['autodocs', 'visual'],
  args: {
    size: 'md',
    orientation: 'vertical',
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
    name: 'contact',
  },
  argTypes: {
    size: { control: 'inline-radio', options: sizes },
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
  },
  render: (args) => <Group {...args} />,
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radiogroup', { name: 'Contact method' })).toBeInTheDocument();
    const radios = canvas.getAllByRole('radio');
    await expect(radios).toHaveLength(3);
    for (const radio of radios) await expect(radio).not.toBeChecked();
  },
};

export const Checked: Story = { args: { defaultValue: 'email' } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      {sizes.map((size) => (
        <Group
          key={size}
          {...args}
          size={size}
          name={`contact-${size}`}
          defaultValue="email"
          label={`Contact method (${size})`}
        />
      ))}
    </div>
  ),
};

export const Horizontal: Story = { args: { orientation: 'horizontal', defaultValue: 'email' } };

// Ark sets `data-hover` and `data-focus-visible` from real pointer and keyboard events, which the
// pseudo-states addon cannot simulate, so these stories interact for real.
const hoverOn =
  (name: string): Story['play'] =>
  async ({ canvasElement }) => {
    await userEvent.hover(within(canvasElement).getByText(name));
  };
const tabTo =
  (name: string): Story['play'] =>
  async ({ canvasElement }) => {
    await userEvent.tab();
    await expect(within(canvasElement).getByRole('radio', { name })).toHaveFocus();
  };

export const Hover: Story = { play: hoverOn('Phone') };
export const CheckedHover: Story = { args: { defaultValue: 'email' }, play: hoverOn('Email') };
export const FocusVisible: Story = { play: tabTo('Email') };
export const CheckedFocusVisible: Story = { args: { defaultValue: 'phone' }, play: tabTo('Phone') };
export const Invalid: Story = { args: { invalid: true, defaultValue: 'email' } };
export const InvalidFocusVisible: Story = {
  args: { invalid: true, defaultValue: 'email' },
  play: tabTo('Email'),
};
export const Disabled: Story = { args: { disabled: true, defaultValue: 'email' } };
export const DisabledItem: Story = {
  args: { defaultValue: 'email' },
  render: (args) => (
    <RadioGroup.Root {...args}>
      <RadioGroup.Label>Contact method</RadioGroup.Label>
      <Options disabled={['sms']} />
    </RadioGroup.Root>
  ),
};
export const ReadOnly: Story = { args: { readOnly: true, defaultValue: 'email' } };

export const InForm: Story = {
  args: { required: true, invalid: true },
  render: (args) => (
    <form className="flex flex-col gap-2">
      <Group {...args} aria-describedby="contact-error" />
      <span
        id="contact-error"
        className="text-xs leading-normal font-medium text-status-negative-fg"
      >
        Choose how we should contact you.
      </span>
    </form>
  ),
  play: async ({ canvasElement }) => {
    const group = within(canvasElement).getByRole('radiogroup', { name: 'Contact method' });
    await expect(group).toHaveAccessibleDescription('Choose how we should contact you.');
    await expect(group).toHaveAttribute('aria-required', 'true');
  },
};

function KeyboardForm(args: RadioGroupRootProps) {
  const [submitted, setSubmitted] = useState<string | null>(null);
  return (
    <form
      className="flex flex-col items-start gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const value = new FormData(event.currentTarget).get('contact');
        setSubmitted(typeof value === 'string' ? value : '');
      }}
    >
      <RadioGroup.Root {...args}>
        <RadioGroup.Label>Contact method</RadioGroup.Label>
        <Options disabled={['sms']} />
      </RadioGroup.Root>
      <Button type="submit">Submit</Button>
      <output aria-label="Submitted value">{submitted ?? ''}</output>
    </form>
  );
}

export const KeyboardSelection: Story = {
  tags: ['!visual'],
  args: { defaultValue: 'email' },
  render: (args) => <KeyboardForm {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = (name: string) => canvas.getByRole('radio', { name });
    await userEvent.tab();
    await expect(radio('Email')).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(radio('Phone')).toBeChecked();
    await userEvent.keyboard('{ArrowDown}');
    // Text message is disabled, so the selection wraps back to Email.
    await expect(radio('Email')).toBeChecked();
    await userEvent.keyboard('{ArrowUp}');
    await expect(radio('Phone')).toBeChecked();
    await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
    await expect(canvas.getByLabelText('Submitted value')).toHaveTextContent('phone');
  },
};
