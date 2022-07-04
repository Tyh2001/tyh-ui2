import { PropType } from 'vue'
import type { Fit } from './interface'

export const Props = {
  src: String,
  alt: String,
  fit: {
    type: String as PropType<Fit>,
    validator: (v: Fit): boolean => {
      return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(v)
    }
  },
  width: String,
  height: String,
  select: Boolean,
  draggable: Boolean
} as const
