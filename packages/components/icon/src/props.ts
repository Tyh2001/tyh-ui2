export const Props = {
  icon: String,
  color: String,
  size: {
    type: String,
    default: (): string => '16'
  }
} as const
