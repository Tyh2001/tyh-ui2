import { PropType } from 'vue'

type Type = 'text' | 'password'
type Size = 'large' | 'medium' | 'small' | 'mini'

export const inputProps = {
  modelValue: {
    type: String,
    set(): boolean {
      return true
    }
  },
  placeholder: String,
  type: {
    type: String as PropType<Type>,
    default: (): string => 'text',
    validator(v: string): boolean {
      return ['text', 'password', ''].includes(v)
    }
  },
  size: {
    type: String as PropType<Size>,
    default: (): string => 'medium',
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
  set(): boolean {
    return true
  }
} as const
