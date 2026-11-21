import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Alert, type AlertRootProps } from './alert.js';

const TONES = ['informative', 'neutral', 'positive', 'warning', 'negative'] as const;

const COPY: Record<(typeof TONES)[number], [title: string, description: string]> = {
  informative: [
    'New version available',
    'Version 2.4 adds dark mode to every report. Reload the page to start using it.',
  ],
  neutral: [
    'Scheduled maintenance',
    'The dashboard will be read only on Sunday from 02:00 to 04:00 UTC during the upgrade.',
  ],
  positive: [
    'Payment received',
    'We sent the receipt to your email. It can take a few minutes to show up in your inbox.',
  ],
  warning: [
    'Your trial ends in 3 days',
    'Add a payment method before it ends to keep access to your projects and reports.',
  ],
  negative: [
    'Payment failed',
    'Your card was declined. Check the card details or try another card to finish the order.',
  ],
};

function render({ tone = 'informative', ...args }: AlertRootProps) {
  const [title, description] = COPY[tone];
  return (
    <Alert.Root tone={tone} {...args}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
}

const meta = {
  title: 'Components/Alert',
  component: Alert.Root,
  tags: ['autodocs', 'visual'],
  args: { tone: 'informative' },
  argTypes: { tone: { control: 'inline-radio', options: TONES } },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
  render,
} satisfies Meta<typeof Alert.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector('[data-scope="alert"][data-part="root"]');
    await expect(root).not.toBeNull();
    await expect(root).not.toHaveAttribute('role');
  },
};

export const Neutral: Story = { args: { tone: 'neutral' } };

export const Positive: Story = { args: { tone: 'positive' } };

export const Warning: Story = { args: { tone: 'warning' } };

export const Negative: Story = { args: { tone: 'negative' } };

export const TitleOnly: Story = {
  args: { tone: 'positive' },
  render: (args) => (
    <Alert.Root {...args}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Your changes were saved.</Alert.Title>
      </Alert.Content>
    </Alert.Root>
  ),
};

export const WithoutIndicator: Story = {
  args: { tone: 'warning' },
  render: (args) => (
    <Alert.Root {...args}>
      <Alert.Content>
        <Alert.Title>Some rows were skipped</Alert.Title>
        <Alert.Description>12 rows had no email address.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  ),
};
