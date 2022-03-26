```html
<template>
  <tyh-button type="primary" @click="open3 = true">点我打开</tyh-button>

  <tyh-drawer v-model="open3" direction="right" size="50%">
    <tyh-button type="primary" @click="open4 = true">点我打开内层</tyh-button>
    hello，欢迎使用 tyh-ui!
    <tyh-drawer v-model="open4" direction="right"> 这是内层的 </tyh-drawer>
  </tyh-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const open3 = ref(false)
  const open4 = ref(false)
</script>
```

## Attributes

| 参数         | 说明                   | 类型    | 可选值                      | 默认值 |
| ------------ | ---------------------- | ------- | --------------------------- | ------ |
| v-model      | 绑定值                 | boolean | ——                          | false  |
| direction    | 弹出方向               | string  | top / left / bottom / right | right  |
| size         | 宽度或高度             | string  | ——                          | 30%    |
| title        | 标题                   | string  | ——                          | ——     |
| appendToBody | 是否镶嵌到 body 上     | boolean | ——                          | false  |
| modal        | 是否显示遮罩层         | boolean | ——                          | true   |
| modalClose   | 点击遮罩层是否可以关闭 | boolean | ——                          | true   |
| showClose    | 是否显示关闭按钮       | boolean | ——                          | true   |
| showHeader   | 是否显示头部信息       | boolean | ——                          | true   |
| zIndex       | z-index 属性           | number  | ——                          | 3500   |

## Events

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| open     | 打开时的回调         | ——       |
| onOpen   | 打开动画结束时的回调 | ——       |
| close    | 关闭时的回调         | ——       |
| onClose  | 关闭动画结束时的回调 | ——       |

## Slots

| 插槽名称 | 说明说明   |
| -------- | ---------- |
| title    | 自定义标题 |
| default  | 内容       |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/notification">
    Notification 通知
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/dialog">
    Dialog 对话框
  </tyh-turn-page-item>
</tyh-turn-page>
