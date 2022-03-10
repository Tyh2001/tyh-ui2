<template>
  <div
    v-show="isShow"
    class="tyh-back-top"
    :style="{ bottom, right }"
    @click="toTop"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  bottom: {
    type: String,
    default: '50px'
  },
  right: {
    type: String,
    default: '50px'
  },
  behavior: {
    type: String,
    default: 'smooth',
    validator (v) {
      return ['smooth', 'instant'].includes(v)
    }
  },
  beyond: {
    type: Number,
    default: 100
  }
})
const { isShow, toTop } = _TyhBackTop()
function _TyhBackTop () {
  const isShow = ref(false)
  const handleScroll = () => {
    let timer = null
    return function () {
      if (timer !== null) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        let scrollTop = document.documentElement.scrollTop
        scrollTop > props.beyond ? (isShow.value = true) : (isShow.value = false)
      }, 188)
    }
  }
  const toTop = () => scrollTo({ top: 0, behavior: props.behavior })
  onMounted(() => addEventListener('scroll', handleScroll()))
  return { isShow, toTop }
}
</script>
