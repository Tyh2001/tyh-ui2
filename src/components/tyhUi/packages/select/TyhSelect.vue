<template>
  <select class="tyh-select" v-model="modelValue" name="" @input="input">
    <slot />
  </select>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const input = e => emit('update:modelValue', e.target.value)
</script>

<style scoped src="./style/index.css">
</style>
