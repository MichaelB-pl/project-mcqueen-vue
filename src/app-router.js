import Vue from 'vue';
import Router from 'vue-router';

import Menu from './components/menu/Menu.vue';
import Alphabet from './components/alphabet/Alphabet.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'menu',
            component: Menu
        },
        {
          path: '/alphabet/:name',
          name: 'alphabet',
          component: Alphabet
        }
    ]
})