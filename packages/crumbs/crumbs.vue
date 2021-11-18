<template>
  <div class="tyh-crumbs">
    <slot></slot>
  </div>
</template>

<script>
export default { name: 'TyhCrumbs' }
</script>

<script setup>
import { provide } from 'vue'
const props = defineProps({
  separator: { // 分隔符
    type: String,
    default: 'tyh-ui-xiexian'
  }
})
provide('Crumbs-separator', props.separator)
</script>
