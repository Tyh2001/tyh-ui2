import { PropType } from 'vue'

type Shadow = 'always' | 'hover'

export const cardProps = {
  shadow: {
    type: String as PropType<Shadow>,
    validator(v: string): boolean {
      return ['always', 'hover', ''].includes(v)
    }
  },
  bodyStyle: Object
} as const
