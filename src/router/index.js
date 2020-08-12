import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Buy from '@/pages/Buy'
import My from '@/pages/My'
import Mul from '@/pages/Mul'
import Mul2 from '@/pages/Mul2'
import Watch from '@/pages/watch'
import Copy from '@/pages/copy'
import Loop from '@/pages/loop'
import Cascader from '@/pages/Cascader'
import Parent from '@/components/Parent'
import DateP from '@/pages/datePicker.vue'
import Zoom from '@/pages/zoom.vue'
import Table from '@/pages/Table.vue'
import myTable from '@/pages/myTable.vue'
import MixinsDemo from '@/pages/MixinsDemo.vue'

import attrs from '@/pages/communicate1/attrs.vue'
import provide from '@/pages/communicate2/provide.vue'

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
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/copy',
      name: 'Copy',
      component: Copy
    },
    {
      path: '/loop',
      name: 'Loop',
      component: Loop
    },
    {
      path: '/cascader',
      name: 'Cascader',
      component: Cascader
    },
    {
      path: '/date',
      name: 'DateP',
      component: DateP
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/mytable',
      name: 'myTable',
      component: myTable
    },
    {
      path: '/mixins',
      name: 'MixinsDemo',
      component: MixinsDemo
    },
    {
      path: '/attrs',
      name: 'attrs',
      component: attrs
    },
    {
      path: '/provide',
      name: 'provide',
      component: provide
    }
  ]
})
