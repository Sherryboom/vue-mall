<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScoll">
      <DetailSwiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop" class="shop" ref="shop"/>
      <detail-goods-info :goods-info="goodsInfo" @imageLoad="imageLoad"/>
      <detail-comment ref="comment" :comments="comments"/>
      <detail-params-info ref="params" :params-info="paramsInfo"/>
      <goods-list ref="recommend" :goods="recommend"/>
      <detail-end ref="end"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>

    <detail-to-cart @toCart="toCart"></detail-to-cart>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailComment from "./childComps/DetailComment";
import DetailEnd from "./childComps/detailEnd";
import DetailBottomBar from "./childComps/DetailBottomBar";
import DetailToCart from "./childComps/DetailToCart";

import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import {getDetail, GoodsInfo, Goods, Shop, ParamsInfo, getRecommend} from 'network/detail'
import {debounce} from "common/utils";
import {backTopMixin} from "@/common/mixin";
import store from "@/store";
import {mapActions} from 'vuex'

export default {
  name: "Details",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComment,
    DetailEnd,
    DetailBottomBar,
    DetailToCart,
    GoodsList,
    Scroll,
    BackTop,
    getDetail,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      paramsInfo: {},
      comments: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopy: null,
      currentIndex: 0,
      // toastMessage:'',
      // isToastShow:false
    }
  },
  mixins: [backTopMixin],
  created() {
    // 保存iid
    this.iid = this.$route.params.iid

    // 根据iid 请求数据
    getDetail(this.iid).then(res => {
      const data = res.data.result
      // 获取顶部图片数据
      this.topImages = res.data.result.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 获取商品详细信息
      this.goodsInfo = new GoodsInfo(data.detailInfo)
      // 获取商品参数信息
      this.paramsInfo = new ParamsInfo(data.itemParams)
      // 获取评论信息
      this.comments = data.rate
    })

    // 获取详情页面的推荐商品信息
    getRecommend().then(res => {
      this.recommend = res.data.data.list
    })

    // 获得各个组件的offsetTop值
    this.getThemeTopy = debounce(() => {
      this.$nextTick(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(this.$refs.end.$el.offsetTop)
      })
    })
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh()
      //图片加载结束后调用
      this.getThemeTopy()
    },
    // 顶部nav点击切换
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
    },
    // 点击跳转购物车
    toCart(){
      this.$router.replace('/cart')
    },
    // 内容滑动，联动顶部nav
    contentScoll(position) {
      let y = -position.y
      let length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        if ((this.currentIndex !== i) && (y >= this.themeTopYs[i] && y < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      //判断backTop是否显示, Mixin
      this.backTopShow(position)
    },
    //添加购物车
    addToCart() {
      // 获取需要展示的商品信息 图片、标题、描述、数量
      const product = {
        iid: this.iid,
        img: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice
      }
      // 添加到购物车
      // this.$store.dispatch('addCart', product)
      // this.$store.dispatch('addCart', product).then(res=>{
      //   console.log(res)
      // })
      this.addCart(product).then(res=>{
        this.$toast.show('show', 3000)
      })
      // this.addCart(product).then(res=>{
      //   this.toastMessage = res
      //   this.isToastShow = true
      //
      //   setTimeout(()=>{
      //     this.isToastShow = false
      //     this.toastMessage = ''
      //   }, 1000)
      //
      // })
    }

  },



}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}

.detail-nav {
  background-color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #fff;
}


</style>
