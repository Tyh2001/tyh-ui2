<script lang="ts" setup name="TyhOption">
  import { Props } from './props'
  defineProps(Props)
</script>

<template>
  <option :value="value">
    <span v-if="label">{{ label }}</span>
    <span v-else>
      <slot />
    </span>
  </option>
</template>
