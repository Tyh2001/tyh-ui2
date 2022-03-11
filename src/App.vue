<template>
  <div style="height: 2000px"></div>
  <tyh-backTop bottom="150px" right="120px" action="smooth">Go</tyh-backTop>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('right')
const open = ref(false)
</script>
