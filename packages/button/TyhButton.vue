<template>
  <button :class="isClass()" :disabled="disabled">
    <tyh-icon v-if="icon" :icon="icon" :color="textColor()" />
    <span
      class="tyh-button-text"
      :style="[icon ? 'margin-left:5px' : '', { color: textColor() }]"
    >
      <slot />
    </span>
  </button>
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
  round: Boolean,
  disabled: Boolean,
  icon: String,
  size: {
    type: String,
    validator (val) {
      return ['large', 'small', 'mini'].includes(val)
    }
  },
  square: Boolean
})
const textColor = () => {
  return props.type === 'default' ? '#333' : '#fff'
}
const isClass = () => {
  return [
    'tyh-button',
    `tyh-button-${props.type}`,
    props.disabled ? `tyh-button-disabled-${props.type}` : '',
    props.size ? `tyh-button-size-${props.size}` : '',
    {
      'tyh-button-round': props.round,
      'tyh-button-square': props.square
    }
  ]
}
</script>
