<template>
  <transition name="tyh-notification-fade" @after-leave="leave" appear>
    <div
      v-show="isShow"
      :class="['tyh-notification', `tyh-notification-${position}`]"
    >
      <div class="tyh-notification-body">
        <i
          v-if="type !== 'default'"
          class="tyh-icon tyh-notification-icon tyh-ui-smile"
        />
        <div class="tyh-notification-content">
          <h3 class="tyh-notification-title">{{ title }}</h3>
          <div class="tyh-notification-message">
            <p>{{ message }}</p>
          </div>
        </div>
        <i class="tyh-icon tyh-ui-close" @click="close" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
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
    validator (v) {
      return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v)
    }
  },
  close: Boolean,
  type: {
    type: String,
    default: 'default',
    validator (v) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(v)
    }
  },
  background: {
    type: String,
    default: '#fff'
  }
})

const isShow = ref(true)

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
</script>

<style scoped src="../style/index.css">
</style>
