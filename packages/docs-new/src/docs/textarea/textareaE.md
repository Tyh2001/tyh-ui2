```html
<template>
  <tyh-textarea v-model="value5" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const text5 = ref('禁用状态')
</script>
```

## 最大上限

max 属性可以配置文本域输入的最大上限文本
