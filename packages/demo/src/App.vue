<template>
  <tyh-collapse v-model="value">
    <tyh-collapse-item title="标题1" name="1">哈哈哈哈</tyh-collapse-item>
    <tyh-collapse-item title="标题2" name="2">哈哈哈哈</tyh-collapse-item>
    <tyh-collapse-item title="标题3" name="3">哈哈哈哈</tyh-collapse-item>
  </tyh-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(['1', '3'])
</script>

<style scoped></style>
