<template>
  <input-a v-high />
  <tyh-input v-model="text1" />
  <input-b v-high />
  <tyh-input type="text" v-model="text2" />
  <tyh-input type="password" v-model="text3" />
  <input-c v-high />
  <tyh-input size="large" v-model="text4" />
  <tyh-input size="medium" v-model="text5" />
  <tyh-input size="small" v-model="text6" />
  <tyh-input size="mini" v-model="text7" />
  <input-d v-high />
  <tyh-input v-model="text8" clear />
  <input-e v-high />
  <tyh-input v-model="text9" icon="tyh-ui-electronics" />
  <input-f v-high />
  <tyh-input v-model="text10" disabled />
  <input-g v-high />
  <tyh-input v-model="text11" type="password" showPassword />
  <input-h v-high />
</template>

<script setup>
import inputA from '@/docs/input/inputA.md'
import inputB from '@/docs/input/inputB.md'
import inputC from '@/docs/input/inputC.md'
import inputD from '@/docs/input/inputD.md'
import inputE from '@/docs/input/inputE.md'
import inputF from '@/docs/input/inputF.md'
import inputG from '@/docs/input/inputG.md'
import inputH from '@/docs/input/inputH.md'
import { ref } from 'vue'
const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
const text4 = ref('')
const text5 = ref('')
const text6 = ref('')
const text7 = ref('')
const text8 = ref('')
const text9 = ref('')
const text10 = ref('')
const text11 = ref('')
</script>
