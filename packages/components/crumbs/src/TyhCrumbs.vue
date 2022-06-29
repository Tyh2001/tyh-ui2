<template>
  <div class="tyh-crumbs"><slot /></div>
</template>

<script lang="ts" setup>
  import { provide } from 'vue'
  import { crumbsProps } from './props'

  const props = defineProps(crumbsProps)
  provide('Crumbs-separator', props.separator)
</script>
