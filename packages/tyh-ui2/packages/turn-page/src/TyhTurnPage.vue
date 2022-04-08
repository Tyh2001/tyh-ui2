<template>
  <div class="tyh-turn-page"><slot /></div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { turnPageProps } from './props.ts'
const props = defineProps(turnPageProps)

provide('is-center', props.center)
</script>
