import { PropType } from 'vue'
import type { Position, Type } from './interface'

export const Props = {
  title: String,
  message: String,
  time: {
    type: Number,
    default: (): number => 3500
  },
  position: {
    type: String as PropType<Position>,
    default: (): Position => 'top-right',
    validator: (v: Position): boolean => {
      return [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        ''
      ].includes(v)
    }
  },
  close: Boolean,
  type: {
    type: String as PropType<Type>,
    validator: (v: Type): boolean => {
      return ['primary', 'success', 'danger', 'warning', ''].includes(v)
    }
  }
} as const
