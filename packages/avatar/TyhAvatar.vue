<template>
  <div class="tyh-avatar">
    <img
      :draggable="draggable"
      :class="[
        `tyh-avatar-${fit}`,
        {
          'tyh-avatar-round': round,
          'tyh-avatar-border': border,
          'tyh-avatar-select': select
        }
      ]"
      :style="[
        {
          width: `${size * 10}px`,
          height: `${size * 10}px`
        }
      ]"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  size: {
    type: [String, Number],
    default: '8'
  },
  fit: {
    type: String,
    validator (val) {
      return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(val)
    }
  },
  round: Boolean,
  border: Boolean,
  select: Boolean,
  draggable: Boolean
})
</script>
