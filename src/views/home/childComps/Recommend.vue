<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
}

.recommend-item {
  flex: 1;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 7px solid #eee;
}

.recommend-item img{
  width: 65px;
}
</style>
