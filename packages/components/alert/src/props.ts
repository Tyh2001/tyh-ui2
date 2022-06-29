import { PropType } from 'vue'

type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export const alertProps = {
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
  message: String,
  icon: String,
  close: Boolean,
  center: Boolean,
  simple: Boolean
} as const
