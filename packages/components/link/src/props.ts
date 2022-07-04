import { PropType } from 'vue'
import type { Type } from './interface'

export const Props = {
  type: {
    type: String as PropType<Type>,
    default: (): Type => 'default',
    validator: (v: Type): boolean => {
      return [
        'default',
        'primary',
        'success',
        'danger',
        'warning',
        ''
      ].includes(v)
    }
  },
  prohibit: Boolean,
  url: String,
  underline: {
    type: Boolean,
    default: (): boolean => true
  },
  target: String,
  icon: String
} as const
