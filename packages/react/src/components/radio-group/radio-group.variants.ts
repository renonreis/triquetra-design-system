import { tv, type VariantProps } from 'tailwind-variants';

export const radioGroupVariants = tv({
  slots: {
    root: [
      'flex w-full flex-col gap-3 font-body',
      'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:gap-x-4',
    ],
    // Field.Label's classes, so a group label looks like a field label.
    label: [
      'inline-flex items-center gap-1 text-sm font-medium text-fg-default',
      'data-disabled:text-fg-disabled',
      'data-[orientation=horizontal]:basis-full',
    ],
    item: [
      'inline-flex items-start gap-2 font-body text-fg-default',
      'cursor-pointer data-disabled:cursor-not-allowed data-readonly:cursor-default',
    ],
    // Checkbox's control list, round and without the indeterminate rules.
    control: [
      'group/radio-control inline-flex shrink-0 items-center justify-center',
      'rounded-full border border-border-strong bg-bg-surface text-action-primary-fg',
      'transition-colors duration-150',
      'data-hover:border-fg-muted',
      'data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-border-focus',
      'data-[state=checked]:border-action-primary-bg data-[state=checked]:bg-action-primary-bg',
      'data-[state=checked]:data-hover:border-action-primary-bg-hover data-[state=checked]:data-hover:bg-action-primary-bg-hover',
      'data-invalid:border-border-negative data-invalid:data-focus-visible:outline-border-negative',
      'data-invalid:data-[state=checked]:border-border-negative',
      'data-readonly:bg-bg-subtle',
      'data-disabled:border-border-default data-disabled:bg-bg-disabled data-disabled:text-fg-disabled',
      // Two attributes, so they outrank the single-attribute checked fill.
      'data-disabled:data-[state=checked]:border-border-default data-disabled:data-[state=checked]:bg-bg-disabled',
    ],
    dot: 'hidden rounded-full bg-current group-data-[state=checked]/radio-control:block',
    itemText: 'select-none data-disabled:text-fg-disabled',
  },
  variants: {
    size: {
      sm: { control: 'size-4', dot: 'size-2', itemText: 'text-sm leading-4' },
      md: { control: 'size-5', dot: 'size-2', itemText: 'text-sm leading-5' },
      lg: { control: 'size-6', dot: 'size-3', itemText: 'text-md leading-6' },
    },
  },
  defaultVariants: { size: 'md' },
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;
