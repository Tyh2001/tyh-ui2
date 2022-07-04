import { PropType } from 'vue'
import type { Size } from './interface'

export const Props = {
  modelValue: String,
  label: String,
  name: String,
  disabled: Boolean,
  border: Boolean,
  size: {
    type: String as PropType<Size>,
    default: (): Size => 'large',
    validator: (v: Size): boolean => {
      return ['large', 'medium', 'small', 'mini', ''].includes(v)
    }
  }
} as const
