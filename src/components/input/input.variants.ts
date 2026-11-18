import { tv, type VariantProps } from 'tailwind-variants';

export const inputVariants = tv({
  base: [
    'w-full min-w-0 rounded-control border border-border-strong bg-bg-surface',
    'font-body text-fg-default placeholder:text-fg-muted',
    'transition-colors duration-150',
    'hover:border-fg-muted',
    'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-border-focus',
    'aria-invalid:border-border-negative aria-invalid:focus-visible:outline-border-negative',
    'read-only:bg-bg-subtle',
    'disabled:cursor-not-allowed disabled:border-border-default disabled:bg-bg-disabled disabled:text-fg-disabled',
  ],
  variants: {
    size: {
      sm: 'h-8 px-2 text-sm',
      md: 'h-10 px-3 text-sm',
      lg: 'h-12 px-4 text-md',
    },
  },
  defaultVariants: { size: 'md' },
});

export type InputVariants = VariantProps<typeof inputVariants>;
