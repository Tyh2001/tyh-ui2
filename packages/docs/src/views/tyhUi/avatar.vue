<template>
  <avatar-a v-high />
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <tyh-avatar
        round
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
  <avatar-b v-high />
</template>

<script setup>
import avatarA from '@/docs/avatar/avatarA.md'
import avatarB from '@/docs/avatar/avatarB.md'
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
