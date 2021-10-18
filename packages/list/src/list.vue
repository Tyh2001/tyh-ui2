<template>
  <div class="tyh-list">
    <!-- 头部 -->
    <div v-if="header" class="tyh-list-header">
      {{ header }}
    </div>

    <!-- 中间内容 -->
    <div v-if="content.length" class="tyh-list-content">
      <ul class="tyh-list-content-ul">
        <li
          class="tyh-list-content-li"
          :class="[zebraClass]"
          v-for="(item, index) in content"
          :key="index"
        >
          <!-- 序号 -->
          <span class="tyh-list-content-li-num" v-if="num">
            {{ index + 1 }}
          </span>
          <!-- 内容 -->
          {{ contentKey(item) }}
        </li>
      </ul>
    </div>

    <!-- 如果传递来的数组是没有内容的 则显示 暂无内容 -->
    <div v-else class="tyh-list-content">
      <p class="note">暂无内容...</p>
    </div>

    <!-- 底部 -->
    <div v-if="footer" class="tyh-list-footer">
      {{ footer }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TyhList',
  props: {
    // header 内容
    header: [String, Number],
    // 主体内容
    content: [Array, String],
    // 循环体
    iskey: String,
    // footer 内容
    footer: [String, Number],
    // 斑马纹
    zebra: {
      type: Boolean,
      default: false
    },
    // 显示序号
    num: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    // 斑马纹 Class
    const zebraClass = computed(() => {
      return props.zebra ? 'tyh-list-content-li-zebra' : ''
    })

    // 根据传来的键名 返回对应的键值
    function contentKey (item) {
      // 如果 item 是对象但是没有传递 key 参数则直接返回
      if (typeof item === 'object' && !props.iskey) {
        return item
      }
      // 如果 item 不是对象，则直接返回
      if (typeof item !== 'object') {
        return item
      }
      // 如果是对象 就返回对应的键
      for (const key in item) {
        if (props.iskey === key) {
          return item[key]
        }
      }
    }

    return {
      zebraClass,
      contentKey
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

