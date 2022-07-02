```html
<template>
  <tyh-tag v-show="show1" isClose @close="show1 = false">标签一</tyh-tag>
  <tyh-tag v-show="show2" type="primary" isClose @close="show2 = false">
    标签二
  </tyh-tag>
  <tyh-tag v-show="show3" type="success" isClose @close="show3 = false">
    标签三
  </tyh-tag>
  <tyh-tag v-show="show4" type="danger" isClose @close="show4 = false">
    标签四
  </tyh-tag>
  <tyh-tag v-show="show5" type="warning" isClose @close="show5 = false">
    标签五
  </tyh-tag>
</template>

<script setup>
  import { ref } from 'vue'
  const show1 = ref(true)
  const show2 = ref(true)
  const show3 = ref(true)
  const show4 = ref(true)
  const show5 = ref(true)
</script>
```

## Attributes

| 参数    | 说明             | 类型    | 可选值                                         | 默认值  |
| ------- | ---------------- | ------- | ---------------------------------------------- | ------- |
| type    | 标签的类型       | string  | default / primary / success / danger / warning | default |
| size    | 标签的尺寸       | string  | — / small / mini                               | ——      |
| round   | 配置圆角显示     | boolean | ——                                             | false   |
| isClose | 是否显示关闭按钮 | boolean | ——                                             | false   |

## Events

| 事件名称 | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| close    | 关闭 Tag 时触发的回调 | ——       |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/card">
    Card 卡片
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/link">
    link 链接
  </tyh-turn-page-item>
</tyh-turn-page>
