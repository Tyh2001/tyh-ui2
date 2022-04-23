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
