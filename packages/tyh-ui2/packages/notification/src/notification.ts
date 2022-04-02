import { PropType } from 'vue'

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type Type = 'primary' | 'success' | 'danger' | 'warning'

export const notificationProps = {
  title: String,
  message: String,
  time: {
    type: Number,
    default: () => 3500
  },
  position: {
    type: String as PropType<Position>,
    default: () => 'top-right',
    validator(v: string): boolean {
      return [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        ''
      ].includes(v)
    }
  },
  close: Boolean,
  type: {
    type: String as PropType<Type>,
    validator(v: string): boolean {
      return ['primary', 'success', 'danger', 'warning', ''].includes(v)
    }
  }
} as const
