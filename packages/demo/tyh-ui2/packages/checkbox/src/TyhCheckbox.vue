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
import { prop } from './prop'
const props = defineProps(prop)
const emit = defineEmits(['update:modelValue'])
const proxy = new Proxy(props, {
  set() {
    return true
  }
})

const input = e => {
  const model = ref([])
  // console.log(e.target.value)
  model.value.push(e.target.value)
  // console.log(model.value)
  emit('update:modelValue', model.value)
}
</script>

<style scoped></style>
