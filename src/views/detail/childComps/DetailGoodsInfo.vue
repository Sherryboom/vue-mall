<template>
  <div class="goods-info">
    <div class="goods-desc">{{goodsInfo.goodsDesc}}</div>
    <div v-for="(item, index) in goodsInfo.goodsImgs" :key="index">
      <div class="part-desc">{{item.key}}</div>
      <div v-for="(itemInside, indexInside) in item.list" :key="indexInside">
        <img :src=itemInside alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props:{
    goodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      counter: 0,
      imgLength:0
    }
  },
  methods:{
    imgLoad(){
      if(++this.counter === this.imgLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch:{
    goodsInfo(){
      this.imgLength = this.goodsInfo.goodsImgs[0].list.length
    }
  }
}
</script>

<style scoped>
.goods-desc{
  padding: 10px 5px;
  font-size: 14px;
}

.part-desc{
  padding:5px;
  text-align: center;
  text-decoration: overline underline;
}
.goods-info img{
  width: 100%;
}
</style>
