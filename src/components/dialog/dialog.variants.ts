import { tv, type VariantProps } from 'tailwind-variants';

export const dialogVariants = tv({
  slots: {
    backdrop: 'fixed inset-0 z-50 bg-bg-overlay',
    positioner: 'fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4',
    content: [
      'rounded-overlay bg-bg-surface font-body text-fg-default shadow-lg',
      'relative flex max-h-full w-full flex-col gap-4 p-6',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
    ],
    header: 'flex flex-col gap-1 pr-8',
    title: 'text-lg leading-tight font-semibold text-fg-default',
    description: 'text-sm leading-normal text-fg-muted',
    body: 'text-sm leading-normal',
    footer: 'flex flex-wrap items-center justify-end gap-3',
    closeTrigger: [
      'absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-control text-fg-muted',
      'transition-colors duration-150 hover:bg-bg-subtle hover:text-fg-default',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
    ],
  },
  variants: {
    size: {
      sm: { content: 'max-w-xs' },
      md: { content: 'max-w-md' },
      lg: { content: 'max-w-xl' },
    },
  },
  defaultVariants: { size: 'md' },
});

export type DialogVariants = VariantProps<typeof dialogVariants>;
