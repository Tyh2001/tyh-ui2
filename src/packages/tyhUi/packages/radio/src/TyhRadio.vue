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
import { prop } from './prop'
const props = defineProps({ ...prop })
const emits = defineEmits(['update:modelValue', 'change'])
const { proxy, input, isClass, isStyle, labelStyle } = TyhRadio()

function TyhRadio() {
  const proxy = new Proxy(props, {
    set() {
      return true
    }
  })

  const input = (evt: any) => {
    emits('update:modelValue', evt.target.value)
    emits('change', evt.target.value)
  }
  const isLabel = computed(() => props.modelValue === props.label)
  const isClass = computed(() => {
    return [
      'tyh-radio-o',
      isLabel.value
        ? props.disabled
          ? 'tyh-radio-disabled'
          : 'tyh-radio-hig'
        : ''
    ]
  })
  const isStyle = computed(() => {
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
  const labelStyle = computed(() => {
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
