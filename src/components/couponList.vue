<template>
    <div class="coupon_list">
        <!-- <coupon-item :type="type"></coupon-item> -->
        <coupon-item :type="item.type" v-for="(item,index) in couponList" :key="index"></coupon-item>
    </div>
</template>
<script>
// 优惠卷分类组件
import couponItem from "../components/couponItem";
export default {
  data() {
    return {
      type: 1,
    };
  },
  props:[
    "couponList"
  ],
  components: {
    couponItem
  },
  methods: {
    
  },
  created: function() {
   
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
.coupon_list {

}
</style>
