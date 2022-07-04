import { PropType } from 'vue'
import type { Theme, Mode } from './interface'

export const Props = {
  theme: {
    type: String as PropType<Theme>,
    default: (): Theme => 'dark',
    validator: (v: Theme): boolean => {
      return ['dark', 'light', ''].includes(v)
    }
  },
  shadow: Boolean,
  mode: {
    type: String as PropType<Mode>,
    default: (): Mode => 'horizontal',
    validator: (v: Mode): boolean => {
      return ['horizontal', 'vertical', ''].includes(v)
    }
  },
  backgroundColor: String,
  textColor: String,
  collapse: Boolean
} as const
