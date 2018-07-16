<template>
    <div class="addr_warp">
        <div class="addr_item" v-for="(item,key) in addlist" :key="key" @click="chooseaddrfun(key)">
            <div class="addr_item_head flex_nowrap flex_center">
                <p>{{item.mobile}}</p>
                <h4>{{item.linkMan}}</h4>
                <router-link :to="{path:'/changeaddr',query: {id:item.id}}" :class="choose?'hide':''"  class="icon iconfont icon-tianxie" ></router-link>
            </div>
            <div class="addr_item_cont">
                <h4>{{item.address}}</h4>
            </div>
            <div class="addr_item_foot"></div>
        </div>
        <div class="addaddr">
            <router-link :to="{path:'/changeaddr',query: {id:null}}"  :class="choose?'hide':''" >新增地址</router-link>
            <p @click="changaddr" v-if="choose" >修改地址</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      choose: false,
      id: this.$route.query.id
    };
  },
  props: ["addlist"],
  created: function() {
    if (this.$route.query.choose) {
      this.choose = true;
    } else {
      this.choose = false;
    }
  },
  methods: {
    // 如果为选择界面时可以点击选择相关地址
    chooseaddrfun: function(key) {
      if (this.choose) {
        // 更改本地默认地址
        localStorage.setItem("defaultAddr", JSON.stringify(this.addlist[key]));
        this.$router.push({
          path: "/addorder",
          query: {
            id: this.$route.query.id
          }
        });
      }
    },
    changaddr: function() {
      this.choose=false;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
.addr_warp {
  margin: 0 0 0.4rem;
  .addr_item {
    background: #fff;
    margin: 0.2rem;
    .addr_item_head {
      padding: 0.2rem;
      p {
        width: 30%;
      }
      h4 {
        width: 60%;
      }
      a {
        width: 10%;
        text-align: right;
      }
    }
    .addr_item_cont {
      padding: 0 0.2rem 0.2rem;
      line-height: 0.5rem;
    }
    .addr_item_foot {
      height: 0.2rem;
      background: url("../assets/address-bg.png");
      .backgroundSize(100%);
    }
  }
  .addaddr {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    p,
    a {
      background: #ef4f4f;
      color: #fff;
      font-size: 0.34rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      display: block;
    }
  }
}
.hide {
  visibility: hidden;
}
</style>