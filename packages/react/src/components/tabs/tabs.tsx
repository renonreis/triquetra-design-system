import { Tabs as ArkTabs } from '@ark-ui/react';
import { createContext, forwardRef, useContext } from 'react';
import { tabsVariants, type TabsVariants } from './tabs.variants.js';

type TabsStyles = ReturnType<typeof tabsVariants>;
const TabsStylesContext = createContext<TabsStyles>(tabsVariants());
const useStyles = () => useContext(TabsStylesContext);

export interface TabsRootProps
  extends Omit<ArkTabs.RootProps, 'orientation'>, Omit<TabsVariants, 'orientation'> {
  /** Layout and arrow-key axis. Defaults to `horizontal`. */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * Tab set. Ark UI handles roles (`tablist`, `tab`, `tabpanel`), `aria-selected`,
 * `aria-controls`, roving focus and arrow/Home/End keys. Use `value`/`onValueChange` to control
 * it, or `defaultValue` for an uncontrolled set.
 */
const Root = forwardRef<HTMLDivElement, TabsRootProps>(function TabsRoot(
  { variant, size, orientation = 'horizontal', className, ...props },
  ref,
) {
  const styles = tabsVariants({ variant, size, orientation });
  return (
    <TabsStylesContext.Provider value={styles}>
      <ArkTabs.Root
        ref={ref}
        orientation={orientation}
        className={styles.root({ className })}
        {...props}
      />
    </TabsStylesContext.Provider>
  );
});

export type TabsListProps = ArkTabs.ListProps;
/** The `tablist`. Name it with `aria-label` when the page has more than one tab set. */
const List = forwardRef<HTMLDivElement, TabsListProps>(function TabsList(
  { className, ...props },
  ref,
) {
  return <ArkTabs.List ref={ref} className={useStyles().list({ className })} {...props} />;
});

export type TabsTriggerProps = ArkTabs.TriggerProps;
/** A `tab`. Its `value` must match a `Tabs.Content`. */
const Trigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(function TabsTrigger(
  { className, ...props },
  ref,
) {
  return <ArkTabs.Trigger ref={ref} className={useStyles().trigger({ className })} {...props} />;
});

export type TabsContentProps = ArkTabs.ContentProps;
/** A `tabpanel`, labelled by its trigger. Hidden unless its `value` is selected. */
const Content = forwardRef<HTMLDivElement, TabsContentProps>(function TabsContent(
  { className, ...props },
  ref,
) {
  return <ArkTabs.Content ref={ref} className={useStyles().content({ className })} {...props} />;
});

/** Tabs built on Ark UI. Compose with `Tabs.Root`, `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`. */
export const Tabs = { Root, List, Trigger, Content };
