import type { PropType } from 'vue'

export const Props = {
  header: String,
  content: {
    type: Array as PropType<any[]>,
    default: (): any[] => []
  },
  keys: String,
  footer: String,
  zebra: Boolean,
  num: Boolean,
  hoverShow: Boolean
} as const
