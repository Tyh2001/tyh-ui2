```html
<template>
  <tyh-radio v-model="radio4" label="备选项1" border size="large">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="large">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="large">
    备选项3
  </tyh-radio>

  <tyh-radio v-model="radio4" label="备选项1" border size="medium">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="medium">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="medium">
    备选项3
  </tyh-radio>

  <tyh-radio v-model="radio4" label="备选项1" border size="small">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="small">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="small">
    备选项3
  </tyh-radio>

  <tyh-radio v-model="radio4" label="备选项1" border size="mini">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="mini">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="mini">
    备选项3
  </tyh-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio4 = ref('备选项1')
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

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/calendar">
    Calendar 日历
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/tree">
    Tree 树形控件
  </tyh-turn-page-item>
</tyh-turn-page>
