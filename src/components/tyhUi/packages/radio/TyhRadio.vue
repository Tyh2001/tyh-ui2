<template>
  <label class="tyh-radio">
    <span
      :class="[
        'tyh-radio-frame',
        modelValue === label && 'tyh-radio-hig',
        {
          'tyh-radio-disabled': disabled,
        },
      ]"
    />
    <input
      :class="['tyh-radio-input']"
      v-model="modelValue"
      hidden
      type="radio"
      :value="label"
      :disabled="disabled"
      @input="input"
    />
    <span
      :class="[
        'tyh-radio-label',
        {
          'tyh-radio-disabled': disabled,
        },
      ]"
      :style="[{ color: modelValue === label ? '#3a6ff4' : '#515a6e' }]"
    >
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
</script>

<style scoped src="./style/index.css"></style>
