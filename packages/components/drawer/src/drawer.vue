<script lang="ts" setup name="TyhDrawer">
  import { computed, getCurrentInstance, watch } from 'vue'
  import { Props } from './props'
  import type { ComponentInternalInstance } from 'vue'

  const props = defineProps(Props)
  const emit = defineEmits([
    'update:modelValue',
    'open',
    'close',
    'onOpen',
    'onClose'
  ])

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

  const { proxy }: ComponentInternalInstance =
    getCurrentInstance() as ComponentInternalInstance
  watch(
    () => props.modelValue,
    (v: boolean): void => {
      if (v) emit('open')
      const el = proxy.$el
      if (v && props.appendToBody) {
        document.body.appendChild(el)
      }
    }
  )
</script>

<template>
  <transition
    name="tyh-drawer"
    @after-enter="emit('onOpen')"
    @after-leave="emit('onClose')"
  >
    <div
      v-show="modelValue"
      :class="['tyh-drawer-packing', { 'tyh-drawer-modal': modal }]"
      :style="{ zIndex }"
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
