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
const COLOR = {
  primary: '#3a6ff4',
  success: '#54c600',
  danger: '#d10f1b',
  warning: '#fbcc30',
  default: '#3f536e'
}
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
  square: Boolean,
  simple: Boolean
})
const textColor = () => {
  if (props.simple) return COLOR[props.type]
  return props.type === 'default' || props.type === '' ? '#333' : '#fff'
}
const isClass = () => {
  return [
    'tyh-button',
    props.simple
      ? props.disabled ? `tyh-button-simple-disabled-${props.type}` : `tyh-button-simple-${props.type}`
      : props.disabled ? `tyh-button-disabled-${props.type}` : `tyh-button-${props.type}`,
    props.size ? `tyh-button-size-${props.size}` : '',
    {
      'tyh-button-round': props.round,
      'tyh-button-square': props.square
    }
  ]
}
</script>
