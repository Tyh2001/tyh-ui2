<template>
  <tyh-calendar v-model="value" />
</template>

<script setup>
const value = new Date()
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
