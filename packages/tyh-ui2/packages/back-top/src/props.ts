import { PropType } from 'vue'

type Action = 'smooth' | 'instant'

export const backTopProps = {
  bottom: {
    type: String,
    default: (): string => '50px'
  },
  right: {
    type: String,
    default: (): string => '50px'
  },
  action: {
    type: String as PropType<Action>,
    default: (): string => 'smooth',
    validator(v: string): boolean {
      return ['smooth', 'instant', ''].includes(v)
    }
  },
  beyond: {
    type: Number,
    default: (): number => 100
  }
} as const
