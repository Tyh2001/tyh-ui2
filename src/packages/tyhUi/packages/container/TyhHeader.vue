<template>
  <header class="tyh-header" :style="{ height }"><slot /></header>
</template>

<script>
export default { name: 'TyhHeader' }
</script>

<script setup>
defineProps({
  height: {
    type: String,
    default: '60px'
  }
})
</script>
