import { PropType } from 'vue'

type Resize = 'vertical' | 'horizontal' | 'none'

export const textareaProps = {
  modelValue: String,
  placeholder: String,
  max: [Number, String],
  rows: {
    type: String,
    default: (): string => '3'
  },
  cols: String,
  resize: {
    type: String as PropType<Resize>,
    default: (): string => 'none',
    validator(v: string): boolean {
      return ['vertical', 'horizontal', 'none', ''].includes(v)
    }
  },
  disabled: Boolean,
  autofocus: Boolean,
  name: String
} as const
