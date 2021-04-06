import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Product from '../views/Product.vue';
import Single from '../views/SinglePage.vue';
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/single/:id',
    name: 'Single',
    component: Single,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
