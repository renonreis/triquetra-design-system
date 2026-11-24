import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '../button/index.js';
import { Dialog } from '../dialog/index.js';
import { Field } from '../field/index.js';
import { Select, createListCollection } from '../select/index.js';
import { Popover, type PopoverRootProps } from './popover.js';

const Example = (props: PopoverRootProps) => (
  <Popover.Root {...props}>
    <Popover.Trigger asChild>
      <Button variant="neutral">Share</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.Header>
        <Popover.Title>Share project</Popover.Title>
        <Popover.Description>Anyone with the link can view this project.</Popover.Description>
      </Popover.Header>
      <Popover.Footer>
        <Button size="sm">Copy link</Button>
      </Popover.Footer>
      <Popover.CloseTrigger />
    </Popover.Content>
  </Popover.Root>
);

/**
 * Waits until Ark has positioned the open panel, so the screenshot never races it: the placement
 * attribute is set before Floating UI computes the position, so this also checks the panel sits
 * at the gutter distance (8 px) from the trigger on that side.
 */
const waitForPlacement = (placement: 'top' | 'bottom') => async () => {
  await waitFor(async () => {
    const panel = screen.getByRole('dialog');
    const trigger = document.querySelector('[data-scope="popover"][data-part="trigger"]');
    if (!trigger) throw new Error('Popover trigger not found');
    const p = panel.getBoundingClientRect();
    const t = trigger.getBoundingClientRect();
    const gap = placement === 'top' ? t.top - p.bottom : p.top - t.bottom;
    await expect(panel).toHaveAttribute('data-placement', placement);
    await expect(gap).toBeGreaterThanOrEqual(7);
    await expect(gap).toBeLessThanOrEqual(9);
  });
};

const meta = {
  title: 'Components/Popover',
  component: Popover.Root,
  tags: ['autodocs', 'visual'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="flex min-h-dvh items-center justify-center">
        <Story />
      </div>
    ),
  ],
  render: (args) => <Example {...args} />,
} satisfies Meta<typeof Popover.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { open: true }, play: waitForPlacement('bottom') };

// `flip` is off so the story always shows the asked side, whatever the viewport.
export const Top: Story = {
  args: { open: true, positioning: { placement: 'top', flip: false } },
  play: waitForPlacement('top'),
};

const FormExample = (props: PopoverRootProps) => (
  <Popover.Root {...props}>
    <Popover.Trigger asChild>
      <Button variant="neutral">Rename</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.Header>
        <Popover.Title>Rename project</Popover.Title>
      </Popover.Header>
      <Popover.Body>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Field.Input defaultValue="Website" />
        </Field.Root>
      </Popover.Body>
      <Popover.Footer>
        <Popover.CloseTrigger asChild>
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
        </Popover.CloseTrigger>
        <Button size="sm">Save</Button>
      </Popover.Footer>
    </Popover.Content>
  </Popover.Root>
);

export const WithForm: Story = {
  args: { open: true },
  render: (args) => <FormExample {...args} />,
  play: waitForPlacement('bottom'),
};

const BodyExample = (props: PopoverRootProps) => (
  <Popover.Root {...props}>
    <Popover.Trigger asChild>
      <Button variant="neutral">About quotas</Button>
    </Popover.Trigger>
    <Popover.Content aria-label="About quotas">
      <Popover.Body>
        Each workspace can hold 20 projects. Archived projects do not count.
      </Popover.Body>
    </Popover.Content>
  </Popover.Root>
);

/** Without a title, `Popover.Content` takes an `aria-label`. */
export const BodyOnly: Story = {
  args: { open: true },
  render: (args) => <BodyExample {...args} />,
  play: waitForPlacement('bottom'),
};

const closed = () => waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

/** Click opens and moves focus in; Escape, the close button and the trigger return focus. */
export const Interaction: Story = {
  tags: ['!visual'],
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByRole('button', { name: 'Share' });
    await userEvent.click(trigger);
    const panel = await screen.findByRole('dialog', { name: 'Share project' });
    await expect(panel).toHaveAccessibleDescription('Anyone with the link can view this project.');
    await waitFor(() => expect(screen.getByRole('button', { name: 'Copy link' })).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await closed();
    await waitFor(() => expect(trigger).toHaveFocus());

    await userEvent.keyboard('{Enter}');
    await userEvent.click(await screen.findByRole('button', { name: 'Close' }));
    await closed();
    await waitFor(() => expect(trigger).toHaveFocus());

    await userEvent.click(trigger);
    await screen.findByRole('dialog');
    await userEvent.click(trigger);
    await closed();
    await expect(trigger).toHaveFocus();
  },
};

