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
  size: {
    type: String,
    default: () => '16'
  },
  block: Boolean,
  color: String
}
