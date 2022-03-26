```html
<template>
  <tyh-textarea v-model="value3" rows="5" />
  <tyh-textarea v-model="value4" cols="10" />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref('')
  const value4 = ref('')
</script>
```

## 禁用状态

disabled 属性可以配置文本域禁用状态
