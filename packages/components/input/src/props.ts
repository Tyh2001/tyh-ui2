import { PropType } from 'vue'
import type { Size, Type } from './interface'

export const Props = {
  modelValue: {
    type: String,
    set (): boolean {
      return true
    }
  },
  placeholder: String,
  type: {
    type: String as PropType<Type>,
    default: (): Type => 'text',
    validator: (v: Type): boolean => {
      return ['text', 'password', ''].includes(v)
    }
  },
  size: {
    type: String as PropType<Size>,
    default: (): Size => 'medium',
    validator: (v: Size): boolean => {
      return ['large', 'medium', 'small', 'mini', ''].includes(v)
    }
  },
  max: String,
  clear: Boolean,
  icon: String,
  disabled: Boolean,
  autofocus: Boolean,
  name: String,
  showPassword: Boolean,
  set (): boolean {
    return true
  }
} as const
