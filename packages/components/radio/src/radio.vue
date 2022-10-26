<script lang="ts" setup name="TyhRadio">
  import { computed } from 'vue'
  import { Props } from './props'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(['update:modelValue', 'change'])

  const proxy = new Proxy(prop, {
    set () {
      return true
    }
  })

  const input = (e: Event): void => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
    emit('change', (e.target as HTMLInputElement).value)
  }

  const isLabel = computed((): boolean => prop.modelValue === prop.label)

  const isClass = computed((): string[] => {
    return [
      'tyh-radio-o',
      isLabel.value
        ? prop.disabled
          ? 'tyh-radio-disabled'
          : 'tyh-radio-hig'
        : ''
    ]
  })

  const isStyle = computed((): CSSProperties => {
    return {
      color: isLabel.value
        ? prop.disabled
          ? '#b6b5b5'
          : '#3a6ff4'
        : prop.disabled
        ? '#b6b5b5'
        : '#333'
    } as const
  })

  const labelStyle = computed((): CSSProperties => {
    return {
      cursor: prop.disabled ? 'no-drop' : 'pointer',
      border: prop.border
        ? ` 1px solid ${
            isLabel.value ? (prop.disabled ? '#b6b5b5' : '#3a6ff4') : '#b6b5b5'
          }`
        : ''
    }
  })
</script>

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
      >
    </span>
    <span class="tyh-radio-text" :style="isStyle">
      <slot />
    </span>
  </label>
</template>
