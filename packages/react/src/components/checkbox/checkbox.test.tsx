import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Field } from '../field/index.js';
import { Checkbox, type CheckboxRootProps } from './checkbox.js';

const Example = (props: CheckboxRootProps) => (
  <Checkbox.Root {...props}>
    <Checkbox.Control />
    <Checkbox.Label>Accept the terms</Checkbox.Label>
  </Checkbox.Root>
);

describe('Checkbox', () => {
  it('toggles with a click on the label and with Space', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Example onCheckedChange={onCheckedChange} />);
    const checkbox = screen.getByRole('checkbox', { name: 'Accept the terms' });
    expect(checkbox).not.toBeChecked();

    await user.click(screen.getByText('Accept the terms'));
    expect(checkbox).toBeChecked();
    expect(onCheckedChange).toHaveBeenLastCalledWith({ checked: true });

    await user.keyboard(' ');
    expect(checkbox).not.toBeChecked();
  });

  it('is reachable with Tab', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    expect(screen.getByRole('checkbox')).toHaveFocus();
  });

  it('supports the controlled indeterminate state', async () => {
    render(<Example checked="indeterminate" />);
    // Ark sets the input's `indeterminate` DOM property in an effect.
    await waitFor(() => {
      expect(screen.getByRole('checkbox')).toBePartiallyChecked();
    });
  });

  it('cannot be toggled when disabled or read-only', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Example disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
    await user.click(screen.getByText('Accept the terms'));
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    rerender(<Example readOnly />);
    await user.click(screen.getByText('Accept the terms'));
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('submits name and value with a form', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <form>
        <Example name="terms" value="yes" />
      </form>,
    );
    await user.click(screen.getByText('Accept the terms'));
    const form = container.querySelector('form');
    if (!form) throw new Error('form not rendered');
    expect(new FormData(form).get('terms')).toBe('yes');
  });

  it('takes invalid, required and the description from Field.Root', async () => {
    render(
      <Field.Root invalid required>
        <Example />
        <Field.HelperText>Required to continue.</Field.HelperText>
        <Field.ErrorText>You must accept the terms.</Field.ErrorText>
      </Field.Root>,
    );
    const checkbox = screen.getByRole('checkbox', { name: 'Accept the terms' });
    expect(checkbox).toBeInvalid();
    expect(checkbox).toBeRequired();
    await waitFor(() => {
      expect(checkbox).toHaveAccessibleDescription(
        expect.stringContaining('You must accept the terms.'),
      );
    });
  });

  it('tracks several values in a group', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Checkbox.Group role="group" aria-label="Topics" onValueChange={onValueChange}>
        {['react', 'tokens'].map((value) => (
          <Checkbox.Root key={value} value={value}>
            <Checkbox.Control />
            <Checkbox.Label>{value}</Checkbox.Label>
          </Checkbox.Root>
        ))}
      </Checkbox.Group>,
    );
    await user.click(screen.getByText('react'));
    await user.click(screen.getByText('tokens'));
    expect(onValueChange).toHaveBeenLastCalledWith(['react', 'tokens']);
  });

  it('forwards the ref and merges className on the root', () => {
    const ref = createRef<HTMLLabelElement>();
    render(
      <Checkbox.Root ref={ref} className="mt-2">
        <Checkbox.Control />
        <Checkbox.Label>Accept the terms</Checkbox.Label>
      </Checkbox.Root>,
    );
    expect(ref.current?.tagName).toBe('LABEL');
    expect(ref.current).toHaveClass('mt-2');
  });

  it.each<[string, CheckboxRootProps]>([
    ['unchecked', {}],
    ['checked', { defaultChecked: true }],
    ['indeterminate', { checked: 'indeterminate' }],
    ['invalid', { invalid: true }],
    ['disabled', { disabled: true }],
  ])('has no axe violations (%s)', async (_state, props) => {
    const { container } = render(<Example {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
