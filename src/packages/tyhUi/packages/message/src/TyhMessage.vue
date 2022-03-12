<template>
  <transition name="tyh-message-fade" @after-leave="leave" appear>
    <div v-show="isShow" :class="isClass" :style="{ top: `${offset}px` }">
      <div class="tyh-message-content">
        <i
          v-if="icon"
          :class="['tyh-icon', 'lef-icon', icon, `tyh-message-${type}`]"
        />
        <span>{{ message }}</span>
        <i
          v-if="showClose"
          :class="['tyh-icon', 'tyh-ui-close', `tyh-message-${type}`]"
          @click="close"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref, computed } from 'vue'
import { prop } from './prop'
const props = defineProps({ ...prop })
const { isShow, leave, close, isClass } = TyhMessage()

function TyhMessage() {
  const isShow = ref<boolean>(true)
  let timer: any
  ;(function (): void {
    if (props.time > 0) {
      timer = setTimeout(() => {
        close()
      }, props.time)
    }
  })()

  const close = (): void => {
    clearTimeout(timer)
    isShow.value = false
  }

  const instance = getCurrentInstance()
  const leave = (): void => {
    instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
  }

  const isClass = computed((): (string | object)[] => {
    return [
      'tyh-message',
      `tyh-message-${props.type}`,
      { 'tyh-message-round': props.round }
    ]
  })

  return { isShow, leave, close, isClass }
}
</script>
