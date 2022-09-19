<script lang="ts" setup name="TyhCalendar">
  import { ref, computed } from 'vue'
  import { Props } from './props'
  import { TyhButton, TyhButtonGroup } from '../../index'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const getMonth = ref<number>(prop.modelValue.getMonth())
  const getYear = ref<number>(prop.modelValue.getFullYear())
  const getDate: number = prop.modelValue.getDate()

  const fun_week = computed((): number => {
    const week: number = new Date(
      `${getYear.value}/${getMonth.value + 1}/1`
    ).getDay()
    return week === 0 ? 7 - 1 : week - 1
  })

  const yearMonths = (month: number = getMonth.value, year: number): number => {
    if (month !== 1) {
      const months: number[] = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      return months[month]
    }
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28
  }

  const prevMonth = (): void => {
    if (getMonth.value > 0) {
      getMonth.value--
      return
    }
    getYear.value--
    getMonth.value = 11
  }

  const nextMonth = (): void => {
    if (getMonth.value < 11) {
      getMonth.value++
      return
    }
    getYear.value++
    getMonth.value = 0
  }

  const goNow = (): void => {
    getMonth.value = prop.modelValue.getMonth()
    getYear.value = prop.modelValue.getFullYear()
  }

  const changeWeek = (num: number): string => {
    return ['一', '二', '三', '四', '五', '六', '日'][num - 1]
  }

  const nowDateStyle = (date: number): CSSProperties => {
    if (date + 1 === prop.modelValue.getDate()) {
      return {
          backgroundColor: '#3a6ff4',
          color: '#fff'
        }
    }
    return {}
  }

  const calendarWidth = computed((): CSSProperties => {
    const size: number = prop.cellWidth < 28 ? 28 : prop.cellWidth
    return { width: `${(size + 2) * 7}px` }
  })

  const calendarItemSize = computed((): CSSProperties => {
    const size: number = prop.cellWidth < 28 ? 28 : prop.cellWidth
    return { width: `${size}px`, height: `${size}px` }
  })
</script>

<template>
  <span class="tyh-calendar">
    <div class="tyh-calendar-container" :style="calendarWidth">
      <div class="tyh-calendar-header">
        <span class="tyh-calendar-isDay">
          {{ getYear }}年 {{ getMonth + 1 }}月 {{ getDate }}日
        </span>
        <tyh-button-group>
          <tyh-button
            size="mini"
            icon="tyh-ui-arrow-left-bold"
            @click="prevMonth"
          />
          <tyh-button
            size="mini"
            simple
            type="primary"
            icon="tyh-ui-time"
            @click="goNow"
          />
          <tyh-button
            size="mini"
            icon="tyh-ui-arrow-right"
            @click="nextMonth"
          />
        </tyh-button-group>
      </div>

      <tr class="tyh-calendar-week">
        <td
          v-for="(item, index) in 7"
          :key="index"
          class="tyh-calendar-week-item"
          :style="{ width: `${cellWidth < 28 ? 28 : cellWidth}px` }"
        >
          {{ changeWeek(item) }}
        </td>
      </tr>

      <tr class="tyh-calendar-month">
        <td
          v-for="(item, index) in fun_week"
          :key="index"
          class="tyh-calendar-day"
          :style="calendarItemSize"
        />
        <td
          v-for="(m, index) in yearMonths(getMonth, getYear)"
          :key="index"
          class="tyh-calendar-day"
          :style="[nowDateStyle(index)!, calendarItemSize]"
        >
          {{ index + 1 }}
        </td>
      </tr>
    </div>
  </span>
</template>
