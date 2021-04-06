<template>
  <section class="subscribe">
    <div class="subscribe__content container">
      <aside class="subscribe__left">
        <p class="subscribe__p">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
          condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
        <h3 class="subscribe__h3">Bin Burhan</h3>
        <h4 class="subscribe__h4">Dhaka, Bd</h4>
        <ul class="subscribe__ul">
          <li><a href="#">
            <div class="subscribe__link"></div>
          </a></li>
          <li><a href="#">
            <div class="subscribe__link"></div>
          </a></li>
          <li><a href="#">
            <div class="subscribe__link"></div>
          </a></li>
        </ul>
      </aside>
      <div class="subscribe__right">
        <h2 class="subscribe__h2">Subscribe</h2>
        <h3 class="subscribe__h3">FOR OUR NEWLETTER AND PROMOTION</h3>
        <form class="subscribe__form" action="#">
          <label for="subscribe-input"></label>
          <input class="subscribe__input" id="subscribe-input" name="subscribe-input"
                 placeholder="Enter Your Email" pattern="\S+@[a-z]+.[a-z]+">
          <button class="subscribe__button">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "subscribe"
  }
</script>

<style scoped>

</style>