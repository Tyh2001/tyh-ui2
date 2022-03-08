<template>
  <transition name="tyh-notification-fade" @after-leave="leave" appear>
    <div
      v-show="isShow"
      :class="['tyh-notification', `tyh-notification-${position}`]"
    >
      <div class="tyh-notification-body">
        <i v-if="type" :class="iconClass" />
        <div class="tyh-notification-content">
          <h3 class="tyh-notification-title">{{ title }}</h3>
          <div class="tyh-notification-message">
            <p>{{ message }}</p>
          </div>
        </div>
        <i v-if="close" class="tyh-icon tyh-ui-close" @click="onClose" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { getCurrentInstance, ref, computed } from 'vue'
const props = defineProps({
  title: String,
  message: String,
  time: {
    type: Number,
    default: 3500
  },
  position: {
    type: String,
    default: 'top-right',
    validator(v) {
      return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(
        v
      )
    }
  },
  close: Boolean,
  type: {
    type: String,
    validator(v) {
      return ['primary', 'success', 'danger', 'warning'].includes(v)
    }
  }
})
const { isShow, onClose, leave, iconClass } = _TyhNotification()
function _TyhNotification() {
  const isShow = ref(true)
  let timer
  ;(function () {
    if (props.time > 0) {
      timer = setTimeout(() => {
        onClose()
      }, props.time)
    }
  })()

  const onClose = () => {
    clearTimeout(timer)
    isShow.value = false
  }

  const isIcon = computed(() => {
    let icon
    switch (props.type) {
      case 'primary':
        icon = 'tyh-ui-smile'
        break
      case 'success':
        icon = 'tyh-ui-success-filling'
        break
      case 'danger':
        icon = 'tyh-ui-error'
        break
      case 'warning':
        icon = 'tyh-ui-warning-filling'
        break
    }
    return icon
  })

  const iconClass = computed(() => {
    return [
      'tyh-icon',
      'tyh-notification-icon',
      isIcon.value,
      `tyh-notification-icon-${props.type}`
    ]
  })

  const instance = getCurrentInstance()
  const leave = () => {
    instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
  }
  return { isShow, onClose, leave, iconClass }
}
</script>
