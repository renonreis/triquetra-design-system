import { RadioGroup as ArkRadioGroup } from '@ark-ui/react';
import { createContext, forwardRef, useContext } from 'react';
import { radioGroupVariants, type RadioGroupVariants } from './radio-group.variants.js';

type Styles = ReturnType<typeof radioGroupVariants>;
const StylesContext = createContext<Styles>(radioGroupVariants());
const useStyles = () => useContext(StylesContext);

export interface RadioGroupRootProps extends ArkRadioGroup.RootProps, RadioGroupVariants {}
/**
 * The group (`role="radiogroup"`) that holds the single value (`value`, `defaultValue`,
 * `onValueChange`, `name`, `form`, `disabled`, `invalid`, `readOnly`, `required`,
 * `orientation`). `size` applies to every item. Always render a `RadioGroup.Label`: Ark names the
 * group with it through `aria-labelledby`. Read only disables the radios (Ark), so a read only
 * group is skipped by Tab and its value is not submitted.
 */
const Root = forwardRef<HTMLDivElement, RadioGroupRootProps>(function RadioGroupRoot(
  { size, className, ...props },
  ref,
) {
  const styles = radioGroupVariants({ size });
  return (
    <StylesContext.Provider value={styles}>
      <ArkRadioGroup.Root ref={ref} className={styles.root({ className })} {...props} />
    </StylesContext.Provider>
  );
});

export type RadioGroupLabelProps = ArkRadioGroup.LabelProps;
/** Names the group. Required: the root points `aria-labelledby` at it. */
const Label = forwardRef<HTMLSpanElement, RadioGroupLabelProps>(function RadioGroupLabel(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return <ArkRadioGroup.Label ref={ref} className={styles.label({ className })} {...props} />;
});

export type RadioGroupItemProps = ArkRadioGroup.ItemProps;
/**
 * One option (`value`, unique in the group; `disabled`, `invalid`). The clickable `<label>`; it
 * renders the native, visually hidden `<input type="radio">` that forms and assistive tech use.
 */
const Item = forwardRef<HTMLLabelElement, RadioGroupItemProps>(function RadioGroupItem(
  { className, children, ...props },
  ref,
) {
  const styles = useStyles();
  return (
    <ArkRadioGroup.Item ref={ref} className={styles.item({ className })} {...props}>
      {children}
      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
});

export type RadioGroupItemControlProps = ArkRadioGroup.ItemControlProps;
/** The visual circle. Without children, it shows a dot while checked. */
const ItemControl = forwardRef<HTMLDivElement, RadioGroupItemControlProps>(
  function RadioGroupItemControl({ className, children, ...props }, ref) {
    const styles = useStyles();
    return (
      <ArkRadioGroup.ItemControl ref={ref} className={styles.control({ className })} {...props}>
        {children ?? <span className={styles.dot()} />}
      </ArkRadioGroup.ItemControl>
    );
  },
);

export type RadioGroupItemTextProps = ArkRadioGroup.ItemTextProps;
/** The option's visible text; it names the radio. */
const ItemText = forwardRef<HTMLSpanElement, RadioGroupItemTextProps>(function RadioGroupItemText(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return <ArkRadioGroup.ItemText ref={ref} className={styles.itemText({ className })} {...props} />;
});

/** Single choice group built on Ark UI: `Root`, `Label`, `Item`, `ItemControl`, `ItemText`. */
export const RadioGroup = { Root, Label, Item, ItemControl, ItemText };
