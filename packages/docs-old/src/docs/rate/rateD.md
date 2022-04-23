```html
<template>
  <tyh-rate v-model="value3" showText />
  <tyh-rate
    v-model="value3"
    showText
    :sayText="['1星', '2星', '3星', '4星', '5星']"
  />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref(2)
</script>
```

## Attributes

| 参数      | 说明               | 类型    | 可选值 | 默认值                                   |
| --------- | ------------------ | ------- | ------ | ---------------------------------------- |
| v-model   | 绑定值             | number  | ——     | ——                                       |
| color     | 选中的 icon 颜色   | string  | ——     | #fbcc30                                  |
| voidColor | 未选中的 icon 颜色 | string  | ——     | #C6D1DE                                  |
| showText  | 是否显示辅助文字   | boolean | ——     | false                                    |
| sayText   | 自定义辅助文字数组 | boolean | ——     | ['极差', '失望', '一般', '惊喜', '满意'] |

## Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| change   | 分值改变时的回调 | ——       |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/alert">
    Alert 提示
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/image">
    Image 图片
  </tyh-turn-page-item>
</tyh-turn-page>
