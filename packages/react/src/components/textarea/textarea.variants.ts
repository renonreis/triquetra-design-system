import { tv, type VariantProps } from 'tailwind-variants';
import { textControlBase } from '../input/input.variants.js';

export const textareaVariants = tv({
  base: [...textControlBase, 'block resize-y leading-normal'],
  variants: {
    size: {
      // The minimum heights equal Input's heights, so a manual resize never collapses the field.
      sm: 'min-h-8 px-2 py-1 text-sm',
      md: 'min-h-10 px-3 py-2 text-sm',
      lg: 'min-h-12 px-4 py-3 text-md',
    },
  },
  defaultVariants: { size: 'md' },
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;
