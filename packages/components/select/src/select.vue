<template>
  <select
    v-if="$slots.default"
    class="tyh-select"
    v-model="proxy.modelValue"
    :name="name"
    @input="input"
  >
    <slot />
  </select>
</template>

<script lang="ts" setup name="TyhSelect">
  import { Props } from './props'

  const props = defineProps(Props)

  const emit = defineEmits(['update:modelValue'])
  const proxy = new Proxy(props, {
    set() {
      return true
    }
  })
  const input = (e: Event): void => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>
