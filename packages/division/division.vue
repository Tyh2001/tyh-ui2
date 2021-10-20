<template>
  <fieldset class="tyh-division">
    <legend class="tyh-division-text" :class="[positionClass]">
      <slot></slot>
    </legend>
  </fieldset>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TyhDivision',
  props: {
    // 文字位置
    position: {
      type: String,
      default: 'left'
    }
  },
  setup (props) {
    // 文字位置
    const positionClass = computed(() => {
      return props.position
        ? `tyh-division-text--${props.position}`
        : 'tyh-division-text--left'
    })

    return {
      positionClass
    }
  }
}
</script>
