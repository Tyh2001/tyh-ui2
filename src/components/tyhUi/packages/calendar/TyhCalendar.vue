<template>
  <span class="tyh-calendar">
    <div class="tyh-calendar-container" :style="calendarStyle">
      <div class="tyh-calendar-header">
        <span class="tyh-calendar-isDay">
          {{ getYear }}年 {{ getMonth + 1 }}月 {{ getDate }}日
        </span>
        <tyh-button-group>
          <tyh-button size="mini" @click="prevMonth">上个月</tyh-button>
          <tyh-button size="mini" simple type="primary" @click="goNow">
            今天
          </tyh-button>
          <tyh-button size="mini" @click="nextMonth">下个月</tyh-button>
        </tyh-button-group>
      </div>

      <ul class="tyh-calendar-week">
        <li
          class="tyh-calendar-week-item"
          v-for="(item, index) in 7"
          :key="index"
          :style="[{ width: `${cellWidth < 25 ? 25 : cellWidth}px` }]"
        >
          {{ changeWeek(item) }}
        </li>
      </ul>

      <ul class="tyh-calendar-month">
        <li
          class="tyh-calendar-day"
          v-for="(item, index) in fun_week()"
          :key="index"
          :style="[calendarItemSize]"
        />
        <li
          class="tyh-calendar-day"
          v-for="(m, index) in yearMonths(getMonth)"
          :key="index"
          :style="[nowDateStyle(index), calendarItemSize]"
        >
          {{ index + 1 }}
        </li>
      </ul>
    </div>
  </span>
</template>

<script setup>
import { ref, computed } from 'vue'
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

const {
  getMonth,
  getYear,
  fun_week,
  yearMonths,
  prevMonth,
  nextMonth,
  goNow,
  changeWeek,
  nowDateStyle,
  calendarStyle,
  calendarItemSize,
  getDate
} = TyhCalendar(props)


function TyhCalendar (props) {
  const getMonth = ref(props.modelValue.getMonth())
  const getYear = ref(props.modelValue.getFullYear())
  const getDate = ref(props.modelValue.getDate())

  // 获取当前月份的1号是周几
  const fun_week = week => {
    const res = new Date(`${getYear.value}/${getMonth.value + 1}/1`).getDay()
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

  const prevMonth = () => {
    if (getMonth.value > 0) {
      getMonth.value--
      return
    }
    getYear.value--
    getMonth.value = 11
  }

  const nextMonth = () => {
    if (getMonth.value < 11) {
      getMonth.value++
      return
    }
    getYear.value++
    getMonth.value = 0
  }

  const goNow = () => {
    getMonth.value = props.modelValue.getMonth()
    getYear.value = props.modelValue.getFullYear()
  }

  const changeWeek = num => {
    return ['一', '二', '三', '四', '五', '六', '日'][num - 1]
  }

  const nowDateStyle = date => {
    if (date + 1 === props.modelValue.getDate()) {
      return [{
        backgroundColor: '#3a6ff4',
        color: '#fff',
      }]
    }
  }

  const calendarStyle = computed(() => {
    const width_ = props.cellWidth < 25 ? 25 : props.cellWidth
    return [{
      width: `${(width_ + 2) * 7}px`
    }]
  })

  const calendarItemSize = computed(() => {
    const width_ = props.cellWidth < 25 ? 25 : props.cellWidth
    return [
      { width: `${width_}px`, height: `${width_}px` }
    ]
  })

  return {
    getMonth,
    getYear,
    fun_week,
    yearMonths,
    prevMonth,
    nextMonth,
    goNow,
    changeWeek,
    nowDateStyle,
    calendarStyle,
    calendarItemSize,
    getDate
  }
}

</script>
