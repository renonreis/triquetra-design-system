import { tv } from 'tailwind-variants';

export const fieldVariants = tv({
  slots: {
    root: 'flex w-full flex-col gap-2 font-body',
    label: [
      'inline-flex items-center gap-1 text-sm font-medium text-fg-default',
      'data-disabled:text-fg-disabled',
    ],
    requiredIndicator: 'text-status-negative-fg',
    helperText: 'text-xs leading-normal text-fg-muted',
    errorText: 'text-xs leading-normal font-medium text-status-negative-fg',
  },
});
