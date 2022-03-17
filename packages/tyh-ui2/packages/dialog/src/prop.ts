export const prop = {
  modelValue: Boolean,
  width: {
    type: String,
    default: () => '30%'
  },
  top: {
    type: String,
    default: () => '15vh'
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
