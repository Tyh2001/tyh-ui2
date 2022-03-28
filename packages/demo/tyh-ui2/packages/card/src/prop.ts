import { PropType } from 'vue'
import { Shadow } from './type'

export const prop = {
  shadow: {
    type: String as PropType<Shadow>,
    validator(v: string): boolean {
      return ['always', 'hover', ''].includes(v)
    }
  },
  bodyStyle: Object
}
