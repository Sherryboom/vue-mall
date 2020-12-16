<template>
  <div v-if="Object.keys(shop).length !== 0" class="shop-info">
    <div class="shop-top">
      <div class="shop-logo"><img :src="shop.shopLogo" alt=""></div>
      <div class="shop-name">{{ shop.name }}</div>
    </div>
    <div class="shop-stats">
      <div class="shop-sells">
        <div class="count">{{ totalSells }}万</div>
        <div class="text">总销量</div>
      </div>
      <div class="shop-goods">
        <div class="count">{{ shop.goods }}</div>
        <div class="text">全部宝贝</div>
      </div>
      <div class="shop-score">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{ item.score }}</td>
            <td class="judge" :class="{'judge-better': item.isBetter}">{{ item.isBetter ? '高' : '低' }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="welcome">进店逛逛</div>

  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {}
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    totalSells() {
      return Math.floor(this.shop.sells / 10000 * 10) / 10
    }


  }
}
</script>

<style scoped>
.shop-info {
  padding: 15px 5px;
  border-top: 5px solid #eee;
  border-bottom: 5px solid #eee;
}

.shop-top {
  display: flex;
  align-items: center;
  font-size: 15px;
}

.shop-logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid #eee;
  border-radius: 20px;

}

.shop-stats {
  display: flex;
  align-items: center;
  font-size: 13px;
  text-align: center;
}

.shop-stats .count {
  font-size: 16px;
  padding-bottom: 5px;
}

.shop-stats .text {
  font-size: 12px;
}

.shop-sells {
  flex: 1;
}

.shop-goods {
  flex: 1;
  border-right: 1px solid rgba(0,0,0,.1);
}

.shop-score {
  flex: 2;
  font-size: 12px;

}
.shop-score table{
  width: 120px;
  margin-left:30px;

}
.shop-score td{
  padding:5px 0;
  text-align: center;

}
.shop-score .score {
  color: #5ea732;
  text-align: left;
}

.shop-score .score-better{
  color: #f13e3a
}

.shop-score .judge {
  background-color: #5ea732;
  color: #f6f6f6;
}

.shop-score .judge-better {
  background-color: #f13e3a;
  color: #f6f6f6;
}

.welcome{
  margin: 5px auto 0;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  background-color: #efefef;
  text-align: center;
  font-size: 14px;
  line-height: 25px;

}
</style>
