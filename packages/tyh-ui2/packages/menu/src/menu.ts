import { PropType } from 'vue'

type Theme = 'dark' | 'light'
type Mode = 'horizontal' | 'vertical'

export const menuProps = {
  theme: {
    type: String as PropType<Theme>,
    default: 'dark',
    validator(v: string): boolean {
      return ['dark', 'light', ''].includes(v)
    }
  },
  shadow: Boolean,
  mode: {
    type: String as PropType<Mode>,
    default: 'horizontal',
    validator(v: string): boolean {
      return ['horizontal', 'vertical', ''].includes(v)
    }
  },
  width: String
} as const
