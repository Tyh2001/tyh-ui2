import { ExtractPropTypes, PropType } from 'vue'
import type Alert from './TyhAlert.vue'
type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export const alertProps = {
  type: {
    type: String as PropType<Type>,
    default: 'default',
    validator(v: string): boolean {
      return [
        'default',
        'primary',
        'success',
        'danger',
        'warning',
        ''
      ].includes(v)
    }
  },
  message: String,
  icon: String,
  close: Boolean,
  center: Boolean,
  simple: Boolean
} as const
export type AlertProps = ExtractPropTypes<typeof alertProps>

// emits
export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type AlertEmits = typeof alertEmits

export type AlertInstance = InstanceType<typeof Alert>
