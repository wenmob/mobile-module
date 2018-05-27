import Vue from 'vue'
import Router from 'vue-router'

import Pernation from '@/components/parent/Pernation'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Pernation',
      component: Pernation,
      children: [
        {
          path: '',
          name: 'A',
          component: () => import('@/components/view/A')
        },
        {
          path: '/b',
          name: 'B',
          component: () => import('@/components/view/B')
        },
        {
          path: '/c',
          name: 'C',
          component: () => import('@/components/view/C')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
