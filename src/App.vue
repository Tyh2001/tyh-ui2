<template>
  <input type="radio" v-model="radio" value="1" />是1
  <input type="radio" v-model="radio" value="2" />是2
  <input type="radio" v-model="radio" value="3" />是3
  <br />
  <tyh-radio v-model="radio2" value="是1">是1</tyh-radio>
  <tyh-radio v-model="radio2" value="否2">是2</tyh-radio>
  <tyh-radio v-model="radio2" value="是3">是3</tyh-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1')
const radio2 = ref('1')
</script>