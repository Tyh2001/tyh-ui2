<script lang="ts" setup name="TyhCrumbsItem">
  import { ref, inject } from 'vue'
  import type { Ref } from 'vue'

  const icon: Ref<string> = ref<string>('')
  icon.value = inject('Crumbs-separator') as string
</script>

<template>
  <span class="tyh-crumbs-item">
    <span class="tyh-crumbs-item-text">
      <slot />
    </span>
    <i :class="['tyh-icon', icon]" />
  </span>
</template>
