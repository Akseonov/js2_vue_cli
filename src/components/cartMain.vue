<template>
  <div class="shopping-cart container">
    <div class="shopping-cart__h">
      <div class="shopping-cart__box1"><p class="shopping-cart__h1">Product Details</p></div>
      <div class="shopping-cart__box2 shopping-cart__center"><p class="shopping-cart__h1">Unite Price</p></div>
      <div class="shopping-cart__box3 shopping-cart__center"><p class="shopping-cart__h1">Quantity</p></div>
      <div class="shopping-cart__box4 shopping-cart__center"><p class="shopping-cart__h1">Shipping</p></div>
      <div class="shopping-cart__box5 shopping-cart__center"><p class="shopping-cart__h1">Subtotal</p></div>
      <div class="shopping-cart__box6 shopping-cart__center"><p class="shopping-cart__h1">ACTION</p></div>
    </div>
    <div class="shopping-cart__items shopping-cart__item_l" id="shopping-cart__items">
      <item
        v-for="item of items"
        type="cartMain"
        :key="item.product_id"
        :item="item"
        @remove="removeItem"
        @change="changeAmount"
      />
    </div>
    <div class="shopping-cart__button">
      <a href="#" class="shopping-cart__a">cLEAR SHOPPING CART</a>
      <a href="#" class="shopping-cart__a">cONTINUE sHOPPING</a>
    </div>
    <div class="shopping-cart__proceed">
      <div class="shopping-cart__proceed_box1">
        <h1 class="shopping-cart_h1">Shipping Adress</h1>
        <details class="shopping-cart__details">
          <summary class="shopping-cart__summary shopping-cart__symbol">Bangladesh</summary>
          <div class="products__drop_cart">
            <div class="products__drop__item_cart">
              Minsk
            </div>
            <div class="products__drop__item_cart">
              Kiev
            </div>
          </div>
        </details>
        <label for="state"></label>
        <input class="shopping-cart__input" id="state" type="text" placeholder="State">
        <label for="zip"></label>
        <input class="shopping-cart__input" id="zip" type="text" placeholder="Postcode / Zip">
        <a href="#" class="shopping-cart__proceed__a">get a quote</a>
      </div>
      <div class="shopping-cart__proceed_box2">
        <h1 class="shopping-cart_h1">coupon discount</h1>
        <p class="shopping-cart_p">Enter your coupon code if you have one</p>
        <label for="state2"></label>
        <input class="shopping-cart__input shopping-cart__input_m" id="state2" type="text" placeholder="State">
        <a href="#" class="shopping-cart__proceed__a">Apply coupon</a>
      </div>
      <div class="shopping-cart__proceed_box3">
        <p class="shopping-cart__proceed_box3_p">Sub total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="shopping-cart__span">${{total}}</span></p>
        <p class="shopping-cart__proceed_box3_p2">GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp; <span class="shopping-cart__span">${{total}}</span></p>
        <hr class="shopping-cart__proceed_box3_hr">
        <a href="#" class="shopping-cart__proceed__box3__a">proceed to checkout</a>
      </div>
    </div>
  </div>
</template>

<script>
  import item from './item.vue';

  export default {
    name: "cartMain",
    components: {
      item,
    },

    data() {
      return {
        url: '/api/cart',
      }
    },

    computed: {
      total() {
        return this.$store.getters['cart/total'];
      },

      items() {
        return this.$store.getters['cart/items'];
      }
    },

    methods: {
      removeItem(itemId) {
        let find = this.items.find(el => el.product_id === itemId);

        this.$store.dispatch({
          type: 'cart/removeItem',
          itemId: itemId,
          amount: find.amount * -1,
          token: localStorage.getItem('jwt'),
        });
      },

      changeAmount(event, id) {
        let find = this.items.find(el => el.product_id === id);

        if (event.target.value < 0) {
          event.target.value = 0;
        }
        if (event.target.value > 999) {
          event.target.value = 999;
        }
        let change = event.target.value - find.amount;

        if (change > 0) {
          this.$store.dispatch({
            type: 'cart/addItem',
            item: find,
            amount: change,
            token: localStorage.getItem('jwt'),
          });
        } else {
          this.$store.dispatch({
            type: 'cart/removeItem',
            itemId: id,
            amount: change,
            token: localStorage.getItem('jwt'),
          });
        }
      },
    },

    mounted() {
      this.$store.dispatch({
        type: 'cart/getItems',
        token: localStorage.getItem('jwt'),
      });
    },
  }
</script>

<style scoped>

</style>