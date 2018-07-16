<template>
    <div class="info_wrap">
        <headers :isindex="isindex" :title="headerTitle"></headers>
        <div class="portrait_box flex_nowrap align_items">
            <img :src="user.portrait" alt="">
            <h4>{{user.nickname}}</h4>
        </div>
        <ul class="info_list">
            <router-link :to="{path:'/changeInfo',query: {type:'name'}}" tag="li" class="justify_box flex_center">
                <span>姓名:</span>
                <span>{{user.name}}</span>
                <b class="icon iconfont icon-youjiantou"></b>
            </router-link>
             <router-link :to="{path:'/changeInfo',query:  {type:'phone'}}" tag="li" class="justify_box flex_center">
                <span>手机:</span>
                <span>{{user.phone}}</span>
                <b class="icon iconfont icon-youjiantou"></b>
            </router-link>
             <router-link :to="{path:'/changeInfo',query:  {type:'email'}}" tag="li" class="justify_box flex_center">
                <span>邮箱:</span>
                <span>{{user.email}}</span>
                <b class="icon iconfont icon-youjiantou"></b>
            </router-link>
            <router-link :to="{path:'/changeInfo',query:  {type:'qq'}}" tag="li" class="justify_box flex_center">
                <span>QQ:</span>
                <span>{{user.qq}}</span>
                <b class="icon iconfont icon-youjiantou"></b>
            </router-link>
            <router-link :to="{path:'/changeInfo',query:  {type:'wx'}}" tag="li" class="justify_box flex_center">
                <span>微信:</span>
                <span>{{user.wx}}</span>
                <b class="icon iconfont icon-youjiantou"></b>
            </router-link>
        </ul>
    </div>
</template>
<script>
import { MessageBox } from "mint-ui";
// 头部组件
import headers from "../components/header";
export default {
  data() {
    return {
      headerTitle: "个人信息",
      isindex: false,
      user: this.GLOBAL.user
    };
  },
  computed: {},
  methods: {},
  components: {
    headers
  },
  created: function() {
    // 根据token判断是否登录，已登录修改store
    let token = localStorage.getItem("token");
    if (token == null) {
      MessageBox.alert("请登录账号，查询用户信息").then(action => {
        this.$router.push({ path: "/user" });
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

.info_wrap {
  padding-bottom: 1.15rem;
  .portrait_box {
    margin: 0 0 0.2rem;
    background: #fff;
    padding: 0.3rem 0.3rem;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
    h4 {
      padding-left: 0.2rem;
    }
  }
  .info_list {
    li {
      background: #fff;
      padding: 0.2rem 0.3rem;
      border-top: 1px solid #ddd;
      &:nth-child(1) {
        border-top: none;
      }
      span {
        font-size: 0.24rem;
        &:nth-child(1) {
          display: block;
          width: 1rem;
        }
      }
    }
  }
}
</style>
