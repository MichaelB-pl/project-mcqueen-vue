import Vue from 'vue';
import Router from 'vue-router';

import Menu from './views/menu/Menu.vue';
import Alphabet from './views/alphabet/Alphabet.vue';
import Numbers from './views/numbers/Numbers.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app-menu',
            component: Menu
        },
        {
            path: '/alphabet/',
            name: 'alphabet',
            component: Alphabet
        },
        {
            path: '/numbers/',
            name: 'numbers',
            component: Numbers
        }
    ]
})