<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的信息</div>
    </nav-bar>
    <profile-head/>
    <profile-account/>
    <profile-other/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import ProfileHead from "./childComps/ProfileHead";
  import ProfileAccount from "./childComps/ProfileAccount";
  import ProfileOther from "./childComps/ProfileOther";

  export default {
    name: "Category",
    components: {
      NavBar,
      ProfileHead,
      ProfileAccount,
      ProfileOther
    }
  }
</script>

<style scoped>
  .profile{
    height: 100vh;
    background-color: #e0e0e0;
    color: #e0e0e0;
  }
  .profile-nav {
    background-color: #f090a2;
    color: #fff;
  }
</style>
