```html
<template>
  <tyh-input v-model="text1" />
</template>

<script setup>
  import { ref } from 'vue'
  const text1 = ref('')
</script>
```

## 输入框类型

type 属性可以规定文本框类型
