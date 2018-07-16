<template>
    <div class="info_wrap">
        <headers :isindex="isindex"  :title="headerTitle"></headers>
        <addr :addlist="addlist"></addr>
    </div>
</template>
<script>
import { MessageBox } from "mint-ui";
// 头部组件
import headers from "../components/header";
// 地址组件
import addr from "../components/addr";
export default {
  data() {
    return {
      headerTitle: "我的地址",
      isindex: false,
      addlist: new Array()
    };
  },
  computed: {},
  methods: {},
  components: {
    headers,
    addr
  },
  created: function() {
    // 根据token判断是否登录，已登录修改store
    let token = localStorage.getItem("token");
    if (token == null) {
      MessageBox.alert("请登录账号，查询用户信息").then(action => {
        this.$router.push({ path: "/user" });
      });
    } else {
      let that = this;
      let data = {
        token: localStorage.getItem("token")
      };
      this.GLOBAL.getAddrList(data, that);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
</style>
