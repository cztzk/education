import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import addorder from '@/pages/addorder'
import order from '@/pages/order'
import comment from '@/pages/comment'
import user from '@/pages/user'
import product from '@/pages/product'
import productDetail from '@/pages/productDetail'
import personalInfo from '@/pages/personalInfo'
import changeInfo from '@/pages/changeInfo'
import addr from '@/pages/addr'
import changeaddr from '@/pages/changeaddr'
import coupon from '@/pages/coupon'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'home',
      component: index
    }, 
    {
      path: '/product',
      name: 'product',
      component: product
    },  
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/addorder',
      name: 'addorder',
      component: addorder
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: personalInfo
    },
    {
      path: '/addr',
      name: 'addr',
      component: addr
    }, 
    {
      path: '/changeaddr',
      name: 'changeaddr',
      component: changeaddr
    },  
    {
      path: '/changeInfo',
      name: 'changeInfo',
      component: changeInfo
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    },
    {
      path:"*",
      redirect:"/index"
    }
  ]
})
