<template>
  <label
    :class="[
      'tyh-radio',
      {
        [`tyh-radio-${size}`]: border,
        'tyh-radio-border': border
      }
    ]"
    :style="labelStyle"
  >
    <span :class="isClass">
      <input
        v-model="proxy.modelValue"
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

<script lang="ts" setup>
import { computed } from 'vue'
import { radioProps } from './props.ts'

const props = defineProps(radioProps)
const emits = defineEmits(['update:modelValue', 'change'])

const { proxy, input, isClass, isStyle, labelStyle } = TyhRadio()
function TyhRadio() {
  const proxy = new Proxy(props, {
    set() {
      return true
    }
  })

  const input = (e: any): void => {
    emits('update:modelValue', e.target.value)
    emits('change', e.target.value)
  }

  const isLabel = computed((): boolean => props.modelValue === props.label)

  const isClass = computed((): string[] => {
    return [
      'tyh-radio-o',
      isLabel.value
        ? props.disabled
          ? 'tyh-radio-disabled'
          : 'tyh-radio-hig'
        : ''
    ]
  })

  const isStyle = computed((): object[] => {
    return [
      {
        color: isLabel.value
          ? props.disabled
            ? '#b6b5b5'
            : '#3a6ff4'
          : props.disabled
          ? '#b6b5b5'
          : '#333'
      }
    ]
  })

  const labelStyle = computed((): object | boolean[] => {
    return [
      { cursor: props.disabled ? 'no-drop' : 'pointer' },
      props.border &&
        `border: 1px solid ${
          isLabel.value ? (props.disabled ? '#b6b5b5' : '#3a6ff4') : '#b6b5b5'
        }`
    ]
  })

  return { proxy, input, isClass, isStyle, labelStyle }
}
</script>
