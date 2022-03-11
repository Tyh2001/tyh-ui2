import { PropType } from 'vue'
import { inputType, inputSize } from './type'

export const prop = {
  modelValue: String,
  placeholder: String,
  type: {
    type: String as PropType<inputType>,
    default: () => 'text',
    validator(v: string): boolean {
      return ['text', 'password', ''].includes(v)
    }
  },
  size: {
    type: String as PropType<inputSize>,
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
  showPassword: Boolean
}
