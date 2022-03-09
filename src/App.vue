<template>
  <button @click="show = true">Toggle render</button>
  <tyh-dialog v-model="show" width="45%" title="这是标题" appendToBody>
    哈哈
    <template v-slot:footer>
      <tyh-button type="primary">主要按钮</tyh-button>
      <tyh-button type="success">成功按钮</tyh-button>
    </template>
  </tyh-dialog>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const show2 = ref(false)
</script>

<style scoped>
</style>
