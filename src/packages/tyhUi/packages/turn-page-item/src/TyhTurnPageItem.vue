<template>
  <div class="tyh-turn-page-item" :align="isCenter ? 'center' : direction">
    <div
      :class="[
        'tyh-turn-page-item-link',
        { 'tyh-turn-page-item-prohibit': prohibit }
      ]"
      @click="link"
    >
      <i
        v-if="direction === 'left'"
        :class="['tyh-icon', icon || 'tyh-ui-arrow-left-bold']"
      />
      <slot />
      <i
        v-if="direction === 'right'"
        :class="['tyh-icon', icon || 'tyh-ui-arrow-right-bold']"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject } from 'vue'
import { prop } from './prop'
const props = defineProps({ ...prop })

const { isCenter, link } = TyhTurnPageItem()
function TyhTurnPageItem() {
  const isCenter = inject('is-center')
  const { proxy }: any = getCurrentInstance()
  const link = (): void => {
    if (props.prohibit) return
    try {
      proxy.$router.push(props.url)
    } catch (e) {
      console.log(e)
    }
  }
  return { isCenter, link }
}
</script>
