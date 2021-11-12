<template>
  <div class="tyh-turn-page">
    <slot></slot>
  </div>
</template>

<script>
import { provide } from 'vue'
export default {
  name: 'TyhTurnPage',
  props: {
    // 居中显示
    center: {
      type: Boolean,
      required: false
    }
  },
  setup (props) {
    provide('is-center', props.center)
  }
}
</script>
