<template>
    <div class="coupon">
        <headers :isindex="isindex"  :title="headerTitle"></headers>
        <ul class="coupon_tab flex_nowrap text-center">
          <li :class="tabActive==0?'active':''" @click="togglefun(0)">全部</li>
          <li :class="tabActive==1?'active':''" @click="togglefun(1)">未使用</li>
          <li :class="tabActive==2?'active':''" @click="togglefun(2)">已使用</li>
          <li :class="tabActive==3?'active':''" @click="togglefun(3)">已过期</li>
          <li :style="{left:tabActive*25+'%'}"></li>
        </ul>
        <div class="coupon_cont">
          <coupon-list v-if="tabActive==0" :couponList="couponList[0]" keep-alive></coupon-list>
          <coupon-list v-if="tabActive==1" :couponList="couponList[1]" keep-alive></coupon-list>
          <div class="text-center" v-if="tabActive==2" style="margin-top:20px;">未有接口</div>
          <coupon-list v-if="tabActive==3" :couponList="couponList[2]"  keep-alive></coupon-list>
        </div>
    </div>
</template>
<script>
import { MessageBox } from "mint-ui";
// 头部组件
import headers from "../components/header";
// 优惠卷组件
import couponList from "../components/couponList";
export default {
  data() {
    return {
      headerTitle: "优惠卷",
      isindex: false,
      tabActive: 0, //判断第几个tab活动及cont显示
      couponList: new Array()
    };
  },
  computed: {},
  methods: {
    togglefun: function(index) {
      this.tabActive = index;
      
    },
    getCoupon: function(index) {
      let that = this;
      let data = {
        token: localStorage.getItem("token")
      };
      if (index != 0) {
        data.status = index - 1;
      }
      console.log(data);
      this.GLOBAL.getMycoupon(data, that,index);
    }
  },
  components: {
    headers,
    couponList
  },
  created: function() {
    // 根据token判断是否登录，已登录修改store
    let token = localStorage.getItem("token");
    if (token == null) {
      MessageBox.alert("请登录账号，查询用户信息").then(action => {
        this.$router.push({ path: "/user" });
      });
    } else {
      this.getCoupon(0);
      this.getCoupon(1);
      this.getCoupon(2);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
.coupon_tab {
  background: #fff;
  position: relative;
  li {
    width: 25%;
    line-height: 0.8rem;
    font-size: 0.3rem;
    .transition(left,0.5s,linear);
    &.active {
      color: #b34141;
    }
    &:last-child {
      position: absolute;
      left: 0;
      bottom: 0;
      background: #b34141;
      height: 1px;
    }
  }
}
.coupon {
}
</style>
