<template>
  <tyh-button round @click="change">这个是按钮</tyh-button>
  <!-- <tyh-button type="b">这个是按钮</tyh-button>
  <tyh-button type="c" disabled>这个是按钮</tyh-button> -->
</template>

<script setup>
import TyhButton from './page_demo/TyhButton.vue'
function change () {
  alert('你好')
}
</script>

<style scoped>
</style>
