import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { forwardRef } from 'react';
import { badgeVariants, type BadgeVariants } from './badge.variants.js';

export interface BadgeProps extends Omit<HTMLArkProps<'span'>, 'asChild'>, BadgeVariants {}

/**
 * A small static label for status and counts. It is plain text: no role, not focusable.
 * The text must carry the meaning on its own; the `tone` only reinforces it. Give a bare
 * count hidden context, for example `<Badge>3<span className="sr-only"> unread messages</span></Badge>`.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { tone, size, className, ...props },
  ref,
) {
  const styles = badgeVariants({ tone, size });
  return <ark.span ref={ref} className={styles.root({ className })} {...props} />;
});
