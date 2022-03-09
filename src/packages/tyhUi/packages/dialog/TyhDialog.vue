<template>
  <transition
    name="tyh-dialog"
    @after-enter="emit('onOpen')"
    @after-leave="emit('onClose')"
  >
    <div
      :class="['tyh-dialog-packing', { 'tyh-dialog-modal': modal }]"
      :style="{ zIndex }"
      v-show="modelValue"
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

<script setup>
import { getCurrentInstance, watch } from 'vue'
const props = defineProps({
  modelValue: Boolean,
  width: {
    type: String,
    default: '30%'
  },
  top: {
    type: String,
    default: '15vh'
  },
  title: String,
  appendToBody: Boolean,
  modal: {
    type: Boolean,
    default: true
  },
  modalClose: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 3500
  }
})
const emit = defineEmits(['update:modelValue', 'open', 'close', 'onOpen', 'onClose'])
const { close, packingClose } = _TyhDialog()
function _TyhDialog () {
  const close = () => {
    emit('close')
    emit('update:modelValue', false)
  }
  const packingClose = () => {
    if (!props.modalClose) return
    close()
  }
  const self = getCurrentInstance().proxy
  watch(() => props.modelValue, v => {
    if (v) emit('open')
    const el = self.$el
    if (v && props.appendToBody) {
      document.body.appendChild(el)
    }
  })
  return { close, packingClose }
}
</script>
