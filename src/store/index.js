import Vue from 'vue';
import Vuex from 'vuex';

import alphabet from './modules/alphabet';
import adding from './modules/adding';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alphabet,
    adding
  }
});
