<template>
  <input
    v-model="proxy.modelValue"
    type="checkbox"
    :value="label"
    @input="input"
  />
  <span>
    <slot />
  </span>
</template>

<script lang="ts" setup name="TyhCheckbox">
  import { ref } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  const emit = defineEmits(['update:modelValue'])

  const proxy = new Proxy(prop, {
    set(): boolean {
      return true
    }
  })

  const input = (e: Event): void => {
    const model = ref([])
    model.value.push(e.target.value)
    emit('update:modelValue', model.value)
  }
</script>
