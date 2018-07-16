<template>
    <div class="addr_wrap">
        <headers :isindex="isindex"  :title="headerTitle"></headers>
        <div class="order_head">
            <div class="flex_nowrap addrs">
                <p class="ellipsis">{{addlist.mobile}}</p>
                <h4 class="ellipsis">{{addlist.linkMan}}</h4>
                <router-link :to="{path:'/addr',query: {choose:true,id:id}}">更换地址></router-link>
            </div>
            <h4>{{addlist.address}}</h4>
        </div>
        <p class="addr_bg"></p>
        <div class="order_img flex_nowrap flex_center">
            <img :src="course.pic" alt="">
            <div class="order_info">
                <h2 class="ellipsis">{{course.name}}</h2>
                <h6 class="ellipsis newcolor5">{{course.dateAdd|updateDate}}</h6>
                <p class="newcolor5 ellipsis">{{course.characteristic}}</p>
            </div>
        </div>
        <ul class="order_cont">
            <li>剩余名额：{{this.course.stores}}人</li>
            <li class="flex_nowrap">
                <label for="number">学习人数：</label>
                <input type="text" name="number" v-model="number" @blur="numberfun" class="text-right" onKeyUp="this.value=this.value.replace(/[^\.\d]/g,'');this.value=this.value.replace('.','');">
            </li>
            <li>订购即送文具一套</li>
            <li>共{{integral}}积分，满10000可用</li>
            <li class="flex_center justify_box preferential" @click="topreferential">
                <span>优惠券</span>
                <span class="newcolor5" v-if="ispreferential">（有可用的优惠券）</span>
                <span class="newcolor5" v-else>（没有可用的优惠券）</span>
                <b class="icon iconfont icon-youjiantou"></b>
            </li>
            <li class="msg">
                 <label for="msg">客户留言：</label>
                <input type="text" name="msg" v-model="msg" placeholder="请输入留言">
            </li>
        </ul>
        <ol class="price_ul">
            <li class="first_box">
                <span>商品价格</span>
                <p class="newcolor1 text-right">{{course.minPrice*number |updataPrice}}</p>
            </li>
            <li class="first_box">
                <span>优惠价格</span>
                <p class="newcolor1 text-right">{{preferential |updataPrice}}</p>
            </li>
            <li class="first_box">
                <span>书本费</span>
                <p class="newcolor1 text-right">{{book |updataPrice}}</p>
            </li>
            <li class="first_box">
                <span>订单总价</span>
                <p class="newcolor1 text-right">{{course.minPrice-preferential+book |updataPrice}}</p>
            </li>
        </ol>
        <div class="order_foot justify_box flex_center">
            <span>应付金额:</span>
            <span class="newcolor1">{{course.minPrice*number-preferential+book|updataPrice}}</span>
            <span class="order_btn" @click="creatorder">结算</span>
        </div>
        <div class="pay_box flex_wrap" v-if="iscreate">
          <div>
            <p class="pay_box_head"><span class="newcolor5" @click="cancelfun">取消</span>确认支付</p>
            <h3>{{course.minPrice*number-preferential+book|updataPrice}}</h3>
            <ul class="choose_pay">
              <li class="justify_box flex-center "  @click="choosefun(index)"
               v-for="(item,index) in pay"  :key="index" 
               :class="payactive==index?'active':''">
                <img :src="item.icon" alt="">
                <p>{{item.title}}</p>
              </li>
            </ul>
            <h4 @click="payfun" class="pay_btn">立即付款</h4>
          </div>
        </div>
    </div>
