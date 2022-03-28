<template>
  <section :class="isClass"><slot /></section>
</template>

<script setup>
import { computed, useSlots } from 'vue'
const props = defineProps({
  direction: {
    type: String,
    validator(v) {
      return ['horizontal', 'vertical'].includes(v)
    }
  }
})
const { isClass } = TyhContainer()
function TyhContainer() {
  const slots = useSlots()
  const isMode = computed(() => {
    if (props.direction === 'vertical') {
      return true
    } else if (props.direction === 'horizontal') {
      return false
    }
    if (slots && slots.default) {
      return slots.default().some(n => {
        const tag = n.type && n.type.name
        return tag === 'TyhHeader' || tag === 'TyhFooter'
      })
    }
    return false
  })
  const isClass = computed(() => [
    'tyh-container',
    !isMode.value ? 'tyh-container-vertical' : 'tyh-container-horizontal'
  ])
  return { isClass }
}
</script>
