```html
<template>
  <tyh-textarea v-model="value6" max="10" />
</template>

<script setup>
  import { ref } from 'vue'
  const value6 = ref('')
</script>
```

## Attributes

| 参数        | 说明             | 类型            | 可选值                       | 默认值 |
| ----------- | ---------------- | --------------- | ---------------------------- | ------ |
| v-model     | 绑定值           | string / number | ——                           | ——     |
| placeholder | 输入框占位文本   | string          | ——                           | ——     |
| max         | 最大输入上限     | string          | ——                           | ——     |
| disabled    | 是否禁用         | boolean         | ——                           | false  |
| autofocus   | 是否自动获取焦点 | boolean         | ——                           | false  |
| name        | 原生 name 属性   | string          | ——                           | ——     |
| resize      | 拉伸方式         | string          | vertical / horizontal / none | ——     |
| rows        | 行数             | string          | ——                           | 3      |
| cols        | 宽度             | string          | ——                           | ——     |

## Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| onblur   | 失去焦点触发的回调 | ——       |
| onfocus  | 获取焦点触发的回调 | ——       |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/info">
    Info 信息栏
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/select">
    Select 选择器
  </tyh-turn-page-item>
</tyh-turn-page>
