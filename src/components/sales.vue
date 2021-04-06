<template>
  <div>
    <template v-if="type === 'index'">
      <div class="sales container">
        <div class="sales__big">
          <img src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/sales_background.jpg"
               alt="sales_background">
          <img class="sales__layer"
               src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/sales_layer.png" alt="sales_layer">
          <div class="sales__text">
            <h3 class="sales__h3">30% <span class="sales__span">OFFER</span></h3>
            <h4 class="sales__h4">FOR WOMEN</h4>
          </div>
        </div>
        <div class="sales__mini">
          <article>
            <h2 class="sales__h2_1">Free Delivery</h2>
            <p class="sales__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
          <article>
            <h2 class="sales__h2_2">Sales & discounts</h2>
            <p class="sales__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
          <article>
            <h2 class="sales__h2_3">Quality assurance</h2>
            <p class="sales__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
        </div>
      </div>
    </template>

    <template v-if="type === 'product' && type === 'single'">
      <div class="sales__prod">
        <div class="sales__mini__cat container">
          <article class="sales__container__cat">
            <img class="sales__korona" src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/sales_korona.svg" alt="">
            <h2 class="sales__h2_cat">Free Delivery</h2>
            <p class="sales__p_cat">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
          <article class="sales__container__cat">
            <img class="sales__car" src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/sales_car.svg" alt="">
            <h2 class="sales__h2_cat">Sales & discounts</h2>
            <p class="sales__p_cat">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
          <article class="sales__container__cat">
            <img class="sales__pros" src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/sales_pros.svg" alt="">
            <h2 class="sales__h2_cat">Quality assurance</h2>
            <p class="sales__p_cat">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </article>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "sales",
    props: {
      type: {type: String},
    }
  }
</script>

<style lang="sass">

</style>