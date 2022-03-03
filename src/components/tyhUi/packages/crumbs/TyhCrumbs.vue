<template>
  <div class="tyh-crumbs"><slot /></div>
</template>

<script setup>
import { provide } from 'vue'
const props = defineProps({
  separator: {
    type: String,
    default: 'tyh-ui-xiexian'
  }
})
provide('Crumbs-separator', props.separator)
</script>
