<template>
  <!-- 
    multiple 是否允许多选
    size 可见的行数
  -->
  <tyh-select v-model="value2">
    <tyh-option value="1">第一个</tyh-option>
    <tyh-option value="2">第二个</tyh-option>
    <tyh-option value="3">第三个</tyh-option>
    <tyh-option value="4">第四个</tyh-option>
  </tyh-select>

  <!-- <tyh-select v-model="value2">
    <tyh-option value="1">第一个</tyh-option>
    <tyh-option value="2">第二个</tyh-option>
    <tyh-option value="3">第三个</tyh-option>
    <tyh-option value="4">第四个</tyh-option>
  </tyh-select> -->
  <!-- <br /> -->
  <!-- <tyh-input v-model="text1" /> -->
  <!-- <el-select v-model="value" placeholder="请选择"> -->
    <!-- <el-option label="123" value="1232">
    1
    </el-option> -->
  <!-- </el-select> -->
</template>

<script setup>
import { ref, nextTick, reactive } from 'vue'
const value = ref('')
const value2 = ref('2')
function aaa (e) {
  console.log(e)
}
const data =
  [
    {
      value: '选项1',
      label: '黄金糕'
    },
    {
      value: '选项2',
      label: '双皮奶'
    },
    {
      value: '选项3',
      label: '蚵仔煎'
    },
    {
      value: '选项4',
      label: '龙须面'
    },
    {
      value: '选项5',
      label: '北京烤鸭'
    }
  ]
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
