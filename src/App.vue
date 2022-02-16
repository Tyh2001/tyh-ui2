<template>
  <!-- 
    multiple 是否允许多选
    size 可见的行数
  -->
  <tyh-select v-model="value">
    <tyh-option value="1">第一个</tyh-option>
    <tyh-option value="2">第二个</tyh-option>
    <tyh-option value="3">第三个</tyh-option>
  </tyh-select>
</template>

<script setup>
import { ref, nextTick, reactive, provide } from 'vue'
const value = ref('2')

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
