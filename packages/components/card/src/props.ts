import { PropType } from 'vue'

type Shadow = 'always' | 'hover'

export const cardProps = {
  shadow: {
    type: String as PropType<Shadow>,
    validator(v: string): boolean {
      return ['always', 'hover', ''].includes(v)
    }
  },
  bodyStyle: {
    type: Object,
    default: (): null => null
  }
} as const
