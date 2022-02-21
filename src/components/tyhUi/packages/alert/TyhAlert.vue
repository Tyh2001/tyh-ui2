<template>
  <div :class="isClass" :style="isStyle">
    <div class="tyh-alert-message" :style="isMessageStyle">
      <tyh-icon v-if="icon" :icon="icon" :color="COLOR[type]" />
      {{ message }}
    </div>

    <tyh-icon
      v-if="close"
      icon="tyh-ui-guanbi"
      :color="COLOR[type]"
      @click="emit('close')"
    />
  </div>
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
  message: String,
  icon: String,
  close: Boolean,
  center: Boolean,
  simple: Boolean
})
const emit = defineEmits(['close'])

const {
  COLOR,
  isClass,
  isStyle,
  isMessageStyle
} = _TyhAlert()

function _TyhAlert () {
  const BACKGROUND_COLOR = {
    primary: '#e8f4ff',
    success: '#e1ffea',
    danger: '#ffe8e6',
    warning: '#fff1e3',
    default: '#f6f6f6',
  }
  const COLOR = {
    primary: '#3a6ff4',
    success: '#54c600',
    danger: '#d10f1b',
    warning: '#fbcc30',
    default: '#3f536e'
  }
  const isClass = computed(() => {
    return [
      'tyh-alert',
      {
        [`tyh-alert-${props.type}`]: props.type
      }
    ]
  })
  const isStyle = computed(() => {
    return [{
      justifyContent: props.center && 'center',
      background: !props.simple ? BACKGROUND_COLOR[props.type] : ''
    }]
  })
  const isMessageStyle = computed(() => {
    return [{ color: COLOR[props.type] }]
  })
  return {
    COLOR,
    isClass,
    isStyle,
    isMessageStyle
  }
}
</script>
