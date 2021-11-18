<template>
  <div class="tyh-card" :class="[shadow ? `tyh-card-shadow-${shadow}` : '']">
    <div v-if="!simple" class="tyh-card-header">
      <p class="tyh-card-title">
        <slot name="title"></slot>
      </p>
      <p class="tyh-card-subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>

    <div class="tyh-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default { name: 'TyhCard' }
</script>

<script setup>
defineProps({
  shadow: String, // 阴影显示时机	
  simple: Boolean // 简约卡片
})
</script>
