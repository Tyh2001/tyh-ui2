<template>
  <div class="tyh-page-header">
    <div class="tyh-page-header-title-box" @click="emit('back')">
      <tyh-icon :icon="icon" size="14" />
      <span class="tyh-page-header-title">{{ title }}</span>
    </div>
    <div class="tyh-page-header-content">{{ content }}</div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: () => '返回'
  },
  content: String,
  icon: {
    type: String,
    default: () => 'tyh-ui-direction-left'
  }
})
defineEmits(['back'])
</script>
