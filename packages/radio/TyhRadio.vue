<template>
  <input type="radio" name="" id="" v-model="modelValue" :value="label" />
  <slot></slot>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: Number,
  label: String
})
const emit = defineEmits(['update:modelValue'])
const radioValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    changeHandler(value)
  }
})
function changeHandler () {
  emit('update:modelValue', value)
}
console.log(props.modelValue)
</script>

<style scoped src="./style/index.css"></style>
