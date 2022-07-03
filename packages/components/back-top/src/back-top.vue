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

<script lang="ts" setup name="TyhBackTop">
  import { ref, onMounted } from 'vue'
  import { Props } from './props'

  const props = defineProps(Props)

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
    window.scrollTo({
      top: 0,
      behavior: props.action
    })
  }

  onMounted((): void => addEventListener('scroll', handleScroll()))
</script>
