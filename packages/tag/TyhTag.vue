<template>
  <span
    class="tyh-tag"
    :class="[
      `tyh-tag-${type}`,
      size ? `tyh-tag-${size}` : '',
      {
        'tyh-tag-round': round,
      },
    ]"
    :style="[{ color: type === 'default' ? '#333' : '#fff' }]"
  >
    <slot />
    <tyh-icon
      v-if="isClose"
      size="8"
      icon="tyh-ui-close"
      :color="type === 'default' ? '#333' : '#fff'"
      style="margin-left: 7px"
      @click="closeTag"
    />
  </span>
</template>

<script setup>
defineProps({
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
const closeTag = () => {
  emit('close')
}
</script>
