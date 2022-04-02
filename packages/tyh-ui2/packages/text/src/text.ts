import { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export const textProps = {
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
} as const
