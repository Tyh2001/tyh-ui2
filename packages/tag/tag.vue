<template>
  <span
    class="tyh-tag"
    :class="[
      color ? `tyh-tag--${color}` : 'tyh-tag--',
      size ? `tyh-tag--${size}` : '',
      {
        'tyh-tag--round': round,
      },
    ]"
  >
    <slot></slot>
    <tyh-icon
      v-if="isclose"
      size="8"
      icon="tyh-ui-close"
      :color="color ? '#fff' : ''"
      @click="closeTag"
    />
  </span>
</template>

<script>
export default { name: 'TyhTag' }
</script>

<script setup>
defineProps({
  color: String,
  size: String,
  round: Boolean,
  isclose: Boolean
})
const emit = defineEmits(['onClose'])
function closeTag () {
  emit('onClose')
}
</script>
