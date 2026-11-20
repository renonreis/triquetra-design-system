import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef, type ReactElement } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Field, type FieldRootProps } from '../field/index.js';
import { Textarea, type TextareaProps } from './textarea.js';

// jsdom has no ResizeObserver; src/test/setup.ts stubs it, so autoresize mounts here.

const InField = ({
  root,
  textarea,
}: {
  root?: FieldRootProps;
  textarea?: Partial<TextareaProps>;
}) => (
  <Field.Root {...root}>
    <Field.Label>
      Message <Field.RequiredIndicator />
    </Field.Label>
    <Field.Textarea {...textarea} />
    <Field.HelperText>Helper</Field.HelperText>
    <Field.ErrorText>Error</Field.ErrorText>
  </Field.Root>
);

describe('Textarea', () => {
  it('accepts multi line typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Textarea aria-label="Message" onChange={onChange} />);
    const textarea = screen.getByRole('textbox', { name: 'Message' });
    await user.type(textarea, 'Hi{Enter}Ada');
    expect(textarea).toHaveValue('Hi\nAda');
    expect(onChange).toHaveBeenCalledTimes(6);
  });

  it('defaults rows to 3 and follows the prop', () => {
    const { rerender } = render(<Textarea aria-label="Message" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '3');
    rerender(<Textarea aria-label="Message" rows={5} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
  });

  it('forwards the ref, spreads props and merges className', () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} aria-label="Message" maxLength={10} className="mt-2" />);
    const textarea = screen.getByRole('textbox', { name: 'Message' });
    expect(ref.current).toBe(textarea);
    expect(textarea.tagName).toBe('TEXTAREA');
    expect(textarea).toHaveAttribute('maxlength', '10');
    expect(textarea).toHaveClass('mt-2', 'resize-y');
  });

  it('does not accept asChild', () => {
    // @ts-expect-error asChild is not part of TextareaProps
    const props: TextareaProps = { asChild: true };
    expect(props).toBeDefined();
  });

  it('turns manual resize off with autoresize', () => {
    render(<Textarea aria-label="Message" autoresize />);
    expect(screen.getByRole('textbox')).toHaveStyle({ resize: 'none' });
  });

  it('cannot be edited when disabled or read only', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Textarea aria-label="Disabled" disabled defaultValue="a" />
        <Textarea aria-label="Read only" readOnly defaultValue="b" />
      </>,
    );
    await user.type(screen.getByRole('textbox', { name: 'Disabled' }), 'x');
    await user.type(screen.getByRole('textbox', { name: 'Read only' }), 'x');
    expect(screen.getByRole('textbox', { name: 'Disabled' })).toHaveValue('a');
    expect(screen.getByRole('textbox', { name: 'Read only' })).toHaveValue('b');
  });

  describe('inside Field', () => {
    it('is named by the label and described by the helper', async () => {
      const user = userEvent.setup();
      render(<InField root={{ required: true }} />);
      const textarea = screen.getByRole('textbox', { name: 'Message' });
      expect(textarea).toHaveAccessibleDescription('Helper');
      expect(textarea).toBeRequired();
      await user.click(screen.getByText('Message'));
      expect(textarea).toHaveFocus();
    });

    it('takes disabled and read only from the root', () => {
      const { rerender } = render(<InField root={{ disabled: true }} />);
      expect(screen.getByRole('textbox')).toBeDisabled();
      rerender(<InField root={{ readOnly: true }} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it.each<[string, FieldRootProps | undefined, boolean | undefined, boolean, boolean]>([
      ['no root, invalid absent', undefined, undefined, false, false],
      ['no root, invalid false', undefined, false, false, false],
      ['no root, invalid true', undefined, true, true, false],
      ['valid root, invalid absent', {}, undefined, false, false],
      ['valid root, invalid false', {}, false, false, false],
      ['valid root, invalid true', {}, true, true, false],
      ['invalid root, invalid absent', { invalid: true }, undefined, true, true],
      ['invalid root, invalid false', { invalid: true }, false, true, true],
      ['invalid root, invalid true', { invalid: true }, true, true, true],
    ])('invalid truth table: %s', async (_case, root, invalid, ariaInvalid, errorShown) => {
      if (root === undefined) {
        render(<Textarea aria-label="Message" invalid={invalid} />);
      } else {
        render(<InField root={root} textarea={{ invalid }} />);
      }
      const textarea = screen.getByRole('textbox');
      if (ariaInvalid) expect(textarea).toHaveAttribute('aria-invalid', 'true');
      else expect(textarea).not.toHaveAttribute('aria-invalid');
      if (errorShown) {
        await waitFor(() => {
          expect(textarea.getAttribute('aria-describedby')).toContain(screen.getByText('Error').id);
        });
      } else {
        expect(screen.queryByText('Error')).not.toBeInTheDocument();
      }
    });
  });

  it.each<[string, ReactElement]>([
    ['default', <Textarea key="d" aria-label="Message" />],
    ['with value', <Textarea key="v" aria-label="Message" defaultValue="Hi Ada" />],
    ['invalid', <Textarea key="i" aria-label="Message" invalid />],
    ['disabled', <Textarea key="x" aria-label="Message" disabled />],
    ['read only', <Textarea key="r" aria-label="Message" readOnly />],
    ['in field', <InField key="f" root={{ required: true }} />],
    ['in field, invalid', <InField key="fi" root={{ required: true, invalid: true }} />],
  ])('has no axe violations (%s)', async (_state, element) => {
    const { container } = render(element);
    expect(await axe(container)).toHaveNoViolations();
  });
});
