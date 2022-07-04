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
  size: {
    type: String,
    default: (): string => '13'
  },
  color: String
} as const
