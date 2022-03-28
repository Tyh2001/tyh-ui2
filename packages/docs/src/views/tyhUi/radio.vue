<template>
  <radio-a v-high />
  <tyh-radio v-model="radio1" label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项3">备选项3</tyh-radio>
  <br /><br />
  <radio-b v-high />
  <tyh-radio v-model="radio2" disabled label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项3">备选项3</tyh-radio>
  <br /><br />
  <radio-c v-high />
  <tyh-radio v-model="radio3" label="备选项1" border>备选项1</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项2" border>备选项2</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项3" border>备选项3</tyh-radio>
  <br /><br />
  <radio-d v-high />
  <tyh-radio v-model="radio4" label="备选项1" border size="large">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="large">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="large">
    备选项3
  </tyh-radio>
  <br />
  <br />
  <tyh-radio v-model="radio4" label="备选项1" border size="medium">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="medium">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="medium">
    备选项3
  </tyh-radio>
  <br />
  <br />
  <tyh-radio v-model="radio4" label="备选项1" border size="small">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="small">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="small">
    备选项3
  </tyh-radio>
  <br />
  <br />
  <tyh-radio v-model="radio4" label="备选项1" border size="mini">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="mini">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="mini">
    备选项3
  </tyh-radio>
  <br />
  <br />
  <radio-e v-high />
</template>

<script setup>
import radioA from '@/docs/radio/radioA.md'
import radioB from '@/docs/radio/radioB.md'
import radioC from '@/docs/radio/radioC.md'
import radioD from '@/docs/radio/radioD.md'
import radioE from '@/docs/radio/radioE.md'
import { ref } from 'vue'
const radio1 = ref('备选项1')
const radio2 = ref('备选项2')
const radio3 = ref('备选项3')
const radio4 = ref('备选项1')
</script>
