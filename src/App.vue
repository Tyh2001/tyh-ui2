<template>
  <tyh-input clear size="large" v-model="text4" />
  <tyh-input clear size="medium" v-model="text5" />
  <tyh-input clear size="small" v-model="text6" />
  <tyh-input clear size="mini" v-model="text7" />
</template>

<script setup>
import { ref } from 'vue'
const text4 = ref('')
const text5 = ref('')
const text6 = ref('')
const text7 = ref('')
</script>
