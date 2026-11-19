import { tv, type VariantProps } from 'tailwind-variants';

export const checkboxVariants = tv({
  slots: {
    root: [
      'group/checkbox inline-flex items-start gap-2 font-body text-fg-default',
      'cursor-pointer data-disabled:cursor-not-allowed data-readonly:cursor-default',
    ],
    control: [
      'inline-flex shrink-0 items-center justify-center',
      'rounded-control border border-border-strong bg-bg-surface text-action-primary-fg',
      'transition-colors duration-150',
      'data-hover:border-fg-muted',
      'data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-border-focus',
      'data-[state=checked]:border-action-primary-bg data-[state=checked]:bg-action-primary-bg',
      'data-[state=indeterminate]:border-action-primary-bg data-[state=indeterminate]:bg-action-primary-bg',
      'data-[state=checked]:data-hover:border-action-primary-bg-hover data-[state=checked]:data-hover:bg-action-primary-bg-hover',
      'data-[state=indeterminate]:data-hover:border-action-primary-bg-hover data-[state=indeterminate]:data-hover:bg-action-primary-bg-hover',
      'data-invalid:border-border-negative data-invalid:data-focus-visible:outline-border-negative',
      'data-readonly:bg-bg-subtle',
      'data-disabled:border-border-default data-disabled:bg-bg-disabled data-disabled:text-fg-disabled',
      // Two attributes, so they outrank the single-attribute checked and indeterminate fills.
      'data-disabled:data-[state=checked]:border-border-default data-disabled:data-[state=checked]:bg-bg-disabled',
      'data-disabled:data-[state=indeterminate]:border-border-default data-disabled:data-[state=indeterminate]:bg-bg-disabled',
    ],
    indicator: 'size-full',
    label: 'select-none data-disabled:text-fg-disabled',
    group: 'flex flex-col gap-3',
  },
  variants: {
    size: {
      sm: { control: 'size-4', label: 'text-sm leading-4' },
      md: { control: 'size-5', label: 'text-sm leading-5' },
      lg: { control: 'size-6', label: 'text-md leading-6' },
    },
  },
  defaultVariants: { size: 'md' },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
