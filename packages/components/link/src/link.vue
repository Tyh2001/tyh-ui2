<script lang="ts" setup name="TyhLink">
  import { computed } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  const isClass = computed((): (string | object)[] => {
    return [
      'tyh-link',
      `tyh-link-${prop.type}`,
      { 'tyh-link-prohibit': prop.prohibit }
    ]
  })
</script>

<template>
  <a
    :class="isClass"
    :style="{ textDecoration: underline ? 'none' : 'underline' }"
    :href="prohibit ? '' : url"
    :target="target"
  >
    <i v-if="icon" :class="['tyh-icon', `tyh-icon-${type}`, icon]" />
    <slot />
  </a>
</template>
