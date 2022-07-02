```html
<template>
  <tyh-switch v-model="value2" closeText="关闭" openText="开启" />
</template>

<script setup>
  import { ref } from 'vue'
  const value2 = ref(true)
</script>
```

## 禁用状态

disabled 属性可以配置禁用开关
