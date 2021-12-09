<template>
  <footer class="tyh-footer" :style="[{ height }]">
    <slot />
  </footer>
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: '60px'
  }
})
</script>