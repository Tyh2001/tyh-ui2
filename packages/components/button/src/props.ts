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
  round: Boolean,
  disabled: Boolean,
  icon: String,
  size: {
    type: String as PropType<Size>,
    validator: (v: Size): boolean => {
      return ['large', 'small', 'mini', ''].includes(v)
    }
  },
  square: Boolean,
  simple: Boolean,
  loading: Boolean,
  block: Boolean
} as const
