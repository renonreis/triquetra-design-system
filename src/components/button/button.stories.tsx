import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Button } from './button';

const variants = ['primary', 'secondary', 'neutral', 'negative', 'ghost'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs', 'visual'],
  args: { children: 'Button', onClick: fn() },
  argTypes: {
    variant: { control: 'inline-radio', options: variants },
    size: { control: 'inline-radio', options: sizes },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Button' }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Secondary: Story = { args: { variant: 'secondary' } };
export const Neutral: Story = { args: { variant: 'neutral' } };
export const Negative: Story = { args: { variant: 'negative', children: 'Delete' } };
export const Ghost: Story = { args: { variant: 'ghost' } };

const Matrix = (props: Partial<React.ComponentProps<typeof Button>>) => (
  <div className="flex flex-col gap-4">
    {variants.map((variant) => (
      <div key={variant} className="flex items-center gap-3">
        {sizes.map((size) => (
          <Button key={size} variant={variant} size={size} {...props}>
            {`${variant} ${size}`}
          </Button>
        ))}
      </div>
    ))}
  </div>
);

export const Sizes: Story = { render: () => <Matrix /> };

export const Hover: Story = {
  render: () => <Matrix />,
  parameters: { pseudo: { hover: true } },
};

export const Active: Story = {
  render: () => <Matrix />,
  parameters: { pseudo: { active: true } },
};

export const FocusVisible: Story = {
  render: () => <Matrix />,
  parameters: { pseudo: { focusVisible: true } },
};

export const Disabled: Story = {
  render: () => <Matrix disabled />,
};

export const Loading: Story = {
  args: { loading: true, children: 'Saving' },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole('button', { name: 'Saving' });
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [
    (Story) => (
      <div className="max-w-96 w-full">
        <Story />
      </div>
    ),
  ],
};

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="secondary">
      <a href="https://triquetra.renon.dev">Open docs</a>
    </Button>
  ),
};
