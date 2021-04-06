import {postUser, getUser} from "../../utils/requests";

export default {
  namespaced: true,

  state: {
    url: '/api/account',
    visible: false,
    errorRegUsername: "",
    token: localStorage.getItem('jwt'),
    accountRender: 100,
    errorLog: '',
    errorLogout: '',
    notification: false,
  },

  getters: {
    visible: (state) => {
      return state.visible;
    },
    errorRegUsername: (state) => {
      return state.errorRegUsername;
    },
    token: (state) => {
      return state.token;
    },
    accountRender: (state) => {
      return state.accountRender;
    },
    errorLog: (state) => {
      return state.errorLog;
    },
    errorLogout: (state) => {
      return state.errorLogout;
    },
    notification: (state) => {
      return state.notification;
    }
  },

  mutations: {
    changeVisible: (state) => {
      state.visible = !state.visible;
    },
    setErrorRegUsername: (state, value) => {
      state.errorRegUsername = value;
    },
    accountRender: (state) => {
      state.accountRender++;
    },
    setErrorLog: (state, value) => {
      state.errorLog = value;
    },
    trueNotification: (state) => {
      state.notification = true;
    },
    falseNotification: (state) => {
      state.notification = false;
    },
  },

  actions: {
    postUser(context, arg) {
      const newUser = {
        id: arg.id,
        username: arg.username,
        password: arg.password,
      };
      return postUser('/api/register', newUser);
      //   .then(res => {
      //     if (res.status) {
      //       console.log('User registered', res);
      //       context.commit('setError', "");
      //     }
      //   }).catch(res => {
      //     console.log('Server err', res);
      //     context.commit('setError', "Such username already exists.");
      // });
    },

    login(context, arg) {
      const login = {
        username: arg.login,
        password: arg.password,
      };
      return postUser('/api/login', login);
    },

    changeNotification: {
      root: true,
      handler (namespacedContext) {
        namespacedContext.commit('trueNotification');
      }
    },

    logout: {
      root: true,
      handler (namespacedContext) {
        localStorage.removeItem('jwt');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        namespacedContext.commit('accountRender');
      }
    },

    checkToken() {
      if (localStorage.getItem('jwt')) {
        return getUser('/api/', localStorage.getItem('jwt'));
      }
    },
  },
}