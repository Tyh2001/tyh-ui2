<template>
  <tyh-switch v-model="value1" />
  <tyh-switch v-model="value1" />
   <tyh-switch v-model="value2" closeText="关闭" openText="开启" />
</template>

<script setup>
import {ref} from 'vue'
const value2 = ref(true)
</script>

<style scoped>
</style>
