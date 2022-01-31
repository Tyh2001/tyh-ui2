<template>
  <button :class="isClass" :disabled="disabled">
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'a'
  },
  disabled: Boolean,
  // 圆角按钮
  round: Boolean
})
const isClass = computed(() => {
  return [
    'tyh-button',
    `tyh-button-${props.type}`,
    {
      'tyh-button-disabled': props.disabled,
      'tyh-button-round': props.round,
    },
  ]
})
</script>

<style scoped>
.tyh-button {
  width: 150px;
  height: 35px;
  border: 0;
  cursor: pointer;
  color: #fff;
}
.tyh-button-a {
  background-color: blue;
}
.tyh-button-b {
  background-color: green;
}
.tyh-button-c {
  background-color: red;
}
/* 禁用状态 */
.tyh-button-disabled {
  cursor: no-drop;
  opacity: 0.4;
}
.tyh-button-round {
  border-radius: 30px;
}
</style>
