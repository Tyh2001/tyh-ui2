<template>
  <option :value="value">
    <span v-if="label">{{ label }}</span>
    <span v-else><slot /></span>
  </option>
</template>

<script lang="ts" setup>
import { optionProps } from './props.ts'
defineProps(optionProps)
</script>
