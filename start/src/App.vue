<template>
  <tyh-collapse v-model="value">
    <tyh-collapse-item title="标题1" name="1">哈哈哈哈</tyh-collapse-item>
    <tyh-collapse-item title="标题2" name="2">哈哈哈哈</tyh-collapse-item>
    <tyh-collapse-item title="标题3" name="3">哈哈哈哈</tyh-collapse-item>
    <tyh-collapse-item title="标题4" name="4">哈哈哈哈</tyh-collapse-item>
  </tyh-collapse>

  <tyh-button>默认按钮</tyh-button>
  <tyh-button type="primary">主要按钮</tyh-button>
  <tyh-button type="success">成功按钮</tyh-button>
  <tyh-button type="danger">危险按钮</tyh-button>
  <tyh-button type="warning">警告按钮</tyh-button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref(['1', '3'])
</script>

<style scoped></style>
