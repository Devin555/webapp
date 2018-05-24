import Vue from 'vue'
import Router from 'vue-router'


import Main from '@/pages/Main'
// 首页
import Home from '@/pages/home/Home'
import Homesearch from '@/pages/home/homenext/Homesearch'
import Shopfood from '@/pages/home/homenext/shopfood'
//附件
import Recent from '@/pages/recent/Recent'
//逛一逛
import Guang from '@/pages/guang/Guang'
//订单
import Order from '@/pages/order/Order'
//我的
import Mine from '@/pages/Mine'
//登录
import Signin from '@/pages/Signin'

Vue.use(Router)

export default new Router({
   routes: [
      {
            path:"/",
            redirect:"/home"
      },
      {
         path: '/',
         component: Main,
         children: [{
               path: '',
               name:'main',
               component: Home
            },
            {
               path: '/home',
               name: 'home',
               component: Home
            },
            {
                  path: '/recent',
                  name: 'recent',
                  component: Recent
               },
            {
               path: '/guang',
               name: 'guang',
               component: Guang
            },
            {
               path: '/order',
               name: 'order',
               component: Order
            },
            {
               path: '/mine',
               name: 'mine',
               component: Mine
            }
         ]
      },
      {
            path: '/signin',
            name: 'signin',
            component: Signin
      },
      {
            path: '/homesearch',
            name: 'homesearch',
            component: Homesearch
      },
      {
            path: '/shopfood',
            name: 'shopfood',
            component: Shopfood
      }
   ]
})
