<template>
  <fieldset
    v-if="position"
    class="tyh-division"
    :style="[
      {
        margin: `${margin} 0`
      }
    ]"
  >
    <legend
      :class="[
        'tyh-division-text',
        position ? `tyh-division-text--${position}` : 'tyh-division-text--left'
      ]"
    >
      <span :style="[{ color: textColor }]">
        <slot />
      </span>
    </legend>
  </fieldset>
  <hr v-else class="tyh-division" />
</template>

<script setup>
defineProps({
  position: {
    type: String,
    validator (val) {
      return ['left', 'center', 'right'].includes(val)
    }
  },
  textColor: {
    type: String,
    default: '#515a6e'
  },
  margin: {
    type: String,
    default: '16px'
  }
})
</script>
