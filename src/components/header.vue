<template>
  <header class="header">
    <div class="header__content container">
      <div class="header__block">
        <router-link to="/" class="header__logo">
          <img src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/logo.png"
               alt="logo">BRAN<span>D</span>
        </router-link>
        <form class="header__form" action="#">
          <details class="form__browse__button">
            <summary class="form__browse symbol">Browse</summary>
            <div class="form__drop">
              <span class="drop__name">Women</span>
              <hr class="drop__hr">
              <ul class="drop__menu">
                <li><router-link to="/product" class="drop__a">Dresses</router-link></li>
                <li><router-link to="/product" class="drop__a">Tops</router-link></li>
                <li><router-link to="/product" class="drop__a">Sweaters/Knits</router-link></li>
                <li><router-link to="/product" class="drop__a">Jackets/Coats</router-link></li>
                <li><router-link to="/product" class="drop__a">Blazers</router-link></li>
                <li><router-link to="/product" class="drop__a">Denim</router-link></li>
                <li><router-link to="/product" class="drop__a">Leggings/Pants</router-link></li>
                <li><router-link to="/product" class="drop__a">Skirts/Shorts</router-link></li>
                <li><router-link to="/product" class="drop__a">Accessories </router-link></li>
              </ul>
              <span class="drop__name">Men</span>
              <hr class="drop__hr">
              <ul class="drop__menu">
                <li><router-link to="/product" class="drop__a">Dresses</router-link></li>
                <li><router-link to="/product" class="drop__a">Tops</router-link></li>
                <li><router-link to="/product" class="drop__a">Sweaters/Knits</router-link></li>
                <li><router-link to="/product" class="drop__a">Jackets/Coats</router-link></li>
                <li><router-link to="/product" class="drop__a">Blazers</router-link></li>
                <li><router-link to="/product" class="drop__a">Denim</router-link></li>
                <li><router-link to="/product" class="drop__a">Leggings/Pants</router-link></li>
              </ul>
            </div>
          </details>
          <label for="header-input"></label>
          <input class="header__form__input" type="text" id="header-input" name="header-input"
                 placeholder="Search for Item..." pattern="\S+[А-яа-я]" v-model="filter">
          <router-link class="header__form__button" :to="{ name: 'Product', query: { inquiry: filter }}"><i class="fa fa-search"></i></router-link>
        </form>
      </div>
      <div class="header__block">
        <cartDrop :key="cartDropRender"/>
        <account :key="accountRender" />
      </div>
    </div>
  </header>
</template>

<script>
  import cartDrop from '../components/cartDrop.vue';
  import account from "../components/account.vue";

  export default {
    name: "siteHeader",
    components: {
      'cartDrop': cartDrop,
      'account': account
    },

    data() {
      return {
        filter: null,
      }
    },

    computed: {
      accountRender() {
        return this.$store.getters['account/accountRender'];
      },
      cartDropRender() {
        return this.$store.getters['cart/cartRender'];
      }
    }

    // watch: {
    //   '$route' (to) {
    //     console.log(to);
    //     // this.loadItems(this.count, this.page, this.$router.currentRoute.query.inquiry);
    //   }
    // },
  }
</script>

<style lang="sass">

</style>