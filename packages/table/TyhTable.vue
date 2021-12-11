<template>
  <div class="tyh-table" :style="[{ height }]">
    <table
      class="tyh-table-table"
      border="0"
      cellspacing="0"
      cellpadding="0"
      :width="width"
    >
      <thead class="tyh-thead">
        <tr class="tyh-thead-th" :height="trHeight">
          <th v-if="num" :class="isTdThClass('thead')" :align="align" />
          <th
            v-for="(item, i) in columns"
            :class="isTdThClass('thead')"
            :width="item.width"
            :key="i"
            :align="align"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>

      <tbody class="tyh-tbody">
        <tr
          v-for="(dataItem, ind) in data"
          :class="[
            'tyh-tbody-tr',
            {
              'tyh-tbody-tr-zebra': zebra,
            },
          ]"
          :height="trHeight"
          :style="importantStyle(ind)"
          :key="ind"
        >
          <td v-if="num" :class="isTdThClass('tbody')" :align="align">
            {{ ind + 1 }}
          </td>
          <td
            v-for="(colItem, index) in columns"
            :class="isTdThClass('tbody')"
            :key="index"
            :align="align"
          >
            {{ dataItem[colItem.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
  columns: Array,
  trHeight: {
    type: String,
    default: '40'
  },
  align: {
    type: String,
    default: 'left',
    validator (val) {
      return ['left', 'right', 'center'].includes(val)
    }
  },
  zebra: Boolean,
  border: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'auto'
  },
  num: Boolean,
  important: Array,
  importantColor: {
    type: String,
    default: '#fdf5e6'
  }
})
const importantStyle = i => {
  for (const key of props.important) {
    if (key === i + 1) {
      return `background: ${props.importantColor}`
    }
  }
}
const isTdThClass = key => {
  return [
    `tyh-${key}-td`,
    {
      'tyh-table-border': props.border
    }
  ]
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
  background-color: #ffffff;
}

::-webkit-scrollbar-thumb {
  background: #dddddd;
  border-radius: 6px;
}
</style>
