<template>
  <transition name="tyh-message-fade" @after-leave="leave" appear>
    <div
      v-show="isShow"
      :class="['tyh-message', `tyh-message-${type}`]"
      :style="[{ top: `${offset}px` }]"
    >
      <div class="tyh-message-content">
        <tyh-icon v-if="icon" :icon="icon" :color="isIconColor" />
        <span>{{ message }}</span>
        <tyh-icon
          v-if="showClose"
          icon="tyh-ui-close"
          :color="isIconColor"
          size="16"
          @click="close"
        />
      </div>
    </div>
  </transition>
</template>

<script setup>
import TyhIcon from '../../icon'
import { getCurrentInstance, ref, computed } from 'vue'
const props = defineProps({
  message: {
    type: [String, Object]
  },
  type: {
    type: String,
    default: 'default',
    validator (val) {
      return ['primary', 'success', 'danger', 'warning', 'default'].includes(val)
    }
  },
  showClose: Boolean,
  time: Number,
  offset: Number,
  icon: String
})

const { isShow, isIconColor, leave, close } = _TyhMessage()

function _TyhMessage () {
  const isShow = ref(true)
  const COLOR = {
    primary: '#3a6ff4',
    success: '#54c600',
    danger: '#d10f1b',
    warning: '#fbcc30',
    default: '#484848',
  }
  const isIconColor = computed(() => COLOR[props.type] || '#484848')

  let timer
  (function () {
    if (props.time > 0) {
      timer = setTimeout(() => {
        close()
      }, props.time)
    }
  })()

  const close = () => {
    clearTimeout(timer)
    isShow.value = false
  }

  const instance = getCurrentInstance()
  const leave = () => {
    instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
  }

  return { isShow, isIconColor, leave, close }
}
</script>
