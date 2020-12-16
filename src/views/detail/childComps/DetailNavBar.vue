<template>
  <nav-bar>
    <div slot="left" class="back-icon" @click="backClick">
      <img src="@/assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(title, index) in titles"
           class="title-item"
           :key="index"
           :class="{active: currentIndex===index}"
           @click="titleClick(index)">{{ title }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data(){
    return {
      titles: ['商品', '评论', '参数', '推荐'],
      currentIndex: 0,
    }
  },
  methods:{
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
}

.title-item {
  flex: 1
}

.back-icon img {
  margin: 10px;
}

.active {
  color: var(--color-high-text)
}
</style>
