import { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export const taggingProps = {
  type: {
    type: String as PropType<Type>,
    default: (): string => 'default',
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
    default: (): string => '13'
  },
  color: String
} as const
