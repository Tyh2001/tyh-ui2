<template>
  <h1 class="title">Icon 图标</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>icon 的基本使用</p>
  <p>通过 icon 属性来给 icon 添加类名，来显示不同的图标</p>
  <tyh-icon icon="tyh-ui-tyhui" />
  <tyh-icon icon="tyh-ui-ashbin" />
  <tyh-icon icon="tyh-ui-data-view" />
  <highlightjs language="javascript" :code="icon.icon1" />

  <h3 class="Subtitle">配置颜色</h3>
  <p>color 属性改变 icon 的颜色</p>
  <tyh-icon color="skyblue" icon="tyh-ui-favorite" />
  <tyh-icon color="red" icon="tyh-ui-fabulous" />
  <tyh-icon color="pink" icon="tyh-ui-good" />
  <highlightjs language="javascript" :code="icon.icon2" />

  <h3 class="Subtitle">配置大小</h3>
  <p>size 属性可以改变 icon 的大小</p>
  <p>这里采用的是字体大小形式，只需要传递具体数值，并不需要传递单位</p>
  <tyh-icon size="50" icon="tyh-ui-hide" />
  <tyh-icon size="40" icon="tyh-ui-shouye-xianxing" />
  <tyh-icon size="30" icon="tyh-ui-huojian" />
  <highlightjs language="javascript" :code="icon.icon3" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Icon 集合</h3>
  <p>点击即可复制代码</p>
  <p>下面提供 {{ iconLength }} 个图标</p>
  <div id="allIcon">
    <ul class="allIcon-ui">
      <li
        class="allIcon-li"
        v-for="(icon, index) in iconList"
        :key="index"
        :data-clipboard-text="icon"
        @click="copy(icon)"
      >
        <tyh-icon size="34" :icon="icon" color="rgb(102,102,102)" />
        <p class="iconTitle">{{ icon }}</p>
      </li>
    </ul>
  </div>

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/division">
      Division 分割线
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/crumbs">
      Crumbs 面包屑
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { icon } from './index'
import table from './table'
import Clipboard from 'clipboard'
import { Message } from 'tyh-ui2'
const iconList = [
  'tyh-ui-tyhui',
  'tyh-ui-githublogo',
  'tyh-ui-arrow-up-filling',
  'tyh-ui-arrow-down-filling',
  'tyh-ui-arrow-left-filling',
  'tyh-ui-arrow-right-filling',
  'tyh-ui-caps-unlock-filling',
  'tyh-ui-comment-filling',
  'tyh-ui-check-item-filling',
  'tyh-ui-clock-filling',
  'tyh-ui-delete-filling',
  'tyh-ui-decline-filling',
  'tyh-ui-dynamic-filling',
  'tyh-ui-intermediate-filling',
  'tyh-ui-favorite-filling',
  'tyh-ui-layout-filling',
  'tyh-ui-help-filling',
  'tyh-ui-history-filling',
  'tyh-ui-filter-filling',
  'tyh-ui-file-common-filling',
  'tyh-ui-news-filling',
  'tyh-ui-edit-filling',
  'tyh-ui-fullscreen-expand-filling',
  'tyh-ui-smile-filling',
  'tyh-ui-rise-filling',
  'tyh-ui-picture-filling',
  'tyh-ui-notification-filling',
  'tyh-ui-user-filling',
  'tyh-ui-setting-filling',
  'tyh-ui-switch-filling',
  'tyh-ui-work-filling',
  'tyh-ui-task-filling',
  'tyh-ui-success-filling',
  'tyh-ui-warning-filling',
  'tyh-ui-folder-filling',
  'tyh-ui-map-filling',
  'tyh-ui-prompt-filling',
  'tyh-ui-meh-filling',
  'tyh-ui-cry-filling',
  'tyh-ui-top-filling',
  'tyh-ui-home-filling',
  'tyh-ui-sorting',
  'tyh-ui-3column',
  'tyh-ui-column-4',
  'tyh-ui-add',
  'tyh-ui-add-circle',
  'tyh-ui-adjust',
  'tyh-ui-arrow-up-circle',
  'tyh-ui-arrow-right-circle',
  'tyh-ui-arrow-down',
  'tyh-ui-ashbin',
  'tyh-ui-arrow-right',
  'tyh-ui-browse',
  'tyh-ui-bottom',
  'tyh-ui-back',
  'tyh-ui-bad',
  'tyh-ui-arrow-double-left',
  'tyh-ui-arrow-left-circle',
  'tyh-ui-arrow-double-right',
  'tyh-ui-caps-lock',
  'tyh-ui-camera',
  'tyh-ui-chart-bar',
  'tyh-ui-attachment',
  'tyh-ui-code',
  'tyh-ui-close',
  'tyh-ui-check-item',
  'tyh-ui-calendar',
  'tyh-ui-calendar',
  'tyh-ui-comment',
  'tyh-ui-column-vertical',
  'tyh-ui-column-horizontal',
  'tyh-ui-complete',
  'tyh-ui-chart-pie',
  'tyh-ui-cry',
  'tyh-ui-customer-service',
  'tyh-ui-delete',
  'tyh-ui-direction-down',
  'tyh-ui-copy',
  'tyh-ui-cut',
  'tyh-ui-data-view',
  'tyh-ui-direction-down-circle',
  'tyh-ui-direction-right',
  'tyh-ui-direction-up',
  'tyh-ui-discount',
  'tyh-ui-direction-left',
  'tyh-ui-download',
  'tyh-ui-electronics',
  'tyh-ui-drag',
  'tyh-ui-elipsis',
  'tyh-ui-export',
  'tyh-ui-explain',
  'tyh-ui-edit',
  'tyh-ui-eye-close',
  'tyh-ui-email',
  'tyh-ui-error',
  'tyh-ui-favorite',
  'tyh-ui-file-common',
  'tyh-ui-file-delete',
  'tyh-ui-file-add',
  'tyh-ui-film',
  'tyh-ui-fabulous',
  'tyh-ui-file',
  'tyh-ui-folder-close',
  'tyh-ui-filter',
  'tyh-ui-good',
  'tyh-ui-hide',
  'tyh-ui-xiexian',
  'tyh-ui-guanbi',
  'tyh-ui-shouye-xianxing',
  'tyh-ui-huojian',
  'tyh-ui-huojian1',
  'tyh-ui-history',
  'tyh-ui-file-open',
  'tyh-ui-forward',
  'tyh-ui-import',
  'tyh-ui-image-text',
  'tyh-ui-keyboard-26',
  'tyh-ui-keyboard-26',
  'tyh-ui-keyboard-9',
  'tyh-ui-link',
  'tyh-ui-layout',
  'tyh-ui-fullscreen-shrink',
  'tyh-ui-layers',
  'tyh-ui-lock',
  'tyh-ui-fullscreen-expand',
  'tyh-ui-meh',
  'tyh-ui-menu',
  'tyh-ui-loading',
  'tyh-ui-help',
  'tyh-ui-minus-circle',
  'tyh-ui-modular',
  'tyh-ui-notification',
  'tyh-ui-mic',
  'tyh-ui-more',
  'tyh-ui-pad',
  'tyh-ui-operation',
  'tyh-ui-play',
  'tyh-ui-print',
  'tyh-ui-mobile-phone',
  'tyh-ui-minus',
  'tyh-ui-navigation',
  'tyh-ui-pdf',
  'tyh-ui-prompt',
  'tyh-ui-move',
  'tyh-ui-refresh',
  'tyh-ui-run-up',
  'tyh-ui-picture',
  'tyh-ui-run-in',
  'tyh-ui-pin',
  'tyh-ui-save',
  'tyh-ui-search',
  'tyh-ui-share',
  'tyh-ui-scanning',
  'tyh-ui-security',
  'tyh-ui-sign-out',
  'tyh-ui-select',
  'tyh-ui-stop',
  'tyh-ui-success',
  'tyh-ui-smile',
  'tyh-ui-switch',
  'tyh-ui-setting',
  'tyh-ui-survey',
  'tyh-ui-task',
  'tyh-ui-skip',
  'tyh-ui-text',
  'tyh-ui-time',
  'tyh-ui-telephone-out',
  'tyh-ui-toggle-left',
  'tyh-ui-toggle-right',
  'tyh-ui-telephone',
  'tyh-ui-top',
  'tyh-ui-unlock',
  'tyh-ui-user',
  'tyh-ui-upload',
  'tyh-ui-work',
  'tyh-ui-training',
  'tyh-ui-warning',
  'tyh-ui-zoom-in',
  'tyh-ui-zoom-out',
  'tyh-ui-add-bold',
  'tyh-ui-arrow-left-bold',
  'tyh-ui-arrow-up-bold',
  'tyh-ui-close-bold',
  'tyh-ui-arrow-down-bold',
  'tyh-ui-minus-bold',
  'tyh-ui-arrow-right-bold',
  'tyh-ui-select-bold'
]
const configures = [
  {
    param: 'icon',
    explain: 'icon 的类名',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'color',
    explain: 'icon 的颜色',
    type: 'string',
    value: '——',
    default: '#606266'
  },
  {
    param: 'size',
    explain: 'icon 的尺寸',
    type: 'string',
    value: '——',
    default: '16'
  }
]
const iconLength = iconList.length
const copy = icon => {
  const clipboard = new Clipboard('.allIcon-li')
  clipboard.on('success', _ => {
    Message({
      message: `复制成功 ${icon}`,
      type: 'success',
      iconClass: 'tyh-ui-smile',
      round: true
    })
    clipboard.destroy()
  })
}
</script>

<style scoped>
#allIcon {
  width: 100%;
}
#allIcon .allIcon-ui {
  display: flex;
  flex-wrap: wrap;
}
#allIcon .allIcon-ui .allIcon-li {
  width: 140px;
  height: 120px;
  list-style: none;
  cursor: pointer;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#allIcon .allIcon-ui .allIcon-li .iconTitle {
  font-size: 12px;
  color: #8a8a8a;
  display: inline-block;
  max-width: 100px;
  text-align: center;
  margin: 20px 0 0 0;
  height: 30px;
  line-height: 15px;
}
#allIcon .allIcon-ui .allIcon-li:hover {
  transition: background 0.3s;
  background: #dcdfe6;
}
</style>
