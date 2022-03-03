<template>
  <button :class="isClass" :disabled="disabled">
    <tyh-icon v-if="icon" :icon="icon" :color="textColor" size="14" />
    <span v-if="$slots.default" :style="[{ color: textColor }]">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator (v) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(v)
    }
  },
  round: Boolean,
  disabled: Boolean,
  icon: String,
  size: {
    type: String,
    validator (v) {
      return ['large', 'small', 'mini'].includes(v)
    }
  },
  square: Boolean,
  simple: Boolean
})

const { textColor, isClass } = _TyhButton()
function _TyhButton () {
  const THEME = {
    primary: '#3a6ff4',
    success: '#54c600',
    danger: '#d10f1b',
    warning: '#fbcc30',
    default: '#3f536e'
  }

  const textColor = computed(() => {
    if (props.simple) return THEME[props.type]
    return props.type === 'default' || !props.type ? '#333' : '#fff'
  })

  const isClass = computed(() => {
    return [
      'tyh-button',
      props.simple
        ? props.disabled ? `tyh-button-simple-disabled-${props.type}` : `tyh-button-simple-${props.type}`
        : props.disabled ? `tyh-button-disabled-${props.type}` : `tyh-button-${props.type}`,
      {
        [`tyh-button-size-${props.size}`]: props.size,
        'tyh-button-round': props.round,
        'tyh-button-square': props.square
      }
    ]
  })

  return { textColor, isClass }
}
</script>

<style scoped src="./style/index.css">
</style>
