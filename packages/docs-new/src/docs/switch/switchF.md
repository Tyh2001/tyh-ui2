```html
<template>
  <tyh-switch v-model="value7" :width="60" />
</template>

<script setup>
  import { ref } from 'vue'
  const value7 = ref(true)
</script>
```

## Attributes

| 参数       | 说明           | 类型    | 可选值 | 默认值  |
| ---------- | -------------- | ------- | ------ | ------- |
| v-model    | 绑定的值       | boolean | ——     | true    |
| closeColor | 关闭的颜色     | string  | ——     | #dcdfe6 |
| openColor  | 开启的颜色     | string  | ——     | #3a6ff4 |
| closeText  | 左侧的文字描述 | string  | ——     | ——      |
| openText   | 右侧的文字描述 | string  | ——     | ——      |
| disabled   | 是否禁用       | boolean | ——     | false   |
| width      | 开关尺寸       | number  | ——     | 40      |

## Events

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/table">
    Table 表格
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/calendar">
    Calendar 日历
  </tyh-turn-page-item>
</tyh-turn-page>
