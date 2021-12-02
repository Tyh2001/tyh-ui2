<template>
  <section
    class="tyh-container"
    :class="[flex ? 'tyh-container-flex' : 'tyh-container-noFlex']"
  >
    <slot></slot>
  </section>
</template>

<script setup>
defineProps({
  flex: Boolean
})
</script>
