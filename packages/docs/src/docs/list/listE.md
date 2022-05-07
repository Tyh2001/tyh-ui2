```html
<template>
  <tyh-list hoverShow :content="arr" keys="name" />
</template>

<script setup>
  const arr = [
    { name: '小明1', age: 11 },
    { name: '小明2', age: 12 },
    { name: '小明3', age: 13 },
    { name: '小明4', age: 14 },
    { name: '小明5', age: 15 },
    { name: '小明6', age: 16 },
    { name: '小明7', age: 17 },
    { name: '小明8', age: 18 }
  ]
</script>
```

## Attributes

| 参数      | 说明               | 类型    | 可选值 | 默认值 |
| --------- | ------------------ | ------- | ------ | ------ |
| header    | 表头信息           | string  | ——     | ——     |
| footer    | 页脚信息           | string  | ——     | ——     |
| content   | 主体内容           | array   | ——     | []     |
| keys      | 循环对象键名       | string  | ——     | ——     |
| zebra     | 是否显示斑马纹     | boolean | ——     | ——     |
| num       | 是否显示序号       | boolean | ——     | false  |
| hoverShow | hover 状态显示阴影 | boolean | ——     | false  |

## Slots

| 插槽名称 | 说明说明       |
| -------- | -------------- |
| header   | 自定义头部内容 |
| footer   | 自定义底部内容 |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/button">
    Button 按钮
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/card">
    Card 卡片
  </tyh-turn-page-item>
</tyh-turn-page>
