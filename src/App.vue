<template>
  <div id="app">
    <div class="top">
      <notification />
      <siteHeader />
      <siteNav />
      <router-view/>
      <subscribe />
      <siteFooter />
    </div>
    <copyright />
  </div>
</template>

<script>
  import siteHeader from './components/header.vue';
  import siteNav from './components/nav.vue';
  import subscribe from './components/subscribe.vue';
  import siteFooter from './components/footer.vue';
  import copyright from './components/copyright.vue';
  import notification from './components/notification.vue';

  export default {
    name: "app",
    components: {
      'siteHeader': siteHeader,
      'siteNav': siteNav,
      'subscribe': subscribe,
      'siteFooter': siteFooter,
      'copyright': copyright,
      'notification': notification,
    },
  }
</script>

<style lang="sass">
</style>
