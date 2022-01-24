<template>
  <span
    :class="isClass"
    :style="[{ color: type === 'default' ? '#333' : '#fff' }]"
  >
    <slot />
    <tyh-icon
      v-if="isClose"
      size="8"
      icon="tyh-ui-close"
      :color="type === 'default' ? '#333' : '#fff'"
      style="margin-left: 7px"
      @click="emit('close')"
    />
  </span>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator (val) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
    }
  },
  size: {
    type: String,
    validator (val) {
      return ['small', 'mini'].includes(val)
    }
  },
  round: Boolean,
  isClose: Boolean
})
const emit = defineEmits(['close'])
const isClass = computed(() => {
  return [
    'tyh-tag',
    `tyh-tag-${props.type}`,
    props.size ? `tyh-tag-${props.size}` : '',
    {
      'tyh-tag-round': props.round
    }
  ]
})
</script>
