import T from './src/TyhMessage.vue'
import { createNot, mergeOptions } from '../../utils/tips'
const G = { time: 2000, offset: 20 }

export const Message = opts => {
  return createNot(T, mergeOptions(G, opts))
}
