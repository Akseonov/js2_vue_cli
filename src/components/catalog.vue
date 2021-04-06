<template>
  <section class="feature container">
    <header class="feature__header">Featured Items</header>
    <h2 class="feature__h2">
      Shop for items based on what we featured in this week
    </h2>
    <div class="feature__content" id="feature__content">
      <item
        v-for="item of items"
        type="catalog"
        :key="item.id"
        :item="item"
        @add="addItem"
      />
    </div>
    <div class="feature__button">
      <router-link to="/product" class="button symbol__arrow">Browse All Product</router-link>
    </div>
  </section>
</template>

<script>
  import item from './item.vue';

  export default {
    name: "catalog",
    components: {
      item,
    },

    data() {
      return {
        url: '/api/catalog',
        count: 8,
        page: 1,
      }
    },

    computed: {
      items() {
        return this.$store.getters['catalog/items'];
      },
    },

    methods: {
      addItem(item) {
        this.$store.dispatch({
          type: 'cart/addItem',
          item: item,
          amount: 1,
          token: localStorage.getItem('jwt'),
        });
      },
    },

    mounted() {
      this.$store.dispatch({
        type: 'catalog/setAllStates',
        count: this.count,
        page: this.page,
      });
    }
  }
</script>

<style lang="sass">

</style>