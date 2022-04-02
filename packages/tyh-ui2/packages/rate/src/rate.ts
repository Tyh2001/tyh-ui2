export const rateProps = {
  modelValue: Number,
  color: {
    type: String,
    default: () => '#fbcc30'
  },
  voidColor: {
    type: String,
    default: () => '#C6D1DE'
  },
  showText: Boolean,
  sayText: {
    type: Array,
    default: () => ['极差', '失望', '一般', '惊喜', '满意']
  }
} as const
