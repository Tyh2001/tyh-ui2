<template>
  <div v-if="isShow" class="tyh-message">
    <span
      class="tyh-message-body"
      :class="[type ? `tyh-message-body--${type}` : 'tyh-message-body--']"
    >
      <tyh-icon v-if="iconClass" size="15" :icon="iconClass" />
      <span class="tyh-message-message">
        {{ message }}
      </span>
    </span>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TyhIcon from '../icon/icon.vue'
export default {
  name: 'TyhMessage',
  components: {
    TyhIcon
  },
  props: {
    // 文字内容
    message: {
      type: String,
      default: ''
    },
    // 类型
    type: {
      type: String,
      default: ''
    },
    // icon
    iconClass: {
      type: String,
      default: ''
    }
  },
  setup () {
    const isShow = ref(false)
    onMounted(() => {
      isShow.value = true
    })

    return { isShow }
  }
}
</script>
