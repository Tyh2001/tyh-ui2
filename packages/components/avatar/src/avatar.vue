<script lang="ts" setup name="TyhAvatar">
  import { ref, computed } from 'vue'
  import { Props } from './props'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(['error', 'load'])

  const isError = ref<boolean>(false)

  const onError = (): void => {
    emit('error')
    isError.value = true
  }

  const isSize = computed((): CSSProperties => {
    return {
      width: `${prop.size * 10}px`,
      height: `${prop.size * 10}px`
    }
  })

  const errorClass = computed((): (string | object)[] => {
    return ['tyh-avatar-error', { 'tyh-avatar-round': prop.round }]
  })

  const successClass = computed((): object[] => {
    return [
      {
        [`tyh-avatar-${prop.fit}`]: prop.fit,
        'tyh-avatar-round': prop.round,
        'tyh-avatar-border': prop.border,
        'tyh-avatar-select': prop.select
      }
    ]
  })
</script>

<template>
  <div class="tyh-avatar">
    <div v-if="isError" :class="errorClass" :style="isSize">
      <slot name="error">
        <i :class="['tyh-icon', errorIcon || 'tyh-ui-user']" />
      </slot>
    </div>
    <img
      v-else
      :draggable="draggable"
      :class="successClass"
      :style="isSize"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="emit('load')"
    >
  </div>
</template>
