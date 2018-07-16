import Vue from 'vue';
const url = {
  //banner图  
  slideUrl: '/api/banner/list',
  //推荐产品
  recommendUrl: "/api/shop/goods/list",
  // 产品详情
  productDetail: "/api/shop/goods/detail",
  //评论
  evaluateurl: "/api/comment/list",
  //登录
  loginurl: '/api/user/m/login',
  //注册
  registeredurl: "/api/user/m/register",
  // 订单
  orderurl: "/api/order/list",
  // 地址列表
  addrlist: "/api/user/shipping-address/list",
  // 新增地址
  addaddr: "/api/user/shipping-address/add",
  // 更新地址
  updateaddr: "/api/user/shipping-address/update",
  // 详细地址
  detailaddr: "/api/user/shipping-address/default",
  // 默认地址
  defaultaddr: "/api/user/shipping-address/default",
  // 提交订单
  createorder: "/api/order/create",
  // 支付订单
  payorder: "/api/order/pay",
  // 我的优惠卷
  allcoupon: "/api/discounts/my",
}
const user = {
  nickname: 'k',
  portrait: 'https://cdn.it120.cc/apifactory/2018/06/22/be01e5ecfca894c3aa7154ffec60802c.jpg',
  name: "王俊凯",
  phone: 13666666666,
  qq: 123456,
  email: "136248@qq.com",
  wx: ""
};

// 获取轮播图图片
function getslide(data, that) {
  let slideUrl = url.slideUrl;
  that.$http({
      method: 'get',
      url: slideUrl,
      params: {
        type: data
      }
    })
    .then(function (res) {
      // console.log(res.data.data);
      that.slides = res.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
// 获取推荐产品内容
function getRecommend(data, that) {
  that.$http({
      method: 'get',
      url: url.recommendUrl,
      params: {
        categoryId: data,
        pageSize: that.pageSize,
        recommendStatus: 1, //0为一般产品 1为推荐产品
      }
    })
    .then(function (res) {
      // console.log(res.data.data);
      that.recommend = res.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
// 加载更多课程
function getMoreProduct(data, that) {
  if (that.ismore == true) {
    that.$http({
        method: 'get',
        url: url.recommendUrl,
        params: {
          categoryId: that.productid,
          pageSize: that.pageSize,
        }
      })
      .then(function (res) {
        // console.log(res.data.data);
        ++that.pageSize;
        let arr = that.recommend.concat(res.data.data);
        // console.log(arr);
        that.recommend = arr;
        // res.data.data;
        if (res.data.data.length < that.pageSize) {
          that.ismore = false;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
// 产品详情
function getProductDetail(data,that) {
  that.$http({
      method: 'get',
      url: url.productDetail,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      // console.log(res.data.data.basicInfo);
      that.course = res.data.data.basicInfo;
      //如果剩余人数等于0
      if (that.course.stores <1) {
        console.log(that.course.stores);
        that.noInventory();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 登录
function loginAjaxfun(data, that) {
  that.$http({
      method: 'get',
      url: url.loginurl,
      params: data
    })
    .then(function (res) {
      // console.log(res);
      if (res.status == 200) {
        localStorage.setItem("token", res.data.data.token);
        let token = localStorage.getItem("token");
        that.user = res.data.data;
        that.$store.state.islogin = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
// 注册
function registeredAjaxfun(data, that) {
  that.$http({
      method: 'get',
      url: url.registeredurl,
      params: data
    })
    .then(function (res) {
      // console.log(res);
      that.verification = true
      that.pass.title = "";
    })
    .catch(function (error) {
      console.log(error);
    });
};
// 获取订单信息及加载更多数据
function getOrderList(data, that, index) {
  that.$http({
      method: 'get',
      url: url.orderurl,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      if (res.status == 200) {
        // 判断是否有数据
        // console.log(res.data.data);
        // 没有数据
        if (res.data.code == 404) {
          // 第一次将其改为[]
          if (that.container[index] == undefined) {
            Vue.set(that.container, index, "[]");
          }
          that.ismore[index] = false;
        } else {
          // 第一页
          let obj;
          if (that.container[index] == undefined) {
            obj = res.data.data.orderList;
          } else {
            // 加载更多数据
            obj = that.container[index].concat(res.data.data.orderList);
          }
          Vue.set(that.container, index, obj);
          if (res.data.data.orderList.length < that.pageSize) {
            that.ismore[index] = false;
          }
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 获取所有地址
function getAddrList(data, that) {
  that.$http({
      method: 'get',
      url: url.addrlist,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      // console.log(res.data.data);
      that.addlist = res.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 详细地址
function detailAddr(data, that) {
  that.$http({
      method: 'get',
      url: url.detailaddr,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      console.log(res.data.data);
      console.log("用相关id取回的数据固定为最新的一个地址，需要后台处理");
      that.addlist = res.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 添加地址
function addAddr(data, that) {
  that.$http({
      method: 'get',
      url: url.addaddr,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      // console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 修改地址
function updateAddr(data, that) {
  that.$http({
      method: 'get',
      url: url.updateaddr,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      // console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 默认地址
function defaultAddr(data, that) {
  that.$http({
      method: 'get',
      url: url.defaultaddr,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      that.addlist = res.data.data;
      //未有接口修改默认值，及减轻服务器压力，减少访问
      localStorage.setItem("defaultAddr", JSON.stringify(res.data.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 提交订单
function createorder(data, that) {
  that.$http({
      method: 'post',
      url: url.createorder,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      console.log(res.data.data);
      that.createsuccess();
      that.orderid = res.data.data.id;
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 支付订单
function payorder(data, that) {
  that.$http({
      method: 'post',
      url: url.payorder,
      params: data
    })
    .then(function (res) {
      // 判断是否返回数据正常
      console.log(res.data.code);
      if (res.data.code == 20002) {
        that.balance();
      } else {

      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
function getMycoupon(data,that,index){
  that.$http({
    method: 'post',
    url: url.allcoupon,
    params: data
  })
  .then(function (res) {
    // 判断是否返回数据正常
    // console.log(res.data.data);
    if(res.data.code==0){
      Vue.set(that.couponList, index, res.data.data);
      console.log(that.couponList);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
// 将相关的数据及方法暴露出去
export default {
  url: url,
  user: user,
  getslide,
  getRecommend,
  getMoreProduct,
  loginAjaxfun,
  registeredAjaxfun,
  getProductDetail,
  getOrderList,
  getAddrList,
  detailAddr,
  defaultAddr,
  addAddr,
  updateAddr,
  createorder,
  payorder,
  getMycoupon,
}
