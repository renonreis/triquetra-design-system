import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Tabs, type TabsRootProps } from './tabs.js';

const Example = (props: TabsRootProps) => (
  <Tabs.Root {...props} style={{ width: '32rem' }}>
    <Tabs.List aria-label="Design system">
      <Tabs.Trigger value="tokens">Tokens</Tabs.Trigger>
      <Tabs.Trigger value="components">Components</Tabs.Trigger>
      <Tabs.Trigger value="patterns">Patterns</Tabs.Trigger>
      <Tabs.Trigger value="archive" disabled>
        Archive
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tokens">
      Primitives, brand roles and semantic tokens, compiled to CSS custom properties.
    </Tabs.Content>
    <Tabs.Content value="components">
      Accessible React components built on Ark UI and styled with semantic tokens.
    </Tabs.Content>
    <Tabs.Content value="patterns">
      Recipes that combine components into common layouts and flows.
    </Tabs.Content>
    <Tabs.Content value="archive">Retired components.</Tabs.Content>
  </Tabs.Root>
);

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  tags: ['autodocs', 'visual'],
  args: { defaultValue: 'tokens', variant: 'line', size: 'md', orientation: 'horizontal' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['line', 'enclosed'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    activationMode: { control: 'inline-radio', options: ['automatic', 'manual'] },
  },
  render: (args) => <Example {...args} />,
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Line: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('tab', { name: 'Components' }));
    await expect(canvas.getByRole('tabpanel', { name: 'Components' })).toBeVisible();
    // Automatic activation: moving focus with the arrow keys also selects the tab.
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(async () => {
      await expect(canvas.getByRole('tab', { name: 'Tokens' })).toHaveAttribute(
        'aria-selected',
        'true',
      );
      await expect(canvas.getByRole('tabpanel', { name: 'Tokens' })).toBeVisible();
    });
    // Leave nothing focused so the screenshot shows the resting state.
    canvas.getByRole('tab', { name: 'Tokens' }).blur();
  },
};
export const Enclosed: Story = { args: { variant: 'enclosed' } };
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
export const Vertical: Story = { args: { orientation: 'vertical' } };
export const VerticalEnclosed: Story = { args: { orientation: 'vertical', variant: 'enclosed' } };

/** A panel taller than the tab list: the enclosed track keeps its own height, the line rule stretches. */
export const VerticalTallPanel: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['line', 'enclosed'] as const).map((variant) => (
        <Tabs.Root key={variant} {...args} variant={variant} style={{ width: '32rem' }}>
          <Tabs.List aria-label={`Settings (${variant})`}>
            <Tabs.Trigger value="tokens">Tokens</Tabs.Trigger>
            <Tabs.Trigger value="components">Components</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tokens">
            <p>Primitives hold raw values and are never emitted as CSS variables.</p>
            <p>Brand roles map primitives to intent, scoped by data-brand.</p>
            <p>Semantic tokens reference brand roles, so they work with any brand.</p>
            <p>Light and dark modes define the same token paths.</p>
            <p>Themes contain only overrides on top of the default theme.</p>
          </Tabs.Content>
          <Tabs.Content value="components">Components panel.</Tabs.Content>
        </Tabs.Root>
      ))}
    </div>
  ),
};
export const SecondSelected: Story = { args: { defaultValue: 'components' } };

export const Hover: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Example {...args} />
      <Example {...args} variant="enclosed" />
    </div>
  ),
  parameters: { pseudo: { hover: true } },
};

export const FocusVisible: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Example {...args} />
      <Example {...args} variant="enclosed" />
    </div>
  ),
  parameters: { pseudo: { focusVisible: true } },
};

export const ManualActivation: Story = {
  args: { activationMode: 'manual' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    const components = canvas.getByRole('tab', { name: 'Components' });
    await waitFor(() => expect(components).toHaveFocus());
    await expect(components).toHaveAttribute('aria-selected', 'false');
  },
};
