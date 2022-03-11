<template>
  <a
    :class="isClass"
    :style="{ textDecoration: underline ? 'none' : 'underline' }"
    :href="prohibit ? 'javascript:void(0)' : url"
    :target="target"
  >
    <tyh-icon
      v-if="icon"
      size="15"
      :style="[
        'margin-right: 2px',
        { cursor: prohibit ? 'no-drop' : 'pointer' }
      ]"
      :icon="icon"
      :color="THEME[type]"
    />
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { THEME } from '../../utils/theme'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator(v) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(v)
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
const isClass = computed(() => {
  return [
    'tyh-link',
    `tyh-link-${props.type}`,
    { [`tyh-link-prohibit-${props.type}`]: props.prohibit }
  ]
})
</script>
