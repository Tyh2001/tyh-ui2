# List 列表

## 基本使用

列表的基本使用

content 属性可以绑定需要展示的数组元素

keys 属性可以绑定数组中每个元素的键值

<tyh-list :content="arr" keys="name" />

```html
<template>
  <tyh-list :content="arr" keys="name" />
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

## 配置表头和页脚

header 表头内容

footer 页脚内容

<tyh-list :content="arr" keys="name" header="这是头部" footer="这是页脚" />

```html
<template>
  <tyh-list :content="arr" keys="name" header="这是头部" footer="这是页脚" />
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

## 斑马纹

zebra 是否显示斑马纹

num 是否显示序号

<tyh-list zebra num :content="arr" keys="name" header="这是头部" footer="这是页脚"  />

```html
<template>
  <tyh-list
    zebra
    num
    :content="arr"
    keys="name"
    header="这是头部"
    footer="这是页脚"
  />
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

## hover 状态展示投影

hoverShow 配置 Hover 状态展示投影

<tyh-list hoverShow :content="arr" keys="name" />

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
