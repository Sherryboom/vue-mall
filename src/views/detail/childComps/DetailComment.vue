<template>
<div class="goods-comment" v-if="Object.keys(comments).length !== 0">
  <div class="total-rate">
    <span>宝贝评价 ({{comments.cRate}})</span>
    <span>查看全部 ></span>
  </div>
  <div class="comment" v-for="(item, index) in comments.list">
    <div class="user">
      <span class="user-avatar"><a :href=item.user.profileUrl><img :src=item.user.avatar alt=""></a></span>
      <span class="user-name">{{item.user.uname}}</span>
    </div>
    <div class="comment-text">{{item.content}}</div>
    <div class="comment-other">
      <span>{{item.created | showDate}}</span>
      <span v-for="item in item.extraInfo">{{item}}</span>
    </div>
    <div class="comment-images" v-for="item in item.images">
      <img :src=item alt="">
    </div>
  </div>
</div>
</template>

<script>
import {formatDate} from '@/common/utils.js'
export default {
  name: "DetailComment",
  props:{
    comments:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate: function(value){
      let date = new Date(value*1000)
      return formatDate(date, 'yy-MM-dd hh:mm:ss')
    }
  }

}
</script>

<style scoped>
.goods-comment{
  border-bottom: 5px solid #eee;
}
.total-rate{
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  font-size: 15px;
  line-height: 15px;
  border-bottom: 1px solid #eee;
}
.comment{
  padding:10px;
}
.user{
  display: flex;
  align-items: center;
}
.user-avatar img{
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.user-name{
  padding: 10px;
  font-size: 15px;
  font-weight: 700;
}

.comment-text{
  padding: 5px;
  font-size: 14px;
}
.comment-other{
  padding: 2px 5px;
  font-size: 13px;
  color: #aaa;
}
.comment-other span{
  margin-right: 5px;
}

.comment-images img{
  width: 70px;
  height: 70px;
  padding: 5px
}
</style>
