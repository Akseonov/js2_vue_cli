import {getItems} from "../../utils/requests";

export default {
  namespaced: true,

  state: {
    url: '/api/catalog',
    items: [],
    pages: [],
    page: 1,
    perPage: 9,
    filter: '',
  },

  getters: {
    items: (state) => {
      return state.items;
    },
    pages: (state) => {
      return state.pages;
    },
    url: (state) => {
      return state.url;
    },
    page: (state) => {
      return state.page;
    },
    perPage: (state) => {
      return state.perPage;
    },
    filter: (state) => {
      return state.filter;
    }
  },

  mutations: {
    setItems: (state, value) => {
      state.items = value;
    },
    setPages: (state, value) => {
      let pages = [];

      for (let i = 1; i <= value; i++) {
        pages.push(i);
      }

      state.pages = pages;
    },
    setPage: (state, value) => {
      state.page = value;
    },
    setPerPage: (state, value) => {
      state.perPage = value;
    },
    setFilter: (state, value) => {
      state.filter = value;
    },
  },

  actions: {
    getItems(context) {
      let query = {
        count: context.getters['perPage'],
        page: context.getters['page'],
      };
      if (context.getters['filter']) {
        query.filter = context.getters['filter']
      }
      context.commit('setUrl', query, { root: true });
      let localUrl = `${context.getters['url']}${context.rootGetters.url}`;
      getItems(localUrl)
        .then(data => {
          context.commit('setItems', data.items);
          context.commit('setPages', data.pages);
        });
      // if (context.getters['filter']) {
      //   getItems(`${context.getters['url']}?count=${context.getters['perPage']}&page=${context.getters['page']}&filter=${context.getters['filter']}`)
      //     .then(data => {
      //       context.commit('setItems', data.items);
      //       context.commit('setPages', data.pages);
      //     });
      // } else {
      //   getItems(`${context.getters['url']}?count=${context.getters['perPage']}&page=${context.getters['page']}`)
      //     .then(data => {
      //       context.commit('setItems', data.items);
      //       context.commit('setPages', data.pages);
      //     });
      // }
    },

    setAllStates(context, arg) {
      context.commit('setPerPage', arg.count);
      context.commit('setPage', arg.page);
      context.commit('setFilter', arg.filter);
      context.dispatch('getItems');
    },
  }
}