<template>
  <div class="profile-other">
    <div class="message">
      <span><img src="~/assets/img/profile/message.svg" alt="">我的消息</span>
    </div>
    <div class="pointer">
      <span><img src="~/assets/img/profile/pointer.svg" alt="">积分商城</span>
    </div>
    <div class="vip">
      <span><img src="~/assets/img/profile/vip.svg" alt="">会员卡</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileOther"
  }
</script>

<style scoped>
  .profile-other{
    margin-top: 10px;
    height: 120px;
    background-color: #fff;
    font-size: 13px;
    color: #666;
  }

  .profile-other > div{
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #eee;
  }

  .profile-other span{
    display: block;
    margin: auto 0;
    height: 25px;
    line-height: 25px;
  }

  img{
    float: left;
    margin: 0 8px;
    width: 25px;
    height: 25px;
  }
</style>
