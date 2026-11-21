import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Badge, type BadgeProps } from './badge.js';

const TONES = [
  ['neutral', 'Draft'],
  ['positive', 'Active'],
  ['warning', 'Pending'],
  ['negative', 'Failed'],
  ['informative', 'New'],
] as const;
const sizes = ['sm', 'md'] as const;

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs', 'visual'],
  args: { tone: 'neutral', size: 'md', children: 'Draft' },
  argTypes: {
    tone: { control: 'inline-radio', options: TONES.map(([tone]) => tone) },
    size: { control: 'inline-radio', options: sizes },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Positive: Story = { args: { tone: 'positive', children: 'Active' } };

export const Warning: Story = { args: { tone: 'warning', children: 'Pending' } };

export const Negative: Story = { args: { tone: 'negative', children: 'Failed' } };

export const Informative: Story = { args: { tone: 'informative', children: 'New' } };

export const Sizes: Story = {
  render: (args: BadgeProps) => (
    <div className="flex flex-col gap-3">
      {sizes.map((size) => (
        <div key={size} className="flex items-center gap-2">
          {TONES.map(([tone, label]) => (
            <Badge key={tone} {...args} tone={tone} size={size}>
              {label}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};

const COUNTS = [
  ['neutral', '3', 'unread messages'],
  ['negative', '12', 'failed jobs'],
  ['informative', '99+', 'new comments'],
] as const;

export const Count: Story = {
  render: (args: BadgeProps) => (
    <div className="flex items-center gap-2">
      {COUNTS.map(([tone, count, context]) => (
        <Badge key={tone} {...args} tone={tone}>
          {count}
          <span className="sr-only"> {context}</span>
        </Badge>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('3').textContent).toBe('3 unread messages');
  },
};
