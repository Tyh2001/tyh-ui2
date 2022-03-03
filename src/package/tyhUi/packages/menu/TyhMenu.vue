<template>
  <div
    class="tyh-menu"
    :style="[{ background }]"
    :class="{ 'tyh-menu-bottom-shadow': shadow }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  background: {
    type: String,
    default: '#545c64'
  },
  shadow: Boolean
})
</script>
