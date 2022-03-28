import { PropType } from 'vue'
import { Action } from './type'

export const prop = {
  bottom: {
    type: String,
    default: () => '50px'
  },
  right: {
    type: String,
    default: () => '50px'
  },
  action: {
    type: String as PropType<Action>,
    default: () => 'smooth',
    validator(v: string): boolean {
      return ['smooth', 'instant', ''].includes(v)
    }
  },
  beyond: {
    type: Number,
    default: () => 100
  }
}
