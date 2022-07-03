import TyhMessage from './src/message.vue'
import { createNot, mergeOptions } from '@tyh-ui2/utils'

const options: object = { time: 2000, offset: 20 }

export const Message: Function = (opts: object): void => {
  return createNot(TyhMessage, mergeOptions(options, opts))
}
