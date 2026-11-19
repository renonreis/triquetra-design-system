import { tv, type VariantProps } from 'tailwind-variants';

export const tabsVariants = tv({
  slots: {
    root: 'flex font-body text-fg-default',
    list: 'relative flex shrink-0',
    trigger: [
      'inline-flex shrink-0 items-center justify-center gap-2',
      'font-medium whitespace-nowrap text-fg-muted select-none',
      'transition-colors duration-150 hover:text-fg-default',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
      'data-[selected]:text-fg-default',
      'data-[disabled]:cursor-not-allowed data-[disabled]:text-fg-disabled',
    ],
    content: [
      'flex-1 rounded-control text-sm leading-normal',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus',
    ],
  },
  variants: {
    variant: {
      // Selected tab marked by an underline (or a side line when vertical).
      line: {
        list: 'border-border-default',
        trigger: 'border-transparent data-[selected]:border-action-primary-bg',
      },
      // Selected tab raised as a surface inside a subtle track.
      enclosed: {
        list: 'gap-1 rounded-control bg-bg-subtle p-1',
        trigger: 'rounded-control data-[selected]:bg-bg-surface data-[selected]:shadow-sm',
      },
    },
    size: {
      sm: { trigger: 'h-8 px-3 text-sm' },
      md: { trigger: 'h-10 px-4 text-sm' },
      lg: { trigger: 'h-12 px-5 text-md' },
    },
    orientation: {
      horizontal: { root: 'flex-col gap-4', list: 'flex-row' },
      vertical: { root: 'flex-row gap-6', list: 'flex-col', trigger: 'justify-start' },
    },
  },
  compoundVariants: [
    {
      variant: 'line',
      orientation: 'horizontal',
      class: { list: 'border-b', trigger: '-mb-px rounded-t-control border-b-2' },
    },
    {
      variant: 'line',
      orientation: 'vertical',
      class: { list: 'border-r', trigger: '-mr-px rounded-l-control border-r-2' },
    },
    {
      variant: 'enclosed',
      orientation: 'horizontal',
      class: { list: 'self-start' },
    },
  ],
  defaultVariants: { variant: 'line', size: 'md', orientation: 'horizontal' },
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
