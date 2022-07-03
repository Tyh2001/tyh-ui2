<template>
  <div class="tyh-division" :style="{ margin: `${margin} 0` }">
    <span
      :class="['tyh-division-text', `tyh-division-text-${position}`]"
      :style="{ color }"
    >
      <i v-if="icon" :style="{ color }" :class="['tyh-icon', icon]" />
      <slot v-else />
    </span>
  </div>
</template>

<script lang="ts" setup name="TyhDivision">
  import { divisionProps } from './props'
  defineProps(divisionProps)
</script>
