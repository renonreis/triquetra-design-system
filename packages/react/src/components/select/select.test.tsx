import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Field, type FieldRootProps } from '../field/index.js';
import { Select, createListCollection, type SelectRootProps } from './select.js';

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular', disabled: true },
  ],
});
type Framework = (typeof frameworks.items)[number];

const Parts = ({ clearable = false }: { clearable?: boolean }) => (
  <>
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
  </>
);

const Example = ({
  clearable,
  ...props
}: Partial<SelectRootProps<Framework>> & { clearable?: boolean }) => (
  <Select.Root collection={frameworks} {...props}>
    <Parts clearable={clearable} />
  </Select.Root>
);

describe('Select', () => {
  it('renders a named combobox showing the placeholder, with the list unmounted', () => {
    render(<Example />);
    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    expect(trigger).toHaveTextContent('Pick a framework');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('opens on click and selects an option, then closes and restores focus', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Example onValueChange={onValueChange} />);
    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);
    const listbox = await screen.findByRole('listbox', { name: 'Framework' });
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await user.click(within(listbox).getByRole('option', { name: 'Vue' }));
    expect(onValueChange).toHaveBeenLastCalledWith(expect.objectContaining({ value: ['vue'] }));
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
    expect(trigger).toHaveTextContent('Vue');
    expect(trigger).toHaveFocus();
  });

  it('supports the keyboard: open with ArrowDown, move, select with Enter, close with Escape', async () => {
    const user = userEvent.setup();
    render(<Example />);
    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.tab();
    expect(trigger).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    const listbox = await screen.findByRole('listbox');
    await waitFor(() => {
      expect(listbox).toHaveFocus();
    });
    await waitFor(() => {
      expect(within(listbox).getByRole('option', { name: 'React' })).toHaveAttribute(
        'data-highlighted',
      );
    });
    await user.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => {
      expect(trigger).toHaveTextContent('Vue');
    });
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });

    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toHaveFocus();
    });
    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveTextContent('Vue');
  });

  it('marks the selected option and skips disabled options', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Example defaultValue={['svelte']} defaultOpen onValueChange={onValueChange} />);
    const listbox = await screen.findByRole('listbox');
    expect(within(listbox).getByRole('option', { name: 'Svelte' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    const angular = within(listbox).getByRole('option', { name: 'Angular' });
    expect(angular).toHaveAttribute('aria-disabled', 'true');
    await user.click(angular);
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('selects several options when multiple, keeping the list open', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Example multiple onValueChange={onValueChange} />);
    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);
    const listbox = await screen.findByRole('listbox');
    expect(listbox).toHaveAttribute('aria-multiselectable', 'true');
    await user.click(within(listbox).getByRole('option', { name: 'React' }));
    await user.click(within(listbox).getByRole('option', { name: 'Svelte' }));
    expect(onValueChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ value: ['react', 'svelte'] }),
    );
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(trigger).toHaveTextContent('React, Svelte');
  });

  it('clears the value with the clear button, which is hidden while empty', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Example clearable defaultValue={['react']} onValueChange={onValueChange} />);
    await user.click(screen.getByRole('button', { name: 'Clear value' }));
    expect(onValueChange).toHaveBeenLastCalledWith(expect.objectContaining({ value: [] }));
    expect(screen.getByRole('combobox')).toHaveTextContent('Pick a framework');
    expect(screen.queryByRole('button', { name: 'Clear value' })).not.toBeInTheDocument();
  });

  it('supports controlled value', () => {
    const { rerender } = render(<Example value={['react']} />);
    expect(screen.getByRole('combobox')).toHaveTextContent('React');
    rerender(<Example value={['svelte']} />);
    expect(screen.getByRole('combobox')).toHaveTextContent('Svelte');
  });

  it('cannot be opened when disabled or read-only', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Example disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
    await user.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    rerender(<Example readOnly />);
    await user.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('submits the value with a form through the hidden native select', () => {
    const { container } = render(
      <form>
        <Example name="framework" multiple defaultValue={['react', 'vue']} />
      </form>,
    );
    const form = container.querySelector('form');
    expect(form).not.toBeNull();
    expect(new FormData(form ?? undefined).getAll('framework')).toEqual(['react', 'vue']);
  });

  it('names item groups by their label', async () => {
    const grouped = createListCollection({
      items: [
        { label: 'Triquetra', value: 'triquetra', group: 'Brands' },
        { label: 'Default', value: 'default', group: 'Themes' },
        { label: 'Black Friday', value: 'black-friday', group: 'Themes' },
      ],
      groupBy: (item) => item.group,
    });
    render(
      <Select.Root collection={grouped} defaultOpen>
        <Select.Label>Preset</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText />
          </Select.Trigger>
        </Select.Control>
        <Select.Content>
          {grouped.group().map(([group, items]) => (
            <Select.ItemGroup key={group}>
              <Select.ItemGroupLabel>{group}</Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          ))}
        </Select.Content>
      </Select.Root>,
    );
    const listbox = await screen.findByRole('listbox', { name: 'Preset' });
    const themes = within(listbox).getByRole('group', { name: 'Themes' });
    expect(
      within(themes)
        .getAllByRole('option')
        .map((o) => o.textContent),
    ).toEqual(['Default', 'Black Friday']);
    expect(await axe(listbox)).toHaveNoViolations();
  });

  describe('inside Field.Root', () => {
    const FieldExample = (props: FieldRootProps) => (
      <Field.Root {...props}>
        <Select.Root collection={frameworks}>
          <Parts />
        </Select.Root>
        <Field.HelperText>Used for the starter template.</Field.HelperText>
        <Field.ErrorText>Pick a framework.</Field.ErrorText>
      </Field.Root>
    );

    it('takes the label, helper text and states from the field', async () => {
      const { rerender } = render(<FieldExample required />);
      const trigger = screen.getByRole('combobox', { name: 'Framework' });
      expect(trigger).toHaveAttribute('aria-required', 'true');
      await waitFor(() => {
        expect(trigger).toHaveAccessibleDescription('Used for the starter template.');
      });

      rerender(<FieldExample invalid />);
      expect(trigger).toBeInvalid();
      await waitFor(() => {
        expect(trigger).toHaveAccessibleDescription(expect.stringContaining('Pick a framework.'));
      });

      rerender(<FieldExample disabled />);
      expect(trigger).toBeDisabled();
    });
  });

  it.each<[string, Partial<SelectRootProps<Framework>> & { clearable?: boolean }]>([
    ['default', {}],
    ['with value', { defaultValue: ['react'], clearable: true }],
    ['invalid', { invalid: true }],
    ['disabled', { disabled: true }],
    ['read-only', { readOnly: true, defaultValue: ['react'] }],
  ])('has no axe violations (%s)', async (_state, props) => {
    const { container } = render(<Example {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each<[string, Partial<SelectRootProps<Framework>>]>([
    ['single', { defaultValue: ['vue'] }],
    ['multiple', { multiple: true, defaultValue: ['react', 'vue'] }],
  ])('has no axe violations when open (%s)', async (_state, props) => {
    const { container } = render(<Example defaultOpen {...props} />);
    // The list is portalled to <body>, so scan it as well as the control.
    const listbox = await screen.findByRole('listbox');
    expect(await axe(container)).toHaveNoViolations();
    expect(await axe(listbox)).toHaveNoViolations();
  });
});
