import { tv, type VariantProps } from 'tailwind-variants';

export const selectVariants = tv({
  slots: {
    root: 'flex w-full flex-col gap-2 font-body',
    label: [
      'inline-flex items-center gap-1 text-sm font-medium text-fg-default',
      'data-disabled:text-fg-disabled',
    ],
    control: 'group/control relative flex w-full items-center',
    trigger: [
      'relative flex w-full min-w-0 items-center rounded-control border border-border-strong bg-bg-surface',
      'text-start font-body text-fg-default',
      'transition-colors duration-150',
      'enabled:hover:border-fg-muted',
      'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-border-focus',
      'data-placeholder-shown:text-fg-muted',
      'data-invalid:border-border-negative data-invalid:focus-visible:outline-border-negative',
      'data-readonly:bg-bg-subtle',
      'disabled:cursor-not-allowed disabled:border-border-default disabled:bg-bg-disabled disabled:text-fg-disabled',
    ],
    valueText: 'min-w-0 flex-1 truncate',
    indicator: [
      'pointer-events-none absolute inset-y-0 my-auto flex size-4 items-center justify-center text-fg-muted',
      'transition-transform duration-150 data-[state=open]:rotate-180',
      'data-disabled:text-fg-disabled',
    ],
    clearTrigger: [
      'absolute inset-y-0 my-auto inline-flex size-6 items-center justify-center rounded-control text-fg-muted',
      'transition-colors duration-150 hover:bg-bg-subtle hover:text-fg-default',
      'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-border-focus',
      'disabled:hidden',
    ],
    // Ark caps the positioner at the space left in the viewport; the list scrolls inside it.
    positioner: 'z-50 flex flex-col',
    content: [
      'flex min-h-0 flex-col gap-1 overflow-y-auto rounded-surface border border-border-default bg-bg-surface p-1',
      'font-body text-fg-default shadow-md',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
    ],
    itemGroup: 'flex flex-col gap-1',
    itemGroupLabel: 'px-2 py-1 text-xs font-medium text-fg-muted',
    item: [
      'flex cursor-pointer items-center justify-between gap-2 rounded-control px-2 py-1 text-fg-default select-none',
      'data-highlighted:bg-bg-subtle',
      'data-[state=checked]:font-medium',
      'data-disabled:cursor-not-allowed data-disabled:text-fg-disabled',
    ],
    itemText: 'min-w-0 flex-1 truncate',
    itemIndicator: 'flex size-4 shrink-0 items-center justify-center text-fg-default',
  },
  variants: {
    size: {
      sm: {
        trigger: [
          'h-8 ps-2 pe-8 text-sm',
          'not-data-placeholder-shown:group-has-data-[part=clear-trigger]/control:pe-12',
        ],
        indicator: 'end-2',
        clearTrigger: 'end-6',
        item: 'min-h-8 text-sm',
      },
      md: {
        trigger: [
          'h-10 ps-3 pe-10 text-sm',
          'not-data-placeholder-shown:group-has-data-[part=clear-trigger]/control:pe-16',
        ],
        indicator: 'end-3',
        clearTrigger: 'end-8',
        item: 'min-h-8 text-sm',
      },
      lg: {
        trigger: [
          'h-12 ps-4 pe-10 text-md',
          'not-data-placeholder-shown:group-has-data-[part=clear-trigger]/control:pe-16',
        ],
        indicator: 'end-4',
        clearTrigger: 'end-8',
        item: 'min-h-10 text-md',
      },
    },
  },
  defaultVariants: { size: 'md' },
});

export type SelectVariants = VariantProps<typeof selectVariants>;
