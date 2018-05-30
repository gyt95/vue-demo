import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Buy from '@/pages/Buy'
import My from '@/pages/My'
import Mul from '@/pages/Mul'
import Mul2 from '@/pages/Mul2'
import Parent from '@/components/Parent'

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
    },
    {
      path: '/par',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/mul',
      name: 'Mul',
      component: Mul
    },
    {
      path: '/mul2',
      name: 'Mul2',
      component: Mul2
    }
  ]
})
