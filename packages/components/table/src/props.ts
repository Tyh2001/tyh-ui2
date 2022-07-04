import { PropType } from 'vue'
import type { Align } from './interface'

export const Props = {
  data: {
    type: Array,
    default: (): [] => []
  },
  columns: {
    type: Array,
    default: (): [] => []
  },
  trHeight: {
    type: String,
    default: (): string => '40px'
  },
  align: {
    type: String as PropType<Align>,
    default: (): Align => 'left',
    validator: (v: Align): boolean => {
      return ['left', 'right', 'center', ''].includes(v)
    }
  },
  zebra: Boolean,
  border: Boolean,
  width: {
    type: String,
    default: (): string => '100%'
  },
  height: {
    type: String,
    default: (): string => 'auto'
  },
  num: Boolean,
  important: {
    type: Array,
    default: (): number[] => []
  },
  importantColor: {
    type: String,
    default: (): string => '#fdf5e6'
  }
} as const
