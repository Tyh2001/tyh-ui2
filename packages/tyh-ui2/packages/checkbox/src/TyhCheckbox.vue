<template>
  <input
    v-model="proxy.modelValue"
    type="checkbox"
    :value="label"
    @input="input"
  />
  <span>
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { checkboxProps } from './checkbox.ts'
const props = defineProps(checkboxProps)
const emit = defineEmits(['update:modelValue'])
const proxy = new Proxy(props, {
  set() {
    return true
  }
})

const input = (e: any): void => {
  const model = ref([])
  model.value.push(e.target.value)
  emit('update:modelValue', model.value)
}
</script>

<style scoped></style>
