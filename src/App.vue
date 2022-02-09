<template>
  <tyh-radio
    v-model="radio"
    @change="aa($event)"
    label="111"
    border
    size="large"
    >备选项</tyh-radio
  >
  <tyh-radio
    v-model="radio"
    @change="aa($event)"
    label="222"
    border
    size="large"
    >备选项</tyh-radio
  >
  <tyh-radio
    v-model="radio"
    @change="aa($event)"
    label="333"
    border
    size="large"
    >备选项</tyh-radio
  >
</template>


<script setup>
import { ref } from 'vue'
const radio = ref('3')

function aa (a) {
  console.log(121, a)
}
</script>