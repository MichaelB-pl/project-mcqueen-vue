import Vue from 'vue';
import Router from 'vue-router';

import MainMenu from './views/MainMenu.vue';
import Alphabet from './views/Alphabet.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/alphabet/',
      name: 'Alphabet',
      component: Alphabet
    }
  ]
})
