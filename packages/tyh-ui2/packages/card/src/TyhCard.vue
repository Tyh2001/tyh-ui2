<template>
  <div :class="['tyh-card', { [`tyh-card-shadow-${shadow}`]: shadow }]">
    <div v-if="$slots.title || $slots.subtitle" class="tyh-card-header">
      <p v-if="$slots.title" class="tyh-card-title">
        <slot name="title" />
      </p>
      <p v-if="$slots.subtitle" class="tyh-card-subtitle">
        <slot name="subtitle" />
      </p>
    </div>
    <div class="tyh-card-body" :style="bodyStyle"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
import { cardProps } from './prop.ts'
defineProps(cardProps)
</script>
