import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Field } from '../field/index.js';
import { Textarea } from './textarea.js';

const sizes = ['sm', 'md', 'lg'] as const;
const VALUE = 'Thanks for the quick reply. The new tokens look great in dark mode.';
const FIVE_LINES = [
  'Hi team,',
  'Thanks for the quick reply.',
  'The dark mode looks great.',
  'Ship it on Friday?',
  'Ada',
].join('\n');

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs', 'visual'],
  args: { 'aria-label': 'Message', placeholder: 'Write a short message' },
  argTypes: { size: { control: 'inline-radio', options: sizes } },
  decorators: [
    (Story) => (
      // Story layout only: the token scale has no large widths on purpose.
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

const height = (element: HTMLElement) => element.getBoundingClientRect().height;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const textarea = within(canvasElement).getByRole('textbox', { name: 'Message' });
    await expect(textarea).toHaveAttribute('rows', '3');
  },
};

export const WithValue: Story = { args: { defaultValue: VALUE } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      {sizes.map((size) => (
        <Textarea key={size} {...args} size={size} aria-label={`Message (${size})`} />
      ))}
    </div>
  ),
};

export const Hover: Story = { parameters: { pseudo: { hover: true } } };
export const FocusVisible: Story = { parameters: { pseudo: { focusVisible: true } } };
export const Invalid: Story = { args: { invalid: true, defaultValue: VALUE } };
export const InvalidFocused: Story = {
  args: { invalid: true, defaultValue: VALUE },
  parameters: { pseudo: { focusVisible: true } },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: VALUE } };
export const ReadOnly: Story = { args: { readOnly: true, defaultValue: VALUE } };

export const Autoresize: Story = {
  args: { autoresize: true, size: 'md', rows: 3, defaultValue: FIVE_LINES },
  play: async ({ canvasElement }) => {
    await document.fonts.ready;
    const textarea = within(canvasElement).getByRole('textbox', { name: 'Message' });
    await waitFor(() => expect(Math.abs(height(textarea) - 123)).toBeLessThanOrEqual(1));
    await expect(getComputedStyle(textarea).resize).toBe('none');
  },
};

export const InField: Story = {
  render: (args) => (
    <Field.Root required>
      <Field.Label>
        Message <Field.RequiredIndicator />
      </Field.Label>
      <Field.Textarea {...args} aria-label={undefined} />
      <Field.HelperText>We reply within two working days.</Field.HelperText>
      <Field.ErrorText>Write a message to continue.</Field.ErrorText>
    </Field.Root>
  ),
};

export const InFieldInvalid: Story = {
  render: (args) => (
    <Field.Root required invalid>
      <Field.Label>
        Message <Field.RequiredIndicator />
      </Field.Label>
      <Field.Textarea {...args} aria-label={undefined} />
      <Field.HelperText>We reply within two working days.</Field.HelperText>
      <Field.ErrorText>Write a message to continue.</Field.ErrorText>
    </Field.Root>
  ),
};

/** Browser checks for autoresize and manual resize. Not screenshotted. */
export const AutoresizeGrows: Story = {
  tags: ['!visual'],
  args: { autoresize: true },
  render: (args) => (
    <div className="flex flex-col gap-3">
      <Textarea {...args} />
      <Textarea aria-label="Manual" placeholder="Manual resize" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await document.fonts.ready;
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', { name: 'Message' });
    await waitFor(() => expect(Math.abs(height(textarea) - 81)).toBeLessThanOrEqual(1));
    await expect(getComputedStyle(textarea).resize).toBe('none');

    await userEvent.type(textarea, 'one{Enter}two{Enter}three{Enter}four');
    await waitFor(() => expect(height(textarea)).toBeGreaterThan(82));

    await userEvent.clear(textarea);
    await waitFor(() => expect(Math.abs(height(textarea) - 81)).toBeLessThanOrEqual(1));

    const manual = canvas.getByRole('textbox', { name: 'Manual' });
    await expect(getComputedStyle(manual).resize).toBe('vertical');
    manual.style.height = '0px';
    await expect(height(manual)).toBe(40);
  },
};
