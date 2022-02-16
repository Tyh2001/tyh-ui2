<template>
  <!-- <tyh-card>
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <h1>这是内容部分1</h1>
    <h1>这是内容部分2</h1>
    <h1>这是内容部分3</h1>
  </tyh-card>

  <div class="text" ref="myRef">获取单个DOM元素</div>
  <div class="text" ref="myRef">获取单个DOM元素</div>
  <div class="text" ref="myRef">获取单个DOM元素</div>
  <div class="text" ref="myRef">获取单个DOM元素</div>
  <div class="text" ref="myRef">获取单个DOM元素</div> -->

  <!-- <textarea name="" id="" cols="30" rows="10" v-model="value"></textarea> -->

  <!-- <tyh-textarea v-model="value2" disabled /> -->
  <tyh-textarea v-model="value7" />
  <tyh-textarea v-model="value8" resize="vertical" />
  <tyh-textarea v-model="value9" resize="horizontal" />
  <tyh-textarea v-model="value10" resize="none" />
</template>

<script setup>
import { ref, nextTick } from 'vue'
const value = ref('')
const value7 = ref('随意拉伸')
const value8 = ref('只能纵向拉伸')
const value9 = ref('只能横向拉伸')
const value10 = ref('禁止拉伸')
function fun () {
  console.log('123')
}
const value2 = ref('哈哈哈哈哈')
// const myRef = ref(null)

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
