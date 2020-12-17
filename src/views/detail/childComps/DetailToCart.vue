<template>
  <div class="toCart" @click="toCart">
    <img src="~assets/img/detail/cart.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "DetailToCart",
    methods:{
      toCart(){
        this.$emit('toCart')
      }
    }
  }
</script>

<style scoped>
  .toCart {
    position: fixed;
    right: 10px;
    bottom: 100px;
  }
  .toCart img{
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 20px;
  }
</style>
