// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
Vue.use(MuseUI)

import data from './mock'
Vue.config.productionTip = false


// 全局路由守卫
router.beforeEach((to, from, next) => {
  const nextRoute = ['order','mine'];
  let isLogin = store.state.isLogin
   if (nextRoute.indexOf(to.name) >= 0) {
      if(!isLogin){
        router.push({path:'signin'})
      }else{
        next()
      }
   } else {
      next()
   }
})

/* eslint-disable no-new */
new Vue({
   el: '#app',
   router,
   store,
   components: {
      App
   },
   template: '<App/>'
})
