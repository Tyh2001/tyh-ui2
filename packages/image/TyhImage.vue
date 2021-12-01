<template>
  <div class="tyh-image">
    <img
      :class="[`tyh-image-${fit}`]"
      :style="[{ width, height }]"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  fit: {
    type: String,
    validator (value) {
      return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value)
    }
  },
  width: String,
  height: String
})
</script>
