<script lang="ts" setup name="TyhAlert">
  import { computed } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  const emit = defineEmits(['close'])

  const isClass = computed((): object | string[] => {
    const { type, center, simple } = prop

    return [
      'tyh-alert',
      `tyh-alert-${type}`,
      {
        'tyh-alert-center': center,
        [`tyh-alert-bac-${type}`]: !simple
      }
    ]
  })

  const close = (): void => emit('close')
</script>

<template>
  <div :class="isClass">
    <div class="tyh-alert-message">
      <i v-if="icon" :class="['tyh-icon', 'tyh-message-icon', icon]" />
      {{ message }}
    </div>
    <i v-if="close" class="tyh-icon tyh-ui-guanbi" @click="close" />
  </div>
</template>
