<template>
  <div v-for="(item, index) in yearDayArr" :key="index">
    <ul>
      <li v-for="(item2, index2) in item" :key="index2">{{ index2 + 1 }}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

// 获取一年每个月的时间
const yearDays = () => {
  const Days = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const year = props.modelValue.getFullYear()
  year % 4 == 0 && year % 100 != 0 || year % 400 == 0
    ? Days[1] = 29
    : Days[1] = 28
  return Days
}
// console.log(yearDays())
const yearDayArr = yearDays()
console.log(yearDayArr)


// 转换大写
function changeDays (day) {
  let res = 0
  switch (day) {
    case 0: res = '一'
      break
    case 1: res = '二'
      break
    case 2: res = '三'
      break
    case 3: res = '四'
      break
    case 4: res = '五'
      break
    case 5: res = '六'
      break
    case 6: res = '七'
      break
    case 7: res = '八'
      break
    case 8: res = '九'
      break
    case 9: res = '十'
      break
    case 10: res = '十一'
      break
    case 11: res = '十二'
      break
  }
  return res
}
</script>

<style scoped src="./style/index.css"></style>
