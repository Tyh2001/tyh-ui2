<template>
  <footer class="tyh-footer" :style="[{ height }]"><slot /></footer>
</template>

<script>
export default { name: 'TyhFooter' }
</script>

<script setup>
defineProps({
  height: {
    type: String,
    default: '60px'
  }
})
</script>
