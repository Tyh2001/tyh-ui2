<template>
  <label
    :class="[
      'tyh-radio',
      border && `tyh-radio-${size}`,
      {
        'tyh-radio-border': border,
      },
    ]"
    :style="labelStyle"
  >
    <span :class="isClass">
      <input
        v-model="modelValue"
        type="radio"
        :name="name"
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
  disabled: Boolean,
  border: Boolean,
  size: {
    type: String,
    default: 'large',
    validator (val) {
      return ['large', 'medium', 'small', 'mini'].includes(val)
    }
  }
})
const emits = defineEmits(['update:modelValue', 'change'])
const { input, isClass, isStyle, labelStyle } = _TyhRadio()

function _TyhRadio () {
  const input = evt => {
    emits('update:modelValue', evt.target.value)
    emits('change', evt.target.value)
  }

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
        : props.disabled ? '#b6b5b5' : '#333'
    }]
  })

  const labelStyle = computed(() => {
    return [
      { cursor: props.disabled ? 'no-drop' : 'pointer' },
      props.border && `border: 1px solid ${props.modelValue === props.label
        ? props.disabled ? '#b6b5b5' : '#3a6ff4'
        : '#b6b5b5'
      }`
    ]
  })

  return { input, isClass, isStyle, labelStyle }
}
</script>
