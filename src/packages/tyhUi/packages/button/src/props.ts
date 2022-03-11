import { buttonType, buttonSize } from "./type"
import { PropType } from 'vue'

export const prop = {
  type: {
    type: String as PropType<buttonType>,
    default: 'default',
    validator(v: string): boolean {
      return ['default', 'primary', 'success', 'danger', 'warning', ''].includes(v)
    }
  },
  round: Boolean,
  disabled: Boolean,
  icon: String,
  size: {
    type: String as PropType<buttonSize>,
    validator(v: string): boolean {
      return ['large', 'small', 'mini', ''].includes(v)
    }
  },
  square: Boolean,
  simple: Boolean
}
