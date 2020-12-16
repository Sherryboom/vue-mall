<template>
  <div id="shop-product">
    <div class="product-selector">
      <button :class="{btnActive : product.isChecked}" @click="btnClick">
        <img src="@/assets/img/cart/tick.svg" alt="">
      </button>
    </div>
    <div class="product-img">
      <img :src="product.img" alt="商品图片">
    </div>
    <div class="product-info" @click="click">
      <div class="product-title">{{ product.title }}</div>
      <div class="product-desc">商品描述: {{ product.desc }}</div>
      <div class="info-bottom">
        <div class="product-price left">{{ product.price }}</div>
        <div class="product-count right">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    click() {
      //跳转到商品页面
      console.log('click')
    },
    btnClick() {
      this.product.isChecked = !this.product.isChecked
    }
  },
}
</script>

<style scoped>
#shop-product {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.product-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  width: 20px;
  height: 20px;
  background-color: #eeeeee;
  border-radius: 50%;
  border: solid 1px #aaa;
}

button.btnActive {
  background-color: red;
  color: #fff;
}

button img {
  width: 20px;
  height: 20px;
}

.product-title, .product-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.product-img {
  padding: 5px;
}

.product-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.product-info {
  font-size: 15px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.product-info .product-desc {
  font-size: 13px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .product-price {
  color: orangered;
}
</style>
