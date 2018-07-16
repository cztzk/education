// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// 引入axios
import axios from 'axios';
Vue.prototype.$http = axios;

// 引入mint-ui组件插件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.min.css';

// main.js 引入并使用
import base from './assets/common/js/base';
Vue.prototype.GLOBAL = base;

// 引入icon图标
import icon from './assets/icon/iconfont.css'

// 引入Vuex
import store from "./store/store"

// 轮播图插件
import wcSwiper from 'wc-swiper';
import 'wc-swiper/style.css';
Vue.use(wcSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
