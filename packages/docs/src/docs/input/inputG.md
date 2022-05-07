```html
<template>
  <tyh-input v-model="text10" disabled />
</template>

<script setup>
  import { ref } from 'vue'
  const text10 = ref('')
</script>
```

## 查看密码

showPassword 属性可以配置查看密码按钮，showPassword 优先级大于 clear
