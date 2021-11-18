<template>
  <fieldset class="tyh-division">
    <legend
      class="tyh-division-text"
      :class="[
        position ? `tyh-division-text--${position}` : 'tyh-division-text--left',
      ]"
    >
      <slot></slot>
    </legend>
  </fieldset>
</template>

<script>
export default { name: 'TyhDivision' }
</script>

<script setup>
defineProps({
  position: {
    type: String,
    default: 'left'
  }
})
</script>
