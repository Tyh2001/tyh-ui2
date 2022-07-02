```html
<template>
  <tyh-rate v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue'
  const value1 = ref(2)
</script>
```

## 配置颜色

color 属性可以配置选中的 icon 颜色

voidColor 属性可以配置未选中的 icon 颜色
