import { PropType } from 'vue'

type Direction = 'top' | 'left' | 'bottom' | 'right'

export const drawerProps = {
  modelValue: Boolean,
  direction: {
    type: String as PropType<Direction>,
    default: (): string => 'right',
    validator(v: string): boolean {
      return ['top', 'left', 'bottom', 'right', ''].includes(v)
    }
  },
  size: {
    type: String,
    default: (): string => '30%'
  },
  title: String,
  appendToBody: Boolean,
  modal: {
    type: Boolean,
    default: (): boolean => true
  },
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  showClose: {
    type: Boolean,
    default: (): boolean => true
  },
  showHeader: {
    type: Boolean,
    default: (): boolean => true
  },
  zIndex: {
    type: Number,
    default: (): number => 3500
  }
} as const
