import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { axe } from '../../test/axe';
import { Field, type FieldRootProps } from './field';

const Example = (props: FieldRootProps) => (
  <Field.Root {...props}>
    <Field.Label>
      Email <Field.RequiredIndicator />
    </Field.Label>
    <Field.Input type="email" />
    <Field.HelperText>Helper</Field.HelperText>
    <Field.ErrorText>Error</Field.ErrorText>
  </Field.Root>
);

describe('Field', () => {
  it('associates the label and helper text with the input', async () => {
    const user = userEvent.setup();
    render(<Example />);
    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toHaveAccessibleDescription('Helper');
    await user.click(screen.getByText('Email'));
    expect(input).toHaveFocus();
  });

  it('shows the error text and marks the input invalid only when invalid', async () => {
    const { rerender } = render(<Example />);
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toBeInvalid();

    rerender(<Example invalid />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInvalid();
    // Ark adds the error text to aria-describedby once it is mounted.
    await waitFor(() => {
      expect(input.getAttribute('aria-describedby')).toContain(screen.getByText('Error').id);
    });
    expect(screen.getByText('Error')).toHaveAttribute('aria-live', 'polite');
  });

  it('propagates required, disabled and read-only to the input', () => {
    const { rerender } = render(<Example required />);
    expect(screen.getByRole('textbox')).toBeRequired();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');

    rerender(<Example disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();

    rerender(<Example readOnly />);
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
  });

  it('hides the required indicator when the field is optional', () => {
    render(<Example />);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it.each<[string, FieldRootProps]>([
    ['default', {}],
    ['required', { required: true }],
    ['invalid', { invalid: true }],
    ['disabled', { disabled: true }],
  ])('has no axe violations (%s)', async (_state, props) => {
    const { container } = render(<Example {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
