import { PropType } from 'vue'

type Type = 'primary' | 'success' | 'danger' | 'warning' | 'default'

export const messageProps = {
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
} as const
