<template>
    <div class="order_list"> 
        <div class="order_tab flex_nowrap">
            <mt-button size="small" v-for="(item,index) in tab" :key="index" @click.native.prevent="active = item.prevent,activeIndex=index" :class="active==item.prevent?'active':''">{{item.title}}</mt-button>
            <div class="order_tab_mask" :style="{ left: activeIndex*20 + '%' }"></div>
        </div>
        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                <mt-tab-container-item id="tab-container1" >
                    <div class="order_item" v-for="(item,index) in container[0]" :key="index">
                        <div class="order_item_head justify_box  flex_center">
                            <div class="order_item_head_img">
                                <img src="../assets/evaluate.jpg" alt="">
                            </div>
                            <div class="order_item_head_cont">
                                <h4>美术基础课程</h4>
                                <h5 class="newcolor5">{{item.dateAdd}}</h5>
                            </div>
                            <div class="order_item_head_price text-right">
                                <p class="newcolor1">￥{{item.amountReal/item.goodsNumber}}</p>
                                <h6>{{item.goodsNumber}}</h6>
                            </div>
                        </div>
                        <div class="order_item_cont ">
                            <h3 class="newcolor5">留言：{{item.remark}}</h3>
                            <h3>共{{item.goodsNumber}}件商品，合计￥{{item.amountReal}}(运费:￥0)</h3>
                        </div>
                        <div class="order_item_foot text-right flex_nowrap">
                            <router-link :to="{path:'/productDetail'}" >课程详情</router-link>
                            <router-link :to="{path:'/comment'}" >评价</router-link>
                        </div>
                    </div>
                    <h2 v-if="ismore[0]" @click="getMoreOrder(0)">加载更多</h2>
                    <h1 v-else >没有更多数据！</h1>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <div class="order_item" v-for="(item,index) in container[1]" :key="index">
                        <div class="order_item_head justify_box  flex_center">
                            <div class="order_item_head_img">
                                <img src="../assets/evaluate.jpg" alt="">
                            </div>
                            <div class="order_item_head_cont">
                                <h4>美术基础课程</h4>
                                <h5 class="newcolor5">{{item.dateAdd}}</h5>
                            </div>
                            <div class="order_item_head_price text-right">
                                <p class="newcolor1">￥{{item.amountReal/item.goodsNumber}}</p>
                                <h6>{{item.goodsNumber}}</h6>
                            </div>
                        </div>
                        <div class="order_item_cont ">
                            <h3 class="newcolor5">留言：{{item.remark}}</h3>
                            <h3>共{{item.goodsNumber}}件商品，合计￥{{item.amountReal}}(运费:￥0)</h3>
                        </div>
                        <div class="order_item_foot text-right flex_nowrap">
                            <router-link :to="{path:'/productDetail'}" >课程详情</router-link>
                            <router-link :to="{path:'/comment'}" >评价</router-link>
                        </div>
                    </div>
                    <h2 v-if="ismore[1]" @click="getMoreOrder(1)">加载更多</h2>
                    <h1 v-else >没有更多数据！</h1>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                    <div class="order_item" v-for="(item,index) in container[2]" :key="index">
                        <div class="order_item_head justify_box  flex_center">
                            <div class="order_item_head_img">
                                <img src="../assets/evaluate.jpg" alt="">
                            </div>
                            <div class="order_item_head_cont">
                                <h4>美术基础课程</h4>
                                <h5 class="newcolor5">{{item.dateAdd}}</h5>
                            </div>
                            <div class="order_item_head_price text-right">
                                <p class="newcolor1">￥{{item.amountReal/item.goodsNumber}}</p>
                                <h6>{{item.goodsNumber}}</h6>
                            </div>
                        </div>
                        <div class="order_item_cont ">
                            <h3 class="newcolor5">留言：{{item.remark}}</h3>
                            <h3>共{{item.goodsNumber}}件商品，合计￥{{item.amountReal}}(运费:￥0)</h3>
                        </div>
                        <div class="order_item_foot text-right flex_nowrap">
                            <router-link :to="{path:'/productDetail'}" >课程详情</router-link>
                            <router-link :to="{path:'/comment'}" >评价</router-link>
                        </div>
                    </div>
                    <h2 v-if="ismore[2]" @click="getMoreOrder(2)">加载更多</h2>
                    <h1 v-else >没有更多数据！</h1>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container4">
                    <div class="order_item" v-for="(item,index) in container[3]" :key="index">
                        <div class="order_item_head justify_box  flex_center">
                            <div class="order_item_head_img">
                                <img src="../assets/evaluate.jpg" alt="">
                            </div>
                            <div class="order_item_head_cont">
                                <h4>美术基础课程</h4>
                                <h5 class="newcolor5">{{item.dateAdd}}</h5>
                            </div>
                            <div class="order_item_head_price text-right">
                                <p class="newcolor1">￥{{item.amountReal/item.goodsNumber}}</p>
                                <h6>{{item.goodsNumber}}</h6>
                            </div>
                        </div>
                        <div class="order_item_cont ">
                            <h3 class="newcolor5">留言：{{item.remark}}</h3>
                            <h3>共{{item.goodsNumber}}件商品，合计￥{{item.amountReal}}(运费:￥0)</h3>
                        </div>
                        <div class="order_item_foot text-right flex_nowrap">
                            <router-link :to="{path:'/productDetail'}" >课程详情</router-link>
                            <router-link :to="{path:'/comment'}" >评价</router-link>
                        </div>
                    </div>
                    <h2 v-if="ismore[3]" @click="getMoreOrder(3)">加载更多</h2>
                    <h1 v-else >没有更多数据！</h1>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container5">
                    <div class="order_item" v-for="(item,index) in container[4]" :key="index">
                        <div class="order_item_head justify_box  flex_center">
                            <div class="order_item_head_img">
                                <img src="../assets/evaluate.jpg" alt="">
                            </div>
                            <div class="order_item_head_cont">
                                <h4>美术基础课程</h4>
                                <h5 class="newcolor5">{{item.dateAdd}}</h5>
                            </div>
                            <div class="order_item_head_price text-right">
                                <p class="newcolor1">￥{{item.amountReal/item.goodsNumber}}</p>
                                <h6>{{item.goodsNumber}}</h6>
                            </div>
                        </div>
                        <div class="order_item_cont ">
                            <h3 class="newcolor5">留言：{{item.remark}}</h3>
                            <h3>共{{item.goodsNumber}}件商品，合计￥{{item.amountReal}}(运费:￥0)</h3>
                        </div>
                        <div class="order_item_foot text-right flex_nowrap">
                            <router-link :to="{path:'/productDetail'}" >课程详情</router-link>
                            <router-link :to="{path:'/comment'}" >评价</router-link>
                        </div>
                    </div>
                    <h2 v-if="ismore[4]" @click="getMoreOrder(4)">加载更多</h2>
                    <h1 v-else >没有更多数据！</h1>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tab: [
        {
          title: "全部",
          prevent: "tab-container1"
        },
        {
          title: "待支付",
          prevent: "tab-container2"
        },
        {
          title: "待发货",
          prevent: "tab-container3"
        },
        {
          title: "待收货",
          prevent: "tab-container4"
        },
        {
          title: "已收货",
          prevent: "tab-container5"
        }
      ],
      active: "tab-container1",
      activeIndex: 0,
      pages: [1, 1, 1, 1, 1], //每个栏目下的第几页
      pageSize: 8, //每页数据的长度
      container: new Array(), //订单数据数组
      ismore: [true, true, true, true, true] //判断是否具有更多数据
    };
  },
  created: function() {
    // 订单状态，-1 已关闭 0 待支付 1 已支付待发货 2 已发货待确认 3 确认收货待评价 4 已评价
    let that = this;
    let token = localStorage.getItem("token");
    if (token != null) {
      let data1 = {
        token: token,
        page: that.pages[0],
        pageSize: that.pageSize
      };
      let data2 = {
        token: token,
        page: that.pages[1],
        status: 0,
        pageSize: that.pageSize
      };
      let data3 = {
        token: token,
        page: that.pages[2],
        status: 1,
        pageSize: that.pageSize
      };
      let data4 = {
        token: token,
        page: that.pages[3],
        status: 2,
        pageSize: that.pageSize
      };
      let data5 = {
        token: token,
        page: that.pages[4],
        status: 3,
        pageSize: that.pageSize
      };
      this.GLOBAL.getOrderList(data1, that, 0);
      this.GLOBAL.getOrderList(data2, that, 1);
      this.GLOBAL.getOrderList(data3, that, 2);
      this.GLOBAL.getOrderList(data4, that, 3);
      this.GLOBAL.getOrderList(data5, that, 4);
    }
  },
  methods: {
    // 加载更多
    getMoreOrder: function(index) {
      let that = this;
      that.pages[index] = ++that.pages[index];
      let _data = {
        token: localStorage.getItem("token"),
        page: that.pages[index],
        status: index - 1,
        pageSize: that.pageSize
      };
      if (index == 0) {
        delete _data.status; //删除属性
      }
      this.GLOBAL.getOrderList(_data, that, index);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
.order_list {
  .order_tab {
    font-size: 15px;
    padding-bottom: 0.2rem;
    position: relative;
    .active {
      color: #b34141;
    }
    .mint-button {
      width: 20%;
      background: #fff;
      height: 1rem;
      line-height: 1rem;
      .mint-button-text {
        color: #333;
        font-size: 0.3rem;
      }
    }
    .order_tab_mask {
      position: absolute;
      left: 0;
      bottom: 0.2rem;
      background: #b34141;
      width: 20%;
      height: 2px;
      z-index: 1;
      .transition(left,0.5s,linear);
    }
  }
  .page-tab-container {
    .order_item {
      background: #fff;
      margin-bottom: 0.4rem;
      .order_item_head {
        padding: 0.2rem;
        .order_item_head_img {
          img {
            max-width: 1.6rem;
            display: block;
          }
        }
        .order_item_head_cont {
          padding: 0 0.2rem;
        }
        h4,
        p {
          padding: 0 0 0.6rem;
        }
      }
      .order_item_cont {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 0.2rem;
        h3 {
          line-height: 0.5rem;
        }
      }
      .order_item_foot {
        -webkit-box-pack: flex-end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: flex-end;
        justify-content: flex-end;
        a {
          display: block;
          margin: 0.2rem 0.2rem 0.2rem 0;
          font-size: 0.28rem;
          text-align: center;
          padding: 0.1rem 0.3rem;
          color: #333;
          border: 1px solid #ccc;
          background-clip: padding-box;
          .radius(0.3rem);
        }
      }
    }
    h1 {
      color: #b34141;
      font-size: 0.3rem;
      padding: 0 0 0.4rem;
      text-align: center;
    }
    h2 {
      width: 4rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3rem;
      color: #fff;
      text-align: center;
      margin: 0 auto 0.4rem;
      background: #ef4f4f;
      .radius(0.2rem);
    }
  }
}
</style>
