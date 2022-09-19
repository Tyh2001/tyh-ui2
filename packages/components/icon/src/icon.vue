<script lang="ts" setup name="TyhIcon">
  import { Props } from './props'
  defineProps(Props)
</script>

<template>
  <i :class="[`tyh-icon`, icon]" :style="{ color, fontSize: size }" />
</template>
