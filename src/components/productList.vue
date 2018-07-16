<template>
    <div class="product_list">
        <div class="product_item  flex_nowrap"  v-for="(item,index) in recommend" :key="index">
            <div class="product_item_img">
                <img :src="item.pic" :alt="item.videoId">
            </div>
            <div class="product_item_info">
                <p class="ellipsis">{{item.name}}</p>
                <h6 class="ellipsis">{{item.characteristic}}</h6>
                <h1 class="ellipsis">{{item.minPrice|updataPrice}}</h1>
            </div>
            <div class="product_item_btn">
                <mt-button size="small" type="danger" @click="todetail(index)">预定</mt-button>
            </div>
        </div>
        <div class="btn" v-if="!isindex">
            <p v-if="!more">没有更多数据！</p>
            <div class="prodct_btn" v-else>
                <mt-button type="danger" size="large" @click="getmoreproductfun">点击加载更多</mt-button>
            </div>
        </div>
        <div class="prodct_btn"  v-else>
            <mt-button type="danger" size="large" @click="toProduct">查看更多</mt-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ismore: true,
      pageSize: 8,
      page: 1,
      recommend: []
    };
  },
  props: ["productid", "isindex", "more"],
  filters: {
    updataPrice: function(value) {
      return "￥" + parseFloat(isNaN(value) ? 0 : value).toFixed(2);
    }
  },
  methods: {
    // 跳转相应的详情页面
    todetail: function(index) {
      let that = this;
      let id = that.recommend[index].id;
      // console.log(id);
      this.$router.push({
        path: "productDetail",
        query: {
          id: id
        }
      });
    },
    // 跳转至课程列表页
    toProduct: function() {
      this.$router.push({
        path: "product"
      });
    },
    getmoreproductfun() {
      let that = this;
      let id = this.productid;
      this.GLOBAL.getMoreProduct(id, that);
    }
  },
  created: function() {
    let that = this;
    this.ismore = this.more; //初始化加载更多开关
    let id = this.productid;
    this.GLOBAL.getRecommend(id, that);
  }
};
</script>
<style lang="less" scoped>
.product_list {
  background: #fff;
  .product_item {
    padding: 0.3rem;
    border-bottom: 1px solid #e6e6e6;
    align-items: center;
    justify-content: center;
  }
  .product_item_img {
    flex: 3;
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
  .product_item_info {
    flex: 6;
    padding-left: 0.2rem;
    p {
      font-size: 0.3rem;
      color: #333;
    }
    h6 {
      color: #939393;
      font-size: 0.2rem;
      padding: 0.2rem 0 0.4rem;
    }
    h1 {
      color: #b34141;
      font-size: 0.34rem;
    }
  }
  .product_item_btn {
    flex: 2;
    font-size: 20px;
  }
  & > div > p {
    font-size: 0.3rem;
    color: #ef4f4f;
    text-align: center;
    padding: 0.15rem 0;
    background: #f4f4f4;
  }
  .prodct_btn {
    width: 90%;
    padding: 0.2rem 0;
    margin: 0rem auto;
  }
}
</style>
