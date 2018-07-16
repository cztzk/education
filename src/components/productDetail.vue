<template>
    <div class="productDetail_cont">
        <div class="productDetail_cont_img">
            <img :src="ImgSrc" alt="">
        </div>
        <mt-cell class="index_title" :title="title"  :value="value" to="/comment" is-link >
        </mt-cell>
        <environmental></environmental>
        <p class="productDetail_cont_btn">
            <router-link :to="{path:'/addorder',query: {id:id}}">立即预定</router-link>
        </p>
    </div>
</template>
<script>
//环境设施组件
import environmental from "../components/environmental";
export default {
  data() {
    return {
      ImgSrc: require("../assets/productDetail_cont_img.png"),
      title: "寒假提升训练班",
      value: "9886条点评"
    };
  },
  props: ["id"],
  components: {
    environmental
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

.productDetail_cont {
  .productDetail_cont_img {
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .index_title {
    font-size: 0.52rem;
    color: #333333;
    border-bottom: 0.2rem solid #f5f5f0;
  }
  .productDetail_cont_btn {
    text-align: center;
    background: #fff;
    a {
      display: inline-block;
      font-size: 0.32rem;
      width: 80%;
      border-radius: 0.15rem;
      padding: 0.2rem 0;
      margin-bottom: 20px;
      color: #fff;
      background: #ef5b5b;
    }
  }
}
</style>
