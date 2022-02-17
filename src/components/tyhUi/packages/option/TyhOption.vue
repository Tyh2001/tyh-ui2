<template>
  <option :value="value">
    <span>
      <slot />
    </span>
  </option>
</template>

<script setup>
const props = defineProps({
  value: String
})

function sendVal () {
  console.log(props.value)
}
</script>

<style scoped src="./style/index.css">
</style>
