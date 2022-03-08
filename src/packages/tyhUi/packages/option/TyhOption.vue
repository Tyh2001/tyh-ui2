<template>
  <option :value="value">
    <span v-if="label">{{ label }}</span>
    <span v-else><slot /></span>
  </option>
</template>

<script setup>
defineProps({
  value: String,
  label: String
})
</script>
