<template>
  <div class="tyh-page-header">
    <div class="tyh-page-header-title-box" @click="emits('back')">
      <tyh-icon :icon="icon" size="14" />
      <span class="tyh-page-header-title">{{ title }}</span>
    </div>
    <div class="tyh-page-header-content">{{ content }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { pageHeaderProps } from './props.ts'
  defineProps(pageHeaderProps)
  const emits = defineEmits(['back'])
</script>
