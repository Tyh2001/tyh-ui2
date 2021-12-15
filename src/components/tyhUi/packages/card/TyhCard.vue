<template>
  <div :class="['tyh-card', shadow ? `tyh-card-shadow-${shadow}` : '']">
    <div v-if="!simple" class="tyh-card-header">
      <p class="tyh-card-title">
        <slot name="title" />
      </p>
      <p class="tyh-card-subtitle">
        <slot name="subtitle" />
      </p>
    </div>

    <div class="tyh-card-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  shadow: String,
  simple: Boolean
})
</script>
