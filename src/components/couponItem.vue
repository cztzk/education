<template>
    <div class="coupon_item">
        <div class="coupon_item_class first_box"  v-if="type==0">
            <div class="coupon_item_left">
            </div>
            <div class="coupon_item_right first_box flex_center">
                <div class="coupon_item_img coupon_item_img0">
                    <p>减</p>
                    <h4>满200</h4>
                    <h4>减100</h4>
                </div>
                <div class="coupon_item_info">
                    <h3 class="ellipsis">吉之岛超市</h3>
                    <h2 class="ellipsis2">零门槛代金劵</h2>
                    <p class="text-right">使用 <span class="icon iconfont icon-youjiantou"></span></p>
                    <p class="date">有效期至2017.01.10</p>
                </div>
            </div>
        </div>
        <div class="coupon_item_class first_box" v-if="type==1">
            <div class="coupon_item_left">
            </div>
            <div class="coupon_item_right first_box  flex_center">
                <div class="coupon_item_img coupon_item_img1">
                    <p>￥<span>200</span></p>
                    <p>通用劵</p>
                </div>
                <div class="coupon_item_info">
                    <h3 class="ellipsis">吉之岛超市</h3>
                    <h2 class="ellipsis2">零门槛代金劵</h2>
                    <p class="text-right">使用 <span class="icon iconfont icon-youjiantou"></span></p>
                    <p class="date">有效期至2017.01.10</p>
                </div>
            </div>
        </div>
        <div class="coupon_item_class first_box" v-if="type==2">
            <div class="coupon_item_left">
            </div>
            <div class="coupon_item_right first_box  flex_center">
                <div class="coupon_item_img coupon_item_img2">
                    <p>￥<span>200</span></p>
                    <p>福利卷</p>
                </div>
                <div class="coupon_item_info">
                    <h3 class="ellipsis">吉之岛超市</h3>
                    <h2 class="ellipsis2">零门槛代金劵</h2>
                    <p class="text-right">使用 <span class="icon iconfont icon-youjiantou"></span></p>
                    <p class="date">有效期至2017.01.10</p>
                </div>
            </div>
        </div>
         <div class="coupon_item_class first_box" v-if="type==3">
            <div class="coupon_item_left">
            </div>
            <div class="coupon_item_right first_box  flex_center">
                <div class="coupon_item_img coupon_item_img3">
                    <p>￥<span>10000</span></p>
                    <p>代金劵</p>
                </div>
                <div class="coupon_item_info">
                    <h3 class="ellipsis">吉之岛超市</h3>
                    <h2 class="ellipsis2">零门槛代金劵</h2>
                    <p class="text-right">使用 <span class="icon iconfont icon-youjiantou"></span></p>
                    <p class="date">有效期至2017.01.10</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["type"],
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
.coupon_item {
  .coupon_item_class {
    margin: 0.2rem 0.2rem 0;
    .coupon_item_left {
      background: url("../assets/bai.png");
      width: 0.8rem;
      height: 2.1rem;
      .backgroundSize(100%);
    }
    .coupon_item_right {
      height: 2.1rem;
      background: url("../assets/bg_bai.png");
      .backgroundSize(100%);
    }
    .coupon_item_img {
      margin: 0 0.2rem;
      width: 1.6rem;
      height: 1.6rem;
      text-align: center;
      background: #ff6000;
      &.coupon_item_img1 {
        background: #bf64e5;
      }
      &.coupon_item_img2 {
        background: #3fa4ea;
      }
      &.coupon_item_img3 {
        background: #dfb404;
      }
      p {
        font-size: 0.3rem;
        line-height: 0.5rem;
        color: #fff;
      }
      span {
        font-size: 0.4rem;
      }
      h4 {
        font-size: 0.2rem;
        color: #fff;
        margin-bottom: 0;
        line-height: 0.36rem;
      }
      > p:nth-child(1) {
        padding-top: 0.3rem;
      }
      &.coupon_item_img0 > p:nth-child(1) {
        padding-top: 0.2rem;
      }
    }
    .coupon_item_info {
      h3 {
        font-size: 0.18rem;
        font-weight: normal;
        color: #333;
        margin-bottom: 0.05rem;
      }
      h2 {
        font-size: 0.22rem;
        line-height: 0.26rem;
        font-weight: normal;
        margin-bottom: 0.05rem;
        height: 0.52rem;
        padding-right: 0.03rem;
        color: #333;
        overflow: hidden;
      }
      p {
        font-size: 0.18rem;
        line-height: 0.3rem;
        color: #999;
        margin-bottom: 0.02rem;
        padding-right: 0.3rem;
        height: 0.22rem;
        &.date {
          font-size: 0.16rem;
        }
      }
    }
  }
}
</style>
