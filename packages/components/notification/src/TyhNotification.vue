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

<script lang="ts" setup>
  import {
    getCurrentInstance,
    ref,
    computed,
    ComponentInternalInstance
  } from 'vue'
  import { notificationProps } from './props'

  const props = defineProps(notificationProps)
  const isShow = ref<boolean>(true)
  let timer: any
  ;(function (): void {
    if (props.time > 0) {
      timer = setTimeout(() => {
        onClose()
      }, props.time)
    }
  })()

  const onClose = (): void => {
    clearTimeout(timer)
    isShow.value = false
  }

  const isIcon = computed((): string => {
    let icon: string = ''
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

  const iconClass = computed((): string[] => {
    return [
      'tyh-icon',
      'tyh-notification-icon',
      isIcon.value,
      `tyh-notification-icon-${props.type}`
    ]
  })

  const instance = getCurrentInstance() as ComponentInternalInstance
  const leave = (): void => {
    instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
  }
</script>
