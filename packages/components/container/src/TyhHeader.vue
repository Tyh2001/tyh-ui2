<template>
  <header class="tyh-header" :style="{ height }">
    <slot />
  </header>
</template>

<script lang="ts">
  export default { name: 'TyhHeader' }
</script>

<script lang="ts" setup>
  defineProps({
    height: {
      type: String,
      default: () => '60px'
    }
  } as const)
</script>
