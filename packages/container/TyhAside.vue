<template>
  <aside class="tyh-aside" :style="[{ width }]">
    <slot></slot>
  </aside>
</template>

<script setup>
defineProps({
  width: String
})
</script>
