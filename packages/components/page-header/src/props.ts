export const Props = {
  title: {
    type: String,
    default: (): string => '返回'
  },
  content: String,
  icon: {
    type: String,
    default: (): string => 'tyh-ui-direction-left'
  }
} as const
