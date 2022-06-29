import { PropType } from 'vue'

type Direction = 'left' | 'right'

export const turnPageItemProps = {
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
} as const
