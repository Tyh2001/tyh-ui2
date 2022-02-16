<template>
  <option :value="value">
    <slot />
  </option>
</template>

<script setup>
const props = defineProps({
  value: String
})
</script>

<style scoped src="./style/index.css">
</style>
