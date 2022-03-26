```html
<template>
  <tyh-calendar v-model="value" />
</template>

<script setup>
  import { ref } from 'vue'
  const value = ref(new Date())
</script>
```

## 定制大小

cellWidth 属性可以配置日期单元格的宽度

最小宽度为 28，如果小于 28 则按照 28 计算
