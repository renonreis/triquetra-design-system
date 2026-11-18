import { Field as ArkField } from '@ark-ui/react';
import { forwardRef } from 'react';
import { Input, type InputProps } from '../input';
import { fieldVariants } from './field.variants';

const styles = fieldVariants();

export type FieldRootProps = ArkField.RootProps;
/** Provides `invalid`, `disabled`, `required` and `readOnly` to every part and wires the ids. */
const Root = forwardRef<HTMLDivElement, FieldRootProps>(function FieldRoot(
  { className, ...props },
  ref,
) {
  return <ArkField.Root ref={ref} className={styles.root({ className })} {...props} />;
});

export type FieldLabelProps = ArkField.LabelProps;
const Label = forwardRef<HTMLLabelElement, FieldLabelProps>(function FieldLabel(
  { className, ...props },
  ref,
) {
  return <ArkField.Label ref={ref} className={styles.label({ className })} {...props} />;
});

export type FieldRequiredIndicatorProps = ArkField.RequiredIndicatorProps;
/** Visual `*` shown only when the field is required (hidden from assistive tech). */
const RequiredIndicator = forwardRef<HTMLSpanElement, FieldRequiredIndicatorProps>(
  function FieldRequiredIndicator({ className, children = '*', ...props }, ref) {
    return (
      <ArkField.RequiredIndicator
        ref={ref}
        className={styles.requiredIndicator({ className })}
        {...props}
      >
        {children}
      </ArkField.RequiredIndicator>
    );
  },
);

export type FieldInputProps = InputProps;
/** The Triquetra `Input`, connected to the field. */
const FieldInput = Input;

export type FieldHelperTextProps = ArkField.HelperTextProps;
const HelperText = forwardRef<HTMLSpanElement, FieldHelperTextProps>(function FieldHelperText(
  { className, ...props },
  ref,
) {
  return <ArkField.HelperText ref={ref} className={styles.helperText({ className })} {...props} />;
});

export type FieldErrorTextProps = ArkField.ErrorTextProps;
/** Rendered only while the field is invalid; announced politely (`aria-live`). */
const ErrorText = forwardRef<HTMLSpanElement, FieldErrorTextProps>(function FieldErrorText(
  { className, ...props },
  ref,
) {
  return <ArkField.ErrorText ref={ref} className={styles.errorText({ className })} {...props} />;
});

/** Form field: label, control, helper and error text, wired for accessibility by Ark UI. */
export const Field = {
  Root,
  Label,
  RequiredIndicator,
  Input: FieldInput,
  HelperText,
  ErrorText,
};
