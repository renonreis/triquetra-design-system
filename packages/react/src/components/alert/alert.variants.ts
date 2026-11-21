import { tv, type VariantProps } from 'tailwind-variants';

export const alertVariants = tv({
  slots: {
    root: 'flex w-full items-start gap-3 rounded-surface border p-4 font-body text-sm leading-5',
    indicator: 'flex size-5 shrink-0 items-center justify-center',
    content: 'flex min-w-0 flex-1 flex-col gap-1',
    title: 'font-semibold',
    description: 'font-regular',
  },
  variants: {
    tone: {
      neutral: { root: 'border-border-default bg-bg-subtle text-fg-default' },
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
  },
  defaultVariants: { tone: 'informative' },
});

export type AlertVariants = VariantProps<typeof alertVariants>;
