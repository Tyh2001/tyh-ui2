<template>
  <transition
    name="tyh-drawer"
    @after-enter="emit('onOpen')"
    @after-leave="emit('onClose')"
  >
    <div
      :class="['tyh-drawer-packing', { 'tyh-drawer-modal': modal }]"
      :style="{ zIndex }"
      v-show="modelValue"
      @click.self="packingClose"
    >
      <div
        :class="['tyh-drawer', `tyh-drawer-${direction}`]"
        :style="isDirection ? `width: ${size}` : `height: ${size}`"
      >
        <div v-if="showHeader" class="tyh-drawer-header">
          <span v-if="$slots.title" class="tyh-drawer-title">
            <slot name="title" />
          </span>
          <span v-else class="tyh-drawer-title">{{ title }}</span>
          <i
            v-if="showClose"
            class="tyh-icon tyh-ui-close"
            @click.stop="close"
          />
        </div>
        <div v-if="$slots.default" class="tyh-drawer-body"><slot /></div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  watch,
  ComponentInternalInstance
} from 'vue'
import { drawerProps } from './drawer.ts'

const props = defineProps(drawerProps)
const emit = defineEmits([
  'update:modelValue',
  'open',
  'close',
  'onOpen',
  'onClose'
])

const { close, isDirection, packingClose } = TyhDrawer()
function TyhDrawer() {
  const close = (): void => {
    emit('close')
    emit('update:modelValue', false)
  }

  const isDirection = computed((): boolean => {
    const p: string = props.direction
    return p === 'left' || p === 'right' || p === ''
  })

  const packingClose = (): void => {
    if (!props.modalClose) return
    close()
  }

  const self: any = getCurrentInstance() as ComponentInternalInstance
  watch(
    () => props.modelValue,
    (v: boolean): void => {
      if (v) emit('open')
      const el = self.proxy.$el
      if (v && props.appendToBody) {
        document.body.appendChild(el)
      }
    }
  )

  return { close, isDirection, packingClose }
}
</script>
