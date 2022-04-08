export const switchProps = {
  modelValue: Boolean,
  closeColor: {
    type: String,
    default: (): string => '#dcdfe6'
  },
  openColor: {
    type: String,
    default: (): string => '#3a6ff4'
  },
  closeText: String,
  openText: String,
  disabled: Boolean,
  width: {
    type: Number,
    default: (): number => 40
  }
} as const