/** With nothing focusable inside, focus moves to the panel itself. */
export const NoFocusable: Story = {
  tags: ['!visual'],
  render: (args) => <BodyExample {...args} />,
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByRole('button', { name: 'About quotas' });
    await userEvent.click(trigger);
    const panel = await screen.findByRole('dialog', { name: 'About quotas' });
    await waitFor(() => expect(panel).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await closed();
    await waitFor(() => expect(trigger).toHaveFocus());
  },
};

/** Tab moves through the panel, then on to what follows the trigger, which closes the panel. */
export const TabOrder: Story = {
  tags: ['!visual'],
  render: (args) => (
    <div className="flex gap-4">
      <Example {...args} />
      <Button variant="ghost">Next</Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Share' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Copy link' })).toHaveFocus());
    await userEvent.tab();
    await expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus();
    await userEvent.tab();
    await waitFor(() =>
      expect(within(canvasElement).getByRole('button', { name: 'Next' })).toHaveFocus(),
    );
    await closed();
  },
};

/** An outside click closes it, and focus goes to what was clicked. */
export const OutsideClick: Story = {
  tags: ['!visual'],
  render: (args) => (
    <div className="flex gap-4">
      <Example {...args} />
      <Button variant="ghost">Elsewhere</Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Share' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Copy link' })).toHaveFocus());
    const elsewhere = canvas.getByRole('button', { name: 'Elsewhere' });
    await userEvent.click(elsewhere);
    await closed();
    await expect(elsewhere).toHaveFocus();
  },
};

const roles = createListCollection({ items: ['Viewer', 'Editor'] });

/** Nested overlays: a popover in a dialog, with a select inside it. Each closes on its own. */
export const Nested: Story = {
  tags: ['!visual'],
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Settings</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Settings</Dialog.Title>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="neutral">Invite</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Invite</Popover.Title>
            </Popover.Header>
            <Popover.Body>
              <Select.Root collection={roles}>
                <Select.Label>Role</Select.Label>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Pick a role" />
                    <Select.Indicator />
                  </Select.Trigger>
                </Select.Control>
                <Select.Content>
                  {roles.items.map((item) => (
                    <Select.Item key={item} item={item}>
                      <Select.ItemText>{item}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Root>
      </Dialog.Content>
    </Dialog.Root>
  ),
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Settings' }));
    const invite = await screen.findByRole('button', { name: 'Invite' });
    await userEvent.click(invite);
    const panel = await screen.findByRole('dialog', { name: 'Invite' });
    const select = within(panel).getByRole('combobox', { name: 'Role' });
    await waitFor(() => expect(select).toHaveFocus());
    await userEvent.click(select);
    await userEvent.click(await screen.findByRole('option', { name: 'Editor' }));
    await expect(panel).toBeVisible();
    await expect(select).toHaveTextContent('Editor');
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await userEvent.keyboard('{Escape}');
    await waitFor(() =>
      expect(screen.queryByRole('dialog', { name: 'Invite' })).not.toBeInTheDocument(),
    );
    await expect(screen.getByRole('dialog', { name: 'Settings' })).toBeVisible();
    await waitFor(() => expect(invite).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await closed();
  },
};

const LongExample = (props: PopoverRootProps) => (
  <Popover.Root {...props}>
    <Popover.Trigger asChild>
      <Button variant="neutral">Terms</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.Header>
        <Popover.Title>Terms</Popover.Title>
      </Popover.Header>
      <Popover.Body>
        {Array.from({ length: 60 }, (_, i) => (
          <p key={i}>Paragraph {i + 1} of the terms of use.</p>
        ))}
      </Popover.Body>
      <Popover.CloseTrigger />
    </Popover.Content>
  </Popover.Root>
);

/** A panel taller than the space left stays inside the viewport and scrolls. */
export const Overflow: Story = {
  tags: ['!visual'],
  render: (args) => <LongExample {...args} />,
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Terms' }));
    const panel = await screen.findByRole('dialog', { name: 'Terms' });
    await waitFor(async () => {
      const box = panel.getBoundingClientRect();
      await expect(box.top).toBeGreaterThanOrEqual(0);
      await expect(box.bottom).toBeLessThanOrEqual(window.innerHeight);
      await expect(panel.scrollHeight).toBeGreaterThan(panel.clientHeight);
    });
  },
};

/** At 320 px wide (WCAG 1.4.10) the panel shrinks and the page does not scroll sideways. */
export const Narrow: Story = {
  tags: ['!visual'],
  args: { open: true },
  parameters: {
    viewport: {
      options: { narrow: { name: 'Narrow', styles: { width: '320px', height: '568px' } } },
    },
  },
  globals: { viewport: { value: 'narrow', isRotated: false } },
  play: async () => {
    await waitForPlacement('bottom')();
    const box = screen.getByRole('dialog').getBoundingClientRect();
    await expect(box.left).toBeGreaterThanOrEqual(0);
    await expect(box.right).toBeLessThanOrEqual(window.innerWidth);
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
    await expect(window.innerWidth).toBe(320);
    await expect(box.width).toBe(304);
  },
};
