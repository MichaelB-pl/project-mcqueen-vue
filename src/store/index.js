import Vue from 'vue';
import Vuex from 'vuex';

import alphabet from './modules/alphabet';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alphabet
  }
});
