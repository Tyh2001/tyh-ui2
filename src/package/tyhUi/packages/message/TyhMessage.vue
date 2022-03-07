<template>
  <transition name="tyh-message-fade" @after-leave="leave" appear>
    <div
      v-show="isShow"
      :class="[
        'tyh-message',
        `tyh-message-${type}`,
        { 'tyh-message-round': round }
      ]"
      :style="[{ top: `${offset}px` }]"
    >
      <div class="tyh-message-content">
        <i
          v-if="icon"
          :class="['tyh-icon', 'lef-icon', icon]"
          :style="isIconStyle"
        />
        <span>{{ message }}</span>
        <i
          v-if="showClose"
          class="tyh-icon tyh-ui-close"
          :style="isIconStyle"
          @click="close"
        />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { getCurrentInstance, ref, computed } from 'vue'
const props = defineProps({
  message: {
    type: String,
  },
  type: {
    type: String,
    default: 'default',
    validator (v) {
      return ['primary', 'success', 'danger', 'warning', 'default'].includes(v)
    }
  },
  showClose: Boolean,
  time: Number,
  offset: Number,
  icon: String,
  round: Boolean
})
const { isShow, isIconStyle, leave, close } = _TyhMessage()

function _TyhMessage () {
  const isShow = ref(true)
  const THEME = {
    primary: '#3a6ff4',
    success: '#54c600',
    danger: '#d10f1b',
    warning: '#fbcc30',
    default: '#484848',
  }
  const isIconStyle = computed(() => {
    return { color: THEME[props.type] || '#484848' }
  })

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

  return { isShow, isIconStyle, leave, close }
}
</script>
