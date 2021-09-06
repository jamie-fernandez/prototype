import Vue from 'vue'
import Router from 'vue-router'
import Ledger from './views/Ledger.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ledger',
      component: Ledger,
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./views/Customer/Add.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('./views/Customer/Edit.vue')
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
