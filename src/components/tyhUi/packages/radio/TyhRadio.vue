<template>
  <label class="tyh-radio">
    <span
      class="tyh-radio-frame"
      :class="[modelValue === label ? 'tyh-radio-frame-is' : 'tyh-radio-frame']"
    ></span>
    <input
      hidden
      class="tyh-radio-input"
      type="radio"
      :name="name"
      :value="label"
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
  name: {
    type: String,
    default: '1'
  }
})
const emits = defineEmits(['update:modelValue'])

const input = evt => {
  emits('update:modelValue', evt.target.value)
}
</script>

<style scoped src="./style/index.css"></style>
