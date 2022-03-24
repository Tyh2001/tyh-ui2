import T from './src/TyhMessage.vue'
import { createNot, mergeOptions } from './src/tips'
const G = { time: 2000, offset: 20 }

console.log(T)
export const Message = opts => {
  console.log(opts)
  console.log(mergeOptions(G, opts))
  return createNot(T, mergeOptions(G, opts))
}
