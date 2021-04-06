<template>
	<div class="header__cart__block">
		<img @click="changeVisible" class="header__cart" src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/cart.svg" alt="cart">
		<div class="cart__drop" id="cart__drop" v-show="visible">
			<div class="cart__drop__list">
				<item
					v-for="item of items"
					type="cartDrop"
					:key="item.product_id"
					:item="item"
					@remove="removeItem"
				/>
			</div>
			<div class="cart__total">
				<p class="cart__total__price">TOTAL</p>
				<p class="cart__total__price">${{ total }}.00</p>
			</div>
			<router-link class="cart__button_a" to="/checkout">Checkout</router-link>
			<router-link class="cart__button_a" to="/cart">Go to cart</router-link>
		</div>
	</div>
</template>

<script>
	import item from './item.vue';

	export default {
		name: "cartDrop",

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
      },
      visible() {
        return this.$store.getters['cart/visible'];
      },
      visibleAccount() {
        return this.$store.getters['account/visible'];
      },
    },

		methods: {
      removeItem(itemId) {
        this.$store.dispatch({
          type: 'cart/removeItem',
          itemId: itemId,
          amount: -1,
          token: localStorage.getItem('jwt'),
        });
      },

			changeVisible() {
				if (this.visibleAccount) {
					this.$store.commit('account/changeVisible');
					this.$store.commit('cart/changeVisible');
				} else {
					this.$store.commit('cart/changeVisible');
				}
			}
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