```html
<template>
  <tyh-button type="primary" @click="open10">4000 毫秒后自动关闭</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
  function open10() {
    Notification({
      title: '提示',
      message: '4000 毫秒后自动关闭',
      time: 4000
    })
  }
</script>
```

## Attributes

| 参数     | 说明             | 类型    | 可选值                                            | 默认值    |
| -------- | ---------------- | ------- | ------------------------------------------------- | --------- |
| title    | 标题             | string  | ——                                                | ——        |
| message  | 提示信息         | string  | ——                                                | ——        |
| type     | 通知类型         | string  | primary / success / danger / warning              | ——        |
| time     | 展示的市场       | number  | ——                                                | 3500      |
| position | 弹出位置         | string  | top-left / top-right / bottom-left / bottom-right | top-right |
| close    | 是否显示关闭按钮 | boolean | ——                                                | true      |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/tagging">
    Tagging 标注
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/drawer">
    Drawer 抽屉
  </tyh-turn-page-item>
</tyh-turn-page>
