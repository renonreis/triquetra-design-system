import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { forwardRef, type MouseEvent } from 'react';
import { buttonVariants, type ButtonVariants } from './button.variants';

export interface ButtonProps extends HTMLArkProps<'button'>, ButtonVariants {
  /**
   * Shows a spinner and blocks activation. The button stays focusable and keeps its
   * accessible name; `aria-busy` and `aria-disabled` are set.
   */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, fullWidth, loading = false, className, children, onClick, type, ...props },
  ref,
) {
  const styles = buttonVariants({ variant, size, fullWidth, loading });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <ark.button
      ref={ref}
      type={props.asChild ? type : (type ?? 'button')}
      aria-busy={loading || undefined}
      aria-disabled={loading || undefined}
      className={styles.root({ className })}
      onClick={handleClick}
      {...props}
    >
      {props.asChild ? (
        children
      ) : (
        <>
          <span className={styles.label()}>{children}</span>
          {loading ? <Spinner className={styles.spinner()} /> : null}
        </>
      )}
    </ark.button>
  );
});

function Spinner({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
