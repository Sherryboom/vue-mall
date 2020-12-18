<template>
  <!--  清除浮动，否则没有高度，滚动无法实现-->
  <div class="cate-items clear-fix">
    <a v-for="(item, index) in detail"
       :href="item.link"
       class="s-item"
       :key=index>
      <div><img :src="item.image" alt=""></div>
      <span>{{item.title}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "CateItem",
    props: {
      detail: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        count:0,
        detailLength: 0
      }
    },
  }
</script>

<style scoped>
  .cate-items {
    padding: 10px
  }

  .s-item {
    float: left;
    height: 100px;
    width: 33%;
    text-align: center;
  }

  .s-item img {
   margin: 5px;
    width: 65px;
    height: 65px;
  }

  .s-item span {
    display: block;
    text-align: center;
    font-size: 14px;
  }
</style>
