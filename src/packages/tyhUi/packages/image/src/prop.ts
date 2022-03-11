import { PropType } from 'vue'
import { imageFit } from './type'

export const prop = {
  src: String,
  alt: String,
  fit: {
    type: String as PropType<imageFit>,
    validator(v: string): boolean {
      return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(v)
    }
  },
  width: String,
  height: String,
  select: Boolean,
  draggable: Boolean
}
