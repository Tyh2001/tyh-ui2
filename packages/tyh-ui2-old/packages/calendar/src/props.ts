export const calendarProps = {
  modelValue: {
    type: Object,
    required: true
  },
  cellWidth: {
    type: Number,
    default: (): number => 50
  }
} as const
