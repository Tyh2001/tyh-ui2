<template>
  <div :class="isClass()" :style="isStyle()">
    <div class="tyh-alert-message" :style="isMessageStyle()">
      <tyh-icon v-if="icon" :icon="icon" :color="COLOR[type]" />
      {{ message }}
    </div>
    <tyh-icon
      v-if="close"
      icon="tyh-ui-guanbi"
      :color="COLOR[type]"
      @click="closeAlert"
    />
  </div>
</template>

<script setup>
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
const closeAlert = () => {
  emit('close')
}
const isClass = () => {
  return [
    'tyh-alert',
    props.type ? `tyh-alert-${props.type}` : '',
  ]
}
const isStyle = () => {
  return [
    {
      justifyContent: props.center && 'center',
      background: !props.simple ? BACKGROUND_COLOR[props.type] : ''
    }
  ]
}
const isMessageStyle = () => {
  return [
    {
      color: COLOR[props.type]
    }
  ]
}
</script>
