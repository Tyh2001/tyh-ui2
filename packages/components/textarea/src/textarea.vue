<script lang="ts" setup name="TyhTextarea">
  import { computed } from 'vue'
  import { Props } from './props'

  const props = defineProps(Props)
  const emit = defineEmits(['update:modelValue', 'onfocus', 'onblur'])

  const input = (e: Event): void =>
    emit('update:modelValue', (e.target as HTMLTextAreaElement).value)

  const isClass = computed((): (string | object)[] => {
    return [
      'tyh-textarea-textarea',
      { 'tyh-textarea-disabled': props.disabled }
    ]
  })
</script>

<template>
  <div class="tyh-textarea">
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
