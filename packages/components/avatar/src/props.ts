import { PropType } from 'vue'
import type { Fit } from './interface'

export const Props = {
  src: String,
  alt: String,
  size: {
    type: Number,
    default: (): number => 8
  },
  fit: {
    type: String as PropType<Fit>,
    validator: (v: Fit): boolean => {
      return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(v)
    }
  },
  round: Boolean,
  border: Boolean,
  select: Boolean,
  draggable: Boolean,
  errorIcon: String
} as const
