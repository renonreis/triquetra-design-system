import { tv, type VariantProps } from 'tailwind-variants';

export const switchVariants = tv({
  slots: {
    root: [
      'inline-flex items-center gap-2 font-body text-fg-default',
      'cursor-pointer data-disabled:cursor-not-allowed data-readonly:cursor-default',
    ],
    control: [
      'inline-flex shrink-0 items-center rounded-full p-1',
      'bg-border-strong transition-colors duration-150',
      'data-hover:not-data-readonly:bg-fg-muted',
      'data-[state=checked]:bg-action-primary-bg',
      'data-[state=checked]:data-hover:not-data-readonly:bg-action-primary-bg-hover',
      'data-invalid:outline-1 data-invalid:outline-offset-2 data-invalid:outline-border-negative',
      'data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-border-focus',
      'data-invalid:data-focus-visible:outline-border-negative',
      // Two attributes, so they outrank the single-attribute checked fill.
      'data-disabled:bg-bg-disabled data-disabled:data-[state=checked]:bg-bg-disabled',
    ],
    thumb: [
      'rounded-full bg-bg-surface shadow-sm',
      'transition-transform duration-150 motion-reduce:transition-none',
      'data-[state=checked]:bg-action-primary-fg',
      'data-disabled:bg-fg-disabled data-disabled:shadow-none data-disabled:data-[state=checked]:bg-fg-disabled',
    ],
    label: 'select-none data-disabled:text-fg-disabled',
  },
  variants: {
    // Track = thumb + 2 × p-1; the thumb travels the track width minus its height.
    size: {
      sm: {
        control: 'h-5 w-8',
        thumb: 'size-3 data-[state=checked]:translate-x-3 rtl:data-[state=checked]:-translate-x-3',
        label: 'text-sm leading-5',
      },
      md: {
        control: 'h-6 w-10',
        thumb: 'size-4 data-[state=checked]:translate-x-4 rtl:data-[state=checked]:-translate-x-4',
        label: 'text-sm leading-6',
      },
      lg: {
        control: 'h-8 w-12',
        thumb: 'size-6 data-[state=checked]:translate-x-4 rtl:data-[state=checked]:-translate-x-4',
        label: 'text-md leading-8',
      },
    },
  },
  defaultVariants: { size: 'md' },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
