<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
      // 1. 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType, //0123 分别代表是否监听滚动
        pullUpLoad: this.pullUpLoad,
      })

      // 2、监听滚动位置
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }

      //3 。监听scroll滚动到底部
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    refresh(){
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll.y
    }

  }
}
</script>

<style scoped>

</style>
