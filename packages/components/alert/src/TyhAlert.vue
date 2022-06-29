<template>
  <div :class="isClass">
    <div class="tyh-alert-message">
      <i v-if="icon" :class="['tyh-icon', 'tyh-message-icon', icon]" />
      {{ message }}
    </div>
    <i v-if="close" class="tyh-icon tyh-ui-guanbi" @click="close" />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { alertProps } from './props'

  const props = defineProps(alertProps)
  const emit = defineEmits(['close'])

  const isClass = computed((): (string | object)[] => {
    return [
      'tyh-alert',
      `tyh-alert-${props.type}`,
      {
        'tyh-alert-center': props.center,
        [`tyh-alert-bac-${props.type}`]: !props.simple
      }
    ]
  })

  const close = (): void => emit('close')
</script>
