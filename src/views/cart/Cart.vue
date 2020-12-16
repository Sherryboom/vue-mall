<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import {mapGetters} from 'vuex'

export default {
  name: "Category",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(['cartLength'])
    // ...mapGetters({
    //   length:'cartLength',
    //   list:'cartList'
    // })
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart{
  position: relative;
  left: 0;
  right: 0;
  height: 100vh;
  /*height: 100%;*/
}
.nav-bar {
  background-color: pink;
  color: #fff;
  font-weight: 700;
}

.content{
  height: calc(100% - 44px - 49px - 30px);
  overflow: hidden;
  /*position: absolute;*/
  /*top:44px;*/
  /*bottom:49px;*/
  /*left: 0;*/
  /*right: 0;*/
  /*overflow: hidden;*/
}
</style>
