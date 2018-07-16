<template>
  <div class="product_detail_warp">
    <headers :isindex="isindex" :title="headerTitle"></headers>
   <productDetail :id="id"></productDetail>
  </div>
</template>
<script>
// 头部组件
import headers from "../components/header";
// 产品详情组件
import productDetail from "../components/productDetail";

export default {
  components: {
    headers,
    productDetail
  },
  data() {
    return {
      id: null, //获得产品id,
      isindex: false,
      headerTitle: "课程详情"
    };
  },
  methods: {},
  created: function() {
    let id = this.$route.query.id;
    this.id = id;
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
</style>

