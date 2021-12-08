<template>
  <a
    :class="isClass()"
    :style="[underline ? 'text-decoration: none' : '']"
    :href="prohibit ? 'javascript:void(0)' : url"
    :target="target"
  >
    <tyh-icon
      v-if="icon"
      size="15"
      style="margin-right: 3px"
      :icon="icon"
      :color="iconColor()"
    />
    <slot />
  </a>
</template>

<script setup>
const ICON_COLOR = {
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
  prohibit: Boolean,
  url: String,
  underline: {
    type: Boolean,
    default: true
  },
  target: String,
  icon: String
})
const isClass = () => {
  return [
    'tyh-link',
    `tyh-link-${props.type}`,
    props.prohibit ? `tyh-link-prohibit-${props.type}` : '',
  ]
}
const iconColor = () => {
  return ICON_COLOR[props.type]
}
</script>
