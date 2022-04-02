export const switchProps = {
  modelValue: Boolean,
  closeColor: {
    type: String,
    default: () => '#dcdfe6'
  },
  openColor: {
    type: String,
    default: () => '#3a6ff4'
  },
  closeText: String,
  openText: String,
  disabled: Boolean,
  width: {
    type: Number,
    default: () => 40
  }
} as const
