<template>
  <select class="tyh-select" v-model="modelValue" name="">
    <slot />
  </select>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [Number, Array]
  }
})
</script>

<style scoped src="./style/index.css">
</style>
