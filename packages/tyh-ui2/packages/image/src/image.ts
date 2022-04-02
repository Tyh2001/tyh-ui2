import { PropType } from 'vue'

type Fit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export const imageProps = {
  src: String,
  alt: String,
  fit: {
    type: String as PropType<Fit>,
    validator(v: string): boolean {
      return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(v)
    }
  },
  width: String,
  height: String,
  select: Boolean,
  draggable: Boolean
} as const
