<template>
  <section
    :class="[
      'tyh-container',
      flex ? 'tyh-container-flex' : 'tyh-container-noFlex'
    ]"
  >
    <slot />
  </section>
</template>

<script setup>
defineProps({
  flex: Boolean
})
</script>
