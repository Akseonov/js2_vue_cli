<template>
  <div>
    <template v-if="type === 'catalog'">
      <article class="feature__item">
        <router-link :to="{ name: 'Single', params: { id: item.id }}">
          <img :src="item.img" alt="feature_item">
        </router-link>
        <div class="feature__info">
          <router-link class="feature__info__a" :to="{ name: 'Single', params: { id: item.id}}">{{item.name}}
          </router-link>
          <h4 class="feature__h4">${{item.price}}</h4>
        </div>
        <div>
          <a href="#" class="feature__a" @click.prevent="$emit('add', item)">Add to Cart</a>
        </div>
      </article>
    </template>

    <template v-if="type === 'cartDrop'">
      <div class="cart__prod">
        <div class="cart__prod__min">
          <img :src="item.img" class="cart__prod__img" alt="cart_prod">
          <div class="prod_block">
            <p class="prod__name">{{item.name}}</p>
            <rating
              :rating="item.rating"
              :id="item.product_id"
            />
            <p class="prod__price">{{item.amount}} x ${{item.price}}</p>
          </div>
          <i class="fa fa-times-circle remove-cart" @click.prevent="$emit('remove', item.product_id)"></i>
        </div>
        <hr class="cart__hr">
      </div>
    </template>

    <template v-if="type === 'cartMain'">
      <article class="shopping-cart__item">
        <div class="shopping-cart__box1">
          <div class="shopping-cart__box1__img">
            <img class="shopping-cart__img" :src="item.img" alt="products_item">
          </div>
          <div class="shopping-cart__box">
            <h2 class="shopping-cart__h2">{{item.name}}</h2>
            <p class="shopping-cart__box1__p0"><span class="shopping-cart__box1__span">Color:</span> Red</p>
            <p class="shopping-cart__box1__p1"><span class="shopping-cart__box1__span">Size:</span> Xll</p>
          </div>
        </div>
        <div class="shopping-cart__box2 shopping-cart__center">
          <p class="shopping-cart__box1__p2">${{item.price}}</p>
        </div>
        <div class="shopping-cart__box3 shopping-cart__center">
          <label>
            <input class="shopping-cart__box1__input"
                   type="number"
                   :value="item.amount"
                   pattern="\S+[1-100]"
                   @change.prevent="$emit('change', $event, item.product_id)"
            >
          </label>
        </div>
        <div class="shopping-cart__box4 shopping-cart__center">
          <p class="shopping-cart__box1__p3">FREE</p>
        </div>
        <div class="shopping-cart__box5 shopping-cart__center">
          <p class="shopping-cart__box1__p2">{{item.price * item.amount}}</p>
        </div>
        <div class="shopping-cart__box6 shopping-cart__center">
          <i class="fa fa-times-circle shopping-cart__box6__i" @click.prevent="$emit('remove', item.product_id)"></i>
        </div>
      </article>
    </template>

    <template v-if="type === 'product'">
      <article class="products__feature__item">
        <router-link :to="{ name: 'Single', params: { id: item.id }}">
          <img :src="item.img" alt="products_item">
        </router-link>
        <div class="feature__info">
          <router-link class="feature__info__a" :to="{ name: 'Single', params: { id: item.id }}">{{item.name}}</router-link>
          <h4 class="feature__h4">${{item.price}}</h4>
        </div>
        <div>
          <a href="#" class="feature__a" @click.prevent="$emit('add', item)">Add to Cart</a>
        </div>
        <div>
          <a href="#" class="feature__a_2"></a>
        </div>
        <div>
          <a href="#" class="feature__a_3"></a>
        </div>
      </article>
    </template>

    <template v-if="type === 'like'">
      <article class="feature__item">
        <router-link :to="{ name: 'Single', params: { id: item.id }}">
          <img :src="item.img" alt="you_may_like">
        </router-link>
        <div class="feature__info">
          <router-link class="feature__info__a" :to="{ name: 'Single', params: { id: item.id }}">{{item.name}}</router-link>
          <h4 class="feature__h4">${{item.price}}</h4>
        </div>
        <div class="feature__add">
          <a href="#" class="feature__a" @click.prevent="$emit('add', item)">Add to Cart</a>
        </div>
      </article>
    </template>
  </div>
</template>

<script>
  import rating from "./rating.vue";

  export default {
    name: "item",
    components: {
      rating,
    },

    props: {
      type: {type: String},
      item: {type: Object},
    },
  }
</script>

<style lang="sass">

</style>