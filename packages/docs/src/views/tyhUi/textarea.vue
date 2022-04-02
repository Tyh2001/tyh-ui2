<template>
  <textarea-a v-high />
  <tyh-textarea v-model="value1" placeholder="请输入内容..." />
  <textarea-b v-high />
  <tyh-textarea v-model="value7" />
  <br />
  <tyh-textarea v-model="value8" resize="vertical" />
  <br />
  <tyh-textarea v-model="value9" resize="horizontal" />
  <br />
  <tyh-textarea v-model="value10" resize="none" />
  <textarea-c v-high />
  <tyh-textarea v-model="value3" rows="5" />
  <tyh-textarea v-model="value4" cols="10" />
  <textarea-d v-high />
  <tyh-textarea v-model="value5" disabled />
  <textarea-e v-high />
  <tyh-textarea v-model="value6" max="10" />
  <textarea-f v-high />
</template>

<script setup>
import textareaA from '@/docs/textarea/textareaA.md'
import textareaB from '@/docs/textarea/textareaB.md'
import textareaC from '@/docs/textarea/textareaC.md'
import textareaD from '@/docs/textarea/textareaD.md'
import textareaE from '@/docs/textarea/textareaE.md'
import textareaF from '@/docs/textarea/textareaF.md'
import { ref } from 'vue'
const value1 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('禁用状态')
const value6 = ref('')
const value7 = ref('随意拉伸')
const value8 = ref('只能纵向拉伸')
const value9 = ref('只能横向拉伸')
const value10 = ref('禁止拉伸')
</script>
