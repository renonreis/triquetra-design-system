import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  slots: {
    root: [
      'relative inline-flex shrink-0 items-center justify-center gap-2',
      'rounded-control font-body font-medium whitespace-nowrap select-none',
      'transition-colors duration-150',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
      'disabled:cursor-not-allowed disabled:bg-bg-disabled disabled:text-fg-disabled',
      'aria-busy:cursor-progress',
    ],
    label: 'inline-flex items-center gap-2',
    spinner: 'absolute inset-0 m-auto size-4 animate-spin',
  },
  variants: {
    variant: {
      primary: {
        root: 'bg-action-primary-bg text-action-primary-fg enabled:hover:bg-action-primary-bg-hover enabled:active:bg-action-primary-bg-active',
      },
      secondary: {
        root: 'bg-action-secondary-bg text-action-secondary-fg enabled:hover:bg-action-secondary-bg-hover enabled:active:bg-action-secondary-bg-active',
      },
      neutral: {
        root: 'bg-action-neutral-bg text-action-neutral-fg enabled:hover:bg-action-neutral-bg-hover enabled:active:bg-action-neutral-bg-active',
      },
      negative: {
        root: 'bg-action-negative-bg text-action-negative-fg enabled:hover:bg-action-negative-bg-hover enabled:active:bg-action-negative-bg-active',
      },
      ghost: {
        root: 'bg-transparent text-fg-default enabled:hover:bg-bg-subtle enabled:active:bg-bg-muted disabled:bg-transparent',
      },
    },
    size: {
      sm: { root: 'h-8 px-3 text-sm' },
      md: { root: 'h-10 px-4 text-sm' },
      lg: { root: 'h-12 px-5 text-md' },
    },
    fullWidth: {
      true: { root: 'w-full' },
    },
    loading: {
      // opacity (not visibility) keeps the label in the accessible name while loading.
      true: { label: 'opacity-0' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
