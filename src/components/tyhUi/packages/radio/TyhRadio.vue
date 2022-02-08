<template>
  <label
    class="tyh-radio"
    role="radio"
    :aria-checked="modelValue === label"
    :aria-disabled="false"
  >
    <span
      :class="['tyh-radio-frame', modelValue === label && 'tyh-radio-frame-is']"
    />
    <input
      hidden
      class="tyh-radio-input"
      type="radio"
      :value="label"
      v-model="modelValue"
      @input="input"
    />
    <span class="tyh-radio-label">
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
  name: String
})
const emits = defineEmits(['update:modelValue'])

const input = evt => emits('update:modelValue', evt.target.value)
</script>

<style scoped src="./style/index.css"></style>
