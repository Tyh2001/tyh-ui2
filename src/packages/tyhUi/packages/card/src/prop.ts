import { PropType } from 'vue'
import { cardShadow } from './type'

export const prop = {
  shadow: {
    type: String as PropType<cardShadow>,
    validator(v: string): boolean {
      return ['always', 'hover', ''].includes(v)
    }
  },
  bodyStyle: Object
}
