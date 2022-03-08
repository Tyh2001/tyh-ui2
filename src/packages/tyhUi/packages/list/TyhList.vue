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
              'tyh-list-content-li-hoverShow': hoverShow
            }
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
function contentKey(item) {
  if (item instanceof Object && !props.iskey) return item
  if (!(item instanceof Object)) return item
  for (const key in item) {
    if (props.iskey === key) {
      return item[key]
    }
  }
}
</script>
