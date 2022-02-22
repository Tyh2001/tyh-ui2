<template>
  <p>
    <tyh-tagging type="primary" size="20">tyh-ui</tyh-tagging>
    整体<tyh-tagging type="danger" color="skyblue">非常简洁明了</tyh-tagging>，
    虽没有很多高级的组件，但它是使用最简单的方式达到
    <tyh-tagging type="danger">实用</tyh-tagging>的效果。
  </p>
  <p>
    <tyh-tagging type="danger">
      使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
    </tyh-tagging>
  </p>

  <tyh-tagging>标注1</tyh-tagging>
  <tyh-tagging type="primary">标注2</tyh-tagging>
  <tyh-tagging type="success">标注3</tyh-tagging>
  <tyh-tagging type="danger">标注4</tyh-tagging>
  <tyh-tagging type="warning">标注5</tyh-tagging>
</template>

<script setup>
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
