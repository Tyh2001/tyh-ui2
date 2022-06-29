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
