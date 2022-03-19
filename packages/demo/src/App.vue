<template>
  <h1 v-if="num === 1">hello</h1>
  <h2 v-if="num === 2">hello</h2>
  <h3 v-if="num === 3">hello</h3>
  <h4 v-if="num === 4">hello</h4>
  <h5 v-if="num === 5">hello</h5>
  <h6 v-if="num === 6">hello</h6>
</template>

<script lang="ts" setup>
defineProps({
  num: Number
})
</script>

<style scoped></style>
