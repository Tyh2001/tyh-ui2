export const Props = {
  header: String,
  content: {
    type: Array,
    default: (): [] => []
  },
  keys: String,
  footer: String,
  zebra: Boolean,
  num: Boolean,
  hoverShow: Boolean
} as const
