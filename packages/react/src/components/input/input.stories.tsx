import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Input } from './input.js';

const sizes = ['sm', 'md', 'lg'] as const;

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs', 'visual'],
  args: { 'aria-label': 'Email', placeholder: 'you@example.com' },
  argTypes: { size: { control: 'inline-radio', options: sizes } },
  decorators: [
    (Story) => (
      // Story layout only: the token scale has no large widths on purpose.
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox', { name: 'Email' });
    await userEvent.type(input, 'ada@triquetra.dev');
    await expect(input).toHaveValue('ada@triquetra.dev');
  },
};

export const WithValue: Story = { args: { defaultValue: 'ada@triquetra.dev' } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      {sizes.map((size) => (
        <Input key={size} {...args} size={size} aria-label={`Email (${size})`} />
      ))}
    </div>
  ),
};

export const Hover: Story = { parameters: { pseudo: { hover: true } } };
export const FocusVisible: Story = { parameters: { pseudo: { focusVisible: true } } };
export const Invalid: Story = { args: { invalid: true, defaultValue: 'not-an-email' } };
export const InvalidFocused: Story = {
  args: { invalid: true, defaultValue: 'not-an-email' },
  parameters: { pseudo: { focusVisible: true } },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: 'ada@triquetra.dev' } };
export const ReadOnly: Story = { args: { readOnly: true, defaultValue: 'ada@triquetra.dev' } };
