import TyhMessage from './src/message.vue'
import { createNot, mergeOptions } from '../_utils'

export const Message = (opts: object) => {
  const options = { time: 2000, offset: 20 } as const
  return createNot(TyhMessage, mergeOptions(options, opts))
}
