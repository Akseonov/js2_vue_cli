<template>
  <div class="prod__rating">
    <font-awesome-icon
      v-for="icon in icons"
      class="prod__icon"
      :icon="[`${icon.style}`, `${icon.name}`]"
      :key="icon.iconCount"
      @click="post(icon.id)"
    />
  </div>
</template>

<script>
  export default {
    name: "rating",
    props: {
      rating: {type: Number},
      id: {type: Number},
    },
    data() {
      return {
        icons: [],
      }
    },

    computed: {
      items() {
        return this.$store.getters['rating/icons'];
      }
    },

    methods: {
      fillArr() {
        this.$store.commit('rating/setRatingCount', this.rating);
        this.$store.commit('rating/setProductId', this.id);
        this.$store.commit('rating/fillArr');
        this.find();
      },
      find() {
        this.icons = this.items.find(el => el.product_id === this.id).content;
      },
      post(rating) {
        this.$store.dispatch({
          type: 'rating/postRating',
          rating: rating,
          product_id: this.id,
          user_id: localStorage.getItem('id'),
          token: localStorage.getItem('jwt'),
        }).then(this.fillArr());
      }
    },

    mounted() {
      this.fillArr();
    }
  }
</script>

<style scoped>

</style>