<template>
  <div :class="['tyh-input', { 'tyh-input-disabled': disabled }]">
    <i
      v-if="icon"
      :class="['tyh-icon', 'tyh-input-icon', `tyh-input-icon-${size}`, icon]"
      :style="{ cursor: disabled ? 'not-allowed' : 'Default' }"
    />
    <input
      :class="isClass"
      :type="inputType"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="max"
      :disabled="disabled"
      :autofocus="autofocus"
      :name="name"
      @input="input"
      @keyup.enter="emit('enter')"
      @blur="emit('onblur')"
      @focus="emit('onfocus')"
    />
    <i
      v-if="clear || showPassword"
      :class="[
        'tyh-icon',
        'tyh-input-clear',
        `tyh-input-icon-${size}`,
        rightIcon
      ]"
      :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }"
      @click="rightIconClick"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { inputProps } from './props.ts'

const props = defineProps(inputProps)
const emit = defineEmits([
  'update:modelValue',
  'clear',
  'enter',
  'onblur',
  'onfocus'
])

const inputType = ref<string>(props.type)
const isPass = ref<boolean>(false)

const input = (e: any): void => emit('update:modelValue', e.target.value)

const clearText = (): void => {
  if (props.disabled) return
  emit('update:modelValue', '')
  emit('clear')
}

const isClass = computed((): (string | object)[] => {
  return [
    'tyh-input-input',
    `tyh-input-input-${props.size}`,
    {
      'tyh-input-icon-padding': props.icon,
      'tyh-input-clear-padding': props.clear,
      'tyh-input-disabled': props.disabled
    }
  ]
})

const showPasswordClick = (): void => {
  isPass.value = !isPass.value
  inputType.value = isPass.value ? 'text' : 'password'
}

const isIcon = computed((): boolean => {
  return props.clear ? (props.showPassword ? true : false) : true
})

const rightIcon = computed((): string => {
  return isIcon.value
    ? isPass.value
      ? 'tyh-ui-browse'
      : 'tyh-ui-eye-close'
    : 'tyh-ui-guanbi'
})

const rightIconClick = (): void => {
  isIcon.value ? showPasswordClick() : clearText()
}
</script>
