import { PropType } from 'vue'
import { Type, Size } from './type'

export const prop = {
  modelValue: {
    type: String,
    set() {
      return true
    }
  },
  placeholder: String,
  type: {
    type: String as PropType<Type>,
    default: () => 'text',
    validator(v: string): boolean {
      return ['text', 'password', ''].includes(v)
    }
  },
  size: {
    type: String as PropType<Size>,
    default: () => 'medium',
    validator(v: string): boolean {
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
  set() {
    return true
  }
}
