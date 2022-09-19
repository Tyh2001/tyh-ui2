<script lang="ts" setup name="TyhSelect">
  import { Props } from './props'

  const props = defineProps(Props)

  const emit = defineEmits(['update:modelValue'])
  const proxy = new Proxy(props, {
    set () {
      return true
    }
  })
  const input = (e: Event): void => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>

<template>
  <select
    v-if="$slots.default"
    v-model="proxy.modelValue"
    class="tyh-select"
    :name="name"
    @input="input"
  >
    <slot />
  </select>
</template>
