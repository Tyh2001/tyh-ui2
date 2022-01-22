<template>
  <div
    class="xtx-skeleton"
    :style="{ width, height }"
    :class="{ shan: animated }"
  >
    <!-- 1 盒子-->
    <div class="block" :style="{ backgroundColor: bg }"></div>
    <!-- 2 闪效果 xtx-skeleton 伪元素 --->
  </div>
</template>
<script setup>
defineProps({
  bg: {
    type: String,
    default: '#efefef'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100px'
  },
  animated: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped lang="less">
.xtx-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {

    background-size: 400% 100%;
    animation: el-skeleton-loading 1.4s ease infinite;
    // position: absolute;
    // animation: shan 1.5s ease 0s infinite;
    // top: 0;
    // width: 150%;
    // height: 100%;
    // background-color: rgb(180, 180, 180);
    // background-image: linear-gradient(
    //   to left,
    //   rgb(239, 239, 239),
    //   #fff,
    //   rgb(239, 239, 239)
    // );
    // transform: skewX(-45deg);
    // content: "";
    // // height: 150%;
    // // width: 25px;
    // width: 150%;
    // height: 100%;
    // background: #fff;
    // position: absolute;
    // top: 0;
    // // left: 0;
    // // right: 0;
    // // bottom: 0;
    // // margin: auto;
    // // opacity: 0.6;
    // // filter: blur(6px);
    // animation: move 1s infinite ease-out;
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }

  100% {
    left: 120%;
  }
}
@keyframes move {
  0% {
    transform: translate(-200px, -200px) rotate(45deg);
  }
  100% {
    transform: translate(200px, 200px) rotate(45deg);
  }
}
// @keyframes shan {
//   0% {
//     left: -100%;
//   }
//   100% {
//     left: 120%;
//   }
// }
// @keyframes skeleton {
//   0% {
//     opacity: 0.4;
//   }
//   50% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0.4;
//   }
// }
</style>
