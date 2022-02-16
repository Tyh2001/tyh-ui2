
<template>
  <div :class="['tyh-textarea', { 'tyh-textarea-disabled': disabled }]">
    <textarea
      cols="30"
      :rows="rows"
      :class="isClass"
      :autofocus="autofocus"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :maxlength="max"
      :style="{ resize }"
      @input="input"
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
  max: [Number, String],
  rows: {
    type: [Number, String],
    default: '3'
  },
  cols: {
    type: [Number, String],
  },
  resize: {
    type: String,
    default: 'vertical',
    validator (val) {
      return ['vertical', 'horizontal', 'none', ''].includes(val)
    }
  },
  disabled: Boolean,
  autofocus: Boolean,
  name: String,
})
const emit = defineEmits(['update:modelValue', 'onfocus', 'onblur'])

const { input, isClass } = _TyhTextarea()

function _TyhTextarea () {
  const input = e => emit('update:modelValue', e.target.value)

  const isClass = computed(() => {
    return [
      'tyh-textarea-textarea',
      {
        'tyh-textarea-disabled': props.disabled
      }
    ]
  })

  return { input, isClass }
}
</script>
