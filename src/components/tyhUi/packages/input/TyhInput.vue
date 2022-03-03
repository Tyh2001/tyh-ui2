
<template>
  <div :class="['tyh-input', { 'tyh-input-disabled': disabled }]">
    <tyh-icon
      v-if="icon"
      :class="['tyh-input-icon', `tyh-input-icon-${size}`]"
      :style="[{ cursor: disabled ? 'not-allowed' : 'Default' }]"
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
      v-if="clear || showPassword"
      color="#c7c7c7"
      size="12"
      :class="['tyh-input-clear', `tyh-input-icon-${size}`]"
      :style="[{ cursor: props.disabled ? 'not-allowed' : 'pointer' }]"
      :icon="rightIcon"
      @click="rightIconClick"
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
    validator (v) {
      return ['text', 'password'].includes(v)
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator (v) {
      return ['large', 'medium', 'small', 'mini'].includes(v)
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
  isClass,
  inputType,
  rightIcon,
  rightIconClick
} = _TyhInput()

function _TyhInput () {
  const inputType = ref(props.type)
  const isPass = ref(false)

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

  const showPasswordClick = () => {
    isPass.value = !isPass.value
    inputType.value = isPass.value ? 'text' : 'password'
  }

  const isIcon = computed(() => {
    return props.clear
      ? props.showPassword ? true : false
      : true
  })

  const rightIcon = computed(() => {
    return isIcon.value
      ? isPass.value ? 'tyh-ui-browse' : 'tyh-ui-eye-close'
      : 'tyh-ui-guanbi'
  })

  const rightIconClick = () => {
    isIcon.value ? showPasswordClick() : clearText()
  }

  return {
    input,
    isClass,
    inputType,
    rightIcon,
    rightIconClick
  }
}
</script>
