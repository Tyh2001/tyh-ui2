```html
<template>
  <tyh-rate v-model="value2" />
  <tyh-rate v-model="value2" color="red" voidColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue'
  const value2 = ref(2)
</script>
```

## 辅助文字

showText 属性可以配置是否显示辅助文字

SayText 属性可以配置辅助文字数组
