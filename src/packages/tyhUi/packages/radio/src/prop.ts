import { PropType } from 'vue'
import { Size } from './type'

export const prop = {
  modelValue: {
    type: String,
    required: true
  },
  label: String,
  name: String,
  disabled: Boolean,
  border: Boolean,
  size: {
    type: String as PropType<Size>,
    default: () => 'large',
    validator(v: string): boolean {
      return ['large', 'medium', 'small', 'mini', ''].includes(v)
    }
  }
}
