import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Field } from '../field/index.js';
import { Switch, type SwitchRootProps } from './switch.js';

const Example = (props: SwitchRootProps) => (
  <Switch.Root {...props}>
    <Switch.Control />
    <Switch.Label>Email notifications</Switch.Label>
  </Switch.Root>
);

describe('Switch', () => {
  it('exposes a named switch that toggles with a click on the label and with Space', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Example onCheckedChange={onCheckedChange} />);
    const toggle = screen.getByRole('switch', { name: 'Email notifications' });
    expect(toggle).not.toBeChecked();

    await user.click(screen.getByText('Email notifications'));
    expect(toggle).toBeChecked();
    expect(onCheckedChange).toHaveBeenLastCalledWith({ checked: true });

    await user.keyboard(' ');
    expect(toggle).not.toBeChecked();
    expect(onCheckedChange).toHaveBeenLastCalledWith({ checked: false });
  });

  it('is reachable with Tab', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    expect(screen.getByRole('switch')).toHaveFocus();
  });

  it('supports the controlled state', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Example checked onCheckedChange={onCheckedChange} />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeChecked();
    await user.click(screen.getByText('Email notifications'));
    expect(onCheckedChange).toHaveBeenLastCalledWith({ checked: false });
  });

  it('cannot be toggled when disabled or read-only', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Example disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
    await user.click(screen.getByText('Email notifications'));
    expect(screen.getByRole('switch')).not.toBeChecked();

    rerender(<Example readOnly />);
    await user.click(screen.getByText('Email notifications'));
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  it('submits name and value with a form', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <form>
        <Example name="notifications" value="on" />
      </form>,
    );
    const form = container.querySelector('form');
    if (!form) throw new Error('form not rendered');
    expect(new FormData(form).get('notifications')).toBeNull();
    await user.click(screen.getByText('Email notifications'));
    expect(new FormData(form).get('notifications')).toBe('on');
  });

  it('takes invalid, required, disabled and the description from Field.Root', async () => {
    const { rerender } = render(
      <Field.Root invalid required>
        <Example />
        <Field.HelperText>We send at most one email a week.</Field.HelperText>
        <Field.ErrorText>Turn on notifications to continue.</Field.ErrorText>
      </Field.Root>,
    );
    const toggle = screen.getByRole('switch', { name: 'Email notifications' });
    expect(toggle).toBeInvalid();
    expect(toggle).toBeRequired();
    await waitFor(() => {
      expect(toggle).toHaveAccessibleDescription(
        expect.stringContaining('Turn on notifications to continue.'),
      );
    });

    rerender(
      <Field.Root disabled>
        <Example />
        <Field.HelperText>We send at most one email a week.</Field.HelperText>
      </Field.Root>,
    );
    expect(screen.getByRole('switch')).toBeDisabled();
    expect(screen.getByRole('switch')).toHaveAccessibleDescription(
      'We send at most one email a week.',
    );
  });

  it('forwards the ref and merges className on the root', () => {
    const ref = createRef<HTMLLabelElement>();
    render(
      <Switch.Root ref={ref} className="mt-2">
        <Switch.Control />
        <Switch.Label>Email notifications</Switch.Label>
      </Switch.Root>,
    );
    expect(ref.current?.tagName).toBe('LABEL');
    expect(ref.current).toHaveClass('mt-2');
  });

  it.each<[string, SwitchRootProps]>([
    ['unchecked', {}],
    ['checked', { defaultChecked: true }],
    ['invalid', { invalid: true }],
    ['disabled', { disabled: true }],
    ['disabled checked', { disabled: true, defaultChecked: true }],
    ['read-only', { readOnly: true, defaultChecked: true }],
  ])('has no axe violations (%s)', async (_state, props) => {
    const { container } = render(<Example {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no axe violations inside Field.Root', async () => {
    const { container } = render(
      <Field.Root invalid>
        <Example />
        <Field.ErrorText>Turn on notifications to continue.</Field.ErrorText>
      </Field.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
