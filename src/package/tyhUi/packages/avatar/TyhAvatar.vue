<template>
  <div class="tyh-avatar">
    <div v-if="isError" :class="errorClass" :style="isSize">
      <slot name="error">
        <tyh-icon size="70" :icon="errorIcon || 'tyh-ui-user'" color="#fff" />
      </slot>
    </div>

    <img
      v-else
      :draggable="draggable"
      :class="successClass"
      :style="isSize"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="emit('load')"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  src: String,
  alt: String,
  size: {
    type: [Number, String],
    default: '8'
  },
  fit: {
    type: String,
    validator(v) {
      return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(v)
    }
  },
  round: Boolean,
  border: Boolean,
  select: Boolean,
  draggable: Boolean,
  errorIcon: String
})
const emit = defineEmits(['error', 'load'])
const { isError, onError, isSize, errorClass, successClass } = _TyhAvatar()

function _TyhAvatar() {
  const isError = ref(false)
  const onError = () => {
    emit('error')
    isError.value = true
  }
  const isSize = computed(() => {
    return [
      {
        width: `${props.size * 10}px`,
        height: `${props.size * 10}px`
      }
    ]
  })
  const errorClass = computed(() => {
    return ['tyh-avatar-error', { 'tyh-avatar-round': props.round }]
  })
  const successClass = computed(() => {
    return [
      {
        [`tyh-avatar-${props.fit}`]: props.fit,
        'tyh-avatar-round': props.round,
        'tyh-avatar-border': props.border,
        'tyh-avatar-select': props.select
      }
    ]
  })
  return {
    isError,
    onError,
    isSize,
    errorClass,
    successClass
  }
}
</script>
