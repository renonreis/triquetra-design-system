import {
  Select as ArkSelect,
  Portal,
  createListCollection,
  useFieldContext,
  useSelectContext,
  type CollectionItem,
  type ListCollection,
} from '@ark-ui/react';
import {
  createContext,
  forwardRef,
  useContext,
  type ForwardedRef,
  type ReactElement,
  type RefAttributes,
} from 'react';
import { selectVariants, type SelectVariants } from './select.variants.js';

type SelectStyles = ReturnType<typeof selectVariants>;
const SelectStylesContext = createContext<SelectStyles>(selectVariants());
const useStyles = () => useContext(SelectStylesContext);

// Ark's select context exposes `disabled` but not `readOnly`, which ClearTrigger needs.
const SelectReadOnlyContext = createContext(false);

// Typed as non-null, but undefined outside `Field.Root` (Ark's context is not strict).
const useOptionalFieldContext = () =>
  useFieldContext() as ReturnType<typeof useFieldContext> | undefined;

export type { CollectionItem, ListCollection };
/**
 * Builds the `collection` that `Select.Root` needs (re-exported from Ark UI). Items can be
 * strings or `{ label, value, disabled? }` objects; pass `itemToString`, `itemToValue` and
 * `isItemDisabled` for other shapes.
 */
export { createListCollection };

export interface SelectRootProps<T extends CollectionItem = CollectionItem>
  extends ArkSelect.RootProps<T>, SelectVariants {}

/**
 * Single or multiple (`multiple`) select. Ark UI handles keyboard navigation, typeahead,
 * focus, ARIA and the hidden native `<select>` used for forms. Inside `Field.Root`, the field's
 * `invalid`, `disabled`, `required` and `readOnly` states and ids are picked up automatically.
 */
const Root = forwardRef(function SelectRoot(
  {
    size,
    className,
    children,
    lazyMount = true,
    unmountOnExit = true,
    positioning,
    readOnly,
    ...props
  }: SelectRootProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const styles = selectVariants({ size });
  // Same precedence as Ark: the root prop wins over the field's state.
  const field = useOptionalFieldContext();
  const isReadOnly = readOnly ?? field?.readOnly ?? false;
  return (
    <SelectStylesContext.Provider value={styles}>
      <SelectReadOnlyContext.Provider value={isReadOnly}>
        <ArkSelect.Root
          ref={ref}
          // Only when set: an explicit `undefined` would override the field's state in Ark.
          {...(readOnly === undefined ? {} : { readOnly })}
          lazyMount={lazyMount}
          unmountOnExit={unmountOnExit}
          positioning={{ sameWidth: true, fitViewport: true, ...positioning }}
          className={styles.root({ className })}
          {...props}
        >
          {children}
          <ArkSelect.HiddenSelect />
        </ArkSelect.Root>
      </SelectReadOnlyContext.Provider>
    </SelectStylesContext.Provider>
  );
}) as <T extends CollectionItem>(
  props: SelectRootProps<T> & RefAttributes<HTMLDivElement>,
) => ReactElement;

export type SelectLabelProps = ArkSelect.LabelProps;
/** Names the trigger. Inside `Field.Root`, it takes the field's label id. */
const Label = forwardRef<HTMLLabelElement, SelectLabelProps>(function SelectLabel(
  { className, ...props },
  ref,
) {
  return <ArkSelect.Label ref={ref} className={useStyles().label({ className })} {...props} />;
});

export type SelectControlProps = ArkSelect.ControlProps;
/** Wraps the trigger and the optional clear button. */
const Control = forwardRef<HTMLDivElement, SelectControlProps>(function SelectControl(
  { className, ...props },
  ref,
) {
  return <ArkSelect.Control ref={ref} className={useStyles().control({ className })} {...props} />;
});

export type SelectTriggerProps = ArkSelect.TriggerProps;
/** The combobox button. Usually holds `Select.ValueText` and `Select.Indicator`. */
const Trigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(function SelectTrigger(
  { className, ...props },
  ref,
) {
  const field = useOptionalFieldContext();
  return (
    <ArkSelect.Trigger
      ref={ref}
      // Ark wires the field label to the trigger, but not the helper/error text.
      aria-describedby={field?.ariaDescribedby}
      className={useStyles().trigger({ className })}
      {...props}
    />
  );
});

export type SelectValueTextProps = ArkSelect.ValueTextProps;
/** Selected item label(s), comma-separated when `multiple`; shows `placeholder` when empty. */
const ValueText = forwardRef<HTMLSpanElement, SelectValueTextProps>(function SelectValueText(
  { className, ...props },
  ref,
) {
  return (
    <ArkSelect.ValueText ref={ref} className={useStyles().valueText({ className })} {...props} />
  );
});

