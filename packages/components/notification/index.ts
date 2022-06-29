import TyhNotification from './src/TyhNotification.vue'
import { createNot, mergeOptions } from '@tyh-ui/utils'

const options: object = { time: 3500, position: 'top-right', close: true }

export const Notification: Function = (opts: object): void => {
  return createNot(TyhNotification, mergeOptions(options, opts))
}
