import { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export const textProps = {
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
    default: (): string => '16'
  },
  block: Boolean,
  color: String
} as const
