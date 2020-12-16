<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }} </span>
      <span class="collect"> ※{{ goodsItem.cfav }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    imageLoad(){
      /*1. 因为首页和详情页都用到了这个组件，图片加载刷新的时候会调多个地方的方法
      * this.$bus.$emit('itemImageLoad')
      * 2. 用路由进行判断，分别调用
      * if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('homeItemImageLoad')
      }else if(this.$route.path.indexOf('/detail')){
        this.$bus.$emit('detailItemImageLoad')
      }
      *3. 在首页组件中deactivated或者destroyed里，取消对全局事件的监听
      * */
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+ this.goodsItem.iid)
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
}

</script>

<style scoped>
.goods-item {
  width: 48%;
  padding-bottom: 20px;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 10px;
  padding: 4px;
  text-align: center;
}

.goods-info p {
  overflow: hidden; /*溢出隐藏*/
  text-overflow: ellipsis; /*省略号*/
  white-space: nowrap; /*不换行*/
}
.price{
  color: var(--color-high-text);
  line-height: 20px;

}
</style>
