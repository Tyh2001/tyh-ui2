<template>
  <switch-a v-high />
  <tyh-switch v-model="value1" />
  <br />
  <tyh-switch v-model="value1" />
  <switch-b v-high />
  <tyh-switch v-model="value2" closeText="关闭" openText="开启" />
  <switch-c v-high />
  <tyh-switch v-model="value3" disabled />
  <br />
  <tyh-switch v-model="value4" disabled />
  <switch-d v-high />
  <tyh-switch v-model="value5" closeColor="red" openColor="green" />
  <br />
  <tyh-switch v-model="value6" closeColor="black" openColor="#eee" />
  <switch-e v-high />
  <tyh-switch v-model="value7" :width="60" />
  <switch-f v-high />
</template>

<script setup>
  import switchA from '@/docs/switch/switchA.md'
  import switchB from '@/docs/switch/switchB.md'
  import switchC from '@/docs/switch/switchC.md'
  import switchD from '@/docs/switch/switchD.md'
  import switchE from '@/docs/switch/switchE.md'
  import switchF from '@/docs/switch/switchF.md'
  import { ref } from 'vue'
  const value1 = ref(true)
  const value2 = ref(true)
  const value3 = ref(true)
  const value4 = ref(false)
  const value5 = ref(true)
  const value6 = ref(false)
  const value7 = ref(true)
</script>
