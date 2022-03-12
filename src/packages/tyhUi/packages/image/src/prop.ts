import { PropType } from 'vue'
import { Fit } from './type'

export const prop = {
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
}
