<template>
  <div class="slot-machine">
    <button @click="start">start</button>
    <div class="slot" v-for="(slot, index) in slots" ref="slots" :key="index">
      <h2>{{ slot.title }}</h2>
      <div class="slot__window">
        <div class="slot__wrap">
          <div
            class="slot__item"
            v-for="(opt, idx) in slot.items"
            :key="`${index}_${idx}`"
          >
            <div class="slot__item_content">
              <img :src="opt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const next = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame || function (cb) {
    window.setTimeout(cb, 1000 / 60)
  }
export default {
  data () {
    return {
      slots: [
        {
          title: "When",
          items: ["today", "next week", "last year"],
        },
        {
          title: "Where",
          items: [
            "at home",
            "at work",
            "at school",
          ],
        },
        { title: "How", items: ["cycling", "walking", "swimming"] },
      ],
      prizeNum: 3, // 可视区域每列展示的奖品数
      opts: null,
      startedAt: null,
    }
  },
  methods: {
    // 开始
    start () {
      this.opts = this.slots.map((data, i) => {
        console.log(data)
        const slot = this.$refs.slots[i]; // map(function(){})利用map便利slots的每一个选项组,最终得到return的返回值
        const itemHeight = document.getElementsByClassName('slot__item')[0].offsetHeight
        const choice = Math.floor(Math.random() * data.items.length); // 随机生成一个[0,data.items.length]的整数(floor向下取整)
        const opts = {
          el: slot.querySelector(".slot__wrap"), //指向奖项元素的父级
          finalPos: choice * itemHeight, // itemHeight 为每一个奖品滚动标签的高度
          startOffset: 1000 + Math.random() * 500 + i * 500, // 影响转的圈数
          height: data.items.length * itemHeight,
          duration: 3000 + i * 700, // milliseconds
          isFinished: false,
        };
        return opts
      })
      next(this.animate) // 开启动画
    },
    animate (timestamp) {
      if (!this.opts) return
      // timestamp当前的方法持续的毫秒数
      if (this.startedAt == null) {
        this.startedAt = timestamp // 动画初始时间
      }
      const timeDiff = timestamp - this.startedAt; //动画持续的时间
      // console.log(timestamp, this.opts)
      this.opts.forEach((opt) => {
        if (opt.isFinished) {
          return
        }
        const timeRemaining = Math.max(opt.duration - timeDiff, 0); // 总的持续时间 - 动画持续时间 = 剩下的时间,0表示结束
        const power = 3
        const offset =
          (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) *
          opt.startOffset; // Math.pow(timeRemaining, power)表示: timeRemaining 的3 次幂; // negative, such that slots move from top to bottom
        const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)
        // console.log(pos)
        opt.el.style.transform = "translateY(" + pos + "px)"
        if (timeDiff > opt.duration) {
          // console.log('finished', opt, pos, opt.finalPost)
          opt.isFinished = true
        }
      })
      if (this.opts.every((o) => o.isFinished)) {
        this.opts = null
        this.startedAt = null
        // console.log('finished')
      } else {
        next(this.animate)
      }
    }
  }
}
</script>

<style scoped>
.slot {
  float: left;
  margin: 0.4em;
}

.slot__window {
  background-color: green;
  width: 100px;
  height: 80px;
  height: auto;
  overflow: hidden;
}

.slot__item {
  padding-top: 20px;
  width: 100px;
  height: 80px;
}

.slot__item_content {
  margin: auto;
  height: 40px;
  width: 80px;
  text-align: center;
  background-color: blue;
  color: white;
  line-height: 40px;
}
</style>
