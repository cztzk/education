<template>
    <div class="change_addr_wrap">
        <headers :isindex="isindex"  :title="headerTitle"></headers>
        <div class="form_box">
            <div class="input_box flex_nowrap flex_center">
               <label for="name">姓名：</label>
               <input type="text" name="name"  v-model="addlist.linkMan" placeholder="收货人姓名">
            </div>
            <div class="input_box flex_nowrap flex_center">
               <label for="mobile">电话：</label>
               <input type="text" name="mobile" v-model="addlist.mobile" placeholder="联系电话">
            </div>
            <div class="input_box flex_nowrap flex_center">
               <label for="address">地址：</label>
               <input type="text" name="address" v-model="addlist.address" placeholder="详细地址">
            </div>
        </div>
        <div class="footer_btn">
            <p @click="saveAddrFun" v-if="id!=null">确定</p>
            <p @click="addAddrFun" v-else>确定</p>
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
      headerTitle: "收货地址",
      isindex: false,
      id: null, //判断第几个地址，null时为新增
      addlist: new Array(), //相关地址数据集合
      issave: false, //是否可以保存新的地址
      isadd: false //是否可以新增新地址
    };
  },
  computed: {},
  methods: {
    saveAddrFun: function() {
      let that = this;
      if (
        that.addlist.linkMan != "" &&
        that.addlist.address != "" &&
        that.addlist.mobile != ""
      ) {
        let reg = /^[1][3][0-9]{9}$/gi;
        let str = that.addlist.mobile;
        if (!reg.test(str)) {
          MessageBox.alert("请输入正确的手机号码!", "提示");
        } else {
          let _data = {
            id: that.id,
            token: localStorage.getItem("token"),
            address: that.addlist.address,
            linkMan: that.addlist.linkMan,
            mobile: that.addlist.mobile
          };
          this.GLOBAL.updateAddr(_data, that);
          MessageBox.alert("地址新增成功，返回上一页")
            .then(action => {
              if (action == "confirm") {
                //确认的回调
                history.back(-1);
              }
            })
            .catch(err => {
              if (err == "cancel") {
                //取消的回调
              }
            });
        }
      } else {
        MessageBox.alert("请确认信息填写完整!", "提示");
      }
    },
    addAddrFun: function() {
      let that = this;
      if (
        that.addlist.linkMan != "" &&
        that.addlist.address != "" &&
        that.addlist.mobile != ""
      ) {
        let reg = /^[1][3][0-9]{9}$/gi;
        let str = that.addlist.mobile;
        if (!reg.test(str)) {
          MessageBox.alert("请输入正确的手机号码!", "提示");
        } else {
          let _data = {
            token: localStorage.getItem("token"),
            provinceId: 1,
            cityId: 1,
            districtId: 1,
            linkMan: that.addlist.linkMan,
            address: that.addlist.address,
            mobile: that.addlist.mobile,
            code: "521000",
            isDefault: false
          };
          this.GLOBAL.addAddr(_data, that);
          MessageBox.alert("地址新增成功，返回上一页")
            .then(action => {
              if (action == "confirm") {
                //确认的回调
                history.back(-1);
              }
            })
            .catch(err => {
              if (err == "cancel") {
                //取消的回调
              }
            });
        }
      } else {
        MessageBox.alert("请确认信息填写完整!", "提示");
      }
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
      // 根据id判断新增或修改
      this.id = this.$route.query.id;
      // id==null 即新增地址
      if (this.id != null) {
        // that.addlist=addrList;
        let id = parseInt(that.id);
        let _data = {
          token: token,
          id: id
        };
        console.log(_data);
        this.GLOBAL.detailAddr(_data, that);
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
.change_addr_wrap {
  .input_box {
    border-top: 1px solid #ddd;
    background: #fff;
    padding: 0.3rem 0.2rem;
    *:nth-child(1) {
      border-top: none;
    }
    label {
      width: 15%;
      font-size: 0.24rem;
    }
    input {
      width: 85%;
      outline: none;
      border: none;
      font-size: 0.24rem;
    }
  }
  .footer_btn {
    width: 80%;
    margin: 0.4rem auto 0;
    p {
      color: #fff;
      background: #ef4f4f;
      font-size: 0.34rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      display: block;
      .radius(0.2rem);
    }
  }
}
</style>
