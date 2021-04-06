<template>
  <div class="account">
    <button class="account__button symbol" @click="changeVisible">My Account</button>
    <div class="account__block" v-show="visible">
      <div v-show="loginOrCheckin === false">
        <form action="#" class="account__form" v-show="logCheck === false">
          <label for="usernameLogin">Username</label>
          <input class="account__input" type="text" id="usernameLogin" v-model="usernameLog">
          <label for="passwordLogin">Password</label>
          <input class="account__input" type="password" id="passwordLogin" v-model="passwordLog">
          <p :class="[account__invalid]">{{errorLog}}</p>
          <a href="#" class="account__register" @click.prevent="loginOrCheckin=!loginOrCheckin">check in</a>
          <button class="account__login" @click.prevent="authorization">login</button>
        </form>
        <div v-show="logCheck === true" class="account__reg">
          <h2 class="account__h2">Welcome home, {{authUsername}}!</h2>
          <a href="#" class="account__register" @click.prevent="logout">logout</a>
        </div>
      </div>
      <div v-show="loginOrCheckin === true">
        <form action="#" class="account__form" v-show="regCheck === false">
          <label for="usernameCheckIn">Username</label>
          <input class="account__input" type="text" id="usernameCheckIn" v-model="usernameReg">
          <p :class="[account__invalid]">{{errorRegUsername}}</p>
          <label for="passwordCheckIn">Password</label>
          <input
            class="account__input"
            type="password"
            id="passwordCheckIn"
            v-model="passwordReg"
            @change="validPassword(passwordReg)"
          >
          <p :class="[passwordIsValid ? account__valid : account__invalid]">{{errorRegPassword}}</p>
          <a href="#" class="account__register" @click.prevent="loginOrCheckin=!loginOrCheckin">login</a>
          <button class="account__login" @click.prevent="registration">check in</button>
        </form>
        <div v-show="regCheck === true" class="account__reg">
          <h2 class="account__h2">Congratulations, you are registered!</h2>
          <a href="#" class="account__register" @click.prevent="backToLogin">login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "account",

    data() {
      return {
        passwordLog: "",
        passwordReg: "",
        usernameLog: "",
        usernameReg: "",
        errorRegPassword: "",
        loginOrCheckin: false,
        passwordIsValid: false,
        regCheck: false,
        logCheck: false,
        account__valid: 'account__valid',
        account__invalid: 'account__invalid',
        authUsername: "",
      }
    },

    computed: {
      visible() {
        return this.$store.getters['account/visible'];
      },
      visibleCart() {
        return this.$store.getters['cart/visible'];
      },
      errorRegUsername() {
        return this.$store.getters['account/errorRegUsername'];
      },
      errorLog() {
        return this.$store.getters['account/errorLog'];
      }
    },

    methods: {
      changeVisible() {
        if (this.visibleCart) {
          this.$store.commit('cart/changeVisible');
          this.$store.commit('account/changeVisible');
        } else {
          this.$store.commit('account/changeVisible');
        }
      },

      authorization() {
        if (this.passwordLog.length > 0) {
          this.$store.dispatch({
            type: 'account/login',
            login: this.usernameLog,
            password: this.passwordLog,
          })
            .then(res => {
              if (res.auth) {
                localStorage.setItem('jwt', res.token);
                localStorage.setItem('username', res.user.usernameReg);
                localStorage.setItem('id', res.user.id);
                this.$store.commit('account/accountRender');
                this.$store.commit('cart/cartRender');
                this.authUsername = res.user.usernameReg;
                this.logCheck = true;
                this.$store.commit('account/setErrorLog', '');
              } else {
                localStorage.removeItem('jwt');
                localStorage.removeItem('username');
                localStorage.removeItem('id');
                this.$store.commit('account/setErrorRegUsername', res.err);
              }
          })
            .catch(() => {
              localStorage.removeItem('jwt');
              localStorage.removeItem('username');
              localStorage.removeItem('id');
            });
        } else {
          this.$store.commit('account/setErrorRegUsername', 'Enter password');
        }
      },

      logout(code) {
        this.$store.dispatch('logout', code, { root: true });
        this.$store.commit('cart/cartRender');
        this.logCheck = false;
      },

      registration() {
        if (this.passwordIsValid) {
          this.$store.dispatch({
            type: 'account/postUser',
            id: 0,
            password: this.passwordReg,
            username: this.usernameReg
          })
            .then(res => {
                  if (res.status) {
                    console.log('User registered', res);
                    this.$store.commit('account/setError', "");
                    this.usernameReg = "";
                    this.password = "";
                    this.errorRegPassword = "";
                    this.regCheck = !this.regCheck;
                  }
                })
            .catch(res => {
                  console.log('Server err', res);
                  this.$store.commit('account/setError', "Such username already exists.");
            });
        }
      },

      validPassword(password) {
        if (this.checkPassword(password)) {
          this.errorRegPassword = "Password is valid";
          this.passwordIsValid = true;
        } else {
          this.errorRegPassword = "Password must contain lowercase letters, uppercase letters and numbers";
          this.passwordIsValid = false;
        }
      },

      checkPassword(password) {
        let s_letters = "qwertyuiopasdfghjklzxcvbnm";
        let b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM";
        let digits = "0123456789";
        let valid = false;
        let is_s = false;
        let is_b = false;
        let is_d = false;
        for (let i = 0; i < password.length; i++) {
          if (s_letters.indexOf(password[i]) !== -1) {
            is_s = true;
          } else if (b_letters.indexOf(password[i]) !== -1) {
            is_b = true;
          } else if (digits.indexOf(password[i]) !== -1) {
            is_d = true;
          }
        }
        if (is_s && is_b && is_d) {
          valid = true;
        }
        return valid;
      },

      backToLogin() {
        this.loginOrCheckin = !this.loginOrCheckin;
        this.regCheck = !this.regCheck;
      },
    },

    mounted() {
      if (localStorage.getItem('jwt')) {
        this.logCheck = true;
        this.authUsername = localStorage.getItem('username');
      }
    }
  }
</script>

<style lang="sass">

</style>