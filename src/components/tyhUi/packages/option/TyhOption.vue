<template>
  <option :value="value">
    <span v-if="label">{{ label }}</span>
    <span v-else>
      <slot />
    </span>
  </option>
</template>

<script setup>
const props = defineProps({
  value: String,
  label: String
})
</script>

<style scoped src="./style/index.css">
</style>
