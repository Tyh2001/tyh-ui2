<template>
  <fieldset
    v-if="position"
    class="tyh-division"
    :style="[
      {
        margin: `${margin} 0`,
      },
    ]"
  >
    <legend
      class="tyh-division-text"
      :class="[
        position ? `tyh-division-text--${position}` : 'tyh-division-text--left',
      ]"
    >
      <span :style="[{ color: textColor }]">
        <slot></slot>
      </span>
    </legend>
  </fieldset>
  <hr v-else class="tyh-division" />
</template>

<script setup>
defineProps({
  position: {
    type: String,
    validator (value) {
      return ['left', 'center', 'right'].includes(value)
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
