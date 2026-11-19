import { Checkbox as ArkCheckbox } from '@ark-ui/react';
import { createContext, forwardRef, useContext } from 'react';
import { checkboxVariants, type CheckboxVariants } from './checkbox.variants.js';

type Styles = ReturnType<typeof checkboxVariants>;
const StylesContext = createContext<Styles>(checkboxVariants());
const useStyles = () => useContext(StylesContext);

export interface CheckboxRootProps extends ArkCheckbox.RootProps, CheckboxVariants {}
/**
 * The clickable `<label>` that holds the state (`checked`, `defaultChecked`, `onCheckedChange`,
 * `disabled`, `invalid`, `required`, `readOnly`, `name`, `value`). It renders the native,
 * visually hidden `<input type="checkbox">` that forms and assistive tech use. Inside
 * `Field.Root`, it takes the field's states and ids.
 */
const Root = forwardRef<HTMLLabelElement, CheckboxRootProps>(function CheckboxRoot(
  { size, className, children, ...props },
  ref,
) {
  const styles = checkboxVariants({ size });
  return (
    <StylesContext.Provider value={styles}>
      <ArkCheckbox.Root ref={ref} className={styles.root({ className })} {...props}>
        {children}
        <ArkCheckbox.HiddenInput />
      </ArkCheckbox.Root>
    </StylesContext.Provider>
  );
});

export type CheckboxControlProps = ArkCheckbox.ControlProps;
/** The visual box. Without children, it shows a check mark, or a dash when indeterminate. */
const Control = forwardRef<HTMLDivElement, CheckboxControlProps>(function CheckboxControl(
  { className, children, ...props },
  ref,
) {
  const styles = useStyles();
  return (
    <ArkCheckbox.Control ref={ref} className={styles.control({ className })} {...props}>
      {children ?? (
        <>
          <Indicator>
            <CheckIcon />
          </Indicator>
          <Indicator indeterminate>
            <DashIcon />
          </Indicator>
        </>
      )}
    </ArkCheckbox.Control>
  );
});

export type CheckboxIndicatorProps = ArkCheckbox.IndicatorProps;
/** Shown only while checked (or, with `indeterminate`, only while indeterminate). */
const Indicator = forwardRef<HTMLDivElement, CheckboxIndicatorProps>(function CheckboxIndicator(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return <ArkCheckbox.Indicator ref={ref} className={styles.indicator({ className })} {...props} />;
});

export type CheckboxLabelProps = ArkCheckbox.LabelProps;
const Label = forwardRef<HTMLSpanElement, CheckboxLabelProps>(function CheckboxLabel(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return <ArkCheckbox.Label ref={ref} className={styles.label({ className })} {...props} />;
});

export type CheckboxGroupProps = ArkCheckbox.GroupProps;
/**
 * Holds the checked values of several checkboxes (`value`, `defaultValue`, `onValueChange`,
 * `name`, `disabled`, `invalid`, `readOnly`). Give each `Checkbox.Root` a `value`. Wrap it in a
 * `<fieldset>` with a `<legend>`, or give it `role="group"` and an accessible name.
 */
const Group = forwardRef<HTMLDivElement, CheckboxGroupProps>(function CheckboxGroup(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return <ArkCheckbox.Group ref={ref} className={styles.group({ className })} {...props} />;
});

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" fill="none" aria-hidden="true">
      <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Checkbox built on Ark UI: `Root` (label + state), `Control`, `Indicator`, `Label`, `Group`. */
export const Checkbox = { Root, Control, Indicator, Label, Group };
