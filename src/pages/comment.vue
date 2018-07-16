<template>
  <div class="product_detail_warp">
    <headers :isindex="isindex" :title="headerTitle"></headers>
    <evaluate ></evaluate>
  </div>
</template>
<script>
// 头部组件
import headers from '../components/header'
// 评价组件
import evaluate from '../components/evaluate'

export default {
  components: {
    headers,
    evaluate,
  },
  data () {
    return {
      id:null,//获得产品id,未有接口
      headerTitle:"课程评价",
      isindex:false,
    }
  },
  methods:{
    
  },
  created:function(){
  
  }
}
</script>
<style lang="less" scoped>
  @import url("../assets/common/css/common");

</style>

