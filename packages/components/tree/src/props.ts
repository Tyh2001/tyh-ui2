import type { PropType } from 'vue'

export const Props = {
  data: {
    type: Array as PropType<unknown[]>,
    default: (): any[] => []
  }
} as const
