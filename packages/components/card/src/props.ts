import { PropType, CSSProperties } from 'vue'
import type { Shadow } from './interface'

export const Props = {
  shadow: {
    type: String as PropType<Shadow>,
    validator: (v: Shadow): boolean => {
      return ['always', 'hover', ''].includes(v)
    }
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): null => null
  }
} as const
