<template>
  <footer class="tyh-footer" :style="{ height }"><slot /></footer>
</template>

<script lang="ts">
export default { name: 'TyhFooter' }
</script>

<script lang="ts" setup>
defineProps({
  height: {
    type: String,
    default: () => '60px'
  }
})
</script>
