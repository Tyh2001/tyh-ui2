<template>
  <select
    v-if="$slots.default"
    class="tyh-select"
    v-model="proxy.modelValue"
    :name="name"
    @input="input"
  >
    <slot />
  </select>
</template>

<script lang="ts" setup>
import { selectProps } from './select.ts'

const props = defineProps(selectProps)

const emit = defineEmits(['update:modelValue'])
const proxy = new Proxy(props, {
  set() {
    return true
  }
})
const input = (e: any): void => emit('update:modelValue', e.target.value)
</script>
