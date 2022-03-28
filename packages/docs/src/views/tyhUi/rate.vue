<template>
  <rate-a v-high />
  <tyh-rate v-model="value1" />
  <rate-b v-high />
  <tyh-rate v-model="value2" />
  <br />
  <tyh-rate v-model="value2" color="red" voidColor="#eee" />
  <rate-c v-high />
  <tyh-rate v-model="value3" showText />
  <br />
  <tyh-rate
    v-model="value3"
    showText
    :sayText="['1星', '2星', '3星', '4星', '5星']"
  />
  <rate-d v-high />
</template>

<script setup>
import rateA from '@/docs/rate/rateA.md'
import rateB from '@/docs/rate/rateB.md'
import rateC from '@/docs/rate/rateC.md'
import rateD from '@/docs/rate/rateD.md'
import { ref } from 'vue'
const value1 = ref(2)
const value2 = ref(2)
const value3 = ref(2)
</script>
