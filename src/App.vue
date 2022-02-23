<template>
  <!-- <tyh-input v-model="text8" clear /> -->
  <!-- <tyh-input v-model="text8" icon="tyh-ui-electronics" /> -->
  <tyh-input v-model="text8" icon="tyh-ui-electronics" clear />
  <tyh-input v-model="text8" icon="tyh-ui-electronics" showPassword />
  <tyh-input v-model="text8" icon="tyh-ui-electronics" clear showPassword />
  <tyh-input v-model="text11" type="password" showPassword />
  <!-- <tyh-input v-model="text11" /> -->
</template>

<script setup>
import { ref } from 'vue'
const text8 = ref('')
const text11 = ref('')
// import { ref } from 'vue'
// const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
// const fun = (x) => x + 1
// fun(2)
// provide('newValue', '123')
// 图片懒加载简单逻辑
// nextTick(() => {
//   const int = new IntersectionObserver(changes => {
//     changes.forEach(change => {
//       console.log('改变了')
//     })
//   })
//   int.observe(myRef.value)
// })
</script>

<style scoped>
</style>
