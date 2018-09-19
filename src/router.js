import Vue from 'vue'
import Router from 'vue-router'

import Menu from './views/menu/Menu.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app-menu',
      component: Menu
    }
  ]
})
