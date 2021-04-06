<template>
  <div>
    <breadcrumb />
    <cartMain :key="cartMainRender"/>
  </div>
</template>

<script>
  import breadcrumb from '../components/breadcrumb.vue';
  import cartMain from '../components/cartMain.vue';

  export default {
    name: "Cart",
    components: {
      breadcrumb,
      cartMain,
    },
    computed: {
      cartMainRender() {
        return this.$store.getters['cart/cartRender'];
      }
    }
  }
</script>

<style scoped>

</style>