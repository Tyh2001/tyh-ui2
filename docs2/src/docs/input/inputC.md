```html
<template>
  <tyh-input type="text" v-model="text2" />
  <tyh-input type="password" v-model="text3" />
</template>

<script setup>
  import { ref } from 'vue'
  const text2 = ref('')
  const text3 = ref('')
</script>
```

## 不同尺寸

size 属性可以配置文本框尺寸
