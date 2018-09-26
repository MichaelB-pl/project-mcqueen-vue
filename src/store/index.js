import Vue from 'vue';
import Vuex from 'vuex';

import alphabet from './modules/alphabet';
import numbers from './modules/numbers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alphabet,
    numbers
  }
});
