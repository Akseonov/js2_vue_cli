import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart.js'
import catalog from './modules/catalog.js';
import account from './modules/account.js';
import rating from './modules/rating.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: '',
  },
  getters: {
    url: (state) => {
      return state.url
    }
  },
  mutations: {
    setUrl: (state, value1) => {
      if (value1 === '') {
        state.url = '';
      } else {
        state.url = '?';
        for (const [key, value] of Object.entries(value1)) {
          state.url += `${key}=${value}&`;
        }
        state.url = state.url.slice(0, -1);
      }
    },
  },
  actions: {

  },
  modules: {
    cart,
    catalog,
    account,
    rating,
  }
});
