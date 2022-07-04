import { PropType } from 'vue'
import type { Position } from './interface'

export const Props = {
  position: {
    type: String as PropType<Position>,
    default: (): Position => 'left',
    validator: (v: Position): boolean => {
      return ['left', 'center', 'right', ''].includes(v)
    }
  },
  color: {
    type: String,
    default: (): string => '#515a6e'
  },
  margin: {
    type: String,
    default: (): string => '25px'
  },
  icon: String
} as const
