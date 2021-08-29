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
      path: '/customer',
      name: 'customer',
      component: () => import(/* webpackChunkName: "about" */ './views/Customer.vue')
    }
  ]
})
