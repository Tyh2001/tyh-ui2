import { PropType } from 'vue'
import { bactTopBehavior } from './type'

export const prop = {
  bottom: {
    type: String,
    default: () => '50px'
  },
  right: {
    type: String,
    default: () => '50px'
  },
  behavior: {
    type: String as PropType<bactTopBehavior>,
    default: 'smooth',
    validator(v: string): boolean {
      return ['smooth', 'instant', ''].includes(v)
    }
  },
  beyond: {
    type: Number,
    default: () => 100
  }
}
