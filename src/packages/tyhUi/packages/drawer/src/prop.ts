import { PropType } from 'vue'
import { drawerDirection } from './type'

export const prop = {
  modelValue: Boolean,
  direction: {
    type: String as PropType<drawerDirection>,
    default: 'right',
    validator(v: string): boolean {
      return ['top', 'left', 'bottom', 'right', ''].includes(v)
    }
  },
  size: {
    type: String,
    default: () => '30%'
  },
  title: String,
  appendToBody: Boolean,
  modal: {
    type: Boolean,
    default: () => true
  },
  modalClose: {
    type: Boolean,
    default: () => true
  },
  showClose: {
    type: Boolean,
    default: () => true
  },
  showHeader: {
    type: Boolean,
    default: () => true
  },
  zIndex: {
    type: Number,
    default: () => 3500
  }
}
