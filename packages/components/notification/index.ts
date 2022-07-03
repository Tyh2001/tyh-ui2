import TyhNotification from './src/notification.vue'
import { createNot, mergeOptions } from '@tyh-ui2/utils'

const options: object = { time: 3500, position: 'top-right', close: true }

export const Notification: Function = (opts: object): void => {
  return createNot(TyhNotification, mergeOptions(options, opts))
}
