<template>
  <div class="tyh-crumbs">
    <slot></slot>
  </div>
</template>

<script>
import { provide } from 'vue'
export default {
  name: 'TyhCrumbs',
  props: {
    // 分隔符
    separator: {
      type: String,
      default: 'tyh-ui-xiexian-01'
    }
  },
  setup (props) {
    provide('Crumbs-separator', props.separator)
  }
}
</script>

<style src="../style/index.css" scoped></style>
