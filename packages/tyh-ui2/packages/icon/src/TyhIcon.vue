<template>
  <i :class="[`tyh-icon`, icon]" :style="{ color, fontSize: `${size}px` }" />
</template>

<script lang="ts" setup>
import { iconProps } from './props.ts'
defineProps(iconProps)
</script>
