import { PropType } from 'vue'
import type { alertType } from './interface'

export const Props = {
  type: {
    type: String as PropType<alertType>,
    default: (): alertType => 'default',
    validator: (v: alertType): boolean => {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(v)
    }
  },
  message: String,
  icon: String,
  close: Boolean,
  center: Boolean,
  simple: Boolean
} as const
