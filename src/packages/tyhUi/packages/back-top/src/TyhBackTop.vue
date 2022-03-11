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

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { prop } from './prop'
const props = defineProps({ ...prop })
const { isShow, toTop } = TyhBackTop()

function TyhBackTop() {
  const isShow = ref(false)

  const handleScroll = () => {
    let timer: any = null
    return function () {
      if (timer !== null) {
        clearTimeout(timer)
      }
      timer = setTimeout((): void => {
        let scrollTop = document.documentElement.scrollTop
        scrollTop > props.beyond
          ? (isShow.value = true)
          : (isShow.value = false)
      }, 188)
    }
  }

  const toTop = (): void => scrollTo({ top: 0, behavior: props.behavior })

  onMounted(() => addEventListener('scroll', handleScroll()))

  return { isShow, toTop }
}
</script>
