<script lang="ts" setup name="TyhDialog">
  import { getCurrentInstance, watch, ComponentInternalInstance } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
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

  const packingClose = (): void => {
    if (!prop.modalClose) return
    close()
  }

  const { proxy }: ComponentInternalInstance =
    getCurrentInstance() as ComponentInternalInstance
  watch(
    () => prop.modelValue,
    (v: boolean): void => {
      if (v) emit('open')
      const el = proxy.$el
      if (v && prop.appendToBody) {
        document.body.appendChild(el)
      }
    }
  )
</script>

<template>
  <transition
    name="tyh-dialog"
    @after-enter="emit('onOpen')"
    @after-leave="emit('onClose')"
  >
    <div
      v-show="modelValue"
      :class="['tyh-dialog-packing', { 'tyh-dialog-modal': modal }]"
      :style="{ zIndex }"
      @click.self="packingClose"
    >
      <div class="tyh-dialog" :style="{ width, marginTop: top }">
        <div v-if="showHeader" class="tyh-dialog-header">
          <span v-if="$slots.title" class="tyh-dialog-title">
            <slot name="title" />
          </span>
          <span v-else class="tyh-dialog-title">{{ title }}</span>
          <i
            v-if="showClose"
            class="tyh-icon tyh-ui-close"
            @click.stop="close"
          />
        </div>
        <div v-if="$slots.default" class="tyh-dialog-body"><slot /></div>
        <div v-if="$slots.footer" class="tyh-dialog-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>
