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
