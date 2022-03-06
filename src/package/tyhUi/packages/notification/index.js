import TN from './TyhNotification.vue'
import { createNot, mergeOptions } from '../../utils/tips'

const CONFIG = {
  time: 3500,
  position: 'top-right',
  close: true
}

export function Notification (opts) {
  return createNot(TN, mergeOptions(CONFIG, opts))
}
