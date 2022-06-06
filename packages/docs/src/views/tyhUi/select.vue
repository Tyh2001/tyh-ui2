<template>
  <select-a v-high />
  <tyh-select v-model="value" placeholder="请选择">
    <tyh-option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
    >
      {{ item.label }}
    </tyh-option>
  </tyh-select>
  <select-b v-high />
</template>

<script setup>
  import selectA from '@/docs/select/selectA.md'
  import selectB from '@/docs/select/selectB.md'
  import { ref } from 'vue'
  const value = ref('选项2')
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
</script>
