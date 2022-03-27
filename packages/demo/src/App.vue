<template>
  <tyh-button :loading="loading">默认按钮</tyh-button>
  <tyh-button :loading="loading" type="primary">主要按钮</tyh-button>

  <br />
  <tyh-switch v-model="loading" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const loading = ref(true)
function aaa() {
  console.log('12')
}
</script>

<style scoped></style>
