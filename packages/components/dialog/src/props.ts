export const dialogProps = {
  modelValue: Boolean,
  width: {
    type: String,
    default: (): string => '30%'
  },
  top: {
    type: String,
    default: (): string => '15vh'
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
