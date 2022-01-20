<template>
  <p>adadadada</p>
  <p>adadadada</p>
  <p>adadadada</p>
  <tyh-division>你好</tyh-division>
  <p>adadadada</p>
  <tyh-division position="center">你好</tyh-division>
  <p>adadadada</p>
  <tyh-division position="right" :margin="21" color="red" icon="tyh-ui-githublogo">你好</tyh-division>
</template>

<script setup>
const value = new Date()
import { ref } from 'vue'
const value3 = ref(2)
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
