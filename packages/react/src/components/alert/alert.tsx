import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { createContext, forwardRef, useContext, type ReactNode } from 'react';
import { alertVariants, type AlertVariants } from './alert.variants.js';

type AlertTone = NonNullable<AlertVariants['tone']>;
type AlertStyles = ReturnType<typeof alertVariants>;

interface AlertContextValue {
  styles: AlertStyles;
  tone: AlertTone;
}

const AlertContext = createContext<AlertContextValue | null>(null);

function useAlert(part: string): AlertContextValue {
  const value = useContext(AlertContext);
  if (!value) throw new Error(`<Alert.${part}> must be used inside <Alert.Root>.`);
  return value;
}

export interface AlertRootProps extends HTMLArkProps<'div'>, AlertVariants {}

/**
 * An inline message about a status. The title must say what happened in words; the tone
 * and the icon only reinforce it. A message that is on the page at first render needs no
 * role. Pass `role="status"` when the alert is inserted after the page loads, or
 * `role="alert"` for an urgent error, so screen readers announce it.
 */
const Root = forwardRef<HTMLDivElement, AlertRootProps>(function AlertRoot(
  { tone = 'informative', className, ...props },
  ref,
) {
  const styles = alertVariants({ tone });
  return (
    <AlertContext.Provider value={{ styles, tone }}>
      <ark.div
        ref={ref}
        className={styles.root({ className })}
        {...props}
        data-scope="alert"
        data-part="root"
      />
    </AlertContext.Provider>
  );
});

export type AlertIndicatorProps = HTMLArkProps<'span'>;
/** Decorative (`aria-hidden`). Renders the tone's icon, or your own icon as children. */
const Indicator = forwardRef<HTMLSpanElement, AlertIndicatorProps>(function AlertIndicator(
  { className, children, ...props },
  ref,
) {
  const { styles, tone } = useAlert('Indicator');
  return (
    <ark.span
      ref={ref}
      className={styles.indicator({ className })}
      {...props}
      aria-hidden="true"
      data-scope="alert"
      data-part="indicator"
    >
      {children ?? ICONS[tone]}
    </ark.span>
  );
});

export type AlertContentProps = HTMLArkProps<'div'>;
/** Holds the title and the description, next to the indicator. */
const Content = forwardRef<HTMLDivElement, AlertContentProps>(function AlertContent(
  { className, ...props },
  ref,
) {
  const { styles } = useAlert('Content');
  return (
    <ark.div
      ref={ref}
      className={styles.content({ className })}
      {...props}
      data-scope="alert"
      data-part="content"
    />
  );
});

/** Renders a `p`. Use `asChild` when the page needs a heading at a given level. */
export type AlertTitleProps = HTMLArkProps<'p'>;
const Title = forwardRef<HTMLParagraphElement, AlertTitleProps>(function AlertTitle(
  { className, ...props },
  ref,
) {
  const { styles } = useAlert('Title');
  return (
    <ark.p
      ref={ref}
      className={styles.title({ className })}
      {...props}
      data-scope="alert"
      data-part="title"
    />
  );
});

/** Renders a `div`, so it can hold paragraphs or a list. */
export type AlertDescriptionProps = HTMLArkProps<'div'>;
const Description = forwardRef<HTMLDivElement, AlertDescriptionProps>(function AlertDescription(
  { className, ...props },
  ref,
) {
  const { styles } = useAlert('Description');
  return (
    <ark.div
      ref={ref}
      className={styles.description({ className })}
      {...props}
      data-scope="alert"
      data-part="description"
    />
  );
});

function Icon({ name, children }: { name: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="100%"
      height="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-icon={name}
    >
      {children}
    </svg>
  );
}

function Dot({ cy }: { cy: number }) {
  return <circle cx="10" cy={cy} r="1" fill="currentColor" stroke="none" />;
}

const infoIcon = (
  <Icon name="info">
    <circle cx="10" cy="10" r="7.5" />
    <path d="M10 9v4.5" />
    <Dot cy={6.5} />
  </Icon>
);

const ICONS: Record<AlertTone, ReactNode> = {
  informative: infoIcon,
  neutral: infoIcon,
  positive: (
    <Icon name="check">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M6.75 10.25l2.25 2.25 4.25-4.5" />
    </Icon>
  ),
  warning: (
    <Icon name="warning">
      <path d="M8.7 3.25 2.4 14.5a1.5 1.5 0 0 0 1.3 2.25h12.6a1.5 1.5 0 0 0 1.3-2.25L11.3 3.25a1.5 1.5 0 0 0-2.6 0Z" />
      <path d="M10 7.5v3.75" />
      <Dot cy={14} />
    </Icon>
  ),
  negative: (
    <Icon name="error">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" />
    </Icon>
  ),
};

/** Inline status message. Compose with `Alert.Root`, `Alert.Indicator`, `Alert.Content`, … */
export const Alert = { Root, Indicator, Content, Title, Description };
