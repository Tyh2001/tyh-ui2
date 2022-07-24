<template>
  <div class="tyh-collapse-item">
    <div class="tyh-collapse-item-title" @click="changeCollapse">
      {{ title }}
    </div>
    <div class="tyh-collapse-item-content" v-show="isShow">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup name="TyhCollapseItem">
  import { computed, inject } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  const emit = defineEmits(['onChange'])

  const modelValue = inject('modelValue')!

  const isShow = computed((): boolean => {
    return modelValue.indexOf(prop.name) > -1
  })

  const changeCollapse = () => {
    emit('onChange', prop.name)
  }
</script>
