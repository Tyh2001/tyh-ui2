import TyhNotification from './src/notification.vue'
import { createNot, mergeOptions } from '../_utils'

export const Notification: Function = (opts: object): object => {
  const options = { time: 3500, position: 'top-right', close: true } as const
  return createNot(TyhNotification, mergeOptions(options, opts))
}
