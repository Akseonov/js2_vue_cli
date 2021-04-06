import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart.js'
import catalog from './modules/catalog.js';
import account from './modules/account.js';
import rating from './modules/rating.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

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
