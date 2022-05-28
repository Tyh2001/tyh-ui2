<template>
  <tag-a v-high />
  <tyh-tag v-show="show1" isClose @close="show1 = false">标签一</tyh-tag>
  <tyh-tag v-show="show2" type="primary" isClose @close="show2 = false">
    标签二
  </tyh-tag>
  <tyh-tag v-show="show3" type="success" isClose @close="show3 = false">
    标签三
  </tyh-tag>
  <tyh-tag v-show="show4" type="danger" isClose @close="show4 = false">
    标签四
  </tyh-tag>
  <tyh-tag v-show="show5" type="warning" isClose @close="show5 = false">
    标签五
  </tyh-tag>
  <tag-b v-high />
</template>

<script setup>
  import tagA from '@/docs/tag/tagA.md'
  import tagB from '@/docs/tag/tagB.md'
  import { ref } from 'vue'
  const show1 = ref(true)
  const show2 = ref(true)
  const show3 = ref(true)
  const show4 = ref(true)
  const show5 = ref(true)
</script>
