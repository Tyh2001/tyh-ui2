<template>
  <div class="tyh-division" :style="[{ margin: `${margin}px 0` }]">
    <span
      :class="['tyh-division-text', `tyh-division-text-${position}`]"
      :style="[{ color }]"
    >
      <tyh-icon v-if="icon" :color="color" :icon="icon" />
      <slot v-else />
    </span>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    default: 'left',
    validator(v) {
      return ['left', 'center', 'right'].includes(v)
    }
  },
  color: {
    type: String,
    default: '#515a6e'
  },
  margin: {
    type: [Number, String],
    default: '25'
  },
  icon: String
})
</script>
