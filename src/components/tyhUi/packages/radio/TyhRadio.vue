<template>
  <label
    class="tyh-radio"
    :style="{ cursor: disabled ? 'no-drop' : 'pointer' }"
  >
    <span :class="isClass">
      <input
        v-model="modelValue"
        type="radio"
        :value="label"
        :disabled="disabled"
        @input="input"
      />
    </span>
    <span class="tyh-radio-text" :style="isStyle">
      <slot />
    </span>
  </label>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: String,
  name: String,
  disabled: Boolean
})
const emits = defineEmits(['update:modelValue'])

const input = evt => emits('update:modelValue', evt.target.value)

const isClass = computed(() => {
  return [
    'tyh-radio-o',
    props.modelValue === props.label
      ? props.disabled ? 'tyh-radio-disabled' : 'tyh-radio-hig'
      : ''
  ]
})

const isStyle = computed(() => {
  return [{
    color: props.modelValue === props.label
      ? props.disabled ? '#b6b5b5' : '#3a6ff4'
      : '#333'
  }]
})
</script>

<style scoped src="./style/index.css"></style>
