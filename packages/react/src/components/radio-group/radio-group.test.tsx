import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { RadioGroup, type RadioGroupItemProps, type RadioGroupRootProps } from './radio-group.js';

const OPTIONS = [
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['sms', 'Text message'],
] as const;

function Example({
  itemProps = {},
  ...props
}: RadioGroupRootProps & { itemProps?: Record<string, Partial<RadioGroupItemProps>> }) {
  return (
    <RadioGroup.Root name="contact" {...props}>
      <RadioGroup.Label>Contact method</RadioGroup.Label>
      {OPTIONS.map(([value, label]) => (
        <RadioGroup.Item key={value} value={value} {...itemProps[value]}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}

const radio = (name: string) => screen.getByRole('radio', { name });

describe('RadioGroup', () => {
  it('names the group with its label and each radio with its text', () => {
    render(<Example />);
    const group = screen.getByRole('radiogroup', { name: 'Contact method' });
    expect(group).toHaveAttribute('aria-orientation', 'vertical');
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(radio('Text message')).toHaveAttribute('type', 'radio');
  });

  it('selects one option on click and reports it', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Example onValueChange={onValueChange} />);

    await user.click(screen.getByText('Phone'));
    expect(radio('Phone')).toBeChecked();
    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith(expect.objectContaining({ value: 'phone' }));

    await user.click(screen.getByText('Email'));
    expect(radio('Email')).toBeChecked();
    expect(radio('Phone')).not.toBeChecked();
  });

  it('follows a controlled value', () => {
    const { rerender } = render(<Example value="email" />);
    expect(radio('Email')).toBeChecked();
    rerender(<Example value="sms" />);
    expect(radio('Text message')).toBeChecked();
    expect(radio('Email')).not.toBeChecked();
  });

  it('starts from defaultValue', () => {
    render(<Example defaultValue="phone" />);
    expect(radio('Phone')).toBeChecked();
  });

  it('enters the group with Tab on the checked radio', async () => {
    const user = userEvent.setup();
    render(<Example defaultValue="phone" />);
    await user.tab();
    expect(radio('Phone')).toHaveFocus();
  });

  it('marks every radio invalid from the root, or one radio from its item', () => {
    const { rerender } = render(<Example invalid />);
    for (const [, label] of OPTIONS) expect(radio(label)).toHaveAttribute('aria-invalid', 'true');

    rerender(<Example itemProps={{ phone: { invalid: true } }} />);
    expect(radio('Phone')).toHaveAttribute('aria-invalid', 'true');
    expect(radio('Email')).not.toHaveAttribute('aria-invalid');
  });

  it('marks the group and every radio required', () => {
    render(<Example required />);
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-required', 'true');
    for (const [, label] of OPTIONS) expect(radio(label)).toBeRequired();
  });

  it('disables the whole group or one item', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Example disabled />);
    for (const [, label] of OPTIONS) expect(radio(label)).toBeDisabled();
    await user.click(screen.getByText('Email'));
    expect(radio('Email')).not.toBeChecked();

    rerender(<Example itemProps={{ sms: { disabled: true } }} />);
    expect(radio('Text message')).toBeDisabled();
    expect(radio('Email')).toBeEnabled();
  });

  it('keeps the value when read only (Ark disables the radios)', async () => {
    const user = userEvent.setup();
    render(<Example readOnly defaultValue="email" />);
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-readonly', 'true');
    await user.click(screen.getByText('Phone'));
    expect(radio('Email')).toBeChecked();
    expect(radio('Phone')).not.toBeChecked();
    // Ark's behavior as shipped: a change here means read only groups now submit their value.
    expect(radio('Email')).toBeDisabled();
  });

  it('submits the selected value under name', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <form>
        <Example />
      </form>,
    );
    await user.click(screen.getByText('Text message'));
    const form = container.querySelector('form');
    if (!form) throw new Error('form not rendered');
    expect(new FormData(form).get('contact')).toBe('sms');
  });

  it('shares the size with every item and draws the dot only when checked', () => {
    const { container } = render(<Example size="lg" defaultValue="email" />);
    const controls = container.querySelectorAll('[data-part="item-control"]');
    expect(controls).toHaveLength(3);
    for (const control of controls) expect(control).toHaveClass('size-6');
    expect(controls[0]).toHaveAttribute('data-state', 'checked');
    expect(controls[1]).toHaveAttribute('data-state', 'unchecked');
    expect(controls[0]?.querySelector('span')).toHaveClass('size-3');
    expect(screen.getByText('Email')).toHaveClass('text-md', 'leading-6');
  });

  it('lays the label on its own line when horizontal', () => {
    render(<Example orientation="horizontal" />);
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'horizontal');
    expect(screen.getByText('Contact method')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('forwards refs to every part and spreads extra props', () => {
    const root = createRef<HTMLDivElement>();
    const label = createRef<HTMLSpanElement>();
    const item = createRef<HTMLLabelElement>();
    const control = createRef<HTMLDivElement>();
    const text = createRef<HTMLSpanElement>();
    render(
      <RadioGroup.Root ref={root} data-testid="root" className="custom-root">
        <RadioGroup.Label ref={label}>Contact method</RadioGroup.Label>
        <RadioGroup.Item ref={item} value="email" data-extra="item">
          <RadioGroup.ItemControl ref={control} />
          <RadioGroup.ItemText ref={text}>Email</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup.Root>,
    );
    expect(root.current).toBeInstanceOf(HTMLDivElement);
    expect(root.current).toHaveClass('custom-root', 'flex');
    expect(root.current).toHaveAttribute('data-testid', 'root');
    expect(label.current).toHaveTextContent('Contact method');
    expect(item.current?.tagName).toBe('LABEL');
    expect(item.current).toHaveAttribute('data-extra', 'item');
    expect(control.current).toHaveAttribute('aria-hidden', 'true');
    expect(text.current).toHaveTextContent('Email');
  });

  it('lets a custom child replace the dot', () => {
    render(
      <RadioGroup.Root>
        <RadioGroup.Label>Plan</RadioGroup.Label>
        <RadioGroup.Item value="pro">
          <RadioGroup.ItemControl>
            <svg data-testid="custom" />
          </RadioGroup.ItemControl>
          <RadioGroup.ItemText>Pro</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup.Root>,
    );
    expect(screen.getByTestId('custom')).toBeInTheDocument();
  });

  describe('has no axe violations', () => {
    it.each([
      ['default', {}],
      ['checked', { defaultValue: 'email' }],
      ['invalid', { invalid: true, defaultValue: 'email' }],
      ['disabled', { disabled: true, defaultValue: 'email' }],
      ['read only', { readOnly: true, defaultValue: 'email' }],
      ['horizontal', { orientation: 'horizontal' as const, defaultValue: 'email' }],
    ])('%s', async (_, props) => {
      const { container } = render(<Example {...props} />);
      expect(await axe(container)).toHaveNoViolations();
    });

    it('in a form, required and invalid with an error', async () => {
      const { container } = render(
        <form>
          <Example required invalid aria-describedby="contact-error" />
          <span id="contact-error">Choose how we should contact you.</span>
        </form>,
      );
      expect(screen.getByRole('radiogroup')).toHaveAccessibleDescription(
        'Choose how we should contact you.',
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