</template>
<script>
import { MessageBox } from "mint-ui";
// 头部组件
import headers from "../components/header";
export default {
  data() {
    return {
      headerTitle: "订单中心",
      isindex: false,
      addlist: new Array(), //相关地址数据集合
      course: new Array(), //相关课程数据集合
      number: 1, //商品个数
      msg: "", //留言
      integral: 1000, //积分d
      preferential: 0, //优惠价
      ispreferential: false, //是否有优惠卷
      book: 60, //书本费
      id: this.$route.query.id,
      iscreate: false,
      orderid: null,
      payactive: 0,
      pay: [
        {
          title: "微信支付",
          icon: require("../assets/icon-weixin.png")
        },
        {
          title: "支付宝支付",
          icon: require("../assets/icon-zhifubao.png")
        }
      ]
    };
  },
  computed: {},
  filters: {
    updateDate: function(value) {
      if (value) {
        return value.substring(0, 10);
      }
    },
    updataPrice: function(value) {
      return "￥" + parseFloat(isNaN(value) ? 0 : value).toFixed(2);
    }
  },
  methods: {
    // 切换支付方式
    choosefun: function(key) {
      this.payactive = key;
    },
    //   跳转优惠界面
    topreferential: function() {
      if (this.ispreferential) {
      }
    },
    getaddr: function() {
      // 判断本地是否具有缓存，更改相关的地址
      // 未有接口，不能修改默认地址
      let that = this;
      if (localStorage.getItem("defaultAddr") != null) {
        //类型转换
        that.addlist = JSON.parse(localStorage.getItem("defaultAddr"));
      } else {
        let data = {
          token: localStorage.getItem("token")
        };
        this.GLOBAL.defaultAddr(data, that);
      }
    },
    // 获取订单详情
    getDetail: function() {
      let that = this;
      let data = {
        id: that.$route.query.id
      };
      this.GLOBAL.getProductDetail(data, that);
    },
    // 人数更改事件
    numberfun: function() {
      if (this.number <= 0) {
        MessageBox.alert("学习人数不得少于一人").then(action => {
          this.number = 1;
        });
      }
      if (this.number > this.course.stores) {
        MessageBox.alert("已超最大值").then(action => {
          this.number = this.course.stores;
        });
      }
    },
    // 提交订单
    creatorder: function() {
      let that = this;
      // 整理订单相关参数
      let defaultAddr = JSON.parse(localStorage.getItem("defaultAddr"));
      let _data = [];
      let _obj = {};
      [_obj.goodsId, _obj.number, _obj.propertyChildIds, _obj.logisticsType] = [
        that.course.id,
        that.number,
        "",
        0
      ];
      _data.push(_obj);
      let data = {
        token: localStorage.getItem("token"),
        address: defaultAddr.address,
        linkMan: defaultAddr.linkMan,
        mobile: defaultAddr.mobile,
        remark: that.msg,
        goodsJsonStr: JSON.stringify(_data)
      };
      this.GLOBAL.createorder(data, that);
    },
    // 判断是否可学习人数大于一
    noInventory: function() {
      this.number = this.course.stores;
      MessageBox.alert("没有足够的名额，请选择其他课程").then(action => {
        this.$router.push({ path: "/index" });
      });
    },
    // 下单成功
    createsuccess: function() {
      MessageBox.confirm("下单成功是否立即支付")
        .then(action => {
          if (action == "confirm") {
            this.iscreate = true;
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
            this.cancelfun();
          }
        });
    },
    // 判断余额是否充足
    balance: function() {
      MessageBox.alert("余额不足，请充值（该后台未有充值接口）").then(action => {
        this.$router.push({
          path:"order"
        })
      });
    },
    // 支付
    payfun: function() {
      let that = this;
      let data = {
        token: localStorage.getItem("token"),
        orderId: that.orderid
      };
      this.GLOBAL.payorder(data, that);
    },
    // 取消支付
    cancelfun: function() {
      this.$router.push({
        path: "order"
      });
    }
  },
  components: {
    headers
  },
  created: function() {
    // 根据token判断是否登录，已登录修改store
    let token = localStorage.getItem("token");
    let that = this;
    if (token == null) {
      MessageBox.alert("请登录账号，查询用户信息").then(action => {
        this.$router.push({ path: "/user" });
      });
    } else {
      this.getaddr();
      this.getDetail();
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
.addr_wrap {
  margin-bottom: 1.2rem;
  .order_head {
    padding: 0.2rem;
    background: #fff;
    & > * {
      line-height: 0.36rem;
      font-size: 0.26rem;
    }
    div {
      p {
        width: 30%;
      }
      h4 {
        width: 50%;
      }
      a {
        width: 20%;
        text-align: right;
      }
    }
    > h4 {
      padding-top: 0.2rem;
    }
  }
  .addr_bg {
    height: 0.2rem;
    background: url("../assets/address-bg.png");
    .backgroundSize(100%);
  }
  .order_img {
    padding: 0.2rem;
    background: #fff;
    img {
      width: 26%;
      height: auto;
      max-width: 40%;
      display: block;
    }
    .order_info {
      padding-left: 0.2rem;
      box-sizing: border-box;
      width: 74%;
      h6 {
        padding: 0.25rem 0;
      }
    }
  }
  .order_cont {
    margin: 0.2rem 0;
    li {
      background: #fff;
      font-size: 0.24rem;
      padding: 0.3rem 0.2rem;
      border-top: 1px solid #ddd;
      &:nth-child(1) {
        border-top: none;
      }
      &.msg {
        margin: 0.2rem 0;
      }
      label {
        width: 30%;
      }
      input {
        width: 70%;
        border: none;
        outline: none;
      }
    }
  }
  .price_ul {
    li {
      background: #fff;
      font-size: 0.24rem;
      padding: 0.2rem 0.2rem;
      &:last-child {
        padding-bottom: 0.6rem;
        border-top: 1px solid #ddd;
      }
    }
  }
  .order_foot {
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    height: 1rem;
    span {
      font-size: 0.3rem;
      &:first-child {
        padding: 0 0.2rem;
      }
      &:last-child {
        padding: 0 0.8rem;
        text-align: center;
        background: #ef5b5b;
        display: block;
        line-height: 1rem;
        color: #fff;
        height: 1rem;
      }
    }
  }
  .pay_box {
    position: fixed;
    color: #333;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    font-size: 0.3rem;
    -webkit-box-align: flex-end;
    -webkit-align-items: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    text-align: center;
    .background_rgba(0,0,0,0.7);
    > div {
      width: 100%;
      background: #fff;
      .pay_box_head {
        background: #f2f2f2;
        padding: 0.2rem 0;
        position: relative;
        span {
          position: absolute;
          left: 0.2rem;
          top: 50%;
          .translateY(-50%);
        }
      }
      h3 {
        margin: 0.4rem 0;
        font-size: 0.6rem;
      }
      .choose_pay {
        li {
          padding: 0.2rem;
          position: relative;
          img {
            width: 30px;
            height: 30px;
            border-radius: 5px;
            margin-right: 5px;
            vertical-align: middle;
          }
          p {
            line-height: 30px;
            font-size: 16px;
            padding-left: 10px;
          }
          &::after {
            content: "";
            position: absolute;
            right: 18px;
            top: 15px;
            color: #fff;
            text-align: center;
            width: 20px;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            border: 1px solid #666;
            background: #fff;
            border-radius: 50%;
            visibility: visible;
          }
          &.active::after {
            content: "√";
            border-color: #ff5757;
            background: #ff5757;
          }
        }
      }
      .pay_btn {
        margin-top: 0.2rem;
        color: #fff;
        padding: 0.3rem 0;
        background: #ef5b5b;
      }
    }
  }
}
</style>
