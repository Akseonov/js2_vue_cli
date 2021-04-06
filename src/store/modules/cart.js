import {getItems, postItem, putItem, deleteItem} from "../../utils/requests";

export default {
  namespaced: true,

  state: {
    url: '/api/cart',
    items: [],
    total: 0,
    visible: false,
    cartRender: 0,
    // ratingCount: 0,
    // icons: [],
    // id: 1,
    // iconCount: 1,
  },

  getters: {
    items: (state) => {
      return state.items;
    },
    total: (state) => {
      return state.total;
    },
    url: (state) => {
      return state.url;
    },
    visible: (state) => {
      return state.visible;
    },
    cartRender: (state) => {
      return state.cartRender;
    }
  },

  mutations: {
    setItems: (state, value) => {
      state.items = value;
    },
    setTotal: (state, value) => {
      state.total = value;
    },
    addTotal: (state, price) => {
      state.total += Number(price);
    },
    subTotal: (state, price) => {
      state.total -= Number(price);
    },
    changeVisible: (state) => {
      state.visible = !state.visible;
    },
    cartRender: (state) => {
      state.cartRender++;
    },
  },

  actions: {
    addItem: (context, arg) => {
      let items = context.getters['items'];
      let find = items.find(el => (el.product_id === arg.item.id) || (el.product_id === arg.item.product_id));

      let query = '';
      if (localStorage.getItem('id')) {
        query = {
          id: localStorage.getItem('id'),
        }
      }
      context.commit('setUrl', query, { root: true });


      if (!find) {
        const obj = {
          product_id: arg.item.id,
          name: arg.item.name,
          price: arg.item.price,
          amount: 1,
          img: arg.item.img,
          rating: arg.item.rating.total_rating,
        };

        let localUrl = `${context.getters['url']}${context.rootGetters.url}`;

        postItem(localUrl, obj, arg.token)
          .then(res => {
            if (res.status === 401 && res.code === "invalid_token") {
              context.dispatch('logout', res.code , { root: true });
              context.dispatch('changeNotification', res.code , { root: true });
              this.$store.commit('account/setErrorLog', res.err);
              context.commit('cartRender');
            } else {
              items.push(obj);
              context.commit('setItems', items);
              context.commit('addTotal', arg.item.price);
            }
          });
      } else {
        let localUrl = `${context.getters['url']}/${find.product_id}${context.rootGetters.url}`;
        putItem(localUrl, arg.amount, arg.token)
          .then(res => {
            if (res.status === 401 && res.code === "invalid_token") {
              context.dispatch('logout', res.code , { root: true });
              context.dispatch('changeNotification', res.code , { root: true });
              context.commit('cartRender');
            } else {
              find.amount += arg.amount;
              context.commit('setItems', items);
              context.commit('addTotal', arg.item.price * arg.amount);
            }
          });
      }
    },

    removeItem(context, arg) {
      let items = context.getters['items'];
      let find = items.find(el => el.product_id === arg.itemId);

      let query = '';
      if (localStorage.getItem('id')) {
        query = {
          id: localStorage.getItem('id'),
        }
      }
      context.commit('setUrl', query, { root: true });
      let localUrl = `${context.getters['url']}/${find.product_id}${context.rootGetters.url}`;

      if (find.amount + arg.amount >= 1) {
        putItem(`${localUrl}`, arg.amount, arg.token)
          .then(res => {
            if (res.status === 401 && res.code === "invalid_token") {
              context.dispatch('logout', res.code , { root: true });
              context.dispatch('changeNotification', res.code , { root: true });
              context.commit('cartRender');
            } else {
              find.amount -= (arg.amount * -1);
              context.commit('setItems', items);
              context.commit('subTotal', find.price * arg.amount * -1);
            }
          });
      } else {
        deleteItem(`${localUrl}`, arg.amount, arg.token)
          .then(res => {
            if (res.status === 401 && res.code === "invalid_token") {
              context.dispatch('logout', res.code , { root: true });
              context.dispatch('changeNotification', res.code , { root: true });
              context.commit('cartRender');
            } else {
              find.amount -= (arg.amount * -1);
              items.splice(items.indexOf(find), 1);
              context.commit('setItems', items);
              context.commit('subTotal', find.price * arg.amount * -1);
            }
          });
      }
    },

    getItems(context, arg) {
      let query = '';
      if (localStorage.getItem('id')) {
        query = {
          id: localStorage.getItem('id'),
        }
      }
      context.commit('setUrl', query, { root: true });
      let localUrl = `${context.getters['url']}${context.rootGetters.url}`;
      getItems(localUrl, arg.token)
        .then(items => {
          if (items.status === 401 && items.code === "invalid_token") {
            context.dispatch('logout', items.code , { root: true });
            context.dispatch('changeNotification', items.code, { root: true });
            context.commit('cartRender');
          } else {
            context.commit('setTotal', items.total);
            context.commit('setItems', items.contents);
          }
        });
    },
  }
};