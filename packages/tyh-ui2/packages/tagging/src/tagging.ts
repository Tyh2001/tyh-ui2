import { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export const taggingProps = {
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
    default: () => '13'
  },
  color: String
} as const
