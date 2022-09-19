<script lang="ts" setup name="TyhMessage">
  import {
    getCurrentInstance,
    ref,
    computed,
    ComponentInternalInstance
  } from 'vue'
  import { Props } from './props'

  const props = defineProps(Props)
  const isShow = ref<boolean>(true)
  let timer: any
  ;((): void => {
    if (props.time > 0) {
      timer = setTimeout((): void => {
        close()
      }, props.time)
    }
  })()

  const close = (): void => {
    clearTimeout(timer)
    isShow.value = false
  }

  const instance: ComponentInternalInstance =
    getCurrentInstance() as ComponentInternalInstance
  const leave = (): void => {
    instance.vnode.el.parentElement.removeChild(instance.vnode.el)
  }

  const isClass = computed((): (string | object)[] => {
    return [
      'tyh-message',
      `tyh-message-${props.type}`,
      { 'tyh-message-round': props.round }
    ]
  })
</script>

<template>
  <transition name="tyh-message-fade" appear @after-leave="leave">
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
