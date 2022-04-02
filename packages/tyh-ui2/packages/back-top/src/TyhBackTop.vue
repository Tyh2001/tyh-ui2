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
import { backTopProps } from './backTop'
const props = defineProps(backTopProps)
const { isShow, toTop } = TyhBackTop()

function TyhBackTop() {
  const isShow = ref<boolean>(false)

  const handleScroll = () => {
    let timer: any = null
    return (): void => {
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

  const toTop = (): void => {
    const param: any = {
      top: 0,
      behavior: props.action
    }
    window.scrollTo(param)
  }

  onMounted((): void => addEventListener('scroll', handleScroll()))

  return { isShow, toTop }
}
</script>
