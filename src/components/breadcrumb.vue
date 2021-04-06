<template>
  <div>
    <template v-if="type === 'product'">
      <section class="breadcrumb">
        <div class="breadcrumb__content container">
          <h2 class="breadcrumb__h1">New Arrivals</h2>
          <nav>
            <ol class="breadcrumb__ol">
              <li class="breadcrumb__item"><router-link class="breadcrumb__a" to="/">Home</router-link></li>
              <li class="breadcrumb__item"><router-link class="breadcrumb__a" to="/product">Men</router-link></li>
              <li class="breadcrumb__item">New arrivals</li>
            </ol>
          </nav>
        </div>
      </section>
    </template>

    <template v-if="type === 'single'">
      <section class="breadcrumb">
        <div class="breadcrumb__content container">
          <h2 class="breadcrumb__h1">New Arrivals</h2>
          <nav>
            <ol class="breadcrumb__ol">
              <li class="breadcrumb__item"><router-link class="breadcrumb__a" to="/">Home</router-link></li>
              <li class="breadcrumb__item"><router-link class="breadcrumb__a" to="/product">{{collection}}</router-link></li>
              <li class="breadcrumb__item">{{name}}</li>
            </ol>
          </nav>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
  export default {
    name: "breadcrumb",
    props: {
      type: {type: String},
      collection: {type: String},
      name: {type: String}
    }
  }
</script>

<style lang="sass">

</style>