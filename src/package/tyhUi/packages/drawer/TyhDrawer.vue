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

<script setup>
import { computed, getCurrentInstance, watch } from 'vue'
const props = defineProps({
  modelValue: Boolean,
  direction: {
    type: String,
    default: 'right',
    validator (v) {
      return ['top', 'left', 'bottom', 'right'].includes(v)
    }
  },
  size: {
    type: String,
    default: '30%'
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
const { close, isDirection, packingClose } = _TyhDrawer()

function _TyhDrawer () {
  const close = () => {
    emit('close')
    emit('update:modelValue', false)
  }
  const isDirection = computed(() => {
    const p = props.direction
    return p === 'left' || p === 'right'
  })
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
  return { close, isDirection, packingClose }
}
</script>
