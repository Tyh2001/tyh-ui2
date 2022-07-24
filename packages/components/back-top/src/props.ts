import { PropType } from 'vue'
import type { backTopBehavior } from './interface'

export const Props = {
  bottom: {
    type: String,
    default: (): string => '50px'
  },
  right: {
    type: String,
    default: (): string => '50px'
  },
  beyond: {
    type: Number,
    default: (): number => 100
  },
  behavior: {
    type: String as PropType<backTopBehavior>,
    default: (): backTopBehavior => 'smooth',
    validator: (val: backTopBehavior): boolean => {
      return (['smooth', 'auto'] as const).includes(val)
    }
  }
} as const
