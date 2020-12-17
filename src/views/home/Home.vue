<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control"
                 ref="tabControl1"
                 :titles="titles"
                 @tabClick="tabClick"
                 v-show="isTabFixed"/>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend :recommends="recommends"/>
      <feature/>
      <tab-control ref="tabControl2"
                   :titles="titles"
                   @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import Swiper from "views/home/childComps/Swiper";
import Recommend from "views/home/childComps/Recommend";
import Feature from "views/home/childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import {getHomeMultiData, getHomeGoods} from "network/home";
import {itemListenerMixin, backTopMixin} from "common/mixin";

export default {
  name: "Home",
  components: {
    Swiper,
    Recommend,
    Feature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop

  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '精品', '精选'],
      goods: {
        'pop': {'page': 0, list: []},
        'new': {'page': 0, list: []},
        'sell': {'page': 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultiData()
    // 2. 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
  },

  activated() {
    // keep-alive里 activated函数生效
    this.$refs.scroll.scrollTo(0, this.saveY, 10) //为什么time设置为0就不生效了呢？
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    // 取消对全局事件的监听,(如果只传事件，所有地方的该事件都关闭)
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  methods: {
    /**
     * 事件监听相关方法
     **/
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    contentScroll(position) {
      //判断backTop是否显示
      this.backTopShow(position)

      //判断tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关方法
     **/
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }

  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}


.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

/*option 1 */
.tab-control {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9;
}

.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}

/*option 2 */
/*.tab-control {*/
/*  position: relative;*/
/*  z-index: 9;*/
/*}*/

/*.content {*/
/*  overflow: hidden;*/
/*  position: absolute;*/
/*  top: 44px;*/
/*  bottom: 49px;*/
/*  left: 0;*/
/*  right: 0;*/
/*}*/

</style>
