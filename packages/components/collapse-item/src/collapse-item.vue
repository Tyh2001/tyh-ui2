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
  import { collapseItemProps } from './props'

  const props = defineProps(collapseItemProps)
  const emit = defineEmits(['onChange'])
  const modelValue: any = inject('modelValue')

  const isShow = computed((): boolean => {
    return modelValue.indexOf(props.name) > -1
  })

  const changeCollapse = () => {
    emit('onChange', props.name)
  }
</script>
