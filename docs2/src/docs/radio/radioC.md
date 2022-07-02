```html
<template>
  <tyh-radio v-model="radio2" disabled label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项3">备选项3</tyh-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio2 = ref('备选项2')
</script>
```

## 带有边框

border 属性可以配置边框
