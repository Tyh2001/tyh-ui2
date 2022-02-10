<template>
  <!-- <tyh-tree :data="data" /> -->
  <tyh-button @click="open2">成功</tyh-button>
</template>

<script setup>
// import { Message } from 'element3'
import Message from './components/demo/Message/index'

function open2 () {
  Message({
    message: '恭喜你，这是一条成功消息',
    type: 'success',
    showClose: true,
    offset:30
  })
}

const data = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
]
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>