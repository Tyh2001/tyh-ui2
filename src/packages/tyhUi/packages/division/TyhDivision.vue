<template>
  <div class="tyh-division" :style="{ margin: `${margin} 0` }">
    <span
      :class="['tyh-division-text', `tyh-division-text-${position}`]"
      :style="{ color }"
    >
      <i v-if="icon" :style="{ color }" :class="['tyh-icon', icon]" />
      <slot v-else />
    </span>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    default: 'left',
    validator (v) {
      return ['left', 'center', 'right'].includes(v)
    }
  },
  color: {
    type: String,
    default: '#515a6e'
  },
  margin: {
    type: String,
    default: '25px'
  },
  icon: String
})
</script>
