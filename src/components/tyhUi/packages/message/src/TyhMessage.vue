<template>
  <transition name="tyh-message-fade" @after-leave="handleAfterLeave" appear>
    <div
      v-show="isShow"
      :class="['tyh-message', `tyh-message-${type}`]"
      :style="[{ top: `${offset}px` }]"
    >
      <div class="tyh-message-content">
        <tyh-icon v-if="showClose" icon="tyh-ui-tyhui" />
        <span>{{ message }}</span>
      </div>
    </div>
  </transition>
</template>

<script setup>
import TyhIcon from '../../icon'
import { getCurrentInstance, ref } from 'vue'
const props = defineProps({
  message: {
    type: [String, Object]
  },
  type: {
    type: String,
    default: 'default',
    validator (val) {
      return ['primary', 'success', 'danger', 'warning', 'default'].includes(val)
    }
  },
  showClose: Boolean,
  time: Number,
  offset: Number
})
const emit = defineEmits(['close'])

const instance = getCurrentInstance()
const isShow = ref(true)

let timer
function delayClose () {
  if (props.time > 0) {
    timer = setTimeout(() => {
      close()
    }, props.time)
  }
}

// 关闭弹窗
function close () {
  clearTimeout(timer)
  emit('close', instance)
  isShow.value = false
}

function handleAfterLeave () {
  instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
}

delayClose()
</script>


<style src="../style/index.css" scoped>
</style>
<style scoped>
/* .el-message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #edf2fc;
  -webkit-transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s, -webkit-transform 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.el-message.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.el-message.is-closable .el-message__content {
  padding-right: 16px;
}
.el-message p {
  margin: 0;
}
.el-message--info .el-message__content {
  color: #909399;
}
.el-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.el-message--success .el-message__content {
  color: #67c23a;
}
.el-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.el-message--warning .el-message__content {
  color: #e6a23c;
}
.el-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2;
}
.el-message--error .el-message__content {
  color: #f56c6c;
}
.el-message__icon {
  margin-right: 10px;
}
.el-message__content {
  padding: 0;
  font-size: 14px;
  line-height: 1;
}
.el-message__content:focus {
  outline-width: 0;
}
.el-message__closeBtn {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  color: #c0c4cc;
  font-size: 16px;
}
.el-message__closeBtn:focus {
  outline-width: 0;
}
.el-message__closeBtn:hover {
  color: #909399;
}
.el-message .el-icon-success {
  color: #67c23a;
}
.el-message .el-icon-error {
  color: #f56c6c;
}
.el-message .el-icon-info {
  color: #909399;
}
.el-message .el-icon-warning {
  color: #e6a23c;
}
.el-message-fade-enter-from,
.el-message-fade-leave-to {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
} */
</style>
