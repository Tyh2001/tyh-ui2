```html
<template>
  <tyh-button simple @click="open3 = true">点我打开第一层</tyh-button>

  <tyh-dialog v-model="open3" title="这是标题" width="50%">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <tyh-button type="success" @click="open4 = true">打开第二层</tyh-button>
    <tyh-dialog v-model="open4" title="这是标题" top="10vh">
      hi～我是第二层的 dialog 对话框
    </tyh-dialog>
  </tyh-dialog>
</template>

<script setup>
  import { ref } from 'vue'
  const open3 = ref(false)
  const open4 = ref(false)
</script>
```

## Attributes

| 参数         | 说明                   | 类型    | 可选值 | 默认值 |
| ------------ | ---------------------- | ------- | ------ | ------ |
| v-model      | 绑定值                 | boolean | ——     | false  |
| width        | 宽度                   | string  | ——     | 30%    |
| top          | 顶部距离               | string  | ——     | 15vh   |
| title        | 标题                   | string  | ——     | ——     |
| appendToBody | 是否镶嵌到 body 上     | boolean | ——     | false  |
| modal        | 是否显示遮罩层         | boolean | ——     | true   |
| modalClose   | 点击遮罩层是否可以关闭 | boolean | ——     | true   |
| showClose    | 是否显示关闭按钮       | boolean | ——     | true   |
| showHeader   | 是否显示头部信息       | boolean | ——     | true   |
| zIndex       | z-index 属性           | number  | ——     | 3500   |

## Events

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| open     | 打开时的回调         | ——       |
| onOpen   | 打开动画结束时的回调 | ——       |
| close    | 关闭时的回调         | ——       |
| onClose  | 关闭动画结束时的回调 | ——       |

## Slots

| 插槽名称 | 说明说明     |
| -------- | ------------ |
| title    | 自定义标题   |
| footer   | 自定义操作区 |
| default  | 内容         |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/drawer">
    Drawer 抽屉
  </tyh-turn-page-item>
  <!-- <tyh-turn-page-item direction="right" url="/component/rate">
    Rate 评分
  </tyh-turn-page-item> -->
</tyh-turn-page>
