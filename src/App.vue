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
  <tyh-textarea v-model="value" resize="vertical" autofocus @onblur="fun" />
</template>

<script setup>
import { ref, nextTick } from 'vue'
const value = ref('')
function fun () {
  console.log('123')
}
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
