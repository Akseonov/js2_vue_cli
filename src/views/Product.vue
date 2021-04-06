<template>
  <div class="Product">
    <breadcrumb type="product"/>
    <div class="products container">
      <aside class="products__sidebar">
        <details open class="products__category">
          <summary class="products__category_style symbol__aside_1">Category</summary>
          <nav class="products__category__inside">
            <ul class="products__nav">
              <li><a class="products__nav__a" href="#">Accessories</a></li>
              <li><a class="products__nav__a" href="#">Bags</a></li>
              <li><a class="products__nav__a" href="#">Denim</a></li>
              <li><a class="products__nav__a" href="#">Hoodies & Sweatshirts</a></li>
              <li><a class="products__nav__a" href="#">Jackets & Coats</a></li>
              <li><a class="products__nav__a" href="#">Pants</a></li>
              <li><a class="products__nav__a" href="#">Polos</a></li>
              <li><a class="products__nav__a" href="#">Shirts</a></li>
              <li><a class="products__nav__a" href="#">Shoes</a></li>
              <li><a class="products__nav__a" href="#">Shorts</a></li>
              <li><a class="products__nav__a" href="#">Sweaters & Knits</a></li>
              <li><a class="products__nav__a" href="#">T-Shirts</a></li>
              <li><a class="products__nav__a" href="#">Tanks</a></li>
            </ul>
          </nav>
        </details>
        <details class="products__category">
          <summary class="products__category_style symbol__aside_2">BRAND</summary>
          <nav class="products__category__inside">
            <ul class="products__nav">
              <li><a class="products__nav__a" href="#">Accessories</a></li>
              <li><a class="products__nav__a" href="#">Bags</a></li>
              <li><a class="products__nav__a" href="#">Denim</a></li>
              <li><a class="products__nav__a" href="#">Hoodies & Sweatshirts</a></li>
              <li><a class="products__nav__a" href="#">Jackets & Coats</a></li>
              <li><a class="products__nav__a" href="#">Pants</a></li>
            </ul>
          </nav>
        </details>
        <details class="products__category">
          <summary class="products__category_style symbol__aside_3">DESIGNER</summary>
          <nav class="products__category__inside">
            <ul class="products__nav">
              <li><a class="products__nav__a" href="#">Accessories</a></li>
              <li><a class="products__nav__a" href="#">Bags</a></li>
              <li><a class="products__nav__a" href="#">Denim</a></li>
              <li><a class="products__nav__a" href="#">Hoodies & Sweatshirts</a></li>
              <li><a class="products__nav__a" href="#">Jackets & Coats</a></li>
              <li><a class="products__nav__a" href="#">Pants</a></li>
              <li><a class="products__nav__a" href="#">Polos</a></li>
              <li><a class="products__nav__a" href="#">Shirts</a></li>
              <li><a class="products__nav__a" href="#">Shoes</a></li>
              <li><a class="products__nav__a" href="#">Shorts</a></li>
            </ul>
          </nav>
        </details>
      </aside>
      <div class="products__items">
        <div class="products__filter">
          <div class="products__filter__top">
            <div>
              <h1 class="tending__h1">Trending now</h1>
              <div class="trending__conteiner_p">
                <a class="trending__a" href="#">Bohemian</a>
                <a class="trending__a" href="#">Floral</a>
                <a class="trending__a" href="#">Lace</a>
              </div>
              <div class="trending__conteiner_p">
                <a class="trending__a" href="#">Floral</a>
                <a class="trending__a" href="#">Lace</a>
                <a class="trending__a" href="#">Bohemian</a>
              </div>
            </div>
            <div class="products__filter__block">
              <h1 class="tending__h1">Size</h1>
              <div class="trending__conteiner__input">
                <label for="option1"></label>
                <input class="trending__input" type="checkbox" name="option1" id="option1" value="a2" checked>
                <p class="trending__p">xxs</p>
                <label for="option2"></label>
                <input class="trending__input" type="checkbox" name="option2" id="option2" value="a2">
                <p class="trending__p">xs</p>
                <label for="option3"></label>
                <input class="trending__input" type="checkbox" name="option3" id="option3" value="a2">
                <p class="trending__p">s</p>
                <label for="option4"></label>
                <input class="trending__input" type="checkbox" name="option4" id="option4" value="a2">
                <p class="trending__p">m</p>
                <label for="option5"></label>
                <input class="trending__input" type="checkbox" name="option5" id="option5" value="a2">
                <p class="trending__p">l</p>
                <label for="option6"></label>
                <input class="trending__input" type="checkbox" name="option6" id="option6" value="a2">
                <p class="trending__p">xl</p>
                <label for="option7"></label>
                <input class="trending__input" type="checkbox" name="option7" id="option7" value="a2">
                <p class="trending__p">xxl</p>
              </div>
            </div>
            <div>
              <h1 class="tending__h1">Price</h1>
              <img class="products__filter_img" src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/filter__price.png" alt="filter__price">
              <div class="filter__price_flex">
                <p class="filter__price_p">$52</p>
                <p class="filter__price_p">$400</p>
              </div>
            </div>
          </div>
          <div class="products__filter__bottom">
            <div class="products__sort">
              <p class="products__sort_p">Sort By</p>
              <details class="products__details">
                <summary class="products__summary symbol symbol_filter">Name</summary>
                <div class="products__drop">
                  <div class="products__drop__item">
                    Price
                  </div>
                  <div class="products__drop__item">
                    Shows
                  </div>
                </div>
              </details>
            </div>
            <div class="products__sort">
              <p class="products__sort_p">Show</p>
              <details class="products__details_2">
                <summary class="products__summary symbol symbol_filter-2">09</summary>
                <div class="products__drop_2">
                  <div class="products__drop__item">
                    18
                  </div>
                  <div class="products__drop__item">
                    27
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div class="feature__box">
          <item
            v-for="item of items"
            type="product"
            :key="item.id"
            :item="item"
            @add="addItem"
          />
        </div>
        <div class="products__view">
          <pagination
            :pages="pages"
            @change-page="loadPagination"
          />
          <div class="products__button">
            <router-link class="products__button_a" to="/product">View All</router-link>
          </div>
        </div>
      </div>
    </div>
    <sales type="product" />
  </div>
</template>

<script>
  import breadcrumb from '../components/breadcrumb.vue';
  import sales from '../components/sales.vue';
  import item from '../components/item.vue';
  import pagination from '../components/pagination.vue';

  export default {
    name: "Product",
    components: {
      breadcrumb,
      sales,
      item,
      pagination,
    },

    data() {
      return {
        url: '/api/catalog',
        count: 9,
        page: 1
      }
    },

    computed: {
      items() {
        return this.$store.getters['catalog/items'];
      },
      pages() {
        return this.$store.getters['catalog/pages'];
      }
    },

    methods: {
      addItem(item) {
        this.$store.dispatch({
          type: 'cart/addItem',
          item: item,
          amount: 1,
        });
      },

      loadItems(count, page, filter) {
        this.$store.dispatch({
          type: 'catalog/setAllStates',
          count: count,
          page: page,
          filter: filter,
        });
      },

      loadPagination(page) {
        this.page = page;
        this.loadItems(this.count, page);
      }
    },

    watch: {
      '$route' (to) {
        this.page = 1;
        this.loadItems(this.count, this.page, to.query.inquiry);
      }
    },

    mounted() {
      this.loadItems(this.count, this.page, this.$router.currentRoute.query.inquiry);
    }
  }
</script>

<style lang="sass">

</style>