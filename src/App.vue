<template>
  <tyh-radio v-model="radio1" label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项3">备选项3</tyh-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio1 = ref('备选项1')
</script>
