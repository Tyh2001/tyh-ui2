import { PropType } from 'vue'

type Fit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export const avatarProps = {
  src: String,
  alt: String,
  size: {
    type: Number,
    default: () => 8
  },
  fit: {
    type: String as PropType<Fit>,
    validator(v: string): boolean {
      return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(v)
    }
  },
  round: Boolean,
  border: Boolean,
  select: Boolean,
  draggable: Boolean,
  errorIcon: String
} as const
