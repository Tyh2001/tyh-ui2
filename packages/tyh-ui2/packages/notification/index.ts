import T from './src/TyhNotification.vue'
import { createNot, mergeOptions } from '../../utils/tips.ts'

const G: object = { time: 3500, position: 'top-right', close: true }

export const Notification: Function = (opts: object): void => {
  return createNot(T, mergeOptions(G, opts))
}
