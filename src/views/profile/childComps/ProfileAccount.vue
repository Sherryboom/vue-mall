<template>
  <div class="profile-account">
    <div class="balance">
      <div class="balance-content">
        <span class="focal">0.00</span>元
      </div>
      <div class="title">
        <span>我的余额</span>
      </div>
    </div>
    <div class="coupon">
      <div class="coupon-content">
        <span class="focal">0</span>个
      </div>
      <div class="title">
        <span>我的优惠</span>
      </div>
    </div>
    <div class="point">
      <div class="point-content">
        <span class="focal">0</span>分
      </div>
      <div class="title">
        <span>我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileAccount"
  }
</script>

<style scoped>
  .profile-account {
    display: flex;
    align-items: center;
    height: 70px;
    padding-bottom: 5px;
    font-size: 12px;
    text-align: center;
    color: #aaa;
    background-color:#fff;
  }

  .profile-account > div{
    flex:1
  }
  .balance  ,.coupon {
    border-right: 1px solid #eee;
  }
  .focal {
    color: #e17357;
    font-size: 20px;
    font-weight: 700;
  }
  .title{
    padding-top:6px;
   }
</style>
