import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '../button/index.js';
import { Tooltip, type TooltipRootProps } from './tooltip.js';

const SHORT = 'Download a CSV of this report';
const LONG = 'Archived projects are read only. Restore one from Settings to edit it again.';

type Placement = 'top' | 'bottom' | 'left' | 'right';

const Example = ({ text = SHORT, ...props }: TooltipRootProps & { text?: string }) => (
  <Tooltip.Root {...props}>
    <Tooltip.Trigger asChild>
      <Button variant="neutral">Export</Button>
    </Tooltip.Trigger>
    <Tooltip.Content>{text}</Tooltip.Content>
  </Tooltip.Root>
);

/**
 * Waits until Ark has positioned the open tooltip, so the screenshot never races it. The
 * placement attribute is set before Floating UI computes the position, so this also checks
 * the tooltip sits at the gutter distance (8 px) from the trigger on that side.
 */
const waitForPlacement = (placement: Placement) => async () => {
  await waitFor(async () => {
    const tooltip = screen.getByRole('tooltip');
    const trigger = document.querySelector('[data-scope="tooltip"][data-part="trigger"]');
    if (!trigger) throw new Error('Tooltip trigger not found');
    const t = tooltip.getBoundingClientRect();
    const b = trigger.getBoundingClientRect();
    const gap = {
      top: b.top - t.bottom,
      bottom: t.top - b.bottom,
      left: b.left - t.right,
      right: t.left - b.right,
    }[placement];
    await expect(tooltip).toHaveAttribute('data-placement', placement);
    await expect(gap).toBeGreaterThanOrEqual(7);
    await expect(gap).toBeLessThanOrEqual(9);
  });
};

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip.Root,
  tags: ['autodocs', 'visual'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="p-24">
        <Story />
      </div>
    ),
  ],
  render: (args) => <Example {...args} />,
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { open: true }, play: waitForPlacement('top') };

// Placement stories turn `flip` off so they always show the asked side, even in the narrow
// viewport of the story tests, where Ark would rightly flip to the side with room.
export const Bottom: Story = {
  args: { open: true, positioning: { placement: 'bottom', flip: false } },
  play: waitForPlacement('bottom'),
};

export const Left: Story = {
  args: { open: true, positioning: { placement: 'left', flip: false } },
  play: waitForPlacement('left'),
};

export const Right: Story = {
  args: { open: true, positioning: { placement: 'right', flip: false } },
  play: waitForPlacement('right'),
};

export const LongText: Story = {
  args: { open: true },
  render: (args) => <Example {...args} text={LONG} />,
  play: waitForPlacement('top'),
};

/** Keyboard focus shows it at once, Escape hides it, hover shows it after the delay. */
export const Interaction: Story = {
  tags: ['!visual'],
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByRole('button', { name: 'Export' });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    const tooltip = await screen.findByRole('tooltip');
    await expect(tooltip).toHaveTextContent(SHORT);
    await expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
    trigger.blur();
    await userEvent.hover(trigger);
    await screen.findByRole('tooltip', {}, { timeout: 2000 });
    await userEvent.unhover(trigger);
    await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
  },
};
