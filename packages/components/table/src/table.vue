<script lang="ts" setup name="TyhTable">
  import { Props } from './props'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const importantStyle = (i: number): CSSProperties => {
    const importants: number[] = prop.important
    for (const key of importants) {
      if (key === i + 1) {
        return { background: prop.importantColor }
      }
    }
    return {}
  }

  const isTdThClass = (key: string): (string | object)[] => {
    return [`tyh-${key}-td`, { 'tyh-table-border': prop.border }]
  }
</script>

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
            :key="i"
            :class="isTdThClass('thead')"
            :width="item.width"
            :align="align || 'left'"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody class="tyh-tbody">
        <tr
          v-for="(dataItem, ind) in data"
          :key="ind"
          :class="[
            'tyh-tbody-tr',
            {
              'tyh-tbody-tr-zebra': zebra
            }
          ]"
          :height="trHeight"
          :style="importantStyle(ind)"
        >
          <td v-if="num" :class="isTdThClass('tbody')" :align="align || 'left'">
            {{ ind + 1 }}
          </td>
          <td
            v-for="(colItem, index) in columns"
            :key="index"
            :class="isTdThClass('tbody')"
            :align="align || 'left'"
          >
            {{ dataItem[colItem.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
