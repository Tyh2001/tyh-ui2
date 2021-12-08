<template>
  <span
    :class="isClass()"
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
const closeTag = () => {
  emit('close')
}
const isClass = () => {
  return [
    'tyh-tag',
    `tyh-tag-${props.type}`,
    props.size ? `tyh-tag-${props.size}` : '',
    {
      'tyh-tag-round': props.round
    }
  ]
}
</script>
