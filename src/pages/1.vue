<template>
    <div class="info_wrap">
        <headers :isindex="isindex"  :title="headerTitle"></headers>
    </div>
</template>
<script>
import { MessageBox } from "mint-ui";
// 头部组件
import headers from "../components/header";
export default {
  data() {
    return {
      headerTitle: "我的订单",
      isindex: false
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
}
</style>
