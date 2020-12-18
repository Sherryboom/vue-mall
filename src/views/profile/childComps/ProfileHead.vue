<template>
  <div class="profile-head">
    <div class="avatar">
      <img src="~/assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="account">
      <p>登录/注册</p>
      <p><img src="~/assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span></p>
    </div>
    <div class="more">
      <img src="~/assets/img/profile/arrow.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileHead"
  }
</script>

<style scoped>
  .profile-head {
    display: flex;
    align-items: center;
    height: 80px;
    background-color: #f090a2;
  }

  .avatar {
    width: 80px;
    text-align: center;
  }

  .avatar img {
    width: 65px;
    height: 65px;
  }

  .account {
    flex: 1;
    font-size: 12px;
    line-height: 20px;
  }

  .account img {
    float: left;
    width: 20px;
    height: 20px;
  }

  .more {
    width: 30px;
    text-align: center;
  }

  .more img {
    width: 15px;
  }

</style>
