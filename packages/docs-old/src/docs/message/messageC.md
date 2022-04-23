```html
<template>
  <tyh-button type="primary" @click="change6">展示5000毫秒</tyh-button>
</template>

<script setup>
  import { Message } from 'tyh-ui2'
  function change6() {
    Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
  }
</script>
```

## 带有 icon

icon 属性可以配置 icon 的类名进行配置
