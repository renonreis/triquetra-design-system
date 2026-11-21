import { tv } from 'tailwind-variants';

export const tooltipVariants = tv({
  slots: {
    // Visible focus when Trigger renders its own button; merges with Button's ring under asChild.
    trigger:
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
    positioner: 'z-50',
    content:
      'max-w-xs rounded-control bg-bg-inverse px-2 py-1 text-start font-body text-xs leading-4 font-regular text-fg-inverse',
  },
});
