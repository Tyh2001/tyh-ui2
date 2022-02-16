<template>
  <option :value="value" @click="onClick">
    <slot />
  </option>
</template>

<script setup>
defineProps({
  value: String
})

function onClick () {
  console.log('12')
}
</script>

<style scoped src="./style/index.css">
</style>
