import { Field } from '@ark-ui/react';
import { forwardRef } from 'react';
import { inputVariants, type InputVariants } from './input.variants';

export interface InputProps extends Omit<Field.InputProps, 'size'>, InputVariants {
  /**
   * Marks the value as invalid (`aria-invalid`). Inside `Field.Root`, prefer the
   * root's `invalid` prop so the error text is announced too.
   */
  invalid?: boolean;
}

/**
 * Text input. Works standalone (give it an accessible name) or inside `Field.Root`,
 * which wires `id`, label, helper/error text and states automatically.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size, invalid, className, ...props },
  ref,
) {
  return (
    <Field.Input
      ref={ref}
      // Only set when true, so it never overrides the state coming from Field.Root.
      {...(invalid ? { 'aria-invalid': true } : {})}
      className={inputVariants({ size, className })}
      {...props}
    />
  );
});
