```html
<template>
  <tyh-button type="primary" @click="change8">点击提示</tyh-button>
</template>

<script setup>
  import { Message } from 'tyh-ui2'
  function change8() {
    Message({
      message: '主要提示',
      type: 'primary',
      icon: 'tyh-ui-smile',
      showClose: true
    })
  }
</script>
```

## Attributes

| 参数      | 说明             | 类型    | 可选值                                         | 默认值  |
| --------- | ---------------- | ------- | ---------------------------------------------- | ------- |
| message   | 显示文字         | string  | ——                                             | ——      |
| type      | 提示框的类型     | string  | default / primary / success / danger / warning | default |
| time      | 展示的时间       | number  | ——                                             | 2000    |
| icon      | 展示的 icon      | string  | ——                                             | ——      |
| showClose | 是否展示关闭按钮 | boolean | ——                                             | false   |
| offset    | 距离顶部的距离   | number  | ——                                             | 20      |
| round     | 配置圆角         | boolean | ——                                             | false   |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/backtop">
    BackTop 回到顶部
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/skeleton">
    Skeleton 骨架
  </tyh-turn-page-item>
</tyh-turn-page>
