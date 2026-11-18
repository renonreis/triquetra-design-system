import { tv, type VariantProps } from 'tailwind-variants';

export const cardVariants = tv({
  slots: {
    root: 'flex flex-col rounded-surface bg-bg-surface font-body text-fg-default',
    header: 'flex flex-col gap-1',
    title: 'text-lg leading-tight font-semibold text-fg-default',
    description: 'text-sm leading-normal text-fg-muted',
    body: 'text-sm leading-normal',
    footer: 'flex items-center gap-3',
  },
  variants: {
    variant: {
      outline: { root: 'border border-border-default' },
      elevated: { root: 'shadow-md' },
    },
    size: {
      sm: { root: 'gap-3 p-4', title: 'text-md' },
      md: { root: 'gap-4 p-6' },
      lg: { root: 'gap-6 p-8', title: 'text-xl' },
    },
  },
  defaultVariants: { variant: 'outline', size: 'md' },
});

export type CardVariants = VariantProps<typeof cardVariants>;
