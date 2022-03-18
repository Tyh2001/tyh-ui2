# PageHeader 页头

## 基本使用

PageHeader 的基本使用

title 属性可以配置页头的标题

content 属性可以配置页头的内容

```html
<template>
  <tyh-page-header title="返回上一层" content="详情页面" @back="goBack" />
</template>

<script setup>
  const goBack = () => console.log('goBack')
</script>
```

## 基本使用

PageHeader 的基本使用

title 属性可以配置页头的标题

icon 属性可以配置页头的 icon

```html
<template>
  <tyh-page-header content="详情页面" icon="tyh-ui-close" />
</template>
```

## Attributes

| 参数    | 说明 | 类型   | 可选值 | 默认值                |
| ------- | ---- | ------ | ------ | --------------------- |
| title   | 标题 | string | ——     | 返回                  |
| content | 内容 | string | ——     | ——                    |
| icon    | icon | string | ——     | tyh-ui-direction-left |

## Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| back     | 点击左侧区域触发 | ——       |
