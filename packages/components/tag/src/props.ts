import { PropType } from 'vue'
import type { Type, Size } from './interface'

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
    type: String as PropType<Size>,
    validator: (v: Size): boolean => {
      return ['small', 'mini', ''].includes(v)
    }
  },
  round: Boolean,
  isClose: Boolean
} as const
