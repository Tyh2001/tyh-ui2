import { PropType } from 'vue'
import { Type } from './type'

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
  message: String,
  icon: String,
  close: Boolean,
  center: Boolean,
  simple: Boolean
}
