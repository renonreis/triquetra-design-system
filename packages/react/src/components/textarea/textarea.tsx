import { Field } from '@ark-ui/react';
import { forwardRef } from 'react';
import { textareaVariants, type TextareaVariants } from './textarea.variants.js';

export interface TextareaProps
  extends Omit<Field.TextareaProps, 'size' | 'asChild'>, TextareaVariants {
  /**
   * Marks the value as invalid (`aria-invalid`). It only adds: it never clears the invalid
   * state of `Field.Root`. Inside `Field.Root`, prefer the root's `invalid` prop so the error
   * text is announced too. A raw `aria-invalid`, `id`, `aria-describedby`, `required`,
   * `disabled` or `readOnly` you pass wins over the field context (escape hatch).
   */
  invalid?: boolean;
  /**
   * Grows and shrinks with the content (never below the `rows` height) and turns manual
   * resize off. Read at mount: toggling it later is not supported.
   * @default false
   */
  autoresize?: boolean;
  /**
   * Visible text lines, with native semantics.
   * @default 3
   */
  rows?: number;
}

/**
 * Multi line text field that matches Input. Works standalone (give it an accessible name) or
 * inside `Field.Root`, which wires `id`, label, helper and error text and states automatically.
 * Resizes vertically by dragging its corner, unless `autoresize` is on.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { size, invalid, autoresize = false, rows = 3, className, ...props },
  ref,
) {
  return (
    <Field.Textarea
      ref={ref}
      // Only set when true, so it never overrides the state coming from Field.Root.
      {...(invalid ? { 'aria-invalid': true } : {})}
      autoresize={autoresize}
      rows={rows}
      className={textareaVariants({ size, className })}
      {...props}
    />
  );
});
