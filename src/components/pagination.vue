<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="products__pages">
    <div>
      <a
        href="#"
        @click.prevent="reducePage"
      ><i class="fa fa-chevron-left"></i></a>
      <a
        v-for="page of pages"
        v-if="Math.abs(page - currentPage) < 3 || +page === pages.length || +page === 1"
        href="#"
        class="products__pages_numb"
        @click.prevent="changePage(page)"
        :class="{product__active: currentPage === page,
          product__last: (page === pages.length && Math.abs(page - currentPage) > 3),
          product__first:(page === 1 && Math.abs(page - currentPage)) > 3}"
        :key="page"
      >{{page}}</a>
      <a
        href="#"
        @click.prevent="increasePage"
      ><i class="fa fa-chevron-right"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pagination",
    props: {
      pages: {type: Array},
    },

    data() {
      return {
        currentPage: 1,
      }
    },

    methods: {
      changePage(page) {
        this.currentPage = page;
        this.$emit('change-page', page);
      },

      reducePage() {
        if (this.currentPage !== 1) {
          this.currentPage--;
          this.$emit('change-page', this.currentPage);
        }
      },

      increasePage() {
        if (this.currentPage !== this.pages.length) {
          this.currentPage++;
          this.$emit('change-page', this.currentPage);
        }
      },
    }
  }
</script>

<style lang="sass">

</style>