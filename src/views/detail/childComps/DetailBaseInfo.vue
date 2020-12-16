<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount"
            class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.info-title {
  padding: 5px;
  font-size: 15px;
}

.info-price {
  padding: 10px;
}

.n-price {
  font-size: 22px;
  color: var(--color-high-text);
  padding-right: 5px;
}

.o-price {
  font-size: 13px;
  text-decoration: line-through;
  padding-right: 5px;
}

.discount {
  background-color: #f13e3a;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  padding: 2px
}

.info-other {
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 5px;
  font-size: 12px;
  color: #a2a2a2
}

.info-service {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0 5px 0;
  font-size: 13px;
  color: #aaa;
}

.info-service-item img {
  width: 12px;
  height: 12px;
  margin-right: 2px;
}
</style>
