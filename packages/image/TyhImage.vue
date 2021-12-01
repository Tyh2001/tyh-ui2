<template>
  <div class="tyh-image">
    <img
      :draggable="draggable"
      :class="[
        `tyh-image-${fit}`,
        {
          'tyh-image-select': select,
        },
      ]"
      :style="[{ width, height }]"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  fit: {
    type: String,
    validator (value) {
      return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value)
    }
  },
  width: String,
  height: String,
  select: Boolean, // 是否可以选择
  draggable: Boolean, // 是否可以拖动
})
</script>
