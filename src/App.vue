<template>
  <tyh-card>
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <h1>这是内容部分1</h1>
    <h1>这是内容部分2</h1>
    <h1>这是内容部分3</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
    <h1>这是内容部分4</h1>
  </tyh-card>

  <!-- <tyh-image
    ref="tyh-image"
    width="300px"
    src="https://tianyuhao.cn/tyhui/v3/assets/giraffe.jpg"
  /> -->
  <div class="text" ref="myRef">获取单个DOM元素</div>
  <div class="text" ref="myRef">获取单个DOM元素</div>
  <div class="text" ref="myRef">获取单个DOM元素</div>
  <div class="text" ref="myRef">获取单个DOM元素</div>
  <div class="text" ref="myRef">获取单个DOM元素</div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
const myRef = ref(null)

// console.log(myRef)
nextTick(() => {

  const int = new IntersectionObserver(changes => {
    // console.log(changes[0].target)
    // console.log('改变了')

    changes.forEach(change => {
      // const container = change.target
      console.log('改变了')
    })
  })
  int.observe(myRef.value)
})
</script>

<style scoped>
</style>
