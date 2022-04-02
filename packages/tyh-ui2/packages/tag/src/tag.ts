import { PropType } from 'vue'
import { Type, Size } from './type'

export const tagProps = {
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
  size: {
    type: String as PropType<Size>,
    validator(v: string): boolean {
      return ['small', 'mini', ''].includes(v)
    }
  },
  round: Boolean,
  isClose: Boolean
}
