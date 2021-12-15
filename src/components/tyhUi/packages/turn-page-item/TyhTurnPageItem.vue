<template>
  <div class="tyh-turn-page-item" :align="isCenter ? 'center' : direction">
    <div
      :class="[
        'tyh-turn-page-item-link',
        {
          'tyh-turn-page-item-prohibit': prohibit
        }
      ]"
      @click="link"
    >
      <tyh-icon
        v-if="direction === 'left'"
        :icon="icon || 'tyh-ui-arrow-left-bold'"
      />
      <slot />
      <tyh-icon
        v-if="direction === 'right'"
        :icon="icon || 'tyh-ui-arrow-right-bold'"
      />
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { inject } from 'vue'
const props = defineProps({
  direction: {
    type: String,
    required: true,
    validator (val) {
      return ['left', 'right'].includes(val)
    }
  },
  url: String,
  icon: String,
  prohibit: Boolean
})
const isCenter = inject('is-center')
const { proxy } = getCurrentInstance()
const link = () => {
  if (props.prohibit) return
  try {
    proxy.$router.push(props.url)
  } catch (e) {
    console.log(e)
  }
}
</script>
