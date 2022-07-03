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
    />
  </div>
</template>

<script lang="ts" setup name="TyhAvatar">
  import { ref, computed } from 'vue'
  import { Props } from './props'

  const props = defineProps(Props)
  const emit = defineEmits(['error', 'load'])

  const isError = ref<boolean>(false)

  const onError = (): void => {
    emit('error')
    isError.value = true
  }

  const isSize = computed((): object[] => {
    return [
      {
        width: `${props.size * 10}px`,
        height: `${props.size * 10}px`
      }
    ]
  })

  const errorClass = computed((): (string | object)[] => {
    return ['tyh-avatar-error', { 'tyh-avatar-round': props.round }]
  })

  const successClass = computed((): object[] => {
    return [
      {
        [`tyh-avatar-${props.fit}`]: props.fit,
        'tyh-avatar-round': props.round,
        'tyh-avatar-border': props.border,
        'tyh-avatar-select': props.select
      }
    ]
  })
</script>
