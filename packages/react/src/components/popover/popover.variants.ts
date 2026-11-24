import { tv } from 'tailwind-variants';

export const popoverVariants = tv({
  slots: {
    // Visible focus when Trigger renders its own button; merges with Button's ring under asChild.
    trigger:
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
    // Ark caps the positioner at the space left in the viewport (`fitViewport`). `min-w-0!` beats
    // Ark's inline `min-width: max-content`, so the panel also shrinks on narrow screens.
    positioner: 'z-50 flex min-w-0! flex-col',
    content: [
      'relative flex min-h-0 w-xs max-w-full flex-col gap-4 overflow-y-auto',
      'rounded-surface border border-border-default bg-bg-surface p-4',
      'text-start font-body text-fg-default shadow-md',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
    ],
    header: 'flex flex-col gap-1 pe-8',
    title: 'text-md leading-tight font-semibold text-fg-default',
    description: 'text-sm leading-normal text-fg-muted',
    body: 'text-sm leading-normal text-fg-default',
    footer: 'flex flex-wrap items-center justify-end gap-3',
    closeTrigger: [
      'absolute end-2 top-2 inline-flex size-8 items-center justify-center rounded-control text-fg-muted',
      'transition-colors duration-150 hover:bg-bg-subtle hover:text-fg-default',
      'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-border-focus',
    ],
  },
});
