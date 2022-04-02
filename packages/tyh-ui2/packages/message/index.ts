import T from './src/TyhMessage.vue'
import { createNot, mergeOptions } from '../../utils/tips.ts'

const G: object = { time: 2000, offset: 20 }

export const Message: Function = (opts: object): void => {
  return createNot(T, mergeOptions(G, opts))
}
