<template>
  <label
    class="tyh-radio"
    :style="{ cursor: disabled ? 'no-drop' : 'pointer' }"
  >
    <span
      :class="[
        'tyh-radio-o',
        modelValue === label
          ? disabled
            ? 'tyh-radio-hig-disabled'
            : 'tyh-radio-hig'
          : '',
        disabled ? 'tyh-radio-disabled' : 'tyh-radio-on',
      ]"
    >
      <input
        v-model="modelValue"
        hidden
        type="radio"
        :value="label"
        :disabled="disabled"
        @input="input"
      />
    </span>
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
