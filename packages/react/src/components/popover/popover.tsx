import { Popover as ArkPopover, Portal, usePopoverContext } from '@ark-ui/react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { createContext, forwardRef, useContext } from 'react';
import { popoverVariants } from './popover.variants.js';

type PopoverStyles = ReturnType<typeof popoverVariants>;
const PopoverStylesContext = createContext<PopoverStyles>(popoverVariants());
const useStyles = () => useContext(PopoverStylesContext);

export type PopoverRootProps = ArkPopover.RootProps;

/**
 * A panel opened by a click on its trigger, for interactive content: text, links, a small form.
 * Ark UI handles focus (it moves into the panel and returns to the trigger), Escape, the outside
 * click, `role="dialog"` and the ids that link trigger, panel, title and description.
 *
 * - Name every popover: render `Popover.Title`, or pass `aria-label` to `Popover.Content`.
 * - It is not modal: the page stays usable and Tab moves on after the panel. For a task that must
 *   block the page, use `Dialog`.
 * - Focus goes to the first focusable element; pass `initialFocusEl` to choose another one. Keep
 *   `Popover.CloseTrigger` last so it is not the first one.
 * - For a short hint on hover and focus, use `Tooltip`.
 *
 * Defaults: placement `bottom`, never larger than the space left in the viewport (the
 * panel scrolls inside, so give long text a focusable element such as `Popover.CloseTrigger`), and nothing in the DOM
 * while closed (`lazyMount`, `unmountOnExit`). Every default can be overridden.
 */
function Root({ lazyMount = true, unmountOnExit = true, positioning, ...props }: PopoverRootProps) {
  return (
    <PopoverStylesContext.Provider value={popoverVariants()}>
      <ArkPopover.Root
        lazyMount={lazyMount}
        unmountOnExit={unmountOnExit}
        positioning={{ placement: 'bottom', fitViewport: true, ...positioning }}
        {...props}
      />
    </PopoverStylesContext.Provider>
  );
}

export type PopoverTriggerProps = ArkPopover.TriggerProps;
/** Opens and closes the panel. Usually rendered with `asChild` around a `Button`. */
const Trigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(function PopoverTrigger(
  { className, ...props },
  ref,
) {
  return <ArkPopover.Trigger ref={ref} className={useStyles().trigger({ className })} {...props} />;
});

export type PopoverContentProps = ArkPopover.ContentProps;
/** Positioner and panel, rendered in a portal. */
const Content = forwardRef<HTMLDivElement, PopoverContentProps>(function PopoverContent(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return (
    <Portal>
      <ArkPopover.Positioner className={styles.positioner()}>
        <ArkPopover.Content ref={ref} className={styles.content({ className })} {...props} />
      </ArkPopover.Positioner>
    </Portal>
  );
});

export type PopoverHeaderProps = HTMLArkProps<'div'>;
/** Groups the title and the description. Leaves room for the corner close button. */
const Header = forwardRef<HTMLDivElement, PopoverHeaderProps>(function PopoverHeader(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useStyles().header({ className })} {...props} />;
});

export type PopoverTitleProps = ArkPopover.TitleProps;
/** Names the panel (`aria-labelledby`). Renders an `h2`; use `asChild` for another level. */
const Title = forwardRef<HTMLHeadingElement, PopoverTitleProps>(function PopoverTitle(
  { className, ...props },
  ref,
) {
  return <ArkPopover.Title ref={ref} className={useStyles().title({ className })} {...props} />;
});

export type PopoverDescriptionProps = ArkPopover.DescriptionProps;
/** Describes the panel (`aria-describedby`). */
const Description = forwardRef<HTMLDivElement, PopoverDescriptionProps>(function PopoverDescription(
  { className, ...props },
  ref,
) {
  return (
    <ArkPopover.Description
      ref={ref}
      className={useStyles().description({ className })}
      {...props}
    />
  );
});

export type PopoverBodyProps = HTMLArkProps<'div'>;
const Body = forwardRef<HTMLDivElement, PopoverBodyProps>(function PopoverBody(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useStyles().body({ className })} {...props} />;
});

export type PopoverFooterProps = HTMLArkProps<'div'>;
const Footer = forwardRef<HTMLDivElement, PopoverFooterProps>(function PopoverFooter(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useStyles().footer({ className })} {...props} />;
});

export type PopoverCloseTriggerProps = ArkPopover.CloseTriggerProps;
/**
 * Without children, renders the corner "×" icon button labelled "Close".
 * With `asChild`, wraps your own element (for example a "Cancel" Button), which keeps its name.
 */
const CloseTrigger = forwardRef<HTMLButtonElement, PopoverCloseTriggerProps>(
  function PopoverCloseTrigger({ className, children, asChild, ...props }, ref) {
    const styles = useStyles();
    const popover = usePopoverContext();
    if (asChild) {
      // Ark's own part sets `aria-label="close"`, which would replace the child's visible name,
      // and one fixed id, which would repeat next to the corner button. Drop both.
      const closeProps = popover.getCloseTriggerProps();
      return (
        <ark.button
          {...closeProps}
          id={undefined}
          aria-label={undefined}
          {...props}
          ref={ref}
          asChild
          className={className}
          onClick={(event) => {
            props.onClick?.(event);
            closeProps.onClick?.(event);
          }}
        >
          {children}
        </ark.button>
      );
    }
    return (
      <ArkPopover.CloseTrigger
        ref={ref}
        aria-label="Close"
        className={styles.closeTrigger({ className })}
        {...props}
      >
        {children ?? <CloseIcon />}
      </ArkPopover.CloseTrigger>
    );
  },
);

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Popover built on Ark UI. Compose with `Popover.Root`, `Popover.Trigger`, `Popover.Content`, … */
export const Popover = {
  Root,
  Trigger,
  Content,
  Header,
  Title,
  Description,
  Body,
  Footer,
  CloseTrigger,
};
