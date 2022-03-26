```html
<template>
  <tyh-switch v-model="value5" closeColor="red" openColor="green" />
  <tyh-switch v-model="value6" closeColor="black" openColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue'
  const value5 = ref(true)
  const value6 = ref(false)
</script>
```

## 自定义尺寸

width 属性可以自定义开关的尺寸 最小宽度为 20
