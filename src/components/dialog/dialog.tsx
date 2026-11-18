import { Dialog as ArkDialog, Portal } from '@ark-ui/react';
import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { createContext, forwardRef, useContext } from 'react';
import { dialogVariants, type DialogVariants } from './dialog.variants';

type DialogStyles = ReturnType<typeof dialogVariants>;
const DialogStylesContext = createContext<DialogStyles>(dialogVariants());
const useStyles = () => useContext(DialogStylesContext);

export interface DialogRootProps extends ArkDialog.RootProps, DialogVariants {}

/**
 * Modal dialog. Ark UI handles focus trapping, restoring focus, Escape, outside click,
 * scroll locking and `aria-modal`. Content is mounted lazily and unmounted on close.
 */
function Root({ size, lazyMount = true, unmountOnExit = true, ...props }: DialogRootProps) {
  return (
    <DialogStylesContext.Provider value={dialogVariants({ size })}>
      <ArkDialog.Root lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
    </DialogStylesContext.Provider>
  );
}

export type DialogTriggerProps = ArkDialog.TriggerProps;
/** Usually rendered with `asChild` around a `Button`. */
const Trigger = ArkDialog.Trigger;

export interface DialogContentProps extends ArkDialog.ContentProps {
  /** Renders a backdrop behind the dialog. Defaults to `true`. */
  backdrop?: boolean;
}

/** Backdrop, positioner and content, rendered in a portal. */
const Content = forwardRef<HTMLDivElement, DialogContentProps>(function DialogContent(
  { className, backdrop = true, ...props },
  ref,
) {
  const styles = useStyles();
  return (
    <Portal>
      {backdrop ? <ArkDialog.Backdrop className={styles.backdrop()} /> : null}
      <ArkDialog.Positioner className={styles.positioner()}>
        <ArkDialog.Content ref={ref} className={styles.content({ className })} {...props} />
      </ArkDialog.Positioner>
    </Portal>
  );
});

export type DialogHeaderProps = HTMLArkProps<'div'>;
const Header = forwardRef<HTMLDivElement, DialogHeaderProps>(function DialogHeader(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useStyles().header({ className })} {...props} />;
});

export type DialogTitleProps = ArkDialog.TitleProps;
/** Required: it names the dialog (`aria-labelledby`). */
const Title = forwardRef<HTMLHeadingElement, DialogTitleProps>(function DialogTitle(
  { className, ...props },
  ref,
) {
  return <ArkDialog.Title ref={ref} className={useStyles().title({ className })} {...props} />;
});

export type DialogDescriptionProps = ArkDialog.DescriptionProps;
const Description = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  function DialogDescription({ className, ...props }, ref) {
    return (
      <ArkDialog.Description
        ref={ref}
        className={useStyles().description({ className })}
        {...props}
      />
    );
  },
);

export type DialogBodyProps = HTMLArkProps<'div'>;
const Body = forwardRef<HTMLDivElement, DialogBodyProps>(function DialogBody(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useStyles().body({ className })} {...props} />;
});

export type DialogFooterProps = HTMLArkProps<'div'>;
const Footer = forwardRef<HTMLDivElement, DialogFooterProps>(function DialogFooter(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useStyles().footer({ className })} {...props} />;
});

export type DialogCloseTriggerProps = ArkDialog.CloseTriggerProps;
/**
 * Without children, renders the corner "×" icon button labelled "Close".
 * With `asChild`, wraps your own element (for example a "Cancel" Button).
 */
const CloseTrigger = forwardRef<HTMLButtonElement, DialogCloseTriggerProps>(
  function DialogCloseTrigger({ className, children, asChild, ...props }, ref) {
    const styles = useStyles();
    if (asChild) {
      return (
        <ArkDialog.CloseTrigger ref={ref} asChild className={className} {...props}>
          {children}
        </ArkDialog.CloseTrigger>
      );
    }
    return (
      <ArkDialog.CloseTrigger
        ref={ref}
        aria-label="Close"
        className={styles.closeTrigger({ className })}
        {...props}
      >
        {children ?? <CloseIcon />}
      </ArkDialog.CloseTrigger>
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

/** Modal dialog built on Ark UI. Compose with `Dialog.Root`, `Dialog.Trigger`, `Dialog.Content`, … */
export const Dialog = {
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
