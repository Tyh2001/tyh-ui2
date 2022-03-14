<template>
  <select
    v-if="$slots.default"
    class="tyh-select"
    v-model="modelValue"
    :name="name"
    @input="input"
  >
    <slot />
  </select>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: String,
  name: String
})
const emit = defineEmits(['update:modelValue'])
const input = (e: any): void => emit('update:modelValue', e.target.value)
</script>
