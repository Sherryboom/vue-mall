<template>
  <div class="cate-nav">
    <div v-for="(item, index) in category" :key="index">
      <div class="nav-item" :class="{active: currentIndex === index}" @click="click(index)">
        {{item.title}}
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "CateNav",
    props: {
      category: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods:{
      click(index){
        this.currentIndex = index
        this.$emit('itemClick', index)
      }
    }
  }
</script>

<style scoped>
  .cate-nav {
    background-color: rgba(247, 247, 247, 1);
  }

  .nav-item {
    height: 48px;
    text-align: center;
    line-height: 48px;
  }

  .active {
    background-color: #fff;
    color: var(--color-high-text);
  }
</style>
