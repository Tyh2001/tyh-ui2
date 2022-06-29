```html
<template>
  <tyh-radio v-model="radio3" label="备选项1" border>备选项1</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项2" border>备选项2</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项3" border>备选项3</tyh-radio>
</template>

<script setup>
  import { ref } from 'vue'
  const radio3 = ref('备选项3')
</script>
```

## 配置大小

size 属性可以大小，但是必须是带有 border 属性的前提才可以正常工作
