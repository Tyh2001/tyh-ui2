<template>
  <transition name="slide-fade">
    <div
      :class="['tyh-drawer', `tyh-drawer-${direction}`]"
      v-show="modelValue"
      :style="isStyle"
    >
      <tyh-button @click="close">关闭</tyh-button>
      <slot />
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'
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
  }
})
const emit = defineEmits('update:modelValue')
const close = () => {
  emit('update:modelValue', !props.modelValue)
}
const isStyle = computed(() => {
  const p = props.direction
  return [
    `${p === 'left' || p === 'right' ? 'width' : 'height'}: ${props.size}`
  ]
})
</script>

<style src="./style/index.css" scoped>
</style>
