import type { PropType } from 'vue'

export const Props = {
  modelValue: {
    type: Number as PropType<number>,
    default: (): number => 0
  },
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
    type: Array as PropType<string[]>,
    default: (): string[] => ['极差', '失望', '一般', '惊喜', '满意']
  }
} as const
