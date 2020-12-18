<template>
  <div class="bottom-bar" v-if="Object.keys(this.cartList).length !==0">
    <div class="button-state">
      <button :class="{btnActive : isAllChecked}" @click="btnClick">
        <img src="@/assets/img/cart/tick.svg" alt="">
      </button>
      <span class="button-text">全选/全不选</span>
    </div>
    <div class="total-price">
      <span>合计：</span>
      <span> {{ totalPrice }}元</span>
    </div>
    <div class="calculate">
      结算({{ cartLength }})
    </div>
  </div>
  <div v-else class="empty-cart">
    购物车还是空空的
  </div>


</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList
          .filter(item => {
            return item.isChecked
          })
          .reduce((pre, cur) => {
            return pre + cur.count * cur.price
          }, 0)
      },
      cartLength() {
        return this.cartList.filter(item => {
          return item.isChecked
        }).length
      },
      isAllChecked() {
        return this.cartList.length && this.cartList.filter(item => {
          return item.isChecked
        }).length === this.cartList.length
      }
    },
    methods: {
      btnClick() {
        // this.isAllChecked 为FALSE的时候点击，则全选
        //                    为True的时候点击，则取消全选
        let state = !this.isAllChecked
        this.cartList.forEach(item => item.isChecked = state)
      }
    }

  }
</script>

<style scoped>
  .bottom-bar {
    height: 30px;
    line-height: 30px;
    background-color: #fce5e8;

    position: relative;
    display: flex;
    justify-content: space-between;
    /*position: fixed;*/
    /*bottom: 49px;*/
    /*left: 0;*/
    /*right: 0;*/
  }

  button {
    width: 20px;
    height: 20px;

    background-color: #eeeeee;
    border-radius: 50%;
    border: solid 1px #aaa;
  }

  button img {
    width: 20px;
    height: 20px;
  }

  .button-state {
    padding-left: 5px;
    display: flex;
    align-items: center;

  }

  .btnActive {
    background-color: red;
  }

  .button-text {
    padding-left: 5px;
    font-size: 12px;
  }

  .total-price {
    font-size: 13px;
  }

  .calculate {
    width: 90px;
    font-size: 14px;
    background-color: red;
    color: #fff;
    text-align: center;
  }

  .empty-cart{
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 150px;
    height: 30px;
    color: #f2f2f2;
    background-color: rgba(100,100,100, 0.5);
    border-radius: 15px;

    font-size: 15px;
    line-height: 30px;
    text-align: center;
  }
</style>
