import { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export const linkProps = {
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
} as const
