# Textarea 文本域

## 基本使用

文本域的基本用法

```html
<template>
  <tyh-textarea v-model="value1" placeholder="请输入内容..." />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref('')
</script>
```

## 拉伸方式

resize 属性可以规定文本域的拉伸方式

```html
<template>
  <tyh-textarea v-model="value7" />
  <tyh-textarea v-model="value8" resize="vertical" />
  <tyh-textarea v-model="value9" resize="horizontal" />
  <tyh-textarea v-model="value10" resize="none" />
</template>

<script setup>
  import { ref } from 'vue'
  const value7 = ref('随意拉伸')
  const value8 = ref('只能纵向拉伸')
  const value9 = ref('只能横向拉伸')
  const value10 = ref('禁止拉伸')
</script>
```

## 不同尺寸

rows 属性可以配置文本域的行数

cols 属性可以配置文本域的宽度

```html
<template>
  <tyh-textarea v-model="value3" rows="5" />
  <tyh-textarea v-model="value4" cols="10" />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref('')
  const value4 = ref('')
</script>
```

## 禁用状态

disabled 属性可以配置文本域禁用状态

```html
<template>
  <tyh-textarea v-model="value5" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const text5 = ref('禁用状态')
</script>
```

## 最大上限

max 属性可以配置文本域输入的最大上限文本

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
