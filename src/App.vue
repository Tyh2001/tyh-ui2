<template>
  <h1>hello</h1>
</template>

<script setup>
// import { ref, nextTick, reactive, provide } from 'vue'
const fun = (x) => x + 1
fun(2)
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
