<script lang="ts" setup name="TyhCrumbs">
  import { provide } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  provide('Crumbs-separator', prop.separator)
</script>

<template>
  <div class="tyh-crumbs">
    <slot />
  </div>
</template>
