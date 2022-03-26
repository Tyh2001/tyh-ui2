```html
<template>
  <tyh-tree :data="data" />
</template>

<script setup>
  const data = [
    {
      label: '一级 1',
      children: [
        {
          label: '二级 1-1',
          children: [
            {
              label: '三级 1-1-1'
            }
          ]
        }
      ]
    },
    {
      label: '一级 2',
      children: [
        {
          label: '二级 2-1',
          children: [
            {
              label: '三级 2-1-1'
            }
          ]
        },
        {
          label: '二级 2-2',
          children: [
            {
              label: '三级 2-2-1'
            }
          ]
        }
      ]
    },
    {
      label: '一级 3',
      children: [
        {
          label: '二级 3-1',
          children: [
            {
              label: '三级 3-1-1'
            }
          ]
        },
        {
          label: '二级 3-2',
          children: [
            {
              label: '三级 3-2-1'
            }
          ]
        }
      ]
    }
  ]
</script>
```

## Attributes

| 参数 | 说明     | 类型  | 可选值 | 默认值 |
| ---- | -------- | ----- | ------ | ------ |
| data | 展示数据 | array | ——     | []     |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/radio">
    Radio 单选框
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/pageHeader">
    PageHeader 页头
  </tyh-turn-page-item>
</tyh-turn-page>
