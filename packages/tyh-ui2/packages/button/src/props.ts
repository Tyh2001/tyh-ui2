import { Type, Size } from './type'
import { PropType } from 'vue'

export const prop = {
  type: {
    type: String as PropType<Type>,
    default: 'default',
    validator(v: string): boolean {
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
    validator(v: string): boolean {
      return ['large', 'small', 'mini', ''].includes(v)
    }
  },
  square: Boolean,
  simple: Boolean
}
