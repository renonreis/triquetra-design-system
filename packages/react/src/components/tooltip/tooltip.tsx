import { Portal, Tooltip as ArkTooltip } from '@ark-ui/react';
import { createContext, forwardRef, useContext } from 'react';
import { tooltipVariants } from './tooltip.variants.js';

type TooltipStyles = ReturnType<typeof tooltipVariants>;
const TooltipStylesContext = createContext<TooltipStyles>(tooltipVariants());
const useStyles = () => useContext(TooltipStylesContext);

export type TooltipRootProps = ArkTooltip.RootProps;

/**
 * A short hint on pointer hover and keyboard focus. Ark UI handles the delays (400 ms open,
 * 150 ms close), Escape, `role="tooltip"` and `aria-describedby` on the trigger.
 *
 * - The tooltip describes the control; it never names it. An icon only button still needs
 *   its own `aria-label`.
 * - Keep it to short plain text: no links, buttons or other interactive content.
 * - Do not put a tooltip on a disabled control: it cannot receive focus or pointer events.
 * - Touch pointers never open it, so it must not hold information users need.
 * - The pointer has `closeDelay` (150 ms) to cross the 8 px gap onto the tooltip. Raise it
 *   (for example to 300 ms) where users need more time.
 *
 * Defaults: placement `top`, hoverable content (`interactive`, WCAG 1.4.13), and nothing in
 * the DOM while closed (`lazyMount`, `unmountOnExit`). Every default can be overridden.
 */
function Root({
  lazyMount = true,
  unmountOnExit = true,
  interactive = true,
  positioning,
  ...props
}: TooltipRootProps) {
  return (
    <TooltipStylesContext.Provider value={tooltipVariants()}>
      <ArkTooltip.Root
        lazyMount={lazyMount}
        unmountOnExit={unmountOnExit}
        interactive={interactive}
        positioning={{ placement: 'top', ...positioning }}
        {...props}
      />
    </TooltipStylesContext.Provider>
  );
}

export type TooltipTriggerProps = ArkTooltip.TriggerProps;
/** The described control. Usually rendered with `asChild` around a `Button`. */
const Trigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>(function TooltipTrigger(
  { className, ...props },
  ref,
) {
  return <ArkTooltip.Trigger ref={ref} className={useStyles().trigger({ className })} {...props} />;
});

export type TooltipContentProps = ArkTooltip.ContentProps;
/** Positioner and hint, rendered in a portal. */
const Content = forwardRef<HTMLDivElement, TooltipContentProps>(function TooltipContent(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return (
    <Portal>
      <ArkTooltip.Positioner className={styles.positioner()}>
        <ArkTooltip.Content ref={ref} className={styles.content({ className })} {...props} />
      </ArkTooltip.Positioner>
    </Portal>
  );
});

/** Tooltip built on Ark UI. Compose with `Tooltip.Root`, `Tooltip.Trigger` and `Tooltip.Content`. */
export const Tooltip = { Root, Trigger, Content };
