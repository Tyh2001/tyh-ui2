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

<script lang="ts" setup name="TyhInput">
  import { ref, computed } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  const emit = defineEmits([
    'update:modelValue',
    'clear',
    'enter',
    'onblur',
    'onfocus'
  ])

  const inputType = ref<string>(prop.type)
  const isPass = ref<boolean>(false)

  const input = (e: Event): void => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }

  const clearText = (): void => {
    if (prop.disabled) return
    emit('update:modelValue', '')
    emit('clear')
  }

  const isClass = computed((): (string | object)[] => {
    return [
      'tyh-input-input',
      `tyh-input-input-${prop.size}`,
      {
        'tyh-input-icon-padding': prop.icon,
        'tyh-input-clear-padding': prop.clear,
        'tyh-input-disabled': prop.disabled
      }
    ]
  })

  const showPasswordClick = (): void => {
    isPass.value = !isPass.value
    inputType.value = isPass.value ? 'text' : 'password'
  }

  const isIcon = computed((): boolean => {
    return prop.clear ? (prop.showPassword ? true : false) : true
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
