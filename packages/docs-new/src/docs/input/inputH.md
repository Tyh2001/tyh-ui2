```html
<template>
  <tyh-input v-model="text11" type="password" showPassword />
</template>

<script setup>
  import { ref } from 'vue'
  const text11 = ref('')
</script>
```

## Attributes

| 参数        | 说明               | 类型    | 可选值                        | 默认值 |
| ----------- | ------------------ | ------- | ----------------------------- | ------ |
| v-model     | 绑定值             | string  | ——                            | ——     |
| type        | 类型               | string  | text / password               | text   |
| placeholder | 输入框占位文本     | string  | ——                            | ——     |
| size        | 文本框尺寸         | string  | large / medium / small / mini | medium |
| max         | 最大输入上限       | string  | ——                            | ——     |
| clear       | 是否可以清空文本框 | boolean | ——                            | false  |
| icon        | 左侧显示的图标     | string  | ——                            | ——     |
| disabled    | 是否禁用           | boolean | ——                            | false  |
| autofocus   | 是否自动获取焦点   | boolean | ——                            | false  |
| name        | 原生 name 属性     | string  | ——                            | ——     |

## Events

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| clear    | 点击清空按钮触发的回调 | ——       |
| enter    | 按下回车触发的回调     | ——       |
| onblur   | 失去焦点触发的回调     | ——       |
| onfocus  | 获取焦点触发的回调     | ——       |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/link">
    Link 链接
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/menu">
    Menu 导航栏
  </tyh-turn-page-item>
</tyh-turn-page>
