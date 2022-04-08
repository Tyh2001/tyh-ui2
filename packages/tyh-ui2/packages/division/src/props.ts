import { PropType } from 'vue'

type Position = 'left' | 'center' | 'right'

export const divisionProps = {
  position: {
    type: String as PropType<Position>,
    default: (): string => 'left',
    validator(v: string): boolean {
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
