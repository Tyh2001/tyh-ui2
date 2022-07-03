<template>
  <i :class="[`tyh-icon`, icon]" :style="{ color, fontSize: `${size}px` }" />
</template>

<script lang="ts" setup name="TyhIcon">
  import { iconProps } from './props'
  defineProps(iconProps)
</script>
