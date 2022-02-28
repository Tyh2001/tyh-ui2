<template>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
</template>

<script setup>
// import { ref } from 'vue'
// import TyhMessage from 'tyh-ui2/packages/message'
// import TyhMessage from './components/tyhUi/packages/message/index'
// import Message from './components/demo/Message/'
// const text8 = ref('')
// const text11 = ref('')
import { Message } from './components/tyhUi/packages/message'

// console.log(Message)
function change2 () {
  Message({
    message: '恭喜你，这是一条成功消息',
    type: 'success'
  })
}
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
