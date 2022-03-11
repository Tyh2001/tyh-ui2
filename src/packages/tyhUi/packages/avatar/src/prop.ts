import { PropType } from 'vue'
import { avatarFit } from './type'

export const prop = {
  src: String,
  alt: String,
  size: {
    type: Number,
    default: () => 8
  },
  fit: {
    type: String as PropType<avatarFit>,
    validator(v: string): boolean {
      return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(v)
    }
  },
  round: Boolean,
  border: Boolean,
  select: Boolean,
  draggable: Boolean,
  errorIcon: String
}