export type SelectIndicatorProps = ArkSelect.IndicatorProps;
/** Chevron inside the trigger (hidden from assistive tech). Rotates while open. */
const Indicator = forwardRef<HTMLDivElement, SelectIndicatorProps>(function SelectIndicator(
  { className, children, ...props },
  ref,
) {
  return (
    <ArkSelect.Indicator ref={ref} className={useStyles().indicator({ className })} {...props}>
      {children ?? <ChevronIcon />}
    </ArkSelect.Indicator>
  );
});

export type SelectClearTriggerProps = ArkSelect.ClearTriggerProps;
/**
 * Clears the value. Place it inside `Select.Control`, after the trigger. Hidden while nothing
 * is selected, and not rendered while the select is disabled or read-only. Labelled
 * "Clear value" by default (Ark `translations.clearTriggerLabel`).
 */
const ClearTrigger = forwardRef<HTMLButtonElement, SelectClearTriggerProps>(
  function SelectClearTrigger({ className, children, ...props }, ref) {
    const { disabled } = useSelectContext();
    const readOnly = useContext(SelectReadOnlyContext);
    const styles = useStyles();
    // Ark only disables it with `disabled`, and its clear action ignores `readOnly`.
    if (disabled || readOnly) return null;
    return (
      <ArkSelect.ClearTrigger ref={ref} className={styles.clearTrigger({ className })} {...props}>
        {children ?? <CloseIcon />}
      </ArkSelect.ClearTrigger>
    );
  },
);

export type SelectContentProps = ArkSelect.ContentProps;
/** Positioner and listbox, rendered in a portal. Holds `Select.Item`s and `Select.ItemGroup`s. */
const Content = forwardRef<HTMLDivElement, SelectContentProps>(function SelectContent(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return (
    <Portal>
      <ArkSelect.Positioner className={styles.positioner()}>
        <ArkSelect.Content ref={ref} className={styles.content({ className })} {...props} />
      </ArkSelect.Positioner>
    </Portal>
  );
});

export type SelectItemGroupProps = ArkSelect.ItemGroupProps;
const ItemGroup = forwardRef<HTMLDivElement, SelectItemGroupProps>(function SelectItemGroup(
  { className, ...props },
  ref,
) {
  return (
    <ArkSelect.ItemGroup ref={ref} className={useStyles().itemGroup({ className })} {...props} />
  );
});

export type SelectItemGroupLabelProps = ArkSelect.ItemGroupLabelProps;
/** Names its `Select.ItemGroup`. */
const ItemGroupLabel = forwardRef<HTMLDivElement, SelectItemGroupLabelProps>(
  function SelectItemGroupLabel({ className, ...props }, ref) {
    return (
      <ArkSelect.ItemGroupLabel
        ref={ref}
        className={useStyles().itemGroupLabel({ className })}
        {...props}
      />
    );
  },
);

export type SelectItemProps = ArkSelect.ItemProps;
/** An option. `item` must come from the root's `collection`. Holds `ItemText` and `ItemIndicator`. */
const Item = forwardRef<HTMLDivElement, SelectItemProps>(function SelectItem(
  { className, ...props },
  ref,
) {
  return <ArkSelect.Item ref={ref} className={useStyles().item({ className })} {...props} />;
});

export type SelectItemTextProps = ArkSelect.ItemTextProps;
const ItemText = forwardRef<HTMLDivElement, SelectItemTextProps>(function SelectItemText(
  { className, ...props },
  ref,
) {
  return (
    <ArkSelect.ItemText ref={ref} className={useStyles().itemText({ className })} {...props} />
  );
});

export type SelectItemIndicatorProps = ArkSelect.ItemIndicatorProps;
/** Check mark shown on selected items (hidden from assistive tech; `aria-selected` carries it). */
const ItemIndicator = forwardRef<HTMLDivElement, SelectItemIndicatorProps>(
  function SelectItemIndicator({ className, children, ...props }, ref) {
    return (
      <ArkSelect.ItemIndicator
        ref={ref}
        className={useStyles().itemIndicator({ className })}
        {...props}
      >
        {children ?? <CheckIcon />}
      </ArkSelect.ItemIndicator>
    );
  },
);

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M5 12l5 5 9-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Select built on Ark UI. Compose with `Select.Root`, `Select.Label`, `Select.Control`,
 * `Select.Trigger`, `Select.ValueText`, `Select.Indicator`, `Select.Content`, `Select.Item`, …
 */
export const Select = {
  Root,
  Label,
  Control,
  Trigger,
  ValueText,
  Indicator,
  ClearTrigger,
  Content,
  ItemGroup,
  ItemGroupLabel,
  Item,
  ItemText,
  ItemIndicator,
};
