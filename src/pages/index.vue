<template>
  <div class="index-wrap">
    <headers :isindex="isindex" :title="headerTitle"></headers>
    <slide-show :slides="slides"></slide-show>
    <mt-cell class="index_title" :title="title"  :value="value" to="/comment" is-link >
    </mt-cell>
    <productList :productid="productid" :isindex="isindex"  :more="more"></productList>
    <environmental></environmental>
    <footers :selected="selected"></footers>
  </div>
</template>
<script>
// 头部组件
import headers from '../components/header'
// 轮播图组件
import slideShow from '../components/slideShow'
// 推荐课程组件
import productList from '../components/productList'
//环境设施组件
import environmental from '../components/environmental'
//底部按钮组件
import footers from '../components/footer'

export default {
  components: {
    headers,
    slideShow,
    productList,
    environmental,
    footers
  },
  data () {
    return {
      headerTitle:"教育",
      isindex:true,
      isindex:true,
      selected:0,
      // 轮播图片
      slides: [],
      // banner图请求路径
      slideUrl:this.GLOBAL.url.slideUrl,
      //推荐产品
      productid:15471,
      //推荐产品请求路径
      recommendUrl:this.GLOBAL.url.recommendUrl,
      title:"寒假提升训练班",
      value:"9886条点评",
      pageSize:5,//推荐产品个数
      more:false,
    }
  },
  methods:{
   
  },
  created:function(){
    let that=this;
    this.GLOBAL.getslide("banner",that);
  }
}
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

  .index-wrap {
    padding-bottom: 1.15rem;
    .index_title{
      font-size: 0.52rem;
      color:#333333;
      border-bottom: 0.2rem solid #f5f5f0;
    }
  }
</style>

