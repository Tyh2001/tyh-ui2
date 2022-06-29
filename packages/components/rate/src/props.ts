export const rateProps = {
  modelValue: Number,
  color: {
    type: String,
    default: (): string => '#fbcc30'
  },
  voidColor: {
    type: String,
    default: (): string => '#C6D1DE'
  },
  showText: Boolean,
  sayText: {
    type: Array,
    default: (): string[] => ['极差', '失望', '一般', '惊喜', '满意']
  }
} as const
