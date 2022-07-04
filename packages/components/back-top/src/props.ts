import { PropType } from 'vue'
import type { Action } from './interface'

export const Props = {
  bottom: {
    type: String,
    default: (): string => '50px'
  },
  right: {
    type: String,
    default: (): string => '50px'
  },
  action: {
    type: String as PropType<Action>,
    default: (): Action => 'smooth',
    validator: (v: Action): boolean => {
      return ['smooth', 'instant', ''].includes(v)
    }
  },
  beyond: {
    type: Number,
    default: (): number => 100
  }
} as const
