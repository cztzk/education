<template>
  <div class="product-wrap">
    <headers :isindex="isindex" :title="headerTitle"></headers>
     <productList :productid="productid" :isindex="isindex"  :more="more"></productList>
    <footers :selected="selected"></footers>
  </div>
</template>
<script>
// 头部组件
import headers from "../components/header";
// 推荐课程组件
import productList from "../components/productList";
//底部按钮组件
import footers from "../components/footer";

export default {
  components: {
    headers,
    productList,
    footers
  },
  data() {
    return {
      headerTitle: "课程列表",
      isindex: false,
      selected: 1,
      // 轮播图片
      slides: [],
      // banner图请求路径
      slideUrl: this.GLOBAL.url.slideUrl,
      //推荐产品
      productid: 15471,
      //推荐产品请求路径
      recommendUrl: this.GLOBAL.url.recommendUrl,
      title: "寒假提升训练班",
      value: "9886条点评",
      isindex: false,
      pageSize: 8, //每页产品的个数
      more: true //判断是否有更多数据
    };
  },
  methods: {
    // 获取推荐产品内容
    getRecommend(data) {
      let that = this;
      let recommendUrl = that.recommendUrl;
      this.$http({
        method: "get",
        url: recommendUrl,
        params: {
          categoryId: data,
          pageSize: that.pageSize
        }
      })
        .then(function(res) {
          //   console.log(res.data.data);
          that.recommend = res.data.data;
          if (res.data.data.length < that.pageSize) {
            that.more = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.getRecommend("15471");
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

.product-wrap {
  padding-bottom: 1.15rem;
}
</style>

