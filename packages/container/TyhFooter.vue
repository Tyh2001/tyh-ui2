<template>
  <footer class="tyh-footer" :style="[{ height }]">
    <slot></slot>
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