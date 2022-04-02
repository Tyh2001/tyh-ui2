import { PropType } from 'vue'

type Size = 'large' | 'medium' | 'small' | 'mini'

export const radioProps = {
  modelValue: String,
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
} as const
