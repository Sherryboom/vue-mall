<template>
  <div id="category">
    <nav-bar class="cate-top-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="left">
      <scroll class="cate-nav-content1" ref="scroll1">
        <cate-nav :category="category" @itemClick="itemClick"/>
      </scroll>
    </div>
    <div class="right">
      <scroll class="cate-nav-content2"  ref="scroll2">
        <cate-item :detail="itemDetail"/>
      </scroll>
    </div>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import CateNav from "./childComps/CateNav";
  import CateItem from "./childComps/CateItem";

  import {getCategory, getSubCategory} from "network/category";


  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      CateNav,
      CateItem,
      getCategory,
      getSubCategory,
    },
    data() {
      return {
        category: [],
        itemDetail: [],
      }
    },
    watch:{
      category(){
        this.$nextTick(function(){
          this.$refs.scroll1.refresh()
        })
      },
      itemDetail(){
        this.$nextTick(function(){
          this.$refs.scroll2.refresh()
        })
      }
    },
    created() {
      this.getCategory()
      this.getSubCategory(599)
    },
    methods: {
      getCategory(){
        getCategory().then(res1 => {
          this.category = res1.data.data.category.list
        })
      },
      getSubCategory(maitKey){
        getSubCategory(maitKey).then(res2 => {
          this.itemDetail = (res2.data.data.list)
        })
      },

      //  每次点击nav -- items 的offsetTop设置为0
      itemClick(index) {
        this.getSubCategory(this.category[index].maitKey)
        this.$refs.scroll2.scrollTo(0, 0, 0)
      },
    }
  }
</script>

<style scoped>
  #category {
    width: 100vw;
    height: 100vh;
  }

  .cate-top-nav {
    background-color: var(--color-tint);
  }

  .left {
    width: 20%;
    height: calc(100% - 44px - 51px);
    position: relative;
    overflow: hidden;
  }

  .cate-nav-content1 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .right {
    width: 80%;
    height: calc(100% - 44px - 49px);
    position: relative;
    overflow: hidden;
  }

  .cate-nav-content2 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
