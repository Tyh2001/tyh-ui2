import { PropType } from 'vue'
import type { Resize } from './interface'

export const Props = {
  modelValue: String,
  placeholder: String,
  max: [Number, String] as PropType<number | string>,
  rows: {
    type: String,
    default: (): string => '3'
  },
  cols: String,
  resize: {
    type: String as PropType<Resize>,
    default: (): Resize => 'none',
    validator: (v: Resize): boolean => {
      return ['vertical', 'horizontal', 'none', ''].includes(v)
    }
  },
  disabled: Boolean,
  autofocus: Boolean,
  name: String
} as const
