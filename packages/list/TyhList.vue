<template>
  <div class="tyh-list">
    <div v-if="header" class="tyh-list-header">
      {{ header }}
    </div>

    <div v-if="content.length" class="tyh-list-content">
      <ul class="tyh-list-content-ul">
        <li
          :class="[
            'tyh-list-content-li',
            {
              'tyh-list-content-li-zebra': zebra,
              'tyh-list-content-li-hoverShow': hoverShow,
            },
          ]"
          v-for="(item, index) in content"
          :key="index"
        >
          <span class="tyh-list-content-li-num" v-if="num">
            {{ index + 1 }}
          </span>
          <span class="tyh-list-content-li-center">{{ contentKey(item) }}</span>
        </li>
      </ul>
    </div>

    <div v-else class="tyh-list-content">
      <p class="note">暂无内容...</p>
    </div>

    <div v-if="footer" class="tyh-list-footer">
      {{ footer }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  header: [String, Number],
  content: [Array, String],
  iskey: String,
  footer: [String, Number],
  zebra: Boolean,
  num: Boolean,
  hoverShow: Boolean
})
// 根据传来的键名 返回对应的键值
function contentKey (item) {
  // 如果 item 是对象但是没有传递 key 参数则直接返回
  if (item instanceof Object && !props.iskey) return item
  // 如果 item 不是对象，则直接返回
  if (!(item instanceof Object)) return item
  for (const key in item) {
    if (props.iskey === key) {
      return item[key]
    }
  }
}
</script>
