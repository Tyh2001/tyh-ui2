<template>
  <div
    v-show="backShow"
    class="tyh-back-top"
    :style="[{ bottom: `${bottom}px`, right: `${right}px` }]"
    @click="backTop"
  >
    <slot></slot>
  </div>
</template>

<script>
export default { name: 'TyhBackTop' }
</script>

<script setup>
import { ref, onMounted } from 'vue'
defineProps({
  bottom: { // 距离下面的定位距离
    type: String,
    default: '50'
  },
  right: { // 距离右面的定位距离
    type: String,
    default: '50'
  }
})
const backShow = ref(false)
// 监视按钮显示状态
function handleScroll () {
  let timer = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 100 ? backShow.value = true : backShow.value = false
    }, 188)
  }
}
// 点击按钮回到顶部
function backTop () {
  let top = document.documentElement.scrollTop || document.body.scrollTop
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    if (top <= 0) {
      clearInterval(timeTop)
    }
  }, 11)
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll())
})
</script>
