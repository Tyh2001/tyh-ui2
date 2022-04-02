import { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'
type Size = 'small' | 'mini'

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
} as const
