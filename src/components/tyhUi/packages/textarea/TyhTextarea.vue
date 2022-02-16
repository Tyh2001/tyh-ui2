
<template>
  <div :class="['tyh-textarea', { 'tyh-textarea-disabled': disabled }]">
    <textarea
      cols="30"
      rows="10"
      :class="isClass"
      :autofocus="autofocus"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      @input="input"
      @keyup.enter="emit('enter')"
      @blur="emit('onblur')"
      @focus="emit('onfocus')"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: String,
  placeholder: String,
  size: {
    type: String,
    default: 'medium',
    validator (val) {
      return ['large', 'medium', 'small', 'mini'].includes(val)
    }
  },
  max: Number,
  disabled: Boolean,
  autofocus: Boolean,
  name: String,
})
const emit = defineEmits(['update:modelValue', 'update:modelValue', 'clear', 'enter', 'onblur', 'onfocus'])

const {
  input,
  isClass
} = _TyhTextarea()

function _TyhTextarea () {
  const input = evt => {
    emit('update:modelValue', evt.target.value)
  }

  const isClass = computed(() => {
    return [
      'tyh-textarea-textarea',
      `tyh-textarea-textarea-${props.size}`,
      {
        'tyh-textarea-icon-padding': props.icon,
        'tyh-textarea-clear-padding': props.clear,
        'tyh-textarea-disabled': props.disabled
      }
    ]
  })

  return {
    input,
    isClass
  }
}
</script>
