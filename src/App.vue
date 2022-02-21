<template>
  <tyh-tagging>标注1</tyh-tagging>
  <tyh-tagging type="primary">标注2</tyh-tagging>
  <tyh-tagging type="success">标注3</tyh-tagging>
  <tyh-tagging type="danger">标注4</tyh-tagging>
  <tyh-tagging type="warning">标注5</tyh-tagging>
</template>

<script setup>
import { ref } from 'vue'
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
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
