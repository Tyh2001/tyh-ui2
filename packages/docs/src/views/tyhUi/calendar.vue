<template>
  <calendar-a v-high />
  <tyh-calendar v-model="value" />
  <calendar-b v-high />
  <tyh-calendar v-model="value" :cellWidth="70" />
  <br />
  <br />
  <tyh-calendar v-model="value" :cellWidth="10" />
  <calendar-c v-high />
</template>

<script setup>
  import calendarA from '@/docs/calendar/calendarA.md'
  import calendarB from '@/docs/calendar/calendarB.md'
  import calendarC from '@/docs/calendar/calendarC.md'
  import { ref } from 'vue'
  const value = ref(new Date())
</script>
