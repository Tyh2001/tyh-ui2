import { PropType } from 'vue'
import { Type } from './type'

export const prop = {
  message: String,
  type: {
    type: String as PropType<Type>,
    default: () => 'default',
    validator(v: string): boolean {
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
    default: () => 200
  },
  offset: {
    type: Number,
    default: () => 20
  },
  icon: String,
  round: Boolean
}
