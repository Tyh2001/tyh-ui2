import { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'
type Size = 'large' | 'small' | 'mini'

export const buttonProps = {
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
  simple: Boolean,
  loading: Boolean
} as const
