import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { Field } from '../field/index.js';
import { Select, createListCollection, type SelectRootProps } from './select.js';

const sizes = ['sm', 'md', 'lg'] as const;

interface Framework {
  label: string;
  value: string;
  disabled?: boolean;
}

const frameworks = createListCollection<Framework>({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Solid', value: 'solid' },
    { label: 'Angular', value: 'angular', disabled: true },
  ],
});

interface ExampleProps extends Partial<SelectRootProps<Framework>> {
  clearable?: boolean;
}

const Example = ({ clearable = false, ...props }: ExampleProps) => (
  <Select.Root collection={frameworks} {...props}>
    <Select.Label>Framework</Select.Label>
    <Select.Control>
      <Select.Trigger>
        <Select.ValueText placeholder="Pick a framework" />
        <Select.Indicator />
      </Select.Trigger>
      {clearable ? <Select.ClearTrigger /> : null}
    </Select.Control>
    <Select.Content>
      {frameworks.items.map((item) => (
        <Select.Item key={item.value} item={item}>
          <Select.ItemText>{item.label}</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
      ))}
    </Select.Content>
  </Select.Root>
);

const meta = {
  title: 'Components/Select',
  component: Example,
  tags: ['autodocs', 'visual'],
  args: {
    size: 'md',
    multiple: false,
    invalid: false,
    disabled: false,
    readOnly: false,
    clearable: false,
  },
  argTypes: { size: { control: 'inline-radio', options: sizes } },
  decorators: [
    (Story) => (
      // Story layout only: room for the open list, which the screenshots include.
      <div style={{ width: '20rem', minHeight: '18rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByRole('combobox', { name: 'Framework' });
    await userEvent.click(trigger);
    const listbox = await screen.findByRole('listbox', { name: 'Framework' });
    await userEvent.click(within(listbox).getByRole('option', { name: 'Svelte' }));
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Svelte');
    await expect(trigger).toHaveFocus();
  },
};

export const WithValue: Story = { args: { defaultValue: ['react'] } };

export const Open: Story = {
  args: { defaultOpen: true, defaultValue: ['vue'] },
  play: async () => {
    const listbox = await screen.findByRole('listbox', { name: 'Framework' });
    await expect(within(listbox).getByRole('option', { name: 'Vue' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    await expect(within(listbox).getByRole('option', { name: 'Angular' })).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  },
};

export const Multiple: Story = {
  args: { multiple: true, defaultValue: ['react', 'svelte'] },
};

export const MultipleOpen: Story = {
  args: { multiple: true, defaultOpen: true, defaultValue: ['react', 'svelte'] },
  play: async () => {
    const listbox = await screen.findByRole('listbox', { name: 'Framework' });
    await expect(listbox).toHaveAttribute('aria-multiselectable', 'true');
  },
};

export const Clearable: Story = {
  args: { clearable: true, defaultValue: ['solid'] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Clear value' }));
    await expect(canvas.getByRole('combobox', { name: 'Framework' })).toHaveTextContent(
      'Pick a framework',
    );
  },
};

export const ClearableWithValue: Story = {
  args: { clearable: true, multiple: true, defaultValue: ['react', 'vue', 'svelte', 'solid'] },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Example key={size} {...args} size={size} defaultValue={['react']} />
      ))}
    </div>
  ),
};

export const Hover: Story = { parameters: { pseudo: { hover: true } } };
export const FocusVisible: Story = { parameters: { pseudo: { focusVisible: true } } };
export const Invalid: Story = { args: { invalid: true } };
export const InvalidFocused: Story = {
  args: { invalid: true },
  parameters: { pseudo: { focusVisible: true } },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: ['react'] } };
export const ReadOnly: Story = { args: { readOnly: true, defaultValue: ['react'] } };

const grouped = createListCollection({
  items: [
    { label: 'Triquetra', value: 'triquetra', group: 'Brands' },
    { label: 'Acme', value: 'acme', group: 'Brands' },
    { label: 'Default', value: 'default', group: 'Themes' },
    { label: 'Black Friday', value: 'black-friday', group: 'Themes' },
  ],
  groupBy: (item) => item.group,
});

export const Grouped: Story = {
  args: { defaultOpen: true },
  render: ({ size, defaultOpen }) => (
    <Select.Root collection={grouped} size={size} defaultOpen={defaultOpen}>
      <Select.Label>Preset</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Pick a preset" />
          <Select.Indicator />
        </Select.Trigger>
      </Select.Control>
      <Select.Content>
        {grouped.group().map(([group, items]) => (
          <Select.ItemGroup key={group}>
            <Select.ItemGroupLabel>{group}</Select.ItemGroupLabel>
            {items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.ItemGroup>
        ))}
      </Select.Content>
    </Select.Root>
  ),
  play: async () => {
    const listbox = await screen.findByRole('listbox', { name: 'Preset' });
    const themes = within(listbox).getByRole('group', { name: 'Themes' });
    await expect(within(themes).getAllByRole('option')).toHaveLength(2);
  },
};

const FieldExample = ({ invalid = false }: { invalid?: boolean }) => (
  <Field.Root required invalid={invalid}>
    <Example />
    <Field.HelperText>Used for the starter template.</Field.HelperText>
    <Field.ErrorText>Pick a framework to continue.</Field.ErrorText>
  </Field.Root>
);

export const WithField: Story = {
  render: () => <FieldExample />,
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByRole('combobox', { name: 'Framework' });
    await expect(trigger).toHaveAttribute('aria-required', 'true');
    await waitFor(() =>
      expect(trigger).toHaveAccessibleDescription('Used for the starter template.'),
    );
  },
};

export const WithFieldInvalid: Story = {
  render: () => <FieldExample invalid />,
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByRole('combobox', { name: 'Framework' });
    await expect(trigger).toBeInvalid();
    await waitFor(() =>
      expect(trigger).toHaveAccessibleDescription(
        expect.stringContaining('Pick a framework to continue.'),
      ),
    );
  },
};
