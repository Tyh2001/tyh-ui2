<template>
  <!-- 
    multiple 是否允许多选
    size 可见的行数
  -->
  <tyh-select v-model="value" placeholder="请选择">
    <tyh-option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
    >
      {{ item.label }}
    </tyh-option>
  </tyh-select>

  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup>
import { ref, nextTick, reactive, provide } from 'vue'
const value = ref('选项1')
const options = [
  {
    value: '选项1',
    label: '上海'
  },
  {
    value: '选项2',
    label: '北京'
  },
  {
    value: '选项3',
    label: '杭州'
  },
  {
    value: '选项4',
    label: '天津'
  },
  {
    value: '选项5',
    label: '大连'
  }
]
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
