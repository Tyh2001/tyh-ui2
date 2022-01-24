<template>
  <div class="tyh-turn-page">
    <slot />
  </div>
</template>

<script setup>
import { provide } from 'vue'
const props = defineProps({
  center: Boolean
})
provide('is-center', props.center)
</script>
