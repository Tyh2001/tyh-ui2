import { PropType } from 'vue'
import type { Type } from './interface'

export const Props = {
  message: String,
  type: {
    type: String as PropType<Type>,
    default: (): Type => 'default',
    validator: (v: Type): boolean => {
      return [
        'primary',
        'success',
        'danger',
        'warning',
        'default',
        ''
      ].includes(v)
    }
  },
  showClose: Boolean,
  time: {
    type: Number,
    default: (): number => 200
  },
  offset: {
    type: Number,
    default: (): number => 20
  },
  icon: String,
  round: Boolean
} as const
