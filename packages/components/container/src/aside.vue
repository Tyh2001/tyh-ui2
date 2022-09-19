<script lang="ts">
  export default { name: 'TyhAside' }
</script>

<script lang="ts" setup>
  defineProps({
    width: {
      type: String,
      default: () => '200px'
    }
  } as const)
</script>

<template>
  <aside class="tyh-aside" :style="{ width }">
    <slot />
  </aside>
</template>
