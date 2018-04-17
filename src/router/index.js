import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Buy from '@/components/Buy'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
