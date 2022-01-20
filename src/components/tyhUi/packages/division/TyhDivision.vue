<template>
  <div class="tyh-division" :style="[{ margin: `${margin}px 0` }]">
    <span
      :class="['tyh-division-text', `tyh-division-text-${position}`]"
      :style="[{ color }]"
    >
      <slot />
    </span>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    default: 'left',
    validator (val) {
      return ['left', 'center', 'right'].includes(val)
    }
  },
  color: {
    type: String,
    default: '#515a6e'
  },
  margin: {
    type: Number,
    default: 25
  }
})
</script>
