import Vue from 'vue'
import Router from 'vue-router'
import Ledger from './views/Ledger.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ledger',
      component: Ledger
    },
    {
      path: '/customer/:id',
      name: 'customer',
      component: () => import('./views/Customer.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404.vue')
    }
  ]
})
