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

<script lang="ts" setup name="TyhText">
  import { Props } from './props'
  defineProps(Props)
</script>
