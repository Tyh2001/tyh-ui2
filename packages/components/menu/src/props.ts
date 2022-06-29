import { PropType } from 'vue'

type Theme = 'dark' | 'light'
type Mode = 'horizontal' | 'vertical'

export const menuProps = {
  theme: {
    type: String as PropType<Theme>,
    default: (): string => 'dark',
    validator(v: string): boolean {
      return ['dark', 'light', ''].includes(v)
    }
  },
  shadow: Boolean,
  mode: {
    type: String as PropType<Mode>,
    default: (): string => 'horizontal',
    validator(v: string): boolean {
      return ['horizontal', 'vertical', ''].includes(v)
    }
  },
  backgroundColor: String,
  textColor: String,
  collapse: Boolean
} as const
