import TM from './TyhMessage.vue'
import { createNot, mergeOptions } from '../../utils/tips'

const CONFIG = { time: 2000, offset: 20 }

export function Message (opts) {
  return createNot(TM, mergeOptions(CONFIG, opts))
}
