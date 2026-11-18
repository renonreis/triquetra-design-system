import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe';
import { Input } from './input';

describe('Input', () => {
  it('renders a textbox that accepts typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input aria-label="Name" onChange={onChange} />);
    const input = screen.getByRole('textbox', { name: 'Name' });
    await user.type(input, 'Ada');
    expect(input).toHaveValue('Ada');
    expect(onChange).toHaveBeenCalledTimes(3);
  });

  it('sets aria-invalid only when invalid', () => {
    const { rerender } = render(<Input aria-label="Name" />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
    rerender(<Input aria-label="Name" invalid />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('cannot be edited when disabled or read-only', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Input aria-label="Disabled" disabled defaultValue="a" />
        <Input aria-label="Read only" readOnly defaultValue="b" />
      </>,
    );
    await user.type(screen.getByRole('textbox', { name: 'Disabled' }), 'x');
    await user.type(screen.getByRole('textbox', { name: 'Read only' }), 'x');
    expect(screen.getByRole('textbox', { name: 'Disabled' })).toHaveValue('a');
    expect(screen.getByRole('textbox', { name: 'Read only' })).toHaveValue('b');
  });

  it('forwards the ref, supports other types and merges className', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} type="email" aria-label="Email" className="mt-2" />);
    expect(ref.current).toBe(screen.getByRole('textbox', { name: 'Email' }));
    expect(ref.current).toHaveAttribute('type', 'email');
    expect(ref.current).toHaveClass('mt-2');
  });

  it.each([
    ['default', <Input key="d" aria-label="Name" />],
    ['invalid', <Input key="i" aria-label="Name" invalid />],
    ['disabled', <Input key="x" aria-label="Name" disabled />],
    ['read-only', <Input key="r" aria-label="Name" readOnly />],
  ])('has no axe violations (%s)', async (_state, element) => {
    const { container } = render(element);
    expect(await axe(container)).toHaveNoViolations();
  });
});
