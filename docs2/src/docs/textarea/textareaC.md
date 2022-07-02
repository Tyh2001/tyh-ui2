```html
<template>
  <tyh-textarea v-model="value7" />
  <tyh-textarea v-model="value8" resize="vertical" />
  <tyh-textarea v-model="value9" resize="horizontal" />
  <tyh-textarea v-model="value10" resize="none" />
</template>

<script setup>
  import { ref } from 'vue'
  const value7 = ref('随意拉伸')
  const value8 = ref('只能纵向拉伸')
  const value9 = ref('只能横向拉伸')
  const value10 = ref('禁止拉伸')
</script>
```

## 不同尺寸

rows 属性可以配置文本域的行数

cols 属性可以配置文本域的宽度
