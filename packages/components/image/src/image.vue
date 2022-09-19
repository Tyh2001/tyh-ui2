<script lang="ts" setup name="TyhImage">
  import { ref } from 'vue'
  import { Props } from './props'

  defineProps(Props)
  const emit = defineEmits(['error', 'load'])

  const isError = ref<boolean>(false)
  const onError = (): void => {
    emit('error')
    isError.value = true
  }
</script>

<template>
  <div class="tyh-image">
    <div v-if="isError" class="tyh-image-error">
      <slot name="error">
        <span class="tyh-image-error-text">加载失败</span>
      </slot>
    </div>
    <img
      v-else
      :draggable="draggable"
      :class="[`tyh-image-${fit}`, { 'tyh-image-select': select }]"
      :style="{ width, height }"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="emit('load')"
    >
  </div>
</template>
