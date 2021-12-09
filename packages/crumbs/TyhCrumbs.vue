<template>
  <div class="tyh-crumbs">
    <slot />
  </div>
</template>

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
