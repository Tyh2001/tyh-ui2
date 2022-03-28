import { PropType } from 'vue'
import { Direction } from './type'

export const prop = {
  direction: {
    type: String as PropType<Direction>,
    required: true,
    validator(v: string): boolean {
      return ['left', 'right'].includes(v)
    }
  },
  url: String,
  icon: String,
  prohibit: Boolean
}
