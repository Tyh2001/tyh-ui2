<template>
  <div class="tyh-table" :style="{ height }">
    <table
      class="tyh-table-table"
      border="0"
      cellspacing="0"
      cellpadding="0"
      :width="width"
    >
      <thead class="tyh-thead">
        <tr class="tyh-thead-th" :height="trHeight">
          <th
            v-if="num"
            :class="isTdThClass('thead')"
            :align="align || 'left'"
          />
          <th
            v-for="(item, i) in columns"
            :class="isTdThClass('thead')"
            :width="item.width"
            :key="i"
            :align="align || 'left'"
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
              'tyh-tbody-tr-zebra': zebra
            }
          ]"
          :height="trHeight"
          :style="importantStyle(ind)"
          :key="ind"
        >
          <td v-if="num" :class="isTdThClass('tbody')" :align="align || 'left'">
            {{ ind + 1 }}
          </td>
          <td
            v-for="(colItem, index) in columns"
            :class="isTdThClass('tbody')"
            :key="index"
            :align="align || 'left'"
          >
            {{ dataItem[colItem.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { tableProps } from './props.ts'

  const props = defineProps(tableProps)
  const importantStyle = (i: number): string | void => {
    const importants: number[] = props.important
    for (const key of importants) {
      if (key === i + 1) {
        return `background: ${props.importantColor}`
      }
    }
  }

  const isTdThClass = (key: string): (string | object)[] => {
    return [`tyh-${key}-td`, { 'tyh-table-border': props.border }]
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
