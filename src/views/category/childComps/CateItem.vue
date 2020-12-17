<template>
  <div class="cate-items">
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
    }
  }
</script>

<style scoped>
  .cate-items {
    background-color: #fff;
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
