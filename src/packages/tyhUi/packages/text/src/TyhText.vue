<template>
  <span
    :class="[
      'tyh-text',
      {
        [`tyh-text-${type}`]: type,
        'tyh-text-block': block
      }
    ]"
    :style="{ color, fontSize: `${size}px` }"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { prop } from './prop'
defineProps({ ...prop })
</script>
