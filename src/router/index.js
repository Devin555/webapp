import Vue from 'vue'
import Router from 'vue-router'


import Main from '@/pages/Main'
import Home from '@/pages/home/Home'
import Guang from '@/pages/guang/Guang'
import Mine from '@/pages/Mine'
import Order from '@/pages/order/Order'
import Recent from '@/pages/recent/Recent'
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
      }
   ]
})
