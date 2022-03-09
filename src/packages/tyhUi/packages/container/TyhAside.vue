<template>
  <aside class="tyh-aside" :style="[{ width }]"><slot /></aside>
</template>

<script>
export default { name: 'TyhAside' }
</script>

<script setup>
defineProps({
  width: {
    type: String,
    default: '200px'
  }
})
</script>
