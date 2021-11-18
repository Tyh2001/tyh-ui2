<template>
  <div class="tyh-turn-page">
    <slot></slot>
  </div>
</template>

<script>
export default { name: 'TyhTurnPage' }
</script>

<script setup>
import { provide } from 'vue'
const props = defineProps({
  center: Boolean
})
provide('is-center', props.center)
</script>
