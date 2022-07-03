<template>
  <div class="tyh-collapse">
    <slot />
  </div>
</template>

<script lang="ts" setup name="TyhCollapse">
  import { provide } from 'vue'
  import { collapseProps } from './props'

  const props = defineProps(collapseProps)
  provide('modelValue', props.modelValue)
</script>
