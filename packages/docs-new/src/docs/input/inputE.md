```html
<template>
  <tyh-input v-model="text8" clear />
</template>

<script setup>
  import { ref } from 'vue'
  const text8 = ref('')
</script>
```

## 带有 icon

icon 属性可以配置文本框带有其他图标，直接传递 icon 的名字传递即可
