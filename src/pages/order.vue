<template>
    <div class="order_wrap">
        <headers :isindex="isindex" :title="headerTitle"></headers>
        <order-list></order-list>
        <footers :selected="selected"></footers>
    </div>
</template>
<script>
import { MessageBox } from "mint-ui";
// 头部组件
import headers from "../components/header";
// 订单列表组件
import orderList from "../components/orderList";
//底部按钮组件
import footers from "../components/footer";
export default {
  data() {
    return {
      headerTitle: "我的订单",
      isindex: false,
      selected: 2
    };
  },
  computed: {},
  methods: {},
  components: {
    headers,
    orderList,
    footers
  },
  created: function() {
    // 根据token判断是否登录，已登录修改store
    let token = localStorage.getItem("token");
    if (token == null) {
      MessageBox.alert("请登录账号，查询更多订单").then(action => {
        this.$router.push({ path: "/user" });
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

.order_wrap {
  padding-bottom: 1.15rem;
}
</style>
