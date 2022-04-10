<template>
  <div class="tyh-collapse">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { collapseProps } from './props.ts'

const props = defineProps(collapseProps)
provide('modelValue', props.modelValue)
</script>
