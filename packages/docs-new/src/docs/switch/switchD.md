```html
<template>
  <tyh-switch v-model="value3" disabled />
  <tyh-switch v-model="value4" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const value3 = ref(true)
  const value4 = ref(false)
</script>
```

## 自定义颜色

closeColor 属性可以配置自定义关闭颜色

openColor 属性可以配置自定义开启颜色
