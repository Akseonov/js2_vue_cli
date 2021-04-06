<template>
  <div>
    <breadcrumb type="single" :collection="item.collection" :name="item.name"/>
    <div class="slider">
      <a href="#" class="arrow_left" @click.prevent="sliderNext('left')"></a>
      <img class="slider__img" :src="slider[currentSlider]" alt="slider">
      <a href="#" class="arrow_right" @click.prevent="sliderNext('right')"></a>
    </div>
    <div class="product__description container">
      <h3 class="product__description__h3">{{item.collection}} COLLECTION</h3>
      <h1 class="product__description__h1">{{item.name}}</h1>
      <div class="product__description__text">
        {{item.description}}
      </div>
      <div class="product__description__box">
        <p class="product__description__box__p">MATERIAL: <span>{{item.material}}</span></p>
        <p class="product__description__box__p">DESIGNER: <span>{{item.designer}}</span></p>
      </div>
      <p class="product__description__price">${{item.price}}</p>
      <hr class="product__description__hr">
      <div class="product__description__choose">
        <div class="product__description__choose__b">
          <p class="product__description__choose__p">CHOOSE COLOR</p>
          <details class="product__description__choose__details">
            <summary class="product__description__choose__summary product__description__choose__symbol">Red
            </summary>
            <div class="products__drop__3">
              <div class="products__drop__item1">
                Green
              </div>
              <div class="products__drop__item2">
                Blue
              </div>
            </div>
            _
          </details>
        </div>
        <div class="product__description__choose__b">
          <p class="product__description__choose__p">CHOOSE SIZE</p>
          <details class="product__description__choose__details">
            <summary class="product__description__choose__summary1 product__description__choose__symbol1">XXL
            </summary>
            <div class="products__drop__3">
              <div class="products__drop__item3">
                XL
              </div>
              <div class="products__drop__item3">
                L
              </div>
              <div class="products__drop__item3">
                M
              </div>
              <div class="products__drop__item3">
                S
              </div>
              <div class="products__drop__item3">
                XS
              </div>
              <div class="products__drop__item3">
                XXS
              </div>
            </div>
          </details>
        </div>
        <div class="product__description__choose__b">
          <p class="product__description__choose__p">QUANTITY</p>
          <label for="quantity"></label>
          <input class="product__description__choose__input" name="quantity" id="quantity" type="text" placeholder="2"
                 pattern="\S+[1-100]">
        </div>
      </div>
      <a href="#" class="product__description__button">Add to Cart</a>
    </div>
    <div class="you-may-like container">
      <h1 class="you-may-like__h1">you may like also</h1>
      <div class="you-may-like__cont">
        <item
          v-for="item of items"
          type="like"
          :key="item.id"
          :item="item"
          @add="addItem"
        />
      </div>
    </div>
    <sales type="single"/>
  </div>
</template>

<script>
  import breadcrumb from '../components/breadcrumb.vue';
  import sales from '../components/sales.vue';
  import item from '../components/item.vue';
  import {getItems} from "../utils/requests";

  export default {
    name: "Single",
    components: {
      breadcrumb,
      sales,
      item
    },

    data() {
      return {
        url: '/api/catalog',
        count: 4,
        page: 1,
        item: {},
        sliderCount: 0,
        currentSlider: 0,
        slider: [],
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
        });
      },

      sliderNext(side) {
        if (side === 'left') {
          if (this.currentSlider === 0) {
            this.currentSlider = this.sliderCount - 1;
          } else {
            this.currentSlider--;
          }
        }
        if (side === 'right') {
          if (this.currentSlider === this.sliderCount - 1) {
            this.currentSlider = 0;
          } else {
            this.currentSlider++;
          }
        }
      }
    },

    watch: {
      '$route' (to) {
        getItems(`${this.url}/${to.params.id}`)
          .then(item => {
            this.item = item;
            this.slider = item.slider;
            this.sliderCount = item.slider.length;
          });
      }
    },

    mounted() {
      getItems(`${this.url}/${this.$route.params.id}`)
        .then(item => {
          this.item = item;
          this.slider = item.slider;
          this.sliderCount = item.slider.length;
        });

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