<template>
  <div class="footer container">
    <div class="footer__content">
      <div class="footer__about">
        <router-link to="/" class="footer__logo">
          <img class="footer__logo__img"
               src="https://raw.githubusercontent.com/Akseonov/static/main/psd_1/img/logo.png" alt="logo">BRAN<span
          class="footer__logo_d">D</span>
        </router-link>
        <p class="footer__p">Objectively transition extensive data rather than cross functional solutions.
          Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly
          syndicate
          an expanded array of processes and cross-unit partnerships. </p>
        <p class="footer__p footer__p_bot">Efficiently plagiarize 24/365 action items and focused
          infomediaries.
          Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
        </p>
      </div>
      <div class="footer__company">
        <span class="footer__span">Company</span>
        <nav>
          <ul class="footer_ul">
            <li class="footer_li"><router-link to="/" class="footer__list">Home</router-link></li>
            <li class="footer_li"><router-link to="/product" class="footer__list">Shop</router-link></li>
            <li class="footer_li"><router-link to="/" class="footer__list">About</router-link></li>
            <li class="footer_li"><router-link to="/" class="footer__list">How It Works</router-link></li>
            <li class="footer_li"><router-link to="/" class="footer__list">Contact</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="footer__inform">
        <span class="footer__span">Information</span>
        <nav>
          <ul class="footer_ul">
            <li class="footer_li"><router-link to="/" class="footer__list">Tearms & Condition</router-link></li>
            <li class="footer_li"><router-link to="/" class="footer__list">Privacy Policy</router-link></li>
            <li class="footer_li"><router-link to="/" class="footer__list">How to Buy</router-link></li>
            <li class="footer_li"><router-link to="/" class="footer__list">How to Sell</router-link></li>
            <li class="footer_li"><router-link to="/" class="footer__list">Promotion</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="footer__shop">
        <span class="footer__span">SHOP CATEGORY</span>
        <nav>
          <ul class="footer_ul">
            <li class="footer_li"><router-link to="/product" class="footer__list">Men</router-link></li>
            <li class="footer_li"><router-link to="/product" class="footer__list">Women</router-link></li>
            <li class="footer_li"><router-link to="/product" class="footer__list">Child</router-link></li>
            <li class="footer_li"><router-link to="/product" class="footer__list">Apparel</router-link></li>
            <li class="footer_li"><router-link to="/product" class="footer__list">Brows All</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "siteFooter"
  }
</script>

<style scoped>

</style>