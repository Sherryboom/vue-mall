<template>
  <div class="category">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <div class="content">
      <cate-nav class="cate-nav" :category="category" @itemClick="itemClick"/>
      <cate-item class="cate-item" :detail="itemDetail"></cate-item>
    </div>

  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CateNav from "./childComps/CateNav";
  import CateItem from "./childComps/CateItem";

  import {getCategory, getSubCategory} from "network/category";


  export default {
    name: "Category",
    components: {
      NavBar,
      CateNav,
      CateItem,
      getCategory,
      getSubCategory,
    },
    data() {
      return {
        category: [],
        itemDetail: []
      }
    },
    created() {
      getCategory().then(res => {
        this.category = res.data.data.category.list
      })
    },
    methods: {
      // Nav点击。获取对应的 subcategory 存到 itemDetail 里
      itemClick(i) {
        getSubCategory(this.category[i].maitKey).then(res => {
          this.itemDetail = res.data.data.list
          console.log(this.itemDetail)
        })
      }

    }
  }
</script>

<style scoped>
  .content{
    display: flex;
  }
  .cate-nav {
    flex:1
  }

  .cate-item {
    flex:4
  }
</style>
