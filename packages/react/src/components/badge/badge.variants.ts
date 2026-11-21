import { tv, type VariantProps } from 'tailwind-variants';

export const badgeVariants = tv({
  slots: {
    root: [
      'inline-flex shrink-0 items-center justify-center gap-1',
      'rounded-full border px-2 font-body font-medium whitespace-nowrap',
    ],
  },
  variants: {
    tone: {
      neutral: { root: 'border-border-default bg-bg-subtle text-fg-muted' },
      positive: {
        root: 'border-status-positive-border bg-status-positive-bg text-status-positive-fg',
      },
      warning: {
        root: 'border-status-warning-border bg-status-warning-bg text-status-warning-fg',
      },
      negative: {
        root: 'border-status-negative-border bg-status-negative-bg text-status-negative-fg',
      },
      informative: {
        root: 'border-status-informative-border bg-status-informative-bg text-status-informative-fg',
      },
    },
    size: {
      sm: { root: 'h-5 text-xs leading-4' },
      md: { root: 'h-6 text-sm leading-5' },
    },
  },
  defaultVariants: { tone: 'neutral', size: 'md' },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;
