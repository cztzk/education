<template>
    <div class="user_warp">
        <div :style="{backgroundImage: 'url('+ userBg +')' }"  class="user_box">
            <img :src="user.portrait" alt="">
            <h5>{{user.nickname}}</h5>
            <h6>
                <span>积分</span>
                <span>|</span>
                <span>签到</span>
            </h6>
        </div>
        <ul class="cell">
            <router-link :to="item.url"  class="flex_center  justify_box" tag="li" v-for="(item,key) in cellList" :key="key">
                <span class="icon iconfont" :class="item.icon"></span>
                <h4>{{item.name}}</h4>
                <b class="icon iconfont icon-youjiantou"></b>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      userBg: require("../assets/user-bg.png"),
      user: this.GLOBAL.user,
      cellList: [
        {
          icon: "icon-wode",
          name: "个人信息",
          url: "/personalInfo"
        },
        {
          icon: "icon-shouhuodizhi",
          name: "收货地址",
          url: "/addr"
        },
        {
          icon: "icon-weibiaoti2fuzhi14",
          name: "积分商城",
          url: "#"
        },
        {
          icon: "icon-icon_coupon",
          name: "优惠券",
          url: "/coupon"
        },
        {
          icon: "icon-single",
          name: "订单中心",
          url: "/order"
        }
      ]
    };
  },
  computed: {}
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

.user_box {
  text-align: center;
  padding: 0.5rem 0;
  color: #333;
  .backgroundSize(100%);
  img {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    border-radius: 50%;
  }
  h5 {
    padding: 0.2rem 0;
  }
  h6 {
    span {
    }
    &:nth-child(2) {
      padding: 0 20px;
    }
  }
}
.cell {
  background: #fff;
  li {
    position: relative;
    overflow: hidden;
    padding: 0.2rem 0.3rem;
    font-size: 0.24rem;
    border-bottom: 1px solid #ddd;
    span {
      padding-right: 0.2rem;
    }
  }
}
</style>
