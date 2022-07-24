import type { PropType } from 'vue'

export const Props = {
  data: {
    type: Array as PropType<any[]>,
    default: (): any[] => []
  }
} as const
