```html
<template>
  <tyh-switch v-model="value1" />
  <tyh-switch v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(true)
</script>
```

## 文字描述

closeText 属性可以配置左侧的文字

openText 属性可以配置右侧的文字
