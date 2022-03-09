import T from './TyhNotification.vue'
import { createNot, mergeOptions } from '../../utils/tips'
const G = { time: 3500, position: 'top-right', close: true }

export const Notification = opts => {
  return createNot(T, mergeOptions(G, opts))
}
