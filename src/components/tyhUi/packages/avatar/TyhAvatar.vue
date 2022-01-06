<template>
  <div class="tyh-avatar">
    <div
      v-if="isError"
      :class="[
        'tyh-avatar-error',
        {
          'tyh-avatar-round': round,
        },
      ]"
      :style="[
        {
          width: `${size * 10}px`,
          height: `${size * 10}px`,
        },
      ]"
    >
      <slot name="error">
        <tyh-icon size="70" :icon="errorIcon || 'tyh-ui-user'" color="#fff" />
      </slot>
    </div>
    <img
      v-else
      :draggable="draggable"
      :class="[
        `tyh-avatar-${fit}`,
        {
          'tyh-avatar-round': round,
          'tyh-avatar-border': border,
          'tyh-avatar-select': select,
        },
      ]"
      :style="[
        {
          width: `${size * 10}px`,
          height: `${size * 10}px`,
        },
      ]"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="emit('load')"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  src: String,
  alt: String,
  size: {
    type: [String, Number],
    default: '8'
  },
  fit: {
    type: String,
    validator (val) {
      return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(val)
    }
  },
  round: Boolean,
  border: Boolean,
  select: Boolean,
  draggable: Boolean,
  errorIcon: String
})
const emit = defineEmits(['error', 'load'])
const isError = ref(false)
const onError = () => {
  emit('error')
  isError.value = true
}
</script>
