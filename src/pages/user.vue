<template>
    <div class="user_wrap">
        <headers :isindex="isindex" :title="headerTitle"></headers>
        <div class="islogin" v-if="this.$store.state.islogin" >
            <user-box></user-box>
        </div>
        <div class="nologin" v-else>
            <login></login>
        </div>
        <footers :selected="selected"></footers>
    </div>
</template>
<script>
// 头部组件
import headers from "../components/header";
// 用户信息组件
import userBox from "../components/userBox";
// 登录注册组件
import login from "../components/login";
//底部按钮组件
import footers from "../components/footer";
export default {
  data() {
    return {
      headerTitle: "用户中心",
      isindex: false,
      selected: 3
    };
  },
  computed: {
    getIsLogin: function() {
      return this.$store.state.islogin;
    }
  },
  components: {
    headers,
    userBox,
    login,
    footers
  },
  created: function() {
    // 根据token判断是否登录，已登录修改store
    let token = localStorage.getItem("token");
    if (token != null) {
      this.$store.state.islogin = true;
    } else {
      this.$store.state.islogin = false;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
.user_wrap {
  padding-bottom: 1.15rem;
}
</style>
