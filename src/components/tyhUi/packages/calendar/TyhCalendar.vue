<template>
  <span class="tyh-calendar">
    <div class="tyh-calendar-container" :style="calendarWidth">
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

      <tr class="tyh-calendar-week">
        <td
          class="tyh-calendar-week-item"
          v-for="(item, index) in 7"
          :key="index"
          :style="[{ width: `${cellWidth < 25 ? 25 : cellWidth}px` }]"
        >
          {{ changeWeek(item) }}
        </td>
      </tr>

      <tr class="tyh-calendar-month">
        <td
          class="tyh-calendar-day"
          v-for="(item, index) in fun_week"
          :key="index"
          :style="[calendarItemSize]"
        />
        <td
          class="tyh-calendar-day"
          v-for="(m, index) in yearMonths(getMonth, getYear)"
          :key="index"
          :style="[nowDateStyle(index), calendarItemSize]"
        >
          {{ index + 1 }}
        </td>
      </tr>
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
  calendarWidth,
  calendarItemSize,
  getDate
} = _TyhCalendar()

function _TyhCalendar () {
  const getMonth = ref(props.modelValue.getMonth())
  const getYear = ref(props.modelValue.getFullYear())
  const getDate = props.modelValue.getDate()

  // 获取当前月份的1号是周几
  const fun_week = computed(() => {
    const week = new Date(`${getYear.value}/${getMonth.value + 1}/1`).getDay()
    return week === 0 ? 7 - 1 : week - 1
  })

  // 获取当年所有月份的时间
  const yearMonths = (month = getMonth.value, year) => {
    if (month !== 1) {
      const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      return months[month]
    }
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28
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

  // 回到当前时间
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

  const calendarWidth = computed(() => {
    const size = props.cellWidth < 25 ? 25 : props.cellWidth
    return [{
      width: `${(size + 2) * 7}px`
    }]
  })

  const calendarItemSize = computed(() => {
    const size = props.cellWidth < 28 ? 28 : props.cellWidth
    return [
      { width: `${size}px`, height: `${size}px` }
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
    calendarWidth,
    calendarItemSize,
    getDate
  }
}
</script>
