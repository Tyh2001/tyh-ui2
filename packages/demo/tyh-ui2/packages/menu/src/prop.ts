import { PropType } from 'vue'
import { Theme, Mode } from './type'

export const prop = {
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
  }
}
