<template>
  <section
    :class="[
      'tyh-container',
      flex ? 'tyh-container-flex' : 'tyh-container-noFlex',
      {
        'tyh-container-vertical': isMode
      }
    ]"
  >
    <slot />
  </section>
</template>

<script setup>
import { computed, useSlots } from 'vue'
defineProps({
  flex: Boolean,
  direction: {
    type: String,
    default: 'horizontal',
    validator (v) {
      return ['horizontal', 'vertical'].includes(v)
    }
  }
})
const slots = useSlots()
// slots.default().some(e => {
//    const tag = e.type && e.type.name
//    console.log(tag)
// })
const isMode = computed(() => {
  if (slots && slots.default) {

    return true
    // return slots.default().some((vNode) => {
    //   const tag = vNode.type && vNode.type.name
    //   return tag === 'ElHeader' || tag === 'ElFooter'
    // })
  } else {
    return false
  }
})

console.log(isMode.value)
// nextTick(() => {
//   const node = document.querySelector('.tyh-container')
//   console.log(node)
// })
</script>

<style scoped>
.tyh-container {
  background: skyblue;
}
.tyh-container-noFlex {
  width: 100%;
}
.tyh-container-flex {
  display: flex;
}
</style>
