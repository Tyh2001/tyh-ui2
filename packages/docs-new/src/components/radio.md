# Radio 单选框

## 基本使用

Radio 的基本使用

label 属性可配置 Radio 的 value

<tyh-radio v-model="radio1" label="备选项1">备选项 1</tyh-radio>
<tyh-radio v-model="radio1" label="备选项2">备选项 2</tyh-radio>
<tyh-radio v-model="radio1" label="备选项3">备选项 3</tyh-radio>

```html
<template>
  <tyh-radio v-model="radio1" label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项3">备选项3</tyh-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio1 = ref('备选项1')
</script>
```

## Attributes

| 参数     | 说明           | 类型    | 可选值                        | 默认值 |
| -------- | -------------- | ------- | ----------------------------- | ------ |
| v-mod    | 绑定的值       | string  | ——                            | ——     |
| label    | Radio 的 value | string  | ——                            | ——     |
| name     | 原生 name 属性 | string  | ——                            | ——     |
| disabled | 是否禁用       | boolean | ——                            | false  |
| Boole    | 是否显示边框   | boolean | ——                            | false  |
| size     | 大小尺寸       | string  | large / medium / small / mini | large  |

## Events

| 事件名称 | 说明              | 回调参数 |
| -------- | ----------------- | -------- |
| change   | 改变 Radio 时触发 | 选中的值 |

<script setup>
  import { ref } from 'vue'
  const radio1 = ref('备选项1')
  const radio2 = ref('备选项2')
  const radio3 = ref('备选项3')
  const radio4 = ref('备选项1')
</script>
