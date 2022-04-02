<template>
  <div class="tyh-turn-page"><slot /></div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
const props = defineProps({
  center: Boolean
} as const)
provide('is-center', props.center)
</script>
