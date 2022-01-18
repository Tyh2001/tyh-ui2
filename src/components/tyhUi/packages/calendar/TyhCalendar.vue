<template>
  <div class="tyh-calendar">
    <h3>{{ getMonth + 1 }}月</h3>
    <tyh-button type="primary" @click="prevMonth">上个月</tyh-button>
    <tyh-button type="success" @click="nextMonth">下个月</tyh-button>

    <ul class="tyh-calendar-week">
      <li
        class="tyh-calendar-week-item"
        v-for="(item, index) in 7"
        :key="index"
        :style="[{ width: `${cellWidth}px` }]"
      >
        {{ changeWeek(item) }}
      </li>
    </ul>

    <ul class="tyh-calendar-month">
      <li
        class="tyh-calendar-day"
        v-for="(item, index) in fun_week()"
        :key="index"
        :style="[{ width: `${cellWidth}px`, height: `${cellWidth}px` }]"
      ></li>
      <li
        class="tyh-calendar-day"
        v-for="(month, index) in yearMonths(getMonth)"
        :key="index"
        :style="[
          nowDateStyle(index),
          { width: `${cellWidth}px`, height: `${cellWidth}px` },
        ]"
      >
        {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  cellWidth: {
    type: Number,
    default: 50
  }
})

// 获取当前月份
const getMonth = ref(props.modelValue.getMonth())

// 获取当前月份的1号是周几
const fun_week = week => {
  const res = new Date(`${props.modelValue.getFullYear()}-${getMonth.value + 1}-1`).getDay()
  return res === 0 ? 7 - 1 : res - 1
}

// 获取当前月份的时间
const yearMonths = (month = getMonth.value) => {
  const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const year = props.modelValue.getFullYear()
  year % 4 == 0 && year % 100 != 0 || year % 400 == 0
    ? months[1] = 29
    : months[1] = 28
  return months[getMonth.value]
}

// 上个月
const prevMonth = () => {
  if (getMonth.value > 0) {
    getMonth.value--
    return
  }
  alert('停止')
}

// 下个月
const nextMonth = () => {
  if (getMonth.value < 11) {
    getMonth.value++
    return
  }
  alert('停止')
}

// 大写星期
const changeWeek = num => {
  let res
  switch (num) {
    case 1:
      res = '一'
      break
    case 2:
      res = '二'
      break
    case 3:
      res = '三'
      break
    case 4:
      res = '四'
      break
    case 5:
      res = '五'
      break
    case 6:
      res = '六'
      break
    case 7:
      res = '日'
      break
  }
  return res
}

// 改变当前时间的样式
const nowDateStyle = date => {
  if (date + 1 === props.modelValue.getDate()) {
    return [{
      backgroundColor: 'red',
      color: '#fff',
    }]
  }
}
</script>

<style scoped src="./style/index.css"></style>
