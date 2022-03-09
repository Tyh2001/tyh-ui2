<template>
  <i :class="[`tyh-icon`, icon]" :style="{ color, fontSize: `${size}px` }" />
</template>

<script setup>
defineProps({
  icon: String,
  color: String,
  size: {
    type: [Number, String],
    default: '16'
  }
})
</script>
