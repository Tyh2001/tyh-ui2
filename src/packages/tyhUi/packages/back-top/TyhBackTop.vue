<template>
  <div
    v-show="backShow"
    class="tyh-back-top"
    :style="{ bottom, right }"
    @click="toTop"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
defineProps({
  bottom: {
    type: String,
    default: '50px'
  },
  right: {
    type: String,
    default: '50px'
  }
})
const { backShow, toTop } = _TyhBackTop()
function _TyhBackTop () {
  const backShow = ref(false)
  const handleScroll = () => {
    let timer = null
    return function () {
      if (timer !== null) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        scrollTop > 100 ? (backShow.value = true) : (backShow.value = false)
      }, 188)
    }
  }
  const toTop = () => {
    let top = document.documentElement.scrollTop || document.body.scrollTop
    const timeTop = setInterval(() => {
      document.body.scrollTop = document.documentElement.scrollTop = top -= 50
      if (top <= 0) {
        clearInterval(timeTop)
      }
    }, 11)
  }
  onMounted(() => window.addEventListener('scroll', handleScroll()))
  return { backShow, toTop }
}
</script>
