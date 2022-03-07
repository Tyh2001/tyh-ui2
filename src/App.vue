<template>
  <div>
    <tyh-highlight>{{ code }}</tyh-highlight>
    <!-- <highlightjs language="javascript" :code="code" /> -->

    <pre v-tyh><code class="javascript">{{ code }}</code></pre>
  </div>
</template>

<script setup>
import TyhHighlight from './demo/tyh-highlight/TyhHighlight.vue'
const code = `
import { Message } from 'tyh-ui2'
function change1 () {
  Message({ message: '默认提示', type: 'default', round: true })
}
`
</script>