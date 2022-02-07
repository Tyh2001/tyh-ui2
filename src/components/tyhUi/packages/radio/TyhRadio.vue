<template>
  <input type="radio" :value="value" @input="input" />
  <span>
    <slot />
  </span>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  value: String
})
const emits = defineEmits(['update:modelValue'])

function input (evt) {
  console.log(evt.target.value)
  emits('update:modelValue', evt.target.value)
}

</script>

<style scoped>
</style>
