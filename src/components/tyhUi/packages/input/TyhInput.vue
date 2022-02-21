
<template>
  <div :class="['tyh-input', { 'tyh-input-disabled': disabled }]">
    <tyh-icon
      v-if="icon"
      :class="['tyh-input-icon', `tyh-input-icon-${size}`]"
      :style="[
        {
          cursor: disabled ? 'not-allowed' : 'Default'
        }
      ]"
      color="#c7c7c7"
      :icon="icon"
      size="12"
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
    <tyh-icon
      v-if="clear && !showPassword"
      :class="['tyh-input-clear', `tyh-input-icon-${size}`]"
      :style="[
        {
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
      ]"
      color="#c7c7c7"
      icon="tyh-ui-guanbi"
      size="12"
      @click="clearText"
    />
    <tyh-icon
      v-if="showPassword"
      :class="['tyh-input-clear', `tyh-input-icon-${size}`]"
      :style="[
        {
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
      ]"
      color="#c7c7c7"
      :icon="isPass ? 'tyh-ui-browse' : 'tyh-ui-eye-close'"
      size="12"
      @click="showPasswordFn"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator (val) {
      return ['text', 'password'].includes(val)
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator (val) {
      return ['large', 'medium', 'small', 'mini'].includes(val)
    }
  },
  max: [Number, String],
  clear: Boolean,
  icon: String,
  disabled: Boolean,
  autofocus: Boolean,
  name: String,
  showPassword: Boolean
})
const emit = defineEmits(['update:modelValue', 'clear', 'enter', 'onblur', 'onfocus'])

const {
  input,
  clearText,
  isClass,
  inputType,
  isPass,
  showPasswordFn
} = _TyhInput()

function _TyhInput () {
  const input = e => emit('update:modelValue', e.target.value)
  const clearText = () => {
    if (props.disabled) return
    emit('update:modelValue', '')
    emit('clear')
  }
  const isClass = computed(() => {
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
  const inputType = ref(props.type)
  const isPass = ref(false)
  const showPasswordFn = () => {
    isPass.value = !isPass.value
    isPass.value ? inputType.value = 'text' : inputType.value = 'password'
  }

  return {
    input,
    clearText,
    isClass,
    inputType,
    isPass,
    showPasswordFn
  }
}
</script>
