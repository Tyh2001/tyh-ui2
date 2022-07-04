<template>
  <div class="tyh-collapse">
    <slot />
  </div>
</template>

<script lang="ts" setup name="TyhCollapse">
  import { provide } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  provide('modelValue', prop.modelValue)
</script>
