```html
<template>
  <tyh-page-header title="返回上一层" content="详情页面" @back="goBack" />
</template>

<script setup>
  const goBack = () => console.log('goBack')
</script>
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

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/tree">
    Tree 树形控件
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/info">
    Info 信息栏
  </tyh-turn-page-item>
</tyh-turn-page>
