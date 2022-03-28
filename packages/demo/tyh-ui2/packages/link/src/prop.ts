import { PropType } from 'vue'
import { Type } from './type'

export const prop = {
  type: {
    type: String as PropType<Type>,
    default: () => 'default',
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
  prohibit: Boolean,
  url: String,
  underline: {
    type: Boolean,
    default: () => true
  },
  target: String,
  icon: String
}
