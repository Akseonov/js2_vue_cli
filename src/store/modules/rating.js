import {postItem} from "../../utils/requests";

export default {
  namespaced: true,

  state: {
    url: '/api/rating',
    ratingCount: 0,
    product_id: 0,
    icons: [],
    iconCount: 1,
  },

  getters: {
    url: (state) => {
      return state.url;
    },
    icons: (state) => {
      return state.icons;
    },
  },

  mutations: {
    setRatingCount: (state, value) => {
      state.ratingCount = Math.floor(value * 2);
    },
    setProductId: (state, value) => {
      state.product_id = value;
    },
    fillArr: (state) => {
      let count = 1;
      let id = state.product_id;
      let icons = {
        product_id: id,
        content: []
      };
      for (let i = 1; i <= state.ratingCount; i++) {
        if (i === state.ratingCount) {
          if (!(i%2)) {
            icons.content.push({
              style: "fas",
              name: "star",
              id: count++,
              iconCount: state.iconCount++,
            });
          } else {
            icons.content.push({
              style: "fas",
              name: "star-half-alt",
              id: count++,
              iconCount: state.iconCount++,
            });
          }
        } else {
          if (!(i%2)) {
            icons.content.push({
              style: "fas",
              name: "star",
              id: count++,
              iconCount: state.iconCount++,
            });
          }
        }
      }
      state.ratingCount++;
      for (let i = state.ratingCount + 1; i <= 10; i++) {
        if (!(i%2)) {
          icons.content.push({
            style: "far",
            name: "star",
            id: count++,
            iconCount: state.iconCount++,
          });
        }
      }
      state.icons.push(icons);
    }
  },

  actions: {
    postRating(context, arg) {
      let obj = {
        rating: arg.rating,
        product_id: arg.product_id,
        user_id: arg.user_id,
      };
      postItem(context.getters['url'], obj, arg.token)
        .then(res => {
            if (res.status === 401 && res.code === "invalid_token") {
              context.dispatch('logout', {root: true});
              context.dispatch('changeNotification', { root: true });
            }
          });
    }
  }
};