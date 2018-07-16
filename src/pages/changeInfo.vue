<template>
    <div class="info_wrap">
        <headers :isindex="isindex" :title="headerTitle"></headers>
        <div class="info_input flex_nowrap" v-if="type=='name'">
            <label for="name">姓名</label>
            <input type="text" v-model="name"  name="name" >
        </div>
        <div class="info_input flex_nowrap" v-if="type=='phone'">
            <label for="phone">手机</label>
            <input type="tel" v-model="phone"  name="phone" >
        </div>
        <div class="info_input flex_nowrap" v-if="type=='email'">
            <label for="email">邮箱</label>
            <input type="email" v-model="email"  name="email" >
        </div>
        <div class="info_input flex_nowrap" v-if="type=='qq'">
            <label for="qq">qq</label>
            <input type="text" v-model="qq"  name="qq" >
        </div>
        <div class="info_input flex_nowrap" v-if="type=='wx'">
            <label for="wx">微信</label>
            <input type="text"  v-model="wx" name="wx" >
        </div>
        <div class="page-button-group">
            <mt-button size="large" type="danger" @click="changuserfun1()" v-if="type=='name'">提交</mt-button>
            <mt-button size="large" type="danger" @click="changuserfun2()" v-if="type=='phone'">提交</mt-button>
            <mt-button size="large" type="danger" @click="changuserfun3()" v-if="type=='email'">提交</mt-button>
            <mt-button size="large" type="danger" @click="changuserfun4()" v-if="type=='qq'">提交</mt-button>
            <mt-button size="large" type="danger" @click="changuserfun5()" v-if="type=='wx'">提交</mt-button>
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
      headerTitle: "修改信息",
      isindex: false,
      type: this.$route.query.type,
      user: this.GLOBAL.user,
      name: this.GLOBAL.user.name,
      phone: this.GLOBAL.user.phone,
      email: this.GLOBAL.user.email,
      qq: this.GLOBAL.user.qq,
      wx: this.GLOBAL.user.wx
    };
  },
  computed: {},
  methods: {
    // 修改vuex的属性值
    changuserfun1: function() {
      MessageBox.confirm("确认修改姓名?", "提示")
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            this.GLOBAL.user.name = this.name;
            this.$router.push({
              path: "personalInfo"
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    },
    changuserfun2: function() {
      MessageBox.confirm("确认修改手机号")
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            this.GLOBAL.user.phone = this.phone;
            this.$router.push({
              path: "personalInfo"
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    },
    changuserfun3: function() {
      MessageBox.confirm("确认修改邮箱")
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            this.GLOBAL.user.email = this.email;
            this.$router.push({
              path: "personalInfo"
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    },
    changuserfun4: function() {
      MessageBox.confirm("确认修改qq号")
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            this.GLOBAL.user.qq = this.qq;
            this.$router.push({
              path: "personalInfo"
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    },
    changuserfun5: function() {
      MessageBox.confirm("确认修改微信")
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            this.GLOBAL.user.wx = this.wx;
            this.$router.push({
              path: "personalInfo"
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    }
  },
  components: {
    headers
  },
  created: function() {
    // 根据token判断是否登录，已登录修改store
    let token = localStorage.getItem("token");
    if (token == null) {
      MessageBox.alert("请登录账号，查询用户信息").then(action => {
        this.$router.push({ path: "/user" });
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

.info_wrap {
  padding-bottom: 1.15rem;
  .info_input {
    margin: 0.4rem 0;
    height: 1rem;
    background: #fff;
    label {
      padding: 0rem 0.3rem;
      width: 25%;
      font-size: 0.3rem;
      line-height: 1rem;
    }
    input {
      width: 75%;
      border: none;
      font-size: 0.3rem;
    }
  }
  .page-button-group {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
