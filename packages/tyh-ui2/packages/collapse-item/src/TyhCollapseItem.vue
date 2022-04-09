<template>
  <div class="tyh-collapse-item">
    <div class="tyh-collapse-item-title">{{ title }}</div>
    <div class="tyh-collapse-item-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collapseItemProps } from './props.ts'
defineProps(collapseItemProps)
</script>
